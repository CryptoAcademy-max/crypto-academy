(function(){
  if(window.__homeRecentUpdatesFinal) return;
  window.__homeRecentUpdatesFinal = true;

  function getRecentUpdateLangFinal(){
    if(typeof currentLang === 'string' && currentLang) return currentLang;
    return 'en';
  }

  function getRecentUpdateLabelsFinal(){
    var lang = getRecentUpdateLangFinal();
    var labels = {
      en:{title:'Recent Updates', link:'View all updates'},
      ko:{title:'\uCD5C\uADFC \uC5C5\uB370\uC774\uD2B8', link:'\uC804\uCCB4 \uC5C5\uB370\uC774\uD2B8 \uBCF4\uAE30'},
      th:{title:'\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14', link:'\u0E14\u0E39\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14'},
      id:{title:'Update terbaru', link:'Lihat semua update'},
      pt:{title:'Atualizacoes recentes', link:'Ver todo o historico'},
      br:{title:'Atualizacoes recentes', link:'Ver todo o historico'},
      tr:{title:'Son guncellemeler', link:'Tum guncellemeleri gor'},
      es:{title:'Actualizaciones recientes', link:'Ver todo el historial'},
      ar:{title:'\u0622\u062E\u0631 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A', link:'\u0639\u0631\u0636 \u0643\u0627\u0645\u0644 \u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u0627\u062A'},
      vi:{title:'Cap nhat gan day', link:'Xem toan bo lich su'},
      ha:{title:'Sabbin sabuntawa', link:'Duba tarihin sabuntawa gaba daya'}
    };
    return labels[lang] || labels.en;
  }

  function getRecentUpdateDataFinal(){
    var lang = getRecentUpdateLangFinal();
    if(typeof window.getUpdateHistoryEntries === 'function'){
      return window.getUpdateHistoryEntries(lang) || [];
    }
    if(typeof updateHistory === 'undefined' || !updateHistory) return [];
    return updateHistory[lang] || updateHistory.en || [];
  }

  function getRecentUpdateSummaryFinal(entry){
    if(entry && entry.items && entry.items.length){
      return entry.items[0];
    }
    return entry && entry.title ? entry.title : '';
  }

  function decorateUpdateEntriesFinal(){
    var panel = document.getElementById('updatesPanel');
    if(!panel) return;
    panel.querySelectorAll('.update-entry').forEach(function(entry){
      var dateEl = entry.querySelector('.update-date');
      if(dateEl){
        entry.setAttribute('data-update-date', (dateEl.textContent || '').trim());
      }
    });
  }

  function openRecentUpdateFinal(date){
    if(typeof showPage === 'function'){
      showPage('updates');
    }
    setTimeout(function(){
      decorateUpdateEntriesFinal();
      if(!date) return;
      var target = document.querySelector('#updatesPanel .update-entry[data-update-date="' + date + '"]');
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }, 80);
  }

  window.__openRecentUpdateFinal = openRecentUpdateFinal;

  function renderHomeRecentUpdatesFinal(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;

    var block = hero.querySelector('.home-recent-updates');
    var notice = hero.querySelector('.lang-notice');
    var preferredAnchor = hero.querySelector('.continue-card') || hero.querySelector('.home-grid') || hero.querySelector('.home-mini-grid');
    if(!block){
      block = document.createElement('section');
      block.className = 'home-recent-updates';
      if(notice && notice.parentNode){
        notice.replaceWith(block);
      } else if(preferredAnchor && preferredAnchor.parentNode){
        preferredAnchor.parentNode.insertBefore(block, preferredAnchor);
      } else {
        hero.appendChild(block);
      }
    } else if(notice && notice.parentNode){
      notice.replaceWith(block);
    } else if(preferredAnchor && block !== preferredAnchor.previousElementSibling){
      preferredAnchor.parentNode.insertBefore(block, preferredAnchor);
    }

    hero.querySelectorAll('.lang-notice').forEach(function(el){
      el.remove();
    });

    var labels = getRecentUpdateLabelsFinal();
    var entries = getRecentUpdateDataFinal().slice(0,2);
    if(!entries.length){
      block.style.display = 'none';
      return;
    }
    block.style.display = '';

    block.innerHTML = ''
      + '<div class="home-recent-updates-head">'
      +   '<div class="home-recent-updates-title">' + labels.title + '</div>'
      +   '<button type="button" class="home-recent-updates-link">' + labels.link + '</button>'
      + '</div>'
      + '<div class="home-recent-updates-list"></div>';

    var link = block.querySelector('.home-recent-updates-link');
    if(link){
      link.addEventListener('click', function(){
        openRecentUpdateFinal('');
      });
    }

    var list = block.querySelector('.home-recent-updates-list');
    entries.forEach(function(entry){
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'home-recent-update-item';
      button.innerHTML = ''
        + '<div class="home-recent-update-date">' + entry.date + '</div>'
        + '<div class="home-recent-update-title">' + (entry.title || '') + '</div>'
        + '<div class="home-recent-update-desc">' + getRecentUpdateSummaryFinal(entry) + '</div>';
      button.addEventListener('click', function(){
        openRecentUpdateFinal(entry.date || '');
      });
      list.appendChild(button);
    });
  }

  function syncHomeRecentUpdatesFinal(){
    renderHomeRecentUpdatesFinal();
    decorateUpdateEntriesFinal();
  }

  function wrapHomeRecentUpdatesFinal(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeRecentUpdatesWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeRecentUpdatesFinal();
      return result;
    };
    wrapped.__homeRecentUpdatesWrapped = true;
    window[name] = wrapped;
  }

  wrapHomeRecentUpdatesFinal('renderAllLessons');
  wrapHomeRecentUpdatesFinal('showPage');
  wrapHomeRecentUpdatesFinal('setLang');

  syncHomeRecentUpdatesFinal();
})();