const termsBox = document.getElementById('termsBox');
const agreeBtn = document.getElementById('agreeBtn');

termsBox.addEventListener('scroll', () => {
  const scrolledToBottom = termsBox.scrollTop + termsBox.clientHeight >= termsBox.scrollHeight - 5;
  if (scrolledToBottom) {
    agreeBtn.disabled = false;
  }
});

function handleAgree() {
  window.location.href = 'signup.html'; // Redirect to index.html
}

function handleCancel() {
  window.location.href = 'signup.html'; // Redirect to signup.html
}
