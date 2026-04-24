(function(){
  function clone(v){ return JSON.parse(JSON.stringify(v)); }
  function copyHeadingText(headingEl, text){
    if(!headingEl) return;
    var icon = headingEl.querySelector('.sec-icon');
    if(!icon){
      headingEl.textContent = text;
      return;
    }
    var iconClone = icon.cloneNode(true);
    headingEl.innerHTML = '';
    headingEl.appendChild(iconClone);
    headingEl.appendChild(document.createTextNode(' ' + text));
  }
  function buildGlossaryOverride(store){
    return Object.keys(store || {}).map(function(key){
      return [store[key].title, store[key].body];
    });
  }
  function updateFaqAndSafetyLists(lang, faqStore, safetyStore){
    if(typeof polishedSectionContent === 'undefined' || !polishedSectionContent[lang]) return;
    var page = polishedSectionContent[lang];
    page.faqItems = [];
    page.safetyItems = [];
    Object.keys(faqStore || {}).forEach(function(key){
      page.faqItems.push([faqStore[key].title, faqStore[key].body]);
    });
    Object.keys(safetyStore || {}).forEach(function(key){
      page.safetyItems.push([safetyStore[key].title, safetyStore[key].body]);
    });
  }
  function getPack(lang){
    return window.__runtimeLanguagePacks && window.__runtimeLanguagePacks[lang];
  }
  function ensureHausaMenuItem(){
    if(typeof window.langLabels === 'object' && window.langLabels){
      window.langLabels.ha = 'HA';
    } else if(typeof langLabels === 'object' && langLabels){
      langLabels.ha = 'HA';
    }

    var langMenu = document.getElementById('langMenu');
    if(!langMenu) return;

    var haItem = langMenu.querySelector('[data-lang="ha"]');
    if(!haItem){
      haItem = document.createElement('div');
      haItem.className = 'lang-item';
      haItem.dataset.lang = 'ha';
      haItem.innerHTML = '<span>🇳🇬</span><span>Hausa</span><span class="native">HA</span>';
      haItem.onclick = function(e){
        e.stopPropagation();
        if(typeof setLang === 'function') setLang('ha');
        langMenu.classList.remove('open');
      };
      langMenu.appendChild(haItem);
      return;
    }

    haItem.className = 'lang-item' + (haItem.classList.contains('active') ? ' active' : '');
    haItem.dataset.lang = 'ha';
    haItem.innerHTML = '<span>🇳🇬</span><span>Hausa</span><span class="native">HA</span>';
    if(typeof haItem.onclick !== 'function'){
      haItem.onclick = function(e){
        e.stopPropagation();
        if(typeof setLang === 'function') setLang('ha');
        langMenu.classList.remove('open');
      };
    }
  }

  window.__runtimeLanguagePacks = window.__runtimeLanguagePacks || {};
  if(typeof window.__registerRuntimeLanguagePack !== 'function'){
    window.__registerRuntimeLanguagePack = function(lang, pack){
      window.__runtimeLanguagePacks[lang] = pack;
      return pack;
    };
  }
  if(typeof window.__applyRuntimeLanguagePack !== 'function'){
    window.__applyRuntimeLanguagePack = function(lang){
      var pack = getPack(lang);
      if(!pack) return null;

      if(typeof ui !== 'undefined'){
        ui[lang] = Object.assign({}, ui[lang] || {}, clone(pack.ui || {}));
      }
      if(typeof extraUi !== 'undefined'){
        extraUi[lang] = Object.assign({}, extraUi[lang] || {}, clone(pack.extraUi || {}));
      }
      if(typeof homeContent !== 'undefined' && homeContent[lang] && pack.home && pack.home.guide){
        homeContent[lang].guide = pack.home.guide;
      }
      if(typeof updateHistory !== 'undefined' && pack.updates){
        updateHistory[lang] = clone(pack.updates);
      }
      if(typeof sourceLibraryCats !== 'undefined' && pack.sourceCats){
        sourceLibraryCats[lang] = clone(pack.sourceCats);
      }
      // NOTE: For 'ha', the runtime pack glossary is the legacy 20-item list.
      // Skip glossary overwrite for 'ha' so the unified 35-item glossary
      // applied at the end of the file remains the source of truth.
      if(lang !== 'ha'){
        if(typeof glossaryEntries !== 'undefined' && pack.glossary){
          glossaryEntries[lang] = clone(pack.glossary);
        }
        if(typeof glossaryData !== 'undefined' && pack.glossary){
          glossaryData[lang] = buildGlossaryOverride(pack.glossary);
        }
        if(typeof glossaryOverrides !== 'undefined' && pack.glossary){
          glossaryOverrides[lang] = buildGlossaryOverride(pack.glossary);
        }
        if(window.__repGlossaryEntries && pack.glossary){
          window.__repGlossaryEntries[lang] = clone(pack.glossary);
        }
      }
      if(typeof faqEntries !== 'undefined' && window.__repFaqEntries && window.__repFaqEntries[lang]){
        faqEntries[lang] = clone(window.__repFaqEntries[lang]);
      }
      if(typeof safetyEntries !== 'undefined' && window.__repSafetyEntries && window.__repSafetyEntries[lang]){
        safetyEntries[lang] = clone(window.__repSafetyEntries[lang]);
      }
      if(typeof sourceEntries !== 'undefined' && window.__repSourceEntries && window.__repSourceEntries[lang]){
        sourceEntries[lang] = clone(window.__repSourceEntries[lang]);
      }
      if(typeof sourceOverrides !== 'undefined' && typeof sourceLibrary !== 'undefined' && sourceLibrary[lang]){
        sourceOverrides[lang] = clone(sourceLibrary[lang]);
      }
      if(window.__repFaqEntries && window.__repSafetyEntries){
        updateFaqAndSafetyLists(lang, window.__repFaqEntries[lang] || {}, window.__repSafetyEntries[lang] || {});
      }
      return pack;
    };
  }

  var haPack = window.__registerRuntimeLanguagePack('ha', {
    ui:{
      'nav.updates':'Tarihin Sabuntawa',
      'nav.updatessub':'Abin da ya canza da lokacin da ya canza',
      'updates.title':'Tarihin Sabuntawa',
      'updates.desc':'Rajistar gyare-gyare da aka yi wa wannan dandali a tsawon lokaci.',
      'glossary.title':'Kamus',
      'glossary.desc':'Saukakan ma\'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.',
      'sources.pageTitle':'Laburaren Madogara',
      'sources.pageDesc':'Jerin makaloli, rahotanni, da takardun hukuma da za su taimaka ka hada darussa da misalan duniya ta gaskiya.'
    },
    extraUi:{
      'glossary.title':'Kamus',
      'glossary.desc':'Saukakan ma\'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.',
      'sources.pageTitle':'Laburaren Madogara',
      'sources.pageDesc':'Jerin makaloli, rahotanni, da takardun hukuma da za su taimaka ka hada darussa da misalan duniya ta gaskiya.'
    },
    search:{
      trigger:'Nemi darasi, kamus, FAQ, ko madogara',
      empty:'Rubuta abin da kake nema...',
      noResults:'Ba a samu sakamako ba'
    },
    visitor:{
      today:'Masu ziyara na yau',
      total:'Jimillar masu ziyara'
    },
    sourceCats:[
      { key:'scams', label:'Zamba' },
      { key:'exchanges', label:'Musaya' },
      { key:'stable', label:'Tsayayyun kudaden dijital' },
      { key:'wallet', label:'Tsaron Walat' },
      { key:'cases', label:'Misalan Gaske' },
      { key:'basics', label:'Asali' },
      { key:'defi', label:'Tsarin kudi marar tsakiya' },
      { key:'reg', label:"Ka'idoji" }
    ],
    updates:[
      {
        date:'2026-04-06',
        title:'An inganta kewaya shafi da hade sakamakon bincike',
        items:[
          'An cire sauran alamun darasi da suke komawa madadi ba tare da bukata ba',
          'An daidaita hanyoyin darussa masu alaka domin su rika amfani da sahihan taken Hausa',
          'An sa tafiyar sakamakon bincike ta zama mafi bayyane kuma mafi daidaito',
          'An kara gyaran yadda sakamakon wakilan kudin dijital ke bayyana',
          'An saukaka shiga shafukan koyo daga sakamakon bincike',
          'An fi hada sakamakon bincike kai tsaye da shafukan koyo masu dacewa'
        ]
      },
      {
        date:'2026-04-04',
        title:'An fadada tsarin binciken kudin dijital',
        items:[
          'An fayyace taswirar kudin dijital da manyan batutuwan da suke wakilta',
          'An tsara katunan takaitaccen bayani domin sakamakon binciken kudin dijital',
          'An hada Darussa, Kamus, Tambayoyi da Amsoshi, Laburaren Madogara, da Tsaro cikin sakamakon bincike',
          'An kara bayyana yadda bayanin kudin dijital mai harsuna da yawa ke aiki',
          'An karkata tsarin domin binciken kudin dijital ya kasance na ilimi maimakon na hasashen farashi'
        ]
      },
      {
        date:'2026-04-03',
        title:'An fadada Laburaren Madogara da kewaya ta gani',
        items:[
          'An kara gumaka domin kewaya ta fi bayyana',
          'An kara katunan kwatantawa',
          'An kara akwatunan takaitaccen bayani',
          'An fadada Laburaren Madogara da karin makaloli da karin rukunai',
          'An kara nuna gaskiyar tushe da tsarin koyo mai ma\'ana'
        ]
      },
      {
        date:'2026-04-02',
        title:'An kara bincike, ci gaba da koyo, da kayan taimako ga masu farawa',
        items:[
          'An kara aikin bincike',
          'An kara katin Ci gaba da Koyo',
          'An kara Taswirar Koyon Mai Farawa',
          'An kara jerin manyan kurakuran masu farawa guda 5',
          'An kara sanarwar sabunta harshe'
        ]
      },
      {
        date:'2026-04-01',
        title:'Sabbin shafuka: Fara Nan, Tambayoyi da Amsoshi, da Tsaro',
        items:[
          'An kara shafin Fara Nan',
          'An kara shafin Tambayoyi da Amsoshi',
          'An kara shafin Tsaro',
          'An gyara kwarewar shiga daga Gida domin kwamfuta da wayar hannu'
        ]
      },
      {
        date:'2026-03-31',
        title:'An inganta tsarin dandali da saukin amfani',
        items:[
          'An inganta kwarewar amfani da harsuna da yawa',
          'An kara bayyana navigation da sassan shafi',
          'An inganta amfani da Kamus da Laburaren Madogara',
          'Tsarin dandali ya zama mafi tsari da saukin bi'
        ]
      },
      {
        date:'2026-03-30',
        title:'An gyara tafiyar koyon masu farawa',
        items:[
          'An inganta tsarin koyo da aka gina don sabbin masu amfani',
          'An sake tsara darussa domin su fi saukin fahimta',
          'An kara tsari mai saukin bi ga mai farawa',
          'An kara fayyace alkiblar ilimi ga masu amfani da yawa'
        ]
      },
      {
        date:'2026-03-29',
        title:'Kaddamarwar farko',
        items:[
          'An fara Crypto Academy',
          'An gina babban tsarin ilimi mai harsuna da yawa',
          'An kafa ainihin tafiyar darussa',
          'An shirya tsarin farko na Fara, Darussa, Kamus, da Laburaren Madogara'
        ]
      }
    ],
    glossary:{
      blockchain:{title:'Sarkar bayanai', body:'Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a duba rikodi ba tare da dogaro da kamfani guda ba.'},
      mining:{title:'Hakowa', body:'Hanyar da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kuma kara sabon tubali.'},
      wallet:{title:'Walat', body:'Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital.'},
      smartContract:{title:'Kwangilar smart', body:'Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika.'},
      gasFee:{title:'Kudin gas', body:'Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai.'},
      layer1:{title:'Mataki na 1', body:'Asalin sarkar bayanai ce da ke da nasa dokoki, tsaro, da tarihin muamala.'},
      tps:{title:'Muamala a sakan daya', body:'Ma\'auni ne da ke nuna yawan muamalar da hanyar sadarwa za ta iya sarrafawa a sakan daya.'},
      validator:{title:'Mai tabbatarwa', body:'Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai.'},
      remittance:{title:'Tura kudi', body:'Aika kudi daga wuri ko kasa guda zuwa wata, yawanci don iyali ko kasuwanci.'},
      centralization:{title:'Tsakaitawa', body:'Yanayi ne da iko ko yanke hukunci yake taruwa a hannun bangare kadan maimakon ya bazu sosai.'},
      exchange:{title:'Musaya', body:'Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital.'},
      token:{title:'Tokan', body:'Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari.'},
      stablecoin:{title:'Tsayayyen kudin dijital', body:'Tokan da aka tsara ya rike kimar da ta fi kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat.'},
      peg:{title:'Daidaitacciyar alaka', body:'Alakar kimar da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka.'},
      liquidity:{title:'Saukakiyar musaya', body:'Yadda saukin saye ko sayar da kadara yake ba tare da canza farashinta sosai ba.'},
      defi:{title:'Tsarin kudi marar tsakiya', body:'Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba.'},
      lending:{title:'Lamuni', body:'Bada damar a aro kadara, yawanci tare da jingina ko biyan ruwa.'},
      flashLoan:{title:'Lamunin take', body:'Rance ne da ake aro kuma a biya shi gaba daya a cikin muamala guda a kan sarkar bayanai.'},
      nft:{title:'NFT', body:'Tokan ne na musamman da ke wakiltar mallaka, asali, ko damar shiga ga wani abu na dijital ko na zahiri.'},
      mint:{title:'Fitarwa', body:'Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai.'}
    },
    home:{
      guide:'Idan kai sabo ne kwata-kwata, bi darussan a jere. Kowane shafi an rubuta shi da harshen da ya saukaka, tare da misalai, kurakurai na yau da kullum, wuraren dubawa, da madogarori.',
      continue:{
        title:'Ci gaba da koyo',
        subtitle:'Dawo ka ci gaba daga inda ka tsaya'
      },
      roadmap:{
        heading:'Taswirar Koyon Mai Farawa',
        days:['Rana ta 1','Rana ta 2','Rana ta 3','Rana ta 4','Rana ta 5'],
        labels:['Sarkar bayanai','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na tokan','Darussan Duniya ta Gaskiya']
      },
      mistakes:{
        heading:'Manyan Kurakuran Masu Farawa 5',
        items:[
          ['Raba kalmomin dawo da walat','Duk wanda ya ga kalmomin dawo da walat dinka zai iya kwace ikon shiga walat din.'],
          ['Canja wuri zuwa hanyar sadarwa mara dacewa','Ko adireshin ya yi daidai, aikawa ta hanyar sadarwa mara dacewa na iya jawo asara ta dindindin.'],
          ['Latsa mahadin bogi ko damfarar kama','Shafukan damfara sukan yi kama da na gaske sosai. Kullum ka duba adireshin yanar gizo sosai.'],
          ['Tsallake gwajin canja wuri','Karamin gwaji kadai na iya hana kuskure mai tsada.'],
          ['Rikita dandalin musaya da walat','Asusun dandalin musaya ba iri daya ba ne da mallakar walat da makullanka kanka.']
        ]
      },
      sourceWhyLabel:'Dalilin muhimmancinsa'
    }
  });

  if(haPack && Array.isArray(haPack.updates)){
    haPack.updates = haPack.updates.filter(function(entry){
      return entry.date !== '2026-04-09' && entry.date !== '2026-04-10' && entry.date !== '2026-04-11' && entry.date !== '2026-04-12';
    });
    if(typeof updateEntry20260409 !== 'undefined' && updateEntry20260409.ha){
      haPack.updates.unshift(clone(updateEntry20260409.ha));
    }
    if(typeof updateEntry20260410 !== 'undefined' && updateEntry20260410.ha){
      haPack.updates.unshift(clone(updateEntry20260410.ha));
    }
    if(typeof updateEntry20260411 !== 'undefined' && updateEntry20260411.ha){
      haPack.updates.unshift(clone(updateEntry20260411.ha));
    }
    if(typeof updateEntry20260412 !== 'undefined' && updateEntry20260412.ha){
      haPack.updates.unshift(clone(updateEntry20260412.ha));
    }
  }

  function getContinueLabelForCurrentLang(){
    var key = 'cryptoAcademyLastVisit';
    var lastVisit = null;
    try { lastVisit = JSON.parse(localStorage.getItem(key)); } catch (err) {}
    if(lastVisit){
      if(lastVisit.type === 'lesson'){
        var lessonData = (typeof lessons !== 'undefined') ? (lessons[currentLang] || lessons.en || []) : [];
        return lessonData[lastVisit.index] ? lessonData[lastVisit.index].title : ('Lesson ' + (lastVisit.index + 1));
      }
      if(typeof t === 'function') return t('nav.' + lastVisit.name) || lastVisit.name;
      return lastVisit.name;
    }
    var firstLessons = (typeof lessons !== 'undefined') ? (lessons[currentLang] || lessons.en || []) : [];
    return firstLessons[0] ? firstLessons[0].title : 'Lesson 1';
  }

  function applyRuntimeDomPatches(){
    var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    var pack = getPack(lang);
    ensureHausaMenuItem();
    if(!pack) return;

    var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('searchResults');
    if(searchInput && pack.search && pack.search.trigger){
      searchInput.placeholder = pack.search.trigger;
    }
    if(searchResults && pack.search && pack.search.empty){
      searchResults.setAttribute('data-empty', pack.search.empty);
    }

    var visitorToday = document.getElementById('visitorTodayLabel');
    var visitorTotal = document.getElementById('visitorTotalLabel');
    if(visitorToday && pack.visitor) visitorToday.textContent = pack.visitor.today;
    if(visitorTotal && pack.visitor) visitorTotal.textContent = pack.visitor.total;

    if(lang !== 'ha' || !pack.home) return;

    var continueCard = document.querySelector('.continue-card');
    if(continueCard){
      var continueTitle = continueCard.querySelector('.continue-title');
      var continueSub = continueCard.querySelector('.continue-sub');
      if(continueTitle) continueTitle.textContent = pack.home.continue.title;
      if(continueSub) continueSub.textContent = pack.home.continue.subtitle + ' - ' + getContinueLabelForCurrentLang();
    }

    var roadmapSection = document.querySelector('.roadmap-section');
    if(roadmapSection){
      copyHeadingText(roadmapSection.querySelector('h2'), pack.home.roadmap.heading);
      roadmapSection.querySelectorAll('.roadmap-day').forEach(function(el, idx){
        if(pack.home.roadmap.days[idx]) el.textContent = pack.home.roadmap.days[idx];
      });
      roadmapSection.querySelectorAll('.roadmap-label').forEach(function(el, idx){
        if(pack.home.roadmap.labels[idx]) el.textContent = pack.home.roadmap.labels[idx];
      });
    }

    var mistakesSection = document.querySelector('.mistakes-section');
    if(mistakesSection){
      copyHeadingText(mistakesSection.querySelector('h2'), pack.home.mistakes.heading);
      mistakesSection.querySelectorAll('.mistake-summary-card').forEach(function(card, idx){
        var item = pack.home.mistakes.items[idx];
        if(!item) return;
        var title = card.querySelector('.mistake-summary-title');
        var desc = card.querySelector('.mistake-summary-desc');
        if(title) title.textContent = item[0];
        if(desc) desc.textContent = item[1];
      });
    }

    document.querySelectorAll('#sourcesPanel .src-why strong').forEach(function(el){
      el.textContent = pack.home.sourceWhyLabel + ':';
    });
  }

  window.__applyRuntimeLanguagePack('ha');
  ensureHausaMenuItem();

  if(typeof window.renderUpdateHistory === 'function' && !window.renderUpdateHistory.__runtimePackWrapped){
    var __origRenderUpdateHistory = window.renderUpdateHistory;
    var wrappedRenderUpdateHistory = function(){
      window.__applyRuntimeLanguagePack('ha');
      return __origRenderUpdateHistory();
    };
    wrappedRenderUpdateHistory.__runtimePackWrapped = true;
    window.renderUpdateHistory = wrappedRenderUpdateHistory;
  }

  if(typeof window.renderSources === 'function' && !window.renderSources.__runtimePackWrapped){
    var __origRenderSources = window.renderSources;
    var wrappedRenderSources = function(){
      window.__applyRuntimeLanguagePack('ha');
      var html = __origRenderSources();
      var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
      var pack = getPack(lang);
      if(pack && pack.home && pack.home.sourceWhyLabel){
        html = html.replace(/Why this matters:/g, pack.home.sourceWhyLabel + ':');
      }
      return html;
    };
    wrappedRenderSources.__runtimePackWrapped = true;
    window.renderSources = wrappedRenderSources;
  }

  if(typeof window.renderAllLessons === 'function' && !window.renderAllLessons.__runtimePackWrapped){
    var __origRenderAllLessons = window.renderAllLessons;
    var wrappedRenderAllLessons = function(){
      window.__applyRuntimeLanguagePack('ha');
      __origRenderAllLessons();
      applyRuntimeDomPatches();
      if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
        var updatesPanel = document.getElementById('updatesPanel');
        if(updatesPanel && typeof window.renderUpdateHistory === 'function'){
          updatesPanel.innerHTML = window.renderUpdateHistory();
        }
      }
    };
    wrappedRenderAllLessons.__runtimePackWrapped = true;
    window.renderAllLessons = wrappedRenderAllLessons;
  }

  if(typeof window.showPage === 'function' && !window.showPage.__runtimePackWrapped){
    var __origShowPage = window.showPage;
    var wrappedShowPage = function(page){
      window.__applyRuntimeLanguagePack('ha');
      __origShowPage(page);
      applyRuntimeDomPatches();
      if(typeof currentLang !== 'undefined' && currentLang === 'ha' && page === 'updates'){
        var panel = document.getElementById('updatesPanel');
        if(panel && typeof window.renderUpdateHistory === 'function'){
          panel.innerHTML = window.renderUpdateHistory();
        }
      }
    };
    wrappedShowPage.__runtimePackWrapped = true;
    window.showPage = wrappedShowPage;
  }

  function restoreCurrentViewAfterRuntimePack(){
    var targetPage = (typeof currentPage !== 'undefined' && currentPage) ? currentPage : 'home';
    var targetLesson = (typeof currentLesson === 'number' && isFinite(currentLesson)) ? currentLesson : 0;
    var restore = function(){
      if(/^lesson\d+$/.test(targetPage) && typeof window.showLesson === 'function'){
        window.showLesson(targetLesson);
      }else if(typeof window.showPage === 'function'){
        window.showPage(targetPage || 'home');
      }
    };
    if(typeof requestAnimationFrame === 'function'){
      requestAnimationFrame(function(){
        restore();
        requestAnimationFrame(restore);
      });
    }else{
      restore();
      setTimeout(restore, 0);
    }
  }

  if(typeof window.setLang === 'function' && !window.setLang.__runtimePackWrapped){
    var __origSetLang = window.setLang;
    var wrappedSetLang = function(lang){
      var targetPage = (typeof currentPage !== 'undefined' && currentPage) ? currentPage : 'home';
      var targetLesson = (typeof currentLesson === 'number' && isFinite(currentLesson)) ? currentLesson : 0;
      window.__applyRuntimeLanguagePack('ha');
      __origSetLang(lang);
      window.__applyRuntimeLanguagePack('ha');
      applyRuntimeDomPatches();
      currentPage = targetPage;
      currentLesson = targetLesson;
      restoreCurrentViewAfterRuntimePack();
    };
    wrappedSetLang.__runtimePackWrapped = true;
    window.setLang = wrappedSetLang;
  }

  applyRuntimeDomPatches();

  if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
    if(typeof renderAllLessons === 'function') renderAllLessons();
    restoreCurrentViewAfterRuntimePack();
  }
})();