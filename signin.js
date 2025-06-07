document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.textContent = type === 'password' ? '👁' : '🙈';
});

document.getElementById('signinForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Sign in accepted.');
});

document.getElementById("signinForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop actual form submission
  // You can validate email/password here if needed
  window.location.href = "dashboard.html"; // Redirect to index.html
});