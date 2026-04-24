(function(){
  if(window.__updateHistory20260413Patch) return;
  window.__updateHistory20260413Patch = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "br" ? "pt" : value;
  }

  var UPDATE_PACK = {
    en:{
      date:"2026-04-13",
      title:"Glossary, FAQ, and source links were expanded for beginners",
      items:[
        "The glossary and FAQ were expanded so beginners can check confusing ideas more easily.",
        "Core terms such as KYC, fiat currency, self-custody wallet, seed phrase, and address poisoning were added.",
        "Practical questions about exchanges, seed phrase storage, fake support DMs, and wrong networks were added to the FAQ.",
        "Address poisoning sources were added so learners can review transaction history risk, lookalike addresses, and wrong-copy mistakes.",
        "This update focused on helping users move naturally from search into terms, questions, and reference material."
      ]
    },
    ko:{
      date:"2026-04-13",
      title:"용어사전, FAQ, 출처 연결을 초보자 기준으로 보강했습니다",
      items:[
        "용어사전과 FAQ를 보강해 초보자가 자주 헷갈리는 개념을 더 쉽게 확인할 수 있도록 정리했습니다",
        "KYC, 법정화폐, 자기보관지갑, 시드 문구, 주소 오염 공격 같은 핵심 용어를 추가했습니다",
        "처음 거래소에 자산을 두어도 되는지, 시드 문구를 어떻게 보관해야 하는지, 가짜 고객센터 DM을 어떻게 구분하는지 같은 실전 질문도 FAQ에 반영했습니다",
        "Address poisoning 관련 출처 연결도 보강해 사기 예방 학습 흐름을 더 또렷하게 만들었습니다",
        "이번 업데이트는 검색 이후 바로 용어, 질문, 참고자료까지 자연스럽게 이어서 확인할 수 있도록 정리하는 데 집중했습니다"
      ]
    }
  };

  function buildUpdateEntry(lang){
    return clone(UPDATE_PACK[baseLang(lang)] || UPDATE_PACK.en);
  }

  var originalGetUpdateHistoryEntries = typeof window.getUpdateHistoryEntries === "function" ? window.getUpdateHistoryEntries : null;
  window.getUpdateHistoryEntries = function(lang){
    var list = originalGetUpdateHistoryEntries ? originalGetUpdateHistoryEntries(lang) : [];
    list = Array.isArray(list) ? list.slice() : [];
    list = list.filter(function(entry){
      return entry && entry.date !== "2026-04-13";
    });
    list.unshift(buildUpdateEntry(lang));
    return list;
  };

  function renderUpdateHistoryPatched(){
    var data = window.getUpdateHistoryEntries(typeof currentLang !== "undefined" ? currentLang : "en");
    var title = (typeof t === "function") ? t("updates.title") : "Update History";
    var desc = (typeof t === "function") ? t("updates.desc") : "";
    var metaCat = (typeof t === "function") ? t("nav.updates") : "Update History";

    var html = '<div class="lc-header">'
      + '<div class="lc-meta"><span class="meta-pill">U</span><span class="meta-cat">' + metaCat + '</span></div>'
      + '<h1 class="lc-title">' + title + '</h1>'
      + '<p class="lc-intro">' + desc + '</p>'
      + '</div>'
      + '<div class="update-timeline">';

    data.forEach(function(entry, idx){
      html += '<div class="update-entry">'
        + '<div class="update-dot-col"><div class="update-dot"></div>'
        + (idx < data.length - 1 ? '<div class="update-line"></div>' : '')
        + '</div>'
        + '<div class="update-card">'
        + '<div class="update-date">' + entry.date + '</div>'
        + '<div class="update-card-title">' + entry.title + '</div>'
        + '<ul class="update-items">';
      (entry.items || []).forEach(function(item){
        html += '<li>' + item + '</li>';
      });
      html += '</ul></div></div>';
    });

    html += '</div>';
    return html;
  }

  window.renderUpdateHistory = renderUpdateHistoryPatched;

  function refreshUpdatePanels(){
    if(typeof document === "undefined") return;
    var panel = document.getElementById("updatesPanel");
    if(panel){
      panel.innerHTML = renderUpdateHistoryPatched();
    }
  }

  function wrapRefresh(name){
    var original = window[name];
    if(typeof original !== "function" || original.__updateHistory20260413Wrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      refreshUpdatePanels();
      return result;
    };
    wrapped.__updateHistory20260413Wrapped = true;
    window[name] = wrapped;
  }

  wrapRefresh("renderAllLessons");
  wrapRefresh("setLang");
  wrapRefresh("showPage");
  refreshUpdatePanels();

  if(typeof currentPage !== "undefined" && (currentPage === "home" || currentPage === "updates") && typeof showPage === "function"){
    showPage(currentPage);
  }
})();