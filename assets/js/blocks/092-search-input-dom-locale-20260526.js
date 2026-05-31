(function(){
  if(typeof window === 'undefined' || window.__searchInputDomLocale20260526) return;
  window.__searchInputDomLocale20260526 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var COPY = {
    en:{placeholder:'Type to search', ariaLabel:'Type to search', buttonLabel:'Search', openLabel:'Open search', closeLabel:'Close search', startTyping:'Type to search', noResults:'No results found', tryAnother:'Try another keyword', suggested:'Suggested results', clear:'Clear search', results:'Search results'},
    ko:{placeholder:'검색어를 입력하세요', ariaLabel:'검색어를 입력하세요', buttonLabel:'검색', openLabel:'검색 열기', closeLabel:'검색 닫기', startTyping:'검색어를 입력하세요', noResults:'검색 결과가 없습니다', tryAnother:'다른 검색어를 입력해 보세요', suggested:'추천 결과', clear:'검색 지우기', results:'검색 결과'},
    th:{placeholder:'พิมพ์เพื่อค้นหา', ariaLabel:'ค้นหา Coin ProofPath', buttonLabel:'ค้นหา', openLabel:'เปิดการค้นหา', closeLabel:'ปิดการค้นหา', startTyping:'พิมพ์เพื่อค้นหา', noResults:'ไม่พบผลลัพธ์', tryAnother:'ลองใช้คำค้นอื่น', suggested:'ผลลัพธ์แนะนำ', clear:'ล้างการค้นหา', results:'ผลการค้นหา'},
    id:{placeholder:'Ketik untuk mencari', ariaLabel:'Cari Coin ProofPath', buttonLabel:'Cari', openLabel:'Buka pencarian', closeLabel:'Tutup pencarian', startTyping:'Ketik untuk mencari', noResults:'Tidak ada hasil', tryAnother:'Coba kata kunci lain', suggested:'Hasil disarankan', clear:'Hapus pencarian', results:'Hasil pencarian'},
    pt:{placeholder:'Digite para pesquisar', ariaLabel:'Pesquisar Coin ProofPath', buttonLabel:'Pesquisar', openLabel:'Abrir pesquisa', closeLabel:'Fechar pesquisa', startTyping:'Digite para pesquisar', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave', suggested:'Resultados sugeridos', clear:'Limpar pesquisa', results:'Resultados da pesquisa'},
    br:{placeholder:'Digite para pesquisar', ariaLabel:'Pesquisar no Coin ProofPath', buttonLabel:'Pesquisar', openLabel:'Abrir busca', closeLabel:'Fechar busca', startTyping:'Digite para pesquisar', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave', suggested:'Resultados sugeridos', clear:'Limpar busca', results:'Resultados da busca'},
    tr:{placeholder:'Aramak için yazın', ariaLabel:'Coin ProofPath’ta ara', buttonLabel:'Ara', openLabel:'Aramayı aç', closeLabel:'Aramayı kapat', startTyping:'Aramak için yazın', noResults:'Sonuç bulunamadı', tryAnother:'Başka bir anahtar kelime deneyin', suggested:'Önerilen sonuçlar', clear:'Aramayı temizle', results:'Arama sonuçları'},
    es:{placeholder:'Escribe para buscar', ariaLabel:'Buscar en Coin ProofPath', buttonLabel:'Buscar', openLabel:'Abrir búsqueda', closeLabel:'Cerrar búsqueda', startTyping:'Escribe para buscar', noResults:'No se encontraron resultados', tryAnother:'Prueba otra palabra clave', suggested:'Resultados sugeridos', clear:'Borrar búsqueda', results:'Resultados de búsqueda'},
    ar:{placeholder:'اكتب للبحث', ariaLabel:'ابحث في Coin ProofPath', buttonLabel:'بحث', openLabel:'فتح البحث', closeLabel:'إغلاق البحث', startTyping:'اكتب للبحث', noResults:'لا توجد نتائج', tryAnother:'جرّب كلمة أخرى', suggested:'نتائج مقترحة', clear:'مسح البحث', results:'نتائج البحث'},
    vi:{placeholder:'Nhập để tìm kiếm', ariaLabel:'Tìm kiếm Coin ProofPath', buttonLabel:'Tìm kiếm', openLabel:'Mở tìm kiếm', closeLabel:'Đóng tìm kiếm', startTyping:'Nhập để tìm kiếm', noResults:'Không tìm thấy kết quả', tryAnother:'Thử từ khóa khác', suggested:'Kết quả gợi ý', clear:'Xóa tìm kiếm', results:'Kết quả tìm kiếm'},
    ha:{placeholder:'Rubuta don bincike', ariaLabel:'Bincika Coin ProofPath', buttonLabel:'Bincika', openLabel:'Bude bincike', closeLabel:'Rufe bincike', startTyping:'Rubuta don bincike', noResults:'Babu sakamako', tryAnother:'Gwada wata kalma', suggested:'Shawarar sakamako', clear:'Share bincike', results:'Sakamakon bincike'}
  };

  var EXACT_TEXT = {
    'Search':'buttonLabel',
    'Search lessons':'ariaLabel',
    'Search glossary':'ariaLabel',
    'Type to search':'startTyping',
    'Type to search...':'startTyping',
    'Start typing to search':'startTyping',
    'Search by coin, lesson, glossary, or source':'ariaLabel',
    'Search by keyword':'placeholder',
    'No results':'noResults',
    'No results found':'noResults',
    'Try another keyword':'tryAnother',
    'Suggested results':'suggested',
    'Recent searches':'suggested',
    'Clear search':'clear',
    'Open search':'openLabel',
    'Close search':'closeLabel',
    'Search results':'results',
    'Results':'results'
  };
  var ENGLISH_TERMS = Object.keys(EXACT_TEXT);

  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLocale(){
    var lang = 'en';
    try{
      lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(error){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    return langKey(lang);
  }
  function copy(){ return COPY[currentLocale()] || COPY.en; }
  function norm(value){ return String(value || '').replace(/\s+/g,' ').trim(); }
  function lower(value){ return norm(value).toLowerCase(); }
  function includesSearchMeta(node){
    if(!node) return false;
    var meta = [
      node.id,
      typeof node.className === 'string' ? node.className : '',
      node.getAttribute && node.getAttribute('placeholder'),
      node.getAttribute && node.getAttribute('aria-label'),
      node.getAttribute && node.getAttribute('title'),
      node.getAttribute && node.getAttribute('name'),
      node.getAttribute && node.getAttribute('role'),
      node.getAttribute && node.getAttribute('onclick'),
      node.textContent
    ].join(' ').toLowerCase();
    return /search|검색|찾기|ค้นหา|cari|pesquisar|buscar|ara|بحث|tìm|bincika/.test(meta);
  }
  function isSearchInput(input){
    if(!input) return false;
    var type = lower(input.getAttribute && input.getAttribute('type'));
    return type === 'search' || includesSearchMeta(input);
  }
  function isCloseControl(node){
    var structuralMeta = [
      node.id,
      typeof node.className === 'string' ? node.className : '',
      node.getAttribute && node.getAttribute('onclick')
    ].join(' ').toLowerCase();
    if(/opensearch|search-trigger|search-open|open-search/.test(structuralMeta)) return false;
    if(/closesearch|search-close|close-search/.test(structuralMeta)) return true;
    var text = lower(node.textContent);
    if(text === 'esc') return true;
    var closeLabels = LANGS.map(function(lang){ return lower(COPY[lang].closeLabel); });
    var labels = [
      node.getAttribute && node.getAttribute('aria-label'),
      node.getAttribute && node.getAttribute('title')
    ].map(lower);
    return labels.some(function(label){
      return closeLabels.indexOf(label) !== -1 || label === 'close search';
    });
  }
  function searchInputs(){
    return Array.prototype.filter.call(document.querySelectorAll('input'), isSearchInput);
  }
  function searchControls(){
    return Array.prototype.filter.call(document.querySelectorAll('button,a,[role="button"]'), function(node){
      return includesSearchMeta(node) || lower(node.getAttribute && node.getAttribute('onclick')).indexOf('search') !== -1;
    });
  }
  function setAttrs(node, attrs){
    if(!node) return;
    Object.keys(attrs).forEach(function(name){
      if(attrs[name] != null) node.setAttribute(name, attrs[name]);
    });
  }
  function patchExactText(root, ui){
    if(!root || !root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-empty,.search-section-divider,[data-search-empty],.search-helper,.search-hint,.visually-hidden,.sr-only'), function(node){
      var text = norm(node.textContent);
      if(EXACT_TEXT[text]) node.textContent = ui[EXACT_TEXT[text]];
    });
  }
  function patchAttributes(root, ui){
    if(!root || !root.querySelectorAll) return;
    Array.prototype.forEach.call(root.querySelectorAll('[aria-label],[title],[data-empty],[placeholder]'), function(node){
      ['aria-label','title','data-empty','placeholder'].forEach(function(attr){
        var value = norm(node.getAttribute && node.getAttribute(attr));
        if(EXACT_TEXT[value]) node.setAttribute(attr, ui[EXACT_TEXT[value]]);
      });
    });
  }

  var syncing = false;
  var pending = false;

  function syncSearchLocale(){
    var ui = copy();
    syncing = true;
    searchInputs().forEach(function(input){
      input.placeholder = ui.placeholder;
      setAttrs(input, {
        'aria-label': ui.placeholder,
        'title': ui.placeholder,
        'data-search-locale-synced': currentLocale()
      });
    });
    searchControls().forEach(function(control){
      var close = isCloseControl(control);
      setAttrs(control, {
        'aria-label': close ? ui.closeLabel : ui.openLabel,
        'title': close ? ui.closeLabel : ui.openLabel,
        'data-search-locale-synced': currentLocale()
      });
      var text = norm(control.textContent);
      if(text === 'Search' || text === 'Open search' || text === ui.openLabel){
        control.textContent = ui.buttonLabel;
      } else if(text === 'Close search'){
        control.textContent = ui.closeLabel;
      }
    });
    var results = document.getElementById('searchResults');
    if(results){
      setAttrs(results, {
        'data-empty': ui.startTyping,
        'aria-label': ui.results,
        'title': ui.results
      });
      patchExactText(results, ui);
      patchAttributes(results, ui);
    }
    var overlay = document.getElementById('searchOverlay');
    if(overlay){
      setAttrs(overlay, {'aria-label': ui.results});
      patchExactText(overlay, ui);
      patchAttributes(overlay, ui);
    }
    if(typeof window.getSearchEmptyText === 'function' || !window.getSearchEmptyText){
      window.getSearchEmptyText = function(){ return copy().startTyping; };
    }
    if(typeof window.getSearchNoResultsText === 'function' || !window.getSearchNoResultsText){
      window.getSearchNoResultsText = function(){ return copy().noResults; };
    }
    syncing = false;
  }
  function scheduleSync(){
    if(syncing || pending) return;
    pending = true;
    setTimeout(function(){
      pending = false;
      syncSearchLocale();
    }, 0);
  }
  function wrapAfter(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__searchInputDomLocaleWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncSearchLocale();
      scheduleSync();
      return result;
    };
    wrapped.__searchInputDomLocaleWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'setLang') setLang = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'closeSearch') closeSearch = wrapped;
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
      if(name === 'showPage') showPage = wrapped;
    }catch(error){}
  }
  function watchSearchDom(){
    if(typeof MutationObserver === 'undefined') return;
    var root = document.getElementById('searchOverlay') || document.body;
    if(!root || root.__searchInputDomLocaleObserver) return;
    var observer = new MutationObserver(function(){ scheduleSync(); });
    observer.observe(root, {
      childList:true,
      subtree:true,
      characterData:true,
      attributes:true,
      attributeFilter:['placeholder','aria-label','title','data-empty']
    });
    root.__searchInputDomLocaleObserver = observer;
  }
  function suspectedEnglish(){
    if(currentLocale() === 'en') return [];
    var chunks = [];
    searchInputs().forEach(function(input){
      chunks.push(input.placeholder || '', input.getAttribute('aria-label') || '', input.getAttribute('title') || '');
    });
    searchControls().forEach(function(control){
      chunks.push(control.textContent || '', control.getAttribute('aria-label') || '', control.getAttribute('title') || '');
    });
    var results = document.getElementById('searchResults');
    if(results) chunks.push(results.getAttribute('data-empty') || '', results.textContent || '');
    var text = chunks.join(' ');
    return ENGLISH_TERMS.filter(function(term){
      return term !== 'Results' && text.indexOf(term) !== -1;
    });
  }

  window.syncSearchLocale = syncSearchLocale;
  window.debugSearchInputsLocale = function(){
    syncSearchLocale();
    return {
      currentLocale: currentLocale(),
      searchInputCount: searchInputs().length,
      inputs: searchInputs().map(function(input, index){
        return {
          index:index,
          id:input.id || '',
          className:typeof input.className === 'string' ? input.className : '',
          placeholder:input.placeholder || '',
          ariaLabel:input.getAttribute('aria-label') || '',
          title:input.getAttribute('title') || ''
        };
      }),
      searchButtonCount: searchControls().length,
      buttons: searchControls().map(function(button, index){
        return {
          index:index,
          id:button.id || '',
          className:typeof button.className === 'string' ? button.className : '',
          text:norm(button.textContent),
          ariaLabel:button.getAttribute('aria-label') || '',
          title:button.getAttribute('title') || ''
        };
      }),
      resultsDataEmpty:document.getElementById('searchResults') ? document.getElementById('searchResults').getAttribute('data-empty') : null,
      suspectedEnglish:suspectedEnglish()
    };
  };
  window.__SEARCH_INPUT_DOM_LOCALE_20260526 = COPY;

  wrapAfter('setLang');
  wrapAfter('openSearch');
  wrapAfter('closeSearch');
  wrapAfter('renderSearchAutocompleteFinal');
  wrapAfter('renderPatchedSearchResults');
  wrapAfter('showPage');
  syncSearchLocale();
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ syncSearchLocale(); watchSearchDom(); }, {once:true});
  } else {
    setTimeout(function(){ syncSearchLocale(); watchSearchDom(); }, 0);
  }
})();
