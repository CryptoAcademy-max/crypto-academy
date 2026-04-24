(function(){
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
      'glossary.desc':'Saukakan ma\'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.',
      'sources.pageTitle':'Laburaren Madogara',
      'sources.pageDesc':'Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin hada darussa da misalan duniya ta gaskiya.'
    });
  }
  if(typeof polishedSectionContent !== 'undefined'){
    polishedSectionContent.ha = polishedSectionContent.ha || JSON.parse(JSON.stringify(polishedSectionContent.en || {}));
    Object.assign(polishedSectionContent.ha, {
      startTitle:'Fara Nan',
      startIntro:"Wannan shafin yana taimaka wa sabon bako ya san daidai inda zai fara. Ka fara da tsarin da ya fi sauki, sannan ka bude sauran sassa idan asalin ra'ayoyi sun fara bayyana.",
      startSteps:[
        ['Mataki 1 - Blockchain','Fara da Darasi na 1 domin fahimtar abin da blockchain yake da dalilin da ya sa kundin bayanai na rabawa yake da muhimmanci.'],
        ['Mataki 2 - Walat','Sai ka wuce Darasi na 2 domin ka fahimci makullai, adireshi, da damar shiga kafin ka motsa kadarori.'],
        ['Mataki 3 - Kamus','Bude Kamus bayan Darasi na 1 da na 2 idan har yanzu akwai kalmomin da suke da rikitarwa.'],
        ['Mataki 4 - Canja Wuri Cikin Aminci','Sannan ka je Darasi na 3 domin koyon tsarin tsaro na amfani: network, adireshi, gwajin canja wuri, da TxID.'],
        ['Mataki 5 - Ayyuka da darussan ainihin duniya','Bayan ka fahimci asali, ci gaba da rawar token, alamun hadari, da misalai na gaske.']
      ],
      startTip:'Kyakyawan hanya ga masu farawa ita ce: 1 - 2 - Kamus - 3 - 4 - Tsaro - Laburaren Madogara.',
      faqTitle:'Tambayoyi da Amsoshi',
      faqIntro:'Wadannan su ne tambayoyin da masu farawa suka fi yawan yi. Karanta amsoshin cikin sauki kafin ka damu da cikakkun bayanai masu zurfi.',
      faqItems:[
        ['Shin ina bukatar walat da gaske?','Idan kana saya da sayarwa ne kawai a cikin exchange, watakila ba za ka yi amfani da walat mai zaman kansa nan da nan ba. Amma domin ka fahimci mallaka da kyau, ya dace ka san menene walat da yadda makullai ke aiki.'],
        ['Menene bambanci tsakanin exchange da walat?','Exchange sabis ne na ciniki da kula da asusu. Walat kayan aiki ne da ke sarrafa makullai da damar shiga. Suna da alaka, amma ba abu daya ba ne.'],
        ['Me ya sa nake biyan gas fee?','Gas fee kudin network ne. Su ne ke taimakawa sarrafa da rubuta ma\'amaloli a kan blockchain.'],
        ['Shin yana da lafiya in raba adireshin walat dina?','Eh, an tsara adireshin walat ne don karbar kadarori. Amma private key da seed phrase ba za a taba rabawa ba.'],
        ['Me ya sa ya kamata in fara da karamin gwaji?','Domin karamin gwaji na iya gano kuskuren adireshi ko network kafin babban canji ya shiga hadari.']
      ],
      safetyTitle:'Tsaro / Kariyar Zamba',
      safetyIntro:'Wannan yana daga cikin sassan da suka fi amfani a dandalin gaba daya. Wadannan halaye na iya hana kurakuran masu farawa kafin su zama asara ta gaske.',
      safetyItems:[
        ['Kada ka taba raba seed phrase','Seed phrase damar dawo da walat ce. Duk wanda ya samu zai iya mallakar walat din.'],
        ['Ka yi hankali da airdrop na bogi','Masu zamba sukan yi amfani da tayin token kyauta domin tura mutane zuwa shafukan bogi ko amincewa masu hadari.'],
        ['Duba links kafin hadawa','Links na phishing sukan yi kama da na gaskiya sosai. Ka rage sauri ka kuma tabbatar da domain sosai.'],
        ['Aika karamin gwaji da farko','Musamman a sabon network ko sabon adireshi, karamin gwaji na iya hana babban kuskure.'],
        ['Ka dauki gaggawa a matsayin alamar hadari','Matsin lamba, kirga lokaci, barazana, da tilasta biyan kudi su ne hanyoyin zamba da aka saba gani.']
      ]
    });
  }
})();