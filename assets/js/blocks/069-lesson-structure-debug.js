(function(){
  'use strict';

  if(typeof window === 'undefined' || window.__caLessonStructureDebugReady) return;
  window.__caLessonStructureDebugReady = true;

  var FILE_MAP = {
    lesson7: [
      'assets/js/blocks/003-inline-script-1.js',
      'assets/js/blocks/035-lesson-seven-final.js',
      'assets/css/base.css'
    ],
    lesson8: [
      'assets/js/blocks/003-inline-script-1.js',
      'assets/js/blocks/068-intermediate-action-track-20260513.js',
      'assets/css/base.css'
    ],
    loader: [
      'index.html',
      'assets/js/site-core.js'
    ]
  };

  var BLOCKS = [
    {
      key: 'hero',
      label: 'top hero/header',
      selectors: ['.page-hero-shell', '.lc-header']
    },
    {
      key: 'summary',
      label: 'one-line key summary',
      selectors: ['.lesson-body > .callout.info', '.callout.info']
    },
    {
      key: 'firstVisual',
      label: 'first visual/card strip',
      selectors: ['.lesson-body > .visual', '.lesson-body > .lesson-guide-panel', '.visual.lesson-guide-panel']
    },
    {
      key: 'topGuide',
      label: 'guided visual top block',
      selectors: ['.lesson-body > .lesson-guide-stack:not(.lesson-guide-stack-lower)', '.lesson-guide-stack:not(.lesson-guide-stack-lower)']
    },
    {
      key: 'firstSection',
      label: 'first body section and card row',
      virtual: 'firstSection'
    },
    {
      key: 'lowerGuide',
      label: 'lower guided/practice block',
      selectors: ['.lesson-body > .lesson-guide-stack-lower', '.lesson-guide-stack-lower']
    },
    {
      key: 'relatedBlock',
      label: 'related CTA/resources block',
      virtual: 'relatedBlock'
    },
    {
      key: 'completeRow',
      label: 'completion CTA row',
      selectors: ['.lesson-body > .complete-row', '.complete-row']
    },
    {
      key: 'navBar',
      label: 'previous/next lesson navigation',
      selectors: ['.lesson-body > .lesson-nav-bar', '.lesson-nav-bar']
    },
    {
      key: 'sidebarItem',
      label: 'sidebar lesson item',
      virtual: 'sidebarItem'
    }
  ];

  function parseLessonId(value){
    if(typeof value === 'number' && isFinite(value)){
      return value > 6 ? value - 1 : value;
    }
    var raw = String(value || '').toLowerCase();
    var match = raw.match(/(\d+)/);
    if(!match) return null;
    var n = parseInt(match[1], 10);
    if(!isFinite(n)) return null;
    return n > 6 ? n - 1 : n;
  }

  function lessonLabel(index){
    return 'lesson' + (index + 1);
  }

  function ensurePanel(index){
    var panel = document.getElementById('lesson' + index);
    if((!panel || !panel.innerHTML.trim()) && typeof window.renderAllLessons === 'function'){
      window.renderAllLessons();
      panel = document.getElementById('lesson' + index);
    }else if((!panel || !panel.innerHTML.trim()) && typeof renderAllLessons === 'function'){
      renderAllLessons();
      panel = document.getElementById('lesson' + index);
    }
    if(panel && !panel.innerHTML.trim() && typeof window.renderLesson === 'function'){
      panel.innerHTML = window.renderLesson(index);
    }else if(panel && !panel.innerHTML.trim() && typeof renderLesson === 'function'){
      panel.innerHTML = renderLesson(index);
    }
    return panel || null;
  }

  function pickElement(root, selectors){
    if(!root || !selectors) return null;
    for(var i = 0; i < selectors.length; i++){
      var found = root.querySelector(selectors[i]);
      if(found) return {element: found, selector: selectors[i]};
    }
    return null;
  }

  function attrsFor(el){
    var attrs = {};
    if(!el || !el.attributes) return attrs;
    for(var i = 0; i < el.attributes.length; i++){
      var attr = el.attributes[i];
      if(attr.name === 'class' || attr.name === 'id' || attr.name.indexOf('data-') === 0){
        attrs[attr.name] = attr.value;
      }
    }
    return attrs;
  }

  function textSummary(el){
    if(!el) return '';
    return (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 240);
  }

  function htmlSnippet(el){
    if(!el) return '';
    return (el.outerHTML || '').replace(/></g, '>\n<').slice(0, 3000);
  }

  function classList(el){
    if(!el || !el.classList) return [];
    return Array.prototype.slice.call(el.classList);
  }

  function collectClasses(el, bucket){
    bucket = bucket || {};
    if(!el || !el.querySelectorAll) return bucket;
    if(el.classList){
      classList(el).forEach(function(name){ bucket[name] = true; });
    }
    Array.prototype.slice.call(el.querySelectorAll('[class]')).forEach(function(node){
      classList(node).forEach(function(name){ bucket[name] = true; });
    });
    return bucket;
  }

  function maxDepth(el){
    if(!el || !el.children || !el.children.length) return el ? 1 : 0;
    var deepest = 0;
    Array.prototype.slice.call(el.children).forEach(function(child){
      deepest = Math.max(deepest, maxDepth(child));
    });
    return deepest + 1;
  }

  function childTree(el, depth, maxDepthLimit, maxChildren){
    if(!el) return null;
    depth = depth || 0;
    maxDepthLimit = maxDepthLimit || 3;
    maxChildren = maxChildren || 8;
    var node = {
      tag: (el.tagName || '').toLowerCase(),
      id: el.id || '',
      classes: classList(el),
      data: {},
      text: textSummary(el).slice(0, 120),
      children: []
    };
    if(el.dataset){
      Object.keys(el.dataset).forEach(function(key){ node.data[key] = el.dataset[key]; });
    }
    if(depth >= maxDepthLimit || !el.children) return node;
    Array.prototype.slice.call(el.children, 0, maxChildren).forEach(function(child){
      node.children.push(childTree(child, depth + 1, maxDepthLimit, maxChildren));
    });
    if(el.children.length > maxChildren){
      node.children.push({moreChildren: el.children.length - maxChildren});
    }
    return node;
  }

  function summarizeElement(el, selector, forcedActive){
    if(!el){
      return {
        found: false,
        selector: selector || '',
        classes: [],
        allClasses: [],
        childStructure: null,
        text: '',
        html: '',
        domDepth: 0
      };
    }
    var clone = forcedActive ? el.cloneNode(true) : el;
    if(forcedActive && clone.classList) clone.classList.add('active');
    var classes = collectClasses(clone, {});
    return {
      found: true,
      selector: selector || '',
      tag: (clone.tagName || '').toLowerCase(),
      attrs: attrsFor(clone),
      classes: classList(clone),
      allClasses: Object.keys(classes).sort(),
      directChildren: Array.prototype.slice.call(clone.children || []).map(function(child){
        return (child.tagName || '').toLowerCase() + (child.className ? '.' + String(child.className).trim().replace(/\s+/g, '.') : '');
      }),
      childStructure: childTree(clone),
      text: textSummary(clone),
      html: htmlSnippet(clone),
      domDepth: maxDepth(clone)
    };
  }

  function firstSectionSnapshot(panel){
    var body = panel && panel.querySelector('.lesson-body');
    if(!body) return summarizeElement(null, '.lesson-body > h2 + section');
    var heading = body.querySelector('h2');
    if(!heading) return summarizeElement(null, '.lesson-body > h2');
    var container = document.createElement('section');
    container.setAttribute('data-debug-block', 'first-section');
    container.appendChild(heading.cloneNode(true));
    var node = heading.nextElementSibling;
    var count = 0;
    while(node && node.tagName && node.tagName.toLowerCase() !== 'h2' && count < 7){
      container.appendChild(node.cloneNode(true));
      node = node.nextElementSibling;
      count += 1;
    }
    return summarizeElement(container, '.lesson-body first h2 + following siblings');
  }

  function relatedBlockSnapshot(panel){
    var body = panel && panel.querySelector('.lesson-body');
    if(!body) return summarizeElement(null, '.lesson-body related blocks');
    var container = document.createElement('section');
    container.setAttribute('data-debug-block', 'related-blocks');
    var candidates = body.querySelectorAll('h3, .source-card, .lesson-system-related, [data-lesson-practice-kit], .lesson-system-bridge');
    Array.prototype.slice.call(candidates, 0, 10).forEach(function(node){
      container.appendChild(node.cloneNode(true));
    });
    if(!container.children.length) return summarizeElement(null, 'h3, .source-card, .lesson-system-related');
    return summarizeElement(container, 'h3/.source-card/.lesson-system-related collection');
  }

  function sidebarSnapshot(index){
    var selector = '.lesson-nav-item[data-lesson="' + index + '"]';
    var item = document.querySelector(selector);
    return summarizeElement(item, selector, true);
  }

  function blockSnapshot(panel, block, index){
    if(block.virtual === 'firstSection') return firstSectionSnapshot(panel);
    if(block.virtual === 'relatedBlock') return relatedBlockSnapshot(panel);
    if(block.virtual === 'sidebarItem') return sidebarSnapshot(index);
    var picked = pickElement(panel, block.selectors);
    return summarizeElement(picked && picked.element, picked && picked.selector);
  }

  function dumpLessonStructure(value, options){
    var index = parseLessonId(value);
    options = options || {};
    if(index === null){
      return {error: 'Unknown lesson id: ' + value};
    }
    var panel = ensurePanel(index);
    var result = {
      lesson: lessonLabel(index),
      index: index,
      panelId: 'lesson' + index,
      panelFound: !!panel,
      renderFiles: index === 6 ? FILE_MAP.lesson7 : (index === 7 ? FILE_MAP.lesson8 : FILE_MAP.loader),
      helperFile: 'assets/js/blocks/069-lesson-structure-debug.js',
      blocks: {}
    };
    BLOCKS.forEach(function(block){
      result.blocks[block.key] = Object.assign({label: block.label}, blockSnapshot(panel, block, index));
    });
    if(options.log){
      console.group('Coin ProofPath lesson DOM dump: ' + result.lesson);
      console.log(result);
      console.groupEnd();
    }
    return result;
  }

  function setDiff(a, b){
    var mapA = {};
    var mapB = {};
    (a || []).forEach(function(item){ mapA[item] = true; });
    (b || []).forEach(function(item){ mapB[item] = true; });
    return {
      onlyInA: Object.keys(mapA).filter(function(item){ return !mapB[item]; }).sort(),
      onlyInB: Object.keys(mapB).filter(function(item){ return !mapA[item]; }).sort()
    };
  }

  function childSignature(block){
    return (block.directChildren || []).join(' > ');
  }

  function diffLessonStructure(aValue, bValue, options){
    options = options || {};
    var a = dumpLessonStructure(aValue || 'lesson7');
    var b = dumpLessonStructure(bValue || 'lesson8');
    var diff = {
      left: a.lesson,
      right: b.lesson,
      files: {
        left: a.renderFiles,
        right: b.renderFiles,
        helper: 'assets/js/blocks/069-lesson-structure-debug.js'
      },
      blocks: {},
      summary: []
    };
    BLOCKS.forEach(function(block){
      var left = a.blocks[block.key] || {};
      var right = b.blocks[block.key] || {};
      var rootClassDiff = setDiff(left.classes, right.classes);
      var allClassDiff = setDiff(left.allClasses, right.allClasses);
      var childDifferent = childSignature(left) !== childSignature(right);
      var different = left.found !== right.found
        || left.tag !== right.tag
        || rootClassDiff.onlyInA.length > 0
        || rootClassDiff.onlyInB.length > 0
        || childDifferent
        || left.domDepth !== right.domDepth;
      diff.blocks[block.key] = {
        label: block.label,
        different: different,
        leftFound: !!left.found,
        rightFound: !!right.found,
        leftSelector: left.selector || '',
        rightSelector: right.selector || '',
        leftRootClasses: left.classes || [],
        rightRootClasses: right.classes || [],
        rootClassDiff: rootClassDiff,
        descendantClassDiff: allClassDiff,
        leftDomDepth: left.domDepth || 0,
        rightDomDepth: right.domDepth || 0,
        childStructureDifferent: childDifferent,
        leftChildren: childSignature(left),
        rightChildren: childSignature(right),
        leftText: left.text || '',
        rightText: right.text || ''
      };
      diff.summary.push({
        block: block.key,
        label: block.label,
        different: different,
        leftSelector: left.selector || '',
        rightSelector: right.selector || '',
        leftDepth: left.domDepth || 0,
        rightDepth: right.domDepth || 0,
        leftOnlyRootClasses: rootClassDiff.onlyInA.join(', '),
        rightOnlyRootClasses: rootClassDiff.onlyInB.join(', ')
      });
    });
    diff.hasStructuralDifference = diff.summary.some(function(row){ return row.different; });
    if(options.log !== false){
      console.group('Coin ProofPath lesson DOM diff: ' + diff.left + ' vs ' + diff.right);
      if(console.table) console.table(diff.summary);
      console.log(diff);
      console.groupEnd();
    }
    return diff;
  }

  window.__CA_LESSON_STRUCTURE_FILES = FILE_MAP;
  window.dumpLessonStructure = dumpLessonStructure;
  window.diffLessonStructure = diffLessonStructure;
  window.logLessonStructureDiff = function(a, b){
    return diffLessonStructure(a || 'lesson7', b || 'lesson8', {log: true});
  };
})();
