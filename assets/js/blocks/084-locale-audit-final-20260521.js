(function(){
  if(typeof window === 'undefined' || window.__coinProofPathLocaleAuditFinal20260521) return;
  window.__coinProofPathLocaleAuditFinal20260521 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var ALLOWED_ENGLISH = [
    'Coin ProofPath','Bitcoin','Ethereum','USDT','USDC','DAI','NFT','DeFi','ERC20','TRC20','BEP20','SOL',
    'Buy Me a Coffee','PDF','Web3','KYC','URL'
  ];

  var EXACT_FIXES = {
    ko:{
      'About':'소개','Mission':'미션','Partner':'파트너십','Contact':'문의','Support':'후원하기','Pitch Deck':'피치덱',
      'View Pitch Deck':'피치덱 보기','Open Pitch Deck':'피치덱 열기','Live signal':'실시간 지표','Visitor counter':'방문자 카운터',
      'Source Library':'자료 라이브러리','Related resources':'관련 자료','Open lesson':'강의 열기','Continue':'이어보기','Completed':'완료됨'
    },
    th:{
      'About':'เกี่ยวกับ','Mission':'พันธกิจ','Partner':'พาร์ตเนอร์','Contact':'ติดต่อ','Support':'สนับสนุน','Pitch Deck':'เด็คนำเสนอ',
      'View Pitch Deck':'ดูเด็คนำเสนอ','Open Pitch Deck':'เปิดเด็คนำเสนอ','Live signal':'สัญญาณสด','Visitor counter':'ตัวนับผู้เยี่ยมชม',
      'Source Library':'คลังแหล่งข้อมูล','Related resources':'แหล่งข้อมูลที่เกี่ยวข้อง','Open lesson':'เปิดบทเรียน','Continue':'เรียนต่อ','Completed':'เสร็จแล้ว'
    },
    id:{
      'About':'Tentang','Mission':'Misi','Partner':'Kemitraan','Contact':'Kontak','Support':'Dukung','Pitch Deck':'Dek Sponsor',
      'View Pitch Deck':'Lihat Dek Sponsor','Open Pitch Deck':'Buka Dek Sponsor','Live signal':'Sinyal langsung','Visitor counter':'Penghitung pengunjung',
      'Source Library':'Pustaka sumber','Related resources':'Sumber terkait','Open lesson':'Buka pelajaran','Continue':'Lanjutkan','Completed':'Selesai'
    },
    pt:{
      'About':'Sobre','Mission':'Missão','Partner':'Parceria','Contact':'Contato','Support':'Apoiar','Pitch Deck':'Apresentação',
      'View Pitch Deck':'Ver apresentação','Open Pitch Deck':'Abrir apresentação','Live signal':'Sinal ao vivo','Visitor counter':'Contador de visitantes',
      'Source Library':'Biblioteca de fontes','Related resources':'Recursos relacionados','Open lesson':'Abrir aula','Continue':'Continuar','Completed':'Concluído'
    },
    br:{
      'About':'Sobre','Mission':'Missão','Partner':'Parceria','Contact':'Contato','Support':'Apoiar','Pitch Deck':'Apresentação',
      'View Pitch Deck':'Ver apresentação','Open Pitch Deck':'Abrir apresentação','Live signal':'Sinal ao vivo','Visitor counter':'Contador de visitantes',
      'Source Library':'Biblioteca de fontes','Related resources':'Materiais relacionados','Open lesson':'Abrir aula','Continue':'Continuar','Completed':'Concluído'
    },
    tr:{
      'About':'Hakkında','Mission':'Misyon','Partner':'Ortaklık','Contact':'İletişim','Support':'Destekle','Pitch Deck':'Sponsor Sunumu',
      'View Pitch Deck':'Sunumu Gör','Open Pitch Deck':'Sunumu Aç','Live signal':'Canlı sinyal','Visitor counter':'Ziyaretçi sayacı',
      'Source Library':'Kaynak kütüphanesi','Related resources':'İlgili kaynaklar','Open lesson':'Dersi aç','Continue':'Devam et','Completed':'Tamamlandı'
    },
    es:{
      'About':'Acerca de','Mission':'Misión','Partner':'Socios','Contact':'Contacto','Support':'Apoyar','Pitch Deck':'Presentación',
      'View Pitch Deck':'Ver presentación','Open Pitch Deck':'Abrir presentación','Live signal':'Señal en vivo','Visitor counter':'Contador de visitantes',
      'Source Library':'Biblioteca de fuentes','Related resources':'Recursos relacionados','Open lesson':'Abrir lección','Continue':'Continuar','Completed':'Completado'
    },
    ar:{
      'About':'حول المشروع','Mission':'المهمة','Partner':'الشراكة','Contact':'تواصل','Support':'الدعم','Pitch Deck':'العرض التعريفي',
      'View Pitch Deck':'عرض الملف','Open Pitch Deck':'فتح الملف','Live signal':'مؤشر مباشر','Visitor counter':'عداد الزوار',
      'Source Library':'مكتبة المصادر','Related resources':'موارد ذات صلة','Open lesson':'افتح الدرس','Continue':'متابعة','Completed':'مكتمل'
    },
    vi:{
      'About':'Giới thiệu','Mission':'Sứ mệnh','Partner':'Đối tác','Contact':'Liên hệ','Support':'Ủng hộ','Pitch Deck':'Bản giới thiệu',
      'View Pitch Deck':'Xem bản giới thiệu','Open Pitch Deck':'Mở bản giới thiệu','Live signal':'Tín hiệu trực tiếp','Visitor counter':'Bộ đếm khách truy cập',
      'Source Library':'Thư viện nguồn','Related resources':'Tài nguyên liên quan','Open lesson':'Mở bài học','Continue':'Tiếp tục','Completed':'Đã hoàn thành'
    },
    ha:{
      'About':'Game da mu','Mission':'Manufa','Partner':'Hadin gwiwa','Contact':'Tuntuba','Support':'Tallafa','Pitch Deck':'Takardar Gabatarwa',
      'View Pitch Deck':'Duba takardar','Open Pitch Deck':'Bude takardar','Live signal':'Alamar kai tsaye','Visitor counter':'Kididdigar baƙi',
      'Source Library':'Laburaren tushe','Related resources':'Albarkatu masu alaƙa','Open lesson':'Bude darasi','Continue':'Ci gaba','Completed':'An kammala'
    }
  };

  var UI_PATTERN = /\b(Lesson|Roadmap|Beginner|Intermediate|Checklist|Warning|Compare|Verify|Open lesson|Continue|Completed|Related resources|Source Library|Support|Partner|Pitch Deck|Contact|Start|Next lesson|Previous lesson|Mark complete|Quick Review|Worth Saving|Go Deeper|Practice kit|Safety|Update|Search|Download|Read more|Learn more|Visitor counter|Live signal|Sponsorship|Sponsor)\b/i;

  function lang(){
    try{ if(typeof currentLang === 'string' && currentLang) return currentLang; }catch(err){}
    try{ if(window.currentLang) return window.currentLang; }catch(err){}
    try{ return localStorage.getItem('cryptoAcademyLang') || document.documentElement.lang || 'en'; }catch(err){}
    return 'en';
  }

  function isAllowed(text){
    text = String(text || '');
    if(!text) return true;
    if(/https?:\/\/|www\.|\.com\b|\.org\b|mailto:|beenetworkkorea@gmail\.com/i.test(text)) return true;
    return ALLOWED_ENGLISH.some(function(token){ return text.indexOf(token) !== -1; });
  }

  function isVisible(el){
    if(!el || !el.ownerDocument || !el.ownerDocument.defaultView) return true;
    var view = el.ownerDocument.defaultView;
    var style = view.getComputedStyle ? view.getComputedStyle(el) : null;
    if(style && (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0)) return false;
    return true;
  }

  function cssPath(el){
    var parts = [];
    while(el && el.nodeType === 1 && parts.length < 5){
      var name = el.tagName.toLowerCase();
      if(el.id){ parts.unshift(name + '#' + el.id); break; }
      if(el.classList && el.classList.length) name += '.' + Array.prototype.slice.call(el.classList, 0, 2).join('.');
      parts.unshift(name);
      el = el.parentElement;
    }
    return parts.join(' > ');
  }

  function sectionName(el){
    if(!el || !el.closest) return 'unknown';
    var host = el.closest('#homePanel,#sourcesPanel,#safetyPanel,#glossaryPanel,#faqPanel,#updatesPanel,#partnerPanel,#aboutPanel,#pitchPanel,.lesson-content,.lesson-related-resources,.lesson-guide-stack,.roadmap-section,.intermediate-roadmap-section,.pitch-page-shell,.partner-page-shell,.about-page-shell');
    return host ? (host.id || host.getAttribute('data-page') || host.className || host.tagName) : 'unknown';
  }

  function sourceHint(el){
    if(!el || !el.closest) return 'unknown';
    if(el.closest('#pitchPanel,.pitch-page-shell')) return 'assets/js/blocks/082-pitch-deck-page-20260521.js';
    if(el.closest('#partnerPanel,.partner-page-shell')) return 'assets/js/blocks/079-partner-page-20260520.js / 083-support-cta-partner-pitch-20260521.js';
    if(el.closest('#aboutPanel,.about-page-shell')) return 'assets/js/blocks/081-about-mission-20260521.js';
    if(el.closest('.lesson-guide-stack')) return 'lesson visual guide HTML renderer, not SVG';
    if(el.closest('.lesson-related-resources')) return 'renderLessonSourceCard / related resources renderer';
    if(el.closest('.lesson-nav-item')) return 'sidebar lesson/menu locale source';
    if(el.closest('#homePanel')) return 'home roadmap/menu locale source';
    if(el.closest('#sourcesPanel')) return 'source library locale source';
    return 'rendered HTML text';
  }

  function applyExactFixes(root){
    var code = lang();
    var fixes = EXACT_FIXES[code];
    if(!fixes || code === 'en') return;
    root = root || document;
    var walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(node){
        if(!node || !node.nodeValue) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if(!parent || ['SCRIPT','STYLE','NOSCRIPT','TEXTAREA'].indexOf(parent.tagName) !== -1) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while((node = walker.nextNode())){
      var raw = node.nodeValue;
      var compact = raw.replace(/\s+/g, ' ').trim();
      if(fixes[compact]) node.nodeValue = raw.replace(compact, fixes[compact]);
    }
    if(root.querySelectorAll){
      Array.prototype.forEach.call(root.querySelectorAll('[placeholder],[title],[aria-label],img[alt]'), function(el){
        ['placeholder','title','aria-label','alt'].forEach(function(attr){
          if(!el.hasAttribute || !el.hasAttribute(attr)) return;
          var value = (el.getAttribute(attr) || '').replace(/\s+/g, ' ').trim();
          if(fixes[value]) el.setAttribute(attr, fixes[value]);
        });
      });
    }
  }

  function scan(root, targetLang){
    targetLang = targetLang || lang();
    root = root || document;
    var suspects = [];
    var allowed = [];
    if(targetLang === 'en') return {currentLocale:targetLang, suspectedEnglishText:suspects, allowedEnglishText:allowed};
    function collect(el, text, type){
      text = String(text || '').replace(/\s+/g, ' ').trim();
      if(!text || !UI_PATTERN.test(text) || !isVisible(el)) return;
      var item = {
        selector:cssPath(el),
        section:sectionName(el),
        text:text,
        type:type || 'text',
        sourceHint:sourceHint(el),
        fallbackUsed:!isAllowed(text),
        classification:isAllowed(text) ? '고유명사/기술용어/브랜드명 가능' : '번역 필요 UI 라벨 의심'
      };
      if(item.fallbackUsed) suspects.push(item);
      else allowed.push(item);
    }
    var walker = document.createTreeWalker(root.body || root, NodeFilter.SHOW_TEXT, {
      acceptNode:function(node){
        if(!node || !node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var parent = node.parentElement;
        if(!parent || ['SCRIPT','STYLE','NOSCRIPT','TEXTAREA'].indexOf(parent.tagName) !== -1) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while((node = walker.nextNode())) collect(node.parentElement, node.nodeValue, 'text');
    if(root.querySelectorAll){
      Array.prototype.forEach.call(root.querySelectorAll('[placeholder],[title],[aria-label],img[alt]'), function(el){
        ['placeholder','title','aria-label','alt'].forEach(function(attr){
          if(el.hasAttribute && el.hasAttribute(attr)) collect(el, el.getAttribute(attr), attr);
        });
      });
    }
    return {currentLocale:targetLang, suspectedEnglishText:suspects.slice(0,250), allowedEnglishText:allowed.slice(0,160)};
  }

  function openView(view){
    try{
      if(view && /^lesson\d+$/.test(view) && typeof window.showLesson === 'function'){
        window.showLesson(parseInt(view.replace('lesson',''), 10) - 1);
      }else if(view === 'partner' && typeof window.showPartnerPage === 'function') window.showPartnerPage();
      else if(view === 'about' && typeof window.showAboutMissionPage === 'function') window.showAboutMissionPage();
      else if(view === 'pitch' && typeof window.showPitchDeckPage === 'function') window.showPitchDeckPage();
      else if(view && typeof window.showPage === 'function') window.showPage(view);
    }catch(err){}
  }

  function refresh(){
    applyExactFixes(document);
  }

  function wrap(name){
    var original = window[name] || null;
    if(typeof original !== 'function' || original.__localeAuditFinalWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(refresh, 0);
      setTimeout(refresh, 120);
      return result;
    };
    wrapped.__localeAuditFinalWrapped = true;
    window[name] = wrapped;
    try{ eval(name + ' = wrapped'); }catch(err){}
  }

  ['showPage','showLesson','setLang','renderAllLessons','renderHome','renderLesson','renderSources'].forEach(wrap);

  window.debugLocaleAudit = function(locale, view){
    if(locale && locale !== lang()){
      try{ if(typeof window.setLang === 'function') window.setLang(locale); }catch(err){}
    }
    if(view) openView(view);
    refresh();
    return scan(document, lang());
  };

  window.debugAllLocaleCoverage = function(){
    var screens = ['home','sources','safety','glossary','faq','updates','about','partner','pitch','lesson1','lesson2','lesson3','lesson4','lesson5','lesson6','lesson7','lesson8','lesson9','lesson10','lesson11','lesson12','lesson13','lesson14'];
    var out = {};
    LANGS.forEach(function(code){
      if(code === 'en') return;
      out[code] = {totalSuspected:0, screens:{}};
      try{ if(typeof window.setLang === 'function') window.setLang(code); }catch(err){}
      screens.forEach(function(screen){
        openView(screen);
        refresh();
        var result = scan(document, code);
        out[code].screens[screen] = result.suspectedEnglishText;
        out[code].totalSuspected += result.suspectedEnglishText.length;
      });
    });
    return out;
  };

  function maybeRenderAuditDump(){
    var params;
    try{ params = new URLSearchParams(window.location.search || ''); }catch(err){ return; }
    if(!params || params.get('localeAuditDump') !== '1') return;
    var target = params.get('auditLang') || lang();
    var view = params.get('auditView') || '';
    var all = params.get('auditAll') === '1';
    window.setTimeout(function(){
      var result = all ? window.debugAllLocaleCoverage() : window.debugLocaleAudit(target, view);
      var pre = document.getElementById('localeAuditDump');
      if(!pre){
        pre = document.createElement('pre');
        pre.id = 'localeAuditDump';
        pre.setAttribute('data-debug-only', 'true');
        pre.style.cssText = 'white-space:pre-wrap;position:relative;z-index:999999;margin:16px;padding:12px;border:1px solid #ddd;background:#fff;color:#111;font:12px/1.5 monospace;';
        document.body.appendChild(pre);
      }
      pre.textContent = JSON.stringify(result, null, 2);
    }, 700);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(refresh, 0); setTimeout(refresh, 300); });
  else { setTimeout(refresh, 0); setTimeout(refresh, 300); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', maybeRenderAuditDump);
  else maybeRenderAuditDump();
})();
