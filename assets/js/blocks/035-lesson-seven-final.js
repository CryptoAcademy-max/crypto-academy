(function(){
  if(window.__lessonSevenFinal) return;
  window.__lessonSevenFinal = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

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

  function getBasePrefix(){
    if(typeof getPageHeroBasePrefix === 'function') return getPageHeroBasePrefix();
    if(document.body && document.body.dataset && document.body.dataset.basePrefix) return document.body.dataset.basePrefix;
    return './';
  }

  function getImage(file){
    return getBasePrefix() + 'assets/illustrations/lessons/' + file;
  }

  var localizedLessonImageMap = {
    'lesson7-fake-site-compare': {
      en:'lesson7-fake-site-compare-en.png',
      ko:'lesson7-fake-site-compare-ko.png',
      th:'lesson7-fake-site-compare-th.png',
      tr:'lesson7-fake-site-compare-tr.png',
      br:'lesson7-fake-site-compare-br.png',
      ar:'lesson7-fake-site-compare-ar.png',
      vi:'lesson7-fake-site-compare-vi.png'
    },
    'lesson7-seed-warning': {
      en:'lesson7-seed-warning-en.png',
      ko:'lesson7-seed-warning-ko.png',
      th:'lesson7-seed-warning-th.png',
      tr:'lesson7-seed-warning-tr.png',
      br:'lesson7-seed-warning-br.png',
      ar:'lesson7-seed-warning-ar.png',
      vi:'lesson7-seed-warning-vi.png'
    }
  };

  var localizedLessonImageAliases = {
    'lesson7-fake-site-card.png':'lesson7-fake-site-compare',
    'lesson7-fake-site-compare':'lesson7-fake-site-compare',
    'lesson7-seed-warning':'lesson7-seed-warning'
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
    'lesson7-clipboard-swapping.svg': true,
    'lesson7-address-poisoning.svg': true,
    'lesson7-seed-phrase-warning.svg': true,
    'lesson7-fake-support-dm.svg': true,
    'lesson7-fake-site-compare.svg': true
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

  var lessonSevenUiPack = {
    ko:{
      'nav.l7':'암호화폐 사기 구별하기',
      'nav.l7sub':'초보자용 경고 신호',
      'topic.scams':'암호화폐 사기는 어떻게 구별할까?'
    },
    en:{
      'nav.l7':'Spotting Crypto Scams',
      'nav.l7sub':'Simple scam red flags',
      'topic.scams':'How do I spot crypto scams?'
    }
  };

  var lessonSevenLessonPack = {
    ko:{
      cat:'보안',
      title:'암호화폐 사기, 이렇게 구별하세요',
      intro:'암호화폐 사기는 긴급함, 친절함, 공식처럼 보이는 분위기를 이용해 사람을 서두르게 만듭니다. 모든 수법을 외울 필요는 없습니다. 잠깐 멈추고, 다시 확인하고, 지갑을 통제하는 정보는 절대 넘기지 않는 습관이 핵심입니다.',
      sections:[
        {h:'왜 사기가 자주 통하는가', ps:['사기 메시지는 압박과 쉬운 보상을 함께 제시하는 경우가 많습니다. 사람이 조급해지면 원래 했어야 할 느린 안전 확인을 건너뛰기 쉽습니다.']},
        {h:'가짜 보상과 가짜 고객지원', ps:['가짜 에어드롭, 경품, 고객지원 계정은 지갑 연결, 이상한 승인, 선입금을 유도할 수 있습니다. 실제 고객지원은 시드 문구를 요구하지 않습니다.']},
        {h:'위험한 약속과 수상한 링크', ps:['수익 보장, 즉시 보상, 정체가 불분명한 DM은 모두 경고 신호입니다. 처음 본 링크를 믿지 말고, 공식 출처를 직접 다시 여는 습관이 안전합니다.']},
        {h:'주소 오염과 클립보드 스와핑', ps:['복사한 주소가 붙여넣기 전에 바뀔 수 있고, 최근 거래 목록의 비슷한 주소가 눈을 속일 수도 있습니다. 앞뒤 몇 글자만 보지 말고 더 넓게 확인해야 합니다.']},
        {h:'클릭하거나 보내기 전의 간단한 습관', ps:['잠깐 멈추고, 전체 도메인을 비교하고, 지갑 요청 내용을 읽고, 공식 출처를 스스로 다시 열었는지 확인한 뒤 행동하세요.']}
      ],
      defs:[
        ['에어드롭','프로젝트가 사용자에게 토큰을 배포하는 방식입니다.'],
        ['경품형 사기','지갑 연결이나 선입금을 유도하려고 가짜 보상을 내세우는 사기입니다.'],
        ['시드 문구','지갑 복구용 단어들입니다. 아무 페이지나 채팅창에 입력하거나 공유하면 안 됩니다.'],
        ['러그 풀','프로젝트 운영 주체가 자금을 갑자기 빼거나 프로젝트를 사실상 버리는 경우입니다.']
      ],
      example:'유명 프로젝트처럼 보이는 계정이 DM으로 지금 지갑을 연결하면 보상을 준다고 말합니다. 바로 누르지 말고, 공식 사이트를 직접 다시 열어 도메인을 비교한 뒤 그 메시지는 무시합니다.',
      mistakes:[
        '계정이 유명해 보여서 바로 믿기',
        '시간이 얼마 남지 않았다는 말에 서두르기',
        '프로젝트 이름만 보고 전체 도메인을 확인하지 않기',
        '시드 문구를 아무 페이지에나 입력해도 된다고 생각하기'
      ],
      faqs:[
        ['모든 에어드롭이 사기인가요?','아닙니다. 실제 이벤트도 있지만, 그 경우에도 직접 연 공식 웹사이트와 공지를 기준으로 다시 확인해야 합니다.'],
        ['왜 시드 문구를 절대 입력하면 안 되나요?','그 정보를 가진 사람은 지갑을 통제하고 자산을 옮길 수 있기 때문입니다.'],
        ['공식 계정이나 링크는 어떻게 확인하나요?','DM 안의 링크를 바로 믿지 말고, 공식 웹사이트나 문서를 스스로 다시 열어 주소를 비교하세요.']
      ],
      checkpoints:[
        '자주 나오는 사기 경고 신호를 설명할 수 있습니다.',
        '긴급함과 수익 보장이 왜 위험 신호인지 이해합니다.',
        '시드 문구를 아무 웹사이트에나 입력하면 안 된다는 점을 압니다.',
        '클릭하기 전에 공식 출처를 스스로 다시 여는 습관을 설명할 수 있습니다.'
      ],
      quiz:[
        ['긴급한 보상 메시지가 왜 위험 신호인가요?','사람을 서두르게 만들어 필요한 안전 확인을 건너뛰게 만들 수 있기 때문입니다.'],
        ['누군가 시드 문구를 요구하면 어떻게 받아들여야 하나요?','사기 가능성이 높은 위험 신호로 받아들여야 합니다.'],
        ['수상한 링크를 확인하는 가장 안전한 방법은 무엇인가요?','공식 웹사이트를 직접 다시 열고 전체 도메인을 비교하는 것입니다.']
      ],
      sources:[
        ['FTC 암호화폐 사기 안내','초보자가 자주 마주치는 암호화폐 사기 유형과 경고 신호를 이해하는 데 도움이 되는 공식 소비자 안내입니다.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['가짜 복구 및 보호 제안 FTC 경고','긴급한 입금 요구나 문제를 해결해주겠다는 접근이 왜 흔한 사기 패턴인지 짚어주는 경고 자료입니다.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'먼저 멈추기', desc:'압박을 느끼는 동안에는 링크를 누르거나 돈을 보내지 마세요.'},
        {title:'무엇을 약속하는지 보기', desc:'정말 무엇을 약속하는지, 왜 이렇게 서두르게 하는지 먼저 따져보세요.'},
        {title:'도메인 확인하기', desc:'프로젝트 이름만 보지 말고 전체 웹사이트 주소를 비교하세요.'},
        {title:'지갑 요청 읽기', desc:'이상한 승인 요청이나 시드 문구 입력 요구는 거절하세요.'},
        {title:'공식 출처를 직접 다시 열기', desc:'행동하기 전에 진짜 웹사이트나 문서를 스스로 다시 찾아 여세요.'}
      ]
    },
    en:{
      cat:'Safety',
      title:'Common Scams & How to Spot Them',
      intro:'Crypto scams often work because they look urgent, friendly, or official. You do not need to memorize every trick. You need a calm routine: pause, verify, and never hand over anything that controls your wallet.',
      sections:[
        {h:'Why scams work so often', ps:['Scam messages usually mix pressure with easy rewards. When people feel rushed, they often skip the slow safety checks that would have protected them.']},
        {h:'Fake rewards and fake support', ps:['A fake airdrop, giveaway, or support account may push you to connect a wallet, approve a strange request, or send money first. A real support team will not ask for your seed phrase.']},
        {h:'Risky promises and suspicious links', ps:['Guaranteed profit, instant rewards, and mysterious direct messages are all warning signs. Always reopen the official source yourself instead of trusting the first link you see.']},
        {h:'Address poisoning and clipboard swapping', ps:['A copied address can be replaced before you paste it, and a recent transaction can look familiar even when the middle is wrong. Check more than the first and last few characters.']},
        {h:'A simple habit before you click or send', ps:['Pause for a moment, compare the full domain, review the wallet request, and make sure you found the official source yourself before taking action.']}
      ],
      defs:[
        ['Airdrop','A way a project distributes tokens to users.'],
        ['Giveaway scam','A fake reward that tries to make you connect a wallet or send funds first.'],
        ['Seed phrase','The recovery words for your wallet. Never type or share them on random pages.'],
        ['Rug pull','A case where the team or controller suddenly removes funds or abandons the project.']
      ],
      example:'You receive a DM that looks like it came from a famous project and promises a reward if you connect your wallet now. Instead of clicking, you open the official website yourself, compare the domain, and ignore the message.',
      mistakes:[
        'Trusting an account just because it looks official or famous.',
        'Rushing because a message says the offer ends soon.',
        'Checking only the project name and not the full domain.',
        'Forgetting that a seed phrase should never be entered into random pages.'
      ],
      faqs:[
        ['Are all airdrops scams?','No. Some are real, but even real events should be checked through official websites and announcements you open yourself.'],
        ['Why should I never enter my seed phrase?','Because anyone who gets it can control the wallet and move the funds.'],
        ['How can I verify an official account or link?','Do not trust the link inside a DM. Re-open the official website or documentation yourself and compare the address carefully.']
      ],
      checkpoints:[
        'I can name common scam warning signs.',
        'I understand why urgency and guaranteed profit are danger signals.',
        'I know a seed phrase should never be typed into random websites.',
        'I know how to reopen an official source by myself before I click.'
      ],
      quiz:[
        ['Why is an urgent reward message a warning sign?','Because pressure can make you skip the checks that protect you.'],
        ['If someone asks for your seed phrase, how should you treat it?','As a likely scam signal.'],
        ['What is the safest way to check a suspicious link?','Open the official website yourself and compare the domain carefully.']
      ],
      sources:[
        ['FTC crypto scam guidance','Official beginner-friendly guidance about common crypto scam patterns and their warning signs.','https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams'],
        ['FTC alert on fake recovery and protection claims','A reminder that urgent payment requests and fake help messages are common scam patterns.','https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem']
      ],
      visual:[
        {title:'Pause first', desc:'Do not click or send anything while you still feel pressure.'},
        {title:'Check the offer', desc:'Ask what is really being promised and why it feels rushed.'},
        {title:'Check the domain', desc:'Compare the full website address, not just the project name.'},
        {title:'Check the wallet request', desc:'Never approve a strange prompt or enter a seed phrase.'},
        {title:'Open the official source yourself', desc:'Find the real website or docs on your own before you act.'}
      ]
    }
  };

  function getLessonSevenData(lang){
    var key = normalizeLang(lang);
    return clone(lessonSevenLessonPack[key] || lessonSevenLessonPack.en);
  }

  function getGuideCopy(){
    var copy = {
      ko:{
        bundleTitle:'실전 보안 화면 가이드',
        siteKicker:'사이트 비교',
        supportKicker:'가짜 지원 DM',
        seedKicker:'시드 경고',
        addressKicker:'주소 오염',
        clipboardKicker:'클립보드 위험',
        siteTitle:'정상 사이트와 수상한 사이트는 이런 식으로 갈립니다',
        siteBody:'브라우저 모양이 그럴듯해 보여도 전체 도메인을 직접 다시 확인해야 합니다. 철자가 아주 조금만 달라도 다른 사이트일 수 있습니다.',
        siteTags:['공식 링크 직접 열기','전체 도메인 확인','철자 다시 보기'],
        supportTitle:'가짜 고객지원 DM은 이렇게 압박합니다',
        supportPoints:[
          '문제를 바로 해결해주겠다며 DM으로 먼저 접근합니다.',
          '지갑 연결이나 긴급 확인을 요구하며 서두르게 만듭니다.',
          '시드 문구나 복구 단어를 입력하라고 하면 바로 중단해야 합니다.'
        ],
        seedTitle:'이런 복구 화면이 뜨면 바로 멈추세요',
        seedPoints:[
          '보상, 인증, 복구를 이유로 시드 문구를 요구해도 입력하면 안 됩니다.',
          '진짜 서비스도 랜덤 페이지에서 복구 단어를 다시 요구하지 않습니다.',
          '입력창이 보이면 먼저 닫고 공식 출처를 스스로 다시 찾으세요.'
        ],
        addressTitle:'주소 오염 공격은 비슷한 최근 주소를 이용합니다',
        addressPoints:[
          '앞뒤 몇 글자가 비슷해 보여도 중간이 완전히 다를 수 있습니다.',
          '최근 전송 기록의 익숙한 주소를 그대로 복사하면 실수하기 쉽습니다.',
          '주소 전체를 더 넓게 비교하는 습관이 필요합니다.'
        ],
        clipboardTitle:'복사한 뒤 붙여넣을 때 주소가 바뀔 수도 있습니다',
        clipboardPoints:[
          '복사 직후와 붙여넣기 직후의 주소를 다시 비교하세요.',
          '붙여넣은 뒤에도 앞뒤 몇 글자만 보지 말고 더 많이 확인하세요.',
          '큰 금액을 보내기 전에는 소액 테스트가 특히 도움이 됩니다.'
        ],
        siteAlt:'정상 사이트와 의심 사이트의 주소창 차이를 보여주는 교육용 비교 이미지입니다.',
        supportAlt:'가짜 고객지원 DM의 전형적인 접근 방식을 보여주는 교육용 채팅 mock 이미지입니다.',
        seedAlt:'시드 문구 입력 유도 화면을 경고하는 교육용 mock 이미지입니다.',
        addressAlt:'주소 오염 공격을 설명하는 교육용 최근 거래 mock 이미지입니다.',
        clipboardAlt:'클립보드 스와핑 위험을 설명하는 교육용 전송 흐름 mock 이미지입니다.'
      },
      en:{
        bundleTitle:'Practical security screens',
        siteKicker:'Site comparison',
        supportKicker:'Fake support DM',
        seedKicker:'Seed warning',
        addressKicker:'Address poisoning',
        clipboardKicker:'Clipboard swapping',
        siteTitle:'A normal site and a suspicious site can look close at first glance',
        siteBody:'Even if the page layout feels familiar, the full domain still matters most. A tiny spelling change can point to a completely different destination.',
        siteTags:['Open the official source yourself','Read the full domain','Check the spelling twice'],
        supportTitle:'Fake support DMs usually create pressure first',
        supportPoints:[
          'They contact you first and promise to solve the problem quickly.',
          'They push you to connect a wallet or verify something urgently.',
          'If they ask for recovery words or a seed phrase, stop immediately.'
        ],
        seedTitle:'If a page asks for recovery words, treat it as a stop sign',
        seedPoints:[
          'A reward, verification, or recovery excuse does not make seed phrase entry safe.',
          'Real services do not need your recovery words on random pages.',
          'Close the screen and reopen the official source yourself before doing anything.'
        ],
        addressTitle:'Address poisoning uses look-alike recent addresses',
        addressPoints:[
          'The beginning and end can look familiar while the middle is different.',
          'Copying from recent history is risky when a fake address was planted there.',
          'Read more than a few edge characters before sending.'
        ],
        clipboardTitle:'A pasted address can change after you copy it',
        clipboardPoints:[
          'Compare the address once before copying and again after pasting.',
          'Do not rely only on the first and last few characters.',
          'A small test transfer helps before a larger send.'
        ],
        siteAlt:'A realistic educational comparison of a safer domain and a suspicious domain.',
        supportAlt:'A realistic educational fake support direct-message mock image.',
        seedAlt:'A realistic educational warning screen for seed phrase entry.',
        addressAlt:'A realistic educational address poisoning mock transaction image.',
        clipboardAlt:'A realistic educational clipboard swapping mock transfer flow.'
      }
    };
    return copy[normalizeLang()] || copy.en;
  }

  function ensureLessonSevenData(){
    var allLangs = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
    if(typeof ui !== 'undefined' && ui){
      allLangs.forEach(function(lang){
        if(!ui[lang]) ui[lang] = clone(ui.en || {});
        var uiPack = lessonSevenUiPack[lang] || lessonSevenUiPack.en;
        Object.keys(lessonSevenUiPack.en).forEach(function(key){
          ui[lang][key] = uiPack[key] || lessonSevenUiPack.en[key];
        });
      });
    }

    if(typeof lessons !== 'undefined' && lessons){
      allLangs.forEach(function(lang){
        if(!lessons[lang]){
          lessons[lang] = clone((lang === 'br' && lessons.pt) ? lessons.pt : (lessons.en || []));
        }
        var lessonData = getLessonSevenData(lang);
        lessons[lang][6] = lessonData;
        if(typeof lessonOverrides !== 'undefined' && lessonOverrides){
          if(!lessonOverrides[lang]){
            lessonOverrides[lang] = clone((lang === 'br' && lessonOverrides.pt) ? lessonOverrides.pt : (lessonOverrides.en || []));
          }
          lessonOverrides[lang][6] = clone(lessonData);
        }
      });
    }
  }

  function renderList(items){
    return '<ul class="lesson-guide-points">' + (items || []).map(function(item){
      return '<li>' + escapeHtml(item) + '</li>';
    }).join('') + '</ul>';
  }

  function getFigureNote(key){
    var notes = {
      ko:{
        site:'도메인 전체를 읽는 습관이 가장 중요합니다.',
        support:'먼저 연락하는 지원 계정은 특히 조심합니다.',
        seed:'복구 문구 입력창이 보이면 바로 멈춥니다.',
        address:'앞뒤 몇 글자만 같아도 전체 주소를 다시 봅니다.',
        clipboard:'붙여넣은 뒤 주소가 바뀌지 않았는지 꼭 다시 확인합니다.'
      },
      en:{
        site:'Reading the full domain matters more than the familiar layout.',
        support:'Be extra careful when a support account contacts you first.',
        seed:'If you see a recovery-word input box, stop immediately.',
        address:'Look at the full address, not just a few matching characters.',
        clipboard:'After pasting, confirm the address did not change.'
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

  function renderTags(items){
    return '<div class="lesson-guide-check-row">' + (items || []).map(function(item){
      return '<span class="lesson-guide-check-chip">' + escapeHtml(item) + '</span>';
    }).join('') + '</div>';
  }

  function buildLessonSevenVisualMarkup(lesson){
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    return '<div class="visual lesson-guide-panel">'
      + '<div class="visual-title">' + escapeHtml(typeof t === 'function' ? t('visual.title') : 'Visual explanation') + '</div>'
      + '<div class="lesson-guide-step-strip">' + visual.map(function(step, index){
          return '<div class="lesson-guide-step-card">'
            + '<div class="lesson-guide-step-num">0' + (index + 1) + '</div>'
            + '<div class="lesson-guide-step-copy">'
            + '<div class="lesson-guide-step-head">' + escapeHtml(step.title || '') + '</div>'
            + '<div class="lesson-guide-step-body">' + escapeHtml(step.desc || '') + '</div>'
            + '</div>'
            + '</div>';
        }).join('') + '</div>'
      + '</div>';
  }

  function getCurrentLessonSevenData(){
    var key = normalizeLang();
    if(typeof lessons !== 'undefined' && lessons && lessons[key] && lessons[key][6]){
      return clone(lessons[key][6]);
    }
    return getLessonSevenData();
  }

  function buildTopHtmlFromGuide(guide, figures){
    guide = guide || {};
    figures = figures || {};
    var siteFigure = figures.site || renderAssetFigure('lesson7-fake-site-compare', 'lesson7-fake-site-compare.svg', guide.siteAlt, 'site', 'lesson-guide-figure-side');
    var supportFigure = figures.support || renderFigure('lesson7-fake-support-dm.svg', guide.supportAlt, 'support', 'lesson-guide-figure-side');
    return ''
      + '<section class="lesson-guide-stack" aria-label="' + escapeHtml(guide.bundleTitle) + '">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.siteKicker) + '</span><h3>' + escapeHtml(guide.siteTitle) + '</h3></div>'
      +       '<p class="lesson-guide-body">' + escapeHtml(guide.siteBody) + '</p>'
      +       renderTags(guide.siteTags)
      +     '</div>'
      +     siteFigure
      +   '</div>'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     supportFigure
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.supportKicker) + '</span><h3>' + escapeHtml(guide.supportTitle) + '</h3></div>'
      +       renderList(guide.supportPoints)
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  function buildTopHtml(){
    return buildTopHtmlFromGuide(getGuideCopy());
  }

  function buildLowerHtmlFromGuide(guide, figures){
    guide = guide || {};
    figures = figures || {};
    return ''
      + '<section class="lesson-guide-stack lesson-guide-stack-lower" aria-label="' + escapeHtml(guide.bundleTitle) + '">'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     (figures.seed || renderAssetFigure('lesson7-seed-warning', 'lesson7-seed-phrase-warning.svg', guide.seedAlt, 'seed', 'lesson-guide-figure-side'))
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.seedKicker) + '</span><h3>' + escapeHtml(guide.seedTitle) + '</h3></div>'
      +       renderList(guide.seedPoints)
      +     '</div>'
      +   '</div>'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.addressKicker) + '</span><h3>' + escapeHtml(guide.addressTitle) + '</h3></div>'
      +       renderList(guide.addressPoints)
      +     '</div>'
      +     (figures.address || renderFigure('lesson7-address-poisoning.svg', guide.addressAlt, 'address', 'lesson-guide-figure-side'))
      +   '</div>'
      +   '<div class="lesson-guide-panel lesson-guide-panel-split">'
      +     (figures.clipboard || renderFigure('lesson7-clipboard-swapping.svg', guide.clipboardAlt, 'clipboard', 'lesson-guide-figure-side'))
      +     '<div class="lesson-guide-copy">'
      +       '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + escapeHtml(guide.clipboardKicker) + '</span><h3>' + escapeHtml(guide.clipboardTitle) + '</h3></div>'
      +       renderList(guide.clipboardPoints)
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  function buildLowerHtml(){
    return buildLowerHtmlFromGuide(getGuideCopy());
  }

  window.__CA_LESSON_SEVEN_TEMPLATE = {
    renderVisual: buildLessonSevenVisualMarkup,
    renderTop: buildTopHtmlFromGuide,
    renderLower: buildLowerHtmlFromGuide,
    renderList: renderList,
    renderTags: renderTags
  };

  var previousVisual = window.visualForLesson;
  if(typeof previousVisual === 'function'){
    var wrappedVisual = function(i){
      if(i !== 6) return previousVisual.apply(this, arguments);
      return buildLessonSevenVisualMarkup(getCurrentLessonSevenData());
    };
    window.visualForLesson = wrappedVisual;
    try{
      visualForLesson = wrappedVisual;
    }catch(err){}
  }

  var previousTop = window.renderLessonGuidedVisualsTop;
  window.renderLessonGuidedVisualsTop = function(i){
    if(i === 6) return buildTopHtml();
    return typeof previousTop === 'function' ? previousTop.apply(this, arguments) : '';
  };

  var previousLower = window.renderLessonGuidedVisualsLower;
  window.renderLessonGuidedVisualsLower = function(i){
    if(i === 6) return buildLowerHtml();
    return typeof previousLower === 'function' ? previousLower.apply(this, arguments) : '';
  };

  var previousKeywords = window.getLessonSearchKeywords;
  if(typeof previousKeywords === 'function'){
    window.getLessonSearchKeywords = function(index){
      if(index === 6){
        return ['scam','crypto scam','fake airdrop','giveaway scam','fake support','impersonation','rug pull','seed phrase','fake website','fake site','phishing','address poisoning','clipboard swapping'];
      }
      return previousKeywords.apply(this, arguments);
    };
  }

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

  ensureLessonSevenData();
  rerender();
})();
