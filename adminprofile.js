// Sidebar toggle
document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

// Toggle password visibility
document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});