(function(){
  function clone(v){ return JSON.parse(JSON.stringify(v)); }

  var lessonTitles = ['Sarkar bayanai','Walat','Canja Wuri Cikin Aminci','Ayyuka 5 na tokan','Darussan Duniya ta Gaskiya'];
  var tagMap = {
    safety:'Tsaro',
    glossary:'Kamus',
    reg:"Ka'idoji",
    l1:'Darasi na 1 - Blockchain',
    l2:'Darasi na 2 - Walat',
    l3:'Darasi na 3 - Canja Wuri Cikin Aminci',
    l4:'Darasi na 4 - Ayyuka 5 na tokan',
    l5:'Darasi na 5 - Darussan Duniya ta Gaskiya'
  };

  var glossary = {
    blockchain:{title:'Blockchain',body:'Tsarin littafin bayanai ne da kwamfutoci da yawa ke rike da shi tare domin a iya duba rikodi ba tare da dogaro da kamfani guda ba.'},
    mining:{title:'Mining',body:'Hanyar da proof-of-work networks ke amfani da ita wajen tantance muamala da kara sabbin blocks.'},
    wallet:{title:'Walat',body:'Kayan aiki ne da ke kula da makullanka kuma yana ba ka damar shiga, aikawa, da karbar kadarorin crypto.'},
    smartContract:{title:'Smart contract',body:'Code da ke kan blockchain wanda ke gudana da kansa idan sharuddan da aka tsara sun cika.'},
    gasFee:{title:'Gas fee',body:'Kudin network da ake biya domin a sarrafa kuma a rubuta muamala a blockchain.'},
    layer1:{title:'Layer 1',body:'Asalin blockchain network ne da ke da dokokinsa, tsaronsa, da tarihin muamala nasa.'},
    tps:{title:'TPS',body:'Transactions per second. Hanya ce ta auna yawan muamalar da network zai iya sarrafawa a sakan daya.'},
    validator:{title:'Validator',body:'Mai shiga network da ke taimakawa duba da tabbatar da muamala da blocks a wasu blockchains.'},
    remittance:{title:'Remittance',body:'Aika kudi daga wata kasa ko wuri zuwa wani wuri, sau da yawa tsakanin iyalai ko kasuwanci.'},
    centralization:{title:'Centralization',body:'Tsari ne inda iko yake taruwa a hannun bangare kadan maimakon ya bazu sosai.'},
    exchange:{title:'Exchange',body:'Dandali ne inda masu amfani ke saya, sayarwa, da musayar kadarorin crypto.'},
    token:{title:'Token',body:'Kadara ce ta dijital da aka fitar a kan blockchain, yawanci tana da wani takamaiman amfani a ecosystem.'},
    stablecoin:{title:'Stablecoin',body:'Token da aka tsara ya bi kima mai dan kwanciyar hankali, yawanci yana da alaka da kudi kamar dalar Amurka.'},
    peg:{title:'Peg',body:'Dangantakar kima da token ke kokarin rikewa da wata kadara, misali 1:1 da USD.'},
    liquidity:{title:'Liquidity',body:'Yadda saukin saye ko sayar da kadara yake ba tare da canjin farashi mai yawa ba.'},
    defi:{title:'DeFi',body:'Ayyukan kudi da ke gudana a kan blockchain kamar ciniki ko rance ba tare da banki na gargajiya a tsakiya ba.'},
    lending:{title:'Lending',body:'Bada damar a aro kadara, yawanci tare da ruwa ko biyan baya da jingina.'},
    flashLoan:{title:'Flash loan',body:'Rancen DeFi da ake aro kuma a mayar da shi cikin muamala guda a blockchain.'},
    nft:{title:'NFT',body:'Token na musamman da ake amfani da shi domin wakiltar mallaka ko ainihi na takamaiman abu na dijital ko na zahiri.'},
    mint:{title:'Mint',body:'Kirkira da fitar da sabon token ko NFT a kan blockchain.'}
  };
  var faq = {
    bitcoin:{title:'Menene Bitcoin?',body:'Bitcoin shi ne babban kudin dijital na farko da aka sani sosai. An tsara shi a matsayin kudi na dijital da zai iya aiki ba tare da banki na tsakiya ba.'},
    ethereum:{title:'Menene Ethereum?',body:'Ethereum sarkar bayanai ce da aka gina domin kwangilolin smart da manhajojin da ke gudana a kai. Yawancin ayyukan kudi marasa tsakiya, NFT, da tokan suna amfani da ita.'},
    gas:{title:'Menene kudin gas?',body:'Kudin gas shi ne kudin hanyar sadarwa da ake biya domin sarkar bayanai ta sarrafa kuma ta rubuta muamala.'},
    solana:{title:'Menene Solana?',body:'Solana sarkar bayanai ce mai sauri da aka fi sani da kudin amfani mai sauki da saurin tabbatar da muamala.'},
    networkMatter:{title:'Me ya sa hanyar sadarwa take da muhimmanci?',body:'Kadara guda na iya kasancewa a fiye da hanya daya. Idan hanyar aikawa da ta karba ba su dace ba, kudi na iya makale ko salwanta.'},
    xrp:{title:'Menene XRP?',body:'XRP kadara ce ta dijital da ta fi mayar da hankali kan biyan kudi cikin sauri da rahusa, musamman tsakanin kasashe.'},
    payments:{title:'Me ya sa wasu kudaden dijital suke mai da hankali kan biyan kudi?',body:'Kowane aikin kudin dijital yana kokarin warware matsala dabam. Wasu kudaden dijital suna kokarin motsa kima cikin sauri da rahusa.'},
    bnb:{title:'Menene BNB?',body:'BNB shi ne tokan na asali a cikin tsarin BNB Chain da kuma wasu ayyuka masu alaka da Binance.'},
    utilityToken:{title:'Menene tokan na amfani?',body:'Tokan na amfani ana amfani da shi ne wajen samun damar amfani da kaya, samun rangwame, ko wasu siffofi a cikin wani tsari.'},
    usdt:{title:'Menene USDT?',body:'USDT tsayayyen kudin dijital ne da Tether ke fitarwa wanda aka tsara ta kasance kusa da dala ta Amurka daya.'},
    stableRisk:{title:'Shin tsayayyen kudin dijital ba shi da hadari?',body:'A\'a. Tsayayyun kudaden dijital suna neman kwanciyar hankali na farashi, amma har yanzu suna da hadarin ajiyar baya, mai fitarwa, saukin musaya, da rasa daidaituwar kima.'},
    aave:{title:'Menene AAVE?',body:'AAVE tokan ne da ke da alaka da Aave, tsarin kudi marar tsakiya na lamuni da ke ba masu amfani damar aro ko bada rance da kudaden dijital.'},
    defiBank:{title:'Shin tsarin kudi marar tsakiya iri daya ne da banki?',body:'A\'a. Tsarin kudi marar tsakiya na iya ba da wasu ayyuka masu kama da banki, amma yana aiki da kwangilolin smart kuma baya bayar da irin kariyar doka ta banki.'},
    nft:{title:'Menene NFT?',body:'NFT tokan ne na musamman da zai iya wakiltar mallaka, ainihi, ko damar shiga da aka daure da wani abu takamaimai.'},
    nftPictures:{title:'Shin NFT hotuna kawai ne?',body:'A\'a. Hotuna sun yi yawa, amma ainihin NFT shi ne rikodin mallaka ko damar shiga da ake iya tabbatarwa a sarkar bayanai.'}
  };
  var safety = {
    seed:{title:'Tsaron seed phrase',body:'Seed phrase ita ce babbar hanyar dawo da wallet. Ajiye ta a offline, a boye, kuma kada ta shiga screenshot ko cloud.'},
    networkMismatch:{title:'Gargadin sabanin network',body:'Kafin aika coin ko token, ka tabbatar network na aikawa da na karba sun yi daidai.'},
    networkRisk:{title:'Hadarin network',body:'Kowane blockchain yana da nasa hadarin aiki da aminci. Cunkoso, yankewa, ko matsalar validators na iya shafar masu amfani.'},
    regulatory:{title:"Hadarin ka'idoji",body:'Dokoki, kara, da matakan hukumomi na iya shafar yadda ake jera coin, amfani da shi, ko samun damar shiga shi a kasashe daban-daban.'},
    exchange:{title:'Hadarin exchange',body:'Idan kadarorinka suna kan exchange, kana dogara da wannan dandali ya kare su kuma ya ba ka damar cire su.'},
    stableDepeg:{title:'Hadarin stablecoin depeg',body:'Stablecoin na iya kaucewa farashin da ake so idan reserves, amana, ko liquidity suka raunana.'},
    defiSmart:{title:'Hadarin smart contract na DeFi',body:'Amfani da DeFi yana nufin amincewa da code. Bug, exploit, ko update marar tsaro na iya saka kudinka cikin hadari.'},
    nftScam:{title:'Kariya daga damfarar NFT',body:'Ka duba links na marketplace, collections, da bukatun wallet approval sosai kafin ka hada wallet ko ka sa hannu.'}
  };
  var sourceEntries = {
    bitcoinWhitepaper:['basics','Bitcoin.org','Takardar Asalin Bitcoin','Takardar asali da ta bayyana yadda Bitcoin ke aiki da dalilin gabatar da tsarin kudin dijital marar cibiyar guda.','https://bitcoin.org/bitcoin.pdf','Blockchain','Madogara ce ta farko mai kyau domin fahimtar Bitcoin a matakin tsarin sa.'],
    ethereumOrg:['basics','Ethereum Foundation','Ethereum.org','Gabatarwar hukuma mai saukin fahimta ga Ethereum, smart contracts dinsa, da ecosystem dinsa.','https://ethereum.org/en/what-is-ethereum/','Ayyuka 5 na Crypto','Yana hada Ethereum da smart contracts, apps, da token ecosystems.'],
    solanaDocs:['basics','Solana Foundation','Takardun Solana','Takardun hukuma da ke gabatar da tsarin network, kayan aiki, da ecosystem na Solana.','https://solana.com/docs','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar yadda saurin Layer 1 ke bayanin ginin sa.'],
    rippleSite:['basics','Ripple','Shafin Ripple','Takaitaccen bayani na hukuma kan kayayyakin Ripple masu mayar da hankali kan biyan kudi da bayanan XRP.','https://ripple.com/xrp/','Darussan Duniya ta Gaskiya','Yana nuna yadda XRP ke fitowa a yanayin biyan kudi da tura kudi tsakanin kasashe.'],
    bnbDocs:['basics','BNB Chain','Takardun BNB Chain','Takardun hukuma na BNB Chain, kayan aikin sa, da yadda ake amfani da network dinsa.','https://docs.bnbchain.org/','Ayyuka 5 na Crypto','Yana taimakawa bayyana yadda utility token ke tallafawa ecosystem na chain mai fadi.'],
    tetherTransparency:['stable','Tether','Shafin Bayyananniyar Tether','Shafin hukuma da ke nuna bayanan reserves da fitowar USDT.','https://tether.to/en/transparency/','Darussan Duniya ta Gaskiya','Yana da amfani wajen tattauna bayyananniyar reserves da tambayoyin amana kan stablecoins.'],
    aaveDocs:['defi','Aave','Takardun Aave','Takardun hukuma game da kasuwannin rance na Aave, tunanin hadari, da tsarin protocol din sa.','https://aave.com/docs','Ayyuka 5 na Crypto','Yana hada raayin DeFi lending da wani ainihin protocol da mai farawa zai iya duba.'],
    openSeaLearn:['defi','OpenSea','OpenSea Learn','Shafukan koyarwa ga masu farawa kan NFTs, marketplaces, da asalin tattarawa.','https://opensea.io/learn','Darussan Duniya ta Gaskiya','Yana taimakawa fahimtar kalmomin NFT ecosystem da tafiyar mai amfani.']
  };
  var sourcePageMap = {
    'https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams':['FTC: Abin da ya kamata ka sani game da damfaran cryptocurrency','Takaitaccen bayani kan nauikan damfarar crypto da aka fi gani da yadda za ka kare kanka.','safety','Yana taimaka wa mai farawa gane alamun damfara kafin a rasa kudi.'],
    'https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem':['FTC: Kada ka biya duk wanda ya tuntube ka ya nemi crypto','Dalilin da ya sa duk wanda ya tuntube ka ya nemi ka biya da crypto yawanci dan damfara ne.','safety','Yana nuna cewa bukatar biyan crypto daga sako ko kira na iya zama babban gargadi.'],
    'https://www.chainalysis.com/blog/2023-crypto-scam-revenue/':['Rahoton kudaden damfaran crypto','Nazari mai amfani da bayanai kan yadda masu damfara ke tara kudi da hanyoyin da suka fi tasiri.','l5','Yana nuna girman matsalar domin mai farawa ya fahimci hadari.'],
    'https://www.trmlabs.com/post/trm-labs-2023-report-reveals-pig-butchering-scammers-target-victims-for-months':['Damfarar soyayya da pig butchering','Yadda damfara mai gina amana na dogon lokaci ke aiki da dalilin da ya sa take da tasiri.','safety','Yana bayyana yadda social engineering ke gudana tsawon makonni ko watanni.'],
    'https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/':['FTX ta fara biyan kwastomomi - me ya faru?','Rahoto kan rugujewar FTX da dalilin da ya sa hadarin custody da exchange yake da muhimmanci ga masu amfani.','l5','Yana taimakawa mai farawa ya fahimci hadarin custody ta hanyar misali na gaskiya.'],
    'https://www.reuters.com/technology/binance-pay-43-billion-settle-us-money-laundering-case-2023-11-21/':['Binance ta biya dala biliyan 4.3 a sulhun Amurka','Rahoto kan babban shariar compliance a crypto da abin da ta nuna game da ayyukan exchange.','l5','Yana nuna cewa har manyan exchanges na iya fuskantar gazawar ka\'idoji.'],
    'https://www.coindesk.com/learn/not-your-keys-not-your-coins-the-meaning-behind-the-adage/':['"Ba makullanka ba, ba coins dinka ba" - bayani','Dalilin da ya sa rike kadarori a exchange ya bambanta da rike su a wallet dinka.','l2','Babban darasin custody da kowane mai farawa ya kamata ya fahimta.'],
    'https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2023/':['Rahotannin hack na exchange 2022-2023','Takaitaccen bayani kan manyan hare-haren exchange da abin da masu amfani suka rasa.','l5','Yana nuna irin hadarin da custody na exchange ke dauke da shi.'],
    'https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html':['ECB: Bayanin hadarin stablecoin da tsarinsa','Yadda manyan bankuna da masu tsara doka ke bayyana hadarin stablecoin da yadda ake tallafa masa.','l4','Yana taimakawa fahimtar yadda masu tsara doka ke kallon stablecoin.'],
    'https://www.bis.org/publ/work905.htm':['BIS Working Paper: Stablecoins - amfaninsu da hadarinsu','Nazarin BIS kan samfurin stablecoin da hadarin tsarin kudi.','l4','Yana nuna yadda manyan cibiyoyin kudi ke fahimtar stablecoin.'],
    'https://www.reuters.com/markets/currencies/how-stablecoin-terra-collapsed-2022-05-12/':['Bayanin rugujewar TerraUSD','Rahoto kan yadda rugujewar UST/LUNA ta goge biliyoyin daloli da abin da ya lalace.','l5','Misali ne na gaske da ke nuna yadda stablecoin zai iya rasa peg sosai.'],
    'https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase':['Ledger Academy: Menene seed phrase?','Bayanin hukuma kan aikin seed phrase da dalilin da ya sa dole a kare shi.','l2','Muhimmin raayi ne ga duk wanda zai bude wallet.'],
    'https://academy.binance.com/en/articles/hot-vs-cold-wallet-whats-the-difference':['Hot wallet da cold wallet - Binance Academy','Bambanci tsakanin wallets masu internet da wadanda ba sa kan internet da lokacin amfani da kowanne.','l2','Yana taimaka wa mai farawa ya zabi irin wallet da ya dace da bukatarsa.'],
    'https://consumer.ftc.gov/consumer-alerts/2023/04/crypto-atm-scam':['FTC: Damfarar crypto ATM da QR code','Yadda masu damfara ke amfani da crypto ATM da QR code wajen sace kudi.','safety','Yana nuna misalin damfarar biyan kudi ta duniya ta gaskiya.'],
    'https://www.coinbase.com/learn/crypto-basics/how-to-send-crypto':['Yadda za ka tabbatar da adireshin crypto kafin aikawa','Mataki-mataki wajen duba adireshi kafin ka tabbatar da canja wuri.','l3','Yana taimakawa kai tsaye ga tsarin canja wuri cikin aminci.'],
    'https://www.reuters.com/technology/mt-gox-creditors-set-receive-bitcoin-repayments-10-years-after-hack-2024-07-05/':['Mt. Gox: Jadawalin tarihin babban hack din crypto','Tarihin rugujewar Mt. Gox, daya daga cikin manyan misalan hadarin custody.','l5','Yana nuna tasirin rugujewar exchange ga kudin masu amfani.'],
    'https://www.trmlabs.com/post/what-is-blockchain-analytics':['TRM Blockchain Intelligence: Bayanin on-chain forensics','Yadda ake bin diddigin transactions a blockchain da abin da hakan ke nufi ga tsaro.','glossary','Yana taimakawa fahimtar yadda ake nazarin bayanan blockchain.'],
    'https://www.chainalysis.com/blog/how-hackers-launder-cryptocurrency/':['Yadda hackers ke boye crypto da aka sace','Hanyoyin da ake amfani da su wajen matsar da dukiyar da aka sace da kuma yadda ake gano su.','l5','Yana nuna abin da ke faruwa bayan hack da dalilin traceability.'],
    'https://academy.binance.com/en/articles/what-is-blockchain-technology':['Menene Blockchain? - Binance Academy','Bayanin matakin mai farawa kan yadda blockchain ke adanawa da tabbatar da bayanai.','l1','Shi ne ginshikin fahimta kafin sauran darussa.'],
    'https://www.coindesk.com/learn/what-is-cryptocurrency/':['Menene Crypto? Jagorar mai farawa','Gabatarwa cikin saukin magana ga abin da cryptocurrency yake da yadda yake aiki.','l1','Kyakkyawan wurin farawa ga sabon mai karatu.'],
    'https://info.etherscan.com/understanding-an-ethereum-transaction/':['Yadda ake karanta transaction a Etherscan','Jagorar hukuma ga maanar kowane bangare a explorer.','glossary','Yana taimakawa kan kalmomi kamar TxID, adireshi, da gas fee.'],
    'https://academy.binance.com/en/articles/what-are-gas-fees-in-crypto':['Menene gas fee?','Bayani mai sauki kan dalilin da ya sa kudin network yake akwai da yadda yake canzawa.','glossary','Yana taimakawa mai farawa ya fahimci gas kafin ya yi canja wuri.'],
    'https://academy.binance.com/en/articles/the-complete-beginners-guide-to-decentralized-finance-defi':['Menene DeFi? - Binance Academy','Gabatarwa ga ayyukan kudi da ke gudana a blockchain ba tare da banki a tsakiya ba da hadarinsu.','l4','Tushen fahimtar rawar tokens na DeFi.'],
    'https://www.coindesk.com/learn/what-is-a-smart-contract/':['Menene smart contract?','Bayani mai sauki kan abin da smart contracts ke yi da dalilin da ya sa suke da hadari.','glossary','Yana tallafawa fahimtar kamus da DeFi.'],
    'https://www.chainalysis.com/blog/defi-hacks-2023/':['Hare-haren DeFi da amfani da protocol 2023','Yadda ake cin gajiyar raunin DeFi protocols da abin da ke sa smart contracts su zama rauni.','l5','Yana nuna hadarin da DeFi ke dauke da shi idan aka kwatanta da central exchanges.'],
    'https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-initial-coin-offerings':['SEC: Bulletin ga masu zuba jari kan crypto asset securities','Jagorar SEC kan wane irin crypto assets za su iya shiga karkashin securities.','reg','Yana taimakawa mai amfani ya fahimci yadda doka ke kallon wasu crypto assets.'],
    'https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets/':['FSB: Tsarin kaidojin crypto na duniya','Takaitaccen bayani kan yadda masu tsara doka a duniya ke tunkarar crypto.','reg','Yana nuna alkiblar kaidoji a duniya.'],
    'https://www.ecb.europa.eu/explainers/tell-me/html/what-is-mica.en.html':['ECB: Bayanin dokar MiCA - abin da take nufi','Yadda dokar MiCA ta Turai ke canza yanayin masu amfani da masu fitar da crypto assets.','reg','Yana nuna yadda manyan tattalin arziki ke gina dokoki ga crypto.']
  };

  if(typeof sourceLibraryCats !== 'undefined'){
    sourceLibraryCats.ha = [
      { key:'scams', label:'Zamba' },
      { key:'exchanges', label:'Musaya' },
      { key:'stable', label:'Tsayayyun kudaden dijital' },
      { key:'wallet', label:'Tsaron Walat' },
      { key:'cases', label:'Misalan Gaske' },
      { key:'basics', label:'Asali' },
      { key:'defi', label:'Tsarin kudi marar tsakiya' },
      { key:'reg', label:"Ka'idoji" }
    ];
  }

  if(typeof sourceLibrary !== 'undefined' && sourceLibrary.en){
    sourceLibrary.ha = sourceLibrary.en.map(function(entry){
      var copy = entry.slice();
      var info = sourcePageMap[copy[4]];
      if(info){
        copy[2] = info[0];
        copy[3] = info[1];
        copy[5] = tagMap[info[2]] || info[2];
        copy[6] = info[3];
      }
      return copy;
    });
  }
  if(typeof sourceOverrides !== 'undefined' && sourceLibrary.ha){
    sourceOverrides.ha = clone(sourceLibrary.ha);
  }

  if(typeof glossaryOverrides !== 'undefined'){
    glossaryOverrides.ha = Object.keys(glossary).map(function(key){
      return [glossary[key].title, glossary[key].body];
    });
  }

  if(typeof polishedSectionContent !== 'undefined'){
    polishedSectionContent.ha = Object.assign({}, clone(polishedSectionContent.ha || polishedSectionContent.en || {}), {
      startTitle:'Fara Nan',
      startIntro:"Wannan shafin yana taimaka wa sabon bako ya san daidai inda zai fara. Ka fara da tsarin da ya fi sauki, sannan ka bude sauran sassa idan asalin ra'ayoyi sun fara bayyana.",
      startSteps:[
        ['Mataki 1 - Blockchain','Fara da Darasi na 1 domin fahimtar abin da blockchain yake da dalilin da ya sa kundin bayanai na rabawa yake da muhimmanci.'],
        ['Mataki 2 - Walat','Sai ka wuce Darasi na 2 domin ka fahimci makullai, adireshi, da damar shiga kafin ka motsa kadarori.'],
        ['Mataki 3 - Kamus','Bude Kamus bayan Darasi na 1 da na 2 idan har yanzu akwai kalmomin da suke da rikitarwa.'],
        ['Mataki 4 - Canja Wuri Cikin Aminci','Sannan ka je Darasi na 3 domin koyon tsarin tsaro na amfani: network, adireshi, gwajin canja wuri, da TxID.'],
        ['Mataki 5 - Ayyuka da darussan duniya ta gaskiya','Bayan ka fahimci asali, ci gaba da rawar token, alamun hadari, da misalai na gaske.']
      ],
      startTip:'Kyakyawan hanya ga masu farawa ita ce: 1 - 2 - Kamus - 3 - 4 - Tsaro - Laburaren Madogara.',
      faqTitle:'Tambayoyi da Amsoshi',
      faqIntro:'Wadannan su ne tambayoyin da masu farawa suka fi yawan yi. Karanta amsoshin cikin sauki kafin ka damu da cikakkun bayanai masu zurfi.',
      faqItems:[
        ['Shin ina bukatar walat da gaske?','Idan kana saya da sayarwa ne kawai a cikin exchange, watakila ba za ka yi amfani da walat mai zaman kansa nan da nan ba. Amma domin ka fahimci mallaka da kyau, ya dace ka san menene walat da yadda makullai ke aiki.'],
        ['Menene bambanci tsakanin exchange da walat?','Exchange sabis ne na ciniki da kula da asusu. Walat kayan aiki ne da ke sarrafa makullai da damar shiga. Suna da alaka, amma ba abu daya ba ne.'],
        ['Me ya sa nake biyan gas fee?','Gas fee kudin network ne. Su ne ke taimakawa sarrafa da rubuta muamala a kan blockchain.'],
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

  if(typeof ui !== 'undefined' && ui.ha){
    Object.assign(ui.ha, {
      'nav.updates':'Tarihin Sabuntawa',
      'nav.updatessub':'Abin da ya canza da lokacin da ya canza',
      'updates.title':'Tarihin Sabuntawa',
      'updates.desc':'Rajistar gyare-gyare da aka yi wa wannan dandali a tsawon lokaci.',
      'glossary.title':'Kamus',
      'sources.pageTitle':'Laburaren Madogara'
    });
  }
  if(typeof extraUi !== 'undefined' && extraUi.ha){
    Object.assign(extraUi.ha, {
      'glossary.title':'Kamus',
      'glossary.desc':'Saukakan ma\'anoni ga muhimman kalmomin crypto. Karanta su nan idan wani darasi ya yi maka sabo.',
      'sources.pageTitle':'Laburaren Madogara',
      'sources.pageDesc':'Jerin karatu na makaloli na gaske da nassoshi na hukuma. Yi amfani da shi domin hada darussa da misalan duniya ta gaskiya.'
    });
  }

  if(window.__repGlossaryEntries) window.__repGlossaryEntries.ha = clone(glossary);
  if(window.__repFaqEntries) window.__repFaqEntries.ha = clone(faq);
  if(window.__repSafetyEntries) window.__repSafetyEntries.ha = clone(safety);
  if(window.__repSourceEntries) window.__repSourceEntries.ha = clone(sourceEntries);

  if(typeof getLocalizedRelatedLessonTitles === 'function'){
    var _origGetLocalizedRelatedLessonTitles = getLocalizedRelatedLessonTitles;
    getLocalizedRelatedLessonTitles = function(lessonItems){
      var lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
      if(lang !== 'ha') return _origGetLocalizedRelatedLessonTitles(lessonItems);
      return (lessonItems || []).map(function(item){
        if(typeof item === 'number') return lessonTitles[item] || lessonTitles[0];
        var text = String(item || '').trim().toLowerCase();
        if(text === 'blockchain') return lessonTitles[0];
        if(/wallet|walat/.test(text)) return lessonTitles[1];
        if(/safe transfer|canja wuri cikin aminci/.test(text)) return lessonTitles[2];
        if(/5 roles|ayyuka 5 na crypto/.test(text)) return lessonTitles[3];
        if(/real-world|darussan duniya ta gaskiya/.test(text)) return lessonTitles[4];
        return String(item || '');
      });
    };
  }

  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof showPage === 'function' && typeof currentPage !== 'undefined') showPage(currentPage || 'home');
})();