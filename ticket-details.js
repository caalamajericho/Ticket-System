// This file is for future use if you want dynamic data loading based on query string
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ticketId = urlParams.get("id");

  if (ticketId) {
    document.getElementById("ticket-id").textContent = ticketId;
    // You can also fetch more ticket details here if using a backend or JSON
  }
});
