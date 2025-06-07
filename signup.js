document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');

  document.querySelectorAll('.togglePassword').forEach(button => {
    button.addEventListener('click', () => {
      const input = button.parentElement.querySelector('input');
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      button.textContent = type === 'password' ? '👁' : '🙈';
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    window.location.href = "dashboard.html";
  });
});
