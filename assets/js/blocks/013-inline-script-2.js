(function(){
  // Lucide-style SVG icons (24x24 viewBox, stroke-based)
  var ICONS = {
    home:'<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    blockchain:'<svg viewBox="0 0 24 24"><rect x="1" y="4" width="8" height="7" rx="1.5"/><rect x="15" y="13" width="8" height="7" rx="1.5"/><path d="M9 7.5h2.5a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2H15"/></svg>',
    wallet:'<svg viewBox="0 0 24 24"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z"/><path d="M16 12a1 1 0 1 0 0 .01"/><path d="M3 7l9-4 9 4"/></svg>',
    transfer:'<svg viewBox="0 0 24 24"><path d="M7 17l-4-4 4-4"/><path d="M3 13h13"/><path d="M17 7l4 4-4 4"/><path d="M21 11H8"/></svg>',
    layers:'<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    filetext:'<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    compass:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    faq:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    shield:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    book:'<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    library:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="13" y2="11"/></svg>',
    map:'<svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    alert:'<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    play:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    key:'<svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    link:'<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    send:'<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    shieldx:'<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9.5" y1="9" x2="14.5" y2="14"/><line x1="14.5" y1="9" x2="9.5" y2="14"/></svg>',
    extalert:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
  };

  function ic(name){return '<span class="sec-icon">'+ICONS[name]+'</span>';}

  // Lesson index → icon mapping
  var lessonIcons = ['blockchain','wallet','transfer','layers','filetext','search'];
  // Page → icon mapping
  var pageIcons = {home:'home',start:'compass',faq:'faq',safety:'shield',glossary:'book',sources:'library'};
  // Mistake card icons
  var mistakeCardIcons = ['key','link','shieldx','send','extalert'];

  // 1. Replace sidebar nav-num content with SVG icons
  var sidebarItems = document.querySelectorAll('#sidebar .lesson-nav-item');
  sidebarItems.forEach(function(item){
    var numEl = item.querySelector('.nav-num');
    if(!numEl) return;
    var lessonIdx = item.getAttribute('data-lesson');
    var pageAttr = item.getAttribute('data-page');
    if(lessonIdx !== null){
      var idx = parseInt(lessonIdx);
      if(lessonIcons[idx]) numEl.innerHTML = ic(lessonIcons[idx]);
    } else if(pageAttr && pageIcons[pageAttr]){
      numEl.innerHTML = ic(pageIcons[pageAttr]);
    }
  });

  // 2. Patch renderHome to use SVG icons in home-card-num
  var __prevRenderHome = window.renderHome;
  window.renderHome = function(){
    var html = __prevRenderHome();
    if(typeof html !== 'string') return html || '';
    // Replace home-card-num numbers with icons for lessons
    for(var i=0;i<lessonIcons.length;i++){
      html = html.replace(
        new RegExp('<div class="home-card-num">'+(i+1)+'</div>'),
        '<div class="home-card-num">'+ic(lessonIcons[i])+'</div>'
      );
    }
    // Replace Start (S), FAQ (F), Safety (!)
    html = html.replace('<div class="home-card-num">S</div>','<div class="home-card-num">'+ic('compass')+'</div>');
    html = html.replace('<div class="home-card-num">F</div>','<div class="home-card-num">'+ic('faq')+'</div>');
    html = html.replace('<div class="home-card-num">!</div>','<div class="home-card-num">'+ic('shield')+'</div>');

    // Replace emoji in roadmap heading
    html = html.replace(/📚\s*/g, ic('map')+' ');
    // Replace emoji in mistakes heading
    html = html.replace(/⚠️\s*/g, ic('alert')+' ');
    // Replace emoji in language notice
    html = html.replace(/<span class="lang-notice-icon">🌍<\/span>/g, '<span class="lang-notice-icon">'+ic('globe')+'</span>');
    html = html.replace(/🌐\s*/g, ic('globe')+' ');

    // Add icons to continue card
    html = html.replace(/<div class="continue-icon"><svg/g, '<div class="continue-icon">'+ic('play')+'<svg style="display:none"');

    // Add icons to each roadmap-card
    for(var r=0;r<lessonIcons.length;r++){
      html = html.replace(
        new RegExp('<div class="roadmap-card" onclick="showLesson\\('+r+'\\)">'),
        '<div class="roadmap-card" onclick="showLesson('+r+')">'+ic(lessonIcons[r])
      );
    }

    // Add icons to mistake summary cards
    html = html.replace(/<div class="mistake-summary-card">/g, (function(){
      var idx = 0;
      return function(match){
        var icon = mistakeCardIcons[idx] || 'alert';
        idx++;
        return '<div class="mistake-summary-card">'+ic(icon);
      };
    })());

    return html;
  };

  // 3. Patch section renderers to add icons to headers
  var __prevGlossary = window.renderGlossary;
  window.renderGlossary = function(){
    var html = __prevGlossary();
    if(typeof html !== 'string') return html || '';
    html = html.replace('<span class="meta-pill">G</span>','<span class="meta-pill">'+ic('book')+'</span>');
    return html;
  };

  var __prevSources = window.renderSources;
  window.renderSources = function(){
    var html = __prevSources();
    if(typeof html !== 'string') return html || '';
    html = html.replace('<span class="meta-pill">S</span>','<span class="meta-pill">'+ic('library')+'</span>');
    return html;
  };

  var __prevStartHere = window.renderStartHere;
  window.renderStartHere = function(){
    var html = __prevStartHere();
    if(typeof html !== 'string') return html || '';
    // Add compass icon to start here meta pill
    var startPill = html.match(/<span class="meta-pill">[^<]+<\/span>/);
    if(startPill){
      html = html.replace(startPill[0], '<span class="meta-pill">'+ic('compass')+startPill[0].replace(/<span class="meta-pill">/,'').replace(/<\/span>/,'')+'</span>');
    }
    return html;
  };

  var __prevFAQPage = window.renderFAQPage;
  window.renderFAQPage = function(){
    var html = __prevFAQPage();
    if(typeof html !== 'string') return html || '';
    var faqPill = html.match(/<span class="meta-pill">[^<]+<\/span>/);
    if(faqPill){
      html = html.replace(faqPill[0], '<span class="meta-pill">'+ic('faq')+faqPill[0].replace(/<span class="meta-pill">/,'').replace(/<\/span>/,'')+'</span>');
    }
    return html;
  };

  var __prevSafetyPage = window.renderSafetyPage;
  window.renderSafetyPage = function(){
    var html = __prevSafetyPage();
    if(typeof html !== 'string') return html || '';
    var safetyPill = html.match(/<span class="meta-pill">[^<]+<\/span>/);
    if(safetyPill){
      html = html.replace(safetyPill[0], '<span class="meta-pill">'+ic('shield')+safetyPill[0].replace(/<span class="meta-pill">/,'').replace(/<\/span>/,'')+'</span>');
    }
    return html;
  };

  // 4. Patch renderLesson to add lesson-specific icon to meta pill
  var __prevRenderLesson = window.renderLesson;
  window.renderLesson = function(i){
    var html = __prevRenderLesson(i);
    if(typeof html !== 'string') return html || '';
    var iconName = lessonIcons[i] || 'filetext';
    // Insert icon into meta-pill
    html = html.replace(/<span class="meta-pill">/, '<span class="meta-pill">'+ic(iconName)+' ');
    return html;
  };

  // Re-render
  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined' && currentPage === 'home') showPage('home');
})();