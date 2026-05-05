(function(){
  if(typeof window === 'undefined' || window.__checklistEntrySections20260505) return;
  window.__checklistEntrySections20260505 = true;

  var CHECKLIST_SECTION_KEY = 'checklists';
  var CHECKLIST_ITEMS = [
    { key:'beforeSend', slug:'before-send', chip:'SEND' },
    { key:'seedPhrase', slug:'seed-phrase-safety', chip:'SEED' },
    { key:'fakeWebsite', slug:'fake-website-check', chip:'SITE' }
  ];

  function normalizeLang(value){
    var lang = String(value || '').toLowerCase().trim();
    if(!lang) return 'en';
    if(lang === 'br' || lang.indexOf('pt-br') === 0) return 'pt';
    if(lang.indexOf('ko') === 0) return 'ko';
    if(lang.indexOf('th') === 0) return 'th';
    if(lang.indexOf('id') === 0) return 'id';
    if(lang.indexOf('pt') === 0) return 'pt';
    if(lang.indexOf('tr') === 0) return 'tr';
    if(lang.indexOf('es') === 0) return 'es';
    if(lang.indexOf('ar') === 0) return 'ar';
    if(lang.indexOf('vi') === 0) return 'vi';
    if(lang.indexOf('ha') === 0) return 'ha';
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

  function getChecklistRoute(slug){
    var route = toIndexRoute(getBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g, '') + '/');
    var lang = getCurrentLang();
    return route + (route.indexOf('?') === -1 ? '?lang=' : '&lang=') + encodeURIComponent(lang);
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeChecklistTarget(value){
    var key = String(value || '').toLowerCase().replace(/[^a-z]/g, '');
    if(!key) return '';
    if(key === 'checklist' || key === 'checklists' || key === 'quickchecklists' || key === 'quickchecklist'){
      return CHECKLIST_SECTION_KEY;
    }
    return '';
  }

  function getPack(){
    var lang = getCurrentLang();
    var packs = {
      en:{
        homeTitle:'Quick Checklists',
        homeBody:'Short checklist pages you can revisit quickly before a transfer or a safety check.',
        sourceMenu:'Checklists',
        sourceTitle:'Quick Checklists',
        sourceBody:'Short practical checklists for moments when you need a fast review instead of a long read.',
        sourceMeta:'Checklist',
        button:'Open Checklist',
        cards:{
          beforeSend:{
            title:'Before You Send Checklist',
            body:'Quickly review the address, network, and final checks'
          },
          seedPhrase:{
            title:'Seed Phrase Safety Check',
            body:'Review the most important seed phrase safety rules'
          },
          fakeWebsite:{
            title:'Quick Fake Website Check',
            body:'Recheck domains and links before logging in'
          }
        }
      },
      ko:{
        homeTitle:'\ubc14\ub85c \ud655\uc778\ud558\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        homeBody:'\uae38\uac8c \uc77d\uc9c0 \uc54a\uc544\ub3c4, \uc804\uc1a1 \uc804\u00b7\ubcf4\uc548 \ud655\uc778 \uc804 \ube60\ub974\uac8c \ub2e4\uc2dc \ubcfc \uc218 \uc788\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4.',
        sourceMenu:'\uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        sourceTitle:'\ube60\ub978 \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        sourceBody:'\uae38\uac8c \uc77d\uae30\ubcf4\ub2e4 \uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\uc744 \ub54c \ubcf4\ub294 \uc2e4\uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4.',
        sourceMeta:'\uccb4\ud06c\ub9ac\uc2a4\ud2b8',
        button:'\uccb4\ud06c\ub9ac\uc2a4\ud2b8 \ubcf4\uae30',
        cards:{
          beforeSend:{
            title:'\uc804\uc1a1 \uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8',
            body:'\uc8fc\uc18c, \ub124\ud2b8\uc6cc\ud06c, \ucd5c\uc885 \ud655\uc778\uc744 \uc9e7\uac8c \ub2e4\uc2dc \ubd05\ub2c8\ub2e4'
          },
          seedPhrase:{
            title:'\uc2dc\ub4dc \ubb38\uad6c \ubcf4\uc548 \uccb4\ud06c',
            body:'\uc2dc\ub4dc \ubb38\uad6c\uc640 \uad00\ub828\ub41c \uac00\uc7a5 \uc911\uc694\ud55c \uae08\uc9c0 \uc0ac\ud56d\uc744 \ub2e4\uc2dc \ud655\uc778\ud569\ub2c8\ub2e4'
          },
          fakeWebsite:{
            title:'\uac00\uc9dc \uc0ac\uc774\ud2b8 \ube60\ub978 \ud655\uc778',
            body:'\ub85c\uadf8\uc778 \uc804 \ub3c4\uba54\uc778\uacfc \ub9c1\ud06c\ub97c \uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud569\ub2c8\ub2e4'
          }
        }
      },
      th:{
        homeTitle:'Quick Checklists',
        homeBody:'Short checklist pages you can reopen quickly before a transfer or a safety check.',
        sourceMenu:'Checklists',
        sourceTitle:'Quick Checklists',
        sourceBody:'Short practical checklists for moments when you want a fast review instead of a long read.',
        sourceMeta:'Checklist',
        button:'Open Checklist',
        cards:{
          beforeSend:{ title:'Before You Send Checklist', body:'Quickly review the address, network, and final checks' },
          seedPhrase:{ title:'Seed Phrase Safety Check', body:'Review the most important seed phrase safety rules' },
          fakeWebsite:{ title:'Quick Fake Website Check', body:'Recheck domains and links before logging in' }
        }
      },
      id:{
        homeTitle:'Checklist Cepat',
        homeBody:'Halaman checklist singkat yang bisa Anda buka lagi dengan cepat sebelum transfer atau sebelum cek keamanan.',
        sourceMenu:'Checklist',
        sourceTitle:'Checklist Cepat',
        sourceBody:'Checklist praktis singkat untuk saat Anda butuh ulasan cepat, bukan bacaan panjang.',
        sourceMeta:'Checklist',
        button:'Buka Checklist',
        cards:{
          beforeSend:{ title:'Checklist Sebelum Mengirim', body:'Tinjau cepat alamat, jaringan, dan pemeriksaan terakhir' },
          seedPhrase:{ title:'Cek Keamanan Seed Phrase', body:'Tinjau aturan keamanan seed phrase yang paling penting' },
          fakeWebsite:{ title:'Cek Cepat Situs Palsu', body:'Periksa ulang domain dan link sebelum login' }
        }
      },
      pt:{
        homeTitle:'Checklists Rapidos',
        homeBody:'Paginas curtas de checklist para rever rapidamente antes de uma transferencia ou de uma checagem de seguranca.',
        sourceMenu:'Checklists',
        sourceTitle:'Checklists Rapidos',
        sourceBody:'Checklists praticos e curtos para quando voce precisa de uma revisao rapida em vez de uma leitura longa.',
        sourceMeta:'Checklist',
        button:'Abrir Checklist',
        cards:{
          beforeSend:{ title:'Checklist Antes de Enviar', body:'Revise rapidamente endereco, rede e confirmacao final' },
          seedPhrase:{ title:'Checklist de Seguranca da Seed Phrase', body:'Revise as regras mais importantes de seguranca da seed phrase' },
          fakeWebsite:{ title:'Cheque Rapido de Site Falso', body:'Confira dominio e links novamente antes do login' }
        }
      },
      tr:{
        homeTitle:'Hizli Kontrol Listeleri',
        homeBody:'Transferden veya guvenlik kontrolunden once hizlica geri donup bakabileceginiz kisa checklist sayfalari.',
        sourceMenu:'Checklistler',
        sourceTitle:'Hizli Kontrol Listeleri',
        sourceBody:'Uzun bir yazi yerine hizli bir gozden gecirme gerektiginde kullanabileceginiz kisa pratik checklistler.',
        sourceMeta:'Checklist',
        button:'Kontrol Listesini Ac',
        cards:{
          beforeSend:{ title:'Gondermeden Once Kontrol Listesi', body:'Adresi, agi ve son kontrolu hizlica gozden gecirin' },
          seedPhrase:{ title:'Seed Phrase Guvenlik Kontrolu', body:'En onemli seed phrase guvenlik kurallarini yeniden gorun' },
          fakeWebsite:{ title:'Sahte Site Icin Hizli Kontrol', body:'Giris yapmadan once domaini ve linkleri tekrar kontrol edin' }
        }
      },
      es:{
        homeTitle:'Checklists Rapidos',
        homeBody:'Paginas cortas de checklist para volver rapido antes de una transferencia o una revision de seguridad.',
        sourceMenu:'Checklists',
        sourceTitle:'Checklists Rapidos',
        sourceBody:'Checklists practicos y cortos para cuando necesitas una revision rapida en lugar de una lectura larga.',
        sourceMeta:'Checklist',
        button:'Abrir Checklist',
        cards:{
          beforeSend:{ title:'Checklist Antes de Enviar', body:'Revisa rapido la direccion, la red y la verificacion final' },
          seedPhrase:{ title:'Chequeo de Seguridad de la Seed Phrase', body:'Revisa las reglas mas importantes de seguridad de la seed phrase' },
          fakeWebsite:{ title:'Revision Rapida de Sitio Falso', body:'Vuelve a comprobar dominio y enlaces antes de iniciar sesion' }
        }
      },
      ar:{
        homeTitle:'قوائم تحقق سريعة',
        homeBody:'صفحات تحقق قصيرة يمكنك الرجوع إليها بسرعة قبل التحويل أو قبل فحص الأمان.',
        sourceMenu:'قوائم تحقق',
        sourceTitle:'قوائم تحقق سريعة',
        sourceBody:'قوائم عملية قصيرة للحظات التي تحتاج فيها إلى مراجعة سريعة بدل القراءة الطويلة.',
        sourceMeta:'قائمة تحقق',
        button:'افتح قائمة التحقق',
        cards:{
          beforeSend:{ title:'قائمة التحقق قبل الإرسال', body:'راجع العنوان والشبكة والتأكيد النهائي بسرعة' },
          seedPhrase:{ title:'فحص أمان Seed Phrase', body:'راجع أهم قواعد أمان seed phrase' },
          fakeWebsite:{ title:'فحص سريع للموقع المزيف', body:'أعد فحص النطاق والروابط قبل تسجيل الدخول' }
        }
      },
      vi:{
        homeTitle:'Checklist Xem Nhanh',
        homeBody:'Nhung trang checklist ngan de ban quay lai nhanh truoc khi chuyen tien hoac truoc khi kiem tra an toan.',
        sourceMenu:'Checklist',
        sourceTitle:'Checklist Xem Nhanh',
        sourceBody:'Checklist thuc te, ngan gon cho luc ban can xem lai nhanh thay vi doc dai.',
        sourceMeta:'Checklist',
        button:'Mo Checklist',
        cards:{
          beforeSend:{ title:'Checklist Truoc Khi Gui', body:'Xem nhanh dia chi, mang va buoc xac nhan cuoi cung' },
          seedPhrase:{ title:'Kiem Tra An Toan Seed Phrase', body:'Xem lai cac quy tac an toan seed phrase quan trong nhat' },
          fakeWebsite:{ title:'Kiem Tra Nhanh Trang Web Gia', body:'Kiem tra lai domain va link truoc khi dang nhap' }
        }
      },
      ha:{
        homeTitle:'Jerin Dubawa na Gaggawa',
        homeBody:'Gajerun shafukan checklist da za ka iya komawa gare su da sauri kafin tura kudi ko kafin duba tsaro.',
        sourceMenu:'Checklist',
        sourceTitle:'Jerin Dubawa na Gaggawa',
        sourceBody:'Takaitattun checklist masu amfani idan kana bukatar bita da sauri maimakon dogon karatu.',
        sourceMeta:'Checklist',
        button:'Bude Checklist',
        cards:{
          beforeSend:{ title:'Jerin Dubawa Kafin Tura Kudi', body:'Sake duba adireshi, network, da tantancewar karshe da sauri' },
          seedPhrase:{ title:'Duban Tsaron Seed Phrase', body:'Sake duba muhimman kaidojin tsaron seed phrase' },
          fakeWebsite:{ title:'Duban Gaggawa na Shafin Bogi', body:'Sake duba domain da links kafin shiga' }
        }
      }
    };
    packs.en.homeBody = 'Short pages to reopen before a transfer or safety check.';
    packs.ko.homeBody = '\uc804\uc1a1 \uc804\uc774\ub098 \ubcf4\uc548 \ud655\uc778 \uc804\uc5d0 \uc9e7\uac8c \ub2e4\uc2dc \ubcf4\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4.';
    return packs[lang] || packs.en;
  }

  function createNodeFromHtml(html){
    var host = document.createElement('div');
    host.innerHTML = html;
    return host.firstElementChild;
  }

  function upsertNode(container, selector, html, insertFn){
    if(!container) return null;
    var nodes = Array.prototype.slice.call(container.querySelectorAll(selector));
    if(nodes.length > 1){
      for(var i = 1; i < nodes.length; i++) nodes[i].remove();
    }
    var fresh = createNodeFromHtml(html);
    if(!fresh) return null;
    if(nodes[0]){
      nodes[0].replaceWith(fresh);
      return fresh;
    }
    insertFn(fresh);
    return fresh;
  }

  function buildHomeChecklistSectionHtml(){
    var pack = getPack();
    var cardsHtml = CHECKLIST_ITEMS.map(function(item){
      var card = pack.cards[item.key];
      return ''
        + '<a class="home-share-summary-card home-checklist-entry-card" href="' + escapeHtml(getChecklistRoute(item.slug)) + '">'
        +   '<span class="home-share-summary-chip">' + escapeHtml(item.chip) + '</span>'
        +   '<div class="home-share-summary-card-title">' + escapeHtml(card.title) + '</div>'
        +   '<div class="home-share-summary-card-body">' + escapeHtml(card.body) + '</div>'
        + '</a>';
    }).join('');
    return ''
      + '<section id="home-quick-checklists-section" class="home-checklist-entry-block home-action-cards-block">'
      +   '<div class="home-action-cards-title">' + escapeHtml(pack.homeTitle) + '</div>'
      +   '<div class="home-action-cards-body">' + escapeHtml(pack.homeBody) + '</div>'
      +   '<div class="home-share-summary-grid">' + cardsHtml + '</div>'
      + '</section>';
  }

  function buildSourceChecklistChipHtml(){
    var pack = getPack();
    return ''
      + '<div class="source-cat" data-source-top-menu="' + CHECKLIST_SECTION_KEY + '" data-source-cat="' + CHECKLIST_SECTION_KEY + '" data-source-group="' + CHECKLIST_SECTION_KEY + '">'
      +   escapeHtml(pack.sourceMenu)
      +   ' <span style="font-size:.65rem;opacity:.6;margin-left:3px">(' + CHECKLIST_ITEMS.length + ')</span>'
      + '</div>';
  }

  function buildSourceChecklistSectionHtml(){
    var pack = getPack();
    var cardsHtml = CHECKLIST_ITEMS.map(function(item){
      var card = pack.cards[item.key];
      return ''
        + '<div class="source-library-item" data-source-key="checklist-' + escapeHtml(item.slug) + '">'
        +   '<div class="source-library-meta">' + escapeHtml(pack.sourceMeta) + '</div>'
        +   '<div class="src-card-tags"><span class="src-card-tag">' + escapeHtml(pack.sourceMenu) + '</span></div>'
        +   '<h3>' + escapeHtml(card.title) + '</h3>'
        +   '<p>' + escapeHtml(card.body) + '</p>'
        +   '<div class="src-actions"><a class="src-action-btn" href="' + escapeHtml(getChecklistRoute(item.slug)) + '">' + escapeHtml(pack.button) + '</a></div>'
        + '</div>';
    }).join('');
    return ''
      + '<div class="src-section-block" data-source-section="' + CHECKLIST_SECTION_KEY + '" data-source-group="' + CHECKLIST_SECTION_KEY + '">'
      +   '<div class="src-section-heading">' + escapeHtml(pack.sourceTitle) + '<span class="src-section-count">' + CHECKLIST_ITEMS.length + '</span></div>'
      +   '<p class="src-group-desc">' + escapeHtml(pack.sourceBody) + '</p>'
      +   '<div class="source-library-grid">' + cardsHtml + '</div>'
      + '</div>';
  }

  function ensureHomeChecklistEntrySection(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-checklist-entry-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    upsertNode(finder, '.home-checklist-entry-block', buildHomeChecklistSectionHtml(), function(node){
      var anchor = finder.querySelector('.start-finder-grid')
        || finder.querySelector('.start-finder-desc')
        || finder.querySelector('.home-free-ebook-flow-block');
      if(anchor && anchor.parentNode === finder){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        finder.insertAdjacentElement('beforeend', node);
      }
    });
  }

  function ensureSourceChecklistChip(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var cats = panel.querySelector('.source-cats');
    if(!cats) return;
    upsertNode(cats, '.source-cat[data-source-group="checklists"]', buildSourceChecklistChipHtml(), function(node){
      var anchor = cats.querySelector('.source-cat[data-source-group="safety"]')
        || cats.querySelector('.source-cat[data-source-cat="scams"]')
        || cats.querySelector('.source-cat[data-source-group="freepdf"]');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        cats.appendChild(node);
      }
    });
  }

  function ensureSourceChecklistSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    upsertNode(panel, '.src-section-block[data-source-section="checklists"]', buildSourceChecklistSectionHtml(), function(node){
      var anchor = panel.querySelector('.src-section-block[data-source-group="safety"]')
        || panel.querySelector('.src-section-block[data-source-section="scams"]')
        || panel.querySelector('.src-section-block[data-source-section="freePdf"]');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        panel.insertAdjacentElement('beforeend', node);
      }
    });
  }

  function ensureSourceChecklistEntry(){
    ensureSourceChecklistChip();
    ensureSourceChecklistSection();
  }

  function focusElement(target){
    if(!target) return;
    if(typeof scrollRepresentativeTargetIntoView === 'function'){
      scrollRepresentativeTargetIntoView(target, 'start');
    } else if(typeof target.scrollIntoView === 'function'){
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
    if(typeof highlightRepresentativeTarget === 'function'){
      highlightRepresentativeTarget(target);
      return;
    }
    target.classList.add('is-source-spotlight');
    setTimeout(function(){
      target.classList.remove('is-source-spotlight');
    }, 2200);
  }

  function wrapSourceCategoryHandlers(){
    var originalSetActive = window.setActiveSourceCategory;
    if(typeof originalSetActive === 'function' && !originalSetActive.__checklistEntryWrapped){
      var wrappedSetActive = function(targetCat){
        if(normalizeChecklistTarget(targetCat) !== CHECKLIST_SECTION_KEY){
          return originalSetActive.apply(this, arguments);
        }
        document.querySelectorAll('#sourcesPanel .source-cat[data-source-cat], #sourcesPanel [data-source-top-menu]').forEach(function(chip){
          var chipKey = chip.dataset.sourceCat || chip.dataset.sourceTopMenu || chip.dataset.sourceGroup || '';
          var active = normalizeChecklistTarget(chipKey) === CHECKLIST_SECTION_KEY;
          chip.classList.toggle('is-active', active);
        });
      };
      wrappedSetActive.__checklistEntryWrapped = true;
      wrappedSetActive.__checklistEntryOriginal = originalSetActive;
      window.setActiveSourceCategory = wrappedSetActive;
      try{ setActiveSourceCategory = wrappedSetActive; }catch(error){}
    }

    var originalScroll = window.scrollToSourceSection;
    if(typeof originalScroll === 'function' && !originalScroll.__checklistEntryWrapped){
      var wrappedScroll = function(targetCat){
        if(normalizeChecklistTarget(targetCat) !== CHECKLIST_SECTION_KEY){
          return originalScroll.apply(this, arguments);
        }
        if(typeof showPage === 'function') showPage('sources');
        ensureSourceChecklistEntry();
        if(typeof window.setActiveSourceCategory === 'function'){
          window.setActiveSourceCategory(CHECKLIST_SECTION_KEY);
        }
        function reveal(tries){
          ensureSourceChecklistEntry();
          var target = document.querySelector('#sourcesPanel .src-section-block[data-source-section="' + CHECKLIST_SECTION_KEY + '"]');
          if(target){
            focusElement(target);
            return;
          }
          if(tries > 0){
            setTimeout(function(){ reveal(tries - 1); }, 120);
          }
        }
        reveal(10);
      };
      wrappedScroll.__checklistEntryWrapped = true;
      wrappedScroll.__checklistEntryOriginal = originalScroll;
      window.scrollToSourceSection = wrappedScroll;
      try{ scrollToSourceSection = wrappedScroll; }catch(error){}
    }
  }

  function syncChecklistEntrySections(){
    ensureHomeChecklistEntrySection();
    ensureSourceChecklistEntry();
    wrapSourceCategoryHandlers();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(error){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__checklistEntrySyncWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncChecklistEntrySections();
      return result;
    };
    wrapped.__checklistEntrySyncWrapped = true;
    wrapped.__checklistEntrySyncOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderSources');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncChecklistEntrySections);
  }

  syncChecklistEntrySections();
})();
