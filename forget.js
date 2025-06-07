document.getElementById('forgotForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;

  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  // Simulate email sending
  alert(`A reset link has been sent to: ${email}`);
  this.reset();
});
