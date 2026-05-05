(function(){
  if(typeof window === 'undefined' || window.__caLayoutShellStageTwo) return;
  window.__caLayoutShellStageTwo = true;

  var body = document.body;
  if(!body) return;

  var initialPage = window.__CA_INITIAL_PAGE__ || body.dataset.page || 'home';
  var basePrefix = body.dataset.basePrefix || window.__CA_BASE_PREFIX__ || './';
  var initialLesson = (typeof window.__CA_INITIAL_LESSON__ === 'number' && isFinite(window.__CA_INITIAL_LESSON__)) ? window.__CA_INITIAL_LESSON__ : null;
  var useLessonUrls = window.__CA_USE_LESSON_URLS__ !== false;
  var isLessonPage = initialLesson !== null && /^lesson\d+$/.test(initialPage);

  function toIndexRoute(path){
    var value = String(path || '');
    if(!value) return 'index.html';
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
  }

  var routeMap = {
    home: toIndexRoute(basePrefix),
    start: toIndexRoute(basePrefix + 'start/beginners/'),
    glossary: toIndexRoute(basePrefix + 'glossary/'),
    faq: toIndexRoute(basePrefix + 'faq/'),
    safety: toIndexRoute(basePrefix + 'safety/'),
    sources: toIndexRoute(basePrefix + 'sources/'),
    updates: toIndexRoute(basePrefix + 'updates/')
  };
  var lessonRoutes = [
    { index: 0, slug: 'blockchain' },
    { index: 1, slug: 'wallet' },
    { index: 2, slug: 'transfer' },
    { index: 3, slug: 'roles' },
    { index: 4, slug: 'real-world' },
    { index: 5, slug: 'first-buy' },
    { index: 6, slug: 'scams' }
  ];

  function getLessonRoute(index){
    for(var i = 0; i < lessonRoutes.length; i++){
      if(lessonRoutes[i].index === index) return toIndexRoute(basePrefix + 'lesson/' + lessonRoutes[i].slug + '/');
    }
    return routeMap.home;
  }

  window.__CA_ROUTE_MAP = Object.assign({}, routeMap);
  window.__CA_TO_INDEX_ROUTE = toIndexRoute;
  window.__CA_GET_PAGE_ROUTE = function(page){
    return routeMap[page] || routeMap.home;
  };
  window.__CA_GET_LESSON_ROUTE = getLessonRoute;

  function ensureAnchor(node){
    if(!node) return null;
    if(node.tagName === 'A') return node;
    var anchor = document.createElement('a');
    for(var i = 0; i < node.attributes.length; i++){
      var attr = node.attributes[i];
      if(attr.name === 'onclick') continue;
      anchor.setAttribute(attr.name, attr.value);
    }
    anchor.className = node.className;
    anchor.innerHTML = node.innerHTML;
    node.parentNode.replaceChild(anchor, node);
    return anchor;
  }

  document.querySelectorAll('[data-route-page]').forEach(function(node){
    var page = node.getAttribute('data-route-page');
    if(!routeMap[page]) return;
    node = ensureAnchor(node);
    if(node) node.setAttribute('href', routeMap[page]);
    if(page === initialPage){
      node.setAttribute('aria-current', 'page');
    }else{
      node.removeAttribute('aria-current');
    }
  });

  document.querySelectorAll('.lesson-nav-item[data-page="start"]:not([data-route-page])').forEach(function(node){
    node = ensureAnchor(node);
    if(!node) return;
    node.setAttribute('data-route-page', 'start');
    node.setAttribute('href', routeMap.start);
    node.removeAttribute('onclick');
    if(initialPage === 'start'){
      node.setAttribute('aria-current', 'page');
    }else{
      node.removeAttribute('aria-current');
    }
  });

  function upgradeLessonLinks(){
    document.querySelectorAll('.lesson-nav-item[data-lesson], [data-route-lesson]').forEach(function(node){
      var rawIndex = node.getAttribute('data-route-lesson');
      if(rawIndex === null || rawIndex === '') rawIndex = node.getAttribute('data-lesson');
      var index = parseInt(rawIndex, 10);
      if(!isFinite(index)) return;
      var link = ensureAnchor(node);
      if(!link) return;
      link.setAttribute('data-route-lesson', String(index));
      link.setAttribute('href', getLessonRoute(index));
      link.removeAttribute('onclick');
      if(isLessonPage && index === initialLesson){
        link.setAttribute('aria-current', 'page');
      }else{
        link.removeAttribute('aria-current');
      }
    });
  }

  function patchRenderLesson(){
    if(typeof window.renderLesson !== 'function' || window.renderLesson.__caLessonRouteWrapped) return;
    var originalRenderLesson = window.renderLesson;
    var wrappedRenderLesson = function(i){
      var html = originalRenderLesson.apply(this, arguments);
      return html.replace(/href="#" onclick="showLesson\((\d+)\);return false;"/g, function(_, idx){
        return 'href="' + getLessonRoute(parseInt(idx, 10)) + '" data-route-lesson="' + idx + '"';
      });
    };
    wrappedRenderLesson.__caLessonRouteWrapped = true;
    wrappedRenderLesson.__caOriginal = originalRenderLesson;
    window.renderLesson = wrappedRenderLesson;
    try{ renderLesson = wrappedRenderLesson; }catch(error){}
  }

  function patchShowLesson(){
    if(typeof window.showLesson !== 'function') return null;
    if(window.showLesson.__caLessonRouteWrapped) return window.showLesson.__caOriginal || window.showLesson;
    var originalShowLesson = window.showLesson;
    var wrappedShowLesson = function(i){
      var index = parseInt(i, 10);
      if(!isFinite(index)) index = 0;
      if(isLessonPage && index === initialLesson){
        return originalShowLesson.apply(this, [index]);
      }
      if(useLessonUrls){
        window.location.href = getLessonRoute(index);
        return false;
      }
      return originalShowLesson.apply(this, [index]);
    };
    wrappedShowLesson.__caLessonRouteWrapped = true;
    wrappedShowLesson.__caOriginal = originalShowLesson;
    window.showLesson = wrappedShowLesson;
    try{ showLesson = wrappedShowLesson; }catch(error){}
    return originalShowLesson;
  }

  document.addEventListener('click', function(event){
    var link = event.target.closest('a[data-route-page]');
    if(!link) return;
    var page = link.getAttribute('data-route-page');
    if(!page || page !== initialPage) return;
    event.preventDefault();
    if(typeof window.showPage === 'function'){
      window.showPage(page);
    }
  });

  patchRenderLesson();
  var originalShowLesson = patchShowLesson();
  upgradeLessonLinks();

  function restoreInitialRoute(){
    upgradeLessonLinks();
    if(isLessonPage){
      var lessonPanel = document.getElementById('lesson' + initialLesson);
      if(lessonPanel && typeof window.renderLesson === 'function'){
        try{
          lessonPanel.innerHTML = window.renderLesson(initialLesson);
        }catch(error){}
      }
      var lessonRenderer = originalShowLesson || (window.showLesson && window.showLesson.__caOriginal) || window.showLesson;
      if(typeof lessonRenderer === 'function'){
        try{
          lessonRenderer.call(window, initialLesson);
        }catch(error){}
      }
      upgradeLessonLinks();
      return;
    }
    if(typeof window.showPage === 'function'){
      try{
        window.showPage(initialPage);
      }catch(error){}
    }
    upgradeLessonLinks();
  }

  restoreInitialRoute();
  if(typeof requestAnimationFrame === 'function'){
    requestAnimationFrame(function(){
      restoreInitialRoute();
      requestAnimationFrame(restoreInitialRoute);
    });
  }else{
    setTimeout(restoreInitialRoute, 0);
    setTimeout(restoreInitialRoute, 60);
  }
})();
