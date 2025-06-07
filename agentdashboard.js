const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggleSidebar');

  toggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});
