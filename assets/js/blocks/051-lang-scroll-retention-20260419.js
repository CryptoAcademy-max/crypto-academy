(function(){
  if(typeof window === 'undefined' || window.__langScrollRetention20260419) return;
  window.__langScrollRetention20260419 = true;

  var PANEL_IDS = {
    home: 'homePanel',
    start: 'startPanel',
    faq: 'faqPanel',
    safety: 'safetyPanel',
    glossary: 'glossaryPanel',
    sources: 'sourcesPanel',
    updates: 'updatesPanel'
  };

  function isFiniteNumber(value){
    return typeof value === 'number' && isFinite(value);
  }

  function getCurrentScrollY(){
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  function getViewportHeight(){
    return window.innerHeight || document.documentElement.clientHeight || 0;
  }

  function resolvePanelId(page, lesson){
    if(typeof page === 'string' && /^lesson\d+$/.test(page)) return page;
    if(page === 'lesson' && isFiniteNumber(lesson)) return 'lesson' + lesson;
    return PANEL_IDS[page] || 'homePanel';
  }

  function getTargetPanel(state){
    var page = state && state.page ? state.page : (typeof currentPage === 'string' && currentPage ? currentPage : 'home');
    var lesson = state && isFiniteNumber(state.lesson) ? state.lesson : (isFiniteNumber(currentLesson) ? currentLesson : 0);
    return document.getElementById(resolvePanelId(page, lesson));
  }

  function captureLanguageScrollState(){
    var page = typeof currentPage === 'string' && currentPage ? currentPage : 'home';
    var lesson = isFiniteNumber(currentLesson) ? currentLesson : 0;
    var panel = getTargetPanel({ page: page, lesson: lesson });
    var scrollY = getCurrentScrollY();
    var viewportHeight = getViewportHeight();
    var panelTop = panel ? scrollY + panel.getBoundingClientRect().top : 0;
    var panelRange = panel ? Math.max(panel.scrollHeight - viewportHeight, 0) : Math.max(document.documentElement.scrollHeight - viewportHeight, 0);
    var offsetWithinPanel = panel ? Math.max(0, scrollY - panelTop) : scrollY;
    var progress = panelRange > 0 ? Math.min(1, offsetWithinPanel / panelRange) : 0;
    return {
      page: page,
      lesson: lesson,
      scrollY: scrollY,
      panelRange: panelRange,
      offsetWithinPanel: offsetWithinPanel,
      progress: progress
    };
  }

  function restoreLanguageScrollState(state){
    if(!state) return;
    var panel = getTargetPanel(state);
    var viewportHeight = getViewportHeight();
    var targetTop = state.scrollY;
    if(panel){
      var panelTop = getCurrentScrollY() + panel.getBoundingClientRect().top;
      var panelRange = Math.max(panel.scrollHeight - viewportHeight, 0);
      var targetOffset = state.offsetWithinPanel;
      if(state.panelRange > 0 && panelRange > 0){
        targetOffset = panelRange * state.progress;
      }else{
        targetOffset = Math.min(state.offsetWithinPanel, panelRange);
      }
      targetTop = panelTop + targetOffset;
    }
    var maxScroll = Math.max(document.documentElement.scrollHeight - viewportHeight, 0);
    targetTop = Math.max(0, Math.min(Math.round(targetTop), maxScroll));
    window.scrollTo({ top: targetTop, left: 0, behavior: 'auto' });
  }

  function extractRequestedTop(argsLike){
    try{
      if(!argsLike || !argsLike.length) return null;
      if(argsLike.length === 1 && argsLike[0] && typeof argsLike[0] === 'object'){
        if(Object.prototype.hasOwnProperty.call(argsLike[0], 'top')) return Number(argsLike[0].top);
        return null;
      }
      if(argsLike.length >= 2) return Number(argsLike[1]);
    }catch(error){}
    return null;
  }

  function shouldSuppressTopScroll(argsLike){
    if(!window.__langScrollSuppressionCount) return false;
    var requestedTop = extractRequestedTop(argsLike);
    return requestedTop !== null && isFinite(requestedTop) && requestedTop <= 0;
  }

  function withLanguageScrollSuppressed(fn, ctx, args){
    var nativeScrollTo = window.scrollTo;
    window.scrollTo = function(){
      if(shouldSuppressTopScroll(arguments)) return;
      return nativeScrollTo.apply(window, arguments);
    };
    try{
      return fn.apply(ctx, args || []);
    }finally{
      window.scrollTo = nativeScrollTo;
    }
  }

  if(typeof window.showPage === 'function' && !window.showPage.__langScrollRetentionWrapped){
    var originalShowPage = window.showPage;
    var wrappedShowPage = function(){
      if(!window.__langScrollSuppressionCount) return originalShowPage.apply(this, arguments);
      return withLanguageScrollSuppressed(originalShowPage, this, arguments);
    };
    wrappedShowPage.__langScrollRetentionWrapped = true;
    window.showPage = wrappedShowPage;
    try{ showPage = wrappedShowPage; }catch(error){}
  }

  if(typeof window.showLesson === 'function' && !window.showLesson.__langScrollRetentionWrapped){
    var originalShowLesson = window.showLesson;
    var wrappedShowLesson = function(){
      if(!window.__langScrollSuppressionCount) return originalShowLesson.apply(this, arguments);
      return withLanguageScrollSuppressed(originalShowLesson, this, arguments);
    };
    wrappedShowLesson.__langScrollRetentionWrapped = true;
    window.showLesson = wrappedShowLesson;
    try{ showLesson = wrappedShowLesson; }catch(error){}
  }

  function scheduleLanguageScrollRestore(state){
    var restore = function(){
      restoreLanguageScrollState(state);
    };
    if(typeof requestAnimationFrame === 'function'){
      requestAnimationFrame(function(){
        restore();
        requestAnimationFrame(restore);
      });
    }else{
      setTimeout(restore, 0);
      setTimeout(restore, 60);
    }
    setTimeout(restore, 120);
    setTimeout(restore, 280);
  }

  if(typeof window.setLang === 'function' && !window.setLang.__langScrollRetentionWrapped){
    var originalSetLang = window.setLang;
    var wrappedSetLang = function(lang){
      var snapshot = captureLanguageScrollState();
      var released = false;
      window.__langScrollSuppressionCount = (window.__langScrollSuppressionCount || 0) + 1;
      function releaseSuppression(){
        if(released) return;
        released = true;
        window.__langScrollSuppressionCount = Math.max((window.__langScrollSuppressionCount || 1) - 1, 0);
      }
      try{
        return originalSetLang.apply(this, arguments);
      }finally{
        scheduleLanguageScrollRestore(snapshot);
        setTimeout(releaseSuppression, 520);
      }
    };
    wrappedSetLang.__langScrollRetentionWrapped = true;
    window.setLang = wrappedSetLang;
    try{ setLang = wrappedSetLang; }catch(error){}
  }
})();