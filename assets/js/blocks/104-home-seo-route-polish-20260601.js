(function () {
  if (window.__homeSeoRoutePolish20260601) return;
  window.__homeSeoRoutePolish20260601 = true;

  var COPY = {
    en: {
      title: "Coin ProofPath",
      intro: "A safer crypto learning path for beginners",
      desc: "A free crypto education site that helps beginners learn coins, wallets, exchanges, fees, bridges, seed phrases, and verification routines step by step.",
      start: "Start Learning",
      safety: "View Safety Guide",
      note: "Not investment advice - a learning tool for checking, understanding, and verifying before you act."
    },
    ko: {
      title: "Coin ProofPath",
      intro: "초보자를 위한 안전한 크립토 학습 여정",
      desc: "코인, 지갑, 거래소, 수수료, 브리지, 시드 문구, 정보 검증까지 처음부터 안전하게 배울 수 있도록 정리한 무료 크립토 교육 사이트입니다.",
      start: "학습 시작하기",
      safety: "안전 가이드 보기",
      note: "투자 추천이 아니라, 스스로 확인하고 판단하기 위한 학습 도구입니다."
    }
  };

  function locale() {
    return String(
      window.currentLang ||
        window.currentLocale ||
        document.documentElement.getAttribute("lang") ||
        "en"
    ).toLowerCase();
  }

  function pack() {
    return COPY[locale()] || COPY.en;
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[ch];
    });
  }

  function introHtml() {
    var p = pack();
    return [
      '<section class="cpp-intro-hero" data-cpp-intro-hero>',
        '<div class="cpp-intro-copy">',
          '<span class="cpp-intro-kicker">' + esc(p.title) + '</span>',
          '<h1>' + esc(p.intro) + '</h1>',
          '<p class="cpp-intro-desc">' + esc(p.desc) + '</p>',
          '<div class="cpp-intro-actions">',
            '<button type="button" class="cpp-intro-btn is-primary" data-cpp-open-page="start">' + esc(p.start) + '</button>',
            '<button type="button" class="cpp-intro-btn" data-cpp-open-page="safety">' + esc(p.safety) + '</button>',
          '</div>',
          '<p class="cpp-intro-note">' + esc(p.note) + '</p>',
        '</div>',
      '</section>'
    ].join("");
  }

  function ensureStyles() {
    if (document.getElementById("homeSeoRoutePolish20260601Styles")) return;
    var style = document.createElement("style");
    style.id = "homeSeoRoutePolish20260601Styles";
    style.textContent = [
      ".cpp-intro-hero{margin:0 0 18px;padding:24px 26px;border:1px solid rgba(15,23,42,.08);border-radius:24px;background:linear-gradient(135deg,rgba(255,255,255,.96),rgba(236,244,255,.92));box-shadow:0 16px 40px rgba(15,23,42,.08);}",
      ".cpp-intro-copy{max-width:860px;}",
      ".cpp-intro-kicker{display:inline-flex;align-items:center;margin-bottom:10px;color:#a16207;font-size:.78rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;}",
      ".cpp-intro-hero h1{margin:0;color:var(--text,#172033);font-size:clamp(2rem,4vw,3.5rem);line-height:1.06;letter-spacing:-.04em;word-break:keep-all;overflow-wrap:break-word;}",
      ".cpp-intro-desc{margin:14px 0 0;max-width:760px;color:var(--text-2,#586b83);font-size:1rem;line-height:1.72;word-break:keep-all;overflow-wrap:break-word;}",
      ".cpp-intro-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px;}",
      ".cpp-intro-btn{min-height:42px;padding:10px 16px;border:1px solid rgba(15,23,42,.12);border-radius:999px;background:#fff;color:#172033;font-weight:850;cursor:pointer;box-shadow:0 8px 18px rgba(15,23,42,.06);}",
      ".cpp-intro-btn.is-primary{background:#13243c;color:#fff;border-color:#13243c;}",
      ".cpp-intro-note{margin:12px 0 0;color:#6b7280;font-size:.9rem;line-height:1.6;word-break:keep-all;overflow-wrap:break-word;}",
      "@media (max-width:640px){.cpp-intro-hero{padding:20px 18px;border-radius:20px}.cpp-intro-actions{display:grid;grid-template-columns:1fr;gap:8px}.cpp-intro-btn{width:100%;min-height:44px}#topbar .lang-toggle,.lang-toggle{height:auto!important;min-height:44px!important;padding:10px 12px!important;font-size:14px!important;border-radius:14px!important}.lang-menu{gap:8px}.lang-menu .lang-item,.lang-item{min-height:44px!important;padding:10px 12px!important;font-size:14px!important;border-radius:14px!important}}"
    ].join("");
    document.head.appendChild(style);
  }

  function ensureIntro() {
    ensureStyles();
    var panel = document.getElementById("homePanel");
    if (!panel) return;
    var existing = panel.querySelector("[data-cpp-intro-hero]");
    if (existing) existing.remove();
    panel.insertAdjacentHTML("afterbegin", introHtml());
  }

  function bindIntroActions() {
    document.addEventListener("click", function (event) {
      var button = event.target && event.target.closest
        ? event.target.closest("[data-cpp-open-page]")
        : null;
      if (!button) return;
      var page = button.getAttribute("data-cpp-open-page");
      if (!page) return;
      event.preventDefault();
      if (typeof window.showSectionInstant === "function") window.showSectionInstant(page);
      else if (typeof window.showPage === "function") window.showPage(page);
    });
  }

  function setMeta(selector, value, attribute) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.setAttribute(attribute || "content", value);
  }

  function syncHomeSeoMeta() {
    var active = document.querySelector(".page-content.active, .lesson-content.active");
    var isHome = !active || active.id === "homePanel";
    try {
      isHome = isHome || (typeof currentPage === "string" && currentPage === "home");
    } catch (error) {}
    if (!isHome) return;

    document.title = "Coin ProofPath | Learn Crypto Safely";
    setMeta(
      'meta[name="description"]',
      "Coin ProofPath is a free crypto education site for beginners. Learn wallets, exchanges, fees, bridges, seed phrases, safety checks, and verification routines before you act."
    );
    setMeta('meta[property="og:title"]', "Coin ProofPath | Learn Crypto Safely");
    setMeta('meta[property="og:description"]', "A safer crypto learning path for beginners. Learn first, verify always.");
    setMeta('meta[name="twitter:title"]', "Coin ProofPath | Learn Crypto Safely");
    setMeta('meta[name="twitter:description"]', "A safer crypto learning path for beginners. Learn first, verify always.");
  }

  function scheduleHomeSeoMeta() {
    syncHomeSeoMeta();
    setTimeout(syncHomeSeoMeta, 0);
    setTimeout(syncHomeSeoMeta, 180);
  }

  function wrapRenderHome() {
    var original = window.renderHome;
    if (typeof original !== "function" || original.__cppIntroWrapped) return;

    var wrapped = function () {
      var html = original.apply(this, arguments);
      if (typeof html !== "string") return html;
      if (html.indexOf("data-cpp-intro-hero") !== -1) return html;
      return introHtml() + html;
    };

    wrapped.__cppIntroWrapped = true;
    wrapped.__cppIntroOriginal = original;
    window.renderHome = wrapped;
    try {
      renderHome = wrapped;
    } catch (error) {}
  }

  function wrapAfter(name, after) {
    var original = window[name];
    if (typeof original !== "function" || original["__cppAfter" + name]) return;

    var wrapped = function () {
      var result = original.apply(this, arguments);
      after();
      return result;
    };

    wrapped["__cppAfter" + name] = true;
    wrapped.__cppOriginal = original;
    window[name] = wrapped;
    try {
      if (name === "setLang") setLang = wrapped;
      if (name === "renderAllLessons") renderAllLessons = wrapped;
      if (name === "showPage") showPage = wrapped;
    } catch (error) {}
  }

  function parseLessonHash() {
    var hash = String(window.location.hash || "");
    var match = hash.match(/^#lesson-?(\d+)$/i);
    if (!match) return null;
    var number = parseInt(match[1], 10);
    return isFinite(number) && number > 0 ? number - 1 : null;
  }

  function applyDirectLessonHash() {
    var hash = String(window.location.hash || "");
    if (hash === "#lessons") {
      if (typeof window.showSectionInstant === "function") window.showSectionInstant("start");
      else if (typeof window.showPage === "function") window.showPage("start");
      return;
    }

    var index = parseLessonHash();
    if (index === null) return;
    if (typeof window.showLesson === "function") {
      window.showLesson(index);
    }
  }

  function install() {
    ensureStyles();
    wrapRenderHome();
    wrapAfter("renderAllLessons", ensureIntro);
    wrapAfter("setLang", function () {
      ensureIntro();
      scheduleHomeSeoMeta();
    });
    wrapAfter("showPage", function () {
      if (String((typeof currentPage !== "undefined" && currentPage) || window.currentPage || "") === "home") {
        ensureIntro();
        scheduleHomeSeoMeta();
      }
    });
    ensureIntro();
    scheduleHomeSeoMeta();
    bindIntroActions();
    window.addEventListener("hashchange", applyDirectLessonHash);
    setTimeout(applyDirectLessonHash, 0);
    setTimeout(applyDirectLessonHash, 160);
    setTimeout(applyDirectLessonHash, 420);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }
})();
