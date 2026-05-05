(function(){
  if(typeof window === 'undefined' || window.__homeHeroGallery20260505) return;
  window.__homeHeroGallery20260505 = true;

  function heroGalleryLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getBasePrefix(){
    if(typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__) return window.__CA_BASE_PREFIX__;
    if(document.body && document.body.dataset && document.body.dataset.basePrefix){
      return document.body.dataset.basePrefix;
    }
    return './';
  }

  function toIndexRoute(path){
    if(typeof window.__CA_TO_INDEX_ROUTE === 'function'){
      return window.__CA_TO_INDEX_ROUTE(path);
    }
    var value = String(path || '');
    if(!value) return 'index.html';
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
  }

  function getPageRoute(page){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      return window.__CA_GET_PAGE_ROUTE(page);
    }
    var base = getBasePrefix();
    if(page === 'home') return toIndexRoute(base);
    return toIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function'){
      return window.__CA_GET_LESSON_ROUTE(index);
    }
    var base = getBasePrefix();
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    return toIndexRoute(base + 'lesson/' + (slugs[index] || 'blockchain') + '/');
  }

  function getChecklistRoute(slug){
    var route = toIndexRoute(getBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g, '') + '/');
    var lang = heroGalleryLang();
    return route + (route.indexOf('?') === -1 ? '?lang=' : '&lang=') + encodeURIComponent(lang);
  }

  function safeText(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function navText(key, fallback){
    if(typeof t === 'function'){
      try{
        var value = t(key);
        if(typeof value === 'string' && value && value !== key) return value;
      }catch(err){}
    }
    return fallback;
  }

  function getHeroGalleryPack(){
    var lang = heroGalleryLang();
    var packs = {
      en:{
        chips:['Beginner-friendly','Multilingual','Safety First','Free Lessons'],
        kicker:'Digital Learning Space',
        title:'Lessons, glossary, and safety checks arranged like one calm knowledge space.',
        body:'Start with the basics, revisit quick check tools, and move into real actions with less confusion.',
        primary:'Start Free Lessons',
        secondary:'View Safety Guide',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Quick terms',
        sideChecklistValue:'Before you send',
        sideSourcesValue:'Trusted references'
      },
      ko:{
        chips:['\ucd08\ubcf4\uc790\uc6a9','\ub2e4\uad6d\uc5b4','\ubcf4\uc548 \uc6b0\uc120','\ubb34\ub8cc \ud559\uc2b5'],
        kicker:'\ub514\uc9c0\ud138 \ud559\uc2b5 \uacf5\uac04',
        title:'\uac15\uc758, \uc6a9\uc5b4, \ubcf4\uc548 \ud655\uc778 \ud750\ub984\uc744 \ud558\ub098\uc758 \ucc28\ubd84\ud55c \uc9c0\uc2dd \uacf5\uac04\ucc98\ub7fc \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.',
        body:'\uae30\ucd08\ubd80\ud130 \uc2dc\uc791\ud558\uace0, \uc9e7\uc740 \uccb4\ud06c \ub3c4\uad6c\ub85c \ub2e4\uc2dc \ud655\uc778\ud558\uba70, \uc2e4\uc81c \ud589\ub3d9 \uc804\uc5d0\ub294 \ub35c \ud5f7\uac08\ub9ac\uac8c \ud750\ub984\uc744 \uc774\uc5b4\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        primary:'\ubb34\ub8cc lesson \uc2dc\uc791',
        secondary:'\ubcf4\uc548 \uac00\uc774\ub4dc \ubcf4\uae30',
        sideChecklistLabel:'\uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        sideGlossaryValue:'\ud575\uc2ec \uc6a9\uc5b4',
        sideChecklistValue:'\uc804\uc1a1 \uc804 \ud655\uc778',
        sideSourcesValue:'\uacf5\uc2dd\u00b7\ucc38\uace0 \uc790\ub8cc'
      }
    };
    return packs[lang] || packs.en;
  }

  function buildHeroGalleryHtml(){
    var pack = getHeroGalleryPack();
    var chips = Array.isArray(pack.chips) ? pack.chips : [];
    var lessonsLabel = navText('nav.lessons', 'Lessons');
    var glossaryLabel = navText('nav.glossary', 'Glossary');
    var safetyLabel = navText('nav.safety', 'Safety');
    var sourcesLabel = navText('nav.sources', 'Sources');

    return ''
      + '<section class="home-hero-showcase-block">'
      +   '<div class="home-hero-chip-row">' + chips.map(function(chip){
            return '<span class="home-hero-chip">' + safeText(chip) + '</span>';
          }).join('') + '</div>'
      +   '<div class="home-hero-stage">'
      +     '<div class="home-hero-stage-main">'
      +       '<div class="home-hero-stage-kicker">' + safeText(pack.kicker || 'Digital Learning Space') + '</div>'
      +       '<div class="home-hero-stage-title">' + safeText(pack.title || '') + '</div>'
      +       '<div class="home-hero-stage-body">' + safeText(pack.body || '') + '</div>'
      +       '<div class="home-hero-stage-actions">'
      +         '<a class="home-hero-btn is-primary" href="' + safeText(getLessonRoute(0)) + '">' + safeText(pack.primary || 'Start Free Lessons') + '</a>'
      +         '<a class="home-hero-btn" href="' + safeText(getPageRoute('safety')) + '">' + safeText(pack.secondary || 'View Safety Guide') + '</a>'
      +       '</div>'
      +     '</div>'
      +     '<div class="home-hero-side">'
      +       '<a class="home-hero-sidecard" href="' + safeText(getPageRoute('glossary')) + '"><div class="home-hero-side-label">' + safeText(glossaryLabel) + '</div><div class="home-hero-side-value">' + safeText(pack.sideGlossaryValue || 'Quick terms') + '</div></a>'
      +       '<a class="home-hero-sidecard" href="' + safeText(getChecklistRoute('before-send')) + '"><div class="home-hero-side-label">' + safeText(pack.sideChecklistLabel || 'Checklist') + '</div><div class="home-hero-side-value">' + safeText(pack.sideChecklistValue || 'Before you send') + '</div></a>'
      +       '<a class="home-hero-sidecard is-aux" href="' + safeText(getPageRoute('sources')) + '"><div class="home-hero-side-label">' + safeText(sourcesLabel || safetyLabel || lessonsLabel) + '</div><div class="home-hero-side-value">' + safeText(pack.sideSourcesValue || 'Trusted references') + '</div></a>'
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  function ensureHomeHeroGalleryBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    Array.prototype.slice.call(panel.querySelectorAll('.home-hero-showcase-block')).forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });
    var desc = hero.querySelector('.home-desc');
    var block = hero.querySelector('.home-hero-showcase-block');
    if(!block){
      if(desc){
        desc.insertAdjacentHTML('afterend', buildHeroGalleryHtml());
      } else {
        hero.insertAdjacentHTML('afterbegin', buildHeroGalleryHtml());
      }
      block = hero.querySelector('.home-hero-showcase-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHeroGalleryHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncHeroGallery(){
    ensureHomeHeroGalleryBlock();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeHeroGalleryWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHeroGallery();
      return result;
    };
    wrapped.__homeHeroGalleryWrapped = true;
    wrapped.__homeHeroGalleryOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  syncHeroGallery();
})();
