const API = "http://localhost:3000";
const postsDiv = document.getElementById("posts");

// Redirect to login if user not logged in
const loggedUser = localStorage.getItem("user");
if (!loggedUser) window.location.href = "login.html";

document.getElementById("loggedUser").innerText = loggedUser;

// CREATE POST
async function createPost() {
  const content = document.getElementById("postContent").value.trim();
  if (!content) return alert("Write something!");

  await fetch(`${API}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: loggedUser,
      content
    })
  });

  document.getElementById("postContent").value = "";
  loadPosts();
}

// LOAD POSTS
async function loadPosts() {
  postsDiv.innerHTML = "";

  const res = await fetch(`${API}/posts`);
  const posts = await res.json();

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <h4>${post.user}</h4>
      <p>${post.content}</p>

      <button onclick="likePost('${post._id}')">❤️ ${post.likes || 0}</button>

      <div class="comments">
        ${(post.comments || []).map(c => `<div class="comment">💬 <b>${c.user}</b>: ${c.text}</div>`).join("")}
      </div>

      <input type="text" placeholder="Add a comment" id="comment-${post._id}" />
      <button onclick="commentPost('${post._id}')">Comment</button>
    `;

    postsDiv.appendChild(div);
  });
}

// LIKE POST
// LIKE POST
async function likePost(id) {
  const res = await fetch(`${API}/posts/${id}/like`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: loggedUser })
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message); // e.g., "You already liked this post"
  }

  loadPosts();
}

// COMMENT POST
async function commentPost(id) {
  const input = document.getElementById(`comment-${id}`);
  const text = input.value.trim();
  if (!text) return;

  await fetch(`${API}/posts/${id}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: loggedUser, text })
  });

  input.value = "";
  loadPosts();
}

// Load posts on page load
loadPosts();
