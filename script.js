document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  toggleBtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle("active"); // for mobile
    } else {
      sidebar.classList.toggle("hide");   // for desktop
    }
  });

  document.querySelectorAll(".ticket-btn").forEach(button => {
    button.addEventListener("click", () => {
      alert("Do you want to create a ticket?.");
    });
  });
});
