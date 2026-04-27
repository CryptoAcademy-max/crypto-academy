(function(){
  // ========== 1. SEARCH ==========
  // Add search button to topbar
  var topbarRight = document.querySelector('.topbar-right');
  var progressPill = topbarRight.querySelector('.progress-pill');
  var searchBtn = document.createElement('button');
  searchBtn.className = 'search-trigger';
  searchBtn.type = 'button';
  searchBtn.innerHTML = '<svg class="search-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  searchBtn.onclick = function(){ openSearch(); };
  topbarRight.insertBefore(searchBtn, progressPill);

  var searchUiText = {
    en:'Search for a topic',
    ko:'검색어를 입력하세요',
    th:'ค้นหาหัวข้อ',
    id:'Cari topik',
    pt:'Pesquisar topico',
    br:'Pesquisar topico',
    es:'Buscar tema',
    tr:'Konu ara',
    ar:'ابحث عن موضوع',
    vi:'Tim chu de'
  };

  searchUiText.ha = 'Nemi darasi, kamus, FAQ, ko madogara';
  function getSearchUiText(){
    return searchUiText[currentLang] || searchUiText.en;
  }

  function renderSearchUiText(){
    var text = getSearchUiText();
    var searchTriggerText = searchBtn.querySelector('.search-trigger-text');
    var searchInputEl = document.getElementById('searchInput');
    if(searchTriggerText) searchTriggerText.textContent = text;
    if(searchInputEl) searchInputEl.placeholder = text;
    searchBtn.setAttribute('aria-label', text);
    searchBtn.setAttribute('title', text);
  }

  var VISITOR_COUNTER_HOST_ID = 'homeVisitorBlock';
  var VISITOR_COUNTER_MARKUP =
    '<div class="search-visitor-pill">' +
      '<div class="search-visitor-label" id="visitorTodayLabel">Today Visitors</div>' +
      '<div class="search-visitor-value is-loading" id="visitorTodayValue">--</div>' +
    '</div>' +
    '<div class="search-visitor-pill">' +
      '<div class="search-visitor-label" id="visitorTotalLabel">Total Visitors</div>' +
      '<div class="search-visitor-value is-loading" id="visitorTotalValue">--</div>' +
    '</div>';

  function getVisitorCounterBlock(){
    return document.getElementById(VISITOR_COUNTER_HOST_ID);
  }

  function buildVisitorCounterBlock(){
    var block = document.createElement('div');
    block.className = 'topbar-visitor-block home-visitor-block';
    block.id = VISITOR_COUNTER_HOST_ID;
    block.setAttribute('aria-live', 'polite');
    block.innerHTML = VISITOR_COUNTER_MARKUP;
    return block;
  }

  function ensureVisitorCounterBlockMounted(){
    var homePanel = document.getElementById('homePanel');
    if(!homePanel) return null;
    var homeHero = homePanel.querySelector('.home-hero');
    var desc = homeHero ? homeHero.querySelector('.home-desc') : null;
    var block = getVisitorCounterBlock();
    if(!block){
      block = buildVisitorCounterBlock();
      if(desc){
        desc.insertAdjacentElement('afterend', block);
      }else if(homeHero){
        homeHero.insertAdjacentElement('afterbegin', block);
      }else{
        homePanel.insertAdjacentElement('afterbegin', block);
      }
    }else if(desc && block.previousElementSibling !== desc){
      desc.insertAdjacentElement('afterend', block);
    }
    if(!block.querySelector('#visitorTodayLabel') || !block.querySelector('#visitorTotalLabel') || !block.querySelector('#visitorTodayValue') || !block.querySelector('#visitorTotalValue')){
      block.innerHTML = VISITOR_COUNTER_MARKUP;
    }
    return block;
  }

  ensureVisitorCounterBlockMounted();

  var visitorCounterText = {
    en:{today:'Today Visitors',total:'Total Visitors'},
    ko:{today:'오늘 방문자',total:'누적 방문자'},
    th:{today:'ผู้เยี่ยมชมวันนี้',total:'ผู้เยี่ยมชมทั้งหมด'},
    id:{today:'Pengunjung Hari Ini',total:'Total Pengunjung'},
    pt:{today:'Visitantes de Hoje',total:'Total de Visitantes'},
    br:{today:'Visitantes de Hoje',total:'Total de Visitantes'},
    tr:{today:'Bugünkü Ziyaretçiler',total:'Toplam Ziyaretçi'},
    ar:{today:'زوار اليوم',total:'إجمالي الزوار'},
    vi:{today:'Khách Hôm Nay',total:'Tổng Khách'},
    es:{today:'Visitantes de Hoy',total:'Visitantes Totales'}
  };

  visitorCounterText.ha = {today:'Masu ziyara na yau', total:'Jimillar masu ziyara'};
  visitorCounterText.en = {today:'Today Visitors',total:'Total Visitors'};
  visitorCounterText.ko = {today:'오늘 방문자',total:'누적 방문자'};
  visitorCounterText.th = {today:'ผู้เยี่ยมชมวันนี้',total:'ผู้เยี่ยมชมทั้งหมด'};
  visitorCounterText.id = {today:'Pengunjung Hari Ini',total:'Total Pengunjung'};
  visitorCounterText.pt = {today:'Visitantes de Hoje',total:'Total de Visitantes'};
  visitorCounterText.br = {today:'Visitantes de Hoje',total:'Total de Visitantes'};
  visitorCounterText.tr = {today:'Bugünkü Ziyaretçiler',total:'Toplam Ziyaretçi'};
  visitorCounterText.ar = {today:'زوار اليوم',total:'إجمالي الزوار'};
  visitorCounterText.vi = {today:'Khách Hôm Nay',total:'Tổng Khách'};
  visitorCounterText.es = {today:'Visitantes de Hoy',total:'Visitantes Totales'};
  var VISITOR_COUNTER_NAMESPACE = 'crypto-academy-platform';
  var VISITOR_COUNTER_TOTAL_KEY = 'visitors-total';
  var VISITOR_COUNTER_TOTAL_BASELINE = 580;
  var VISITOR_COUNTER_FALLBACK_PREFIX = 'cryptoAcademyVisitorFallback';
  var VISITOR_COUNTER_TOTAL_STORAGE_KEY = 'cryptoAcademyTotalVisitors';
  var VISITOR_COUNTER_TODAY_STORAGE_KEY = 'cryptoAcademyTodayVisitors';
  var VISITOR_COUNTER_TODAY_DATE_STORAGE_KEY = 'cryptoAcademyTodayDate';
  var visitorTodayLabelEl = null;
  var visitorTotalLabelEl = null;
  var visitorTodayValueEl = null;
  var visitorTotalValueEl = null;

  function refreshVisitorCounterRefs(){
    ensureVisitorCounterBlockMounted();
    visitorTodayLabelEl = document.getElementById('visitorTodayLabel');
    visitorTotalLabelEl = document.getElementById('visitorTotalLabel');
    visitorTodayValueEl = document.getElementById('visitorTodayValue');
    visitorTotalValueEl = document.getElementById('visitorTotalValue');
  }

  refreshVisitorCounterRefs();

  function getVisitorCounterText(){
    return visitorCounterText[currentLang] || visitorCounterText.en;
  }

  function renderVisitorCounterLabels(){
    refreshVisitorCounterRefs();
    var text = getVisitorCounterText();
    if(visitorTodayLabelEl) visitorTodayLabelEl.textContent = text.today;
    if(visitorTotalLabelEl) visitorTotalLabelEl.textContent = text.total;
  }

  function setVisitorCounterValues(today, total){
    refreshVisitorCounterRefs();
    if(visitorTodayValueEl){
      visitorTodayValueEl.textContent = today;
      visitorTodayValueEl.classList.remove('is-loading');
    }
    if(visitorTotalValueEl){
      visitorTotalValueEl.textContent = total;
      visitorTotalValueEl.classList.remove('is-loading');
    }
  }

  function setVisitorCounterLoading(){
    refreshVisitorCounterRefs();
    if(visitorTodayValueEl){
      visitorTodayValueEl.textContent = '--';
      visitorTodayValueEl.classList.add('is-loading');
    }
    if(visitorTotalValueEl){
      visitorTotalValueEl.textContent = '--';
      visitorTotalValueEl.classList.add('is-loading');
    }
  }

  function getVisitorDayKey(){
    var parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(new Date()).reduce(function(acc, part){
      if(part.type !== 'literal') acc[part.type] = part.value;
      return acc;
    }, {});
    return 'visitors-' + parts.year + '-' + parts.month + '-' + parts.day;
  }

  function extractVisitorCount(data){
    if(data && typeof data.count === 'number') return data.count;
    if(data && typeof data.value === 'number') return data.value;
    if(data && data.data && typeof data.data.count === 'number') return data.data.count;
    return null;
  }

  function readVisitorFallbackNumber(key, fallbackValue){
    try{
      var raw = localStorage.getItem(key);
      var value = parseInt(raw, 10);
      return isFinite(value) && value >= 0 ? value : fallbackValue;
    }catch(err){
      return fallbackValue;
    }
  }

  function writeVisitorFallbackNumber(key, value){
    try{
      localStorage.setItem(key, String(value));
    }catch(err){}
  }

  function readVisitorFallbackText(key){
    try{
      return localStorage.getItem(key) || '';
    }catch(err){
      return '';
    }
  }

  function writeVisitorFallbackText(key, value){
    try{
      localStorage.setItem(key, String(value));
    }catch(err){}
  }

  function getVisitorFallbackCounts(shouldIncrement){
    var dayKey = getVisitorDayKey();
    var legacyTodayKey = VISITOR_COUNTER_FALLBACK_PREFIX + ':' + dayKey;
    var legacyTotalKey = VISITOR_COUNTER_FALLBACK_PREFIX + ':total';
    var storedDay = readVisitorFallbackText(VISITOR_COUNTER_TODAY_DATE_STORAGE_KEY);
    var todayCount = storedDay === dayKey
      ? readVisitorFallbackNumber(VISITOR_COUNTER_TODAY_STORAGE_KEY, readVisitorFallbackNumber(legacyTodayKey, 0))
      : 0;
    var totalCount = readVisitorFallbackNumber(VISITOR_COUNTER_TOTAL_STORAGE_KEY, readVisitorFallbackNumber(legacyTotalKey, VISITOR_COUNTER_TOTAL_BASELINE));
    if(totalCount < VISITOR_COUNTER_TOTAL_BASELINE) totalCount = VISITOR_COUNTER_TOTAL_BASELINE;
    if(shouldIncrement){
      todayCount += 1;
      totalCount += 1;
    }
    writeVisitorFallbackText(VISITOR_COUNTER_TODAY_DATE_STORAGE_KEY, dayKey);
    writeVisitorFallbackNumber(VISITOR_COUNTER_TODAY_STORAGE_KEY, todayCount);
    writeVisitorFallbackNumber(VISITOR_COUNTER_TOTAL_STORAGE_KEY, totalCount);
    writeVisitorFallbackNumber(legacyTodayKey, todayCount);
    writeVisitorFallbackNumber(legacyTotalKey, totalCount);
    return { today: todayCount, total: totalCount };
  }

  // Shared visitor counts are stored in CounterAPI keys, so every client reads the same source.
  function requestVisitorCounter(path){
    if(typeof window !== 'undefined' && window.location && window.location.protocol === 'file:'){
      return Promise.resolve(null);
    }
    return fetch('https://api.counterapi.dev/v1/' + path, { cache:'no-store' }).then(function(res){
      if(!res.ok) throw new Error('visitor-counter-request-failed');
      return res.json();
    }).catch(function(err){
      if(typeof console !== 'undefined' && console.warn){
        console.warn('visitor-counter-unavailable', err && err.message ? err.message : err);
      }
      return null;
    });
  }

  function loadVisitorCounters(){
    ensureVisitorCounterBlockMounted();
    var todayKey = getVisitorDayKey();
    var shouldIncrement = !window.__visitorCountedThisLoad;
    if(shouldIncrement) window.__visitorCountedThisLoad = true;
    var fallbackCounts = getVisitorFallbackCounts(shouldIncrement);

    var totalRequest = shouldIncrement
      ? requestVisitorCounter(VISITOR_COUNTER_NAMESPACE + '/' + VISITOR_COUNTER_TOTAL_KEY + '/up')
      : requestVisitorCounter(VISITOR_COUNTER_NAMESPACE + '/' + VISITOR_COUNTER_TOTAL_KEY);
    var todayRequest = shouldIncrement
      ? requestVisitorCounter(VISITOR_COUNTER_NAMESPACE + '/' + todayKey + '/up')
      : requestVisitorCounter(VISITOR_COUNTER_NAMESPACE + '/' + todayKey);

    return Promise.all([todayRequest, totalRequest]).then(function(results){
      var todayCount = extractVisitorCount(results[0]);
      var totalCount = extractVisitorCount(results[1]);
      if(todayCount == null) todayCount = fallbackCounts.today;
      if(totalCount == null || totalCount < fallbackCounts.total) totalCount = fallbackCounts.total;
      if(totalCount > fallbackCounts.total){
        writeVisitorFallbackNumber(VISITOR_COUNTER_FALLBACK_PREFIX + ':total', totalCount);
      }
      setVisitorCounterValues(todayCount, totalCount);
    });
  }

  function renderHomeVisitorCounters(){
    var block = ensureVisitorCounterBlockMounted();
    if(!block) return Promise.resolve(false);
    renderVisitorCounterLabels();
    if(currentPage !== 'home'){
      block.hidden = true;
      return Promise.resolve(false);
    }
    block.hidden = false;
    setVisitorCounterLoading();
    return loadVisitorCounters();
  }

  renderHomeVisitorCounters();
  renderSearchUiText();

  function syncVisitorCounterVisibility(){
    var block = ensureVisitorCounterBlockMounted();
    if(block) block.hidden = currentPage !== 'home';
  }

  syncVisitorCounterVisibility();

  window.openSearch = function(){
    document.getElementById('searchOverlay').classList.add('open');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
    renderVisitorCounterLabels();
    renderSearchUiText();
    loadVisitorCounters();
    setTimeout(function(){ document.getElementById('searchInput').focus(); }, 100);
  };
  window.closeSearch = function(){
    document.getElementById('searchOverlay').classList.remove('open');
  };
  document.getElementById('searchOverlay').addEventListener('click', function(e){
    if(e.target === this) closeSearch();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeSearch();
    if((e.ctrlKey || e.metaKey) && e.key === 'k'){ e.preventDefault(); openSearch(); }
  });

  var __visitorSetLang = window.setLang;
  if(typeof __visitorSetLang === 'function' && !__visitorSetLang.__visitorCounterWrapped){
    var wrappedSetLang = function(lang){
      __visitorSetLang(lang);
      renderHomeVisitorCounters();
      renderSearchUiText();
    };
    wrappedSetLang.__visitorCounterWrapped = true;
    window.setLang = wrappedSetLang;
  }

  var __visitorShowPage = window.showPage;
  if(typeof __visitorShowPage === 'function' && !__visitorShowPage.__visitorVisibilityWrapped){
    var wrappedShowPage = function(page){
      __visitorShowPage(page);
      if(page === 'home') renderHomeVisitorCounters();
      else syncVisitorCounterVisibility();
    };
    wrappedShowPage.__visitorVisibilityWrapped = true;
    window.showPage = wrappedShowPage;
  }

  var __visitorShowLesson = window.showLesson;
  if(typeof __visitorShowLesson === 'function' && !__visitorShowLesson.__visitorVisibilityWrapped){
    var wrappedShowLesson = function(i){
      __visitorShowLesson(i);
      syncVisitorCounterVisibility();
    };
    wrappedShowLesson.__visitorVisibilityWrapped = true;
    window.showLesson = wrappedShowLesson;
  }

  var __visitorRenderAllLessons = window.renderAllLessons;
  if(typeof __visitorRenderAllLessons === 'function' && !__visitorRenderAllLessons.__visitorHomeMountedWrapped){
    var wrappedRenderAllLessons = function(){
      var result = __visitorRenderAllLessons.apply(this, arguments);
      if(currentPage === 'home') renderHomeVisitorCounters();
      else syncVisitorCounterVisibility();
      return result;
    };
    wrappedRenderAllLessons.__visitorHomeMountedWrapped = true;
    window.renderAllLessons = wrappedRenderAllLessons;
  }

  function getSearchableItems(){
    var items = [];
    // Lessons
    var lessonData = typeof lessons !== 'undefined' ? (lessons[currentLang] || lessons.en) : [];
    for(var i = 0; i < lessonData.length; i++){
      items.push({type:'lesson',badge:'L'+(i+1),title:lessonData[i].title,desc:lessonData[i].intro ? lessonData[i].intro.substring(0,80)+'...' : '',action:function(idx){return function(){showLesson(idx);closeSearch();};}(i)});
    }
    // Glossary
    var gItems = typeof getGlossaryItems === 'function' ? getGlossaryItems() : [];
    for(var g = 0; g < gItems.length; g++){
      var term = gItems[g][0];
      var body = typeof gItems[g][1] === 'function' ? gItems[g][1](t) : gItems[g][1];
      items.push({type:'glossary',badge:'G',title:term,desc:body,action:function(){showPage('glossary');closeSearch();}});
    }
    // FAQ
    var faqData = typeof polishedSectionContent !== 'undefined' ? (polishedSectionContent[currentLang] || polishedSectionContent.en) : null;
    if(faqData && faqData.faqItems){
      for(var f = 0; f < faqData.faqItems.length; f++){
        items.push({type:'faq',badge:'F',title:faqData.faqItems[f][0],desc:faqData.faqItems[f][1].substring(0,80)+'...',action:function(){showPage('faq');closeSearch();}});
      }
    }
    // Sources
    var srcItems = typeof getSourceItems === 'function' ? getSourceItems() : [];
    for(var s = 0; s < srcItems.length; s++){
      items.push({type:'source',badge:'S',title:srcItems[s][1],desc:srcItems[s][2],action:function(){showPage('sources');closeSearch();}});
    }
    return items;
  }

  window.__disableLegacySearchUi = true;
  window.__legacyInlineSearchDisabled = true;

  // ========== 2. CONTINUE LEARNING (localStorage tracking) ==========
  var LAST_VISIT_KEY = 'cryptoAcademyLastVisit';

  function getContinueLessonTitle(index){
    if(typeof window.getLessonTitleFinal === 'function'){
      return window.getLessonTitleFinal(index);
    }
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    if(lang === 'br') lang = 'pt';
    var lessonPool = (typeof lessons !== 'undefined' && lessons) ? (lessons[lang] || lessons.en || []) : [];
    var englishPool = (typeof lessons !== 'undefined' && lessons) ? (lessons.en || []) : [];
    var localizedTitle = lessonPool[index] && lessonPool[index].title ? String(lessonPool[index].title).trim() : '';
    var englishTitle = englishPool[index] && englishPool[index].title ? String(englishPool[index].title).trim() : '';
    var navKey = 'nav.l' + (index + 1);
    var navTitle = (typeof t === 'function' ? t(navKey) : '');
    if(navTitle === navKey) navTitle = '';
    if(localizedTitle){
      if(lang !== 'en' && englishTitle && localizedTitle === englishTitle && navTitle && navTitle !== englishTitle){
        return navTitle;
      }
      return localizedTitle;
    }
    if(navTitle) return navTitle;
    if(englishTitle) return englishTitle;
    return 'Lesson ' + (index + 1);
  }

  // Patch showLesson to track
  var _origShowLesson2 = window.showLesson;
  window.showLesson = function(i){
    _origShowLesson2(i);
    localStorage.setItem(LAST_VISIT_KEY, JSON.stringify({type:'lesson',index:i}));
  };
  // Patch showPage to track
  var _origShowPage2 = window.showPage;
  window.showPage = function(page){
    _origShowPage2(page);
    if(page !== 'home') localStorage.setItem(LAST_VISIT_KEY, JSON.stringify({type:'page',name:page}));
  };

  // ========== 3-5. MODIFY renderHome ==========
  var _origRenderHome = window.renderHome;
  window.renderHome = function(){
    var base = _origRenderHome();
    var extra = '';

    // Language Update Notice
    var noticeDismissed = localStorage.getItem('cryptoAcademyNoticeDismissed');
    if(!noticeDismissed){
      var noticeTexts = {
        en: '🌐 Turkish, Brazilian Portuguese, Arabic, and Vietnamese are now available.',
        ko: '🌐 터키어, 브라질 포르투갈어, 아랍어, 베트남어가 추가되었습니다.',
        th: '🌐 ภาษาตุรกี โปรตุเกสบราซิล อาหรับ และเวียดนาม พร้อมใช้งานแล้ว',
        id: '🌐 Bahasa Turki, Portugis Brasil, Arab, dan Vietnam sekarang tersedia.',
        pt: '🌐 Turco, Português Brasileiro, Árabe e Vietnamita agora estão disponíveis.',
        br: '🌐 Turco, Português Brasileiro, Árabe e Vietnamita agora estão disponíveis.',
        tr: '🌐 Türkçe, Brezilya Portekizcesi, Arapça ve Vietnamca artık mevcut.',
        es: '🌐 Turco, Portugués Brasileño, Árabe y Vietnamita ya están disponibles.',
        ar: '🌐 التركية والبرتغالية البرازيلية والعربية والفيتنامية متوفرة الآن.',
        vi: '🌐 Tiếng Thổ Nhĩ Kỳ, Bồ Đào Nha Brazil, Ả Rập và Việt Nam hiện đã có sẵn.'
      };
      var noticeText = noticeTexts[currentLang] || noticeTexts.en;
      extra += '<div class="lang-notice" id="langNotice"><span class="lang-notice-icon">🌍</span><span>'+noticeText+'</span><button class="lang-notice-close" onclick="document.getElementById(\'langNotice\').style.display=\'none\';localStorage.setItem(\'cryptoAcademyNoticeDismissed\',\'1\')">✕</button></div>';
    }

    // Continue Learning card
    var lastVisit = null;
    try { lastVisit = JSON.parse(localStorage.getItem(LAST_VISIT_KEY)); } catch(e){}
    var continueTexts = {
      en:['Continue Learning','Pick up where you left off'],
      ko:['이어서 학습하기','마지막으로 본 곳에서 이어보세요'],
      th:['เรียนต่อ','กลับไปที่คุณค้างไว้'],
      id:['Lanjutkan Belajar','Kembali ke tempat terakhir'],
      pt:['Continuar aprendendo','Volte de onde você parou'],
      br:['Continuar aprendendo','Volte de onde você parou'],
      tr:['Öğrenmeye devam et','Kaldığınız yerden devam edin'],
      es:['Seguir aprendiendo','Vuelve donde lo dejaste'],
      ar:['واصل التعلّم','ارجع إلى حيث توقفت'],
      vi:['Tiếp tục học','Quay lại nơi bạn đã dừng']
    };
    var ct = continueTexts[currentLang] || continueTexts.en;
    var continueLabel = '';
    var continueAction = "showLesson(0)";
    if(lastVisit){
      if(lastVisit.type === 'lesson'){
        continueLabel = getContinueLessonTitle(lastVisit.index);
        continueAction = 'showLesson('+lastVisit.index+')';
      } else {
        continueLabel = t('nav.'+lastVisit.name) || lastVisit.name;
        continueAction = "showPage('"+lastVisit.name+"')";
      }
    } else {
      continueLabel = getContinueLessonTitle(0);
    }
    extra += '<div class="continue-card" onclick="'+continueAction+'"><div class="continue-icon"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="#fff" stroke="none"/></svg></div><div><div class="continue-title">'+ct[0]+'</div><div class="continue-sub">'+ct[1]+' → '+continueLabel+'</div></div></div>';

    // Beginner Roadmap
    var roadmapTexts = {
      en:{h:'Beginner Roadmap',days:['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6'],labels:['Blockchain','Wallets','Safe Transfers','Token Roles','Real-world Lessons','Buying Your First Crypto']},
      ko:{h:'초보자 로드맵',days:['1일차','2일차','3일차','4일차','5일차'],labels:['블록체인','지갑','안전한 전송','토큰 역할','실제 교훈']},
      th:{h:'แผนการเรียนสำหรับผู้เริ่มต้น',days:['วันที่ 1','วันที่ 2','วันที่ 3','วันที่ 4','วันที่ 5'],labels:['บล็อกเชน','วอลเล็ต','การโอนอย่างปลอดภัย','บทบาทของโทเคน','บทเรียนจากโลกจริง']},
      id:{h:'Roadmap Pemula',days:['Hari 1','Hari 2','Hari 3','Hari 4','Hari 5'],labels:['Blockchain','Wallet','Transfer Aman','Peran Token','Pelajaran Dunia Nyata']},
      pt:{h:'Roteiro para Iniciantes',days:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5'],labels:['Blockchain','Carteiras','Transferências Seguras','Papéis dos Tokens','Lições do Mundo Real']},
      br:{h:'Roteiro para Iniciantes',days:['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5'],labels:['Blockchain','Carteiras','Transferências Seguras','Papéis dos Tokens','Lições do Mundo Real']},
      tr:{h:'Başlangıç Yol Haritası',days:['1. Gün','2. Gün','3. Gün','4. Gün','5. Gün'],labels:['Blockchain','Cüzdanlar','Güvenli Transferler','Token Rolleri','Gerçek Dünya Dersleri']},
      es:{h:'Ruta para Principiantes',days:['Día 1','Día 2','Día 3','Día 4','Día 5'],labels:['Blockchain','Billeteras','Transferencias Seguras','Roles de Tokens','Lecciones del Mundo Real']},
      ar:{h:'خارطة طريق المبتدئين',days:['اليوم 1','اليوم 2','اليوم 3','اليوم 4','اليوم 5'],labels:['البلوكشين','المحافظ','التحويلات الآمنة','أدوار الرموز','دروس من الواقع']},
      vi:{h:'Lộ trình cho người mới',days:['Ngày 1','Ngày 2','Ngày 3','Ngày 4','Ngày 5'],labels:['Blockchain','Ví tiền','Chuyển tiền an toàn','Vai trò Token','Bài học thực tế']}
    };
    var rm = roadmapTexts[currentLang] || roadmapTexts.en;
    extra += '<div class="roadmap-section"><h2>📚 '+rm.h+'</h2><div class="roadmap-grid">';
    var roadmapCount = (typeof getTotalLessons === 'function') ? getTotalLessons() : 5;
    for(var r=0;r<roadmapCount;r++){
      var roadmapDay = rm.days[r] || ('Day ' + (r + 1));
      var roadmapLabel = rm.labels[r] || (typeof t === 'function' ? t('nav.l' + (r + 1)) : ('Lesson ' + (r + 1)));
      extra += '<div class="roadmap-card" onclick="showLesson('+r+')"><div class="roadmap-day">'+roadmapDay+'</div><div class="roadmap-label">'+roadmapLabel+'</div></div>';
    }
    extra += '</div></div>';

    // Top 5 Beginner Mistakes
    var mistakeTexts = {
      en:{h:'Top 5 Beginner Mistakes',items:[
        ['Sharing your seed phrase','Anyone with your seed phrase can take control of your wallet.'],
        ['Wrong network transfer','Sending to the right address on the wrong network can cause permanent loss.'],
        ['Clicking fake links / phishing','Scam sites look almost identical to real ones. Always verify the URL.'],
        ['Skipping test transfer','One small test can save you from a costly mistake.'],
        ['Confusing exchange and wallet','An exchange account is not the same as owning a wallet with your own keys.']
      ]},
      ko:{h:'초보자가 가장 자주 하는 실수 Top 5',items:[
        ['시드 문구 공유','시드 문구를 가진 사람은 지갑을 완전히 통제할 수 있습니다.'],
        ['잘못된 네트워크로 전송','올바른 주소라도 잘못된 네트워크로 보내면 영구 손실될 수 있습니다.'],
        ['가짜 링크 클릭 / 피싱','사기 사이트는 실제와 거의 동일하게 보입니다. 항상 URL을 확인하세요.'],
        ['테스트 전송 건너뛰기','한 번의 소액 테스트로 큰 실수를 방지할 수 있습니다.'],
        ['거래소와 지갑 혼동','거래소 계정과 자신의 키로 된 지갑은 같은 것이 아닙니다.']
      ]},
      th:{h:'5 ข้อผิดพลาดที่ผู้เริ่มต้นทำบ่อย',items:[
        ['แชร์วลีสำรอง','ใครก็ตามที่มีวลีสำรองสามารถควบคุมวอลเล็ตได้'],
        ['โอนผิดเครือข่าย','ส่งไปที่อยู่ถูกแต่เครือข่ายผิดอาจสูญเสียถาวร'],
        ['คลิกลิงก์ปลอม / ฟิชชิง','เว็บไซต์หลอกลวงดูเหมือนจริงมาก ตรวจสอบ URL เสมอ'],
        ['ข้ามการโอนทดสอบ','การทดสอบเล็กน้อยหนึ่งครั้งช่วยป้องกันความผิดพลาดใหญ่'],
        ['สับสนระหว่าง exchange กับวอลเล็ต','บัญชี exchange ไม่ใช่สิ่งเดียวกับวอลเล็ตที่คุณถือคีย์เอง']
      ]},
      id:{h:'5 Kesalahan Pemula Teratas',items:[
        ['Membagikan frasa pemulihan','Siapa pun yang memiliki frasa pemulihan bisa mengendalikan dompet Anda.'],
        ['Transfer ke jaringan yang salah','Mengirim ke alamat benar di jaringan salah bisa menyebabkan kehilangan permanen.'],
        ['Mengklik tautan palsu / phishing','Situs penipuan terlihat hampir identik dengan aslinya. Selalu verifikasi URL.'],
        ['Melewatkan transfer uji','Satu tes kecil bisa menyelamatkan Anda dari kesalahan yang mahal.'],
        ['Bingung antara exchange dan dompet','Akun exchange tidak sama dengan memiliki dompet dengan kunci sendiri.']
      ]},
      pt:{h:'5 Erros Mais Comuns de Iniciantes',items:[
        ['Compartilhar a frase de recuperação','Qualquer pessoa com sua frase de recuperação pode controlar sua carteira.'],
        ['Transferência para a rede errada','Enviar para o endereço certo na rede errada pode causar perda permanente.'],
        ['Clicar em links falsos / phishing','Sites de golpe parecem quase idênticos aos reais. Sempre verifique a URL.'],
        ['Pular a transferência de teste','Um pequeno teste pode salvar você de um erro custoso.'],
        ['Confundir exchange e carteira','Uma conta em exchange não é o mesmo que ter uma carteira com suas próprias chaves.']
      ]},
      br:{h:'5 Erros Mais Comuns de Iniciantes',items:[
        ['Compartilhar a frase de recuperação','Qualquer pessoa com sua frase de recuperação pode controlar sua carteira.'],
        ['Transferência para a rede errada','Enviar para o endereço certo na rede errada pode causar perda permanente.'],
        ['Clicar em links falsos / phishing','Sites de golpe parecem quase idênticos aos reais. Sempre verifique a URL.'],
        ['Pular a transferência de teste','Um pequeno teste pode salvar você de um erro custoso.'],
        ['Confundir exchange e carteira','Uma conta em exchange não é o mesmo que ter uma carteira com suas próprias chaves.']
      ]},
      tr:{h:'En Sık Yapılan 5 Başlangıç Hatası',items:[
        ['Kurtarma ifadesini paylaşmak','Kurtarma ifadesine sahip olan herkes cüzdanınızı kontrol edebilir.'],
        ['Yanlış ağa transfer','Doğru adrese yanlış ağdan göndermek kalıcı kayba yol açabilir.'],
        ['Sahte bağlantılara tıklamak / phishing','Dolandırıcı siteler neredeyse gerçeklerle aynı görünür. URL\'yi her zaman doğrulayın.'],
        ['Test transferini atlamak','Küçük bir test sizi maliyetli bir hatadan kurtarabilir.'],
        ['Borsa ile cüzdanı karıştırmak','Borsa hesabı, kendi anahtarlarınızla bir cüzdan sahibi olmakla aynı şey değildir.']
      ]},
      es:{h:'Los 5 Errores Más Comunes de Principiantes',items:[
        ['Compartir la frase semilla','Cualquier persona con tu frase semilla puede controlar tu billetera.'],
        ['Transferencia a la red equivocada','Enviar a la dirección correcta en la red equivocada puede causar pérdida permanente.'],
        ['Hacer clic en enlaces falsos / phishing','Los sitios de estafa parecen casi idénticos a los reales. Siempre verifica la URL.'],
        ['Saltarse la transferencia de prueba','Una pequeña prueba puede salvarte de un error costoso.'],
        ['Confundir exchange y billetera','Una cuenta en un exchange no es lo mismo que tener una billetera con tus propias claves.']
      ]},
      ar:{h:'أكثر 5 أخطاء شائعة للمبتدئين',items:[
        ['مشاركة عبارة الاسترداد','أي شخص يملك عبارة الاسترداد يمكنه التحكم في محفظتك.'],
        ['التحويل إلى شبكة خاطئة','الإرسال إلى العنوان الصحيح على شبكة خاطئة قد يسبب خسارة دائمة.'],
        ['النقر على روابط مزيفة / تصيد','مواقع الاحتيال تبدو شبه مطابقة للحقيقية. تحقق من الرابط دائماً.'],
        ['تخطي التحويل التجريبي','اختبار صغير واحد يمكن أن ينقذك من خطأ مكلف.'],
        ['الخلط بين البورصة والمحفظة','حساب البورصة ليس نفس امتلاك محفظة بمفاتيحك الخاصة.']
      ]},
      vi:{h:'5 Sai Lầm Phổ Biến Nhất Của Người Mới',items:[
        ['Chia sẻ cụm từ khôi phục','Bất kỳ ai có cụm từ khôi phục đều có thể kiểm soát ví của bạn.'],
        ['Chuyển sang mạng sai','Gửi đến địa chỉ đúng trên mạng sai có thể gây mất mát vĩnh viễn.'],
        ['Nhấp vào liên kết giả / phishing','Trang web lừa đảo trông gần giống thật. Luôn xác minh URL.'],
        ['Bỏ qua chuyển thử','Một lần thử nhỏ có thể cứu bạn khỏi sai lầm tốn kém.'],
        ['Nhầm lẫn sàn giao dịch và ví','Tài khoản sàn giao dịch không giống với việc sở hữu ví với khóa riêng.']
      ]}
    };
    var mt = mistakeTexts[currentLang] || mistakeTexts.en;
    extra += '<div class="mistakes-section"><h2>⚠️ '+mt.h+'</h2><div class="mistakes-grid">';
    for(var m=0;m<mt.items.length;m++){
      extra += '<div class="mistake-summary-card"><div class="mistake-summary-num">#'+(m+1)+'</div><div class="mistake-summary-title">'+mt.items[m][0]+'</div><div class="mistake-summary-desc">'+mt.items[m][1]+'</div></div>';
    }
    extra += '</div></div>';

    // Insert after hero, before the first home-grid
    var insertPoint = base.indexOf('<div class="home-grid">');
    if(insertPoint > -1){
      return base.substring(0, insertPoint) + extra + base.substring(insertPoint);
    }
    return extra + base;
  };

  // Re-render home if currently on home
  if(typeof renderAllLessons === 'function'){
    renderAllLessons();
   if(typeof showPage === 'function' && currentPage === 'home') showPage('home');
  }
})();
