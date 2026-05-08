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

  function getStartRoute(slug){
    return toIndexRoute(getBasePrefix() + 'start/' + String(slug || 'beginners').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getHomeHashRoute(hash){
    return getPageRoute('home') + '#' + String(hash || '').replace(/^#/, '');
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
        kicker:'Practical Beginner Crypto',
        title:'Practical crypto learning for beginners',
        body:'Free lessons, safety basics, glossary, and fast checklists for people starting from zero.',
        primary:'Start Now',
        secondary:'Quick Check',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Start with terms',
        sideChecklistValue:'Fast safety check',
        sideSourcesValue:'Deeper references'
      },
      ko:{
        chips:['초보자용','다국어','보안 우선','무료 학습'],
        kicker:'초보자를 위한 실전 암호화폐',
        title:'초보자를 위한 실전 암호화폐 학습',
        body:'무료 lesson, 보안 기초, glossary, 빠른 체크리스트를 한곳에서 바로 시작할 수 있습니다.',
        primary:'지금 시작하기',
        secondary:'빠르게 확인하기',
        sideChecklistLabel:'체크리스트',
        sideGlossaryValue:'용어부터 보기',
        sideChecklistValue:'빠른 안전 체크',
        sideSourcesValue:'더 깊은 참고자료'
      },
      th:{
        chips:['เหมาะกับมือใหม่','หลายภาษา','ความปลอดภัยก่อน','บทเรียนฟรี'],
        kicker:'คริปโตเชิงปฏิบัติสำหรับมือใหม่',
        title:'พื้นที่เรียนคริปโตสำหรับผู้เริ่มต้น',
        body:'เริ่มจากบทเรียนฟรี พื้นฐานความปลอดภัย glossary และ checklist แบบสั้นได้ในที่เดียว',
        primary:'เริ่มเลย',
        secondary:'เช็กด่วน',
        sideChecklistLabel:'เช็กลิสต์',
        sideGlossaryValue:'เริ่มจากคำศัพท์',
        sideChecklistValue:'เช็กความปลอดภัย',
        sideSourcesValue:'แหล่งอ้างอิงเพิ่ม'
      },
      id:{
        chips:['Ramah pemula','Multibahasa','Utamakan keamanan','Pelajaran gratis'],
        kicker:'Crypto praktis untuk pemula',
        title:'Belajar crypto praktis untuk pemula',
        body:'Mulai dari pelajaran gratis, dasar keamanan, glossary, dan checklist cepat dalam satu tempat.',
        primary:'Mulai Sekarang',
        secondary:'Cek Cepat',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Mulai dari istilah',
        sideChecklistValue:'Cek keamanan cepat',
        sideSourcesValue:'Referensi lanjutan'
      },
      pt:{
        chips:['Para iniciantes','Multilingue','Seguranca primeiro','Licoes gratis'],
        kicker:'Cripto pratica para iniciantes',
        title:'Aprendizado pratico de cripto para iniciantes',
        body:'Acesse licoes gratis, bases de seguranca, glossary e checklists rapidos em um so lugar.',
        primary:'Comecar Agora',
        secondary:'Cheque Rapido',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Comece pelos termos',
        sideChecklistValue:'Cheque rapido de seguranca',
        sideSourcesValue:'Referencias mais profundas'
      },
      tr:{
        chips:['Yeni baslayanlara uygun','Cok dilli','Once guvenlik','Ucretsiz dersler'],
        kicker:'Yeni baslayanlar icin pratik kripto',
        title:'Yeni baslayanlar icin pratik kripto ogrenimi',
        body:'Ucretsiz dersler, guvenlik temelleri, glossary ve hizli checklistler ile tek yerde baslayin.',
        primary:'Simdi Basla',
        secondary:'Hizli Kontrol',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Terimlerle basla',
        sideChecklistValue:'Hizli guvenlik kontrolu',
        sideSourcesValue:'Daha derin kaynaklar'
      },
      es:{
        chips:['Para principiantes','Multilingue','Seguridad primero','Lecciones gratis'],
        kicker:'Cripto practica para principiantes',
        title:'Aprendizaje practico de crypto para principiantes',
        body:'Empieza con lecciones gratis, bases de seguridad, glossary y checklists rapidos en un solo lugar.',
        primary:'Empezar Ahora',
        secondary:'Chequeo Rapido',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Empieza por los terminos',
        sideChecklistValue:'Chequeo rapido de seguridad',
        sideSourcesValue:'Referencias mas profundas'
      },
      ar:{
        chips:['مناسب للمبتدئين','متعدد اللغات','السلامة اولا','دروس مجانية'],
        kicker:'تعلم عملي للكرYPTO للمبتدئين',
        title:'تعلم عملي للعملات الرقمية للمبتدئين',
        body:'ابدأ من الدروس المجانية واساسيات الامان وglossary والقوائم السريعة في مكان واحد.',
        primary:'ابدأ الآن',
        secondary:'فحص سريع',
        sideChecklistLabel:'قائمة',
        sideGlossaryValue:'ابدأ بالمصطلحات',
        sideChecklistValue:'فحص امان سريع',
        sideSourcesValue:'مراجع اعمق'
      },
      vi:{
        chips:['Danh cho nguoi moi','Da ngon ngu','Uu tien an toan','Bai hoc mien phi'],
        kicker:'Crypto thuc te cho nguoi moi',
        title:'Hoc crypto thuc te cho nguoi moi',
        body:'Bat dau voi bai hoc mien phi, nen tang an toan, glossary, va checklist nhanh trong cung mot noi.',
        primary:'Bat Dau Ngay',
        secondary:'Kiem Tra Nhanh',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Bat dau voi thuat ngu',
        sideChecklistValue:'Kiem tra an toan nhanh',
        sideSourcesValue:'Tai lieu sau hon'
      },
      ha:{
        chips:['Ga masu farawa','Harsuna da yawa','Tsaro farko','Darussa kyauta'],
        kicker:'Practical crypto ga masu farawa',
        title:'Koyon crypto mai amfani ga masu farawa',
        body:'Fara da darussa kyauta, tushen tsaro, glossary, da checklist masu sauri a wuri guda.',
        primary:'Fara Yanzu',
        secondary:'Duba Da Sauri',
        sideChecklistLabel:'Checklist',
        sideGlossaryValue:'Fara da kalmomi',
        sideChecklistValue:'Duba tsaro da sauri',
        sideSourcesValue:'Karin tushe masu zurfi'
      }
    };
    packs.br = packs.pt;
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
      +         '<a class="home-hero-btn is-primary" data-home-track="home.hero.primary.start" data-home-track-label="Hero primary CTA" href="' + safeText(getStartRoute('beginners')) + '">' + safeText(pack.primary || 'Start Now') + '</a>'
      +         '<a class="home-hero-btn" data-home-track="home.hero.secondary.quickcheck" data-home-track-label="Hero secondary CTA" href="' + safeText(getHomeHashRoute('home-quick-checklists-section')) + '">' + safeText(pack.secondary || 'Quick Check') + '</a>'
      +       '</div>'
      +     '</div>'
      +     '<div class="home-hero-side">'
      +       '<a class="home-hero-sidecard" data-home-track="home.hero.side.glossary" data-home-track-label="Hero glossary card" href="' + safeText(getPageRoute('glossary')) + '"><div class="home-hero-side-label">' + safeText(glossaryLabel) + '</div><div class="home-hero-side-value">' + safeText(pack.sideGlossaryValue || 'Quick terms') + '</div></a>'
      +       '<a class="home-hero-sidecard" data-home-track="home.hero.side.beforeSend" data-home-track-label="Hero before-send checklist" href="' + safeText(getChecklistRoute('before-send')) + '"><div class="home-hero-side-label">' + safeText(pack.sideChecklistLabel || 'Checklist') + '</div><div class="home-hero-side-value">' + safeText(pack.sideChecklistValue || 'Before you send') + '</div></a>'
      +       '<a class="home-hero-sidecard is-aux" data-home-track="home.hero.side.sources" data-home-track-label="Hero sources card" href="' + safeText(getPageRoute('sources')) + '"><div class="home-hero-side-label">' + safeText(sourcesLabel || safetyLabel || lessonsLabel) + '</div><div class="home-hero-side-value">' + safeText(pack.sideSourcesValue || 'Trusted references') + '</div></a>'
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
