document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

document.querySelector(".new-ticket-btn").addEventListener("click", function () {
  window.location.href = "ticket.html";
});
