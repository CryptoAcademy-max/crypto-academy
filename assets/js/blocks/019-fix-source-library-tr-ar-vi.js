// Clear sourceOverrides for tr, ar, vi so the full 28-item sourceLibrary data is used
(function(){
  if(typeof sourceOverrides !== 'undefined'){
    delete sourceOverrides.tr;
    delete sourceOverrides.ar;
    delete sourceOverrides.vi;
  }
  // Re-render if currently viewing sources
  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined')
    showPage(currentPage || 'home');
})();