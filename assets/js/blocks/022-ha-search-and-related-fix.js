(function(){
  function clone(v){ return JSON.parse(JSON.stringify(v)); }
  function ensurePair(list, pair){
    if(!Array.isArray(list) || !Array.isArray(pair)) return;
    if(!list.some(function(entry){ return Array.isArray(entry) && entry[0] === pair[0]; })){
      list.push(pair);
    }
  }
  function textValue(value){
    return String(value || '');
  }
  function lowerText(value){
    return textValue(value).toLowerCase();
  }

  var HA_SEARCH_TEXT = 'Nemi darasi, kamus, tambayoyi da amsoshi, ko madogara';
  var HA_EMPTY_TEXT = 'Rubuta abin da kake nema...';
  var HA_NO_RESULTS_TEXT = 'Ba a samu sakamako ba';
  var haLessonTitles = ['Sarkar bayanai','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na tokan','Darussan Duniya ta Gaskiya'];

  var haGlossaryStore = window.__repGlossaryEntries && window.__repGlossaryEntries.ha;
  var haFaqStore = window.__repFaqEntries && window.__repFaqEntries.ha;
  var haSafetyStore = window.__repSafetyEntries && window.__repSafetyEntries.ha;
  var haRepSourceStore = window.__repSourceEntries && window.__repSourceEntries.ha;

  if(typeof glossaryEntries !== 'undefined' && haGlossaryStore){
    glossaryEntries.ha = clone(haGlossaryStore);
  }
  if(typeof faqEntries !== 'undefined' && haFaqStore){
    faqEntries.ha = clone(haFaqStore);
  }
  if(typeof safetyEntries !== 'undefined' && haSafetyStore){
    safetyEntries.ha = clone(haSafetyStore);
  }
  if(typeof sourceEntries !== 'undefined' && haRepSourceStore){
    sourceEntries.ha = clone(haRepSourceStore);
  }

  if(typeof glossaryOverrides !== 'undefined' && haGlossaryStore){
    glossaryOverrides.ha = Object.keys(haGlossaryStore).map(function(key){
      return [haGlossaryStore[key].title, haGlossaryStore[key].body];
    });
  }

  if(typeof sourceLibraryCats !== 'undefined'){
    sourceLibraryCats.ha = [
      { key:'scams', label:'Zamba' },
      { key:'exchanges', label:'Musaya' },
      { key:'stable', label:'Tsayayyun kudaden dijital' },
      { key:'wallet', label:'Tsaron Walat' },
      { key:'cases', label:'Misalan Gaske' },
      { key:'basics', label:'Asali' },
      { key:'defi', label:'Tsarin kudi marar tsakiya' },
      { key:'reg', label:"Ka'idoji" }
    ];
  }

  if(typeof sourceOverrides !== 'undefined' && typeof sourceLibrary !== 'undefined' && sourceLibrary.ha){
    sourceOverrides.ha = clone(sourceLibrary.ha);
  }

  if(typeof polishedSectionContent !== 'undefined' && polishedSectionContent.ha){
    polishedSectionContent.ha.faqItems = polishedSectionContent.ha.faqItems || [];
    polishedSectionContent.ha.safetyItems = polishedSectionContent.ha.safetyItems || [];
    if(haFaqStore){
      Object.keys(haFaqStore).forEach(function(key){
        ensurePair(polishedSectionContent.ha.faqItems, [haFaqStore[key].title, haFaqStore[key].body]);
      });
    }
    if(haSafetyStore){
      Object.keys(haSafetyStore).forEach(function(key){
        ensurePair(polishedSectionContent.ha.safetyItems, [haSafetyStore[key].title, haSafetyStore[key].body]);
      });
    }
  }

  if(typeof repCoinMappings !== 'undefined' && haFaqStore && haSafetyStore && haRepSourceStore){
    repCoinMappings.ha = {
      bitcoin:  { relatedFaq:[haFaqStore.bitcoin.title],                    relatedSources:[haRepSourceStore.bitcoinWhitepaper[2]], relatedSafety:[haSafetyStore.seed.title] },
      ethereum: { relatedFaq:[haFaqStore.ethereum.title, haFaqStore.gas.title], relatedSources:[haRepSourceStore.ethereumOrg[2]],       relatedSafety:[haSafetyStore.networkMismatch.title] },
      solana:   { relatedFaq:[haFaqStore.solana.title, haFaqStore.networkMatter.title], relatedSources:[haRepSourceStore.solanaDocs[2]], relatedSafety:[haSafetyStore.networkRisk.title] },
      xrp:      { relatedFaq:[haFaqStore.xrp.title, haFaqStore.payments.title], relatedSources:[haRepSourceStore.rippleSite[2]],        relatedSafety:[haSafetyStore.regulatory.title] },
      bnb:      { relatedFaq:[haFaqStore.bnb.title, haFaqStore.utilityToken.title], relatedSources:[haRepSourceStore.bnbDocs[2]],        relatedSafety:[haSafetyStore.exchange.title] },
      usdt:     { relatedFaq:[haFaqStore.usdt.title, haFaqStore.stableRisk.title], relatedSources:[haRepSourceStore.tetherTransparency[2]], relatedSafety:[haSafetyStore.stableDepeg.title] },
      aave:     { relatedFaq:[haFaqStore.aave.title, haFaqStore.defiBank.title], relatedSources:[haRepSourceStore.aaveDocs[2]],          relatedSafety:[haSafetyStore.defiSmart.title] },
      nft:      { relatedFaq:[haFaqStore.nft.title, haFaqStore.nftPictures.title], relatedSources:[haRepSourceStore.openSeaLearn[2]],    relatedSafety:[haSafetyStore.nftScam.title] }
    };
  }

  if(typeof coinEducation !== 'undefined' && coinEducation.ha && typeof coinMappings !== 'undefined' && haGlossaryStore && haFaqStore && haSafetyStore && haRepSourceStore){
    Object.keys(coinMappings).forEach(function(coinKey){
      var coin = coinEducation.ha[coinKey];
      var map = coinMappings[coinKey];
      if(!coin || !map) return;
      coin.relatedLessons = (map.relatedLessons || []).map(function(idx){
        return haLessonTitles[idx] || haLessonTitles[0];
      });
      coin.relatedGlossary = (map.relatedGlossary || []).map(function(id){
        return haGlossaryStore[id] ? haGlossaryStore[id].title : id;
      });
      coin.relatedFaq = (map.relatedFaq || []).map(function(id){
        return haFaqStore[id] ? haFaqStore[id].title : id;
      });
      coin.relatedSources = (map.relatedSources || []).map(function(id){
        return haRepSourceStore[id] ? haRepSourceStore[id][2] : id;
      });
      coin.relatedSafety = (map.relatedSafety || []).map(function(id){
        return haSafetyStore[id] ? haSafetyStore[id].title : id;
      });
    });
  }

  window.getSearchNoResultsText = function(){
    return (typeof currentLang !== 'undefined' && currentLang === 'ha') ? HA_NO_RESULTS_TEXT : 'No results found';
  };

  window.getSearchEmptyText = function(){
    return (typeof currentLang !== 'undefined' && currentLang === 'ha') ? HA_EMPTY_TEXT : 'Type to search...';
  };

  window.getSearchableItems = function(){
    var items = [];
    var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';

    var lessonData = typeof lessons !== 'undefined' ? (lessons[lang] || lessons.en || []) : [];
    for(var i = 0; i < lessonData.length; i++){
      items.push({
        type:'lesson',
        badge:'L'+(i+1),
        title:textValue(lessonData[i].title),
        desc:lessonData[i].intro ? textValue(lessonData[i].intro).substring(0, 120) + '...' : '',
        action:function(idx){ return function(){ if(typeof showLesson === 'function') showLesson(idx); if(typeof closeSearch === 'function') closeSearch(); }; }(i)
      });
    }

    var gItems = typeof getGlossaryItems === 'function' ? getGlossaryItems() : [];
    for(var g = 0; g < gItems.length; g++){
      var term = textValue(gItems[g][0]);
      var body = typeof gItems[g][1] === 'function'
        ? gItems[g][1](typeof t === 'function' ? t : function(v){ return v; })
        : textValue(gItems[g][1]);
      items.push({
        type:'glossary',
        badge:'G',
        title:term,
        desc:body,
        action:function(){ if(typeof showPage === 'function') showPage('glossary'); if(typeof closeSearch === 'function') closeSearch(); }
      });
    }

    var faqData = typeof polishedSectionContent !== 'undefined' ? (polishedSectionContent[lang] || polishedSectionContent.en) : null;
    if(faqData && Array.isArray(faqData.faqItems)){
      for(var f = 0; f < faqData.faqItems.length; f++){
        items.push({
          type:'faq',
          badge:'F',
          title:textValue(faqData.faqItems[f][0]),
          desc:textValue(faqData.faqItems[f][1]),
          action:function(){ if(typeof showPage === 'function') showPage('faq'); if(typeof closeSearch === 'function') closeSearch(); }
        });
      }
    }

    var srcItems = typeof getSourceItems === 'function' ? getSourceItems() : [];
    for(var s = 0; s < srcItems.length; s++){
      var title = textValue(srcItems[s][2] || srcItems[s][1]);
      var descParts = [textValue(srcItems[s][3]), textValue(srcItems[s][1])].filter(Boolean);
      items.push({
        type:'source',
        badge:'S',
        title:title,
        desc:descParts.join(' - '),
        action:function(){ if(typeof showPage === 'function') showPage('sources'); if(typeof closeSearch === 'function') closeSearch(); }
      });
    }

    return items;
  };

  function refreshSearchUi(){
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var trigger = document.querySelector('.search-trigger');
    var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';

    if(input && lang === 'ha'){
      input.placeholder = HA_SEARCH_TEXT;
    }
    if(results){
      results.setAttribute('data-empty', lang === 'ha' ? HA_EMPTY_TEXT : 'Type to search...');
    }
    if(trigger && lang === 'ha'){
      trigger.setAttribute('aria-label', HA_SEARCH_TEXT);
      trigger.setAttribute('title', HA_SEARCH_TEXT);
    }
  }

  function legacyHausaRenderPatchedSearchResults(query){
    return;
  }
  window.__legacyHausaRenderPatchedSearchResults = legacyHausaRenderPatchedSearchResults;

  function bindPatchedSearchInput(){
    window.__legacyHausaSearchPatchDisabled = true;
    return;
  }

  var __haOpenSearch = window.openSearch;
  if(false && typeof __haOpenSearch === 'function' && !__haOpenSearch.__haSearchWrapped){
    var wrappedOpenSearch = function(){
      __haOpenSearch();
      bindPatchedSearchInput();
      refreshSearchUi();
    };
    wrappedOpenSearch.__haSearchWrapped = true;
    window.openSearch = wrappedOpenSearch;
  }

  var __haSetLang = window.setLang;
  if(false && typeof __haSetLang === 'function' && !__haSetLang.__haSearchWrapped){
    var wrappedSetLang = function(lang){
      __haSetLang(lang);
      bindPatchedSearchInput();
      refreshSearchUi();
    };
    wrappedSetLang.__haSearchWrapped = true;
    window.setLang = wrappedSetLang;
  }

  window.__legacyHausaSearchPatchDisabled = true;
  refreshSearchUi();

  if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
    if(typeof renderAllLessons === 'function') renderAllLessons();
    if(typeof showPage === 'function' && typeof currentPage !== 'undefined') showPage(currentPage || 'home');
  }
})();