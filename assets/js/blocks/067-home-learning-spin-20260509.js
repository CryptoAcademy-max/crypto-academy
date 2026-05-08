(function(){
  if(typeof window === 'undefined' || typeof document === 'undefined') return;
  if(window.__homeLearningSpin20260509) return;
  window.__homeLearningSpin20260509 = true;

  var SPIN_SECTION_ID = 'home-learning-spin-section';
  var SPIN_STORAGE_KEY = 'cryptoAcademyHomeLearningSpin';
  var HOME_HASH_IDS = {
    checklists:'home-quick-checklists-section',
    freePdf:'home-free-pdf-value-section',
    ebook:'home-crypto-ebook-section'
  };
  var EBOOK_LINKS = {
    english:'https://buymeacoffee.com/BeeNetworkKorea/e/532817',
    korean:'https://buymeacoffee.com/BeeNetworkKorea/e/532815'
  };
  var FREE_PDF_FILES = {
    en:'pdf/crypto-safety-guide-en.pdf',
    ko:'pdf/crypto-safety-guide-ko.pdf',
    th:'pdf/crypto-safety-guide-th.pdf',
    id:'pdf/crypto-safety-guide-id.pdf',
    pt:'pdf/crypto-safety-guide-pt.pdf',
    br:'pdf/crypto-safety-guide-br.pdf',
    tr:'pdf/crypto-safety-guide-tr.pdf',
    es:'pdf/crypto-safety-guide-es.pdf',
    ar:'pdf/crypto-safety-guide-ar.pdf',
    vi:'pdf/crypto-safety-guide-vi.pdf',
    ha:'pdf/crypto-safety-guide-ha.pdf'
  };
  var SPIN_POOL = [
    'glossary',
    'safety',
    'lessonBlockchain',
    'lessonWallet',
    'lessonFirstBuy',
    'lessonScams',
    'beforeSendChecklist',
    'seedPhraseChecklist',
    'fakeWebsiteChecklist',
    'freePdf',
    'glossary',
    'safety',
    'lessonFirstBuy',
    'beforeSendChecklist',
    'freePdf',
    'ebookEnglish',
    'ebookKorean'
  ];
  var state = {
    timer:null,
    spinning:false,
    lastId:''
  };

  function normalizeLang(value){
    var lang = String(value || '').toLowerCase().trim();
    if(!lang) return 'en';
    if(lang === 'br' || lang.indexOf('pt-br') === 0) return 'pt';
    if(lang.indexOf('ko') === 0) return 'ko';
    if(lang.indexOf('th') === 0) return 'th';
    if(lang.indexOf('id') === 0) return 'id';
    if(lang.indexOf('pt') === 0) return 'pt';
    if(lang.indexOf('tr') === 0) return 'tr';
    if(lang.indexOf('es') === 0) return 'es';
    if(lang.indexOf('ar') === 0) return 'ar';
    if(lang.indexOf('vi') === 0) return 'vi';
    if(lang.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function getCurrentLang(){
    if(typeof currentLang === 'string' && currentLang) return normalizeLang(currentLang);
    if(document.documentElement && document.documentElement.lang) return normalizeLang(document.documentElement.lang);
    return 'en';
  }

  function getBasePrefix(){
    if(typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__) return window.__CA_BASE_PREFIX__;
    if(document.body && document.body.dataset && document.body.dataset.basePrefix) return document.body.dataset.basePrefix;
    return './';
  }

  function toIndexRoute(path){
    if(typeof window.__CA_TO_INDEX_ROUTE === 'function') return window.__CA_TO_INDEX_ROUTE(path);
    var value = String(path || '');
    if(!value) return 'index.html';
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
  }

  function getPageRoute(page){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function') return window.__CA_GET_PAGE_ROUTE(page);
    var base = getBasePrefix();
    if(page === 'home') return toIndexRoute(base);
    return toIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function') return window.__CA_GET_LESSON_ROUTE(index);
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    return toIndexRoute(getBasePrefix() + 'lesson/' + (slugs[index] || 'blockchain') + '/');
  }

  function getChecklistRoute(slug){
    var route = toIndexRoute(getBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g, '') + '/');
    var lang = getCurrentLang();
    return route + (route.indexOf('?') === -1 ? '?lang=' : '&lang=') + encodeURIComponent(lang);
  }

  function getHomeHashRoute(hash){
    return '#' + String(hash || '').replace(/^#/, '');
  }

  function getFreePdfHref(){
    var lang = getCurrentLang();
    var key = (typeof currentLang === 'string' && currentLang && FREE_PDF_FILES[currentLang]) ? currentLang : lang;
    var file = FREE_PDF_FILES[key] || FREE_PDF_FILES[lang] || FREE_PDF_FILES.en || FREE_PDF_FILES.ko;
    return getBasePrefix() + String(file || '');
  }

  function safeText(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function tText(key, fallback){
    if(typeof t === 'function'){
      try{
        var value = t(key);
        if(typeof value === 'string' && value && value !== key) return value;
      }catch(err){}
    }
    return fallback;
  }

  function clearSpinTimer(){
    if(state.timer){
      clearTimeout(state.timer);
      clearInterval(state.timer);
      state.timer = null;
    }
    state.spinning = false;
  }

  function saveLastSpin(id){
    state.lastId = String(id || '');
    try{
      localStorage.setItem(SPIN_STORAGE_KEY, JSON.stringify({
        id:state.lastId,
        at:Date.now()
      }));
    }catch(err){}
  }

  function loadLastSpin(){
    if(state.lastId) return state.lastId;
    try{
      var raw = localStorage.getItem(SPIN_STORAGE_KEY);
      if(!raw) return '';
      var parsed = JSON.parse(raw);
      if(parsed && typeof parsed.id === 'string'){
        state.lastId = parsed.id;
        return state.lastId;
      }
    }catch(err){}
    return '';
  }

  function prefersReducedMotion(){
    try{
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }catch(err){}
    return false;
  }

  function getSpinPack(){
    var lang = getCurrentLang();
    var langKey = lang === 'br' ? 'pt' : lang;
    var packs = {
      en:{
        sectionTitle:'Today\'s Learning Spin',
        sectionBody:'Get a light recommendation for what to explore today.',
        spinButton:'Spin for a Recommendation',
        note:'This is a free learning recommendation. You can spin again whenever you want.',
        resultHeading:'Today\'s Pick',
        spinningHeading:'Looking through today\'s options',
        idleType:'Learning Pick',
        idleTitle:'What should you explore today?',
        idleBody:'Press the button and get a real lesson, checklist, glossary, or PDF recommendation.',
        types:{ lesson:'Lesson', checklist:'Checklist', pdf:'Free PDF', ebook:'eBook', glossary:'Glossary', safety:'Safety' },
        ctas:{
          openNow:'Open Now',
          openLesson:'Open Related Lesson',
          openGlossary:'Open Glossary',
          openSafety:'Open Safety Page',
          relatedChecklist:'Related Checklist',
          relatedFreePdf:'Related Free PDF',
          exploreEbook:'Explore the eBook',
          openFreePdf:'Open Free PDF',
          viewEbook:'View eBook'
        },
        fallbacks:{
          glossary:'Quickly review the crypto terms beginners confuse most often.',
          safety:'Review fake websites, seed phrase risks, and address-related safety basics first.',
          blockchain:'Start with what blockchain is and why it matters before anything else.',
          wallet:'Understand what a wallet does before you try to hold or move anything.',
          firstBuy:'Review the key flow to check before buying crypto for the first time.',
          scams:'Revisit the scam warning signs beginners should know first.'
        },
        checklists:{
          beforeSend:{ title:'Before You Send Checklist', body:'Quickly recheck the address, network, and final confirmation.' },
          seedPhrase:{ title:'Seed Phrase Safety Check', body:'Revisit the most important rules for protecting your seed phrase.' },
          fakeWebsite:{ title:'Quick Fake Website Check', body:'Recheck the domain and link before you log in.' }
        },
        special:{
          freePdfTitle:'Free Practical Review PDF',
          freePdfBody:'Open a free PDF that is useful to revisit before real actions.',
          ebookEnglishTitle:'Crypto Academy eBook (English Edition)',
          ebookEnglishBody:'Explore the structured English eBook when you want a deeper review.',
          ebookKoreanTitle:'Crypto Academy eBook (Korean Edition)',
          ebookKoreanBody:'Explore the structured Korean eBook when you want a deeper review.'
        }
      },
      ko:{
        sectionTitle:'오늘의 추천 스핀',
        sectionBody:'오늘은 무엇부터 보면 좋을지 가볍게 추천받아보세요.',
        spinButton:'추천 돌려보기',
        note:'무료 학습 추천입니다. 언제든 다시 돌려볼 수 있습니다.',
        resultHeading:'오늘의 추천',
        spinningHeading:'오늘의 추천을 고르고 있어요',
        idleType:'학습 추천',
        idleTitle:'오늘 볼 것을 빠르게 골라볼까요?',
        idleBody:'버튼을 누르면 lesson, checklist, glossary, PDF 같은 실제 학습 자료를 추천해드립니다.',
        types:{ lesson:'레슨', checklist:'체크리스트', pdf:'무료 PDF', ebook:'전자책', glossary:'용어사전', safety:'보안' },
        ctas:{
          openNow:'지금 보기',
          openLesson:'관련 lesson 보기',
          openGlossary:'용어사전 보기',
          openSafety:'보안 페이지 보기',
          relatedChecklist:'관련 체크리스트',
          relatedFreePdf:'관련 무료 PDF',
          exploreEbook:'전자책 살펴보기',
          openFreePdf:'무료 PDF 열기',
          viewEbook:'전자책 보기'
        },
        fallbacks:{
          glossary:'초보자가 자주 헷갈리는 암호화폐 용어를 빠르게 정리합니다.',
          safety:'가짜 사이트, 시드 문구, 주소 관련 위험을 먼저 확인합니다.',
          blockchain:'블록체인이 무엇인지와 왜 쓰이는지부터 차분하게 시작합니다.',
          wallet:'무언가를 보관하기 전에 지갑이 어떤 역할을 하는지 먼저 이해합니다.',
          firstBuy:'첫 구매 전에 어떤 흐름을 확인해야 하는지 빠르게 정리합니다.',
          scams:'초보자가 먼저 알아야 할 사기 경고 신호를 다시 확인합니다.'
        },
        checklists:{
          beforeSend:{ title:'전송 전 체크리스트', body:'주소, 네트워크, 최종 확인을 짧게 다시 봅니다.' },
          seedPhrase:{ title:'시드 문구 보안 체크', body:'시드 문구를 지키기 위한 가장 중요한 원칙을 다시 확인합니다.' },
          fakeWebsite:{ title:'가짜 사이트 빠른 확인', body:'로그인 전에 도메인과 링크를 짧게 다시 확인합니다.' }
        },
        special:{
          freePdfTitle:'무료 복습용 실전 PDF',
          freePdfBody:'실제 행동 전에 짧게 다시 확인할 수 있는 무료 PDF를 엽니다.',
          ebookEnglishTitle:'영문 크립토 아카데미 전자책',
          ebookEnglishBody:'더 깊게 복습하고 싶을 때 정리된 영문 전자책을 살펴보세요.',
          ebookKoreanTitle:'한글 크립토 아카데미 전자책',
          ebookKoreanBody:'더 깊게 복습하고 싶을 때 정리된 한글 전자책을 살펴보세요.'
        }
      },
      th:{
        sectionTitle:'สปินแนะนำวันนี้',
        sectionBody:'รับคำแนะนำเบา ๆ ว่าวันนี้ควรเริ่มดูอะไรดี',
        spinButton:'หมุนรับคำแนะนำ',
        note:'นี่คือคำแนะนำการเรียนฟรี คุณสามารถหมุนใหม่ได้ทุกเมื่อ',
        resultHeading:'คำแนะนำวันนี้',
        spinningHeading:'กำลังเลือกคำแนะนำของวันนี้',
        idleType:'คำแนะนำการเรียน',
        idleTitle:'ลองเลือกสิ่งที่จะดูวันนี้แบบเร็ว ๆ ไหม',
        idleBody:'กดปุ่มแล้วเราจะแนะนำ lesson, checklist, glossary และ PDF ที่เหมาะกับวันนี้',
        types:{ lesson:'Lesson', checklist:'Checklist', pdf:'PDF ฟรี', ebook:'eBook', glossary:'Glossary', safety:'Safety' },
        ctas:{
          openNow:'เปิดเลย',
          openLesson:'ดู lesson ที่เกี่ยวข้อง',
          openGlossary:'ดู glossary',
          openSafety:'ดู safety',
          relatedChecklist:'เช็กลิสต์ที่เกี่ยวข้อง',
          relatedFreePdf:'PDF ฟรีที่เกี่ยวข้อง',
          exploreEbook:'ดู eBook',
          openFreePdf:'เปิด PDF ฟรี',
          viewEbook:'เปิด eBook'
        },
        fallbacks:{
          glossary:'สรุปคำศัพท์คริปโตที่มือใหม่มักสับสนได้อย่างรวดเร็ว',
          safety:'เริ่มจากความเสี่ยงเรื่องเว็บปลอม seed phrase และที่อยู่ก่อน',
          blockchain:'เริ่มอย่างช้า ๆ ด้วยความเข้าใจว่า blockchain คืออะไรและทำไมจึงสำคัญ',
          wallet:'ทำความเข้าใจหน้าที่ของ wallet ก่อนใช้งานจริง',
          firstBuy:'ทบทวนขั้นตอนสำคัญที่ควรรู้ก่อนซื้อคริปโตครั้งแรก',
          scams:'ทบทวนสัญญาณเตือนเรื่อง scam ที่มือใหม่ควรรู้ก่อน'
        },
        checklists:{
          beforeSend:{ title:'เช็กลิสต์ก่อนโอน', body:'ทบทวนที่อยู่ เครือข่าย และการยืนยันสุดท้ายแบบสั้น ๆ' },
          seedPhrase:{ title:'เช็กความปลอดภัย Seed Phrase', body:'ทบทวนกฎสำคัญที่สุดในการปกป้อง seed phrase ของคุณ' },
          fakeWebsite:{ title:'เช็กเว็บปลอมแบบเร็ว', body:'ตรวจโดเมนและลิงก์อีกครั้งก่อนเข้าสู่ระบบ' }
        },
        special:{
          freePdfTitle:'PDF ฟรีสำหรับทบทวน',
          freePdfBody:'เปิด PDF ฟรีที่เหมาะสำหรับทบทวนสั้น ๆ ก่อนลงมือจริง',
          ebookEnglishTitle:'Crypto Academy eBook (English Edition)',
          ebookEnglishBody:'หากอยากทบทวนแบบเป็นระบบมากขึ้น ให้ดู eBook ภาษาอังกฤษ',
          ebookKoreanTitle:'Crypto Academy eBook (Korean Edition)',
          ebookKoreanBody:'หากอยากทบทวนแบบเป็นระบบมากขึ้น ให้ดู eBook ภาษาเกาหลี'
        }
      }
    };
    return packs[langKey] || packs.en;
  }
  function getSpinUpgradePack(){
    var lang = getCurrentLang();
    var langKey = lang === 'br' ? 'pt' : lang;
    var packs = {
      en:{
        modeLabels:{
          pick:'Today\'s Pick',
          safetyMission:'Today\'s Safety Mission',
          minuteChallenge:'Today\'s 1-Minute Challenge',
          revisit:'Today\'s Revisit'
        },
        groupLabels:{
          lesson:'Lesson Pick',
          checklist:'Checklist Pick',
          review:'Review Pick',
          deep:'Deep Review Pick'
        },
        missionTitle:'Today\'s Mini Mission',
        restore:'See Your Last Pick Again',
        restoreNote:'Last saved pick ready to reopen',
        genericMissions:{
          lesson:'Open this once and go through the full flow from start to finish today.',
          checklist:'Open this checklist once and finish the short practical checks today.',
          review:'Reopen this for a short review when you need the essentials again today.',
          deep:'Use this when you want a calmer and more structured review today.'
        }
      },
      ko:{
        modeLabels:{
          pick:'오늘의 추천',
          safetyMission:'오늘의 안전 미션',
          minuteChallenge:'오늘의 1분 챌린지',
          revisit:'오늘의 다시 보기'
        },
        groupLabels:{
          lesson:'레슨 추천',
          checklist:'체크리스트 추천',
          review:'복습 추천',
          deep:'심화 복습 추천'
        },
        missionTitle:'오늘의 미니 미션',
        restore:'마지막 추천 다시 보기',
        restoreNote:'마지막으로 저장한 추천을 다시 열 수 있습니다',
        genericMissions:{
          lesson:'오늘은 이 흐름을 처음부터 끝까지 한 번 따라가 보세요.',
          checklist:'오늘은 이 체크리스트를 열고 짧은 실전 확인을 끝까지 해보세요.',
          review:'오늘은 핵심만 다시 보고 싶을 때 이 자료를 짧게 열어보세요.',
          deep:'오늘은 조금 더 차분하고 정리된 복습이 필요할 때 이 자료를 이어서 보세요.'
        }
      },
      th:{
        modeLabels:{
          pick:'คำแนะนำวันนี้',
          safetyMission:'ภารกิจความปลอดภัยวันนี้',
          minuteChallenge:'ชาเลนจ์ 1 นาทีวันนี้',
          revisit:'กลับมาดูวันนี้'
        },
        groupLabels:{
          lesson:'Lesson Pick',
          checklist:'Checklist Pick',
          review:'Review Pick',
          deep:'Deep Review Pick'
        },
        missionTitle:'ภารกิจสั้นของวันนี้',
        restore:'ดูคำแนะนำล่าสุดอีกครั้ง',
        restoreNote:'คำแนะนำล่าสุดพร้อมให้เปิดอีกครั้ง',
        genericMissions:{
          lesson:'วันนี้ลองเปิดอันนี้แล้วดูตามลำดับตั้งแต่ต้นจนจบหนึ่งรอบ',
          checklist:'วันนี้ลองเปิดเช็กลิสต์นี้แล้วทำการตรวจสั้น ๆ ให้ครบ',
          review:'วันนี้ถ้าอยากทบทวนเฉพาะแก่นสำคัญ ลองกลับมาเปิดอันนี้อีกครั้ง',
          deep:'ใช้สิ่งนี้เมื่ออยากทบทวนแบบสงบและเป็นระบบมากขึ้นในวันนี้'
        }
      }
    };
    return packs[langKey] || packs.en;
  }
  function getCandidateGroup(id){
    if(id === 'ebookEnglish' || id === 'ebookKorean') return 'deep';
    if(id === 'glossary' || id === 'safety' || id === 'freePdf') return 'review';
    if(id === 'beforeSendChecklist' || id === 'seedPhraseChecklist' || id === 'fakeWebsiteChecklist') return 'checklist';
    return 'lesson';
  }

  function getCandidateMode(id){
    if(id === 'beforeSendChecklist' || id === 'seedPhraseChecklist' || id === 'fakeWebsiteChecklist' || id === 'safety' || id === 'lessonScams'){
      return 'safetyMission';
    }
    if(id === 'glossary' || id === 'freePdf') return 'revisit';
    if(id === 'ebookEnglish' || id === 'ebookKorean') return 'pick';
    return 'minuteChallenge';
  }

  function getMissionText(candidate, upgradePack){
    if(!candidate) return '';
    var lang = getCurrentLang();
    var specific = {
      en:{
        glossary:'Today, review three glossary terms you still hesitate over.',
        safety:'Today, revisit one safety habit before you trust any link or message.',
        lessonBlockchain:'Today, spend one minute understanding what blockchain actually changes.',
        lessonWallet:'Today, make sure you can explain what a wallet does before you store anything.',
        lessonFirstBuy:'Today, go through the first-buy flow once from start to finish.',
        lessonScams:'Today, revisit one scam warning sign you never want to ignore.',
        beforeSendChecklist:'Today, review this checklist once before any transfer.',
        seedPhraseChecklist:'Today, revisit the three most important seed phrase safety rules.',
        fakeWebsiteChecklist:'Today, recheck the domain and link habits that prevent fake-site mistakes.',
        freePdf:'Today, save this PDF somewhere easy to reopen before real actions.',
        ebookEnglish:'Today, bookmark the English eBook if you want a more structured follow-up.',
        ebookKorean:'Today, bookmark the Korean eBook if you want a more structured follow-up.'
      },
      ko:{
        glossary:'오늘은 아직 헷갈리는 glossary 용어 3개만 다시 확인해보세요.',
        safety:'오늘은 아무 링크나 메시지를 믿기 전에 안전 습관 1가지를 다시 떠올려보세요.',
        lessonBlockchain:'오늘은 블록체인이 실제로 무엇을 바꾸는지 1분만 집중해서 읽어보세요.',
        lessonWallet:'오늘은 무언가를 보관하기 전에 지갑이 하는 역할을 한 번 설명해보세요.',
        lessonFirstBuy:'오늘은 첫 구매 흐름을 처음부터 끝까지 한 번 차분히 읽어보세요.',
        lessonScams:'오늘은 절대 놓치고 싶지 않은 사기 경고 신호 1개를 다시 확인해보세요.',
        beforeSendChecklist:'오늘은 실제 전송 전에 이 체크리스트를 한 번 끝까지 확인해보세요.',
        seedPhraseChecklist:'오늘은 시드 문구와 관련된 가장 중요한 규칙 3가지를 다시 점검해보세요.',
        fakeWebsiteChecklist:'오늘은 로그인 전에 도메인과 링크를 다시 보는 습관을 한 번 연습해보세요.',
        freePdf:'오늘은 실제 행동 전에 다시 볼 수 있도록 이 무료 PDF를 저장해두세요.',
        ebookEnglish:'오늘은 더 정리된 복습이 필요할 때를 위해 영문 전자책을 북마크해두세요.',
        ebookKorean:'오늘은 더 정리된 복습이 필요할 때를 위해 한글 전자책을 북마크해두세요.'
      }
    };
    if(specific[lang] && specific[lang][candidate.id]) return specific[lang][candidate.id];
    return (upgradePack.genericMissions && upgradePack.genericMissions[candidate.group]) || '';
  }

  function getCandidateMeta(id, pack){
    switch(id){
      case 'glossary':
        return { type:'glossary', title:tText('nav.glossary', 'Glossary'), body:tText('nav.glossarysub', pack.fallbacks.glossary) };
      case 'safety':
        return { type:'safety', title:tText('nav.safety', 'Safety'), body:tText('nav.safetysub', pack.fallbacks.safety) };
      case 'lessonBlockchain':
        return { type:'lesson', title:tText('nav.l1', 'Blockchain Basics'), body:tText('nav.l1sub', pack.fallbacks.blockchain) };
      case 'lessonWallet':
        return { type:'lesson', title:tText('nav.l2', 'Wallet Basics'), body:tText('nav.l2sub', pack.fallbacks.wallet) };
      case 'lessonFirstBuy':
        return { type:'lesson', title:tText('nav.l6', 'First Buy Guide'), body:tText('nav.l6sub', pack.fallbacks.firstBuy) };
      case 'lessonScams':
        return { type:'lesson', title:tText('nav.l7', 'Scam Prevention'), body:tText('nav.l7sub', pack.fallbacks.scams) };
      case 'beforeSendChecklist':
        return { type:'checklist', title:pack.checklists.beforeSend.title, body:pack.checklists.beforeSend.body };
      case 'seedPhraseChecklist':
        return { type:'checklist', title:pack.checklists.seedPhrase.title, body:pack.checklists.seedPhrase.body };
      case 'fakeWebsiteChecklist':
        return { type:'checklist', title:pack.checklists.fakeWebsite.title, body:pack.checklists.fakeWebsite.body };
      case 'freePdf':
        return { type:'pdf', title:pack.special.freePdfTitle, body:pack.special.freePdfBody };
      case 'ebookEnglish':
        return { type:'ebook', title:pack.special.ebookEnglishTitle, body:pack.special.ebookEnglishBody };
      case 'ebookKorean':
        return { type:'ebook', title:pack.special.ebookKoreanTitle, body:pack.special.ebookKoreanBody };
    }
    return { type:'lesson', title:'Crypto Academy', body:'' };
  }

  function createAction(role, kind, href, external){
    return { role:role, kind:kind, href:href, external:!!external };
  }

  function getCandidateById(id){
    var pack = getSpinPack();
    var meta = getCandidateMeta(id, pack);
    var candidate = {
      id:id,
      type:meta.type,
      group:getCandidateGroup(id),
      mode:getCandidateMode(id),
      title:meta.title,
      body:meta.body,
      actions:[]
    };

    switch(id){
      case 'glossary':
        candidate.actions = [
          createAction('primary', 'openNow', getPageRoute('glossary')),
          createAction('secondary', 'openLesson', getLessonRoute(0)),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'safety':
        candidate.actions = [
          createAction('primary', 'openNow', getPageRoute('safety')),
          createAction('secondary', 'relatedFreePdf', getFreePdfHref(), true),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'lessonBlockchain':
        candidate.actions = [
          createAction('primary', 'openNow', getLessonRoute(0)),
          createAction('secondary', 'openGlossary', getPageRoute('glossary')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'lessonWallet':
        candidate.actions = [
          createAction('primary', 'openNow', getLessonRoute(1)),
          createAction('secondary', 'relatedChecklist', getChecklistRoute('before-send')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'lessonFirstBuy':
        candidate.actions = [
          createAction('primary', 'openNow', getLessonRoute(5)),
          createAction('secondary', 'relatedFreePdf', getFreePdfHref(), true),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'lessonScams':
        candidate.actions = [
          createAction('primary', 'openNow', getLessonRoute(6)),
          createAction('secondary', 'relatedChecklist', getChecklistRoute('seed-phrase-safety')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'beforeSendChecklist':
        candidate.actions = [
          createAction('primary', 'openNow', getChecklistRoute('before-send')),
          createAction('secondary', 'relatedFreePdf', getFreePdfHref(), true),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'seedPhraseChecklist':
        candidate.actions = [
          createAction('primary', 'openNow', getChecklistRoute('seed-phrase-safety')),
          createAction('secondary', 'openSafety', getPageRoute('safety')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'fakeWebsiteChecklist':
        candidate.actions = [
          createAction('primary', 'openNow', getChecklistRoute('fake-website-check')),
          createAction('secondary', 'openSafety', getPageRoute('safety')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'freePdf':
        candidate.actions = [
          createAction('primary', 'openFreePdf', getFreePdfHref(), true),
          createAction('secondary', 'relatedChecklist', getChecklistRoute('before-send')),
          createAction('deep', 'exploreEbook', getHomeHashRoute(HOME_HASH_IDS.ebook))
        ];
        break;
      case 'ebookEnglish':
        candidate.actions = [
          createAction('primary', 'viewEbook', EBOOK_LINKS.english, true),
          createAction('secondary', 'openLesson', getLessonRoute(5)),
          createAction('deep', 'relatedFreePdf', getFreePdfHref(), true)
        ];
        break;
      case 'ebookKorean':
        candidate.actions = [
          createAction('primary', 'viewEbook', EBOOK_LINKS.korean, true),
          createAction('secondary', 'openLesson', getLessonRoute(5)),
          createAction('deep', 'relatedFreePdf', getFreePdfHref(), true)
        ];
        break;
    }

    return candidate;
  }

  function getActionLabel(kind, pack){
    var labels = pack.ctas || {};
    return labels[kind] || labels.openNow || 'Open Now';
  }

  function getModeLabel(modeKey, upgradePack){
    return (upgradePack.modeLabels && upgradePack.modeLabels[modeKey]) || modeKey;
  }

  function getGroupLabel(groupKey, upgradePack){
    return (upgradePack.groupLabels && upgradePack.groupLabels[groupKey]) || groupKey;
  }

  function getMissionAction(candidate){
    if(!candidate || !candidate.actions || !candidate.actions.length) return null;
    return candidate.actions[0] || null;
  }

  function emphasizeSpinResult(section){
    if(!section) return;
    var result = section.querySelector('[data-spin-result]');
    if(!result) return;
    result.classList.remove('is-settled');
    if(typeof result.offsetWidth === 'number') result.offsetWidth;
    result.classList.add('is-settled');
    setTimeout(function(){
      result.classList.remove('is-settled');
    }, 1400);
  }

  function getSpinStepDelays(){
    if(prefersReducedMotion()) return [90, 120, 155, 190, 225];
    return [68, 72, 76, 82, 90, 100, 112, 126, 142, 162, 186, 214];
  }

  function updateLastPickState(section, candidate){
    if(!section) return;
    var upgradePack = getSpinUpgradePack();
    var restoreButton = section.querySelector('[data-spin-restore]');
    var restoreNote = section.querySelector('[data-spin-restore-note]');
    var lastId = candidate && candidate.id ? candidate.id : loadLastSpin();
    if(restoreButton){
      restoreButton.hidden = !lastId;
      restoreButton.textContent = upgradePack.restore;
    }
    if(restoreNote){
      restoreNote.hidden = !lastId;
      if(lastId){
        var lastCandidate = candidate && candidate.id === lastId ? candidate : getCandidateById(lastId);
        restoreNote.textContent = upgradePack.restoreNote + ': ' + lastCandidate.title;
      } else {
        restoreNote.textContent = '';
      }
    }
  }

  function buildSpinSectionHtml(){
    var pack = getSpinPack();
    var upgradePack = getSpinUpgradePack();
    return ''
      + '<section id="' + SPIN_SECTION_ID + '" class="home-learning-spin-block home-situation-block">'
      +   '<div class="home-situation-title">' + safeText(pack.sectionTitle) + '</div>'
      +   '<div class="home-situation-body">' + safeText(pack.sectionBody) + '</div>'
      +   '<div class="home-learning-spin-shell">'
      +     '<div class="home-learning-spin-controls">'
      +       '<button type="button" class="home-learning-spin-button home-identity-cta" data-spin-trigger data-home-track="home.spin.open" data-home-track-label="Open learning spin">' + safeText(pack.spinButton) + '</button>'
      +       '<div class="home-learning-spin-note">' + safeText(pack.note) + '</div>'
      +       '<button type="button" class="home-learning-spin-last" data-spin-restore data-home-track="home.spin.lastpick.reopen" data-home-track-label="Reopen last spin result" hidden>' + safeText(upgradePack.restore) + '</button>'
      +       '<div class="home-learning-spin-last-note" data-spin-restore-note hidden></div>'
      +     '</div>'
      +     '<article class="home-learning-spin-result" data-spin-result aria-live="polite">'
      +       '<div class="home-learning-spin-kicker" data-spin-kicker></div>'
      +       '<div class="home-learning-spin-head"><span class="home-learning-spin-mode" data-spin-mode></span><span class="home-learning-spin-type" data-spin-type></span></div>'
      +       '<div class="home-learning-spin-title" data-spin-title></div>'
      +       '<div class="home-learning-spin-body" data-spin-body></div>'
      +       '<a class="home-learning-spin-mission" data-spin-mission aria-disabled="true"><div class="home-learning-spin-mission-title" data-spin-mission-title></div><div class="home-learning-spin-mission-body" data-spin-mission-body></div></a>'
      +       '<div class="home-learning-spin-actions" data-spin-actions></div>'
      +     '</article>'
      +   '</div>'
      + '</section>';
  }

  function renderSpinResult(section, candidate, spinning){
    if(!section) return;
    var pack = getSpinPack();
    var upgradePack = getSpinUpgradePack();
    var result = section.querySelector('[data-spin-result]');
    var kicker = section.querySelector('[data-spin-kicker]');
    var mode = section.querySelector('[data-spin-mode]');
    var type = section.querySelector('[data-spin-type]');
    var title = section.querySelector('[data-spin-title]');
    var body = section.querySelector('[data-spin-body]');
    var mission = section.querySelector('[data-spin-mission]');
    var missionTitle = section.querySelector('[data-spin-mission-title]');
    var missionBody = section.querySelector('[data-spin-mission-body]');
    var actions = section.querySelector('[data-spin-actions]');
    if(!result || !kicker || !mode || !type || !title || !body || !mission || !missionTitle || !missionBody || !actions) return;

    result.classList.toggle('is-spinning', !!spinning);
    result.classList.remove('is-settled');
    kicker.textContent = spinning ? pack.spinningHeading : pack.resultHeading;
    result.dataset.spinMode = candidate && candidate.mode ? candidate.mode : 'pick';
    result.dataset.spinGroup = candidate && candidate.group ? candidate.group : 'review';

    if(!candidate){
      mode.textContent = getModeLabel('pick', upgradePack);
      type.textContent = pack.idleType;
      title.textContent = pack.idleTitle;
      body.textContent = pack.idleBody;
      missionTitle.textContent = upgradePack.missionTitle;
      missionBody.textContent = upgradePack.genericMissions.review;
      mission.removeAttribute('href');
      mission.removeAttribute('target');
      mission.removeAttribute('rel');
      mission.removeAttribute('data-home-track');
      mission.removeAttribute('data-home-track-label');
      mission.removeAttribute('data-spin-role');
      mission.removeAttribute('data-spin-id');
      mission.setAttribute('aria-disabled', 'true');
      actions.innerHTML = '';
      updateLastPickState(section, null);
      return;
    }

    var missionAction = getMissionAction(candidate);
    mode.textContent = getModeLabel(candidate.mode, upgradePack);
    type.textContent = getGroupLabel(candidate.group, upgradePack);
    title.textContent = candidate.title;
    body.textContent = candidate.body;
    missionTitle.textContent = upgradePack.missionTitle;
    missionBody.textContent = getMissionText(candidate, upgradePack);
    if(missionAction && missionAction.href){
      mission.setAttribute('href', missionAction.href);
      mission.setAttribute('data-home-track', 'home.spin.mission.' + safeText(candidate.id));
      mission.setAttribute('data-home-track-label', 'Spin mission ' + safeText(candidate.id));
      mission.setAttribute('data-spin-role', 'mission');
      mission.setAttribute('data-spin-id', safeText(candidate.id));
      mission.setAttribute('aria-disabled', 'false');
      if(missionAction.external){
        mission.setAttribute('target', '_blank');
        mission.setAttribute('rel', 'noopener noreferrer');
      } else {
        mission.removeAttribute('target');
        mission.removeAttribute('rel');
      }
    } else {
      mission.removeAttribute('href');
      mission.removeAttribute('target');
      mission.removeAttribute('rel');
      mission.removeAttribute('data-home-track');
      mission.removeAttribute('data-home-track-label');
      mission.removeAttribute('data-spin-role');
      mission.removeAttribute('data-spin-id');
      mission.setAttribute('aria-disabled', 'true');
    }
    actions.innerHTML = candidate.actions.map(function(action){
      var label = getActionLabel(action.kind, pack);
      var classes = ['home-learning-spin-action'];
      if(action.role === 'primary') classes.push('is-primary');
      if(action.role === 'deep') classes.push('is-deep');
      return ''
        + '<a class="' + classes.join(' ') + '"'
        + ' href="' + safeText(action.href) + '"'
        + ' data-home-track="home.spin.cta.' + safeText(action.role) + '.' + safeText(candidate.id) + '"'
        + ' data-home-track-label="Spin ' + safeText(action.role) + ' CTA ' + safeText(candidate.id) + '"'
        + ' data-spin-role="' + safeText(action.role) + '"'
        + ' data-spin-id="' + safeText(candidate.id) + '"'
        + (action.external ? ' target="_blank" rel="noopener noreferrer"' : '')
        + '>'
        + safeText(label)
        + '</a>';
    }).join('');
    updateLastPickState(section, candidate);
  }

  function pickRandomId(){
    return SPIN_POOL[Math.floor(Math.random() * SPIN_POOL.length)] || 'glossary';
  }

  function trackSpinResult(candidate){
    if(!candidate || typeof window.trackHomeConversionClick !== 'function') return;
    try{
      window.trackHomeConversionClick('home.spin.result.' + candidate.id, 'Spin result ' + candidate.id);
      if(candidate.group){
        window.trackHomeConversionClick('home.spin.result.type.' + candidate.group, 'Spin result type ' + candidate.group);
      }
    }catch(err){}
  }

  function startLearningSpin(section){
    if(!section || state.spinning) return;
    clearSpinTimer();
    state.spinning = true;
    var button = section.querySelector('[data-spin-trigger]');
    if(button){
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
    }
    var delays = getSpinStepDelays();
    var step = 0;

    function finishSpin(){
      clearSpinTimer();
      var finalCandidate = getCandidateById(pickRandomId());
      renderSpinResult(section, finalCandidate, false);
      saveLastSpin(finalCandidate.id);
      trackSpinResult(finalCandidate);
      emphasizeSpinResult(section);
      if(button){
        button.disabled = false;
        button.removeAttribute('aria-busy');
      }
    }

    function spinStep(){
      var preview = getCandidateById(pickRandomId());
      renderSpinResult(section, preview, true);
      if(step >= delays.length - 1){
        finishSpin();
        return;
      }
      var delay = delays[step];
      step += 1;
      state.timer = setTimeout(spinStep, delay);
    }

    spinStep();
  }

  function bindSpinSection(section){
    if(!section || section.__homeLearningSpinBound) return;
    section.__homeLearningSpinBound = true;
    var trigger = section.querySelector('[data-spin-trigger]');
    var restore = section.querySelector('[data-spin-restore]');
    if(trigger){
      trigger.addEventListener('click', function(){
        startLearningSpin(section);
      });
    }
    if(restore){
      restore.addEventListener('click', function(){
        var lastId = loadLastSpin();
        if(!lastId) return;
        var candidate = getCandidateById(lastId);
        renderSpinResult(section, candidate, false);
        emphasizeSpinResult(section);
      });
    }
    section.addEventListener('click', function(event){
      var mission = event.target && event.target.closest ? event.target.closest('[data-spin-role="mission"]') : null;
      var primary = event.target && event.target.closest ? event.target.closest('[data-spin-role="primary"]') : null;
      if((mission || primary) && typeof window.trackHomeConversionClick === 'function'){
        try{
          window.trackHomeConversionClick('home.spin.mission.open', 'Spin mission open');
        }catch(err){}
      }
    });
  }

  function ensureHomeLearningSpinSection(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;

    Array.prototype.slice.call(panel.querySelectorAll('.home-learning-spin-block')).forEach(function(node){
      if(node.parentNode !== hero) node.remove();
    });

    var block = hero.querySelector('.home-learning-spin-block');
    if(!block){
      var topThree = hero.querySelector('.home-start-three-block');
      var showcase = hero.querySelector('.home-hero-showcase-block');
      var desc = hero.querySelector('.home-desc');
      var anchor = topThree || showcase || desc;
      if(anchor){
        anchor.insertAdjacentHTML('afterend', buildSpinSectionHtml());
      } else {
        hero.insertAdjacentHTML('beforeend', buildSpinSectionHtml());
      }
      block = hero.querySelector('.home-learning-spin-block');
    }

    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildSpinSectionHtml();
    var next = host.firstElementChild;
    if(next && block !== next) block.replaceWith(next);
    block = hero.querySelector('.home-learning-spin-block');
    bindSpinSection(block);

    var lastId = loadLastSpin();
    var candidate = lastId ? getCandidateById(lastId) : null;
    renderSpinResult(block, candidate, false);
  }

  function syncHomeLearningSpin(){
    clearSpinTimer();
    ensureHomeLearningSpinSection();
  }

  function rebind(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeLearningSpinWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeLearningSpin();
      return result;
    };
    wrapped.__homeLearningSpinWrapped = true;
    wrapped.__homeLearningSpinOriginal = original;
    window[name] = wrapped;
    rebind(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');
  syncHomeLearningSpin();
})();
