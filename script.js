let isLogin = true;

function toggleMode() {
  isLogin = !isLogin;
  document.getElementById("title").innerText = isLogin ? "Login" : "Sign Up";
  document.querySelector("button").innerText = isLogin ? "Login" : "Sign Up";
  document.querySelector(".toggle").innerHTML =
    isLogin
      ? `Don't have an account? <span onclick="toggleMode()">Sign up</span>`
      : `Already have an account? <span onclick="toggleMode()">Login</span>`;
  document.getElementById("msg").innerText = "";
}

function handleAuth() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!user || !pass) {
    msg.innerText = "All fields are required!";
    msg.style.color = "red";
    return;
  }

  msg.innerText = isLogin
    ? "Login successful (UI only)"
    : "Account created (UI only)";
  msg.style.color = "green";
}
