(function(){
  if(typeof window === 'undefined' || window.__visitorStartPaths20260506) return;
  window.__visitorStartPaths20260506 = true;

  var HOME_SECTION_IDS = {
    visitorPaths: 'home-visitor-start-paths-section',
    quickActions: 'home-30-second-cards-section',
    shareSummary: 'home-share-summary-section',
    quickChecklists: 'home-quick-checklists-section',
    freePdf: 'home-free-pdf-value-section',
    ebook: 'home-crypto-ebook-section',
    sourceChecklists: 'source-checklists-section'
  };

  var PATH_DEFS = {
    beginners: {
      primary: 'glossary',
      secondary: 'lesson0',
      optional: 'ebook'
    },
    'first-buy': {
      primary: 'lesson5',
      secondary: 'beforeSend',
      optional: 'freePdf'
    },
    safety: {
      primary: 'safety',
      secondary: 'seedPhrase',
      optional: 'fakeWebsite'
    },
    'quick-checks': {
      primary: 'homeChecklists',
      secondary: 'shareSummary',
      optional: 'freePdf'
    }
  };

  function normalizeLang(value){
    var lang = String(value || '').toLowerCase().trim();
    if(!lang) return 'en';
    if(lang === 'br' || lang.indexOf('pt-br') === 0) return 'pt';
    if(lang.indexOf('ko') === 0) return 'ko';
    return 'en';
  }

  function getCurrentLang(){
    if(typeof currentLang === 'string' && currentLang) return normalizeLang(currentLang);
    if(document.documentElement && document.documentElement.lang){
      return normalizeLang(document.documentElement.lang);
    }
    return 'en';
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
      var route = window.__CA_GET_PAGE_ROUTE(page);
      if(route) return route;
    }
    var base = getBasePrefix();
    if(page === 'home') return toIndexRoute(base);
    if(page === 'start') return toIndexRoute(base + 'start/beginners/');
    return toIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function'){
      return window.__CA_GET_LESSON_ROUTE(index);
    }
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    return toIndexRoute(getBasePrefix() + 'lesson/' + (slugs[index] || 'blockchain') + '/');
  }

  function getChecklistRoute(slug){
    return toIndexRoute(getBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getStartRoute(slug){
    return toIndexRoute(getBasePrefix() + 'start/' + String(slug || 'beginners').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getHomeHashRoute(hash){
    return getPageRoute('home') + '#' + hash;
  }

  function escapeHtml(value){
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

  function getStartPath(){
    var bodySlug = document.body && document.body.dataset ? document.body.dataset.startPath : '';
    var globalSlug = typeof window.__CA_START_PATH__ === 'string' ? window.__CA_START_PATH__ : '';
    var slug = String(globalSlug || bodySlug || '').toLowerCase().trim();
    return PATH_DEFS[slug] ? slug : '';
  }

  function getPack(){
    var packs = {
      en: {
        homeTitle: 'Choose Your Best Starting Path',
        homeBody: 'Different visitors need different starting points. Choose the path that fits your situation best.',
        homeButton: 'Start Here',
        primaryButton: 'Start Now',
        secondaryButton: 'Quick Check',
        optionalButton: 'Go Deeper',
        cards: {
          beginners: {
            title: 'Start Here for Complete Beginners',
            body: 'Start slowly with blockchain, wallets, and the key terms.',
            intro: 'If you are completely new, start with the glossary and wallet basics first.'
          },
          'first-buy': {
            title: 'Before Your First Buy',
            body: 'Focus on the buying flow and the key checks before sending.',
            intro: 'Before your first buy, focus on the buying flow and the key checks before sending.'
          },
          safety: {
            title: 'Start with Safety',
            body: 'Start with seed phrase risks and fake website warnings first.',
            intro: 'If safety is your biggest concern, start with seed phrase and fake website risks first.'
          },
          'quick-checks': {
            title: 'Quick Checks Only',
            body: 'Go straight to short checklists and summary cards.',
            intro: 'If you need quick answers instead of long explanations, start with the checklists.'
          }
        },
        labels: {
          beforeSend: 'Before You Send Checklist',
          seedPhrase: 'Seed Phrase Safety Check',
          fakeWebsite: 'Quick Fake Website Check',
          quickActions: '30-Second Action Cards',
          shareSummary: 'Key Ideas at a Glance',
          homeChecklists: 'Quick Checklists',
          freePdf: 'Free PDFs Worth Saving',
          ebook: 'Crypto Academy eBook'
        },
        itemBodies: {
          glossary: 'Quickly review the crypto terms beginners confuse most often.',
          lesson0: 'Start with blockchain basics and how crypto records work.',
          lesson1: 'Understand wallets, access, and what actually controls your assets.',
          lesson5: 'Review the key checks before your first buy.',
          lesson6: 'Learn the most important scam and safety signals first.',
          safety: 'Open the main safety page for scam prevention basics.',
          beforeSend: 'Use a short checklist before a real transfer.',
          seedPhrase: 'Review the most important seed phrase safety rules.',
          fakeWebsite: 'Check the warning signs of fake sites before login.',
          quickActions: 'Jump to short action cards for immediate checks.',
          shareSummary: 'Review short summary cards you can save and revisit.',
          homeChecklists: 'Open the checklist section for quick practical review.',
          freePdf: 'Open the free PDF section for saved review material.',
          ebook: 'Continue into the structured eBook flow.'
        }
      },
      ko: {
        homeTitle: '\ub0b4\u0020\uc0c1\ud669\uc5d0\u0020\ub9de\ub294\u0020\uc2dc\uc791\u0020\uacbd\ub85c',
        homeBody: '\ucc98\uc74c\u0020\uc2dc\uc791\ud558\ub294\u0020\uc0ac\ub78c\u002c\u0020\uccab\u0020\uad6c\ub9e4\u0020\uc804\uc778\u0020\uc0ac\ub78c\u002c\u0020\ubcf4\uc548\uc774\u0020\uac71\uc815\ub418\ub294\u0020\uc0ac\ub78c\ub9c8\ub2e4\u0020\ud544\uc694\ud55c\u0020\uc785\uad6c\uac00\u0020\ub2e4\ub985\ub2c8\ub2e4\u002e',
        homeButton: '\uc2dc\uc791\ud558\uae30',
        primaryButton: '\uc9c0\uae08\u0020\uc2dc\uc791\ud558\uae30',
        secondaryButton: '\ube60\ub974\uac8c\u0020\ud655\uc778\ud558\uae30',
        optionalButton: '\ub354\u0020\uc815\ub9ac\ud574\uc11c\u0020\ubcf4\uae30',
        cards: {
          beginners: {
            title: '\uc644\uc804\u0020\ucd08\ubcf4\uc790\uc6a9\u0020\uc2dc\uc791\u0020\ud398\uc774\uc9c0',
            body: '\ube14\ub85d\uccb4\uc778\u002c\u0020\uc9c0\uac11\u002c\u0020\ud575\uc2ec\u0020\uc6a9\uc5b4\ubd80\ud130\u0020\ucc9c\ucc9c\ud788\u0020\uc2dc\uc791\ud569\ub2c8\ub2e4\u002e',
            intro: '\uc554\ud638\ud654\ud3d0\uac00\u0020\ucd08\uc74c\uc774\ub77c\uba74\u0020\uc6a9\uc5b4\uc640\u0020\uc9c0\uac11\ubd80\ud130\u0020\uc774\ud574\ud558\ub294\u0020\uac83\uc774\u0020\uac00\uc7a5\u0020\uc88b\uc2b5\ub2c8\ub2e4\u002e'
          },
          'first-buy': {
            title: '\uccab\u0020\uad6c\ub9e4\u0020\uc804\u0020\ube60\ub978\u0020\ud655\uc778',
            body: '\uad6c\ub9e4\u0020\ud750\ub984\uacfc\u0020\uc804\uc1a1\u0020\uc804\u0020\ud655\uc778\uc0ac\ud56d\ub9cc\u0020\uba3c\uc800\u0020\uc7a1\uc73c\uba74\u0020\ucda9\ubd84\ud569\ub2c8\ub2e4\u002e',
            intro: '\ucc98\uc74c\u0020\uc0ac\uae30\u0020\uc804\uc774\ub77c\uba74\u0020\uad6c\ub9e4\u0020\ud750\ub984\uacfc\u0020\uc804\uc1a1\u0020\uc804\u0020\ud655\uc778\ub9cc\u0020\uba3c\uc800\u0020\uc7a1\uc544\ub3c4\u0020\ucda9\ubd84\ud569\ub2c8\ub2e4\u002e'
          },
          safety: {
            title: '\uc0ac\uae30\uc640\u0020\ubcf4\uc548\ubd80\ud130\u0020\ud655\uc778\ud558\uae30',
            body: '\uc2dc\ub4dc\u0020\ubb38\uad6c\uc640\u0020\uac00\uc9dc\u0020\uc0ac\uc774\ud2b8\u0020\uc704\ud5d8\ubd80\ud130\u0020\uba3c\uc800\u0020\ud655\uc778\ud569\ub2c8\ub2e4\u002e',
            intro: '\uc0ac\uae30\uac00\u0020\uac71\uc815\ub41c\ub2e4\uba74\u0020\uc2dc\ub4dc\u0020\ubb38\uad6c\uc640\u0020\uac00\uc9dc\u0020\uc0ac\uc774\ud2b8\ubd80\ud130\u0020\uba3c\uc800\u0020\ud655\uc778\ud558\ub294\u0020\uac83\uc774\u0020\uc88b\uc2b5\ub2c8\ub2e4\u002e'
          },
          'quick-checks': {
            title: '\uc9e7\uac8c\u0020\ud655\uc778\ud558\uace0\u0020\ubc14\ub85c\u0020\ubcf4\uae30',
            body: '\uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc640\u0020\uc694\uc57d\u0020\uce74\ub4dc\ubd80\ud130\u0020\uac00\uc7a5\u0020\ube60\ub974\uac8c\u0020\ubd05\ub2c8\ub2e4\u002e',
            intro: '\uae34\u0020\uc124\uba85\ubcf4\ub2e4\u0020\uc9e7\uc740\u0020\ud655\uc778\uc774\u0020\ud544\uc694\ud558\ub2e4\uba74\u0020\uccb4\ud06c\ub9ac\uc2a4\ud2b8\ubd80\ud130\u0020\ubcf4\ub294\u0020\uac83\uc774\u0020\uac00\uc7a5\u0020\ube60\ub985\ub2c8\ub2e4\u002e'
          }
        },
        labels: {
          beforeSend: '\uc804\uc1a1\u0020\uc804\u0020\uccb4\ud06c\ub9ac\uc2a4\ud2b8',
          seedPhrase: '\uc2dc\ub4dc\u0020\ubb38\uad6c\u0020\ubcf4\uc548\u0020\uccb4\ud06c',
          fakeWebsite: '\uac00\uc9dc\u0020\uc0ac\uc774\ud2b8\u0020\ube60\ub978\u0020\ud655\uc778',
          quickActions: '\u0033\u0030\ucd08\u0020\ud574\uacb0\u0020\uce74\ub4dc',
          shareSummary: '\ud55c\u0020\uc7a5\uc73c\ub85c\u0020\ubcf4\ub294\u0020\ud575\uc2ec\u0020\uc694\uc57d',
          homeChecklists: '\ubc14\ub85c\u0020\ud655\uc778\ud558\ub294\u0020\uccb4\ud06c\ub9ac\uc2a4\ud2b8',
          freePdf: '\uc800\uc7a5\ud574\ub450\uba74\u0020\uc88b\uc740\u0020\ubb34\ub8cc\u0020\u0050\u0044\u0046',
          ebook: '\ud06c\ub9bd\ud1a0\u0020\uc544\uce74\ub370\ubbf8\u0020\uc804\uc790\ucc45'
        },
        itemBodies: {
          glossary: '\ucd08\ubcf4\uc790\uac00\u0020\uac00\uc7a5\u0020\uc790\uc8fc\u0020\ud5f7\uac08\ub9ac\ub294\u0020\uc6a9\uc5b4\ub97c\u0020\ube60\ub974\uac8c\u0020\uc815\ub9ac\ud569\ub2c8\ub2e4\u002e',
          lesson0: '\ube14\ub85d\uccb4\uc778\uacfc\u0020\uae30\ub85d\u0020\uad6c\uc870\uc758\u0020\uae30\ucd08\ub97c\u0020\uba3c\uc800\u0020\uc774\ud574\ud569\ub2c8\ub2e4\u002e',
          lesson1: '\uc9c0\uac11\u002c\u0020\uc811\uadfc\u0020\ubc29\uc2dd\u002c\u0020\uc790\uc0b0\u0020\ud1b5\uc81c\u0020\ud750\ub984\uc744\u0020\uc774\ud574\ud569\ub2c8\ub2e4\u002e',
          lesson5: '\uccab\u0020\uad6c\ub9e4\u0020\uc804\uc5d0\u0020\ud655\uc778\ud574\uc57c\u0020\ud560\u0020\ud575\uc2ec\u0020\ud750\ub984\uc744\u0020\ube60\ub974\uac8c\u0020\ubd05\ub2c8\ub2e4\u002e',
          lesson6: '\uac00\uc7a5\u0020\uc911\uc694\ud55c\u0020\uc0ac\uae30\u0020\uacbd\uace0\uc640\u0020\ubcf4\uc548\u0020\uc2e0\ud638\ub97c\u0020\uba3c\uc800\u0020\ud655\uc778\ud569\ub2c8\ub2e4\u002e',
          safety: '\uc0ac\uae30\u0020\uc608\ubc29\uc758\u0020\uae30\ubcf8\uc744\u0020\u0073\u0061\u0066\u0065\u0074\u0079\u0020\ud398\uc774\uc9c0\uc5d0\uc11c\u0020\ud655\uc778\ud569\ub2c8\ub2e4\u002e',
          beforeSend: '\uc2e4\uc81c\u0020\uc804\uc1a1\u0020\uc804\uc5d0\u0020\uc9e7\uac8c\u0020\ub2e4\uc2dc\u0020\ubcf4\ub294\u0020\uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4\u002e',
          seedPhrase: '\uc2dc\ub4dc\u0020\ubb38\uad6c\u0020\uad00\ub828\u0020\ud575\uc2ec\u0020\ubcf4\uc548\u0020\uc6d0\uce59\ub9cc\u0020\uc9e7\uac8c\u0020\ud655\uc778\ud569\ub2c8\ub2e4\u002e',
          fakeWebsite: '\ub85c\uadf8\uc778\u0020\uc804\u0020\uac00\uc9dc\u0020\uc0ac\uc774\ud2b8\u0020\uc704\ud5d8\u0020\uc2e0\ud638\ub97c\u0020\ub2e4\uc2dc\u0020\ubd05\ub2c8\ub2e4\u002e',
          quickActions: '\uc9c0\uae08\u0020\ubc14\ub85c\u0020\ud655\uc778\ud560\u0020\ud575\uc2ec\u0020\ud589\ub3d9\u0020\uce74\ub4dc\ub85c\u0020\uc774\ub3d9\ud569\ub2c8\ub2e4\u002e',
          shareSummary: '\uc9e7\uac8c\u0020\uc800\uc7a5\ud574\ub450\uae30\u0020\uc88b\uc740\u0020\ud575\uc2ec\u0020\uc694\uc57d\u0020\uce74\ub4dc\ub85c\u0020\uc774\ub3d9\ud569\ub2c8\ub2e4\u002e',
          homeChecklists: '\ube60\ub974\uac8c\u0020\ub2e4\uc2dc\u0020\ubcf4\ub294\u0020\uccb4\ud06c\ub9ac\uc2a4\ud2b8\u0020\ubb36\uc74c\uc744\u0020\uc5fd\ub2c8\ub2e4\u002e',
          freePdf: '\uc800\uc7a5\ud574\ub450\uace0\u0020\ub2e4\uc2dc\u0020\ubcf4\uae30\u0020\uc88b\uc740\u0020\ubb34\ub8cc\u0020\u0050\u0044\u0046\u0020\ud750\ub984\uc744\u0020\uc5fd\ub2c8\ub2e4\u002e',
          ebook: '\ub354\u0020\uc815\ub9ac\ub41c\u0020\uc804\uc790\ucc45\u0020\ubcf5\uc2b5\u0020\ud750\ub984\uc73c\ub85c\u0020\uc774\uc5b4\uc9d1\ub2c8\ub2e4\u002e'
        }
      }
    };
    if(packs.en){
      packs.en.homeBody = 'Pick the path that fits you best.';
      packs.en.cards.beginners.body = 'Start with terms, blockchain, and wallets.';
      packs.en.cards['first-buy'].body = 'Review the buy flow and send checks first.';
      packs.en.cards.safety.body = 'Start with seed phrase and fake website risks.';
      packs.en.cards['quick-checks'].body = 'Go straight to checklists and summary cards.';
    }
    if(packs.ko){
      packs.ko.homeBody = '지금 내 상황에 맞는 시작 경로를 고르면 더 빠르게 이해할 수 있습니다.';
      packs.ko.cards.beginners.body = '용어, 블록체인, 지갑부터 천천히 시작합니다.';
      packs.ko.cards['first-buy'].body = '구매 흐름과 전송 전 확인부터 먼저 봅니다.';
      packs.ko.cards.safety.body = '시드 문구와 가짜 사이트 위험부터 먼저 확인합니다.';
      packs.ko.cards['quick-checks'].body = '체크리스트와 요약 카드부터 바로 봅니다.';
    }
    return packs[getCurrentLang()] || packs.en;
  }

  function getItemConfig(key){
    var pack = getPack();
    var labels = pack.labels;
    var map = {
      glossary: {
        title: tText('nav.glossary', 'Glossary'),
        body: pack.itemBodies.glossary,
        href: getPageRoute('glossary')
      },
      lesson0: {
        title: tText('nav.l1', 'Lesson 1'),
        body: pack.itemBodies.lesson0,
        href: getLessonRoute(0)
      },
      lesson1: {
        title: tText('nav.l2', 'Lesson 2'),
        body: pack.itemBodies.lesson1,
        href: getLessonRoute(1)
      },
      lesson5: {
        title: tText('nav.l6', 'Lesson 6'),
        body: pack.itemBodies.lesson5,
        href: getLessonRoute(5)
      },
      lesson6: {
        title: tText('nav.l7', 'Lesson 7'),
        body: pack.itemBodies.lesson6,
        href: getLessonRoute(6)
      },
      safety: {
        title: tText('nav.safety', 'Safety'),
        body: pack.itemBodies.safety,
        href: getPageRoute('safety')
      },
      beforeSend: {
        title: labels.beforeSend,
        body: pack.itemBodies.beforeSend,
        href: getChecklistRoute('before-send')
      },
      seedPhrase: {
        title: labels.seedPhrase,
        body: pack.itemBodies.seedPhrase,
        href: getChecklistRoute('seed-phrase-safety')
      },
      fakeWebsite: {
        title: labels.fakeWebsite,
        body: pack.itemBodies.fakeWebsite,
        href: getChecklistRoute('fake-website-check')
      },
      quickActions: {
        title: labels.quickActions,
        body: pack.itemBodies.quickActions,
        href: getHomeHashRoute(HOME_SECTION_IDS.quickActions)
      },
      shareSummary: {
        title: labels.shareSummary,
        body: pack.itemBodies.shareSummary,
        href: getHomeHashRoute(HOME_SECTION_IDS.shareSummary)
      },
      homeChecklists: {
        title: labels.homeChecklists,
        body: pack.itemBodies.homeChecklists,
        href: getHomeHashRoute(HOME_SECTION_IDS.quickChecklists)
      },
      freePdf: {
        title: labels.freePdf,
        body: pack.itemBodies.freePdf,
        href: getHomeHashRoute(HOME_SECTION_IDS.freePdf)
      },
      ebook: {
        title: labels.ebook,
        body: pack.itemBodies.ebook,
        href: getHomeHashRoute(HOME_SECTION_IDS.ebook)
      }
    };
    return map[key] || null;
  }

  function buildHomeVisitorPathsHtml(){
    var pack = getPack();
    var slugs = ['beginners', 'first-buy', 'safety', 'quick-checks'];
    return ''
      + '<section id="' + HOME_SECTION_IDS.visitorPaths + '" class="home-visitor-paths-block home-situation-block">'
      +   '<div class="home-situation-title">' + escapeHtml(pack.homeTitle) + '</div>'
      +   '<div class="home-situation-body">' + escapeHtml(pack.homeBody) + '</div>'
      +   '<div class="home-visitor-paths-grid">'
      +     slugs.map(function(slug){
              var card = pack.cards[slug];
              return ''
                + '<a class="home-visitor-path-card" href="' + escapeHtml(getStartRoute(slug)) + '">'
                +   '<div class="home-visitor-path-title">' + escapeHtml(card.title) + '</div>'
                +   '<div class="home-visitor-path-body">' + escapeHtml(card.body) + '</div>'
                +   '<span class="home-visitor-path-cta">' + escapeHtml(pack.homeButton) + '</span>'
                + '</a>';
            }).join('')
      +   '</div>'
      + '</section>';
  }

  function buildStartCardHtml(key, type){
    var item = getItemConfig(key);
    var pack = getPack();
    var label = pack.primaryButton;
    var cardClass = 'start-path-card';
    if(type === 'secondary'){
      label = pack.secondaryButton;
      cardClass += ' is-secondary';
    }
    if(type === 'primary'){
      cardClass += ' is-primary';
    }
    if(!item) return '';
    return ''
      + '<a class="' + cardClass + '" href="' + escapeHtml(item.href) + '">'
      +   '<div class="start-path-card-title">' + escapeHtml(item.title) + '</div>'
      +   '<div class="start-path-card-body">' + escapeHtml(item.body) + '</div>'
      +   '<span class="start-path-card-link">' + escapeHtml(label) + '</span>'
      + '</a>';
  }

  function buildOptionalActionHtml(key){
    var item = getItemConfig(key);
    var pack = getPack();
    if(!item) return '';
    return ''
      + '<div class="start-path-optional">'
      +   '<div class="start-path-optional-label">' + escapeHtml(pack.optionalButton) + '</div>'
      +   '<a class="start-path-optional-link" href="' + escapeHtml(item.href) + '">'
      +     '<span class="start-path-optional-title">' + escapeHtml(item.title) + '</span>'
      +     '<span class="start-path-optional-body">' + escapeHtml(item.body) + '</span>'
      +   '</a>'
      + '</div>';
  }

  function buildStartPathHtml(slug){
    var pack = getPack();
    var pathCard = pack.cards[slug];
    var pathDef = PATH_DEFS[slug];
    if(!pathCard || !pathDef) return null;
    return ''
      + '<div class="lc-header start-path-header">'
      +   '<div class="lc-meta"><span class="meta-pill">' + escapeHtml(tText('nav.start', 'Start Here')) + '</span><span class="meta-cat">' + escapeHtml(pathCard.title) + '</span></div>'
      +   '<h1 class="lc-title">' + escapeHtml(pathCard.title) + '</h1>'
      +   '<p class="lc-intro">' + escapeHtml(pathCard.intro) + '</p>'
      + '</div>'
      + '<div class="lesson-body start-path-body">'
      +   buildStartCardHtml(pathDef.primary, 'primary')
      +   buildStartCardHtml(pathDef.secondary, 'secondary')
      +   buildOptionalActionHtml(pathDef.optional)
      + '</div>';
  }

  function createNodeFromHtml(html){
    var host = document.createElement('div');
    host.innerHTML = html;
    return host.firstElementChild;
  }

  function ensureHomeVisitorPathsSection(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    var next = createNodeFromHtml(buildHomeVisitorPathsHtml());
    if(!next) return;
    var current = hero.querySelector('.home-visitor-paths-block');
    if(current){
      current.replaceWith(next);
      return;
    }
    var anchor = hero.querySelector('.home-start-three-block')
      || hero.querySelector('.home-situation-block')
      || hero.querySelector('.home-desc');
    if(anchor){
      anchor.insertAdjacentElement('afterend', next);
    } else {
      hero.insertAdjacentElement('beforeend', next);
    }
  }

  function ensureSectionAnchors(){
    var homePanel = document.getElementById('homePanel');
    if(homePanel){
      var quickActions = homePanel.querySelector('.home-action-cards-block:not(.home-checklist-entry-block)');
      if(quickActions) quickActions.id = HOME_SECTION_IDS.quickActions;
      var shareSummary = homePanel.querySelector('.home-share-summary-block');
      if(shareSummary) shareSummary.id = HOME_SECTION_IDS.shareSummary;
      var quickChecklists = homePanel.querySelector('.home-checklist-entry-block');
      if(quickChecklists) quickChecklists.id = HOME_SECTION_IDS.quickChecklists;
      var freePdf = homePanel.querySelector('.home-free-pdf-value-block');
      if(freePdf) freePdf.id = HOME_SECTION_IDS.freePdf;
      var ebook = homePanel.querySelector('.home-available-premium-guides');
      if(ebook) ebook.id = HOME_SECTION_IDS.ebook;
    }
    var sourcesPanel = document.getElementById('sourcesPanel');
    if(sourcesPanel){
      var sourceChecklists = sourcesPanel.querySelector('.src-section-block[data-source-section="checklists"]');
      if(sourceChecklists) sourceChecklists.id = HOME_SECTION_IDS.sourceChecklists;
    }
  }

  function restoreHashFocus(){
    var hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '';
    if(!hash) return;
    var supported = [
      HOME_SECTION_IDS.quickActions,
      HOME_SECTION_IDS.shareSummary,
      HOME_SECTION_IDS.quickChecklists,
      HOME_SECTION_IDS.freePdf,
      HOME_SECTION_IDS.ebook,
      HOME_SECTION_IDS.sourceChecklists
    ];
    if(supported.indexOf(hash) === -1) return;
    var target = document.getElementById(hash);
    if(!target) return;
    var focusKey = (window.location.pathname || '') + '#' + hash + '|' + String(currentPage || window.__CA_INITIAL_PAGE__ || '');
    if(restoreHashFocus.__lastKey === focusKey) return;
    restoreHashFocus.__lastKey = focusKey;
    if(typeof target.scrollIntoView === 'function'){
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
    target.classList.add('is-start-path-spotlight');
    setTimeout(function(){
      target.classList.remove('is-start-path-spotlight');
    }, 2200);
  }

  function syncVisitorStartPaths(){
    ensureHomeVisitorPathsSection();
    ensureSectionAnchors();
    if(typeof requestAnimationFrame === 'function'){
      requestAnimationFrame(restoreHashFocus);
    } else {
      setTimeout(restoreHashFocus, 40);
    }
  }

  function wrapRenderStartHere(){
    var original = window.renderStartHere;
    if(typeof original !== 'function' || original.__visitorStartPathsWrapped) return;
    var wrapped = function(){
      var slug = getStartPath();
      if(!slug) return original.apply(this, arguments);
      var html = buildStartPathHtml(slug);
      return html || original.apply(this, arguments);
    };
    wrapped.__visitorStartPathsWrapped = true;
    wrapped.__visitorStartPathsOriginal = original;
    window.renderStartHere = wrapped;
    try{ renderStartHere = wrapped; }catch(err){}
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
    if(typeof original !== 'function' || original.__visitorStartPathsSyncWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      wrapRenderStartHere();
      syncVisitorStartPaths();
      return result;
    };
    wrapped.__visitorStartPathsSyncWrapped = true;
    wrapped.__visitorStartPathsSyncOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapRenderStartHere();
  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncVisitorStartPaths);
  }

  syncVisitorStartPaths();
})();
