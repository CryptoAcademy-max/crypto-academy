(function(){
  if(typeof window === 'undefined' || window.__langSwitchPerformance20260419) return;
  window.__langSwitchPerformance20260419 = true;

  function currentPageKey(){
    return (typeof currentPage === 'string' && currentPage) ? currentPage : 'home';
  }

  function currentLessonIndex(){
    return (typeof currentLesson === 'number' && isFinite(currentLesson)) ? currentLesson : 0;
  }

  function renderPanelByPage(page){
    if(/^lesson\d+$/.test(page)){
      var lessonIndex = currentLessonIndex();
      var lessonPanel = document.getElementById('lesson' + lessonIndex);
      if(lessonPanel && typeof renderLesson === 'function'){
        lessonPanel.innerHTML = renderLesson(lessonIndex);
      }
      return;
    }
    if(page === 'home'){
      var homePanel = document.getElementById('homePanel');
      if(homePanel && typeof renderHome === 'function') homePanel.innerHTML = renderHome();
      return;
    }
    if(page === 'start'){
      var startPanel = document.getElementById('startPanel');
      if(startPanel && typeof renderStartHere === 'function') startPanel.innerHTML = renderStartHere();
      return;
    }
    if(page === 'faq'){
      var faqPanel = document.getElementById('faqPanel');
      if(faqPanel && typeof renderFAQPage === 'function') faqPanel.innerHTML = renderFAQPage();
      return;
    }
    if(page === 'safety'){
      var safetyPanel = document.getElementById('safetyPanel');
      if(safetyPanel && typeof renderSafetyPage === 'function') safetyPanel.innerHTML = renderSafetyPage();
      return;
    }
    if(page === 'glossary'){
      var glossaryPanel = document.getElementById('glossaryPanel');
      if(glossaryPanel && typeof renderGlossary === 'function') glossaryPanel.innerHTML = renderGlossary();
      return;
    }
    if(page === 'sources'){
      var sourcesPanel = document.getElementById('sourcesPanel');
      if(sourcesPanel && typeof renderSources === 'function') sourcesPanel.innerHTML = renderSources();
      return;
    }
    if(page === 'updates'){
      var updatesPanel = document.getElementById('updatesPanel');
      if(updatesPanel && typeof renderUpdateHistory === 'function') updatesPanel.innerHTML = renderUpdateHistory();
    }
  }

  function renderHiddenPanelsAfterSwitch(token){
    if(window.__langSwitchPerformanceToken !== token) return;
    var page = currentPageKey();
    var lessonIndex = currentLessonIndex();
    var totalLessons = (typeof getTotalLessons === 'function') ? getTotalLessons() : 0;
    for(var i = 0; i < totalLessons; i++){
      if(page === ('lesson' + i) && i === lessonIndex) continue;
      var lessonPanel = document.getElementById('lesson' + i);
      if(lessonPanel && typeof renderLesson === 'function'){
        lessonPanel.innerHTML = renderLesson(i);
      }
    }
    if(page !== 'home'){
      var homePanel = document.getElementById('homePanel');
      if(homePanel && typeof renderHome === 'function') homePanel.innerHTML = renderHome();
    }
    if(page !== 'start'){
      var startPanel = document.getElementById('startPanel');
      if(startPanel && typeof renderStartHere === 'function') startPanel.innerHTML = renderStartHere();
    }
    if(page !== 'faq'){
      var faqPanel = document.getElementById('faqPanel');
      if(faqPanel && typeof renderFAQPage === 'function') faqPanel.innerHTML = renderFAQPage();
    }
    if(page !== 'safety'){
      var safetyPanel = document.getElementById('safetyPanel');
      if(safetyPanel && typeof renderSafetyPage === 'function') safetyPanel.innerHTML = renderSafetyPage();
    }
    if(page !== 'glossary'){
      var glossaryPanel = document.getElementById('glossaryPanel');
      if(glossaryPanel && typeof renderGlossary === 'function') glossaryPanel.innerHTML = renderGlossary();
    }
    if(page !== 'sources'){
      var sourcesPanel = document.getElementById('sourcesPanel');
      if(sourcesPanel && typeof renderSources === 'function') sourcesPanel.innerHTML = renderSources();
    }
    if(page !== 'updates'){
      var updatesPanel = document.getElementById('updatesPanel');
      if(updatesPanel && typeof renderUpdateHistory === 'function') updatesPanel.innerHTML = renderUpdateHistory();
    }
  }

  if(typeof window.renderAllLessons === 'function' && !window.renderAllLessons.__langSwitchPerformanceWrapped){
    var fullRenderAllLessons = window.renderAllLessons;
    var wrappedRenderAllLessons = function(){
      if(window.__langSwitchPerformanceActive){
        if(!window.__langSwitchPerformanceVisibleDone){
          window.__langSwitchPerformanceVisibleDone = true;
          renderPanelByPage(currentPageKey());
        }
        return;
      }
      return fullRenderAllLessons.apply(this, arguments);
    };
    wrappedRenderAllLessons.__langSwitchPerformanceWrapped = true;
    wrappedRenderAllLessons.__langSwitchPerformanceFull = fullRenderAllLessons;
    window.renderAllLessons = wrappedRenderAllLessons;
    try{ renderAllLessons = wrappedRenderAllLessons; }catch(error){}
  }

  if(typeof window.setLang === 'function' && !window.setLang.__langSwitchPerformanceWrapped){
    var previousSetLang = window.setLang;
    var wrappedSetLang = function(lang){
      var nextLang = lang;
      var uiStore = (typeof ui !== 'undefined' && ui) ? ui : null;
      var extraUiStore = (typeof extraUi !== 'undefined' && extraUi) ? extraUi : null;
      var labelStore = (typeof langLabels !== 'undefined' && langLabels) ? langLabels : null;
      if(uiStore || extraUiStore){
        if((!uiStore || !uiStore[nextLang]) && (!extraUiStore || !extraUiStore[nextLang])) nextLang = 'en';
      }

      var langMenu = document.getElementById('langMenu');
      if(langMenu) langMenu.classList.remove('open');

      var currentLabel = document.getElementById('currentLangLabel');
      if(currentLabel) currentLabel.textContent = (labelStore && labelStore[nextLang]) ? labelStore[nextLang] : String(nextLang || 'en').toUpperCase();

      document.querySelectorAll('.lang-item').forEach(function(el){
        el.classList.toggle('active', el.dataset.lang === nextLang);
      });

      var token = Date.now() + Math.random();
      window.__langSwitchPerformanceToken = token;
      window.__langSwitchPerformanceActive = true;
      window.__langSwitchPerformanceVisibleDone = false;

      try{
        return previousSetLang.apply(this, [nextLang]);
      }finally{
        window.__langSwitchPerformanceActive = false;
        window.__langSwitchPerformanceVisibleDone = false;
        var deferredRender = function(){
          renderHiddenPanelsAfterSwitch(token);
        };
        if(typeof requestIdleCallback === 'function'){
          requestIdleCallback(deferredRender, { timeout: 400 });
        }else{
          setTimeout(deferredRender, 60);
        }
      }
    };
    wrappedSetLang.__langSwitchPerformanceWrapped = true;
    window.setLang = wrappedSetLang;
    try{ setLang = wrappedSetLang; }catch(error){}
  }

  var langMenu = document.getElementById('langMenu');
  if(langMenu && !langMenu.__langSwitchPerformanceBound){
    langMenu.addEventListener('click', function(e){
      var item = e.target.closest('.lang-item[data-lang]');
      if(!item) return;
      e.preventDefault();
      e.stopPropagation();
      if(typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
      langMenu.classList.remove('open');
      var targetLang = item.dataset.lang;
      if(typeof requestAnimationFrame === 'function'){
        requestAnimationFrame(function(){
          if(typeof window.setLang === 'function') window.setLang(targetLang);
        });
      }else if(typeof window.setLang === 'function'){
        setTimeout(function(){ window.setLang(targetLang); }, 0);
      }
    }, true);
    langMenu.__langSwitchPerformanceBound = true;
  }
})();