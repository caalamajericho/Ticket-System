// Toggle Sidebar
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Status Dropdown Update Badge
const statusSelect = document.getElementById('statusSelect');
const statusBadge = document.querySelector('.badge.status');

statusSelect.addEventListener('change', function () {
  const selected = this.value.toLowerCase();
  statusBadge.textContent = selected.charAt(0).toUpperCase() + selected.slice(1);
  statusBadge.className = `badge status ${selected}`;
});
