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
  const createTicketBtn = document.querySelector('.create-ticket');
  const submitTicketBtn = document.querySelector('.submit-ticket');

  createTicketBtn?.addEventListener('click', () => {
    alert('Redirecting to Create Ticket page...');
  });

  submitTicketBtn?.addEventListener('click', () => {
    alert('Redirecting to Submit Ticket page...');
  });
});
