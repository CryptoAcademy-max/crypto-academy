(function(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mobileToggle = document.getElementById('mobileToggle');
  const syncSidebarState = () => {
    const open = sidebar.classList.contains('open');
    document.body.classList.toggle('sidebar-open', open && window.innerWidth <= 768);
  };
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      requestAnimationFrame(syncSidebarState);
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      syncSidebarState();
    });
  }
  const originalCloseSidebar = window.closeSidebar;
  window.closeSidebar = function(){
    if (typeof originalCloseSidebar === 'function') originalCloseSidebar();
    sidebar.classList.remove('open');
    syncSidebarState();
  };
  const originalShowLesson = window.showLesson;
  if (typeof originalShowLesson === 'function') {
    window.showLesson = function(i){
      originalShowLesson(i);
      sidebar.classList.remove('open');
      syncSidebarState();
    };
  }
  const originalShowPage = window.showPage;
  if (typeof originalShowPage === 'function') {
    window.showPage = function(name){
      originalShowPage(name);
      sidebar.classList.remove('open');
      syncSidebarState();
    };
  }
  window.addEventListener('resize', syncSidebarState);
  syncSidebarState();
})();