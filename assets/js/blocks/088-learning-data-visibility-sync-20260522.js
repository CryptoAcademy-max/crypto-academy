(function(){
  if(typeof window === 'undefined' || window.__learningDataVisibilitySync20260522) return;
  window.__learningDataVisibilitySync20260522 = true;

  var EXPECTED_TERM_IDS = [
    'withdrawal','deposit','transaction-fee','confirmation-time','counterparty-risk',
    'dapp','wallet-connect','liquidity-pool','revoke-approval','holder-distribution',
    'community-activity','wrapped-token','bridge-risk','finality','cross-chain-transfer',
    'network-compatibility','whitepaper','documentation','impersonation','verification-routine'
  ];
  var EXPECTED_SOURCE_IDS = [
    'exchange-wallet-checklist','network-fee-guide','stablecoin-risk-notes',
    'defi-approval-checklist','project-review-checklist','bridge-safety-guide',
    'verification-routine-guide'
  ];
  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var SECTION_COPY = {
    en:{title:'Intermediate Resources', desc:'Lesson 8-14 resources for comparison, verification, and risk checks.', label:'Intermediate resource', terms:'Key terms', open:'Open resources'},
    ko:{title:'중급자 자료', desc:'8~14강에서 비교, 검증, 위험 확인에 쓰는 자료입니다.', label:'중급자 자료', terms:'핵심 용어', open:'자료 열기'},
    th:{title:'แหล่งข้อมูลระดับกลาง', desc:'แหล่งข้อมูลบทเรียน 8-14 สำหรับการเปรียบเทียบ ตรวจสอบ และเช็กความเสี่ยง', label:'แหล่งข้อมูลระดับกลาง', terms:'คำสำคัญ', open:'เปิดแหล่งข้อมูล'},
    id:{title:'Sumber menengah', desc:'Sumber Pelajaran 8-14 untuk membandingkan, verifikasi, dan cek risiko.', label:'Sumber menengah', terms:'Istilah kunci', open:'Buka sumber'},
    pt:{title:'Recursos intermediários', desc:'Recursos das lições 8-14 para comparação, verificação e checagem de risco.', label:'Recurso intermediário', terms:'Termos-chave', open:'Abrir recursos'},
    br:{title:'Recursos intermediários', desc:'Recursos das aulas 8-14 para comparação, verificação e checagem de risco.', label:'Recurso intermediário', terms:'Termos-chave', open:'Abrir recursos'},
    tr:{title:'Orta seviye kaynaklar', desc:'Ders 8-14 için karşılaştırma, doğrulama ve risk kontrol kaynakları.', label:'Orta seviye kaynak', terms:'Temel terimler', open:'Kaynakları aç'},
    es:{title:'Recursos intermedios', desc:'Recursos de las lecciones 8-14 para comparar, verificar y revisar riesgos.', label:'Recurso intermedio', terms:'Términos clave', open:'Abrir recursos'},
    ar:{title:'مصادر المستوى المتوسط', desc:'مصادر الدروس 8-14 للمقارنة والتحقق وفحص المخاطر.', label:'مصدر متوسط', terms:'مصطلحات أساسية', open:'فتح المصادر'},
    vi:{title:'Tài liệu trung cấp', desc:'Tài liệu Bài 8-14 để so sánh, xác minh và kiểm tra rủi ro.', label:'Tài liệu trung cấp', terms:'Thuật ngữ chính', open:'Mở tài liệu'},
    ha:{title:'Albarkatun matsakaici', desc:'Albarkatun Darasi 8-14 don kwatanta, tabbatarwa da duba hadari.', label:'Albarkatun matsakaici', terms:'Muhimman kalmomi', open:'Bude albarkatu'}
  };
  var refreshingGlossary = false;
  var refreshingSources = false;

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }
  function normalize(value){
    var text = String(value || '').toLowerCase();
    try{
      if(text.normalize){
        text = /[\uac00-\ud7a3\u3130-\u318f]/.test(text)
          ? text.normalize('NFC')
          : text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      }
    }catch(error){}
    return text.replace(/[^a-z0-9\uac00-\ud7a3\u3130-\u318f\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }
  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLangKey(){
    var lang = 'en';
    try{ lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en'; }
    catch(error){ lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en'; }
    return langKey(lang);
  }
  function prefix(){
    return (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
  }
  function glossaryItems(){
    try{ return typeof getGlossaryItems === 'function' ? (getGlossaryItems() || []) : []; }catch(error){ return []; }
  }
  function termRows(){
    return (window.__searchLearningRealSyncTermRows || []).filter(function(row){
      return row && EXPECTED_TERM_IDS.indexOf(row.id) !== -1;
    });
  }
  function sourceRows(){
    var rows = window.__searchLearningRealSyncSourceRows || window.__intermediateSourceRows || [];
    return rows.filter(function(row){ return row && EXPECTED_SOURCE_IDS.indexOf(row.id) !== -1; });
  }
  function sourceItems(){
    try{ return typeof getSourceItems === 'function' ? (getSourceItems() || []) : []; }catch(error){ return []; }
  }
  function metaId(item){
    return item && item[2] && typeof item[2] === 'object' ? item[2].id : '';
  }
  function ensureTermRowsInStores(){
    if(!termRows().length) return;
    window.__UNIFIED_GLOSSARY = window.__UNIFIED_GLOSSARY || {};
    LANGS.forEach(function(lang){
      var base = window.__UNIFIED_GLOSSARY[lang]
        || (typeof glossaryOverrides !== 'undefined' && glossaryOverrides[lang])
        || (typeof glossaryData !== 'undefined' && glossaryData[lang])
        || window.__UNIFIED_GLOSSARY.en
        || [];
      var list = base.slice ? base.slice() : [];
      var seen = {};
      list.forEach(function(item){
        if(metaId(item)) seen['id:' + metaId(item)] = true;
        seen['term:' + normalize(item && item[0])] = true;
      });
      termRows().forEach(function(row){
        var term = (row.terms && (row.terms[lang] || row.terms.en)) || row.id;
        var def = (row.defs && (row.defs[lang] || row.defs.en)) || '';
        var idKey = 'id:' + row.id;
        var termKey = 'term:' + normalize(term);
        if(seen[idKey] || seen[termKey]) return;
        list.push([term, def, {id:row.id, category:row.category || 'intermediate', level:'intermediate', relatedLessons:[row.lesson]}]);
        seen[idKey] = true;
        seen[termKey] = true;
      });
      window.__UNIFIED_GLOSSARY[lang] = list;
      if(typeof glossaryData !== 'undefined') glossaryData[lang] = list.map(function(item){ return [item[0], item[1], item[2]]; });
      if(typeof glossaryOverrides !== 'undefined') glossaryOverrides[lang] = list.map(function(item){ return [item[0], item[1], item[2]]; });
    });
  }
  function sourceArray(row, lang){
    var title = (row.titles && (row.titles[lang] || row.titles.en)) || row.id;
    var desc = (row.descs && (row.descs[lang] || row.descs.en)) || '';
    return ['intermediate', 'Coin ProofPath', title, desc, prefix() + 'sources/', 'Lesson ' + row.lesson, (row.terms || []).join(', ')];
  }
  function ensureSourceRowsInStores(){
    if(!sourceRows().length || typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(lang){
      if(!sourceLibrary[lang]) sourceLibrary[lang] = (sourceLibrary.en || []).slice ? (sourceLibrary.en || []).slice() : [];
      if(typeof sourceLibraryCats !== 'undefined'){
        if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = (sourceLibraryCats.en || []).slice ? (sourceLibraryCats.en || []).slice() : [];
        var copy = SECTION_COPY[lang] || SECTION_COPY.en;
        if(!sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate'; })){
          sourceLibraryCats[lang].push({key:'intermediate', label:copy.title});
        }
      }
      var rows = sourceRows();
      rows.forEach(function(row){
        var item = sourceArray(row, lang);
        var key = normalize(item[2]);
        var exists = sourceLibrary[lang].some(function(existing){ return normalize((existing && (existing[2] || existing[1])) || '') === key; });
        if(!exists) sourceLibrary[lang].push(item);
        if(typeof sourceOverrides !== 'undefined'){
          if(!sourceOverrides[lang]) sourceOverrides[lang] = [];
          var overrideExists = sourceOverrides[lang].some(function(existing){ return normalize((existing && (existing[2] || existing[1])) || '') === key; });
          if(!overrideExists) sourceOverrides[lang].push(item.slice());
        }
      });
    });
  }
  function ensureLearningDataStores(){
    ensureTermRowsInStores();
    ensureSourceRowsInStores();
  }
  function termById(id){
    ensureTermRowsInStores();
    var found = null;
    glossaryItems().some(function(item){
      if(metaId(item) === id){ found = item; return true; }
      return false;
    });
    return found;
  }
  function missingGlossaryDataIds(){
    return EXPECTED_TERM_IDS.filter(function(id){ return !termById(id); });
  }
  function refreshGlossaryPanel(force){
    ensureTermRowsInStores();
    var panel = document.getElementById('glossaryPanel');
    if(!panel || typeof renderGlossary !== 'function' || refreshingGlossary) return;
    var text = panel.textContent || '';
    var missing = EXPECTED_TERM_IDS.filter(function(id){
      var item = termById(id);
      return item && text.indexOf(String(item[0] || '')) === -1;
    });
    if(force || missing.length){
      refreshingGlossary = true;
      try{ panel.innerHTML = renderGlossary(); }
      finally{ refreshingGlossary = false; }
    }
  }
  function sourceExists(row){
    ensureSourceRowsInStores();
    var lang = currentLangKey();
    var keys = [
      normalize(row.id),
      normalize(row.titles && (row.titles[lang] || '')),
      normalize(row.titles && (row.titles.en || ''))
    ].filter(Boolean);
    return sourceItems().some(function(item){
      var title = normalize((item && (item[2] || item[1])) || '');
      return keys.indexOf(title) !== -1;
    });
  }
  function renderSourceSection(){
    var lang = currentLangKey();
    var copy = SECTION_COPY[lang] || SECTION_COPY.en;
    var rows = sourceRows();
    var cards = rows.map(function(row){
      var title = (row.titles && (row.titles[lang] || row.titles.en)) || row.id;
      var desc = (row.descs && (row.descs[lang] || row.descs.en)) || '';
      var lesson = row.lesson ? 'Lesson ' + row.lesson : '';
      return '<a class="source-library-item lesson-guide-source-card" href="' + esc(prefix() + 'sources/') + '" data-learning-visible-source="' + esc(row.id) + '">'
        + '<div class="source-library-meta">' + esc(copy.label) + '</div>'
        + '<div class="src-publisher-row"><span class="src-publisher">&#9654; Coin ProofPath</span>' + (lesson ? '<span class="src-section-tag">' + esc(lesson) + '</span>' : '') + '</div>'
        + '<h3>' + esc(title) + '</h3>'
        + '<p>' + esc(desc) + '</p>'
        + '<div class="src-why"><strong>' + esc(copy.terms) + ':</strong> ' + esc((row.terms || []).join(', ')) + '</div>'
        + '<span class="src-link">' + esc(copy.open) + '</span>'
        + '</a>';
    }).join('');
    return '<section class="src-section-block is-action-track" data-learning-visible-sources>'
      + '<div class="src-section-heading">' + esc(copy.title) + '<span class="src-section-count">' + rows.length + '</span></div>'
      + '<p class="src-group-desc">' + esc(copy.desc) + '</p>'
      + '<div class="source-library-grid">' + cards + '</div>'
      + '</section>';
  }
  function ensureIntermediateSourceSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel || !sourceRows().length) return;
    Array.prototype.forEach.call(panel.querySelectorAll('[data-learning-visible-sources],[data-intermediate-learning-sources],[data-intermediate-sources-real]'), function(node){
      if(node && node.parentNode) node.parentNode.removeChild(node);
    });
    var html = renderSourceSection();
    var layout = panel.querySelector('.src-tier-layout');
    if(layout) layout.insertAdjacentHTML('afterend', html);
    else panel.insertAdjacentHTML('beforeend', html);
    installIntermediateSourceChip(panel);
  }
  function installIntermediateSourceChip(panel){
    var cats = panel.querySelector('.source-cats');
    if(!cats || cats.querySelector('[data-learning-source-chip]')) return;
    var copy = SECTION_COPY[currentLangKey()] || SECTION_COPY.en;
    var chip = document.createElement('div');
    chip.className = 'source-cat';
    chip.setAttribute('data-learning-source-chip','intermediate');
    chip.textContent = copy.title + ' (' + sourceRows().length + ')';
    chip.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
      var target = panel.querySelector('[data-learning-visible-sources]');
      if(target && target.scrollIntoView) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
    cats.appendChild(chip);
  }
  function refreshSourcesPanel(force){
    ensureSourceRowsInStores();
    var panel = document.getElementById('sourcesPanel');
    if(!panel || refreshingSources) return;
    refreshingSources = true;
    try{
    if(force && typeof renderSources === 'function'){
      panel.innerHTML = renderSources();
    }
    ensureIntermediateSourceSection();
    }finally{
      refreshingSources = false;
    }
  }
  function syncLearningVisibility(){
    ensureLearningDataStores();
    refreshGlossaryPanel(false);
    refreshSourcesPanel(false);
  }
  function wrap(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__learningVisibilityWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      window.setTimeout(after, 0);
      window.setTimeout(after, 80);
      return result;
    };
    wrapped.__learningVisibilityWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderGlossary') renderGlossary = wrapped;
    }catch(error){}
  }

  wrap('renderAllLessons', syncLearningVisibility);
  wrap('setLang', syncLearningVisibility);
  wrap('showPage', syncLearningVisibility);
  wrap('renderSources', function(){ refreshSourcesPanel(false); });
  wrap('renderGlossary', function(){ refreshGlossaryPanel(false); });

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      ensureLearningDataStores();
      refreshGlossaryPanel(true);
      refreshSourcesPanel(false);
    }, {once:true});
  }else{
    ensureLearningDataStores();
    refreshGlossaryPanel(true);
    refreshSourcesPanel(false);
  }
  window.setTimeout(syncLearningVisibility, 0);
  window.setTimeout(syncLearningVisibility, 150);

  window.debugLearningDataVisibility = function(){
    ensureLearningDataStores();
    var lang = currentLangKey();
    var glossary = glossaryItems();
    var sources = sourceItems();
    var glossaryPanel = document.getElementById('glossaryPanel');
    var sourcePanel = document.getElementById('sourcesPanel');
    var glossaryText = glossaryPanel ? glossaryPanel.textContent : '';
    var sourceText = sourcePanel ? sourcePanel.textContent : '';
    var displayedTerms = EXPECTED_TERM_IDS.map(function(id){
      var item = termById(id);
      return {id:id, term:item ? item[0] : null, inData:!!item, inUI:!!(item && glossaryText.indexOf(String(item[0] || '')) !== -1)};
    });
    var displayedSources = sourceRows().map(function(row){
      var title = (row.titles && (row.titles[lang] || row.titles.en)) || row.id;
      return {id:row.id, title:title, inData:sourceExists(row), inUI:sourceText.indexOf(title) !== -1};
    });
    var lessonCoverage = {};
    sourceRows().forEach(function(row){ lessonCoverage[row.lesson] = {source:row.id, terms:row.terms || []}; });
    return {
      currentLocale: lang,
      glossaryTotalCount: glossary.length,
      intermediateGlossaryCount: displayedTerms.filter(function(item){ return item.inData; }).length,
      missingGlossaryTermsFromUI: displayedTerms.filter(function(item){ return !item.inUI; }),
      sourceTotalCount: sources.length,
      intermediateSourceCount: displayedSources.length,
      missingSourceResourcesFromUI: displayedSources.filter(function(item){ return !item.inUI; }),
      lessonRelatedResourcesCoverage: lessonCoverage,
      searchIndexCoverage: {
        glossaryTermsInSearchSource: displayedTerms.filter(function(item){ return item.inData; }).length,
        sourcesInSearchSource: displayedSources.filter(function(item){ return item.inData; }).length
      }
    };
  };
})();
