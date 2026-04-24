(function(){
  function clone(v){ return JSON.parse(JSON.stringify(v)); }
  function hasOwn(obj, key){ return !!obj && Object.prototype.hasOwnProperty.call(obj, key); }
  function ensureHausaMenuItem(){
    if(typeof langLabels !== 'undefined') langLabels.ha = 'HA';
    var langMenu = document.getElementById('langMenu');
    if(!langMenu) return;
    var haItem = langMenu.querySelector('[data-lang="ha"]');
    if(!haItem){
      haItem = document.createElement('div');
      haItem.className = 'lang-item';
      haItem.dataset.lang = 'ha';
      langMenu.appendChild(haItem);
    }
    haItem.innerHTML = '<span>&#127475;&#127468;</span><span>Hausa</span><span class="native">HA</span>';
    haItem.onclick = function(e){
      e.stopPropagation();
      if(typeof setLang === 'function') setLang('ha');
      langMenu.classList.remove('open');
    };
  }

  var HA_UI_FULL = {
    'brand.name':"Crypto Academy",
    'brand.sub':"Darussa masu sauki ga masu farawa",
    'sidebar.lessons':"Darussan koyo",
    'sidebar.topics':"Batutuwa masu sauri",
    'nav.l1':"Sarkar bayanai",
    'nav.l1sub':"Asalin kundin bayanai na rabawa",
    'nav.l2':"Walat",
    'nav.l2sub':"Makullai da damar shiga",
    'nav.l3':"Canja Wuri Cikin Aminci",
    'nav.l3sub':"Aika cikin tsari mai tsaro",
    'nav.l4':"Ayyuka 5 na tokan",
    'nav.l4sub':"Fahimtar rawar tokan",
    'nav.l5':"Darussan Duniya ta Gaskiya",
    'nav.l5sub':"Dalilin da ya sa tsari yake da muhimmanci",
    'topic.blockchain':"Menene sarkar bayanai?",
    'topic.wallet':"Menene walat?",
    'topic.transfer':"Yaya canja wuri cikin aminci yake aiki?",
    'topic.roles':"Yaya ayyukan tokan suke bambanta?",
    'topic.real':"Me ya sa misalan gaske suke da muhimmanci?",
    'footer.byline':"Kayan ilimi kyauta daga Bee Network Korea",
    'overview.chip1':"Na masu farawa",
    'overview.chip2':"Harsuna da yawa",
    'overview.chip3':"Koyon gani",
    'progress.done':"an kammala",
    'btn.prev':"Darasi na baya",
    'btn.next':"Darasi na gaba",
    'btn.mark':"Sanya alamar an kammala",
    'btn.completed':"An kammala",
    'btn.restart':"Fara daga farko",
    'breadcrumb.prefix':"Darasi",
    'quiz.reveal':"Nuna amsa",
    'source.title':"Madogara",
    'check.title':"Abubuwan dubawa ga mai farawa",
    'faq.title':"Tambayoyi da Amsoshi",
    'mistakes.title':"Kurakuran da aka fi yi",
    'quiz.title':"Karamin gwaji",
    'example.title':"Misali mai sauki",
    'sources.title':"Madogarori masu alaka",
    'visual.title':"Bayani ta gani",
    'complete.note':"Ana adana ci gabanka a wannan burauzar.",
    'nav.home':"Shafin Gida",
    'nav.homesub':"Fara daga nan",
    'nav.glossary':"Kamus",
    'nav.glossarysub':"Muhimman kalmomi cikin sauki",
    'nav.sources':"Laburaren Madogara",
    'nav.sourcesub':"Makaloli da nassoshi na hukuma",
    'home.arrowNote':"Yi amfani da menu na hagu a matsayin taswirar koyonka.",
    'home.title':"Koyi kudin dijital mataki-mataki",
    'home.desc':"Yi amfani da wannan shafin a matsayin wurin farawa. Za ka iya bude darussa kai tsaye, duba Kamus don muhimman kalmomi, ko shiga Laburaren Madogara domin makaloli na gaske da takardun hukuma.",
    'home.start':"Daga ina ya kamata ka fara?",
    'home.useMenu':"Yi amfani da menu na hagu a matsayin taswirar koyonka",
    'home.lessonGuide':"Idan kai sabo ne, fara da Darasi na 1 sannan ka bi a jere. Kowane darasi yana da bayani cikin sauki, misalai, kurakurai na yau da kullum, da wuraren dubawa.",
    'home.glossaryTitle':"Kamus",
    'home.glossaryDesc':"Bude Kamus domin fahimtar kalmomi kamar kudin gas, makullin jama'a, mai duba sarkar bayanai, kwangilar smart, rikon kadara, da gada cikin sauki.",
    'home.sourceTitle':"Laburaren Madogara",
    'home.sourceDesc':"Bude Laburaren Madogara domin karanta makaloli na gaske da nassoshi na hukuma da aka tsara bisa zamba, musaya, tsayayyun kudaden dijital, da tsaron walat.",
    'home.openLesson':"Bude darasi",
    'home.openGlossary':"Bude Kamus",
    'home.openSources':"Bude Laburaren Madogara",
    'glossary.title':"Kamus",
    'glossary.desc':"Saukakan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
    'sources.pageTitle':"Laburaren Madogara",
    'sources.pageDesc':"Jerin makaloli, rahotanni, da takardun hukuma da za su taimaka ka hada darussa da misalan duniya ta gaskiya.",
    'sources.catScams':"Zamba",
    'sources.catExchanges':"Musaya",
    'sources.catStable':"Tsayayyun kudaden dijital",
    'sources.catWallet':"Tsaron Walat",
    'sources.catCases':"Misalan Gaske",
    'sources.catBasics':"Asali",
    'sources.catDefi':"Tsarin kudi marar tsakiya",
    'sources.catReg':"Ka'idoji",
    'glossary.address.term':"Adireshi",
    'glossary.address.body':"Wurin jama'a da ake karbar kadarori.",
    'glossary.private.term':"Makullin sirri",
    'glossary.private.body':"Makullin sirri da ke ba ka iko da walat.",
    'glossary.seed.term':"Jimlar dawo da walat",
    'glossary.seed.body':"Ajiyar kalmomi don dawo da walat. Kada ka taba rabawa.",
    'glossary.gas.term':"Kudin gas",
    'glossary.gas.body':"Kudin hanyar sadarwa da ake biya domin sarrafa muamala.",
    'glossary.public.term':"Makullin jama'a",
    'glossary.public.body':"Makulli ne da aka kirkira da dabarun boye-boye wanda ke da alaka da asalin walat kuma yana taimakawa kirkirar adireshi.",
    'glossary.explorer.term':"Mai duba sarkar bayanai",
    'glossary.explorer.body':"Shafi ko kayan aiki da ke nuna muamala da adireshi a kan sarkar bayanai.",
    'glossary.contract.term':"Kwangilar smart",
    'glossary.contract.body':"Lambar da ke kan sarkar bayanai wadda ke gudana kai tsaye bisa ka'idojin da aka tsara.",
    'glossary.custody.term':"Rikon kadara",
    'glossary.custody.body':"Waye ke rike da makullai da ikon shiga kadarori.",
    'glossary.bridge.term':"Gada",
    'glossary.bridge.body':"Kayan aiki da ake amfani da shi wajen motsa kadarori ko sakonni tsakanin sarkokin bayanai daban-daban.",
    'glossary.haN1.body':"Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a iya duba bayanai ba tare da dogaro da kamfani guda ba.",
    'glossary.haN2.body':"Hanya ce da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kara sabon tubali.",
    'glossary.haN3.body':"Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital.",
    'glossary.haN4.body':"Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika.",
    'glossary.haN5.body':"Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai.",
    'glossary.haN6.body':"Asalin sarkar bayanai ce da ke da nata dokoki, tsaro, da tarihin muamala.",
    'glossary.haN7.body':"Ma'auni ne da ke nuna yawan muamalar da hanyar sadarwa za ta iya sarrafawa a sakan daya.",
    'glossary.haN8.body':"Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai.",
    'glossary.haN9.body':"Aika kudi daga wuri ko kasa guda zuwa wata, yawanci domin iyali ko kasuwanci.",
    'glossary.haN10.body':"Yanayi ne da iko ko yanke hukunci yake taruwa a hannun bangare kadan maimakon ya bazu sosai.",
    'glossary.haN11.body':"Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital.",
    'glossary.haN12.body':"Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari.",
    'glossary.haN13.body':"Tokan da aka tsara ya rike kima mai dan kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat.",
    'glossary.haN14.body':"Alakar kima da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka.",
    'glossary.haN15.body':"Yadda saukin saye ko sayar da kadara yake ba tare da canza farashinta sosai ba.",
    'glossary.haN16.body':"Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba.",
    'glossary.haN17.body':"Bada damar a aro kadara, yawanci tare da jingina ko biyan ruwa.",
    'glossary.haN18.body':"Rance ne da ake aro kuma a biya shi gaba daya a cikin muamala guda a kan sarkar bayanai.",
    'glossary.haN19.body':"Tokan ne na musamman da ke wakiltar mallaka, asali, ko damar shiga ga wani abu na dijital ko na zahiri.",
    'glossary.haN20.body':"Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai.",
    'callout.quick':"Muhimmin ra'ayi",
    'nav.start':"Fara Nan",
    'nav.startsub':"Hanyar mai farawa",
    'nav.faqPage':"Tambayoyi da Amsoshi",
    'nav.faqsub':"Tambayoyin da aka fi yi",
    'nav.safety':"Tsaro",
    'nav.safetysub':"Kariyar zamba",
    'home.startCardTitle':"Fara Nan",
    'home.startCardDesc':"San ainihin inda za ka fara idan wannan ne karo na farko.",
    'home.faqCardTitle':"Tambayoyi da Amsoshi",
    'home.faqCardDesc':"Karanta tambayoyin masu farawa da aka fi yawan yi a wuri guda.",
    'home.safetyCardTitle':"Tsaro",
    'home.safetyCardDesc':"Koyi hanyoyin kariya daga zamba da halayen tsaron walat masu amfani.",
    'home.openStart':"Bude Fara Nan",
    'home.openFaq':"Bude Tambayoyi da Amsoshi",
    'home.openSafety':"Bude Tsaro",
    'nav.updates':"Tarihin Sabuntawa",
    'nav.updatessub':"Abin da ya canza da lokacin da ya canza",
    'updates.title':"Tarihin Sabuntawa",
    'updates.desc':"Rajistar gyare-gyare da aka yi wa wannan dandali a tsawon lokaci."
  };
  var HA_EXTRA_UI_FULL = {
    'v.ledger':"Littafin rajista",
    'v.node':"Nodi",
    'v.wallet':"Walat",
    'v.interface':"mahada",
    'v.address':"Adireshi",
    'v.shareable':"ana iya rabawa",
    'v.private':"Makullin sirri",
    'v.secret':"sirri",
    'v.seed':"Jimlar dawo da walat",
    'v.backup':"ajiya",
    'v.network':"Hanyar sadarwa",
    'v.test':"Gwajin canja wuri",
    'v.txid':"TxID",
    'v.match':"ya dace",
    'v.check':"duba",
    'v.smallfirst':"fara da karami",
    'v.verify':"tabbatar",
    'v.defi':"Tsarin kudi marar tsakiya",
    'v.utility':"Amfani",
    'v.governance':"Gudanarwa",
    'v.nft':"NFT",
    'v.stablecoin':"Tsayayyen kudin dijital",
    'v.bank':"Banki",
    'v.access':"Samun dama",
    'v.voting':"Zabe",
    'v.ownership':"Mallaka",
    'v.cash':"Kudi",
    'v.roleDesc1':"Ayyukan kudi da lamba ke yi.",
    'v.roleDesc2':"Amfani, fa'ida, da ayyukan sabis.",
    'v.roleDesc3':"Shiga cikin shawarwari da yanke hukunci.",
    'v.roleDesc4':"Shaidar mallaka da aka daure da wani abu na dijital na musamman.",
    'v.roleDesc5':"An tsara shi ya zauna kusa da wata kimar tunani.",
    'v.phishing':"Damfarar kama",
    'v.custody':"Rikon kadara",
    'v.designrisk':"Hadarin tsari",
    'v.riskDesc1':"Gaggawa da sakonnin tallafi na bogi na iya yaudarar masu amfani su ba da izini masu hadari.",
    'v.riskDesc2':"Idan wani dandali ne ke rike da makullai, tsaronsa da halinsa ne ke kayyade amincinka.",
    'v.riskDesc3':"Kalmar stable tana bayyana buri, ba alkawarin cewa kowane yanayi zai kasance lafiya ba.",
    'v.networkDesc':"Tabbatar da hanyar sadarwa kafin ka aika.",
    'v.addressDesc':"Sake duba farkon da karshen adireshin kafin aika.",
    'v.testDesc':"Idan zai yiwu, aika karamin gwaji da farko.",
    'v.txidDesc':"Yi amfani da TxID domin tabbatar da ainihin bayanan canjin.",
    'v.public':"Makullin jama'a",
    'v.explorer':"Mai duba sarkar bayanai",
    'v.contract':"Kwangilar smart",
    'v.bridge':"Gada",
    'glossary.title':"Kamus",
    'glossary.desc':"Saukakan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
    'sources.pageTitle':"Laburaren Madogara",
    'sources.pageDesc':"Jerin makaloli, rahotanni, da takardun hukuma da za su taimaka ka hada darussa da misalan duniya ta gaskiya."
  };
  var HA_GLOSSARY_ORDER = ['blockchain','mining','wallet','smartContract','gasFee','layer1','tps','validator','remittance','centralization','exchange','token','stablecoin','peg','liquidity','defi','lending','flashLoan','nft','mint'];
  var HA_GLOSSARY_FULL = {
    blockchain:{title:"Sarkar bayanai",body:"Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a duba rikodi ba tare da dogaro da kamfani guda ba."},
    mining:{title:"Hakowa",body:"Hanyar da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kara sabon tubali."},
    wallet:{title:"Walat",body:"Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital."},
    smartContract:{title:"Kwangilar smart",body:"Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika."},
    gasFee:{title:"Kudin gas",body:"Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai."},
    layer1:{title:"Mataki na 1",body:"Asalin sarkar bayanai ce da ke da nata dokoki, tsaro, da tarihin muamala."},
    tps:{title:"Muamala a sakan daya",body:"Ma'auni ne da ke nuna yawan muamalar da hanyar sadarwa za ta iya sarrafawa a sakan daya."},
    validator:{title:"Mai tabbatarwa",body:"Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai."},
    remittance:{title:"Tura kudi",body:"Aika kudi daga wuri ko kasa guda zuwa wata, yawanci domin iyali ko kasuwanci."},
    centralization:{title:"Tsakaitawa",body:"Yanayi ne da iko ko yanke hukunci yake taruwa a hannun bangare kadan maimakon ya bazu sosai."},
    exchange:{title:"Musaya",body:"Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital."},
    token:{title:"Tokan",body:"Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari."},
    stablecoin:{title:"Tsayayyen kudin dijital",body:"Tokan da aka tsara ya rike kimar da ta fi kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat."},
    peg:{title:"Daidaitacciyar alaka",body:"Alakar kimar da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka."},
    liquidity:{title:"Saukakiyar musaya",body:"Yadda saukin saye ko sayar da kadara yake ba tare da canza farashinta sosai ba."},
    defi:{title:"Tsarin kudi marar tsakiya",body:"Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba."},
    lending:{title:"Lamuni",body:"Bada damar a aro kadara, yawanci tare da jingina ko biyan ruwa."},
    flashLoan:{title:"Lamunin take",body:"Rance ne da ake aro kuma a biya shi gaba daya a cikin muamala guda a kan sarkar bayanai."},
    nft:{title:"NFT",body:"Tokan ne na musamman da ke wakiltar mallaka, asali, ko damar shiga ga wani abu na dijital ko na zahiri."},
    mint:{title:"Fitarwa",body:"Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai."}
  };
  var HA_FAQ_ORDER = ['bitcoin','ethereum','gas','solana','networkMatter','xrp','payments','bnb','utilityToken','usdt','stableRisk','aave','defiBank','nft','nftPictures'];
  var HA_FAQ_FULL = {
    bitcoin:{title:"Menene Bitcoin?",body:"Bitcoin shi ne babban kudin dijital na farko da aka sani sosai. An tsara shi a matsayin kudi na dijital da zai iya aiki ba tare da banki na tsakiya ba."},
    ethereum:{title:"Menene Ethereum?",body:"Ethereum sarkar bayanai ce da aka gina domin kwangilolin smart da manhajojin da ke gudana a kai. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna amfani da ita."},
    gas:{title:"Menene kudin gas?",body:"Kudin gas shi ne kudin hanyar sadarwa da ake biya domin sarkar bayanai ta sarrafa kuma ta rubuta muamala."},
    solana:{title:"Menene Solana?",body:"Solana sarkar bayanai ce mai sauri da aka fi sani da kudin amfani mai sauki da saurin tabbatar da muamala."},
    networkMatter:{title:"Me ya sa hanyar sadarwa take da muhimmanci?",body:"Kadara guda na iya kasancewa a fiye da hanya daya. Idan hanyar aikawa da ta karba ba su dace ba, kudi na iya makale ko salwanta."},
    xrp:{title:"Menene XRP?",body:"XRP kadara ce ta dijital da ta fi mayar da hankali kan biyan kudi cikin sauri da rahusa, musamman tsakanin kasashe."},
    payments:{title:"Me ya sa wasu kudaden dijital suke mai da hankali kan biyan kudi?",body:"Kowane aikin kudin dijital yana kokarin warware matsala dabam. Wasu kudaden dijital suna kokarin motsa kima cikin sauri da rahusa."},
    bnb:{title:"Menene BNB?",body:"BNB shi ne tokan na asali a cikin tsarin BNB Chain da kuma wasu ayyuka masu alaka da Binance."},
    utilityToken:{title:"Menene tokan na amfani?",body:"Tokan na amfani ana amfani da shi ne wajen samun damar amfani da kaya, samun rangwame, ko wasu siffofi a cikin wani tsari."},
    usdt:{title:"Menene USDT?",body:"USDT tsayayyen kudin dijital ne da Tether ke fitarwa wanda aka tsara ta kasance kusa da dala ta Amurka daya."},
    stableRisk:{title:"Shin tsayayyen kudin dijital ba shi da hadari?",body:"A'a. Tsayayyun kudaden dijital suna neman kwanciyar hankali na farashi, amma har yanzu suna da hadarin ajiyar baya, mai fitarwa, saukin musaya, da rasa daidaituwar kima."},
    aave:{title:"Menene AAVE?",body:"AAVE tokan ne da ke da alaka da Aave, tsarin kudi marar tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance da kudaden dijital."},
    defiBank:{title:"Shin tsarin kudi marar tsakiya iri daya ne da banki?",body:"A'a. Tsarin kudi marar tsakiya na iya ba da wasu ayyuka masu kama da banki, amma yana aiki da kwangilolin smart kuma baya bayar da irin kariyar doka ta banki."},
    nft:{title:"Menene NFT?",body:"NFT tokan ne na musamman da zai iya wakiltar mallaka, ainihi, ko damar shiga da aka daure da wani abu takamaimai."},
    nftPictures:{title:"Shin NFT hotuna kawai ne?",body:"A'a. Hotuna sun yi yawa, amma ainihin NFT shi ne rikodin mallaka ko damar shiga da ake iya tabbatarwa a sarkar bayanai."}
  };
  var HA_SAFETY_ORDER = ['seed','networkMismatch','networkRisk','regulatory','exchange','stableDepeg','defiSmart','nftScam'];
  var HA_SAFETY_FULL = {
    seed:{title:"Tsaron jimlar dawo da walat",body:"Jimlar dawo da walat ita ce babbar hanyar dawo da walat. Ajiye ta ba tare da intanet ba, a boye, kuma kada ta shiga hoton allo ko ma'ajiyar yanar gizo."},
    networkMismatch:{title:"Gargadin sabanin hanyar sadarwa",body:"Kafin aika kudin dijital ko tokan, ka tabbatar hanyar aikawa da ta karba sun yi daidai."},
    networkRisk:{title:"Hadarin hanyar sadarwa",body:"Kowace sarkar bayanai tana da nata hadarin aiki da aminci. Cunkoso, yankewa, ko matsalar masu tabbatarwa na iya shafar masu amfani."},
    regulatory:{title:"Hadarin ka'idoji",body:"Dokoki, kara, da matakan hukumomi na iya shafar yadda ake jera kudin dijital, amfani da shi, ko samun damar shiga shi a kasashe daban-daban."},
    exchange:{title:"Hadarin dandalin musaya",body:"Idan kadarorinka suna kan dandalin musaya, kana dogara da wannan dandali ya kare su kuma ya ba ka damar cire su."},
    stableDepeg:{title:"Hadarin kaucewar kima na tsayayyen kudin dijital",body:"Tsayayyen kudin dijital na iya kaucewa kimar da ake so idan ajiyar baya, amana, ko saukin musaya suka raunana."},
    defiSmart:{title:"Hadarin kwangilar smart a tsarin kudi marar tsakiya",body:"Amfani da tsarin kudi marar tsakiya yana nufin amincewa da lamba. Kuskure a lamba, cin gajiyar rauni, ko sabuntawa mara tsaro na iya saka kudinka cikin hadari."},
    nftScam:{title:"Kariya daga damfarar NFT",body:"Ka duba mahadan shiga na kasuwannin saye da sayarwa, tarin abubuwa, da bukatun izinin walat sosai kafin ka hada walat ko ka sa hannu."}
  };
  var HA_SOURCE_ENTRIES_FULL = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Takardar Asalin Bitcoin','Takardar asali da ta bayyana yadda Bitcoin ke aiki da dalilin gabatar da tsarin kudin dijital marar cibiyar guda.','https://bitcoin.org/bitcoin.pdf','Sarkar bayanai','Madogara ce ta farko mai kyau domin fahimtar Bitcoin a matakin tsarin sa.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Gabatarwar hukuma mai saukin fahimta ga Ethereum, kwangilolin smart dinsa, da tsarin ayyukan da aka gina a kansa.','https://ethereum.org/en/what-is-ethereum/','Ayyuka 5 na tokan','Yana hada Ethereum da kwangilolin smart, manhajoji, da tsarukan tokan.'],
    solanaDocs:['basics','Solana Foundation','Takardun Solana','Takardun hukuma da ke gabatar da tsarin hanyar sadarwa, kayan aiki, da tsarin ayyukan Solana.','https://solana.com/docs','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar yadda saurin mataki na 1 ke bayyana tsarin gininsa.'],
    rippleSite:['basics','Ripple','Shafin Ripple','Takaitaccen bayani na hukuma kan kayayyakin Ripple masu mayar da hankali kan biyan kudi da bayanan XRP.','https://ripple.com/xrp/','Darussan Duniya ta Gaskiya','Yana nuna yadda XRP ke fitowa a yanayin biyan kudi da tura kudi tsakanin kasashe.'],
    bnbDocs:['basics','BNB Chain','Takardun BNB Chain','Takardun hukuma na BNB Chain, kayan aikin sa, da yadda ake amfani da hanyarsa.','https://docs.bnbchain.org/','Ayyuka 5 na tokan','Yana taimakawa bayyana yadda tokan na amfani ke tallafawa tsarin BNB Chain mai fadi.'],
    tetherTransparency:['stable','Tether','Shafin Bayyananniyar Tether','Shafin hukuma da ke nuna bayanan ajiyar baya da fitowar USDT.','https://tether.to/en/transparency/','Darussan Duniya ta Gaskiya','Yana da amfani wajen tattauna bayyananniyar ajiyar baya da tambayoyin amana kan tsayayyun kudaden dijital.'],
    aaveDocs:['defi','Aave','Takardun Aave','Takardun hukuma game da kasuwannin lamuni na Aave, tunanin hadari, da tsarin aikin sa.','https://aave.com/docs','Ayyuka 5 na tokan',"Yana hada ra'ayin tsarin kudi marar tsakiya na lamuni da wani ainihin tsari da mai farawa zai iya duba."],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Shafukan koyarwa ga masu farawa kan NFT, kasuwannin saye da sayarwa, da asalin tattarawa.','https://opensea.io/learn','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar kalmomin tsarin NFT da tafiyar mai amfani.']
  };
  var HA_SOURCE_CATS = [
    { key:'scams', label:'Zamba' },
    { key:'exchanges', label:'Musaya' },
    { key:'stable', label:'Tsayayyun kudaden dijital' },
    { key:'wallet', label:'Tsaron Walat' },
    { key:'cases', label:'Misalan Gaske' },
    { key:'basics', label:'Asali' },
    { key:'defi', label:'Tsarin kudi marar tsakiya' },
    { key:'reg', label:"Ka'idoji" }
  ];
  var HA_COIN_EDUCATION_FULL = {
    _labels:{
      overview:"Takaitawa", role:"Aiki", strengths:"Karfi", limitations:"Kalubale", beginnerNote:"Lura ga mai farawa",
      relatedLessons:"Darussa masu alaka", relatedGlossary:"Kalmomi masu alaka", relatedFaq:"Tambayoyi masu alaka",
      relatedSources:"Madogarori masu alaka", relatedSafety:"Tsaro mai alaka", coinResults:"Sakamakon kudaden dijital", internalResults:"Sakamakon cikin shafi"
    },
    bitcoin:{name:"Bitcoin",symbol:"BTC",category:"layer1",overview:"Bitcoin shi ne kudin dijital na farko da ya yi fice a duniya. An gina shi a matsayin kudi na dijital da zai iya aiki ba tare da banki ko cibiyar kula guda ba.",role:"Ana kallonsa a matsayin zinari na dijital kuma ana amfani da shi wajen ajiye kima ko tura kudi ba tare da matsakaici ba.",strengths:"Babbar hanyar sadarwa mai karfin tsaro. Mafi sanannen suna a kasuwa. Adadinsa ya takaitu zuwa miliyan 21.",limitations:"Ayyukansa ba su da sauri kamar wasu sabbin sarkokin bayanai. Tsarin hakowarsa yana bukatar karin makamashi.",beginnerNote:"Bitcoin yawanci shi ne mafi kyawun wurin fara fahimtar asalin duniyar kudin dijital.",relatedLessons:["Sarkar bayanai","Walat","Canja Wuri Cikin Aminci"],relatedGlossary:["Sarkar bayanai","Hakowa","Walat"],relatedFaq:["Menene Bitcoin?"],relatedSources:["Takardar Asalin Bitcoin"],relatedSafety:["Tsaron jimlar dawo da walat"]},
    ethereum:{name:"Ethereum",symbol:"ETH",category:"layer1",overview:"Ethereum sarkar bayanai ce mai iya tafiyar da kwangilolin smart da manhajojin da ba sa bukatar cibiyar tsakiya. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna dogara da ita.",role:"Ita ce babban tushe na kwangilolin smart da tsarin ayyuka masu yawa a duniyar kudin dijital.",strengths:"Babban tsarin masu kirkira da manhajoji. Tana ba da damar sabbin kayayyakin kudin dijital da yawa.",limitations:"Kudin gas na iya tsada idan hanyar sadarwa ta cika. Tana da sarkakiya ga sababbin masu amfani fiye da Bitcoin.",beginnerNote:"Idan kana son fahimtar yadda yawancin sabbin ayyukan kudin dijital ke aiki, Ethereum tana da muhimmanci sosai.",relatedLessons:["Sarkar bayanai","Walat","Ayyuka 5 na tokan"],relatedGlossary:["Kwangilar smart","Kudin gas","Walat"],relatedFaq:["Menene Ethereum?","Menene kudin gas?"],relatedSources:["Ethereum.org"],relatedSafety:["Gargadin sabanin hanyar sadarwa"]},
    solana:{name:"Solana",symbol:"SOL",category:"layer1",overview:"Solana sarkar bayanai ce mai sauri sosai da kuma kudin amfani kadan. An tsara ta domin yawan muamala da saurin tabbatarwa.",role:"Tana wakiltar sabbin mataki na 1 da ke kokarin ba da sauri da arha fiye da tsofaffin hanyoyin sadarwa.",strengths:"Muamala masu sauri sosai. Kudaden hanyar sadarwa kadan. Tana da tsarin ayyuka mai girma na manhajoji.",limitations:"An taba samun matsalolin dakatarwar hanya. Wasu suna ganin tsarin ta ya fi karkata ga tsakaitawa.",beginnerNote:"Solana tana taimakawa mai farawa ya ga yadda sabbin sarkokin bayanai ke warware matsalar sauri.",relatedLessons:["Sarkar bayanai","Canja Wuri Cikin Aminci","Darussan Duniya ta Gaskiya"],relatedGlossary:["Mataki na 1","Muamala a sakan daya","Mai tabbatarwa"],relatedFaq:["Menene Solana?","Me ya sa hanyar sadarwa take da muhimmanci?"],relatedSources:["Takardun Solana"],relatedSafety:["Hadarin hanyar sadarwa"]},
    xrp:{name:"XRP",symbol:"XRP",category:"layer1",overview:"XRP kadara ce ta dijital da aka fi alakanta da biyan kudi cikin sauri da rahusa, musamman tsakanin kasashe.",role:"Yana wakiltar amfani da kudin dijital a wajen biyan kudi da tura kudi tsakanin kasashe.",strengths:"Tabbatar da muamala cikin sauri. Kudin aika kudi ya yi kasa. An fi fahimtarsa a bangaren biyan kudi.",limitations:"Ana ganin tsarin sa ya fi karkata ga tsakaitawa. Haka kuma ya taba fuskantar rashin tabbas na doka.",beginnerNote:"XRP yana nuna cewa ba duk kudaden dijital ake ginawa domin zama kudin ajiya ba; wasu an fi gina su ne domin amfani na biyan kudi.",relatedLessons:["Sarkar bayanai","Darussan Duniya ta Gaskiya"],relatedGlossary:["Tura kudi","Tsakaitawa"],relatedFaq:["Menene XRP?","Me ya sa wasu kudaden dijital suke mayar da hankali kan biyan kudi?"],relatedSources:["Shafin Ripple"],relatedSafety:["Hadarin ka'idoji"]},
    bnb:{name:"BNB",symbol:"BNB",category:"exchange",overview:"BNB shi ne tokan na asali a cikin tsarin BNB Chain kuma yana da alaka da ayyukan Binance.",role:"Ana amfani da shi wajen biyan kudade, samun rangwame, da amfani da wasu ayyuka a tsarin sa.",strengths:"Yana da babban tsarin ayyuka na manhajoji. Kudaden sa yawanci suna da sauki.",limitations:"Yana da alaka sosai da Binance, don haka mutane da yawa suna kallonsa da fuskar tsakaitawa.",beginnerNote:"BNB misali ne mai kyau na tokan na amfani da kuma tokan da ya taso daga tsarin musaya.",relatedLessons:["Walat","Ayyuka 5 na tokan"],relatedGlossary:["Musaya","Tokan"],relatedFaq:["Menene BNB?","Menene tokan na amfani?"],relatedSources:["Takardun BNB Chain"],relatedSafety:["Hadarin dandalin musaya"]},
    usdt:{name:"Tether",symbol:"USDT",category:"stablecoin",overview:"USDT babbar tsayayyen kudin dijital ce da aka tsara ta rika kusanci da dala ta Amurka 1:1.",role:"Ana amfani da ita domin ajiye kima a cikin kasuwar kudin dijital ba tare da canjin farashi mai yawa irin na sauran kudaden dijital ba.",strengths:"Tana da yawan amfani sosai. Tana da saukin musaya mai karfi. Ana karbarsa a wurare da yawa a kasuwar kudin dijital.",limitations:"Akwai tambayoyi game da ajiyar baya da gaskiyar bayani. Ita ma tana karkashin kulawar cibiyar fitarwa.",beginnerNote:"Tsayayyun kudaden dijital kamar USDT suna da amfani sosai, amma tsayayyen farashi ba yana nufin babu hadari ba.",relatedLessons:["Canja Wuri Cikin Aminci","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["Tsayayyen kudin dijital","Daidaitacciyar alaka","Saukakiyar musaya"],relatedFaq:["Menene USDT?","Shin tsayayyen kudin dijital ba shi da hadari?"],relatedSources:["Shafin Bayyananniyar Tether"],relatedSafety:["Hadarin kaucewar kima na tsayayyen kudin dijital"]},
    aave:{name:"Aave",symbol:"AAVE",category:"defi",overview:"Aave daya ne daga cikin shahararrun tsarukan kudi marasa tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance ta hanyar kwangilar smart.",role:"Yana wakiltar bangaren tsarin kudi marar tsakiya, wato ayyukan kudi da ke gudana ta lamba maimakon banki na gargajiya.",strengths:"Yana da tarihin tsaro mai kyau idan aka kwatanta da yawancin tsaruka. Yana da amfani wajen fahimtar tsarin kudi marar tsakiya a aikace.",limitations:"Yana iya rikitar da sababbin masu amfani. Hadarin kwangilar smart yana nan ko da dandali ya shahara.",beginnerNote:"Aave misali ne mai kyau idan kana son fahimtar bambanci tsakanin tsarin kudi marar tsakiya da banki na gargajiya.",relatedLessons:["Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["Tsarin kudi marar tsakiya","Lamuni","Lamunin take"],relatedFaq:["Menene AAVE?","Shin tsarin kudi marar tsakiya iri daya ne da banki?"],relatedSources:["Takardun Aave"],relatedSafety:["Hadarin kwangilar smart a tsarin kudi marar tsakiya"]},
    nft:{name:"NFT na Ethereum",symbol:"ETH/NFT",category:"nft",overview:"NFT tokan ne na musamman da ke wakiltar mallaka, shiga, ko wani abu na dijital da ba za a iya musanya shi daidai da wani iri daya ba.",role:"Ana amfani da su a fannin fasahar dijital, abubuwan tarawa, membobanci, da wasu abubuwan wasa.",strengths:"Suna ba da mallaka da ake iya tabbatarwa. Suna taimakawa wajen fahimtar yadda tokan zai iya wakiltar wani abu daban da kudin canji.",limitations:"Kasuwarsu tana da yawan zato da hawa da saukar farashi. Damfarar NFT da damfarar kama suna da yawa.",beginnerNote:"NFT suna da amfani wajen koyo, amma ya dace ka yi taka-tsantsan sosai idan kana kallonsu a matsayin zuba jari.",relatedLessons:["Walat","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["NFT","Tokan","Fitarwa"],relatedFaq:["Menene NFT?","Shin NFT hotuna kawai ne?"],relatedSources:["OpenSea Learn"],relatedSafety:["Kariya daga damfarar NFT"]},
    _other: clone((typeof coinEducation !== 'undefined' && coinEducation.ha && coinEducation.ha._other) ? coinEducation.ha._other : {})
  };

  Object.assign(HA_UI_FULL, {
    'home.glossaryDesc':"Bude Kamus domin fahimtar kalmomi kamar kudin gas, makullin jama'a, mai duba sarkar bayanai, kwangilar smart, rikon kadara, da gada cikin sauki.",
    'home.sourceDesc':"Bude Laburaren Madogara domin karanta makaloli na gaske da nassoshi na hukuma da aka tsara bisa zamba, musaya, tsayayyun kudaden dijital, da tsaron walat.",
    'sources.catStable':"Tsayayyun kudaden dijital",
    'sources.catDefi':"Tsarin kudi marar tsakiya",
    'glossary.explorer.term':"Mai duba sarkar bayanai",
    'glossary.explorer.body':"Shafi ko kayan aiki da ke nuna muamala da adireshi a kan sarkar bayanai.",
    'glossary.contract.term':"Kwangilar smart",
    'glossary.contract.body':"Lamba da ke kan sarkar bayanai wadda ke gudana kai tsaye idan sharuddan da aka sa sun cika.",
    'glossary.custody.term':"Rikon kadara",
    'glossary.custody.body':"Wanene ke rike da makullai da ikon shiga kadarori.",
    'glossary.bridge.term':"Gada",
    'glossary.bridge.body':"Kayan aiki da ke motsa kadarori ko sakonni tsakanin sarkokin bayanai daban-daban.",
    'glossary.haN1.body':"Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a iya duba bayanai ba tare da dogaro da kamfani guda ba.",
    'glossary.haN2.body':"Hanya ce da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kara sabon tubali.",
    'glossary.haN3.body':"Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital.",
    'glossary.haN4.body':"Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika.",
    'glossary.haN5.body':"Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai.",
    'glossary.haN6.body':"Asalin sarkar bayanai ce da ke da nata dokoki, tsaro, da tarihin muamala.",
    'glossary.haN7.body':"Ma'auni ne da ke nuna yawan muamalar da hanyar sadarwa za ta iya sarrafawa a sakan daya.",
    'glossary.haN8.body':"Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai.",
    'glossary.haN9.body':"Aika kudi daga wuri ko kasa guda zuwa wata, yawanci domin iyali ko kasuwanci.",
    'glossary.haN10.body':"Yanayi ne da iko ko yanke hukunci yake taruwa a hannun bangare kadan maimakon ya bazu sosai.",
    'glossary.haN11.body':"Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital.",
    'glossary.haN12.body':"Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari.",
    'glossary.haN13.body':"Tokan da aka tsara ya rike kima mai dan kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat.",
    'glossary.haN14.body':"Alakar kima da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka.",
    'glossary.haN15.body':"Yadda saukin saye ko sayar da kadara yake ba tare da canza farashinta sosai ba.",
    'glossary.haN16.body':"Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba.",
    'glossary.haN17.body':"Bada damar a aro kadara, yawanci tare da jingina ko biyan ruwa.",
    'glossary.haN18.body':"Rance ne da ake aro kuma a biya shi gaba daya a cikin muamala guda a kan sarkar bayanai.",
    'glossary.haN19.body':"Tokan ne na musamman da ke wakiltar mallaka, asali, ko damar shiga ga wani abu na dijital ko na zahiri.",
    'glossary.haN20.body':"Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai."
  });

  Object.assign(HA_EXTRA_UI_FULL, {
    'v.ledger':"Littafin rajista",
    'v.node':"Nodi",
    'v.network':"Hanyar sadarwa",
    'v.txid':"Lambar gano muamala",
    'v.stablecoin':"Tsayayyen kudin dijital",
    'v.roleDesc1':"Ayyukan kudi da lamba ke tafiyarwa.",
    'v.phishing':"Damfarar kama",
    'v.custody':"Rikon kadara",
    'v.riskDesc3':"Kalmar tsayayye tana bayyana buri, ba tabbacin cewa kowane yanayi zai kasance lafiya ba.",
    'v.networkDesc':"Tabbatar da hanyar sadarwa kafin ka aika.",
    'v.txidDesc':"Yi amfani da lambar muamala domin tabbatar da cikakkun bayanan canjin.",
    'v.explorer':"Mai duba sarkar bayanai",
    'v.contract':"Kwangilar smart",
    'v.bridge':"Gada",
    'sources.pageDesc':"Jerin makaloli, rahotanni, da takardun hukuma da za su taimaka ka hada darussa da misalan duniya ta gaskiya."
  });

  Object.assign(HA_GLOSSARY_FULL, {
    blockchain:{title:"Sarkar bayanai",body:"Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a iya duba bayanai ba tare da dogaro da kamfani guda ba."},
    mining:{title:"Hakowa",body:"Hanya ce da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kara sabon tubali."},
    wallet:{title:"Walat",body:"Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital."},
    smartContract:{title:"Kwangilar smart",body:"Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika."},
    gasFee:{title:"Kudin gas",body:"Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai."},
    layer1:{title:"Mataki na 1",body:"Asalin sarkar bayanai ce da ke da nata dokoki, tsaro, da tarihin muamala."},
    tps:{title:"Muamala a sakan daya",body:"Ma'auni ne da ke nuna yawan muamalar da hanyar sadarwa za ta iya sarrafawa a sakan daya."},
    validator:{title:"Mai tabbatarwa",body:"Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai."},
    remittance:{title:"Tura kudi",body:"Aika kudi daga wuri ko kasa guda zuwa wata, yawanci domin iyali ko kasuwanci."},
    centralization:{title:"Tsakaitawa",body:"Yanayi ne da iko ko yanke hukunci yake taruwa a hannun bangare kadan maimakon ya bazu sosai."},
    exchange:{title:"Musaya",body:"Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital."},
    token:{title:"Tokan",body:"Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari."},
    stablecoin:{title:"Tsayayyen kudin dijital",body:"Tokan da aka tsara ya rike kima mai dan kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat."},
    peg:{title:"Daidaitacciyar alaka",body:"Alakar kima da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka."},
    liquidity:{title:"Saukakiyar musaya",body:"Yadda saukin saye ko sayar da kadara yake ba tare da canza farashinta sosai ba."},
    defi:{title:"Tsarin kudi marar tsakiya",body:"Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba."},
    lending:{title:"Lamuni",body:"Bada damar a aro kadara, yawanci tare da jingina ko biyan ruwa."},
    flashLoan:{title:"Lamunin take",body:"Rance ne da ake aro kuma a biya shi gaba daya a cikin muamala guda a kan sarkar bayanai."},
    nft:{title:"NFT",body:"Tokan ne na musamman da ke wakiltar mallaka, asali, ko damar shiga ga wani abu na dijital ko na zahiri."},
    mint:{title:"Fitarwa",body:"Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai."}
  });

  Object.assign(HA_FAQ_FULL, {
    ethereum:{title:"Menene Ethereum?",body:"Ethereum sarkar bayanai ce da aka gina domin kwangilolin smart da manhajojin da ke gudana a kai. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna amfani da ita."},
    gas:{title:"Menene kudin gas?",body:"Kudin gas shi ne kudin hanyar sadarwa da ake biya domin sarkar bayanai ta sarrafa kuma ta rubuta muamala."},
    solana:{title:"Menene Solana?",body:"Solana sarkar bayanai ce mai sauri da aka fi sani da kudin amfani mai sauki da saurin tabbatar da muamala."},
    networkMatter:{title:"Me ya sa hanyar sadarwa take da muhimmanci?",body:"Kadara guda na iya kasancewa a fiye da hanya daya. Idan hanyar aikawa da ta karba ba su dace ba, kudi na iya makale ko salwanta."},
    payments:{title:"Me ya sa wasu kudaden dijital suke mayar da hankali kan biyan kudi?",body:"Kowane aikin kudin dijital yana kokarin warware matsala dabam. Wasu kudaden dijital suna kokarin motsa kima cikin sauri da rahusa."},
    utilityToken:{title:"Menene tokan na amfani?",body:"Tokan na amfani ana amfani da shi ne wajen samun damar amfani da kaya, samun rangwame, ko wasu siffofi a cikin wani tsari."},
    stableRisk:{title:"Shin tsayayyen kudin dijital ba shi da hadari?",body:"A'a. Tsayayyun kudaden dijital suna neman kwanciyar hankali na farashi, amma har yanzu suna da hadarin ajiyar baya, mai fitarwa, saukin musaya, da rasa daidaituwar kima."},
    aave:{title:"Menene AAVE?",body:"AAVE tokan ne da ke da alaka da Aave, tsarin kudi marar tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance da kudaden dijital."},
    defiBank:{title:"Shin tsarin kudi marar tsakiya iri daya ne da banki?",body:"A'a. Tsarin kudi marar tsakiya na iya ba da wasu ayyuka masu kama da banki, amma yana aiki da kwangilolin smart kuma baya bayar da irin kariyar doka ta banki."},
    nftPictures:{title:"Shin NFT hotuna kawai ne?",body:"A'a. Hotuna sun yi yawa, amma ainihin NFT shi ne rikodin mallaka ko damar shiga da ake iya tabbatarwa a sarkar bayanai."}
  });

  Object.assign(HA_SAFETY_FULL, {
    seed:{title:"Tsaron jimlar dawo da walat",body:"Jimlar dawo da walat ita ce babbar hanyar dawo da walat. Ajiye ta ba tare da intanet ba, a boye, kuma kada ta shiga hoton allo ko ma'ajiyar yanar gizo."},
    networkMismatch:{title:"Gargadin sabanin hanyar sadarwa",body:"Kafin aika kudin dijital ko tokan, ka tabbatar hanyar aikawa da ta karba sun yi daidai."},
    networkRisk:{title:"Hadarin hanyar sadarwa",body:"Kowace sarkar bayanai tana da nata hadarin aiki da aminci. Cunkoso, yankewa, ko matsalar masu tabbatarwa na iya shafar masu amfani."},
    exchange:{title:"Hadarin dandalin musaya",body:"Idan kadarorinka suna kan dandalin musaya, kana dogara da wannan dandali ya kare su kuma ya ba ka damar cire su."},
    stableDepeg:{title:"Hadarin kaucewar kima na tsayayyen kudin dijital",body:"Tsayayyen kudin dijital na iya kaucewa kimar da ake so idan ajiyar baya, amana, ko saukin musaya suka raunana."},
    defiSmart:{title:"Hadarin kwangilar smart a tsarin kudi marar tsakiya",body:"Amfani da tsarin kudi marar tsakiya yana nufin amincewa da lamba. Kuskure a lamba, cin gajiyar rauni, ko sabuntawa mara tsaro na iya saka kudinka cikin hadari."},
    nftScam:{title:"Kariya daga damfarar NFT",body:"Ka duba hanyoyin shiga, kasuwannin saye da sayarwa, tarin abubuwa, da izinin walat sosai kafin ka hada walat ko ka sa hannu."}
  });

  Object.assign(HA_SOURCE_ENTRIES_FULL, {
    bitcoinWhitepaper:['basics','Bitcoin.org','Takardar Asalin Bitcoin','Takardar asali da ta bayyana yadda Bitcoin ke aiki da dalilin gabatar da tsarin kudin dijital marar cibiyar guda.','https://bitcoin.org/bitcoin.pdf','Sarkar bayanai','Madogara ce ta farko mai kyau domin fahimtar Bitcoin a matakin tsarin sa.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Gabatarwar hukuma mai saukin fahimta ga Ethereum, kwangilolin smart dinsa, da tsarin ayyukan da aka gina a kansa.','https://ethereum.org/en/what-is-ethereum/','Ayyuka 5 na tokan','Yana hada Ethereum da kwangilolin smart, manhajoji, da tsarukan tokan.'],
    solanaDocs:['basics','Solana Foundation','Takardun Solana','Takardun hukuma da ke gabatar da tsarin hanyar sadarwa, kayan aiki, da tsarin ayyukan Solana.','https://solana.com/docs','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar yadda saurin mataki na 1 ke bayyana tsarin gininsa.'],
    rippleSite:['basics','Ripple','Shafin Ripple','Takaitaccen bayani na hukuma kan kayayyakin Ripple masu mayar da hankali kan biyan kudi da bayanan XRP.','https://ripple.com/xrp/','Darussan Duniya ta Gaskiya','Yana nuna yadda XRP ke fitowa a yanayin biyan kudi da tura kudi tsakanin kasashe.'],
    bnbDocs:['basics','BNB Chain','Takardun BNB Chain','Takardun hukuma na BNB Chain, kayan aikin sa, da yadda ake amfani da hanyarsa.','https://docs.bnbchain.org/','Ayyuka 5 na tokan','Yana taimakawa bayyana yadda tokan na amfani ke tallafawa tsarin BNB Chain mai fadi.'],
    tetherTransparency:['stable','Tether','Shafin Bayyananniyar Tether','Shafin hukuma da ke nuna bayanan ajiyar baya da fitowar USDT.','https://tether.to/en/transparency/','Darussan Duniya ta Gaskiya','Yana da amfani wajen tattauna bayyananniyar ajiyar baya da tambayoyin amana kan tsayayyun kudaden dijital.'],
    aaveDocs:['defi','Aave','Takardun Aave','Takardun hukuma game da kasuwannin lamuni na Aave, tunanin hadari, da tsarin aikin sa.','https://aave.com/docs','Ayyuka 5 na tokan',"Yana hada ra'ayin tsarin kudi marar tsakiya na lamuni da wani ainihin tsari da mai farawa zai iya duba."],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Shafukan koyarwa ga masu farawa kan NFT, kasuwannin saye da sayarwa, da asalin tattarawa.','https://opensea.io/learn','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar kalmomin tsarin NFT da tafiyar mai amfani.']
  });

  HA_SOURCE_CATS = [
    { key:'scams', label:'Zamba' },
    { key:'exchanges', label:'Musaya' },
    { key:'stable', label:'Tsayayyun kudaden dijital' },
    { key:'wallet', label:'Tsaron Walat' },
    { key:'cases', label:'Misalan Gaske' },
    { key:'basics', label:'Asali' },
    { key:'defi', label:'Tsarin kudi marar tsakiya' },
    { key:'reg', label:"Ka'idoji" }
  ];

  Object.assign(HA_COIN_EDUCATION_FULL._labels, {
    coinResults:"Sakamakon kudaden dijital",
    internalResults:"Sakamakon cikin shafi"
  });

  HA_COIN_EDUCATION_FULL.bitcoin = {
    name:"Bitcoin",symbol:"BTC",category:"layer1",
    overview:"Bitcoin shi ne kudin dijital na farko da ya yi fice a duniya. An gina shi a matsayin kudi na dijital da zai iya aiki ba tare da banki ko cibiyar kula guda ba.",
    role:"Ana kallonsa a matsayin zinari na dijital kuma ana amfani da shi wajen ajiye kima ko tura kudi ba tare da matsakaici ba.",
    strengths:"Babbar hanyar sadarwa mai karfin tsaro. Mafi sanannen suna a kasuwa. Adadinsa ya takaitu zuwa miliyan 21.",
    limitations:"Ayyukansa ba su da sauri kamar wasu sabbin sarkokin bayanai. Tsarin hakowarsa yana bukatar karin makamashi.",
    beginnerNote:"Bitcoin yawanci shi ne mafi kyawun wurin fara fahimtar asalin duniyar kudin dijital.",
    relatedLessons:["Sarkar bayanai","Walat","Canja Wuri Cikin Aminci"],
    relatedGlossary:["Sarkar bayanai","Hakowa","Walat"],
    relatedFaq:["Menene Bitcoin?"],
    relatedSources:["Takardar Asalin Bitcoin"],
    relatedSafety:["Tsaron jimlar dawo da walat"]
  };

  HA_COIN_EDUCATION_FULL.ethereum = {
    name:"Ethereum",symbol:"ETH",category:"layer1",
    overview:"Ethereum sarkar bayanai ce mai iya tafiyar da kwangilolin smart da manhajojin da ba sa bukatar cibiyar tsakiya. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna dogara da ita.",
    role:"Ita ce babban tushe na kwangilolin smart da tsarin ayyuka masu yawa a duniyar kudin dijital.",
    strengths:"Babban tsarin masu kirkira da manhajoji. Tana ba da damar sabbin kayayyakin kudin dijital da yawa.",
    limitations:"Kudin gas na iya tsada idan hanyar sadarwa ta cika. Tana da sarkakiya ga sababbin masu amfani fiye da Bitcoin.",
    beginnerNote:"Idan kana son fahimtar yadda yawancin sabbin ayyukan kudin dijital ke aiki, Ethereum tana da muhimmanci sosai.",
    relatedLessons:["Sarkar bayanai","Walat","Ayyuka 5 na tokan"],
    relatedGlossary:["Kwangilar smart","Kudin gas","Walat"],
    relatedFaq:["Menene Ethereum?","Menene kudin gas?"],
    relatedSources:["Ethereum.org"],
    relatedSafety:["Gargadin sabanin hanyar sadarwa"]
  };

  HA_COIN_EDUCATION_FULL.solana = {
    name:"Solana",symbol:"SOL",category:"layer1",
    overview:"Solana sarkar bayanai ce mai sauri sosai da kuma kudin amfani kadan. An tsara ta domin yawan muamala da saurin tabbatarwa.",
    role:"Tana wakiltar sabbin mataki na 1 da ke kokarin ba da sauri da arha fiye da tsofaffin hanyoyin sadarwa.",
    strengths:"Muamala masu sauri sosai. Kudaden hanyar sadarwa kadan. Tana da tsarin ayyuka mai girma na manhajoji.",
    limitations:"An taba samun matsalolin dakatarwar hanya. Wasu suna ganin tsarin ta ya fi karkata ga tsakaitawa.",
    beginnerNote:"Solana tana taimakawa mai farawa ya ga yadda sabbin sarkokin bayanai ke warware matsalar sauri.",
    relatedLessons:["Sarkar bayanai","Canja Wuri Cikin Aminci","Darussan Duniya ta Gaskiya"],
    relatedGlossary:["Mataki na 1","Muamala a sakan daya","Mai tabbatarwa"],
    relatedFaq:["Menene Solana?","Me ya sa hanyar sadarwa take da muhimmanci?"],
    relatedSources:["Takardun Solana"],
    relatedSafety:["Hadarin hanyar sadarwa"]
  };

  HA_COIN_EDUCATION_FULL.xrp = {
    name:"XRP",symbol:"XRP",category:"layer1",
    overview:"XRP kadara ce ta dijital da aka fi alakanta da biyan kudi cikin sauri da rahusa, musamman tsakanin kasashe.",
    role:"Yana wakiltar amfani da kudin dijital a wajen biyan kudi da tura kudi tsakanin kasashe.",
    strengths:"Tabbatar da muamala cikin sauri. Kudin aika kudi ya yi kasa. An fi fahimtarsa a bangaren biyan kudi.",
    limitations:"Ana ganin tsarin sa ya fi karkata ga tsakaitawa. Haka kuma ya taba fuskantar rashin tabbas na doka.",
    beginnerNote:"XRP yana nuna cewa ba duk kudaden dijital ake ginawa domin zama kudin ajiya ba; wasu an fi gina su ne domin amfani na biyan kudi.",
    relatedLessons:["Sarkar bayanai","Darussan Duniya ta Gaskiya"],
    relatedGlossary:["Tura kudi","Tsakaitawa"],
    relatedFaq:["Menene XRP?","Me ya sa wasu kudaden dijital suke mayar da hankali kan biyan kudi?"],
    relatedSources:["Shafin Ripple"],
    relatedSafety:["Hadarin ka'idoji"]
  };

  HA_COIN_EDUCATION_FULL.bnb = {
    name:"BNB",symbol:"BNB",category:"exchange",
    overview:"BNB shi ne tokan na asali a cikin tsarin BNB Chain kuma yana da alaka da ayyukan Binance.",
    role:"Ana amfani da shi wajen biyan kudade, samun rangwame, da amfani da wasu ayyuka a tsarin sa.",
    strengths:"Yana da babban tsarin ayyuka na manhajoji. Kudaden sa yawanci suna da sauki.",
    limitations:"Yana da alaka sosai da Binance, don haka mutane da yawa suna kallonsa da fuskar tsakaitawa.",
    beginnerNote:"BNB misali ne mai kyau na tokan na amfani da kuma tokan da ya taso daga tsarin musaya.",
    relatedLessons:["Walat","Ayyuka 5 na tokan"],
    relatedGlossary:["Musaya","Tokan"],
    relatedFaq:["Menene BNB?","Menene tokan na amfani?"],
    relatedSources:["Takardun BNB Chain"],
    relatedSafety:["Hadarin dandalin musaya"]
  };

  HA_COIN_EDUCATION_FULL.usdt = {
    name:"Tether",symbol:"USDT",category:"stablecoin",
    overview:"USDT daya ce daga cikin manyan tsayayyun kudaden dijital da aka tsara ta rika kusanci da dala ta Amurka 1:1.",
    role:"Ana amfani da ita domin ajiye kima a cikin kasuwar kudin dijital ba tare da canjin farashi mai yawa irin na sauran kudaden dijital ba.",
    strengths:"Tana da yawan amfani sosai. Tana da saukin musaya mai karfi. Ana karbarsa a wurare da yawa a kasuwar kudin dijital.",
    limitations:"Akwai tambayoyi game da ajiyar baya da gaskiyar bayani. Ita ma tana karkashin kulawar cibiyar fitarwa.",
    beginnerNote:"Tsayayyun kudaden dijital kamar USDT suna da amfani sosai, amma tsayayyen farashi ba yana nufin babu hadari ba.",
    relatedLessons:["Canja Wuri Cikin Aminci","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],
    relatedGlossary:["Tsayayyen kudin dijital","Daidaitacciyar alaka","Saukakiyar musaya"],
    relatedFaq:["Menene USDT?","Shin tsayayyen kudin dijital ba shi da hadari?"],
    relatedSources:["Shafin Bayyananniyar Tether"],
    relatedSafety:["Hadarin kaucewar kima na tsayayyen kudin dijital"]
  };

  HA_COIN_EDUCATION_FULL.aave = {
    name:"Aave",symbol:"AAVE",category:"defi",
    overview:"Aave daya ne daga cikin shahararrun tsarukan kudi marasa tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance ta hanyar kwangilar smart.",
    role:"Yana wakiltar bangaren tsarin kudi marar tsakiya, wato ayyukan kudi da ke gudana ta lamba maimakon banki na gargajiya.",
    strengths:"Yana da tarihin tsaro mai kyau idan aka kwatanta da yawancin tsaruka. Yana da amfani wajen fahimtar tsarin kudi marar tsakiya a aikace.",
    limitations:"Yana iya rikitar da sababbin masu amfani. Hadarin kwangilar smart yana nan ko da dandali ya shahara.",
    beginnerNote:"Aave misali ne mai kyau idan kana son fahimtar bambanci tsakanin tsarin kudi marar tsakiya da banki na gargajiya.",
    relatedLessons:["Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],
    relatedGlossary:["Tsarin kudi marar tsakiya","Lamuni","Lamunin take"],
    relatedFaq:["Menene AAVE?","Shin tsarin kudi marar tsakiya iri daya ne da banki?"],
    relatedSources:["Takardun Aave"],
    relatedSafety:["Hadarin kwangilar smart a tsarin kudi marar tsakiya"]
  };

  HA_COIN_EDUCATION_FULL.nft = {
    name:"NFT na Ethereum",symbol:"ETH/NFT",category:"nft",
    overview:"NFT tokan ne na musamman da ke wakiltar mallaka, shiga, ko wani abu na dijital da ba za a iya musanya shi daidai da wani iri daya ba.",
    role:"Ana amfani da su a fannin fasahar dijital, abubuwan tarawa, membobanci, da wasu abubuwan wasa.",
    strengths:"Suna ba da mallaka da ake iya tabbatarwa. Suna taimakawa wajen fahimtar yadda tokan zai iya wakiltar wani abu daban da kudin canji.",
    limitations:"Kasuwarsu tana da yawan zato da hawa da saukar farashi. Damfarar NFT da damfarar kama suna da yawa.",
    beginnerNote:"NFT suna da amfani wajen koyo, amma ya dace ka yi taka-tsantsan sosai idan kana kallonsu a matsayin zuba jari.",
    relatedLessons:["Walat","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],
    relatedGlossary:["NFT","Tokan","Fitarwa"],
    relatedFaq:["Menene NFT?","Shin NFT hotuna kawai ne?"],
    relatedSources:["OpenSea Learn"],
    relatedSafety:["Kariya daga damfarar NFT"]
  };

  HA_COIN_EDUCATION_FULL._other = Object.assign({}, HA_COIN_EDUCATION_FULL._other || {}, {
    'cardano':'Sarkar bayanai da aka gina bisa bincike mai zurfi kuma ta fi mayar da hankali kan dorewa.',
    'polkadot':'Tsari mai hada sarkokin bayanai daban-daban domin su iya musayar bayanai.',
    'avalanche':'Sarkar bayanai mai sauri kuma mai rahusa domin manhajoji da kananan hanyoyin sadarwa na musamman.',
    'chainlink':'Babbar hanyar orakal da ke hada kwangilolin smart da bayanan duniya ta gaskiya.',
    'polygon':'Maganin fadada aiki na Ethereum da ke ba da sauri da rahusa.',
    'litecoin':'Daya daga cikin tsoffin madadin Bitcoin da aka tsara domin biyan kudi cikin sauri.',
    'dogecoin':'Kudin barkwanci da ya shahara sosai, wanda aka fara ne a matsayin barkwanci.',
    'shiba-inu':'Tokan barkwanci da ya samu karbuwa bayan Dogecoin kuma ya gina karin ayyuka a kansa.',
    'uniswap':'Babban dandalin musaya na kai tsaye da ke ba da damar musayar tokan ba tare da matsakaici ba.',
    'cosmos':'Tsarin sarkokin bayanai da ke kokarin hada su su yi aiki tare.',
    'near':'Sarkar bayanai ta mataki na 1 mai saukin amfani da aka tsara domin fadadawa.',
    'algorand':'Sarkar bayanai mai sauri da ke mayar da hankali kan tsaro da rarraba iko.',
    'fantom':'Sarkar bayanai mai sauri da ake tafiyarwa da tsarin amincewa irin na DAG.',
    'tron':'Sarkar bayanai da aka fi danganta da raba abun ciki da nishadi, tare da yawan muamala.',
    'stellar':'Hanyar biyan kudi domin canja wuri cikin sauri da rahusa tsakanin kasashe.',
    'hedera':"Babbar hanyar sadarwa ta jama'a da ke amfani da Hashgraph maimakon sarkar bayanai ta gargajiya.",
    'vechain':'Sarkar bayanai da ke mayar da hankali kan bin diddigin sarkar kayayyaki da mafita ga kamfanoni.',
    'aptos':'Sarkar bayanai ta mataki na 1 da ke amfani da harshen shirye-shirye na Move.',
    'sui':'Sarkar bayanai ta mataki na 1 mai sauri wadda ita ma ke amfani da harshen Move domin manhajojin masu amfani.',
    'arbitrum':'Daya daga cikin manyan mataki na 2 na Ethereum domin rage farashi da kara sauri.',
    'optimism':"Mataki na 2 na Ethereum da ke mayar da hankali kan tallafawa ayyukan al'umma.",
    'filecoin':'Hanyar adana bayanai ba tare da cibiyar guda ba inda masu amfani ke bayar da sararin ajiya.',
    'the-graph':'Tsarin tsara bayanai domin tambayar bayanan sarkar bayanai cikin sauki.',
    'maker':'Tsarin da ke bayan tsayayyen kudin dijital DAI kuma muhimmin bangare ne a tsarin kudi marar tsakiya.',
    'compound':'Tsarin kudi marar tsakiya na lamuni da ya shahara wajen kasuwar ruwa ta atomatik.',
    'lido':'Babban tsari na ajiya mai saukin motsa kima da ke ba masu amfani damar saka ETH domin samun lada ba tare da rasa saukin amfani da shi ba.',
    'pepe':'Kudin barkwanci mai tsananin hadari da dogaro da zato.',
    'toncoin':"Sarkar bayanai ta al'umma da asalinta ya danganci Telegram domin sakonni da biyan kudi.",
    'sei':'Sarkar bayanai ta mataki na 1 da aka inganta musamman domin ciniki da ayyukan musaya.',
    'injective':'Sarkar bayanai da aka gina domin manhajojin kudi marar tsakiya.',
    'render':'Hanyar rarraba aikin zanen GPU domin masu zane, masu kirkira, da ayyukan AI.',
    'mantle':'Mataki na 2 na Ethereum da ke da alaka da BitDAO kuma yana amfani da tsarin gini mai sassauci.',
    'celestia':'Sarkar bayanai mai bangarori daban-daban da ke mayar da hankali kan samuwar bayanai.',
    'stacks':'Mataki na 2 na Bitcoin da ke kawo kwangilolin smart da manhajoji kusa da hanyar Bitcoin.',
    'immutable':'Mataki na 2 da aka fi mayar da hankali kan wasannin NFT tare da fitarwa da ciniki ba tare da gas ba.',
    'kaspa':'Kudin dijital mai tsarin hakowa da ke amfani da BlockDAG domin saurin sarrafa tubalan da yawa a lokaci guda.',
    'bonk':"Tokan barkwanci mai tushe a Solana da ya taimaka dawo da sha'awa a tsarin Solana.",
    'floki':'Kudin barkwanci da ke kokarin hada barkwanci da wasu ayyukan amfani.',
    'usdc':'Tsayayyen kudin dijital da Circle ke fitarwa bisa doka kuma yake goyon bayan dala 1:1.',
    'dai':'Tsayayyen kudin dijital mai karkata ga rarraba iko daga MakerDAO da ke samun goyon bayan kadarorin dijital.',
    'monero':'Kudin dijital da ya fi mayar da hankali kan sirri ta hanyar boye bayanan muamala.',
    'zcash':'Kudin sirri da ke ba da damar boyayyun muamala ta amfani da fasahar hujja ba tare da bayyanawa ba.'
  });

  Object.assign(HA_UI_FULL, {
    'nav.l1':"Sarkar bayanai",
    'nav.l4':"Ayyuka 5 na tokan",
    'nav.l4sub':"Fahimtar rawar tokan",
    'topic.blockchain':"Menene sarkar bayanai?",
    'topic.roles':"Yaya ayyukan tokan suke bambanta?",
    'home.title':"Koyi kudin dijital mataki-mataki",
    'glossary.desc':"Saukakan ma'anoni ga muhimman kalmomin kudin dijital. Karanta su nan idan wani darasi ya yi maka sabo.",
    'home.glossaryDesc':"Bude Kamus domin fahimtar kalmomi kamar kudin gas, makullin jama'a, mai duba sarkar bayanai, kwangilar smart, rikon kadara, da gada cikin sauki.",
    'home.sourceDesc':"Bude Laburaren Madogara domin karanta makaloli na gaske da nassoshi na hukuma da aka tsara bisa zamba, musaya, tsayayyun kudaden dijital, da tsaron walat.",
    'sources.catStable':"Tsayayyun kudaden dijital",
    'sources.catDefi':"Tsarin kudi marar tsakiya"
  });

  Object.assign(HA_EXTRA_UI_FULL, {
    'v.wallet':"Walat",
    'v.network':"Hanyar sadarwa",
    'v.txid':"Lambar gano muamala",
    'v.stablecoin':"Tsayayyen kudin dijital",
    'v.defi':"Tsarin kudi marar tsakiya",
    'v.phishing':"Damfarar kama",
    'v.networkDesc':"Tabbatar da hanyar sadarwa kafin ka aika.",
    'v.txidDesc':"Yi amfani da lambar gano muamala (TxID) domin tabbatar da ainihin bayanan canjin.",
    'v.explorer':"Mai duba sarkar bayanai"
  });

  Object.assign(HA_GLOSSARY_FULL, {
    blockchain:{title:"Sarkar bayanai",body:"Tsarin rajista ne da kwamfutoci da yawa ke kula da shi tare domin a iya duba bayanai ba tare da dogaro da kamfani guda ba."},
    mining:{title:"Hakowa",body:"Hanya ce da wasu sarkokin bayanai ke amfani da karfin kwamfuta domin tabbatar da muamala da kara sabon tubali."},
    wallet:{title:"Walat",body:"Kayan aiki ne da ke kula da makullanka sannan ya ba ka damar shiga, aikawa, da karbar kadarorin dijital."},
    smartContract:{title:"Kwangilar smart",body:"Lamba ce da ke kan sarkar bayanai wadda ke aiwatar da kanta idan sharuddan da aka sa sun cika."},
    gasFee:{title:"Kudin gas",body:"Kudin hanyar sadarwa da ake biya domin a sarrafa kuma a rubuta muamala a kan sarkar bayanai."},
    validator:{title:"Mai tabbatarwa",body:"Mai shiga hanyar sadarwa da ke taimakawa duba da tabbatar da muamala da tubalan a wasu sarkokin bayanai."},
    exchange:{title:"Musaya",body:"Dandali ne da masu amfani ke saya, sayarwa, ko musayar kadarorin dijital."},
    token:{title:"Tokan",body:"Kadara ce ta dijital da aka fitar a kan sarkar bayanai, yawanci tana da takamaiman aiki a wani tsari."},
    stablecoin:{title:"Tsayayyen kudin dijital",body:"Tokan da aka tsara ya rike kima mai dan kwanciyar hankali, sau da yawa yana bin dala ko wata kudin fiat."},
    defi:{title:"Tsarin kudi marar tsakiya",body:"Ayyukan kudi ne da ke gudana a kan sarkar bayanai kamar rance, ciniki, da ajiya ba tare da banki na gargajiya a tsakiya ba."},
    peg:{title:"Daidaitacciyar alaka",body:"Alakar kima da tokan ke kokarin rikewa da wata kadara, misali 1:1 da dalar Amurka."},
    mint:{title:"Fitarwa",body:"Kirkira da fitar da sabon tokan ko NFT a kan sarkar bayanai."}
  });

  Object.assign(HA_FAQ_FULL, {
    bitcoin:{title:"Menene Bitcoin?",body:"Bitcoin shi ne babban kudin dijital na farko da aka sani sosai. An tsara shi a matsayin kudi na dijital da zai iya aiki ba tare da banki na tsakiya ba."},
    ethereum:{title:"Menene Ethereum?",body:"Ethereum sarkar bayanai ce da aka gina domin kwangilolin smart da manhajojin da ke gudana a kai. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna amfani da ita."},
    solana:{title:"Menene Solana?",body:"Solana sarkar bayanai ce mai sauri da aka fi sani da kudin amfani mai sauki da saurin tabbatar da muamala."},
    networkMatter:{title:"Me ya sa hanyar sadarwa take da muhimmanci?",body:"Kadara guda na iya kasancewa a fiye da hanya daya. Idan hanyar aikawa da ta karba ba su dace ba, kudi na iya makale ko salwanta."},
    payments:{title:"Me ya sa wasu kudaden dijital suke mayar da hankali kan biyan kudi?",body:"Kowane aikin kudin dijital yana kokarin warware matsala dabam. Wasu kudaden dijital suna kokarin motsa kima cikin sauri da rahusa."},
    gas:{title:"Menene kudin gas?",body:"Kudin gas shi ne kudin hanyar sadarwa da ake biya domin sarkar bayanai ta sarrafa kuma ta rubuta muamala."},
    utilityToken:{title:"Menene tokan na amfani?",body:"Tokan na amfani ana amfani da shi ne wajen samun damar amfani da kaya, samun rangwame, ko wasu siffofi a cikin wani tsari."},
    usdt:{title:"Menene USDT?",body:"USDT tsayayyen kudin dijital ne da Tether ke fitarwa wanda aka tsara ya tsaya kusa da dalar Amurka daya."},
    stableRisk:{title:"Shin tsayayyen kudin dijital ba shi da hadari?",body:"A'a. Tsayayyun kudaden dijital suna neman kwanciyar hankali na farashi, amma har yanzu suna da hadarin ajiyar baya, mai fitarwa, saukin musaya, da rasa daidaituwar kima."},
    aave:{title:"Menene AAVE?",body:"AAVE tokan ne da ke da alaka da Aave, tsarin kudi marar tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance da kudaden dijital."},
    defiBank:{title:"Shin tsarin kudi marar tsakiya iri daya ne da banki?",body:"A'a. Tsarin kudi marar tsakiya na iya ba da wasu ayyuka masu kama da banki, amma yana aiki da kwangilolin smart kuma baya bayar da irin kariyar doka ta banki."},
    nft:{title:"Menene NFT?",body:"NFT tokan ne na musamman da zai iya wakiltar mallaka, ainihi, ko damar shiga da aka daure da wani abu takamaimai."},
    nftPictures:{title:"Shin NFT hotuna kawai ne?",body:"A'a. Hotuna sun yi yawa, amma ainihin NFT shi ne rikodin mallaka ko damar shiga da ake iya tabbatarwa a sarkar bayanai."}
  });

  Object.assign(HA_SAFETY_FULL, {
    networkMismatch:{title:"Gargadin sabanin hanyar sadarwa",body:"Kafin aika kudin dijital ko tokan, ka tabbatar hanyar aikawa da ta karba sun yi daidai."},
    networkRisk:{title:"Hadarin hanyar sadarwa",body:"Kowace sarkar bayanai tana da nata hadarin aiki da aminci. Cunkoso, yankewa, ko matsalar masu tabbatarwa na iya shafar masu amfani."},
    exchange:{title:"Hadarin dandalin musaya",body:"Idan kadarorinka suna kan dandalin musaya, kana dogara da wannan dandali ya kare su kuma ya ba ka damar cire su."},
    stableDepeg:{title:"Hadarin kaucewar kima na tsayayyen kudin dijital",body:"Tsayayyen kudin dijital na iya kaucewa kimar da ake so idan ajiyar baya, amana, ko saukin musaya suka raunana."},
    defiSmart:{title:"Hadarin kwangilar smart a tsarin kudi marar tsakiya",body:"Amfani da tsarin kudi marar tsakiya yana nufin amincewa da lamba. Kuskure a lamba, cin gajiyar rauni, ko sabuntawa mara tsaro na iya saka kudinka cikin hadari."}
  });

  Object.assign(HA_SOURCE_ENTRIES_FULL, {
    solanaDocs:['basics','Solana Foundation','Takardun Solana','Takardun hukuma da ke gabatar da tsarin hanyar sadarwa, kayan aiki, da tsarin ayyukan Solana.','https://solana.com/docs','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar yadda saurin babbar hanyar sadarwa ke bayyana tsarin gininsa.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Gabatarwar hukuma mai saukin fahimta ga Ethereum, kwangilolin smart dinsa, da tsarin ayyukan da aka gina a kansa.','https://ethereum.org/en/what-is-ethereum/','Ayyuka 5 na tokan','Yana hada Ethereum da kwangilolin smart, manhajoji, da tsarukan tokan.'],
    bnbDocs:['basics','BNB Chain','Takardun BNB Chain','Takardun hukuma na BNB Chain, kayan aikin sa, da yadda ake amfani da hanyarsa.','https://docs.bnbchain.org/','Ayyuka 5 na tokan','Yana taimakawa bayyana yadda tokan na amfani ke tallafawa tsarin BNB Chain mai fadi.'],
    tetherTransparency:['stable','Tether','Shafin Bayyananniyar Tether','Shafin hukuma da ke nuna bayanan ajiyar baya da fitowar USDT.','https://tether.to/en/transparency/','Darussan Duniya ta Gaskiya','Yana da amfani wajen tattauna bayyananniyar ajiyar baya da tambayoyin amana kan tsayayyun kudaden dijital.'],
    aaveDocs:['defi','Aave','Takardun Aave','Takardun hukuma game da kasuwannin lamuni na Aave, tunanin hadari, da tsarin aikin sa.','https://aave.com/docs','Ayyuka 5 na tokan',"Yana hada ra'ayin tsarin kudi marar tsakiya na lamuni da wani ainihin tsari da mai farawa zai iya duba."],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Shafukan koyarwa ga masu farawa kan NFT, kasuwannin saye da sayarwa, da asalin tattarawa.','https://opensea.io/learn','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar kalmomin tsarin NFT da tafiyar mai amfani.']
  });

  Object.assign(HA_COIN_EDUCATION_FULL, {
    ethereum:{name:"Ethereum",symbol:"ETH",category:"layer1",overview:"Ethereum sarkar bayanai ce mai iya tafiyar da kwangilolin smart da manhajojin da ba sa bukatar cibiyar tsakiya. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna dogara da ita.",role:"Ita ce babban tushe na kwangilolin smart da tsarin ayyuka masu yawa a duniyar kudin dijital.",strengths:"Babban tsarin masu kirkira da manhajoji. Tana ba da damar sabbin kayayyakin kudin dijital da yawa.",limitations:"Kudin gas na iya tsada idan hanyar sadarwa ta cika. Tana da sarkakiya ga sababbin masu amfani fiye da Bitcoin.",beginnerNote:"Idan kana son fahimtar yadda yawancin sabbin ayyukan kudin dijital ke aiki, Ethereum tana da muhimmanci sosai.",relatedLessons:["Sarkar bayanai","Walat","Ayyuka 5 na tokan"],relatedGlossary:["Kwangilar smart","Kudin gas","Walat"],relatedFaq:["Menene Ethereum?","Menene kudin gas?"],relatedSources:["Ethereum.org"],relatedSafety:["Gargadin sabanin hanyar sadarwa"]},
    usdt:{name:"Tether",symbol:"USDT",category:"stablecoin",overview:"USDT daya ce daga cikin manyan tsayayyun kudaden dijital da aka tsara ta rika kusanci da dala ta Amurka 1:1.",role:"Ana amfani da ita domin ajiye kima a cikin kasuwar kudin dijital ba tare da canjin farashi mai yawa irin na sauran kudaden dijital ba.",strengths:"Tana da yawan amfani sosai. Tana da saukin musaya mai karfi. Ana karbarsa a wurare da yawa a kasuwar kudin dijital.",limitations:"Akwai tambayoyi game da ajiyar baya da gaskiyar bayani. Ita ma tana karkashin kulawar cibiyar fitarwa.",beginnerNote:"Tsayayyun kudaden dijital kamar USDT suna da amfani sosai, amma tsayayyen farashi ba yana nufin babu hadari ba.",relatedLessons:["Canja Wuri Cikin Aminci","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["Tsayayyen kudin dijital","Daidaitacciyar alaka","Saukakiyar musaya"],relatedFaq:["Menene USDT?","Shin tsayayyen kudin dijital ba shi da hadari?"],relatedSources:["Shafin Bayyananniyar Tether"],relatedSafety:["Hadarin kaucewar kima na tsayayyen kudin dijital"]},
    aave:{name:"Aave",symbol:"AAVE",category:"defi",overview:"Aave daya ne daga cikin shahararrun tsarukan kudi marasa tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance ta hanyar kwangilar smart.",role:"Yana wakiltar bangaren tsarin kudi marar tsakiya, wato ayyukan kudi da ke gudana ta lamba maimakon banki na gargajiya.",strengths:"Yana da tarihin tsaro mai kyau idan aka kwatanta da yawancin tsaruka. Yana da amfani wajen fahimtar tsarin kudi marar tsakiya a aikace.",limitations:"Yana iya rikitar da sababbin masu amfani. Hadarin kwangilar smart yana nan ko da dandali ya shahara.",beginnerNote:"Aave misali ne mai kyau idan kana son fahimtar bambanci tsakanin tsarin kudi marar tsakiya da banki na gargajiya.",relatedLessons:["Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["Tsarin kudi marar tsakiya","Lamuni","Lamunin take"],relatedFaq:["Menene AAVE?","Shin tsarin kudi marar tsakiya iri daya ne da banki?"],relatedSources:["Takardun Aave"],relatedSafety:["Hadarin kwangilar smart a tsarin kudi marar tsakiya"]},
    nft:{name:"NFT na Ethereum",symbol:"ETH/NFT",category:"nft",overview:"NFT tokan ne na musamman da ke wakiltar mallaka, shiga, ko wani abu na dijital da ba za a iya musanya shi daidai da wani iri daya ba.",role:"Ana amfani da su a fannin fasahar dijital, abubuwan tarawa, membobanci, da wasu abubuwan wasa.",strengths:"Suna ba da mallaka da ake iya tabbatarwa. Suna taimakawa wajen fahimtar yadda tokan zai iya wakiltar wani abu daban da kudin canji.",limitations:"Kasuwarsu tana da yawan zato da hawa da saukar farashi. Damfarar NFT da damfarar kama suna da yawa.",beginnerNote:"NFT suna da amfani wajen koyo, amma ya dace ka yi taka-tsantsan sosai idan kana kallonsu a matsayin zuba jari.",relatedLessons:["Walat","Ayyuka 5 na tokan","Darussan Duniya ta Gaskiya"],relatedGlossary:["NFT","Tokan","Fitarwa"],relatedFaq:["Menene NFT?","Shin NFT hotuna kawai ne?"],relatedSources:["OpenSea Learn"],relatedSafety:["Kariya daga damfarar NFT"]}
  });

  HA_COIN_EDUCATION_FULL._other = Object.assign({}, HA_COIN_EDUCATION_FULL._other || {}, {
    'dogecoin':'Kudin barkwanci da ya shahara sosai, wanda aka fara ne a matsayin barkwanci.',
    'hedera':"Babbar hanyar sadarwa ta jama'a da ke amfani da Hashgraph maimakon sarkar bayanai ta gargajiya.",
    'the-graph':'Tsarin tsara bayanai domin tambayar bayanan sarkar bayanai cikin sauki.',
    'maker':'Tsarin da ke bayan tsayayyen kudin dijital DAI kuma muhimmin bangare ne a tsarin kudi marar tsakiya.',
    'kaspa':'Kudin dijital mai tsarin hakowa da ke amfani da BlockDAG domin saurin sarrafa tubalan da yawa a lokaci guda.',
    'usdc':'Tsayayyen kudin dijital da Circle ke fitarwa bisa doka kuma yake goyon bayan dala 1:1.',
    'dai':'Tsayayyen kudin dijital mai karkata ga rarraba iko daga MakerDAO da ke samun goyon bayan kadarorin dijital.',
    'compound':'Tsarin kudi marar tsakiya na lamuni da ya shahara wajen kasuwar ruwa ta atomatik.',
    'lido':'Babban tsari na ajiya mai saukin motsa kima da ke ba masu amfani damar saka ETH domin samun lada ba tare da rasa saukin amfani da shi ba.',
    'pepe':'Kudin barkwanci mai tsananin hadari da dogaro da zato.',
    'floki':'Kudin barkwanci da ke kokarin hada barkwanci da wasu ayyukan amfani.',
    'monero':'Kudin dijital da ya fi mayar da hankali kan sirri ta hanyar boye bayanan muamala.',
    'zcash':'Kudin sirri da ke ba da damar boyayyun muamala ta amfani da fasahar hujja ba tare da bayyanawa ba.'
  });

  if(typeof ui !== 'undefined') ui.ha = clone(HA_UI_FULL);
  if(typeof extraUi !== 'undefined') extraUi.ha = clone(HA_EXTRA_UI_FULL);

  if(typeof homeContent !== 'undefined'){
    homeContent.ha = {
      title:HA_UI_FULL['home.title'],
      desc:HA_UI_FULL['home.desc'],
      start:HA_UI_FULL['home.start'],
      guide:"Idan kai sabo ne kwata-kwata, bi darussan a jere. Kowane shafi an rubuta shi da harshen da ya saukaka, tare da misalai, kurakurai na yau da kullum, wuraren dubawa, da madogarori."
    };
  }

  if(typeof sourceLibraryCats !== 'undefined') sourceLibraryCats.ha = clone(HA_SOURCE_CATS);
  if(typeof sourceLibrary !== 'undefined' && Array.isArray(sourceLibrary.ha)){
    sourceLibrary.ha = sourceLibrary.ha.map(function(entry){
      var copy = entry.slice();
      if(copy[5] === 'Blockchain') copy[5] = 'Sarkar bayanai';
      if(copy[5] === 'DeFi') copy[5] = 'Tsarin kudi marar tsakiya';
      if(copy[5] === 'Ayyuka 5 na Crypto') copy[5] = 'Ayyuka 5 na tokan';
      if(copy[5] === 'Ayyuka 5 na kudin dijital') copy[5] = 'Ayyuka 5 na tokan';
      if(copy[5] === 'Ayyukan tokan') copy[5] = 'Ayyuka 5 na tokan';
      if(copy[5] === 'Exchanges') copy[5] = 'Musaya';
      if(copy[5] === 'Stablecoins' || copy[5] === 'Stablecoin') copy[5] = 'Tsayayyun kudaden dijital';
      if(copy[5] === 'Tsayayyun kudade') copy[5] = 'Tsayayyun kudaden dijital';
      if(copy[5] === 'Wallet Safety') copy[5] = 'Tsaron Walat';
      if(copy[5] === 'Scams') copy[5] = 'Zamba';
      if(copy[5] === 'Kudi marar tsakiya') copy[5] = 'Tsarin kudi marar tsakiya';
      if(copy[5] === 'Basics') copy[5] = 'Asali';
      if(copy[5] === 'Real Cases') copy[5] = 'Misalan Gaske';
      if(copy[5] === 'Regulation') copy[5] = "Ka'idoji";
      return copy;
    });
  }
  if(typeof sourceOverrides !== 'undefined' && typeof sourceLibrary !== 'undefined' && Array.isArray(sourceLibrary.ha)){
    sourceOverrides.ha = clone(sourceLibrary.ha);
  }

  if(typeof glossaryEntries !== 'undefined') glossaryEntries.ha = clone(HA_GLOSSARY_FULL);
  if(typeof faqEntries !== 'undefined') faqEntries.ha = clone(HA_FAQ_FULL);
  if(typeof safetyEntries !== 'undefined') safetyEntries.ha = clone(HA_SAFETY_FULL);
  if(typeof sourceEntries !== 'undefined') sourceEntries.ha = clone(HA_SOURCE_ENTRIES_FULL);

  if(typeof glossaryOverrides !== 'undefined'){
    glossaryOverrides.ha = HA_GLOSSARY_ORDER.map(function(key){
      return [HA_GLOSSARY_FULL[key].title, HA_GLOSSARY_FULL[key].body];
    });
  }
  if(typeof glossaryData !== 'undefined'){
    glossaryData.ha = HA_GLOSSARY_ORDER.map(function(key){
      return [HA_GLOSSARY_FULL[key].title, HA_GLOSSARY_FULL[key].body];
    });
  }

  if(typeof polishedSectionContent !== 'undefined'){
    polishedSectionContent.ha = Object.assign({}, clone(polishedSectionContent.ha || polishedSectionContent.en || {}), {
      faqTitle:"Tambayoyi da Amsoshi",
      faqIntro:"Wadannan su ne tambayoyin da masu farawa suka fi yawan yi. Karanta amsoshin cikin sauki kafin ka shiga karin zurfi.",
      faqItems:HA_FAQ_ORDER.map(function(key){ return [HA_FAQ_FULL[key].title, HA_FAQ_FULL[key].body]; }),
      safetyTitle:"Tsaro / Kariyar Zamba",
      safetyIntro:"Wadannan halaye ne masu amfani da za su taimaka ka rage kuskure da hadari kafin ka rasa kudi.",
      safetyItems:HA_SAFETY_ORDER.map(function(key){ return [HA_SAFETY_FULL[key].title, HA_SAFETY_FULL[key].body]; })
    });
  }

  window.__repGlossaryEntries = window.__repGlossaryEntries || {};
  window.__repFaqEntries = window.__repFaqEntries || {};
  window.__repSafetyEntries = window.__repSafetyEntries || {};
  window.__repSourceEntries = window.__repSourceEntries || {};
  window.__repGlossaryEntries.ha = clone(HA_GLOSSARY_FULL);
  window.__repFaqEntries.ha = clone(HA_FAQ_FULL);
  window.__repSafetyEntries.ha = clone(HA_SAFETY_FULL);
  window.__repSourceEntries.ha = clone(HA_SOURCE_ENTRIES_FULL);

  if(typeof coinEducation !== 'undefined') coinEducation.ha = clone(HA_COIN_EDUCATION_FULL);

  if(window.__runtimeLanguagePacks){
    var existingHaPack = window.__runtimeLanguagePacks.ha || {};
    window.__runtimeLanguagePacks.ha = Object.assign({}, existingHaPack, {
      ui: clone(HA_UI_FULL),
      extraUi: clone(HA_EXTRA_UI_FULL),
      glossary: clone(HA_GLOSSARY_FULL),
      sourceCats: clone(HA_SOURCE_CATS),
      search:{trigger:'Nemi darasi, kamus, tambayoyi da amsoshi, ko madogara',empty:'Rubuta abin da kake nema...',noResults:'Ba a samu sakamako ba'},
      visitor:{today:'Masu ziyara na yau',total:'Jimillar masu ziyara'},
      home:Object.assign({}, clone(existingHaPack.home || {}), {
        guide:homeContent && homeContent.ha ? homeContent.ha.guide : "Idan kai sabo ne kwata-kwata, bi darussan a jere.",
        continue:{title:'Ci gaba da koyo',subtitle:'Dawo ka ci gaba daga inda ka tsaya'},
        roadmap:{heading:'Taswirar Koyon Mai Farawa',days:['Rana ta 1','Rana ta 2','Rana ta 3','Rana ta 4','Rana ta 5'],labels:['Sarkar bayanai','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na tokan','Darussan Duniya ta Gaskiya']},
        mistakes:{heading:'Manyan Kurakuran Masu Farawa 5',items:[['Raba kalmomin dawo da walat','Duk wanda ya ga kalmomin dawo da walat dinka zai iya kwace ikon shiga walat din.'],['Canja wuri zuwa hanyar sadarwa mara dacewa','Ko adireshin ya yi daidai, aikawa ta hanyar sadarwa mara dacewa na iya jawo asara ta dindindin.'],['Latsa mahaɗin bogi ko damfarar kama','Shafukan damfara sukan yi kama da na gaske sosai. Kullum ka duba adireshin yanar gizo sosai.'],['Tsallake gwajin canja wuri','Karamin gwaji kadai na iya hana kuskure mai tsada.'],['Rikita dandalin musaya da walat','Asusun dandalin musaya ba iri daya ba ne da mallakar walat da makullanka kanka.']]},
        sourceWhyLabel:'Dalilin muhimmancinsa'
      }),
      updates: clone((typeof updateHistory !== 'undefined' && updateHistory.ha) ? updateHistory.ha : (existingHaPack.updates || []))
    });
  }

  var __origT = typeof window.t === 'function' ? window.t : (typeof t === 'function' ? t : function(key){ return key; });
  window.t = t = function(key){
    if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
      if(typeof extraUi !== 'undefined' && extraUi.ha && hasOwn(extraUi.ha, key)) return extraUi.ha[key];
      if(typeof ui !== 'undefined' && ui.ha && hasOwn(ui.ha, key)) return ui.ha[key];
    }
    return __origT(key);
  };

  var __origGetGlossaryItems = typeof window.getGlossaryItems === 'function' ? window.getGlossaryItems : (typeof getGlossaryItems === 'function' ? getGlossaryItems : function(){ return []; });
  // ha glossary now sourced from UNIFIED_GLOSSARY (35 items) — legacy 20-item override removed
  window.getGlossaryItems = getGlossaryItems = function(){
    return __origGetGlossaryItems();
  };

  var __origGetSourceItems = typeof window.getSourceItems === 'function' ? window.getSourceItems : (typeof getSourceItems === 'function' ? getSourceItems : function(){ return []; });
  window.getSourceItems = getSourceItems = function(){
    if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
      if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides.ha) && sourceOverrides.ha.length) return sourceOverrides.ha;
      if(typeof sourceLibrary !== 'undefined' && Array.isArray(sourceLibrary.ha) && sourceLibrary.ha.length) return sourceLibrary.ha;
      return [];
    }
    return __origGetSourceItems();
  };

  var __origGetRepresentativeTargetLabel = typeof window.getRepresentativeTargetLabel === 'function' ? window.getRepresentativeTargetLabel : (typeof getRepresentativeTargetLabel === 'function' ? getRepresentativeTargetLabel : function(){ return ''; });
  window.getRepresentativeTargetLabel = getRepresentativeTargetLabel = function(targetType, targetId){
    if(typeof currentLang === 'undefined' || currentLang !== 'ha') return __origGetRepresentativeTargetLabel(targetType, targetId);
    if(targetType === 'lesson' && window.__repLessonTitle) return window.__repLessonTitle('ha', parseInt(targetId, 10));
    if(targetType === 'glossary') return HA_GLOSSARY_FULL[targetId] ? HA_GLOSSARY_FULL[targetId].title : '';
    if(targetType === 'faq') return HA_FAQ_FULL[targetId] ? HA_FAQ_FULL[targetId].title : '';
    if(targetType === 'source') return HA_SOURCE_ENTRIES_FULL[targetId] ? HA_SOURCE_ENTRIES_FULL[targetId][2] : '';
    if(targetType === 'safety') return HA_SAFETY_FULL[targetId] ? HA_SAFETY_FULL[targetId].title : '';
    return '';
  };

  var __origGetRepresentativeCoinRelatedSections = typeof window.getRepresentativeCoinRelatedSections === 'function' ? window.getRepresentativeCoinRelatedSections : (typeof getRepresentativeCoinRelatedSections === 'function' ? getRepresentativeCoinRelatedSections : function(){ return null; });
  window.getRepresentativeCoinRelatedSections = getRepresentativeCoinRelatedSections = function(coinKey, labels){
    if(typeof currentLang === 'undefined' || currentLang !== 'ha') return __origGetRepresentativeCoinRelatedSections(coinKey, labels);
    var mappingStore = window.__repCoinMappings || (typeof coinMappings !== 'undefined' ? coinMappings : null);
    var mapping = mappingStore && mappingStore[coinKey];
    if(!mapping || !window.__repLessonTitle) return null;
    return [
      { label: labels.relatedLessons, page:'lessons', items:(mapping.relatedLessons || []).map(function(idx){ return { label: window.__repLessonTitle('ha', idx), targetPage:'lessons', targetType:'lesson', targetId:String(idx) }; }) },
      { label: labels.relatedGlossary, page:'glossary', items:(mapping.relatedGlossary || []).map(function(id){ return HA_GLOSSARY_FULL[id] ? { label: HA_GLOSSARY_FULL[id].title, targetPage:'glossary', targetType:'glossary', targetId:id } : null; }).filter(Boolean) },
      { label: labels.relatedFaq, page:'faq', items:(mapping.relatedFaq || []).map(function(id){ return HA_FAQ_FULL[id] ? { label: HA_FAQ_FULL[id].title, targetPage:'faq', targetType:'faq', targetId:id } : null; }).filter(Boolean) },
      { label: labels.relatedSources, page:'sources', items:(mapping.relatedSources || []).map(function(id){ return HA_SOURCE_ENTRIES_FULL[id] ? { label: HA_SOURCE_ENTRIES_FULL[id][2], targetPage:'sources', targetType:'source', targetId:getSourceItemTargetKey(HA_SOURCE_ENTRIES_FULL[id], id) } : null; }).filter(Boolean) },
      { label: labels.relatedSafety, page:'safety', items:(mapping.relatedSafety || []).map(function(id){ return HA_SAFETY_FULL[id] ? { label: HA_SAFETY_FULL[id].title, targetPage:'safety', targetType:'safety', targetId:id } : null; }).filter(Boolean) }
    ].filter(function(section){ return section.items && section.items.length; });
  };

  var __origGetCoinSearchItems = typeof window.getCoinSearchItems === 'function' ? window.getCoinSearchItems : (typeof getCoinSearchItems === 'function' ? getCoinSearchItems : function(){ return []; });
  var __origGetSearchableItems = typeof window.getSearchableItems === 'function' ? window.getSearchableItems : (typeof getSearchableItems === 'function' ? getSearchableItems : function(){ return []; });
  window.__legacyHausaCoinSearchOverrideDisabled = true;

  // Keep this runtime patch from hijacking the final unified multilingual search path.
  window.getCoinSearchItems = getCoinSearchItems = function(){
    return __origGetCoinSearchItems();
  };

  // All languages now use the shared final search builder instead of a Hausa-only branch.
  window.getSearchableItems = getSearchableItems = function(){
    return __origGetSearchableItems();
  };

  ensureHausaMenuItem();
  if(typeof currentLang !== 'undefined' && currentLang === 'ha'){
    if(typeof renderAllLessons === 'function') renderAllLessons();
    if(typeof showPage === 'function' && typeof currentPage !== 'undefined') showPage(currentPage || 'home');
  }
})();