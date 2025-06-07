document.getElementById("toggleSidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("active");
});

document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Ticket has been submitted successfully!");
});
