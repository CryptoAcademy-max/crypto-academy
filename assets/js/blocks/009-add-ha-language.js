(function(){
  if (typeof langLabels === 'undefined' || typeof ui === 'undefined') return;
  function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }
  function replaceDeep(value, replacers){
    if (typeof value === 'string'){
      return replacers.reduce(function(acc, pair){ return acc.split(pair[0]).join(pair[1]); }, value);
    }
    if (Array.isArray(value)) return value.map(function(item){ return replaceDeep(item, replacers); });
    if (value && typeof value === 'object'){
      var out = {};
      Object.keys(value).forEach(function(key){ out[key] = replaceDeep(value[key], replacers); });
      return out;
    }
    return value;
  }

  langLabels.ha = 'HA';

  var langMenu = document.getElementById('langMenu');
  if (langMenu) {
    var haItem = langMenu.querySelector('[data-lang="ha"]');
    if (!haItem) {
      haItem = document.createElement('div');
      haItem.className = 'lang-item';
      haItem.dataset.lang = 'ha';
      haItem.innerHTML = '<span>🇳🇬</span><span>Hausa</span><span class="native">HA</span>';
      langMenu.appendChild(haItem);
    } else {
      haItem.className = 'lang-item' + (haItem.classList.contains('active') ? ' active' : '');
      haItem.dataset.lang = 'ha';
      haItem.innerHTML = '<span>🇳🇬</span><span>Hausa</span><span class="native">HA</span>';
    }
    langMenu.querySelectorAll('.lang-item').forEach(function(item){
      item.onclick = function(e){
        e.stopPropagation();
        if (typeof setLang === 'function') setLang(item.dataset.lang);
        langMenu.classList.remove('open');
      };
    });
  }

  if(typeof lessonOverrides !== 'undefined' && !lessonOverrides.ha && lessonOverrides.en){
    lessonOverrides.ha = deepClone(lessonOverrides.en);
  }
  if(typeof lessons !== 'undefined' && lessons.ha){
    lessons.ha = replaceDeep(lessons.ha, [
      ['Lesson 1','Darasi na 1'],
      ['Lesson 2','Darasi na 2'],
      ['Lesson 3','Darasi na 3'],
      ['Lesson 4','Darasi na 4'],
      ['Lesson 5','Darasi na 5'],
      ['Wallets','Walat'],
      ['Wallet','Walat'],
      ['Glossary','Kamus'],
      ['Source Library','Laburaren Madogara'],
      ['Safe Transfers','Canja Wuri Cikin Aminci'],
      ['The 5 Roles of Crypto','Ayyuka 5 na tokan'],
      ['Real-world Lessons','Darussan Duniya ta Gaskiya']
    ]);
  }
  if(typeof lessonOverrides !== 'undefined' && lessonOverrides.ha){
    lessonOverrides.ha = replaceDeep(lessonOverrides.ha, [
      ['Lesson 1','Darasi na 1'],
      ['Lesson 2','Darasi na 2'],
      ['Lesson 3','Darasi na 3'],
      ['Lesson 4','Darasi na 4'],
      ['Lesson 5','Darasi na 5'],
      ['Wallets','Walat'],
      ['Wallet','Walat'],
      ['Glossary','Kamus'],
      ['Source Library','Laburaren Madogara'],
      ['Safe Transfers','Canja Wuri Cikin Aminci'],
      ['The 5 Roles of Crypto','Ayyuka 5 na tokan'],
      ['Real-world Lessons','Darussan Duniya ta Gaskiya']
    ]);
  }
  if(typeof sourceLibrary !== 'undefined' && sourceLibrary.ha){
    sourceLibrary.ha = replaceDeep(sourceLibrary.ha, [
      ['Lesson 1','Darasi na 1'],
      ['Lesson 2','Darasi na 2'],
      ['Lesson 3','Darasi na 3'],
      ['Lesson 4','Darasi na 4'],
      ['Lesson 5','Darasi na 5'],
      ['Wallets','Walat'],
      ['Safe Transfers','Canja Wuri Cikin Aminci'],
      ['The 5 Roles of Crypto','Ayyuka 5 na tokan'],
      ['Real-world Lessons','Darussan Duniya ta Gaskiya'],
      ['Source Library','Laburaren Madogara'],
      ['Glossary','Kamus'],
      ['FAQ','Tambayoyi da Amsoshi']
    ]);
  }
  if(typeof ui !== 'undefined' && ui.ha){
    Object.assign(ui.ha, {
      'home.sourceTitle':'Laburaren Madogara',
      'home.sourceDesc':'Karanta makaloli na gaske da nassoshi na hukuma da aka tsara bisa batutuwa kamar zamba, musaya, tsayayyun kudaden dijital, da tsaron walat.',
      'home.openSources':'Bude Laburaren Madogara',
      'home.startCardTitle':'Fara Nan',
      'home.faqCardTitle':'Tambayoyi da Amsoshi',
      'home.openFaq':'Bude Tambayoyi da Amsoshi',
      'glossary.title':'Kamus',
      'sources.pageTitle':'Laburaren Madogara'
    });
  }
  if(typeof extraUi !== 'undefined' && extraUi.ha){
    Object.assign(extraUi.ha, {
      'v.txid':'TxID',
      'v.txidDesc':'Yi amfani da TxID don tabbatar da ainihin bayanan canjin.',
      'glossary.title':'Kamus',
      'glossary.desc':'Sauƙaƙan ma\'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.',
      'sources.pageTitle':'Laburaren Madogara',
      'sources.pageDesc':'Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin haɗa darussa da misalan duniya ta gaskiya.'
    });
  }
  if(typeof polishedSectionContent !== 'undefined'){
    polishedSectionContent.ha = polishedSectionContent.ha || deepClone(polishedSectionContent.en || {});
    Object.assign(polishedSectionContent.ha, {
      startTitle:'Fara Nan',
      startIntro:'Wannan shafin yana taimaka wa sabon baƙo ya san daidai inda zai fara. Ka fara da sauƙaƙan tsari, sannan ka buɗe sauran sassa idan asalin ra\'ayoyi sun fara bayyana.',
      startSteps:[
        ['Mataki 1 – Blockchain','Fara da Darasi na 1 domin fahimtar abin da blockchain yake da dalilin da ya sa kundin bayanai na rabawa yake da muhimmanci.'],
        ['Mataki 2 – Walat','Sai ka wuce Darasi na 2 domin ka fahimci makullai, adireshi, da damar shiga kafin ka motsa kadarori.'],
        ['Mataki 3 – Kamus','Bude Kamus bayan Darasi na 1 da na 2 idan har yanzu akwai kalmomin da suke da rikitarwa.'],
        ['Mataki 4 – Canja Wuri Cikin Aminci','Sannan ka je Darasi na 3 domin koyon tsarin tsaro na amfani: network, adireshi, gwajin canja wuri, da TxID.'],
        ['Mataki 5 – Ayyuka da darussan ainihin duniya','Bayan ka fahimci asali, ci gaba da rawar token, alamun haɗari, da misalai na gaske.']
      ],
      startTip:'Kyakyawan hanya ga masu farawa ita ce: 1 → 2 → Kamus → 3 → 4 → Tsaro → Laburaren Madogara.',
      faqTitle:'Tambayoyi da Amsoshi',
      faqIntro:'Waɗannan su ne tambayoyin da masu farawa suka fi yawan yi. Karanta amsoshin cikin sauƙi kafin ka damu da cikakkun bayanai masu zurfi.',
      faqItems:[
        ['Shin ina buƙatar walat da gaske?','Idan kana saya da sayarwa ne kawai a cikin exchange, watakila ba za ka yi amfani da walat mai zaman kansa nan da nan ba. Amma domin ka fahimci mallaka da kyau, ya dace ka san menene walat da yadda makullai ke aiki.'],
        ['Menene bambanci tsakanin exchange da walat?','Exchange sabis ne na ciniki da kula da asusu. Walat kayan aiki ne da ke sarrafa makullai da damar shiga. Suna da alaƙa, amma ba abu ɗaya ba ne.'],
        ['Me ya sa nake biyan gas fee?','Gas fee kuɗin network ne. Su ne ke taimakawa sarrafa da rubuta ma\'amaloli a kan blockchain.'],
        ['Shin yana da lafiya in raba adireshin walat ɗina?','Eh, an tsara adireshin walat ne don karɓar kadarori. Amma private key da seed phrase ba za a taɓa rabawa ba.'],
        ['Me ya sa ya kamata in fara da ƙaramin gwaji?','Domin ƙaramin gwaji na iya gano kuskuren adireshi ko network kafin babban canji ya shiga haɗari.']
      ],
      safetyTitle:'Tsaro / Kariyar Zamba',
      safetyIntro:'Wannan yana daga cikin sassan da suka fi amfani a dandalin gaba ɗaya. Waɗannan halaye na iya hana kurakuran masu farawa kafin su zama asara ta gaske.',
      safetyItems:[
        ['Kada ka taɓa raba seed phrase','Seed phrase damar dawo da walat ce. Duk wanda ya samu zai iya mallakar walat ɗin.'],
        ['Ka yi hankali da airdrop na bogi','Masu zamba sukan yi amfani da tayin token kyauta domin tura mutane zuwa shafukan bogi ko amincewa masu haɗari.'],
        ['Duba links kafin haɗawa','Links na phishing sukan yi kama da na gaskiya sosai. Ka rage sauri ka kuma tabbatar da domain sosai.'],
        ['Aika ƙaramin gwaji da farko','Musamman a sabon network ko sabon adireshi, ƙaramin gwaji na iya hana babban kuskure.'],
        ['Ka ɗauki gaggawa a matsayin alamar haɗari','Matsin lamba, ƙirga lokaci, barazana, da tilasta biyan kuɗi su ne hanyoyin zamba da aka saba gani.']
      ]
    });
  }
})();