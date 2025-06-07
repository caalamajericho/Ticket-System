// Sidebar toggle
document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-theme", this.checked);
});
