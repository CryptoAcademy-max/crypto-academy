(function () {
  if (window.__menuNavigationPerformance20260601) return;
  window.__menuNavigationPerformance20260601 = true;

  var sectionHtmlCache = Object.create(null);
  var sectionCacheVersion = 0;
  var lazyImageTimer = null;
  var instantNavigationInstalled = false;

  function getLocale() {
    return String(
      window.currentLang ||
        window.currentLocale ||
        document.documentElement.getAttribute("lang") ||
        "ko"
    ).toLowerCase();
  }

  function getPanelForPage(page) {
    if (!page) return null;
    return document.getElementById(page + "Panel") || document.getElementById(page);
  }

  function getActivePanelId() {
    var active = document.querySelector(".page-content.active, .lesson-content.active");
    return active ? active.id : null;
  }

  function getCurrentPageSafe() {
    try {
      if (typeof currentPage === "string" && currentPage) return currentPage;
    } catch (error) {}
    return typeof window.currentPage === "string" ? window.currentPage : "";
  }

  function invalidateSectionRenderCache() {
    sectionHtmlCache = Object.create(null);
    sectionCacheVersion += 1;
  }

  function cacheRenderer(name) {
    var original = window[name];
    if (typeof original !== "function" || original.__menuPerfCached) return;

    var wrapped = function () {
      var key = name + "::" + getLocale() + "::" + sectionCacheVersion;
      if (Object.prototype.hasOwnProperty.call(sectionHtmlCache, key)) {
        return sectionHtmlCache[key];
      }

      var html = original.apply(this, arguments);
      if (typeof html === "string") {
        sectionHtmlCache[key] = html;
      }
      return html;
    };

    wrapped.__menuPerfCached = true;
    wrapped.__menuPerfOriginal = original;
    window[name] = wrapped;
  }

  function cacheStableSectionRenderers() {
    [
      "renderFAQPage",
      "renderSafetyPage",
      "renderGlossary",
      "renderSources",
      "renderUpdateHistory"
    ].forEach(cacheRenderer);
  }

  function applyLazyImages(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var images = scope.querySelectorAll("img");

    images.forEach(function (img) {
      if (!img.hasAttribute("loading") && !img.hasAttribute("data-eager")) {
        img.setAttribute("loading", "lazy");
      }
      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    });
  }

  function scheduleLazyImages(root) {
    clearTimeout(lazyImageTimer);
    lazyImageTimer = setTimeout(function () {
      applyLazyImages(root || document);
    }, 40);
  }

  function isSameVisiblePage(page) {
    var panel = getPanelForPage(page);
    return Boolean(
      page &&
        getCurrentPageSafe() === page &&
        panel &&
        panel.classList.contains("active")
    );
  }

  function closeSidebarOnly() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.remove("open");
  }

  function withInstantScroll(callback) {
    var nativeScrollTo = window.scrollTo;
    var nativeScrollIntoView = window.Element && window.Element.prototype
      ? window.Element.prototype.scrollIntoView
      : null;

    window.scrollTo = function (x, y) {
      if (typeof nativeScrollTo !== "function") return;
      if (typeof x === "object" && x) {
        return nativeScrollTo.call(window, {
          top: typeof x.top === "number" ? x.top : 0,
          left: typeof x.left === "number" ? x.left : 0,
          behavior: "auto"
        });
      }
      return nativeScrollTo.call(window, x || 0, y || 0);
    };

    if (nativeScrollIntoView) {
      window.Element.prototype.scrollIntoView = function (options) {
        if (options && typeof options === "object") {
          return nativeScrollIntoView.call(this, {
            block: options.block || "start",
            inline: options.inline || "nearest",
            behavior: "auto"
          });
        }
        return nativeScrollIntoView.call(this, options);
      };
    }

    try {
      return callback();
    } finally {
      window.scrollTo = nativeScrollTo;
      if (nativeScrollIntoView) {
        window.Element.prototype.scrollIntoView = nativeScrollIntoView;
      }
    }
  }

  function updateRouteWithoutJump(link, fallback) {
    if (!window.history || typeof window.history.replaceState !== "function") return;
    var route = fallback;
    if (!route) return;

    try {
      window.history.replaceState(null, "", route);
    } catch (error) {}
  }

  function wrapShowPage() {
    var original = window.showPage;
    if (typeof original !== "function" || original.__menuPerfWrapped) return;

    var wrapped = function (page) {
      if (isSameVisiblePage(page)) {
        closeSidebarOnly();
        if (typeof window.updateActiveSidebar === "function") window.updateActiveSidebar();
        if (typeof window.updateBreadcrumb === "function") window.updateBreadcrumb();
        if (typeof window.updateProgress === "function") window.updateProgress();
        scheduleLazyImages(getPanelForPage(page));
        return page;
      }

      var args = arguments;
      var result = withInstantScroll(function () {
        return original.apply(window, args);
      });
      scheduleLazyImages(getPanelForPage(page));
      return result;
    };

    wrapped.__menuPerfWrapped = true;
    wrapped.__menuPerfOriginal = original;
    window.showPage = wrapped;
  }

  function wrapShowLesson() {
    var original = window.showLesson;
    if (typeof original !== "function" || original.__menuPerfWrapped) return;
    var baseShowLesson = original.__caLessonRouteWrapped && original.__caOriginal
      ? original.__caOriginal
      : original;

    var wrapped = function (lessonId) {
      var id = "lesson" + lessonId;
      var panel = document.getElementById(id);
      if (
        panel &&
        panel.classList.contains("active") &&
        getCurrentPageSafe() === id
      ) {
        closeSidebarOnly();
        scheduleLazyImages(panel);
        return lessonId;
      }

      var result = withInstantScroll(function () {
        return baseShowLesson.apply(window, [lessonId]);
      });
      scheduleLazyImages(panel || document.getElementById(id));
      return result;
    };

    wrapped.__menuPerfWrapped = true;
    wrapped.__menuPerfOriginal = original;
    window.showLesson = wrapped;
  }

  function wrapInstantScrollPageFunction(name) {
    var original = window[name];
    if (typeof original !== "function" || original.__menuPerfInstantScrollWrapped) return;

    var wrapped = function () {
      var args = arguments;
      var result = withInstantScroll(function () {
        return original.apply(window, args);
      });
      scheduleLazyImages(document);
      return result;
    };

    wrapped.__menuPerfInstantScrollWrapped = true;
    wrapped.__menuPerfOriginal = original;
    window[name] = wrapped;
  }

  function showSectionInstant(sectionId) {
    var value = String(sectionId || "").trim();
    if (!value) return false;

    var lessonMatch = value.match(/^lesson(\d+)$/i);
    if (lessonMatch) {
      var lessonNumber = parseInt(lessonMatch[1], 10);
      if (isFinite(lessonNumber)) {
        var index = lessonNumber > 0 ? lessonNumber - 1 : lessonNumber;
        if (typeof window.showLesson === "function") {
          window.showLesson(index);
          return true;
        }
      }
      return false;
    }

    if (typeof window.showPage === "function") {
      window.showPage(value);
      return true;
    }

    return false;
  }

  function readRouteTarget(link) {
    if (!link || !link.getAttribute) return null;

    var page = link.getAttribute("data-route-page") || link.getAttribute("data-page");
    if (page) return { type: "page", page: page };

    var rawLesson = link.getAttribute("data-route-lesson") || link.getAttribute("data-lesson");
    if (rawLesson !== null && rawLesson !== "") {
      var lessonIndex = parseInt(rawLesson, 10);
      if (isFinite(lessonIndex)) return { type: "lesson", lessonIndex: lessonIndex };
    }

    return null;
  }

  function installInstantNavigationClick() {
    if (instantNavigationInstalled) return;
    instantNavigationInstalled = true;

    document.addEventListener("click", function (event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      var link = event.target && event.target.closest
        ? event.target.closest(
            "a[data-route-page], a[data-route-lesson], #sidebar .lesson-nav-item[data-page], #sidebar .lesson-nav-item[data-lesson]"
          )
        : null;
      if (!link) return;

      var target = readRouteTarget(link);
      if (!target) return;

      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === "function") {
        event.stopImmediatePropagation();
      }

      if (target.type === "lesson") {
        if (typeof window.showLesson === "function") window.showLesson(target.lessonIndex);
        updateRouteWithoutJump(link, "#lesson" + (target.lessonIndex + 1));
        return;
      }

      if (target.type === "page") {
        if (typeof window.showPage === "function") window.showPage(target.page);
        updateRouteWithoutJump(link, "#" + target.page);
      }
    }, true);
  }

  function wrapSetLang() {
    var original = window.setLang;
    if (typeof original !== "function" || original.__menuPerfWrapped) return;

    var wrapped = function () {
      invalidateSectionRenderCache();
      var result = original.apply(this, arguments);
      scheduleLazyImages(document);
      return result;
    };

    wrapped.__menuPerfWrapped = true;
    wrapped.__menuPerfOriginal = original;
    window.setLang = wrapped;
  }

  function wrapSyncSearchLocale() {
    var original = window.syncSearchLocale;
    if (typeof original !== "function" || original.__menuPerfWrapped) return;

    var lastKey = "";
    var lastRun = 0;
    var wrapped = function () {
      var overlay = document.getElementById("searchOverlay");
      var overlayOpen = Boolean(overlay && overlay.classList.contains("active"));
      var inputCount = document.querySelectorAll(
        "input[data-search-input], input[type='search'], input.search-input, #searchInput"
      ).length;
      var key = getLocale() + "::" + (overlayOpen ? "open" : "closed") + "::" + inputCount;
      var now = performance.now();

      if (!overlayOpen && key === lastKey && now - lastRun < 160) {
        return;
      }

      lastKey = key;
      lastRun = now;
      return original.apply(this, arguments);
    };

    wrapped.__menuPerfWrapped = true;
    wrapped.__menuPerfOriginal = original;
    window.syncSearchLocale = wrapped;
  }

  function narrowSearchLocaleObserver() {
    var bodyObserver = document.body && document.body.__referenceSearchSyncObserver;
    if (bodyObserver && typeof bodyObserver.disconnect === "function") {
      bodyObserver.disconnect();
      document.body.__referenceSearchSyncObserver = null;
    }

    var finalPlaceholderObserver = document.body && document.body.__searchTextOverlapFinalObserver;
    if (finalPlaceholderObserver && typeof finalPlaceholderObserver.disconnect === "function") {
      finalPlaceholderObserver.disconnect();
      document.body.__searchTextOverlapFinalObserver = null;
    }

    var overlay = document.getElementById("searchOverlay");
    if (!overlay || overlay.__menuPerfSearchObserver || typeof MutationObserver === "undefined") {
      return;
    }

    var pending = false;
    overlay.__menuPerfSearchObserver = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () {
        pending = false;
        if (typeof window.syncSearchLocale === "function") {
          window.syncSearchLocale();
        }
      }, 100);
    });

    overlay.__menuPerfSearchObserver.observe(overlay, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "placeholder", "aria-label", "title"]
    });
  }

  function installDebugHelpers() {
    window.debugMenuNavigationPerformance = async function (sectionId) {
      var start = performance.now();
      var before = getActivePanelId();

      if (/^lesson\d+$/i.test(String(sectionId))) {
        var lessonNumber = String(sectionId).replace(/lesson/i, "");
        if (typeof window.showLesson === "function") window.showLesson(lessonNumber);
      } else if (typeof window.showPage === "function") {
        window.showPage(sectionId);
      }

      await new Promise(function (resolve) {
        requestAnimationFrame(resolve);
      });

      var end = performance.now();
      return {
        sectionId: sectionId,
        activeBefore: before,
        activeAfter: getActivePanelId(),
        totalMs: Math.round((end - start) * 10) / 10
      };
    };

    window.debugSectionSwitchPerformance = async function (sectionId) {
      var start = performance.now();

      showSectionInstant(sectionId);

      await new Promise(function (resolve) {
        requestAnimationFrame(resolve);
      });

      return {
        sectionId: sectionId,
        totalMs: Math.round((performance.now() - start) * 10) / 10,
        activeSection: getActivePanelId()
      };
    };

    window.debugMenuNavigationBatch = async function (sections) {
      var list = sections || [
        "home",
        "start",
        "lessons",
        "glossary",
        "sources",
        "faq",
        "safety",
        "updates",
        "partner",
        "pitch"
      ];
      var results = [];

      for (var i = 0; i < list.length; i += 1) {
        results.push(await window.debugMenuNavigationPerformance(list[i]));
      }

      var total = results.reduce(function (sum, item) {
        return sum + item.totalMs;
      }, 0);

      return {
        averageMs: Math.round((total / Math.max(results.length, 1)) * 10) / 10,
        results: results
      };
    };
  }

  function install() {
    cacheStableSectionRenderers();
    wrapShowPage();
    wrapShowLesson();
    wrapSetLang();
    wrapSyncSearchLocale();
    wrapInstantScrollPageFunction("showPartnerPage");
    wrapInstantScrollPageFunction("showPitchPage");
    wrapInstantScrollPageFunction("showAboutMissionPage");
    wrapInstantScrollPageFunction("showSupportWallPage");
    installInstantNavigationClick();
    narrowSearchLocaleObserver();
    installDebugHelpers();
    scheduleLazyImages(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", install, { once: true });
  } else {
    install();
  }

  window.invalidateSectionRenderCache = invalidateSectionRenderCache;
  window.showSectionInstant = showSectionInstant;
})();
