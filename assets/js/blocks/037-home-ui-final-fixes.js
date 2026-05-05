(function(){
  if(typeof window === 'undefined' || typeof document === 'undefined') return;
  if(window.__homeUiFinalFixes) return;
  window.__homeUiFinalFixes = true;

  function homeFixLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getHomeFixPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        finderTitle:'Not sure where to start?',
        finderDesc:'Choose a lesson, glossary, safety page, or checklist from the menu below.',
        safetySub:'Scam prevention and safer habits',
        faqSub:'Quick beginner questions',
        startSub:'Recommended first route for brand-new learners',
        supportTitle:'Support Crypto Academy',
        supportBody:'Crypto Academy stays free to use. If it helped you, you can support future updates here.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'Search',Lessons:'Lessons',Languages:'Languages',Updates:'Updates',Safety:'Safety',Home:'Home'}
      },
      ko:{
        finderTitle:'\uc5b4\ub514\uc11c \uc2dc\uc791\ud560\uc9c0 \ubaa8\ub974\uaca0\ub098\uc694?',
        finderDesc:'\uc544\ub798 \uba54\ub274\uc5d0\uc11c lesson, glossary, safety, checklist \uc911 \ud544\uc694\ud55c \uacf3\ubd80\ud130 \ubc14\ub85c \uc5f4\uc5b4\ubcf4\uc138\uc694.',
        safetySub:'\uc0ac\uae30 \uc608\ubc29\uacfc \ub354 \uc548\uc804\ud55c \uc2b5\uad00',
        faqSub:'\ucd08\ubcf4\uc790\uc6a9 \ube60\ub978 \uc9c8\ubb38 \ubaa8\uc74c',
        startSub:'\uc644\uc804 \ucd08\ubcf4\uc790\ub97c \uc704\ud55c \ucd94\ucc9c \uc2dc\uc791 \uacbd\ub85c',
        supportTitle:'Crypto Academy \ud6c4\uc6d0\ud558\uae30',
        supportBody:'Crypto Academy\ub294 \ubb34\ub8cc\ub85c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4\uba74 \uc55e\uc73c\ub85c\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \ud6c4\uc6d0\uc73c\ub85c \uc751\uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        supportButton:'Buy Me a Coffee',
        updateLabels:{Search:'\uac80\uc0c9',Lessons:'\uac15\uc758',Languages:'\uc5b8\uc5b4',Updates:'\uc5c5\ub370\uc774\ud2b8',Safety:'\ubcf4\uc548',Home:'\ud648'}
      }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  function getHomeHeroCompactPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Beginner crypto, made practical',
        desc:'Lessons, safety basics, glossary, and quick checklists for people starting from zero.'
      },
      ko:{
        title:'\ucd08\ubcf4\uc790\ub97c \uc704\ud55c \uc2e4\uc804 \uc554\ud638\ud654\ud3d0 \ud559\uc2b5',
        desc:'\uae30\ucd08 lesson, \ubcf4\uc548 \ud750\ub984, glossary, \ube60\ub978 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ud55c\uacf3\uc5d0\uc11c \uc9e7\uace0 \uc120\uba85\ud558\uac8c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'
      }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  function getHomePdfPack(){
    var lang = homeFixLang();
    var packs = {
      en:{ title:'Free PDF Guides', body:'Open the free checklist PDFs when you want a quick review.' },
      ko:{ title:'\ubb34\ub8cc PDF \uac00\uc774\ub4dc', body:'\uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\uc744 \ub54c \ubb34\ub8cc \uccb4\ud06c\ub9ac\uc2a4\ud2b8 PDF\ub97c \uc5f4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.' }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  function getHomePremiumPdfPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Premium PDF Guide',
        body:'If you want something more detailed than a quick checklist, you can explore the extended beginner guidebook in PDF format.',
        extra:'It covers first buying, transfers, storage, and scam awareness in a more structured way.',
        buttonEn:'View English Edition',
        buttonKo:'View Korean Edition'
      },
      ko:{
        title:'\uc720\ub8cc PDF \uac00\uc774\ub4dc',
        body:'\uc9e7\uc740 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ubcf4\ub2e4 \ub354 \uc790\uc138\ud55c \uc548\ub0b4\uac00 \ud544\uc694\ud558\ub2e4\uba74 \ud655\uc7a5\ud615 \ucd08\ubcf4\uc790 PDF\ub97c \uc5f4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        extra:'\uccab \uad6c\ub9e4, \uc804\uc1a1, \ubcf4\uad00, \uc0ac\uae30 \uc608\ubc29 \uae30\ucd08\ub97c \ud55c \ud750\ub984\uc73c\ub85c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.',
        buttonEn:'\uc601\ubb38\ud310 \ubcf4\uae30',
        buttonKo:'\ud55c\uae00\ud310 \ubcf4\uae30'
      }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  function getHomeAvailablePremiumGuidesPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Crypto Academy eBook',
        body:'If you want a more structured and in-depth guide, explore the Crypto Academy eBooks.',
        card1Title:'Crypto Academy eBook (English Edition)',
        card2Title:'Crypto Academy eBook (Korean Edition)',
        card1Body:'Crypto Academy eBook in English',
        card2Body:'Crypto Academy eBook in Korean',
        button:'View eBook',
        previewTitle:'Crypto Academy eBook Preview',
        previewBody:'A structured eBook designed to help beginners understand the crypto concepts and practical usage flows that most people struggle with first.',
        previewPoints:[
          'Understand core concepts in a more structured way',
          'Review the full first-buy and transfer flow in one place',
          'Learn practical checks to reduce wallet, address, and network mistakes'
        ]
      },
      ko:{
        title:'\ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45',
        body:'\ub354 \uc815\ub9ac\ub41c \ud750\ub984\uc73c\ub85c \ubcf5\uc2b5\ud558\uace0 \uc2f6\ub2e4\uba74 \ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694.',
        card1Title:'\uc601\ubb38 \ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45',
        card2Title:'\ud55c\uae00 \ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45',
        card1Body:'\uc601\uc5b4\ub85c \uc77d\ub294 \ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45',
        card2Body:'\ud55c\uad6d\uc5b4\ub85c \uc77d\ub294 \ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45',
        button:'\uc804\uc790\ucc45 \ubcf4\uae30',
        previewTitle:'\ud06c\ub9bd\ud1a0 \uc544\uce74\ub370\ubbf8 \uc804\uc790\ucc45 \ubbf8\ub9ac\ubcf4\uae30',
        previewBody:'\ucd08\ubcf4\uc790\uac00 \uac00\uc7a5 \uc790\uc8fc \ub9c9\ud788\ub294 \ud575\uc2ec \uac1c\ub150\uacfc \uc2e4\uc81c \uc0ac\uc6a9 \ud750\ub984\uc744 \ub354 \uccb4\uacc4\uc801\uc73c\ub85c \uc815\ub9ac\ud55c \uc804\uc790\ucc45\uc785\ub2c8\ub2e4.',
        previewPoints:[
          '\ud575\uc2ec \uac1c\ub150\uc744 \ub354 \uccb4\uacc4\uc801\uc73c\ub85c \uc815\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uccab \uad6c\ub9e4\uc640 \uc804\uc1a1 \ud750\ub984\uc744 \ud55c \ubc88\uc5d0 \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4',
          '\uc9c0\uac11, \uc8fc\uc18c, \ub124\ud2b8\uc6cc\ud06c \uc2e4\uc218\ub97c \uc904\uc774\ub294 \uae30\uc900\uc744 \uc775\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4'
        ]
      }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  function getHomeActionCardsPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'30-Second Action Cards',
        body:'Short practical checks for the moments when you need quick answers.',
        button:'Quick Check',
        cards:[
          { tag:'SEND', title:'5-Second Check Before Sending', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/transfer/index.html', points:['Recheck the wallet address','Recheck the network','Use a small test first if possible'] },
          { tag:'SEED', title:'Seed Phrase Never-Do List', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/scams/index.html', points:['Never share it with anyone','Never send it in a DM','Be suspicious if a site asks for it'] },
          { tag:'SITE', title:'Quick Fake Website Check', href:(window.__CA_BASE_PREFIX__ || './') + 'safety/index.html', points:['Check the domain in the address bar','Use bookmarked official links first','Do not open ad or DM links right away'] },
          { tag:'BUY', title:'Final Check Before Your First Buy', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/first-buy/index.html', points:['Confirm the platform first','Check the fees before buying','Think about where you will store it'] }
        ]
      },
      ko:{
        title:'30\ucd08 \ud574\uacb0 \uce74\ub4dc',
        body:'\uae09\ud558\uac8c \ud655\uc778\ud574\uc57c \ud560 \ud575\uc2ec\ub9cc \uc9e7\uac8c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.',
        button:'\ube60\ub978 \ud655\uc778',
        cards:[
          { tag:'SEND', title:'\uc804\uc1a1 \uc804 5\ucd08 \uccb4\ud06c', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/transfer/index.html', points:['\uc8fc\uc18c \ub2e4\uc2dc \ud655\uc778','\ub124\ud2b8\uc6cc\ud06c \ub2e4\uc2dc \ud655\uc778','\uac00\ub2a5\ud558\uba74 \uc18c\uc561 \ud14c\uc2a4\ud2b8 \uba3c\uc800'] },
          { tag:'SEED', title:'\uc2dc\ub4dc \ubb38\uad6c \uc808\ub300 \uae08\uc9c0', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/scams/index.html', points:['\uacf5\uc720\ud558\uc9c0 \uc54a\uae30','DM\uc73c\ub85c \ubcf4\ub0b4\uc9c0 \uc54a\uae30','\uc785\ub825 \uc694\uad6c \uc0ac\uc774\ud2b8 \uc758\uc2ec\ud558\uae30'] },
          { tag:'SITE', title:'\uac00\uc9dc \uc0ac\uc774\ud2b8 \ube60\ub978 \ud655\uc778', href:(window.__CA_BASE_PREFIX__ || './') + 'safety/index.html', points:['\uc8fc\uc18c\ucc3d \ub3c4\uba54\uc778 \ud655\uc778','\ubd81\ub9c8\ud06c\ud55c \uacf5\uc2dd \ub9c1\ud06c \uc6b0\uc120','\uad11\uace0\ub098 DM \ub9c1\ud06c \ubc14\ub85c \ub204\ub974\uc9c0 \uc54a\uae30'] },
          { tag:'BUY', title:'\uccab \uad6c\ub9e4 \uc804 \ub9c8\uc9c0\ub9c9 \ud655\uc778', href:(window.__CA_BASE_PREFIX__ || './') + 'lesson/first-buy/index.html', points:['\ud50c\ub7ab\ud3fc \ud655\uc778','\uc218\uc218\ub8cc \ud655\uc778','\ubcf4\uad00 \ubc29\uc2dd \uc0dd\uac01\ud558\uae30'] }
        ]
      }
    };
    packs.th = packs.en;
    packs.id = packs.en;
    packs.pt = packs.en;
    packs.br = packs.pt;
    packs.tr = packs.en;
    packs.es = packs.en;
    packs.ar = packs.en;
    packs.vi = packs.en;
    packs.ha = packs.en;
    return packs[lang] || packs.en;
  }

  var homePdfFiles = [
    {code:'en', label:'English PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-en.pdf'},
    {code:'ko', label:'Korean PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ko.pdf'},
    {code:'th', label:'Thai PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-th.pdf'},
    {code:'id', label:'Indonesian PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-id.pdf'},
    {code:'pt', label:'Portuguese PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-pt.pdf'},
    {code:'br', label:'Brazilian Portuguese PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-br.pdf'},
    {code:'tr', label:'Turkish PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-tr.pdf'},
    {code:'es', label:'Spanish PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-es.pdf'},
    {code:'ar', label:'Arabic PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ar.pdf'},
    {code:'vi', label:'Vietnamese PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-vi.pdf'},
    {code:'ha', label:'Hausa PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ha.pdf'}
  ];

  function getHomeUpdateLabelKeys(date){
    var byDate = {
      '2026-04-12':['Search','Safety','Updates'],
      '2026-04-11':['Home','Lessons','Updates'],
      '2026-04-10':['Search','Lessons','Safety'],
      '2026-04-09':['Languages','Search','Updates']
    };
    return byDate[date] || ['Updates'];
  }

  function buildHomeUpdateMetaHtml(date){
    var pack = getHomeFixPack();
    var keys = getHomeUpdateLabelKeys(date);
    var html = '<div class="home-recent-update-meta">';
    for(var i = 0; i < keys.length; i++){
      var key = keys[i];
      var text = (pack.updateLabels && pack.updateLabels[key]) || key;
      html += '<span class="home-recent-update-tag">' + text + '</span>';
    }
    html += '</div>';
    return html;
  }

  function getCompletedSetFinal(){
    try{
      return JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]');
    }catch(err){
      return [];
    }
  }

  function hasCompletedLessonFinal(list, index){
    if(!list || !list.length) return false;
    for(var i = 0; i < list.length; i++){
      if(Number(list[i]) === Number(index)) return true;
    }
    return false;
  }

  function getLastVisitFinal(){
    try{
      return JSON.parse(localStorage.getItem('cryptoAcademyLastVisit') || 'null');
    }catch(err){
      return null;
    }
  }

  function getNextIncompleteLessonAfterFinal(startIndex, completedList, total){
    for(var i = Math.max(0, startIndex + 1); i < total; i++){
      if(!hasCompletedLessonFinal(completedList, i)) return i;
    }
    return -1;
  }

  function getFirstIncompleteLessonFinal(completedList, total){
    for(var i = 0; i < total; i++){
      if(!hasCompletedLessonFinal(completedList, i)) return i;
    }
    return -1;
  }

  function getContinueLessonIndexFinal(){
    var total = (typeof getTotalLessons === 'function') ? getTotalLessons() : 7;
    var completedList = getCompletedSetFinal();
    var lastVisit = getLastVisitFinal();
    if(lastVisit && lastVisit.type === 'lesson' && typeof lastVisit.index === 'number' && lastVisit.index >= 0 && lastVisit.index < total){
      if(!hasCompletedLessonFinal(completedList, lastVisit.index)) return lastVisit.index;
      var afterLast = getNextIncompleteLessonAfterFinal(lastVisit.index, completedList, total);
      if(afterLast !== -1) return afterLast;
      return lastVisit.index;
    }
    var firstIncomplete = getFirstIncompleteLessonFinal(completedList, total);
    if(firstIncomplete !== -1) return firstIncomplete;
    return 0;
  }

  function getLessonEntryFromPoolFinal(pool, index){
    return (pool && pool[index]) ? pool[index] : null;
  }

  function getTranslatedNavLessonTitleFinal(index){
    if(typeof t !== 'function') return '';
    var key = 'nav.l' + (index + 1);
    var value = t(key);
    if(!value || value === key) return '';
    return String(value).trim();
  }

  function getLessonTitleFinal(index){
    var lang = homeFixLang();
    var localizedLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons[lang] : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides[lang] : null, index);
    var englishLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons.en : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides.en : null, index);
    var localizedTitle = localizedLesson && localizedLesson.title ? String(localizedLesson.title).trim() : '';
    var englishTitle = englishLesson && englishLesson.title ? String(englishLesson.title).trim() : '';
    var navTitle = getTranslatedNavLessonTitleFinal(index);

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

  window.getLessonTitleFinal = getLessonTitleFinal;

  window.openContinueLessonFinal = function(){
    var index = getContinueLessonIndexFinal();
    if(typeof showLesson === 'function') showLesson(index);
  };

  function getLessonSevenRoadmapIconHtml(){
    return '<span class="lesson7-roadmap-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"></path><path d="M12 8v5"></path><path d="M12 16h.01"></path></svg></span>';
  }

  function getHomeMenuItemsFinal(){
    var pack = getHomeFixPack();
    var items = [];
    for(var i = 0; i < 7; i++){
      items.push({
        type:(i === 6 ? 'scams' : 'lesson'),
        badge:'L' + (i + 1),
        title:typeof t === 'function' ? t('nav.l' + (i + 1)) : ('Lesson ' + (i + 1)),
        desc:typeof t === 'function' ? (t('nav.l' + (i + 1) + 'sub') || '') : '',
        action:(function(idx){ return function(){ if(typeof showLesson === 'function') showLesson(idx); }; })(i)
      });
    }
    items.push({
      type:'page',
      badge:'G',
      title:typeof t === 'function' ? t('nav.glossary') : 'Glossary',
      desc:typeof t === 'function' ? (t('nav.glossarysub') || '') : '',
      action:function(){ if(typeof showPage === 'function') showPage('glossary'); }
    });
    items.push({
      type:'safety',
      badge:'S',
      title:typeof t === 'function' ? t('nav.safety') : 'Safety',
      desc:pack.safetySub,
      action:function(){ if(typeof showPage === 'function') showPage('safety'); }
    });
    items.push({
      type:'page',
      badge:'SRC',
      title:typeof t === 'function' ? t('nav.sources') : 'Source Library',
      desc:typeof t === 'function' ? (t('nav.sourcesub') || '') : '',
      action:function(){ if(typeof showPage === 'function') showPage('sources'); }
    });
    items.push({
      type:'page',
      badge:'FAQ',
      title:typeof t === 'function' ? t('nav.faqPage') : 'FAQ',
      desc:pack.faqSub,
      action:function(){ if(typeof showPage === 'function') showPage('faq'); }
    });
    return items;
  }

  function buildHomeSupportBlockHtml(){
    var pack = getHomeFixPack();
    return ''
      + '<section class="home-support-block">'
      +   '<div class="home-support-copy">'
      +     '<div class="home-support-title">' + (pack.supportTitle || 'Support Crypto Academy') + '</div>'
      +     '<div class="home-support-body">' + (pack.supportBody || 'Crypto Academy stays free to use. If it helped you, you can support future updates here.') + '</div>'
      +   '</div>'
      +   '<a class="home-support-btn" href="https://buymeacoffee.com/beenetworkkorea" target="_blank" rel="noopener noreferrer">' + (pack.supportButton || 'Buy Me a Coffee') + '</a>'
      + '</section>';
  }

  function buildHomePdfGuidesHtml(){
    var pack = getHomePdfPack();
    var linksHtml = '';
    for(var i = 0; i < homePdfFiles.length; i++){
      var item = homePdfFiles[i];
      linksHtml += '<a class="home-pdf-link" href="' + item.href + '" target="_blank" rel="noopener noreferrer"><span>' + item.label + '</span><span class="home-pdf-link-tag">PDF</span></a>';
    }
    return ''
      + '<section class="home-pdf-block">'
      +   '<div class="home-pdf-title">' + (pack.title || 'Free PDF Guides') + '</div>'
      +   '<div class="home-pdf-body">' + (pack.body || 'Open the free checklist PDFs when you want a quick review.') + '</div>'
      +   '<div class="home-pdf-grid">' + linksHtml + '</div>'
      + '</section>';
  }

  function buildHomePremiumPdfHtml(){
    var pack = getHomePremiumPdfPack();
    return ''
      + '<section class="home-premium-pdf-block">'
      +   '<div class="home-premium-pdf-title">' + (pack.title || 'Premium PDF Guide') + '</div>'
      +   '<div class="home-premium-pdf-body">' + (pack.body || 'If you want something more detailed than a quick checklist, you can explore the extended beginner guidebook in PDF format.') + '</div>'
      +   '<div class="home-premium-pdf-extra">' + (pack.extra || 'It covers first buying, transfers, storage, and scam awareness in a more structured way.') + '</div>'
      +   '<div class="home-premium-pdf-actions">'
      +     '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/beenetworkkorea/e/528650" target="_blank" rel="noopener noreferrer">' + (pack.buttonEn || 'View English Edition') + '</a>'
      +     '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/beenetworkkorea/e/528662" target="_blank" rel="noopener noreferrer">' + (pack.buttonKo || 'View Korean Edition') + '</a>'
      +   '</div>'
      + '</section>';
  }

  function buildHomeAvailablePremiumGuidesHtml(){
    var pack = getHomeAvailablePremiumGuidesPack();
    var previewHtml = '<div class="home-ebook-preview-box">'
      + '<div class="home-ebook-preview-title">' + (pack.previewTitle || 'Crypto Academy eBook Preview') + '</div>'
      + '<div class="home-ebook-preview-body">' + (pack.previewBody || '') + '</div>';
    if(pack.previewPoints && pack.previewPoints.length){
      previewHtml += '<ul class="home-ebook-preview-list">';
      for(var i = 0; i < pack.previewPoints.length; i++){
        previewHtml += '<li>' + pack.previewPoints[i] + '</li>';
      }
      previewHtml += '</ul>';
    }
    previewHtml += '</div>';
    return ''
      + '<section class="home-available-premium-guides" id="home-crypto-ebook-section">'
      +   '<div class="home-available-premium-guides-title">' + (pack.title || 'Crypto Academy eBook') + '</div>'
      +   '<div class="home-available-premium-guides-body">' + (pack.body || '') + '</div>'
      +   previewHtml
      +   '<div class="home-available-premium-guides-grid">'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card1Title || '') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card1Body || '') + '</div>'
      +       '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/BeeNetworkKorea/e/532817" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View eBook') + '</a>'
      +     '</article>'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card2Title || '') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card2Body || '') + '</div>'
      +       '<a class="home-premium-pdf-btn" href="https://buymeacoffee.com/BeeNetworkKorea/e/532815" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View eBook') + '</a>'
      +     '</article>'
      +   '</div>'
      + '</section>';
  }

  function buildHomeActionCardsHtml(){
    var pack = getHomeActionCardsPack();
    var cards = pack.cards || [];
    var html = ''
      + '<section class="home-fast-actions-block home-action-cards-block">'
      +   '<div class="home-action-cards-title">' + (pack.title || '30-Second Action Cards') + '</div>'
      +   '<div class="home-action-cards-body">' + (pack.body || '') + '</div>'
      +   '<div class="home-share-summary-grid">';
    for(var i = 0; i < cards.length; i++){
      var card = cards[i];
      html += ''
        + '<a class="home-share-summary-card home-action-card" href="' + (card.href || '#') + '">'
        +   '<span class="home-situation-tag">' + (card.tag || 'GO') + '</span>'
        +   '<div class="home-share-summary-title">' + (card.title || '') + '</div>'
        +   '<ul class="home-action-card-list">';
      var points = card.points || [];
      for(var j = 0; j < points.length; j++){
        html += '<li>' + points[j] + '</li>';
      }
      html += ''
        +   '</ul>'
        +   '<span class="home-visitor-path-cta">' + (pack.button || 'Quick Check') + '</span>'
        + '</a>';
    }
    html += ''
      +   '</div>'
      + '</section>';
    return html;
  }

  function queryAllWithin(root, selector){
    if(!root || !root.querySelectorAll) return [];
    var found = root.querySelectorAll(selector);
    var list = [];
    for(var i = 0; i < found.length; i++) list.push(found[i]);
    return list;
  }

  function removeNodes(nodes, parent){
    for(var i = 0; i < nodes.length; i++){
      var node = nodes[i];
      if(!parent || node.parentNode === parent) node.remove();
    }
  }

  function replaceOrInsert(parent, selector, html, insertFn){
    if(!parent) return null;
    var current = parent.querySelector(selector);
    if(!current){
      var host = document.createElement('div');
      host.innerHTML = html;
      var fresh = host.firstElementChild;
      if(!fresh) return null;
      insertFn(fresh);
      return fresh;
    }
    var swap = document.createElement('div');
    swap.innerHTML = html;
    var next = swap.firstElementChild;
    if(!next) return current;
    current.replaceWith(next);
    return next;
  }

  function applyHomeHeroCompactCopy(panel){
    var hero = panel && panel.querySelector ? panel.querySelector('.home-hero') : null;
    if(!hero) return;
    var pack = getHomeHeroCompactPack();
    var title = hero.querySelector('.home-title');
    var desc = hero.querySelector('.home-desc');
    if(title && pack.title) title.textContent = pack.title;
    if(desc && pack.desc) desc.textContent = pack.desc;
  }

  function enhanceHomeRecentUpdatesFinal(panel){
    var items = queryAllWithin(panel, '.home-recent-update-item');
    for(var i = 0; i < items.length; i++){
      var item = items[i];
      var dateEl = item.querySelector('.home-recent-update-date');
      if(!dateEl) continue;
      var date = (dateEl.textContent || '').trim();
      var oldMeta = item.querySelector('.home-recent-update-meta');
      if(oldMeta) oldMeta.remove();
      dateEl.insertAdjacentHTML('afterend', buildHomeUpdateMetaHtml(date));
    }
  }

  function syncContinueCardFinal(panel){
    var card = panel.querySelector('.continue-card');
    if(!card) return;
    var targetIndex = getContinueLessonIndexFinal();
    card.removeAttribute('onclick');
    card.onclick = function(event){
      if(event){
        event.preventDefault();
        event.stopPropagation();
      }
      window.openContinueLessonFinal();
      return false;
    };
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.onkeydown = function(event){
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        window.openContinueLessonFinal();
      }
    };
    var sub = card.querySelector('.continue-sub');
    if(sub){
      var baseText = sub.textContent || '';
      var prefix = baseText;
      var splitAt = prefix.indexOf(' - ');
      if(splitAt === -1) splitAt = prefix.indexOf(' -> ');
      if(splitAt === -1) splitAt = prefix.indexOf(' \u2192 ');
      if(splitAt !== -1) prefix = prefix.slice(0, splitAt);
      prefix = prefix.trim();
      if(!prefix) prefix = baseText.trim();
      sub.textContent = prefix + ' - ' + getLessonTitleFinal(targetIndex);
    }
  }

  function ensureRoadmapLessonSevenIconFinal(panel){
    var cards = queryAllWithin(panel, '.roadmap-card');
    if(cards.length < 7) return;
    var card = cards[6];
    if(card && !card.querySelector('.lesson7-roadmap-icon')){
      var day = card.querySelector('.roadmap-day');
      if(day) day.insertAdjacentHTML('beforebegin', getLessonSevenRoadmapIconHtml());
    }
  }

  function ensureHomeActionCardsBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    removeNodes(queryAllWithin(panel, '.home-fast-actions-block'), hero);
    replaceOrInsert(hero, '.home-fast-actions-block', buildHomeActionCardsHtml(), function(node){
      var anchor = hero.querySelector('.home-visitor-paths-block')
        || hero.querySelector('.home-start-three-block')
        || hero.querySelector('.home-desc');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        hero.appendChild(node);
      }
    });
  }

  function expandStartFinderFinal(panel){
    var pack = getHomeFixPack();
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    finder.classList.add('is-expanded-home-menu');
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    if(title) title.textContent = pack.finderTitle;
    if(desc) desc.textContent = pack.finderDesc;
    var grid = finder.querySelector('.start-finder-grid');
    if(!grid) return;
    grid.innerHTML = '';
    var items = getHomeMenuItemsFinal();
    for(var i = 0; i < items.length; i++){
      var item = items[i];
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'start-finder-btn is-rich-item is-' + item.type + '-item';
      button.innerHTML = '<div class="sf-icon">' + item.badge + '</div><div class="start-finder-copy"><div class="start-finder-name">' + item.title + '</div><div class="start-finder-subline">' + (item.desc || '') + '</div></div>';
      button.addEventListener('click', item.action);
      grid.appendChild(button);
    }
  }

  function ensureHomeSupportBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-support-block'), finder);
    replaceOrInsert(finder, '.home-support-block', buildHomeSupportBlockHtml(), function(node){
      finder.appendChild(node);
    });
  }

  function ensureHomePdfBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-pdf-block'), finder);
    replaceOrInsert(finder, '.home-pdf-block', buildHomePdfGuidesHtml(), function(node){
      finder.appendChild(node);
    });
  }

  function ensureHomePremiumPdfBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-premium-pdf-block'), finder);
    replaceOrInsert(finder, '.home-premium-pdf-block', buildHomePremiumPdfHtml(), function(node){
      finder.appendChild(node);
    });
  }

  function ensureHomeAvailablePremiumGuidesBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-available-premium-guides'), finder);
    replaceOrInsert(finder, '.home-available-premium-guides', buildHomeAvailablePremiumGuidesHtml(), function(node){
      var premiumBlock = finder.querySelector('.home-premium-pdf-block');
      if(premiumBlock){
        premiumBlock.insertAdjacentElement('afterend', node);
      } else {
        finder.appendChild(node);
      }
    });
  }

  function syncHomeUiFinal(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    removeNodes(queryAllWithin(panel, '.home-all-guides'));
    removeNodes(queryAllWithin(panel, '.home-grid, .home-mini-grid'));
    applyHomeHeroCompactCopy(panel);
    enhanceHomeRecentUpdatesFinal(panel);
    syncContinueCardFinal(panel);
    ensureRoadmapLessonSevenIconFinal(panel);
    ensureHomeActionCardsBlockFinal(panel);
    expandStartFinderFinal(panel);
    ensureHomePdfBlockFinal(panel);
    ensureHomePremiumPdfBlockFinal(panel);
    ensureHomeAvailablePremiumGuidesBlockFinal(panel);
    ensureHomeSupportBlockFinal(panel);
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapHomeUiFinal(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeUiFinalWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeUiFinal();
      return result;
    };
    wrapped.__homeUiFinalWrapped = true;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapHomeUiFinal('renderHome');
  wrapHomeUiFinal('renderAllLessons');
  wrapHomeUiFinal('showPage');
  wrapHomeUiFinal('setLang');

  syncHomeUiFinal();
})();

