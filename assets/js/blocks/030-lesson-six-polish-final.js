(function(){
  if(window.__lessonSixPolishFinal) return;
  window.__lessonSixPolishFinal = true;

  function normalizeLang(lang){
    var value = lang || (typeof currentLang !== 'undefined' ? currentLang : 'en') || 'en';
    return value === 'br' ? 'pt' : value;
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  if(typeof window.escapeHtml !== 'function'){
    window.escapeHtml = escapeHtml;
  }

  function getBasePrefix(){
    if(typeof getPageHeroBasePrefix === 'function') return getPageHeroBasePrefix();
    if(document.body && document.body.dataset && document.body.dataset.basePrefix) return document.body.dataset.basePrefix;
    return './';
  }

  function getImage(file){
    return getBasePrefix() + 'assets/illustrations/lessons/' + file;
  }

  var localizedLessonImageMap = {
    'lesson6-first-buy': {
      en:'lesson6-first-buy-en.png',
      ko:'lesson6-first-buy-ko.png',
      th:'lesson6-first-buy-th.png',
      tr:'lesson6-first-buy-tr.png',
      br:'lesson6-first-buy-br.png',
      ar:'lesson6-first-buy-ar.png',
      vi:'lesson6-first-buy-vi.png'
    },
    'lesson6-network-selection': {
      en:'lesson6-network-selection-en.png',
      ko:'lesson6-network-selection-ko.png',
      th:'lesson6-network-selection-th.png',
      tr:'lesson6-network-selection-tr.png',
      br:'lesson6-network-selection-br.png',
      ar:'lesson6-network-selection-ar.png',
      vi:'lesson6-network-selection-vi.png'
    }
  };

  var localizedLessonImageAliases = {
    'lesson6-first-buy-card.png':'lesson6-first-buy',
    'lesson6-first-buy':'lesson6-first-buy',
    'lesson6-network-selection':'lesson6-network-selection'
  };

  function getLessonImageLang(){
    var raw = 'en';
    try{
      raw = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(err){
      raw = (typeof currentLang === 'string' && currentLang) ? currentLang : (document.documentElement.lang || 'en');
    }
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br' || raw.indexOf('br') === 0) return 'br';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    return 'en';
  }

  function getLocalizedLessonImage(imageKey, fallbackFile){
    var key = localizedLessonImageAliases[imageKey] || imageKey;
    var pack = localizedLessonImageMap[key];
    if(pack){
      var lang = getLessonImageLang();
      return getImage(pack[lang] || pack.en || fallbackFile || imageKey);
    }
    return getImage(fallbackFile || imageKey);
  }

  var localizedSvgFiles = {
    'lesson6-first-buy-mock.svg': true,
    'lesson6-network-selection-mock.svg': true,
    'lesson6-custody-compare.svg': true,
    'lesson6-final-transfer-check-mock.svg': true
  };
  var localizedSvgLangs = { ko:true };

  function getAssetLang(){
    var raw = (typeof currentLang === 'string' && currentLang) ? currentLang : (document.documentElement.lang || 'en');
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br') return 'br';
    if(raw.indexOf('ko') === 0) return 'ko';
    return localizedSvgLangs[raw] ? raw : 'en';
  }

  function getLocalizedImage(file){
    var assetLang = getAssetLang();
    if(localizedSvgFiles[file] && localizedSvgLangs[assetLang]){
      return getImage(file.replace(/\.svg$/i, '-' + assetLang + '.svg'));
    }
    var lang = normalizeLang();
    if(lang === 'ko') return getImage(file.replace(/\.svg$/i, '-ko.svg'));
    return getImage(file);
  }

  function getLessonSixData(){
    var lang = normalizeLang();
    if(typeof lessons !== 'undefined' && lessons){
      return (lessons[lang] && lessons[lang][5]) || (lessons.en && lessons.en[5]) || {};
    }
    return {};
  }

  var lessonSixGuideCopy = {
    ko:{
      bundleTitle:'실전형 따라하기 화면',
      buyKicker:'첫 구매 화면',
      networkKicker:'네트워크 선택',
      transferKicker:'전송 전 확인',
      custodyKicker:'보관 방식 비교',
      buyTitle:'이런 구매 화면에서 먼저 확인하세요',
      buyBody:'금액, 수수료, 결제 수단, 받을 수량만 먼저 확인하세요.',
      buyPoints:[
        '소액으로 시작',
        '수수료 먼저 확인',
        '보관 계획 정하기'
      ],
      networkTitle:'같은 코인이라도 네트워크는 꼭 다시 봐야 합니다',
      networkBody:'받는 곳이 지원하는 네트워크와 먼저 맞추세요. 다르면 전송이 막힐 수 있습니다.',
      networkPoints:[
        '받는 곳 지원 확인',
        '수수료와 도착 시간 비교',
        '경고가 보이면 멈춤'
      ],
      transferTitle:'보내기 전 마지막 확인',
      transferPoints:['자산','네트워크','주소','소액 테스트','최종 확인'],
      custodyTitle:'거래소 보관 vs 자기보관',
      exchangeTitle:'거래소 보관',
      exchangePoints:[
        '거래는 빠름',
        '복구 일부는 플랫폼 담당',
        '통제권은 제한적'
      ],
      walletTitle:'자기보관 지갑',
      walletPoints:[
        '통제권은 더 큼',
        '복구 책임은 본인',
        '시드 문구 관리 필수'
      ],
      buyAlt:'첫 구매 전 확인 포인트를 보여주는 교육용 구매 화면 mock 이미지입니다.',
      networkAlt:'네트워크 선택 전 무엇을 확인해야 하는지 보여주는 교육용 전송 설정 화면입니다.',
      transferAlt:'전송 전 최종 확인 항목을 보여주는 교육용 review 화면입니다.',
      custodyAlt:'거래소 보관과 자기보관 지갑의 차이를 비교하는 교육용 이미지입니다.'
    },
    en:{
      bundleTitle:'Practical walkthrough screens',
      buyKicker:'First buy screen',
      networkKicker:'Network selection',
      transferKicker:'Final send review',
      custodyKicker:'Custody comparison',
      buyTitle:'What to check on a first-buy screen',
      buyBody:'Check amount, fee, payment method, and receive amount before confirming.',
      buyPoints:[
        'Start small',
        'Check fee first',
        'Choose storage plan'
      ],
      networkTitle:'The network matters even when the asset name looks familiar',
      networkBody:'Match the destination network first. A wrong network can block the transfer.',
      networkPoints:[
        'Confirm destination support',
        'Compare fee and ETA',
        'Stop if warnings appear'
      ],
      transferTitle:'Final check before sending',
      transferPoints:['Asset','Network','Address','Small test','Final review'],
      custodyTitle:'Exchange custody vs self-custody wallet',
      exchangeTitle:'Exchange custody',
      exchangePoints:[
        'Fast to trade',
        'Platform helps recovery',
        'Control is limited'
      ],
      walletTitle:'Self-custody wallet',
      walletPoints:[
        'More direct control',
        'You handle recovery',
        'Seed phrase rules first'
      ],
      buyAlt:'A realistic educational mock interface for a first crypto buy.',
      networkAlt:'A realistic educational mock interface for choosing a transfer network.',
      transferAlt:'A realistic educational final transfer review interface.',
      custodyAlt:'An educational comparison image for exchange custody and self-custody.'
    }
  };

  function getGuideCopy(){
    return lessonSixGuideCopy[normalizeLang()] || lessonSixGuideCopy.en;
  }

  function renderList(items){
    return '<ul class="lesson-guide-points">' + (items || []).map(function(item){
      return '<li>' + escapeHtml(item) + '</li>';
    }).join('') + '</ul>';
  }

  function getFigureNote(key){
    var notes = {
      ko:{
        buy:'금액, 수수료, 결제 수단을 함께 확인합니다.',
        network:'자산 이름보다 네트워크를 먼저 맞춥니다.',
        transfer:'주소, 네트워크, 소액 테스트를 마지막으로 봅니다.',
        custody:'편의성과 통제권을 나란히 비교합니다.'
      },
      en:{
        buy:'Review the amount, fee, and payment method together.',
        network:'Match the network before focusing on the asset name.',
        transfer:'Check the address, network, and test send before you confirm.',
        custody:'Compare convenience and direct control side by side.'
      }
    };
    var pack = notes[normalizeLang()] || notes.en;
    return pack[key] || '';
  }

  function renderFigure(file, alt, noteKey, extraClass){
    var note = getFigureNote(noteKey);
    var className = 'lesson-guide-figure lesson-guide-figure-mock' + (extraClass ? ' ' + extraClass : '');
    return '<figure class="' + className + '">'
      + '<img class="lesson-guide-img" loading="lazy" src="' + getLocalizedImage(file) + '" alt="' + escapeHtml(alt) + '">'
      + (note ? '<figcaption class="lesson-guide-caption">' + escapeHtml(note) + '</figcaption>' : '')
      + '</figure>';
  }

  function renderAssetFigure(file, fallbackFile, alt, noteKey, extraClass){
    var note = getFigureNote(noteKey);
    var className = 'lesson-guide-figure lesson-guide-figure-mock lesson-asset-figure' + (extraClass ? ' ' + extraClass : '');
    return '<div class="lesson-asset-image-shell" data-lesson-asset-image-shell>'
      + '<figure class="' + className + '">'
      + '<img class="lesson-guide-img lesson-asset-img" loading="lazy" src="' + getLocalizedLessonImage(file, file) + '" alt="' + escapeHtml(alt) + '" onerror="this.closest(&quot;[data-lesson-asset-image-shell]&quot;).classList.add(&quot;is-fallback&quot;)">'
      + (note ? '<figcaption class="lesson-guide-caption">' + escapeHtml(note) + '</figcaption>' : '')
      + '</figure>'
      + '<div class="lesson-asset-fallback">' + renderFigure(fallbackFile, alt, noteKey, extraClass) + '</div>'
      + '</div>';
  }

  function renderStepCards(lesson){
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    return '<div class="lesson-guide-step-strip">' + visual.map(function(step, index){
      return '<div class="lesson-guide-step-card">'
        + '<div class="lesson-guide-step-num">0' + (index + 1) + '</div>'
        + '<div class="lesson-guide-step-copy">'
        + '<div class="lesson-guide-step-head">' + escapeHtml(step.title || '') + '</div>'
        + '<div class="lesson-guide-step-body">' + escapeHtml(step.desc || '') + '</div>'
        + '</div>'
        + '</div>';
    }).join('') + '</div>';
  }

  function buildTopHtml(lesson){
    var guide = getGuideCopy();
    return ''
      + '<section class="lesson-guide-stack" aria-label="' + escapeHtml(guide.bundleTitle) + '">'
      +   '<div class="lesson-guide-panel">'
      +     '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.buyKicker) + '</span><h3>' + escapeHtml(guide.buyTitle) + '</h3></div>'
      +     renderAssetFigure('lesson6-first-buy', 'lesson6-first-buy-mock.svg', guide.buyAlt, 'buy', 'lesson-guide-figure-hero')
      +     '<p class="lesson-guide-body">' + escapeHtml(guide.buyBody) + '</p>'
      +     renderStepCards(lesson)
      +   '</div>'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.networkKicker) + '</span><h3>' + escapeHtml(guide.networkTitle) + '</h3></div>'
      +       '<p class="lesson-guide-body">' + escapeHtml(guide.networkBody) + '</p>'
      +       renderList(guide.networkPoints)
      +     '</div>'
      +     renderAssetFigure('lesson6-network-selection', 'lesson6-network-selection-mock.svg', guide.networkAlt, 'network', 'lesson-guide-figure-side')
      +   '</div>'
      + '</section>';
  }

  function buildLowerHtml(){
    var guide = getGuideCopy();
    return ''
      + '<section class="lesson-guide-stack lesson-guide-stack-lower" aria-label="' + escapeHtml(guide.bundleTitle) + '">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.transferKicker) + '</span><h3>' + escapeHtml(guide.transferTitle) + '</h3></div>'
      +       '<div class="lesson-guide-check-row">' + guide.transferPoints.map(function(item){
                return '<span class="lesson-guide-check-chip">' + escapeHtml(item) + '</span>';
              }).join('') + '</div>'
      +     '</div>'
      +     renderFigure('lesson6-final-transfer-check-mock.svg', guide.transferAlt, 'transfer', 'lesson-guide-figure-side')
      +   '</div>'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     renderFigure('lesson6-custody-compare.svg', guide.custodyAlt, 'custody', 'lesson-guide-figure-side')
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.custodyKicker) + '</span><h3>' + escapeHtml(guide.custodyTitle) + '</h3></div>'
      +       '<div class="lesson-guide-compare-grid">'
      +         '<div class="lesson-guide-compare-card is-safe"><div class="lesson-guide-compare-title">' + escapeHtml(guide.exchangeTitle) + '</div>' + renderList(guide.exchangePoints) + '</div>'
      +         '<div class="lesson-guide-compare-card is-risk"><div class="lesson-guide-compare-title">' + escapeHtml(guide.walletTitle) + '</div>' + renderList(guide.walletPoints) + '</div>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  var previousTop = window.renderLessonGuidedVisualsTop;
  window.renderLessonGuidedVisualsTop = function(i, lesson){
    if(i === 5) return buildTopHtml(lesson || getLessonSixData());
    return typeof previousTop === 'function' ? previousTop.apply(this, arguments) : '';
  };

  var previousLower = window.renderLessonGuidedVisualsLower;
  window.renderLessonGuidedVisualsLower = function(i){
    if(i === 5) return buildLowerHtml();
    return typeof previousLower === 'function' ? previousLower.apply(this, arguments) : '';
  };

  function rerender(){
    if(typeof renderAllLessons === 'function') renderAllLessons();
    if(typeof applyUI === 'function') applyUI();
    if(typeof currentPage !== 'undefined'){
      if(/^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
        showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
      }else if(typeof showPage === 'function'){
        showPage(currentPage || 'home');
      }
    }
  }

  rerender();
})();
