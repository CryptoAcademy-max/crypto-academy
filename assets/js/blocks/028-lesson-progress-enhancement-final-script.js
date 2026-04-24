(function(){
  if(window.__lessonProgressEnhancementFinal) return;
  window.__lessonProgressEnhancementFinal = true;

  var TOTAL_LESSONS = (typeof getTotalLessons === 'function') ? getTotalLessons() : 5;

  function getCompletedSetFinal(){
    if(typeof completed !== 'undefined' && completed && typeof completed.has === 'function') return completed;
    try{
      return new Set(JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]'));
    }catch(err){
      return new Set();
    }
  }

  function getLessonPanelFinal(index){
    return document.getElementById('lesson' + index);
  }

  function getLessonTitleFinal(index){
    var panel = getLessonPanelFinal(index);
    var titleEl = panel ? panel.querySelector('.lc-title') : null;
    if(titleEl && titleEl.textContent) return titleEl.textContent.trim();
    return '';
  }

  function getLessonProgressLineFinal(index){
    var prefix = typeof t === 'function' ? t('breadcrumb.prefix') : 'Lesson';
    var title = getLessonTitleFinal(index);
    return prefix + ' ' + (index + 1) + '/' + TOTAL_LESSONS + (title ? ' - ' + title : '');
  }

  function getNextIncompleteLessonFinal(doneSet){
    for(var i = 0; i < TOTAL_LESSONS; i++){
      if(!doneSet.has(i)) return i;
    }
    return -1;
  }

  function ensureLessonPositionBannersFinal(doneSet){
    for(var i = 0; i < TOTAL_LESSONS; i++){
      var panel = getLessonPanelFinal(i);
      if(!panel) continue;
      var header = panel.querySelector('.lc-header');
      if(!header) continue;

      var banner = header.querySelector('.lesson-progress-banner');
      if(!banner){
        banner = document.createElement('div');
        banner.className = 'lesson-progress-banner';
        banner.innerHTML = '<div class="lesson-progress-text"></div><div class="lesson-progress-state"></div>';
        var meta = header.querySelector('.lc-meta');
        if(meta && meta.nextSibling){
          header.insertBefore(banner, meta.nextSibling);
        } else if(meta){
          meta.insertAdjacentElement('afterend', banner);
        } else {
          header.insertBefore(banner, header.firstChild);
        }
      }

      banner.classList.toggle('is-complete', doneSet.has(i));
      var text = banner.querySelector('.lesson-progress-text');
      var state = banner.querySelector('.lesson-progress-state');
      if(text) text.textContent = getLessonProgressLineFinal(i);
      if(state) state.textContent = (typeof t === 'function' ? t('btn.completed') : 'Completed');
    }
  }

  function ensureSidebarProgressStateFinal(doneSet){
    document.querySelectorAll('.lesson-nav-item[data-lesson]').forEach(function(item, idx){
      var isComplete = doneSet.has(idx);
      item.classList.toggle('progress-complete', isComplete);

      var badge = item.querySelector('.lesson-nav-status');
      if(!badge){
        badge = document.createElement('span');
        badge.className = 'lesson-nav-status';
        badge.setAttribute('aria-hidden', 'true');
        badge.textContent = '✓';
        item.appendChild(badge);
      }
      badge.style.display = isComplete ? 'inline-flex' : 'none';
      badge.title = isComplete ? (typeof t === 'function' ? t('btn.completed') : 'Completed') : '';
    });
  }

  function ensureHomeProgressCardFinal(doneSet){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;

    var card = hero.querySelector('.home-progress-card');
    if(!card){
      card = document.createElement('div');
      card.className = 'home-progress-card';
      var desc = hero.querySelector('.home-desc');
      if(desc){
        desc.insertAdjacentElement('afterend', card);
      } else {
        hero.insertBefore(card, hero.firstChild);
      }
    }

    var nextIndex = getNextIncompleteLessonFinal(doneSet);
    var noteText = nextIndex === -1
      ? (typeof t === 'function' ? t('btn.completed') : 'Completed')
      : getLessonProgressLineFinal(nextIndex);

    var dots = '';
    for(var i = 0; i < TOTAL_LESSONS; i++){
      var cls = 'home-progress-dot';
      if(doneSet.has(i)) cls += ' done';
      else if(typeof currentLesson !== 'undefined' && currentPage === ('lesson' + i)) cls += ' active';
      dots += '<span class="' + cls + '"></span>';
    }

    card.innerHTML = ''
      + '<div class="home-progress-count">' + doneSet.size + ' / ' + TOTAL_LESSONS + ' ' + (typeof t === 'function' ? t('progress.done') : 'completed') + '</div>'
      + '<div class="home-progress-dots">' + dots + '</div>'
      + '<div class="home-progress-note">' + noteText + '</div>';
  }

  function getLessonToastFinal(index){
    var panel = getLessonPanelFinal(index);
    if(!panel) return null;
    var toast = panel.querySelector('.lesson-complete-toast');
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'lesson-complete-toast';
      toast.hidden = true;
      var row = panel.querySelector('.complete-row');
      if(row) row.insertAdjacentElement('afterend', toast);
      else panel.appendChild(toast);
    }
    return toast;
  }

  function showLessonToastFinal(index){
    var toast = getLessonToastFinal(index);
    if(!toast) return;
    toast.textContent = (typeof t === 'function' ? t('btn.completed') : 'Completed') + ': ' + getLessonProgressLineFinal(index);
    toast.hidden = false;
    clearTimeout(toast.__hideTimer);
    toast.__hideTimer = setTimeout(function(){
      toast.hidden = true;
    }, 2600);
  }

  function hideLessonToastFinal(index){
    var toast = getLessonToastFinal(index);
    if(!toast) return;
    clearTimeout(toast.__hideTimer);
    toast.hidden = true;
  }

  function syncLearningProgressUiFinal(){
    var doneSet = getCompletedSetFinal();
    ensureLessonPositionBannersFinal(doneSet);
    ensureSidebarProgressStateFinal(doneSet);
    ensureHomeProgressCardFinal(doneSet);
  }

  function wrapProgressFunctionFinal(name, afterFn){
    var original = window[name];
    if(typeof original !== 'function' || original.__lessonProgressFinalWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      afterFn.apply(this, arguments);
      return result;
    };
    wrapped.__lessonProgressFinalWrapped = true;
    window[name] = wrapped;
  }

  wrapProgressFunctionFinal('renderAllLessons', function(){
    syncLearningProgressUiFinal();
  });

  wrapProgressFunctionFinal('showLesson', function(){
    syncLearningProgressUiFinal();
  });

  wrapProgressFunctionFinal('showPage', function(){
    syncLearningProgressUiFinal();
  });

  wrapProgressFunctionFinal('setLang', function(){
    syncLearningProgressUiFinal();
  });

  wrapProgressFunctionFinal('updateProgress', function(){
    syncLearningProgressUiFinal();
  });

  var originalToggleCompleteFinal = window.toggleComplete;
  if(typeof originalToggleCompleteFinal === 'function' && !originalToggleCompleteFinal.__lessonProgressFinalWrapped){
    var wrappedToggleCompleteFinal = function(i, btn){
      var doneSet = getCompletedSetFinal();
      var wasComplete = doneSet.has(i);
      var result = originalToggleCompleteFinal.apply(this, arguments);
      var isComplete = getCompletedSetFinal().has(i);
      syncLearningProgressUiFinal();
      if(!wasComplete && isComplete) showLessonToastFinal(i);
      else hideLessonToastFinal(i);
      return result;
    };
    wrappedToggleCompleteFinal.__lessonProgressFinalWrapped = true;
    window.toggleComplete = wrappedToggleCompleteFinal;
  }

  syncLearningProgressUiFinal();
})();