(function(){
  if(typeof window === 'undefined' || typeof document === 'undefined' || window.__homeRepairReadability20260515) return;
  window.__homeRepairReadability20260515 = true;

  function qsa(root, selector){
    if(!root || !root.querySelectorAll) return [];
    return Array.prototype.slice.call(root.querySelectorAll(selector));
  }

  function removeOldLanguageNotice(){
    qsa(document, '#homePanel .lang-notice, #langNotice').forEach(function(node){
      if(node && node.parentNode) node.parentNode.removeChild(node);
    });
  }

  function roadmapLabel(direction){
    var lang = (typeof currentLang === 'string' ? currentLang : 'en').toLowerCase();
    var ko = lang.indexOf('ko') === 0;
    if(direction < 0) return ko ? '이전 로드맵 카드 보기' : 'Previous roadmap cards';
    return ko ? '다음 로드맵 카드 보기' : 'Next roadmap cards';
  }

  function createRoadmapButton(direction){
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'roadmap-scroll-btn ' + (direction < 0 ? 'is-prev' : 'is-next');
    button.setAttribute('aria-label', roadmapLabel(direction));
    button.innerHTML = direction < 0
      ? '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9.5 6 6 6-6 6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return button;
  }

  function scrollStep(grid){
    if(!grid) return 260;
    var card = grid.querySelector('.roadmap-card, .intermediate-roadmap-card');
    var base = Math.max(Math.round(grid.clientWidth * 0.78), 240);
    if(!card || typeof getComputedStyle !== 'function') return base;
    var styles = getComputedStyle(grid);
    var gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return Math.max(Math.round(card.getBoundingClientRect().width + gap), 240);
  }

  function updateRoadmapControls(shell, grid){
    if(!shell || !grid) return;
    var max = Math.max(0, grid.scrollWidth - grid.clientWidth);
    var left = Math.max(0, grid.scrollLeft || 0);
    var atStart = left <= 2;
    var atEnd = left >= max - 2;
    shell.classList.toggle('is-start', atStart);
    shell.classList.toggle('is-end', atEnd);
    shell.classList.toggle('has-scroll', max > 4);
    var prev = shell.querySelector('.roadmap-scroll-btn.is-prev');
    var next = shell.querySelector('.roadmap-scroll-btn.is-next');
    if(prev) prev.disabled = atStart || max <= 4;
    if(next) next.disabled = atEnd || max <= 4;
    var thumb = shell.querySelector('.roadmap-scroll-thumb');
    if(thumb){
      var width = max <= 4 ? 100 : Math.max(18, Math.min(100, grid.clientWidth / grid.scrollWidth * 100));
      var x = max <= 4 ? 0 : (left / max) * (100 - width);
      thumb.style.width = width + '%';
      thumb.style.transform = 'translateX(' + x + '%)';
    }
  }

  function ensureRoadmapControls(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    qsa(panel, '.roadmap-section').forEach(function(section){
      var grid = section.querySelector('.roadmap-grid');
      if(!grid) return;
      var shell = grid.closest('.roadmap-shell');
      if(!shell){
        shell = document.createElement('div');
        shell.className = 'roadmap-shell is-start';
        grid.parentNode.insertBefore(shell, grid);
        shell.appendChild(grid);
      }
      grid.setAttribute('tabindex', '0');

      var prev = shell.querySelector('.roadmap-scroll-btn.is-prev');
      if(!prev){
        prev = createRoadmapButton(-1);
        shell.insertBefore(prev, shell.firstChild);
      }
      prev.setAttribute('aria-label', roadmapLabel(-1));

      var next = shell.querySelector('.roadmap-scroll-btn.is-next');
      if(!next){
        next = createRoadmapButton(1);
        shell.appendChild(next);
      }
      next.setAttribute('aria-label', roadmapLabel(1));

      var track = shell.querySelector('.roadmap-scroll-track');
      if(!track){
        track = document.createElement('div');
        track.className = 'roadmap-scroll-track';
        track.setAttribute('aria-hidden', 'true');
        track.innerHTML = '<span class="roadmap-scroll-thumb"></span>';
        shell.appendChild(track);
      }

      if(!shell.__homeRepairRoadmapBound){
        prev.addEventListener('click', function(){
          grid.scrollBy({ left:-scrollStep(grid), behavior:'smooth' });
        });
        next.addEventListener('click', function(){
          grid.scrollBy({ left:scrollStep(grid), behavior:'smooth' });
        });
        grid.addEventListener('scroll', function(){
          updateRoadmapControls(shell, grid);
        }, { passive:true });
        grid.addEventListener('keydown', function(event){
          if(event.key === 'ArrowLeft'){
            grid.scrollBy({ left:-scrollStep(grid), behavior:'smooth' });
            event.preventDefault();
          } else if(event.key === 'ArrowRight'){
            grid.scrollBy({ left:scrollStep(grid), behavior:'smooth' });
            event.preventDefault();
          }
        });
        shell.__homeRepairRoadmapBound = true;
      }
      updateRoadmapControls(shell, grid);
      if(typeof requestAnimationFrame === 'function'){
        requestAnimationFrame(function(){ updateRoadmapControls(shell, grid); });
      }
    });
  }

  function runRepair(){
    removeOldLanguageNotice();
    ensureRoadmapControls();
  }

  function scheduleRepair(){
    runRepair();
    setTimeout(runRepair, 80);
    setTimeout(runRepair, 320);
    setTimeout(runRepair, 900);
  }

  function wrap(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeRepairReadabilityWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      scheduleRepair();
      return result;
    };
    wrapped.__homeRepairReadabilityWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  wrap('renderHome');
  wrap('renderAllLessons');
  wrap('showPage');
  wrap('setLang');

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', scheduleRepair, { once:true });
  }else{
    scheduleRepair();
  }

  window.addEventListener('resize', function(){
    setTimeout(ensureRoadmapControls, 80);
  }, { passive:true });
})();
