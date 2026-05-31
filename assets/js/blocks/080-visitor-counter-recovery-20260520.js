(function(){
  if(typeof window === 'undefined' || window.__visitorCounterRecovery20260520) return;
  window.__visitorCounterRecovery20260520 = true;

  var BASELINE = 698;
  var TOTAL_KEY = 'cryptoAcademyTotalVisitors';
  var TODAY_KEY = 'cryptoAcademyTodayVisitors';
  var TODAY_DATE_KEY = 'cryptoAcademyTodayDate';
  var LEGACY_TOTAL_KEY = 'cryptoAcademyVisitorFallback:total';
  var SESSION_COUNTED_KEY = 'coinProofPathVisitorRecoveryCounted';

  var LABELS = {
    en:{today:'Today Visitors', total:'Total Visitors'},
    ko:{today:'오늘 방문자', total:'전체 방문자'},
    th:{today:'ผู้เข้าชมวันนี้', total:'ผู้เข้าชมทั้งหมด'},
    id:{today:'Pengunjung hari ini', total:'Total pengunjung'},
    pt:{today:'Visitantes hoje', total:'Total de visitantes'},
    br:{today:'Visitantes hoje', total:'Total de visitantes'},
    tr:{today:'Bugünkü ziyaretçiler', total:'Toplam ziyaretçi'},
    es:{today:'Visitantes de hoy', total:'Visitantes totales'},
    ar:{today:'زوار اليوم', total:'إجمالي الزوار'},
    vi:{today:'Khách hôm nay', total:'Tổng lượt khách'},
    ha:{today:'Maziyarta yau', total:'Jimillar maziyarta'}
  };

  var syncTimer = null;

  function readNumber(key, fallback){
    try{
      var value = parseInt(localStorage.getItem(key), 10);
      return isFinite(value) && value >= 0 ? value : fallback;
    }catch(err){
      return fallback;
    }
  }

  function writeNumber(key, value){
    try{ localStorage.setItem(key, String(value)); }catch(err){}
  }

  function readText(key){
    try{ return localStorage.getItem(key) || ''; }catch(err){ return ''; }
  }

  function writeText(key, value){
    try{ localStorage.setItem(key, String(value)); }catch(err){}
  }

  function getLang(){
    var raw = 'en';
    try{
      raw = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(err){
      raw = (document.documentElement && document.documentElement.lang) || 'en';
    }
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br' || raw.indexOf('br') === 0) return 'br';
    if(raw.indexOf('pt') === 0) return 'pt';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function dateStamp(){
    var now = new Date();
    var y = now.getFullYear();
    var m = String(now.getMonth() + 1).padStart(2, '0');
    var d = String(now.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + d;
  }

  function todayKey(){
    return 'visitors-' + dateStamp();
  }

  function isTodayKey(value){
    return value === todayKey() || value === dateStamp();
  }

  function shouldShowOnCurrentPage(){
    try{
      if(typeof currentPage !== 'undefined') return currentPage === 'home';
    }catch(err){}
    var home = document.getElementById('homePanel');
    return !!(home && home.classList.contains('active'));
  }

  function buildCounterBlock(){
    var block = document.createElement('div');
    block.className = 'topbar-visitor-block home-visitor-block';
    block.id = 'homeVisitorBlock';
    block.setAttribute('aria-live', 'polite');
    block.innerHTML = ''
      + '<div class="search-visitor-pill">'
      +   '<div class="search-visitor-label" id="visitorTodayLabel"></div>'
      +   '<div class="search-visitor-value" id="visitorTodayValue"></div>'
      + '</div>'
      + '<div class="search-visitor-pill">'
      +   '<div class="search-visitor-label" id="visitorTotalLabel"></div>'
      +   '<div class="search-visitor-value" id="visitorTotalValue"></div>'
      + '</div>';
    return block;
  }

  function ensureCounterBlock(){
    var homePanel = document.getElementById('homePanel');
    if(!homePanel) return null;
    var homeHero = homePanel.querySelector('.home-hero');
    var desc = homeHero ? homeHero.querySelector('.home-desc') : null;
    var block = document.getElementById('homeVisitorBlock');
    if(!block){
      block = buildCounterBlock();
      if(desc) desc.insertAdjacentElement('afterend', block);
      else if(homeHero) homeHero.insertAdjacentElement('afterbegin', block);
      else homePanel.insertAdjacentElement('afterbegin', block);
    }
    if(!block.querySelector('#visitorTodayLabel') || !block.querySelector('#visitorTotalLabel') || !block.querySelector('#visitorTodayValue') || !block.querySelector('#visitorTotalValue')){
      block.innerHTML = buildCounterBlock().innerHTML;
    }
    if(desc && block.previousElementSibling !== desc){
      desc.insertAdjacentElement('afterend', block);
    }
    return block;
  }

  function getCounts(){
    var day = todayKey();
    var storedDay = readText(TODAY_DATE_KEY);
    var today = isTodayKey(storedDay) ? readNumber(TODAY_KEY, 0) : 0;
    var total = Math.max(
      BASELINE,
      readNumber(TOTAL_KEY, BASELINE),
      readNumber(LEGACY_TOTAL_KEY, BASELINE)
    );
    var hadStoredTotal = readText(TOTAL_KEY) !== '' || readText(LEGACY_TOTAL_KEY) !== '';
    var countedByEarlierScript = !!window.__visitorCountedThisLoad;
    var countedByRecovery = false;
    try{ countedByRecovery = sessionStorage.getItem(SESSION_COUNTED_KEY) === day; }catch(err){}
    if(!countedByEarlierScript && !countedByRecovery){
      today += 1;
      if(hadStoredTotal) total += 1;
      window.__visitorCountedThisLoad = true;
      try{ sessionStorage.setItem(SESSION_COUNTED_KEY, day); }catch(err){}
    }
    writeText(TODAY_DATE_KEY, day);
    writeNumber(TODAY_KEY, today);
    writeNumber(TOTAL_KEY, total);
    writeNumber(LEGACY_TOTAL_KEY, total);
    return {today:today, total:total, day:day};
  }

  function formatNumber(value){
    var number = parseInt(value, 10);
    if(!isFinite(number) || number < 0) number = 0;
    try{ return number.toLocaleString(getLang()); }catch(err){ return String(number); }
  }

  function syncVisitorCounter(){
    var block = ensureCounterBlock();
    if(!block) return false;
    block.hidden = !shouldShowOnCurrentPage();
    var labels = LABELS[getLang()] || LABELS.en;
    var counts = getCounts();
    var todayLabel = document.getElementById('visitorTodayLabel');
    var totalLabel = document.getElementById('visitorTotalLabel');
    var todayValue = document.getElementById('visitorTodayValue');
    var totalValue = document.getElementById('visitorTotalValue');
    if(todayLabel) todayLabel.textContent = labels.today;
    if(totalLabel) totalLabel.textContent = labels.total;
    if(todayValue){
      todayValue.textContent = formatNumber(counts.today);
      todayValue.classList.remove('is-loading');
    }
    if(totalValue){
      totalValue.textContent = formatNumber(counts.total);
      totalValue.classList.remove('is-loading');
    }
    window.__visitorCounterRecoveryLastSync = new Date().toISOString();
    return true;
  }

  function scheduleSync(){
    if(syncTimer) return;
    syncTimer = setTimeout(function(){
      syncTimer = null;
      syncVisitorCounter();
    }, 60);
  }

  function scheduleSyncBurst(){
    syncVisitorCounter();
    setTimeout(scheduleSync, 50);
    setTimeout(scheduleSync, 350);
    setTimeout(scheduleSync, 1200);
  }

  function wrapFunction(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__visitorCounterRecoveryWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      after();
      return result;
    };
    wrapped.__visitorCounterRecoveryWrapped = true;
    wrapped.__visitorCounterRecoveryOriginal = original;
    window[name] = wrapped;
  }

  wrapFunction('setLang', scheduleSyncBurst);
  wrapFunction('showPage', scheduleSyncBurst);
  wrapFunction('showLesson', scheduleSyncBurst);
  wrapFunction('renderAllLessons', scheduleSyncBurst);

  if(typeof MutationObserver === 'function'){
    var observer = new MutationObserver(function(mutations){
      for(var i = 0; i < mutations.length; i++){
        var target = mutations[i].target;
        if(target && target.nodeType === 1 && (target.id === 'homeVisitorBlock' || (target.closest && target.closest('#homeVisitorBlock')))){
          continue;
        }
        if(document.getElementById('homePanel')){
          scheduleSync();
          break;
        }
      }
    });
    if(document.body){
      observer.observe(document.body, {childList:true, subtree:true});
    }
  }

  window.debugVisitorCounter = function(){
    var block = document.getElementById('homeVisitorBlock');
    return {
      baseline: BASELINE,
      currentLocale: getLang(),
      dateKey: todayKey(),
      storage: {
        totalVisitors: readText(TOTAL_KEY),
        todayVisitors: readText(TODAY_KEY),
        todayDate: readText(TODAY_DATE_KEY),
        legacyTotal: readText(LEGACY_TOTAL_KEY)
      },
      dom: {
        blockFound: !!block,
        todayLabelFound: !!document.getElementById('visitorTodayLabel'),
        totalLabelFound: !!document.getElementById('visitorTotalLabel'),
        todayValueFound: !!document.getElementById('visitorTodayValue'),
        totalValueFound: !!document.getElementById('visitorTotalValue'),
        todayText: document.getElementById('visitorTodayValue') ? document.getElementById('visitorTodayValue').textContent : '',
        totalText: document.getElementById('visitorTotalValue') ? document.getElementById('visitorTotalValue').textContent : '',
        hidden: block ? !!block.hidden : null
      },
      lastSync: window.__visitorCounterRecoveryLastSync || null
    };
  };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', scheduleSyncBurst);
  }else{
    scheduleSyncBurst();
  }
  window.addEventListener('load', scheduleSyncBurst);
})();
