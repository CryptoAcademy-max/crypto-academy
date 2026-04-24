/* === HA GLOSSARY FINAL UNIFICATION (35 items, single source of truth) === */
(function(){
  if(typeof window === "undefined") return;
  var U = window.__UNIFIED_GLOSSARY;
  if(!U || !U.ha || !Array.isArray(U.ha)) return;
  var unifiedHa = U.ha;
  // Stable keys g1..gN matching unified order
  var haObj = {};
  var haOrder = [];
  for(var i=0;i<unifiedHa.length;i++){
    var k = "g" + (i+1);
    haObj[k] = { title: unifiedHa[i][0], body: unifiedHa[i][1] };
    haOrder.push(k);
  }
  var pairs = unifiedHa.map(function(p){ return [p[0], p[1]]; });

  function applyHaUnified(){
    try {
      // 1. HA_GLOSSARY_FULL (if exposed via window) and HA_GLOSSARY_ORDER
      if(typeof window.HA_GLOSSARY_FULL === "object" && window.HA_GLOSSARY_FULL){
        for(var k in window.HA_GLOSSARY_FULL){ if(Object.prototype.hasOwnProperty.call(window.HA_GLOSSARY_FULL,k)) delete window.HA_GLOSSARY_FULL[k]; }
        Object.assign(window.HA_GLOSSARY_FULL, haObj);
      }
      if(Array.isArray(window.HA_GLOSSARY_ORDER)){
        window.HA_GLOSSARY_ORDER.length = 0;
        for(var ii=0; ii<haOrder.length; ii++) window.HA_GLOSSARY_ORDER.push(haOrder[ii]);
      }
      // 2. Runtime language pack
      if(window.__runtimeLanguagePacks && window.__runtimeLanguagePacks.ha){
        window.__runtimeLanguagePacks.ha.glossary = JSON.parse(JSON.stringify(haObj));
      }
      // 3. All glossary stores
      if(typeof glossaryEntries !== "undefined") glossaryEntries.ha = JSON.parse(JSON.stringify(haObj));
      if(typeof glossaryData !== "undefined") glossaryData.ha = pairs.map(function(p){ return [p[0], p[1]]; });
      if(typeof glossaryOverrides !== "undefined") glossaryOverrides.ha = pairs.map(function(p){ return [p[0], p[1]]; });
      if(window.__repGlossaryEntries) window.__repGlossaryEntries.ha = JSON.parse(JSON.stringify(haObj));
      // 4. Re-render
      if(typeof window.__applyUnifiedGlossary === "function") window.__applyUnifiedGlossary();
      if(typeof renderGlossary === "function"){
        var panel = document.getElementById("glossaryPanel");
        if(panel) panel.innerHTML = renderGlossary();
      }
    } catch(e){}
  }
  // Run now and after any later language pack reapplications
  applyHaUnified();
  setTimeout(applyHaUnified, 0);
  setTimeout(applyHaUnified, 100);
  setTimeout(applyHaUnified, 500);
  setTimeout(applyHaUnified, 1500);
  // Patch __applyRuntimeLanguagePack so any later ha re-apply triggers re-unification
  if(typeof window.__applyRuntimeLanguagePack === "function"){
    var _origApply = window.__applyRuntimeLanguagePack;
    window.__applyRuntimeLanguagePack = function(lang){
      var r = _origApply.apply(this, arguments);
      if(lang === "ha") applyHaUnified();
      return r;
    };
  }
  // Patch setLang
  if(typeof window.setLang === "function"){
    var _origSet = window.setLang;
    window.setLang = function(){
      var r = _origSet.apply(this, arguments);
      applyHaUnified();
      setTimeout(applyHaUnified, 0);
      setTimeout(applyHaUnified, 200);
      return r;
    };
  }
  window.__applyHaUnifiedGlossary = applyHaUnified;
})();