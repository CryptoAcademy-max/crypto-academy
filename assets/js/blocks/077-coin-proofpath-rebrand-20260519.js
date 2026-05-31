(function(){
  if(typeof window === 'undefined' || window.__coinProofPathRebrand20260519) return;
  window.__coinProofPathRebrand20260519 = true;

  var BRAND = 'Coin ProofPath';
  var BRAND_KO = '코인 프루프패스';
  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

  var COPY = {
    en:{
      title:'Coin ProofPath | Learn Crypto Safely',
      description:'A beginner-friendly crypto learning guide for wallets, safe transfers, scam prevention, and verification before action.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Learn crypto safely. Verify before you act.',
      tagline:'Learn crypto safely. Verify before you act.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath helps beginners learn crypto safely, avoid common mistakes, and verify before taking action.',
      footer:'Coin ProofPath is a free crypto learning guide. Learn safely and verify before you act.',
      sourcesDesc:'A source library for learning crypto safely, checking official references, and verifying before action.'
    },
    ko:{
      title:'Coin ProofPath | 코인을 안전하게 배우기',
      description:'지갑, 안전한 전송, 사기 예방, 정보 검증까지 쉽게 배우는 무료 크립토 학습 가이드입니다.',
      ogTitle:'Coin ProofPath',
      ogDescription:'코인을 안전하게 배우고, 행동하기 전에 먼저 검증하세요.',
      tagline:'코인을 안전하게 배우고, 행동하기 전에 먼저 검증하세요.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath는 코인을 처음 배우는 사람도 지갑, 전송, 사기 예방, 정보 검증까지 안전하게 따라갈 수 있도록 만든 무료 크립토 학습 가이드입니다.',
      footer:'코인 프루프패스는 코인을 안전하게 배우고 행동하기 전에 검증하도록 돕는 무료 학습 가이드입니다.',
      sourcesDesc:'코인을 안전하게 배우고, 공식 자료를 확인하며, 행동하기 전에 검증할 수 있도록 정리한 자료 라이브러리입니다.'
    },
    th:{
      title:'Coin ProofPath | เรียนคริปโตอย่างปลอดภัย',
      description:'คู่มือเรียนคริปโตสำหรับผู้เริ่มต้น ครอบคลุมวอลเล็ต การโอนที่ปลอดภัย การป้องกันสแกม และการตรวจสอบก่อนลงมือทำ',
      ogTitle:'Coin ProofPath',
      ogDescription:'เรียนคริปโตอย่างปลอดภัย ตรวจสอบก่อนลงมือทำ',
      tagline:'เรียนคริปโตอย่างปลอดภัย ตรวจสอบก่อนลงมือทำ',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath ช่วยผู้เริ่มต้นเรียนคริปโตอย่างปลอดภัย เลี่ยงข้อผิดพลาดที่พบบ่อย และตรวจสอบก่อนลงมือทำ',
      footer:'Coin ProofPath คือคู่มือเรียนคริปโตฟรีที่ช่วยให้เรียนอย่างปลอดภัยและตรวจสอบก่อนลงมือทำ',
      sourcesDesc:'คลังแหล่งข้อมูลสำหรับเรียนคริปโตอย่างปลอดภัย ตรวจสอบแหล่งอ้างอิงทางการ และยืนยันก่อนลงมือทำ'
    },
    id:{
      title:'Coin ProofPath | Belajar Crypto dengan Aman',
      description:'Panduan belajar crypto untuk pemula tentang wallet, transfer aman, pencegahan scam, dan verifikasi sebelum bertindak.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Belajar crypto dengan aman. Verifikasi sebelum bertindak.',
      tagline:'Belajar crypto dengan aman. Verifikasi sebelum bertindak.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath membantu pemula belajar crypto dengan aman, menghindari kesalahan umum, dan memverifikasi sebelum bertindak.',
      footer:'Coin ProofPath adalah panduan belajar crypto gratis untuk belajar aman dan memverifikasi sebelum bertindak.',
      sourcesDesc:'Perpustakaan sumber untuk belajar crypto dengan aman, memeriksa referensi resmi, dan memverifikasi sebelum bertindak.'
    },
    pt:{
      title:'Coin ProofPath | Aprenda cripto com segurança',
      description:'Guia de aprendizagem cripto para iniciantes sobre carteiras, transferências seguras, prevenção de golpes e verificação antes de agir.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Aprenda cripto com segurança. Verifique antes de agir.',
      tagline:'Aprenda cripto com segurança. Verifique antes de agir.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath ajuda iniciantes a aprender cripto com segurança, evitar erros comuns e verificar antes de agir.',
      footer:'Coin ProofPath é um guia gratuito para aprender cripto com segurança e verificar antes de agir.',
      sourcesDesc:'Biblioteca de fontes para aprender cripto com segurança, conferir referências oficiais e verificar antes de agir.'
    },
    br:{
      title:'Coin ProofPath | Aprenda cripto com segurança',
      description:'Guia de aprendizagem cripto para iniciantes sobre carteiras, transferências seguras, prevenção de golpes e verificação antes de agir.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Aprenda cripto com segurança. Verifique antes de agir.',
      tagline:'Aprenda cripto com segurança. Verifique antes de agir.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath ajuda iniciantes a aprender cripto com segurança, evitar erros comuns e verificar antes de agir.',
      footer:'Coin ProofPath é um guia gratuito para aprender cripto com segurança e verificar antes de agir.',
      sourcesDesc:'Biblioteca de fontes para aprender cripto com segurança, conferir referências oficiais e verificar antes de agir.'
    },
    tr:{
      title:'Coin ProofPath | Kriptoyu güvenle öğrenin',
      description:'Cüzdanlar, güvenli transferler, dolandırıcılıktan korunma ve işlemden önce doğrulama için başlangıç dostu kripto öğrenme rehberi.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Kriptoyu güvenle öğrenin. Harekete geçmeden önce doğrulayın.',
      tagline:'Kriptoyu güvenle öğrenin. Harekete geçmeden önce doğrulayın.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath, yeni başlayanların kriptoyu güvenle öğrenmesine, yaygın hatalardan kaçınmasına ve işlemden önce doğrulamasına yardımcı olur.',
      footer:'Coin ProofPath, kriptoyu güvenle öğrenmek ve harekete geçmeden önce doğrulamak için ücretsiz bir rehberdir.',
      sourcesDesc:'Kriptoyu güvenle öğrenmek, resmi kaynakları kontrol etmek ve işlemden önce doğrulamak için kaynak kütüphanesi.'
    },
    es:{
      title:'Coin ProofPath | Aprende cripto con seguridad',
      description:'Guía de aprendizaje cripto para principiantes sobre billeteras, transferencias seguras, prevención de estafas y verificación antes de actuar.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Aprende cripto con seguridad. Verifica antes de actuar.',
      tagline:'Aprende cripto con seguridad. Verifica antes de actuar.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath ayuda a principiantes a aprender cripto con seguridad, evitar errores comunes y verificar antes de actuar.',
      footer:'Coin ProofPath es una guía gratuita para aprender cripto con seguridad y verificar antes de actuar.',
      sourcesDesc:'Biblioteca de fuentes para aprender cripto con seguridad, revisar referencias oficiales y verificar antes de actuar.'
    },
    ar:{
      title:'Coin ProofPath | تعلم الكريبتو بأمان',
      description:'دليل تعلم كريبتو للمبتدئين عن المحافظ والتحويلات الآمنة وتجنب الاحتيال والتحقق قبل التصرف.',
      ogTitle:'Coin ProofPath',
      ogDescription:'تعلم الكريبتو بأمان. تحقق قبل أن تتصرف.',
      tagline:'تعلم الكريبتو بأمان. تحقق قبل أن تتصرف.',
      homeTitle:'Coin ProofPath',
      homeDesc:'يساعد Coin ProofPath المبتدئين على تعلم الكريبتو بأمان وتجنب الأخطاء الشائعة والتحقق قبل اتخاذ أي إجراء.',
      footer:'Coin ProofPath دليل مجاني لتعلم الكريبتو بأمان والتحقق قبل التصرف.',
      sourcesDesc:'مكتبة مصادر لتعلم الكريبتو بأمان ومراجعة المراجع الرسمية والتحقق قبل التصرف.'
    },
    vi:{
      title:'Coin ProofPath | Học crypto an toàn',
      description:'Hướng dẫn học crypto cho người mới về ví, chuyển tiền an toàn, phòng tránh lừa đảo và xác minh trước khi hành động.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Học crypto an toàn. Xác minh trước khi hành động.',
      tagline:'Học crypto an toàn. Xác minh trước khi hành động.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath giúp người mới học crypto an toàn, tránh lỗi phổ biến và xác minh trước khi hành động.',
      footer:'Coin ProofPath là hướng dẫn học crypto miễn phí để học an toàn và xác minh trước khi hành động.',
      sourcesDesc:'Thư viện nguồn để học crypto an toàn, kiểm tra tài liệu chính thức và xác minh trước khi hành động.'
    },
    ha:{
      title:'Coin ProofPath | Koyi crypto cikin aminci',
      description:'Jagorar koyon crypto ga masu farawa game da wallet, aika kudi cikin aminci, kauce wa yaudara, da tabbatarwa kafin aiki.',
      ogTitle:'Coin ProofPath',
      ogDescription:'Koyi crypto cikin aminci. Tabbatar kafin ka yi aiki.',
      tagline:'Koyi crypto cikin aminci. Tabbatar kafin ka yi aiki.',
      homeTitle:'Coin ProofPath',
      homeDesc:'Coin ProofPath yana taimaka wa masu farawa su koyi crypto cikin aminci, su guji kuskure, kuma su tabbatar kafin su yi aiki.',
      footer:'Coin ProofPath jagorar koyon crypto ce kyauta don koyo cikin aminci da tabbatarwa kafin aiki.',
      sourcesDesc:'Laburaren tushe don koyon crypto cikin aminci, duba bayanan hukuma, da tabbatarwa kafin aiki.'
    }
  };

  function lang(){
    var code = 'en';
    try{
      if(typeof currentLang === 'string' && currentLang) code = currentLang;
      else code = document.documentElement.getAttribute('lang') || localStorage.getItem('cryptoAcademyLang') || 'en';
    }catch(err){}
    return COPY[code] ? code : 'en';
  }

  function pack(code){ return COPY[code || lang()] || COPY.en; }

  function replaceBrandText(value){
    return String(value == null ? '' : value)
      .replace(/Crypto Academy/g, BRAND)
      .replace(/crypto academy/g, 'coin proofpath')
      .replace(/CRYPTO ACADEMY/g, 'COIN PROOFPATH')
      .replace(/크립토 아카데미/g, BRAND_KO);
  }

  function setMeta(selector, attr, value){
    var node = document.querySelector(selector);
    if(node) node.setAttribute(attr, value);
  }

  function patchMeta(){
    var p = pack();
    document.title = p.title;
    setMeta('meta[name="description"]', 'content', p.description);
    setMeta('meta[property="og:title"]', 'content', p.ogTitle);
    setMeta('meta[property="og:description"]', 'content', p.ogDescription);
    setMeta('meta[property="og:site_name"]', 'content', BRAND);
    setMeta('meta[property="og:image:alt"]', 'content', BRAND + ' crypto safety learning guide');
    setMeta('meta[name="twitter:title"]', 'content', p.ogTitle);
    setMeta('meta[name="twitter:description"]', 'content', p.ogDescription);
    setMeta('meta[name="twitter:image:alt"]', 'content', BRAND + ' crypto safety learning guide');
  }

  function patchLocaleKeys(){
    if(typeof ui === 'undefined' || !ui) return;
    LANGS.forEach(function(code){
      if(!ui[code]) ui[code] = {};
      var p = pack(code);
      ui[code]['brand.name'] = BRAND;
      ui[code]['brand.sub'] = p.tagline;
      ui[code]['footer.byline'] = p.footer;
      ui[code]['home.title'] = p.homeTitle;
      ui[code]['home.desc'] = p.homeDesc;
      ui[code]['sources.pageDesc'] = p.sourcesDesc;
      ui[code]['home.sourceDesc'] = p.sourcesDesc;
      if(ui[code]['sources.title']) ui[code]['sources.title'] = replaceBrandText(ui[code]['sources.title']);
      if(ui[code]['source.title']) ui[code]['source.title'] = replaceBrandText(ui[code]['source.title']);
    });
  }

  function cleanValue(value){
    if(typeof value === 'string'){
      var next = replaceBrandText(value);
      if(next === '터키어, 브라질 포르투갈어, 아랍어, 베트남어가 추가되었습니다.') return '';
      return next;
    }
    return value;
  }

  function patchData(value, seen){
    if(!value || typeof value !== 'object') return value;
    seen = seen || [];
    if(seen.indexOf(value) !== -1) return value;
    seen.push(value);
    if(Array.isArray(value)){
      for(var i = value.length - 1; i >= 0; i--){
        if(typeof value[i] === 'string') value[i] = cleanValue(value[i]);
        else patchData(value[i], seen);
        if(value[i] === '') value.splice(i, 1);
      }
      return value;
    }
    Object.keys(value).forEach(function(key){
      if(typeof value[key] === 'string') value[key] = cleanValue(value[key]);
      else patchData(value[key], seen);
    });
    return value;
  }

  function patchKnownData(){
    ['ui','updateHistory','sourceLibrary','sourceLibraryCats','lessons'].forEach(function(name){
      try{ if(window[name]) patchData(window[name]); }catch(err){}
    });
  }

  function patchVisibleDom(){
    var p = pack();
    var direct = [
      ['.brand-title', BRAND],
      ['.brand-sub', p.tagline],
      ['.sidebar-footer', p.footer],
      ['.home-title', p.homeTitle],
      ['.home-desc', p.homeDesc]
    ];
    direct.forEach(function(pair){
      document.querySelectorAll(pair[0]).forEach(function(node){ node.textContent = pair[1]; });
    });

    if(document.body && document.createTreeWalker){
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var node;
      while((node = walker.nextNode())){
        var oldText = node.nodeValue;
        var newText = cleanValue(oldText);
        if(newText !== oldText) node.nodeValue = newText;
      }
    }

    document.querySelectorAll('[title],[aria-label],[alt],[placeholder]').forEach(function(node){
      ['title','aria-label','alt','placeholder'].forEach(function(attr){
        if(node.hasAttribute(attr)) node.setAttribute(attr, replaceBrandText(node.getAttribute(attr)));
      });
    });

    document.querySelectorAll('meta[content]').forEach(function(node){
      node.setAttribute('content', replaceBrandText(node.getAttribute('content')));
    });
  }

  function syncRebrand(){
    patchLocaleKeys();
    patchKnownData();
    patchMeta();
    patchVisibleDom();
  }

  function wrapReturnHtml(name){
    var original = window[name] || (typeof window[name] === 'function' ? window[name] : null);
    if(typeof original !== 'function' || original.__coinProofPathWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      if(typeof result === 'string') result = replaceBrandText(result);
      setTimeout(syncRebrand, 0);
      return result;
    };
    wrapped.__coinProofPathWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderLesson') renderLesson = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderStartHere') renderStartHere = wrapped;
      if(name === 'renderFAQPage') renderFAQPage = wrapped;
      if(name === 'renderSafetyPage') renderSafetyPage = wrapped;
      if(name === 'renderGlossary') renderGlossary = wrapped;
      if(name === 'renderUpdateHistory') renderUpdateHistory = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'applyUI') applyUI = wrapped;
    }catch(err){}
  }

  ['renderHome','renderLesson','renderSources','renderStartHere','renderFAQPage','renderSafetyPage','renderGlossary','renderUpdateHistory','renderAllLessons','applyUI'].forEach(wrapReturnHtml);

  (function wrapSetLang(){
    var original = window.setLang || (typeof setLang === 'function' ? setLang : null);
    if(typeof original !== 'function' || original.__coinProofPathWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncRebrand();
      setTimeout(syncRebrand, 0);
      return result;
    };
    wrapped.__coinProofPathWrapped = true;
    window.setLang = wrapped;
    try{ setLang = wrapped; }catch(err){}
  })();

  syncRebrand();
  setTimeout(syncRebrand, 0);
  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncRebrand);
    window.addEventListener('hashchange', function(){ setTimeout(syncRebrand, 0); });
  }

  window.__COIN_PROOFPATH_REBRAND = {
    brand:BRAND,
    languages:LANGS.slice(),
    refresh:syncRebrand
  };
})();
