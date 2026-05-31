(function(){
  if(typeof window === 'undefined' || window.__searchResultCardLayout20260522) return;
  window.__searchResultCardLayout20260522 = true;

  var SEARCH_CARD_LABELS = {
    en:{representative:'Representative Coin', coin:'Coin', overview:'Overview', role:'Role', strengths:'Strengths', limitations:'Limitations', beginnerNote:'Beginner Note', relatedLessons:'Related Lessons', relatedGlossary:'Related Glossary', relatedFaq:'Related FAQ', relatedSources:'Related Sources', relatedSafety:'Related Safety'},
    ko:{representative:'대표 코인', coin:'코인', overview:'개요', role:'역할', strengths:'강점', limitations:'한계', beginnerNote:'초보자 메모', relatedLessons:'관련 강의', relatedGlossary:'관련 용어', relatedFaq:'관련 FAQ', relatedSources:'관련 자료', relatedSafety:'관련 안전'},
    th:{representative:'เหรียญตัวแทน', coin:'เหรียญ', overview:'ภาพรวม', role:'บทบาท', strengths:'จุดแข็ง', limitations:'ข้อจำกัด', beginnerNote:'หมายเหตุสำหรับผู้เริ่มต้น', relatedLessons:'บทเรียนที่เกี่ยวข้อง', relatedGlossary:'คำศัพท์ที่เกี่ยวข้อง', relatedFaq:'FAQ ที่เกี่ยวข้อง', relatedSources:'แหล่งข้อมูลที่เกี่ยวข้อง', relatedSafety:'ความปลอดภัยที่เกี่ยวข้อง'},
    id:{representative:'Koin perwakilan', coin:'Koin', overview:'Ringkasan', role:'Peran', strengths:'Kekuatan', limitations:'Batasan', beginnerNote:'Catatan pemula', relatedLessons:'Pelajaran terkait', relatedGlossary:'Glosarium terkait', relatedFaq:'FAQ terkait', relatedSources:'Sumber terkait', relatedSafety:'Keamanan terkait'},
    pt:{representative:'Moeda representativa', coin:'Moeda', overview:'Visão geral', role:'Papel', strengths:'Pontos fortes', limitations:'Limitações', beginnerNote:'Nota para iniciantes', relatedLessons:'Lições relacionadas', relatedGlossary:'Glossário relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Segurança relacionada'},
    br:{representative:'Moeda representativa', coin:'Moeda', overview:'Visão geral', role:'Papel', strengths:'Pontos fortes', limitations:'Limitações', beginnerNote:'Nota para iniciantes', relatedLessons:'Aulas relacionadas', relatedGlossary:'Glossário relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fontes relacionadas', relatedSafety:'Segurança relacionada'},
    tr:{representative:'Temsil coin', coin:'Coin', overview:'Genel bakış', role:'Rol', strengths:'Güçlü yönler', limitations:'Sınırlamalar', beginnerNote:'Başlangıç notu', relatedLessons:'İlgili dersler', relatedGlossary:'İlgili sözlük', relatedFaq:'İlgili SSS', relatedSources:'İlgili kaynaklar', relatedSafety:'İlgili güvenlik'},
    es:{representative:'Moneda representativa', coin:'Moneda', overview:'Resumen', role:'Rol', strengths:'Fortalezas', limitations:'Limitaciones', beginnerNote:'Nota para principiantes', relatedLessons:'Lecciones relacionadas', relatedGlossary:'Glosario relacionado', relatedFaq:'FAQ relacionado', relatedSources:'Fuentes relacionadas', relatedSafety:'Seguridad relacionada'},
    ar:{representative:'عملة ممثلة', coin:'عملة', overview:'نظرة عامة', role:'الدور', strengths:'نقاط القوة', limitations:'القيود', beginnerNote:'ملاحظة للمبتدئين', relatedLessons:'دروس مرتبطة', relatedGlossary:'مصطلحات مرتبطة', relatedFaq:'أسئلة مرتبطة', relatedSources:'مصادر مرتبطة', relatedSafety:'أمان مرتبط'},
    vi:{representative:'Coin đại diện', coin:'Coin', overview:'Tổng quan', role:'Vai trò', strengths:'Điểm mạnh', limitations:'Giới hạn', beginnerNote:'Ghi chú cho người mới', relatedLessons:'Bài học liên quan', relatedGlossary:'Thuật ngữ liên quan', relatedFaq:'FAQ liên quan', relatedSources:'Nguồn liên quan', relatedSafety:'An toàn liên quan'},
    ha:{representative:'Coin wakili', coin:'Coin', overview:'Bayani', role:'Matsayi', strengths:'Karfi', limitations:'Iyakoki', beginnerNote:'Bayani ga mai farawa', relatedLessons:'Darussa masu alaka', relatedGlossary:'Kamus mai alaka', relatedFaq:'FAQ mai alaka', relatedSources:'Tushe masu alaka', relatedSafety:'Tsaro mai alaka'}
  };

  function langKey(){
    var code = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    if(code === 'pt-br') return 'br';
    return SEARCH_CARD_LABELS[code] ? code : 'en';
  }

  function labelsForCurrentLang(baseLabels){
    var labels = {};
    var langLabels = SEARCH_CARD_LABELS[langKey()] || SEARCH_CARD_LABELS.en;
    Object.keys(SEARCH_CARD_LABELS.en).forEach(function(key){
      labels[key] = langLabels[key] || (baseLabels && baseLabels[key]) || SEARCH_CARD_LABELS.en[key];
    });
    return labels;
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizedCoinSymbol(item){
    var coin = item && item.coin ? item.coin : item;
    var name = String((coin && coin.name) || (item && item.name) || '').toLowerCase();
    var key = String((item && item.coinKey) || '').toLowerCase();
    var symbol = String((coin && (coin.displaySymbol || coin.ticker || coin.symbol)) || (item && (item.displaySymbol || item.ticker || item.symbol)) || '').toUpperCase().trim();
    if(key === 'usdt' || name.indexOf('tether') !== -1 || symbol === 'USDT') return 'USDT';
    if(symbol === 'USD' && (key === 'usdt' || name.indexOf('tether') !== -1)) return 'USDT';
    return symbol;
  }

  function normalizeCoinItem(item){
    if(!item || typeof item !== 'object') return item;
    var symbol = normalizedCoinSymbol(item);
    if(!symbol) return item;
    var copy = {};
    Object.keys(item).forEach(function(key){ copy[key] = item[key]; });
    copy.symbol = symbol;
    copy.ticker = symbol;
    copy.displaySymbol = symbol;
    if(copy.coin && typeof copy.coin === 'object'){
      var coinCopy = {};
      Object.keys(copy.coin).forEach(function(key){ coinCopy[key] = copy.coin[key]; });
      coinCopy.symbol = symbol;
      coinCopy.ticker = symbol;
      coinCopy.displaySymbol = symbol;
      copy.coin = coinCopy;
    }
    return copy;
  }

  function patchTetherSymbolStore(){
    var store = window.coinEducation || (window.__coinSearchStore && window.__coinSearchStore.coinEducation);
    if(!store || typeof store !== 'object') return;
    Object.keys(store).forEach(function(lang){
      if(store[lang] && store[lang].usdt){
        store[lang].usdt.symbol = 'USDT';
        store[lang].usdt.ticker = 'USDT';
        store[lang].usdt.displaySymbol = 'USDT';
      }
    });
  }

  function ensureStyles(){
    if(document.getElementById('searchResultCardLayoutStyles20260522')) return;
    var style = document.createElement('style');
    style.id = 'searchResultCardLayoutStyles20260522';
    style.textContent = [
      '#searchOverlay #searchResults .search-section-divider{display:flex;align-items:center;gap:8px;margin:14px 0 8px;padding:0 2px 6px;border-bottom:1px solid rgba(24,42,69,.08);white-space:normal;}',
      '#searchOverlay #searchResults .search-result-title,#searchOverlay #searchResults .search-result-meta,#searchOverlay #searchResults .search-result-desc{display:block;}',
      '#searchOverlay #searchResults .search-result-body{display:grid;gap:4px;min-width:0;}',
      '#searchOverlay #searchResults .search-result-item.coin-result-card,#searchOverlay #searchResults .search-result-item.site-result-card{gap:12px;margin:4px 0;padding:12px;border:1px solid rgba(24,42,69,.08);background:rgba(255,255,255,.72);}',
      '#searchOverlay #searchResults .search-result-item.coin-result-card:hover,#searchOverlay #searchResults .search-result-item.site-result-card:hover,#searchOverlay #searchResults .search-result-item.coin-result-card.is-active,#searchOverlay #searchResults .search-result-item.site-result-card.is-active{background:#fff;border-color:rgba(24,42,69,.16);}',
      '#searchOverlay #searchResults .coin-symbol-badge{width:auto;min-width:36px;height:32px;padding:0 9px;border-radius:999px;font-size:.7rem;letter-spacing:.03em;}',
      '#searchOverlay #searchResults .coin-result-body{display:grid;gap:4px;}',
      '#searchOverlay #searchResults .coin-name{font-weight:800;color:var(--text);line-height:1.3;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .coin-ticker{width:max-content;max-width:100%;display:inline-flex;align-items:center;padding:2px 8px;border-radius:999px;background:rgba(24,42,69,.08);color:var(--text-2);font-size:.7rem;font-weight:800;font-family:"IBM Plex Mono",monospace;letter-spacing:.04em;}',
      '#searchOverlay #searchResults .coin-description{font-size:.8rem;color:var(--text-2);line-height:1.55;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .result-type-icon{width:32px;height:32px;border-radius:11px;}',
      '#searchOverlay #searchResults .site-result-body{display:grid;gap:5px;}',
      '#searchOverlay #searchResults .site-result-meta{order:0;}',
      '#searchOverlay #searchResults .result-type-label{display:inline-flex;width:max-content;max-width:100%;align-items:center;padding:2px 8px;border-radius:999px;background:rgba(24,42,69,.08);color:var(--text-3);font-size:.68rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase;}',
      '#searchOverlay #searchResults .site-result-title{order:1;font-weight:800;color:var(--text);line-height:1.35;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .site-result-description{order:2;font-size:.8rem;color:var(--text-2);line-height:1.55;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .representative-coin-card{margin:6px 0 14px;padding:16px;border:1px solid rgba(24,42,69,.10);border-radius:18px;background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(238,246,255,.82));box-shadow:0 16px 40px rgba(24,42,69,.08);}',
      '#searchOverlay #searchResults .rep-coin-header{display:grid;gap:10px;margin-bottom:14px;}',
      '#searchOverlay #searchResults .rep-coin-kicker{width:max-content;max-width:100%;display:inline-flex;padding:4px 9px;border-radius:999px;background:rgba(24,42,69,.08);color:var(--text-3);font-size:.68rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;}',
      '#searchOverlay #searchResults .rep-coin-identity{display:flex;align-items:center;gap:12px;min-width:0;}',
      '#searchOverlay #searchResults .rep-coin-symbol{flex:0 0 auto;display:grid;place-items:center;min-width:44px;height:44px;padding:0 10px;border-radius:14px;background:var(--navy-2);color:#fff;font-weight:900;font-family:"IBM Plex Mono",monospace;letter-spacing:.04em;}',
      '#searchOverlay #searchResults .rep-coin-name{margin:0;color:var(--text);font-size:1.05rem;font-weight:900;line-height:1.25;}',
      '#searchOverlay #searchResults .rep-coin-ticker{display:block;margin-top:3px;color:var(--text-3);font-family:"IBM Plex Mono",monospace;font-size:.75rem;font-weight:800;}',
      '#searchOverlay #searchResults .rep-coin-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px;}',
      '#searchOverlay #searchResults .rep-coin-field{min-width:0;padding:10px;border-radius:14px;background:rgba(255,255,255,.74);border:1px solid rgba(24,42,69,.08);}',
      '#searchOverlay #searchResults .field-label,#searchOverlay #searchResults .related-title{display:block;margin-bottom:5px;color:var(--text-3);font-size:.68rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;}',
      '#searchOverlay #searchResults .coin-field-text{color:var(--text-2);font-size:.8rem;line-height:1.55;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .rep-related-groups{display:grid;gap:10px;margin-top:12px;}',
      '#searchOverlay #searchResults .rep-related-group{padding:10px;border-radius:14px;background:rgba(255,255,255,.66);border:1px solid rgba(24,42,69,.08);}',
      '#searchOverlay #searchResults .coin-related{display:flex;flex-wrap:wrap;gap:7px;}',
      '#searchOverlay #searchResults .coin-related-chip{display:inline-flex;align-items:center;min-height:28px;padding:5px 9px;border-radius:999px;background:rgba(24,42,69,.08);color:var(--text);font-size:.74rem;font-weight:700;line-height:1.25;cursor:pointer;word-break:keep-all;overflow-wrap:break-word;}',
      '#searchOverlay #searchResults .coin-related-chip:hover{background:rgba(24,42,69,.14);}',
      '@media (max-width:640px){#searchOverlay #searchResults{padding:10px 10px 14px;}#searchOverlay #searchResults .rep-coin-grid{grid-template-columns:1fr;}#searchOverlay #searchResults .search-result-item.coin-result-card,#searchOverlay #searchResults .search-result-item.site-result-card{padding:11px 10px;}#searchOverlay #searchResults .rep-coin-identity{align-items:flex-start;}#searchOverlay #searchResults .coin-symbol-badge{min-width:34px;padding:0 8px;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function buildRelatedSection(label, section){
    if(!section || !section.items || !section.items.length) return '';
    var html = '<div class="rep-related-group"><span class="related-title">' + escapeHtml(label || section.label || '') + '</span><div class="coin-related">';
    section.items.forEach(function(chip){
      if(!chip) return;
      html += '<span class="coin-related-chip" data-page="' + escapeHtml(chip.targetPage || section.page || '') + '" data-target-type="' + escapeHtml(chip.targetType || '') + '" data-target-id="' + escapeHtml(chip.targetId || '') + '">' + escapeHtml(chip.label || chip.targetId || '') + '</span>';
    });
    html += '</div></div>';
    return html;
  }

  function renderRepresentativeCoinCard(item){
    if(!item || !item.coin) return '';
    var normalized = normalizeCoinItem(item);
    var coin = normalized.coin || item.coin;
    var labels = labelsForCurrentLang(normalized.labels || item.labels || {});
    var symbol = normalizedCoinSymbol(normalized);
    var related = [];
    if(typeof window.getRepresentativeCoinRelatedSections === 'function'){
      try{ related = window.getRepresentativeCoinRelatedSections(normalized.coinKey, labels) || []; }catch(error){ related = []; }
    }
    var fieldRows = [
      [labels.overview, coin.overview],
      [labels.role, coin.role],
      [labels.strengths, coin.strengths],
      [labels.limitations, coin.limitations],
      [labels.beginnerNote, coin.beginnerNote]
    ];
    var html = '<section class="coin-card representative-coin-card search-representative-card-slot">';
    html += '<div class="rep-coin-header"><span class="rep-coin-kicker">' + escapeHtml(labels.representative) + '</span>';
    html += '<div class="rep-coin-identity"><span class="rep-coin-symbol">' + escapeHtml(symbol) + '</span><div><h2 class="rep-coin-name">' + escapeHtml(coin.name || normalized.name || symbol) + '</h2><span class="rep-coin-ticker">' + escapeHtml(symbol) + '</span></div></div></div>';
    html += '<div class="rep-coin-grid">';
    fieldRows.forEach(function(field){
      if(!field[1]) return;
      html += '<article class="rep-coin-field"><span class="field-label">' + escapeHtml(field[0]) + '</span><p class="coin-field-text">' + escapeHtml(field[1]) + '</p></article>';
    });
    html += '</div>';
    if(related.length){
      html += '<div class="rep-related-groups">';
      related.forEach(function(section){ html += buildRelatedSection(section.label, section); });
      html += '</div>';
    }
    html += '</section>';
    return html;
  }

  function buildLightCoinCard(item){
    if(!item) return '';
    var normalized = normalizeCoinItem(item);
    var symbol = normalizedCoinSymbol(normalized);
    var name = normalized.name || symbol || 'Coin';
    var desc = String(normalized.desc || '').replace(/\s+/g, ' ').trim();
    var html = '<article class="coin-light coin-result-card">';
    html += '<div class="coin-result-top"><span class="coin-symbol-badge">' + escapeHtml(symbol) + '</span><div class="coin-result-body"><strong class="coin-name">' + escapeHtml(name) + '</strong><span class="coin-ticker">' + escapeHtml(symbol) + '</span></div></div>';
    if(desc) html += '<p class="coin-description">' + escapeHtml(desc.length > 120 ? desc.slice(0, 119).trim() + '...' : desc) + '</p>';
    html += '</article>';
    return html;
  }

  function normalizeRenderedRows(){
    var root = document.getElementById('searchResults');
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-item'), function(row){
      var badge = row.querySelector('.search-result-badge');
      var body = row.querySelector('.search-result-body');
      var title = row.querySelector('.search-result-title');
      var meta = row.querySelector('.search-result-meta');
      var desc = row.querySelector('.search-result-desc');
      if(!badge || !body) return;
      if(badge.classList.contains('coin')){
        var ticker = (meta && meta.textContent ? meta.textContent : badge.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();
        if((title && /tether/i.test(title.textContent || '')) || ticker === 'USDT') ticker = 'USDT';
        if(ticker && ticker.length <= 6) badge.textContent = ticker;
        row.classList.add('coin-result-card');
        badge.classList.add('coin-symbol-badge');
        body.classList.add('coin-result-body');
        if(title) title.classList.add('coin-name');
        if(meta) meta.classList.add('coin-ticker');
        if(desc) desc.classList.add('coin-description');
      } else {
        row.classList.add('site-result-card');
        badge.classList.add('result-type-icon');
        body.classList.add('site-result-body');
        if(meta){
          meta.classList.add('site-result-meta', 'result-type-label');
          if(title && meta.parentNode === body && title.parentNode === body) body.insertBefore(meta, title);
        }
        if(title) title.classList.add('site-result-title');
        if(desc) desc.classList.add('site-result-description');
      }
    });
  }

  function wrapFunction(name, wrapper){
    var original = window[name];
    if(typeof original !== 'function' || original.__searchCardLayoutWrapped) return;
    var wrapped = wrapper(original);
    wrapped.__searchCardLayoutWrapped = true;
    window[name] = wrapped;
    try{ window.eval(name + ' = window["' + name + '"];'); }catch(error){}
  }

  patchTetherSymbolStore();
  ensureStyles();

  wrapFunction('getCoinSearchItems', function(original){
    return function(){
      var list = original.apply(this, arguments) || [];
      return list.map(normalizeCoinItem);
    };
  });

  wrapFunction('getPrioritizedCoinSearchResults', function(original){
    return function(){
      var list = original.apply(this, arguments) || [];
      return list.map(normalizeCoinItem);
    };
  });

  window.renderRichCoinCard = function(item){
    ensureStyles();
    return renderRepresentativeCoinCard(item);
  };
  try{ renderRichCoinCard = window.renderRichCoinCard; }catch(error){}

  window.renderLightCoinCard = function(item){
    ensureStyles();
    return buildLightCoinCard(item);
  };
  try{ renderLightCoinCard = window.renderLightCoinCard; }catch(error){}

  wrapFunction('renderSearchAutocompleteFinal', function(original){
    return function(query){
      patchTetherSymbolStore();
      ensureStyles();
      var result = original.apply(this, arguments);
      normalizeRenderedRows();
      return result;
    };
  });

  window.renderPatchedSearchResults = window.renderSearchAutocompleteFinal || window.renderPatchedSearchResults;
  try{ renderPatchedSearchResults = window.renderPatchedSearchResults; }catch(error){}

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ ensureStyles(); normalizeRenderedRows(); }, { once:true });
  } else {
    normalizeRenderedRows();
  }
})();
