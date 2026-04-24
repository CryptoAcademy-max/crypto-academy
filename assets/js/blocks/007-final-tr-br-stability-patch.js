(function(){
  function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }
  function bindLanguageMenu(){
    var menu = document.getElementById('langMenu');
    if (!menu) return;
    menu.querySelectorAll('.lang-item').forEach(function(item){
      item.onclick = function(e){
        e.stopPropagation();
        if (typeof setLang === 'function') setLang(item.dataset.lang);
        menu.classList.remove('open');
      };
    });
  }

  langLabels.br = 'BR';
  langLabels.tr = 'TR';
  langLabels.ha = 'HA';

  ui.ha = Object.assign({}, ui.ha || {}, {
    "brand.name":"Crypto Academy",
    "brand.sub":"Darussa masu sauki ga masu farawa",
    "sidebar.lessons":"Darussan koyo",
    "sidebar.topics":"Batutuwa masu sauri",
    "nav.home":"Shafin gida",
    "nav.homesub":"Fara daga nan",
    "nav.l1":"Blockchain",
    "nav.l1sub":"Asalin kundin bayanai na rabawa",
    "nav.l2":"Walat",
    "nav.l2sub":"Makullai da damar shiga",
    "nav.l3":"Canja Wuri Cikin Aminci",
    "nav.l3sub":"Yadda ake aika ba tare da kuskure ba",
    "nav.l4":"Ayyuka 5 na tokan",
    "nav.l4sub":"Fahimtar irin rawar tokan",
    "nav.l5":"Darussan Duniya ta Gaskiya",
    "nav.l5sub":"Abin da misalai na gaske suke koya mana",
    "nav.glossary":"Kamus",
    "nav.glossarysub":"Muhimman kalmomi cikin sauki",
    "nav.sources":"Laburaren Madogara",
    "nav.sourcesub":"Makaloli da nassoshi na hukuma",
    "nav.start":"Fara Nan",
    "nav.startsub":"Hanyar farawa ga masu farawa",
    "nav.faqPage":"Tambayoyi da Amsoshi",
    "nav.faqsub":"Amsoshin tambayoyin da aka fi yi",
    "nav.safety":"Tsaro",
    "nav.safetysub":"Kariya daga zamba da kuskure",
    "nav.updates":"Tarihin Sabuntawa",
    "nav.updatessub":"Abin da ya canza da lokacin da ya canza",
    "progress.done":"an kammala",
    "btn.prev":"Darasi na baya",
    "btn.next":"Darasi na gaba",
    "btn.mark":"Alama a matsayin an kammala",
    "btn.completed":"An kammala",
    "faq.title":"Tambayoyi da Amsoshi",
    "mistakes.title":"Kurakurai da aka saba yi",
    "quiz.title":"Karamin gwaji",
    "example.title":"Misali mai sauki",
    "sources.title":"Madogarori masu alaka",
    "visual.title":"Bayani na gani",
    "complete.note":"Ana adana ci gabanka a cikin wannan burauzar.",
    "home.title":"Koyi kudin dijital a hankali mataki-mataki",
    "home.desc":"Fara daga tushe, sannan ka wuce zuwa walat, canja wuri cikin aminci, rawar tokan, da darussan duniya ta gaskiya.",
    "home.start":"A ina ya fi kyau ka fara?",
    "home.openLesson":"Bude darasi",
    "home.startCardTitle":"Fara Nan",
    "home.openStart":"Bude shafin farawa",
    "home.faqCardTitle":"Tambayoyi da Amsoshi",
    "home.openFaq":"Bude Tambayoyi da Amsoshi",
    "home.safetyCardTitle":"Tsaro",
    "home.openSafety":"Bude Tsaro",
    "glossary.title":"Kamus",
    "glossary.desc":"Saukakan ma'anoni ga muhimman kalmomin kudin dijital.",
    "sources.pageTitle":"Laburaren Madogara",
    "sources.pageDesc":"Jerin karatu na makaloli na gaske da nassoshi na hukuma.",
    "updates.title":"Tarihin Sabuntawa",
    "updates.desc":"Jerin gyare-gyare da abubuwan da aka kara a wannan dandali."
  });

  ui.br = Object.assign({}, ui.pt || ui.en || {}, ui.br || {}, {
    "brand.sub":"Lições claras para iniciantes",
    "nav.start":"Comece aqui",
    "nav.startsub":"Rota recomendada para iniciantes",
    "nav.faqPage":"FAQ",
    "nav.faqsub":"Dúvidas comuns de iniciantes",
    "nav.safety":"Segurança / Prevenção de golpes",
    "nav.safetysub":"Hábitos práticos de proteção",
    "home.title":"Aprenda cripto passo a passo — e saiba para onde ir depois",
    "home.desc":"Comece pelo básico e avance por carteiras, transferências seguras, papéis dos tokens e lições do mundo real. Você também pode abrir o Glossário e a Biblioteca de Fontes a qualquer momento.",
    "home.start":"Por onde começar?",
    "home.openLesson":"Abrir lição",
    "home.startCardTitle":"Comece aqui",
    "home.startCardDesc":"Veja a ordem mais simples para começar sem se perder.",
    "home.openStart":"Abrir guia",
    "home.faqCardTitle":"FAQ",
    "home.faqCardDesc":"Leia respostas curtas para as dúvidas mais comuns.",
    "home.openFaq":"Abrir FAQ",
    "home.safetyCardTitle":"Segurança / Prevenção de golpes",
    "home.safetyCardDesc":"Aprenda hábitos simples para reduzir erros e fraudes.",
    "home.openSafety":"Abrir segurança",
    "home.arrowNote":"Siga na ordem se você estiver começando agora.",
    "glossary.title":"Glossário",
    "glossary.desc":"Significados simples para os termos mais importantes de cripto. Abra esta seção sempre que uma palavra parecer confusa.",
    "sources.pageTitle":"Biblioteca de Fontes",
    "sources.pageDesc":"Coleção de artigos reais e fontes oficiais para conectar as aulas a exemplos do mundo real.",
    "sources.catScams":"Golpes",
    "sources.catExchanges":"Corretoras",
    "sources.catStable":"Stablecoins",
    "sources.catWallet":"Segurança da carteira",
    "sidebar.lessons":"Lições",
    "sidebar.topics":"Tópicos rápidos",
    "topic.blockchain":"O que é blockchain?",
    "topic.wallet":"O que é uma carteira?",
    "topic.transfer":"Como funciona uma transferência segura?",
    "topic.roles":"Como os papéis dos tokens são diferentes?",
    "topic.real":"Por que casos reais importam?",
    "visual.title":"Explicação visual",
    "callout.quick":"Resumo rápido",
    "complete.note":"Seu progresso é salvo neste navegador."
  });

  extraUi.br = Object.assign({}, extraUi.pt || extraUi.en || {}, extraUi.br || {}, {
    "v.network":"Rede",
    "v.address":"Endereço",
    "v.test":"Transferência de teste",
    "v.txid":"TxID",
    "v.defi":"DeFi",
    "v.utility":"Utilidade",
    "v.governance":"Governança",
    "v.nft":"NFT",
    "v.stablecoin":"Stablecoin",
    "v.phishing":"Phishing",
    "v.custody":"Custódia",
    "v.designrisk":"Risco de design",
    "v.networkDesc":"Confirme a rede antes de enviar.",
    "v.addressDesc":"Revise o início e o fim do endereço.",
    "v.testDesc":"Envie primeiro um valor pequeno.",
    "v.txidDesc":"Use o TxID para verificar o registro real."
  });

  polishedSectionContent.br = deepClone(polishedSectionContent.pt || polishedSectionContent.en || {});
  if (polishedSectionContent.br) {
    polishedSectionContent.br.startTitle = "Comece aqui";
    polishedSectionContent.br.startIntro = "Esta página ajuda quem acabou de chegar a saber exatamente por onde começar. Siga uma ordem simples primeiro e depois abra outras seções quando a base já estiver clara.";
    polishedSectionContent.br.startTip = "Uma boa rota para iniciantes é: 1 → 2 → Glossário → 3 → 4 → Segurança → Biblioteca de Fontes.";
    polishedSectionContent.br.faqTitle = "FAQ";
    polishedSectionContent.br.safetyTitle = "Segurança / Prevenção de golpes";
  }

  if (!glossaryOverrides.br && glossaryOverrides.pt) glossaryOverrides.br = deepClone(glossaryOverrides.pt);
  if (!sourceOverrides.br && sourceOverrides.pt) sourceOverrides.br = deepClone(sourceOverrides.pt);
  if (!lessonOverrides.br && lessonOverrides.pt) lessonOverrides.br = deepClone(lessonOverrides.pt);
  if (!sourceLibrary.br && sourceOverrides.br) sourceLibrary.br = deepClone(sourceOverrides.br);
  if (!glossaryData.br && glossaryOverrides.br) glossaryData.br = deepClone(glossaryOverrides.br);
  if (lessonOverrides.br) {
    lessonOverrides.br = deepClone(lessonOverrides.br);
    lessonOverrides.br[0].cat = "Base";
    lessonOverrides.br[1].cat = "Acesso";
    lessonOverrides.br[2].cat = "Segurança";
    lessonOverrides.br[3].cat = "Papéis";
    lessonOverrides.br[4].cat = "Mundo real";
  }

  ui.tr = Object.assign({}, ui.en || {}, ui.tr || {}, {
    "brand.name":"Crypto Academy",
    "brand.sub":"Yeni başlayanlar için net ve sade dersler",
    "sidebar.lessons":"Dersler",
    "sidebar.topics":"Hızlı konular",
    "nav.home":"Ana Sayfa",
    "nav.homesub":"Önce buradan başlayın",
    "nav.l1":"Blokzincir",
    "nav.l1sub":"Paylaşılan defterin temelleri",
    "nav.l2":"Cüzdanlar",
    "nav.l2sub":"Anahtarlar ve erişim",
    "nav.l3":"Güvenli Transferler",
    "nav.l3sub":"Güvenli gönderim rutini",
    "nav.l4":"Kriptonun 5 Rolü",
    "nav.l4sub":"Token rollerini anlamak",
    "nav.l5":"Gerçek Dünya Dersleri",
    "nav.l5sub":"Riskin nerede oluştuğunu görün",
    "nav.start":"Başlangıç Rehberi",
    "nav.startsub":"İlk izlenecek yol haritası",
    "nav.faqPage":"SSS",
    "nav.faqsub":"Yeni başlayanların en sık soruları",
    "nav.safety":"Güvenlik / Dolandırıcılıktan Korunma",
    "nav.safetysub":"Pratik güvenlik alışkanlıkları",
    "nav.glossary":"Sözlük",
    "nav.glossarysub":"Temel terimleri kolayca görün",
    "nav.sources":"Kaynak Kütüphanesi",
    "nav.sourcesub":"Makaleler ve resmi kaynaklar",
    "topic.blockchain":"Blokzincir nedir?",
    "topic.wallet":"Cüzdan nedir?",
    "topic.transfer":"Güvenli transfer nasıl yapılır?",
    "topic.roles":"Token rolleri neden farklıdır?",
    "topic.real":"Gerçek vakalar neden önemlidir?",
    "footer.byline":"Bee Network Korea tarafından sunulan ücretsiz eğitim kaynağı",
    "overview.chip1":"Yeni başlayan odaklı",
    "overview.chip2":"Çok dilli",
    "overview.chip3":"Görsel öğrenme",
    "progress.done":"tamamlandı",
    "btn.prev":"Önceki ders",
    "btn.next":"Sonraki ders",
    "btn.mark":"Tamamlandı olarak işaretle",
    "btn.completed":"Tamamlandı",
    "btn.restart":"Başa dön",
    "breadcrumb.prefix":"Ders",
    "quiz.reveal":"Cevabı göster",
    "source.title":"Kaynak",
    "check.title":"Başlangıç kontrol noktaları",
    "faq.title":"SSS",
    "mistakes.title":"Yaygın hatalar",
    "quiz.title":"Mini test",
    "example.title":"Kolay örnek",
    "sources.title":"İlgili kaynaklar",
    "visual.title":"Görsel açıklama",
    "complete.note":"İlerlemeniz bu tarayıcıda saklanır.",
    "callout.quick":"Hızlı özet",
    "home.title":"Kriptoyu adım adım öğrenin — sonra neye bakacağınızı bilin",
    "home.desc":"Temelden başlayın; cüzdanlar, güvenli transferler, token rolleri ve gerçek dünya dersleriyle devam edin. İstediğiniz zaman Sözlük ve Kaynak Kütüphanesi bölümlerini de açabilirsiniz.",
    "home.start":"Nereden başlamalısınız?",
    "home.openLesson":"Dersi aç",
    "home.startCardTitle":"Başlangıç Rehberi",
    "home.startCardDesc":"Kaybolmadan başlamak için en basit sırayı görün.",
    "home.openStart":"Rehberi aç",
    "home.faqCardTitle":"SSS",
    "home.faqCardDesc":"En sık sorulan yeni başlayan sorularını kısa cevaplarla okuyun.",
    "home.openFaq":"SSS'yi aç",
    "home.safetyCardTitle":"Güvenlik / Dolandırıcılıktan Korunma",
    "home.safetyCardDesc":"Hataları ve dolandırıcılık riskini azaltan basit alışkanlıkları öğrenin.",
    "home.openSafety":"Güvenliği aç",
    "home.arrowNote":"Tamamen yeniyseniz sıralı ilerleyin.",
    "glossary.title":"Sözlük",
    "glossary.desc":"En önemli kripto terimlerinin basit açıklamaları. Bir kelime yabancı gelirse önce burayı açın.",
    "sources.pageTitle":"Kaynak Kütüphanesi",
    "sources.pageDesc":"Derslerdeki fikirleri gerçek dünyadaki örneklerle bağlamak için hazırlanmış makale ve resmi kaynak listesi.",
    "sources.catScams":"Dolandırıcılıklar",
    "sources.catExchanges":"Borsalar",
    "sources.catStable":"Stablecoin'ler",
    "sources.catWallet":"Cüzdan güvenliği"
  });

  extraUi.tr = Object.assign({}, extraUi.en || {}, extraUi.tr || {}, {
    "v.ledger":"Defter",
    "v.node":"Düğüm",
    "v.wallet":"Cüzdan",
    "v.interface":"arayüz",
    "v.address":"Adres",
    "v.shareable":"paylaşılabilir",
    "v.private":"Özel anahtar",
    "v.secret":"gizli",
    "v.seed":"Kurtarma ifadesi",
    "v.backup":"yedek",
    "v.network":"Ağ",
    "v.test":"Test transferi",
    "v.txid":"TxID",
    "v.match":"eşleşmeli",
    "v.check":"kontrol et",
    "v.smallfirst":"önce küçük tutar",
    "v.verify":"doğrula",
    "v.defi":"DeFi",
    "v.utility":"Yardımcı token",
    "v.governance":"Yönetişim",
    "v.nft":"NFT",
    "v.stablecoin":"Stablecoin",
    "v.bank":"Banka gibi",
    "v.access":"Erişim",
    "v.voting":"Oylama",
    "v.ownership":"Sahiplik",
    "v.cash":"Dijital nakit",
    "v.roleDesc1":"Kod ve cüzdanlarla çalışan finansal işlevler.",
    "v.roleDesc2":"Hizmet içi kullanım, erişim ve faydalar.",
    "v.roleDesc3":"Tekliflere ve kararlara katılım.",
    "v.roleDesc4":"Belirli bir dijital varlığa bağlı sahiplik kanıtı.",
    "v.roleDesc5":"Bir referans değere yakın kalacak şekilde tasarlanır.",
    "v.phishing":"Oltalama",
    "v.custody":"Saklama",
    "v.designrisk":"Tasarım riski",
    "v.riskDesc1":"Sahte siteler veya kötü niyetli izinler varlıkları boşaltabilir.",
    "v.riskDesc2":"Anahtarlar başkasındaysa onun sistemine bağımlı olursunuz.",
    "v.riskDesc3":"Kararlı görünse bile yapı ve tasarım yine önemlidir.",
    "v.networkDesc":"Göndermeden önce ağın doğru olduğundan emin olun.",
    "v.addressDesc":"Adresin başını ve sonunu gözle tekrar kontrol edin.",
    "v.testDesc":"Mümkünse önce küçük bir test gönderimi yapın.",
    "v.txidDesc":"Gerçek kayıt durumunu TxID ile doğrulayın."
  });

  homeContent.tr = {
    title:"Kriptoyu adım adım öğrenin — sonra neye bakacağınızı bilin",
    desc:"Temelden başlayın; cüzdanlar, güvenli transferler, token rolleri ve gerçek dünya dersleriyle devam edin. İstediğiniz zaman Sözlük ve Kaynak Kütüphanesi bölümlerini de açabilirsiniz.",
    start:"Nereden başlamalısınız?",
    guide:"Tamamen yeniyseniz dersleri sırayla takip edin. Her sayfa basit açıklamalar, örnekler, yaygın hatalar, kontrol noktaları ve kaynaklar içerir."
  };

  glossaryOverrides.tr = [
    ["Cüzdan adresi","Dijital varlık almak için kullanılan herkese açık adres."],
    ["Özel anahtar","Cüzdanı kontrol etmeyi sağlayan gizli anahtar."],
    ["Kurtarma ifadesi","Cüzdanı geri yüklemek için kullanılan yedek kelime dizisi. Asla paylaşmayın."],
    ["Gas ücreti","Bir işlemi işlemek için ödenen ağ ücreti."],
    ["Açık anahtar","Cüzdan kimliğiyle bağlantılı kriptografik anahtar; adres oluşturmaya yardımcı olur."],
    ["Blokzincir gezgini","Blokzincir üzerindeki işlemleri ve adresleri görüntülemek için kullanılan site veya araç."],
    ["Akıllı sözleşme","Önceden belirlenmiş kuralları otomatik uygulayan blokzincir kodu."],
    ["Saklama","Anahtarları ve varlıklara erişimi kimin kontrol ettiğini ifade eder."],
    ["Blokzincir köprüsü","Farklı blokzincirler arasında varlık veya mesaj taşımayı sağlayan araç."]
  ];
  glossaryData.tr = deepClone(glossaryOverrides.tr);

  sourceOverrides.tr = [
    ["scams","FTC","FTC tüketici güvenliği rehberi","FTC'nin kripto dolandırıcılıkları ve tüketici güvenliği hakkındaki rehberi.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Güvenlik","Yeni başlayanların para kaybetmeden önce dolandırıcılık kalıplarını tanımasına yardımcı olur."],
    ["exchanges","Reuters","FTX hakkında Reuters haberi","FTX vakası, borsa ve saklama risklerini anlamaya yardımcı olur.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Ders 5 — Gerçek Dünya","Gerçek bir borsa çöküşü üzerinden custody riskini açıklar."],
    ["stable","ECB","ECB stablecoin açıklaması","Bir politika kurumunun stablecoin yapısını ve risklerini nasıl gördüğünü açıklar.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Ders 4 — Token Türleri","Düzenleyicilerin stablecoin riskini nasıl değerlendirdiğini anlamaya yardımcı olur."],
    ["wallet","FTC","FTC kripto ödeme uyarısı","Kripto ile ödeme talebinin neden güçlü bir uyarı sinyali olduğunu gösterir.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Güvenlik","Kripto ödeme taleplerinin neden dolandırıcılık sinyali olabileceğini gösterir."]
  ];
  // sourceLibrary.tr is already fully populated with 28 items — no override needed

  polishedSectionContent.tr = {
    startTitle: "Başlangıç Rehberi",
    startIntro: "Bu sayfa, siteye ilk kez gelen kişilerin tam olarak nereden başlaması gerektiğini görmesi için hazırlandı. Önce basit bir sırayı izleyin, temel oturduktan sonra diğer bölümlere geçin.",
    startSteps: [
      ["1. Adım — Blokzincir", "Önce 1. derste blokzincirin ne olduğunu ve paylaşılan kayıt mantığının neden önemli olduğunu anlayın."],
      ["2. Adım — Cüzdanlar", "Sonra 2. derse geçin. Anahtar, adres ve erişim farkını öğrenmeden varlık taşımak kafa karıştırıcı olabilir."],
      ["3. Adım — Sözlük", "1. ve 2. dersten sonra hâlâ yabancı gelen terimler varsa Sözlük bölümünü açın."],
      ["4. Adım — Güvenli transfer", "Ardından 3. derste şu pratik rutini öğrenin: ağ, adres, test transferi ve TxID kontrolü."],
      ["5. Adım — Roller ve gerçek örnekler", "Temel kavramlar oturunca token rolleri, risk kalıpları ve gerçek vakalar bölümüne geçin."]
    ],
    startTip: "Yeni başlayanlar için iyi rota: 1 → 2 → Sözlük → 3 → 4 → Güvenlik → Kaynak Kütüphanesi.",
    faqTitle: "SSS",
    faqIntro: "Bunlar yeni başlayanların en çok sorduğu sorular. İleri detaylara girmeden önce kısa ve açık cevapları okuyun.",
    faqItems: [
      ["Gerçekten cüzdana ihtiyacım var mı?", "Sadece bir borsa içinde alım satım yapıyorsanız hemen kendi saklama cüzdanı kullanmayabilirsiniz. Yine de sahipliğin nasıl çalıştığını anlamak için cüzdan ve anahtar mantığını öğrenmeniz önemlidir."],
      ["Borsa ile cüzdan arasındaki fark nedir?", "Borsa; alım satım ve hesap yönetimi için bir hizmettir. Cüzdan ise anahtarları ve erişimi yönetir. Birbirine bağlıdırlar ama aynı şey değildirler."],
      ["Neden gas ücreti ödüyorum?", "Gas ücreti ağ ücretidir. İşlemlerin blokzincirde işlenmesine ve kaydedilmesine yardımcı olur."],
      ["Cüzdan adresimi paylaşmak güvenli mi?", "Evet. Cüzdan adresi varlık almak için paylaşılabilir. Ama özel anahtar ve kurtarma ifadesi asla paylaşılmamalıdır."],
      ["Neden önce küçük bir test gönderimi yapmalıyım?", "Çünkü küçük bir test, büyük tutarı riske atmadan önce adres veya ağ hatasını yakalayabilir."]
    ],
    safetyTitle: "Güvenlik / Dolandırıcılıktan Korunma",
    safetyIntro: "Bu, platformdaki en pratik bölümlerden biridir. Bu alışkanlıklar gerçek kayba dönüşmeden önce başlangıç hatalarını önleyebilir.",
    safetyItems: [
      ["Kurtarma ifadenizi asla paylaşmayın", "Kurtarma ifadesi cüzdana geri erişim sağlar. Bunu ele geçiren biri cüzdanı kontrol edebilir."],
      ["Sahte airdrop'lara dikkat edin", "Dolandırıcılar ücretsiz token vaadiyle insanları sahte sitelere veya tehlikeli izinlere yönlendirir."],
      ["Bağlanmadan önce bağlantıyı kontrol edin", "Oltalama bağlantıları neredeyse doğru görünebilir. Alan adını dikkatle yeniden kontrol edin."],
      ["Önce küçük bir test tutarı gönderin", "Özellikle yeni bir ağda veya yeni bir adreste küçük test, büyük bir hatayı önleyebilir."],
      ["Aşırı aciliyeti uyarı işareti sayın", "Baskı, geri sayım, tehdit ve anında ödeme isteği dolandırıcılıkta sık görülen kalıplardır."]
    ]
  };

  lessonOverrides.tr = [
    {
      cat:"Temel",
      title:"Blokzincir, basit dille",
      intro:"Blokzincir paylaşılan bir defterdir. Tek bir şirketin tek kaydı tutması yerine, birçok bilgisayar aynı kaydı birlikte korur ve doğrular.",
      sections:[
        {h:"En basit fikirle başlayın", ps:["Kimin kime değer gönderdiğini yazan bir defter düşünün. Banka sisteminde bu defteri banka kontrol eder. Blokzincirde ise birçok katılımcı aynı kaydın doğru kalmasına yardım eder.", "Bu, bütün blokzincirlerin tamamen aynı çalıştığı anlamına gelmez. Yeni başlayanlar için önemli fikir, paylaşılan doğrulamadır. Birçok taraf aynı kaydı onayladığında geçmişi tek başına değiştirmek çok daha zorlaşır."]},
        {h:"Yeni başlayanlar neden önemsemeli?", ps:["Birçok kişi kripto alırken önce fiyatı, logosu veya uygulamayı görür. Fakat bunun arkasındaki kayıt sistemini anlamadan risk, güvenlik ve sahiplik hakkında sağlıklı karar vermek zordur.", "Blokzincir önemlidir çünkü işlemler, bakiyeler ve sahiplik burada kaydedilir. Bu kısım netleşince cüzdanlar ve token rolleri de daha anlaşılır olur."]},
        {h:"Bloklar, zincir ve düğümler", ps:["İşlemler bloklar hâlinde gruplanır. Her yeni blok önceki bloğa bağlanır; bu yüzden buna blok zinciri denir.", "Düğüm, defteri okumaya, saklamaya veya doğrulamaya yardım eden bilgisayardır. Başlangıçta tüm teknik ayrıntıları ezberlemeniz gerekmez; birçok düğümün kaydı korumaya yardım ettiğini anlamanız yeterlidir."]},
        {h:"Sisteme güç veren şey", ps:["Blokzincir, tek bir merkezi veri tabanına bağımlılığı azaltabilir. Bu yüzden dijital varlıklar ve sahiplik kayıtlarında kullanılır.", "Ama aynı yapı hataları geri almayı da zorlaştırabilir. Yanlış yere gönderim yaparsanız bunu geri çevirecek merkezi bir destek olmayabilir. Bu yüzden önce yapıyı anlamak, sonra hız düşünmek daha güvenlidir."]}
      ],
      defs:[["Defter","İşlemlerin veya bakiyelerin kaydı."],["Düğüm","Kaydı tutmaya veya doğrulamaya yardım eden bilgisayar."],["Blok","Zincire eklenen işlem grubu."],["Zincir","Bir bloğun bir sonrakine sıralı biçimde bağlanması."]],
      example:"Banka transferi genelde bankanın veri tabanına bağlıdır. Blokzincir transferi ise ağın paylaşılan kaydına bağlıdır.",
      mistakes:["Blokzincirin her durumda otomatik güvenlik sağladığını sanmak.","Her işlemin kart ödemesi gibi geri alınabileceğini varsaymak.","Blokzinciri gizemli bir kelime gibi görüp kayıt sistemi olarak düşünmemek."],
      faqs:[["Tek bir şirket blokzinciri değiştirebilir mi?","Açık blokzincirlerde tek bir aktör genelde bütün paylaşılan kaydı tek başına değiştiremez."],["Blokzincire neden şeffaf denir?","Çünkü işlem kayıtları çoğu zaman bir gezgin üzerinden açıkça incelenebilir; gerçek isimler görünmese bile kayıt yapısı görülebilir."],["Önce programlama öğrenmem gerekir mi?","Hayır. Yeni başlayanların önce paylaşılan kayıt, paylaşılan doğrulama ve değişmesi daha zor bir geçmiş fikrini anlaması yeterlidir."]],
      checkpoints:["Blokzinciri paylaşılan bir defter olarak açıklayabilirim.","Paylaşılan doğrulamanın neden önemli olduğunu anlıyorum.","Onaylanmış işlemlerin neden zor geri alındığını biliyorum."],
      quiz:[["Yeni başlayanlar için blokzincirin en basit tanımı nedir?","Birçok taraf tarafından doğrulanan paylaşılan bir defterdir."],["Yeni başlayanlar neden blokzincir yapısını anlamalı?","Çünkü sahiplik, bakiyeler ve işlemler burada kaydedilir."]]
    },
    {
      cat:"Erişim",
      title:"Cüzdanlar, basit dille",
      intro:"Bir cüzdan, öncelikle coin saklayan bir kutu değildir. Blokzincirde kayıtlı dijital varlıklara erişmenizi ve onları kontrol etmenizi sağlayan anahtarları yöneten araçtır.",
      sections:[
        {h:"En büyük başlangıç yanılgısı", ps:["Birçok kişi cüzdanı fiziksel cüzdan gibi, coinlerin içinde durduğu bir kap sanır. Bu benzetme anlaşılırdır ama eksiktir.", "Varlıklarınız blokzincirde kayıtlıdır. Cüzdan, bu varlıklar üzerindeki kontrolünüzü kanıtlamanıza yardım eder. Bu yüzden birçok eğitimci cüzdanı, bir anahtar yöneticisi olarak düşünmenin daha doğru olduğunu söyler."]},
        {h:"Adres, özel anahtar ve kurtarma ifadesi", ps:["Cüzdan adresi varlık almak için kullanılır ve paylaşılabilir.", "Özel anahtar kontrol sağlayan bilgidir; asla paylaşılmamalıdır.", "Kurtarma ifadesi cüzdanı geri yükleyen yedektir. Birisi bu ifadeyi alırsa varlıklarınıza erişebilir."]},
        {h:"Custodial ve self-custody farkı", ps:["Bir borsa veya hizmet anahtarları sizin yerinize tutuyorsa buna saklama hizmeti denir. Bu daha kolay görünebilir ama güvenlik ve kararlar açısından o platforma bağımlı olursunuz.", "Anahtarları siz kontrol ediyorsanız buna self-custody denir. Daha fazla doğrudan kontrol verir ama sorumluluğu da artırır. Yeni başlayanlar seçim yapmadan önce iki modeli de anlamalıdır."]},
        {h:"Cüzdan bilgisi pratikte neden önemlidir?", ps:["Cüzdan bilgisi sadece teknik teori değildir. Varlık alma, gönderme, saklama, yedekleme ve koruma biçiminizi doğrudan etkiler.", "Başlangıç kayıplarının çoğu, kurtarma ifadesinin paylaşılması, sahte destek mesajına güvenilmesi veya cüzdanın neye izin verdiği anlaşılmadan onay verilmesi yüzünden olur."]}
      ],
      defs:[["Cüzdan adresi","Varlık almak için kullanılan herkese açık adres."],["Özel anahtar","Erişimi kontrol eden gizli anahtar."],["Kurtarma ifadesi","Cüzdanı geri getirmek için kullanılan yedek ifade."],["Saklamalı cüzdan","Anahtarların bir hizmet tarafından tutulduğu cüzdan."]],
      example:"Adresi bir posta kutusunun adresi gibi düşünün. Özel anahtarı da o kutuyu açan gizli anahtar gibi hayal edin.",
      mistakes:["Kurtarma ifadesini sözde destek ekibiyle paylaşmak.","Kurtarma ifadesini yalnızca riskli bir ekran görüntüsü klasöründe saklamak.","Borsa hesabı ile self-custody cüzdanın aynı şekilde çalıştığını sanmak."],
      faqs:[["Cüzdan adresimi paylaşabilir miyim?","Evet. Adres, varlık almak için kullanılır."],["Özel anahtarımı veya kurtarma ifademi paylaşabilir miyim?","Hayır. Bunlara sahip olan biri cüzdan üzerinde kontrol kazanabilir."],["Self-custody her zaman daha mı iyidir?","Daha fazla doğrudan kontrol verir; fakat güvenlik ve yedekleme sorumluluğu da size geçer."]],
      checkpoints:["Adres ile özel anahtar arasındaki farkı biliyorum.","Kurtarma ifadesinin neden gizli kalması gerektiğini anlıyorum.","Saklama hizmeti ile self-custody arasındaki farkı kavrıyorum."],
      quiz:[["Güvenle paylaşılabilecek bilgi nedir?","Cüzdan adresinizdir."],["Asla paylaşılmaması gereken şey nedir?","Özel anahtarınız ve kurtarma ifadenizdir."]]
    },
    {
      cat:"Güvenlik",
      title:"Güvenli kripto transferleri",
      intro:"Kripto transferleri korkutucu görünmek zorunda değildir; fakat tekrar edilebilir bir güvenlik rutini ister. En basit kontrol listesi şudur: ağ, adres, küçük test ve TxID doğrulaması.",
      sections:[
        {h:"İnsanlar transferlerde neden hata yapar?", ps:["Yeni başlayanlar çoğu zaman fazla hızlı davranır. Yapıştırılan adresin doğru olduğunu varsayar, ağı önemsemez veya test yapmadan tüm tutarı gönderir.", "Sorun şu ki blokzincir transferlerini geri almak zor olabilir. Bu yüzden güvenli alışkanlık, özgüvenden daha önemlidir."]},
        {h:"4 adımlı temel rutin", ps:["Birinci adım: ağı doğrulayın. Bazı varlıklar birden fazla ağda dolaşır ve doğru hedef ağı seçmek önemlidir.", "İkinci adım: adresi dikkatle kontrol edin. Sırf alana yapıştırıldı diye doğru kabul etmeyin.", "Üçüncü adım: mümkünse önce küçük bir test tutarı gönderin. Test doğru ulaşırsa daha büyük tutarı sonra gönderin.", "Dördüncü adım: TxID ile gerçek işlem kaydını kontrol edin."]},
        {h:"TxID neden yararlıdır?", ps:["TxID'yi bir takip numarası gibi düşünebilirsiniz. İşlemin beklemede mi, onaylandı mı, başarısız mı olduğunu görmekte yardımcı olur.", "Başlangıçta bütün gezgin araçlarını ezberlemeniz gerekmez. TxID'nin, işlem kaydını doğrulamak için kullanılan referans numarası olduğunu anlamanız yeterlidir."]},
        {h:"Yavaş olmak neden daha güvenlidir?", ps:["Kriptoda hızlı elden çok doğru rutin önemlidir.", "Ağı bir kez daha kontrol etmek, adresin başını ve sonunu görmek ve önce küçük test göndermek büyük hataları önleyebilir."]}
      ],
      defs:[["Ağ","Varlığın hareket ettiği blokzincir sistemi."],["Adres","Varlığın gönderildiği hedef konum."],["Test transferi","Önce küçük tutar göndererek doğrulama yapma adımı."],["TxID","İşlemi kontrol etmeye yarayan benzersiz kimlik."]],
      example:"Alice, USDT göndermeden önce ağı doğrular, adresi tekrar kontrol eder, küçük bir test gönderir ve TxID ile kayıt durumunu gördükten sonra kalan tutarı yollar.",
      mistakes:["İlk denemede tüm tutarı göndermek.","Sadece token adına bakıp ağı yok saymak.","Yapıştırılan adresin otomatik olarak doğru olduğunu sanmak."],
      faqs:[["Ağ neden bu kadar önemli?","Aynı isimli varlık farklı ağlarda bulunabilir; yanlış ağ seçimi soruna yol açabilir."],["Neden küçük test yapmalıyım?","Çünkü hata maliyetini çok düşürür."],["Gönderimden sonra ne yapmalıyım?","TxID ile gerçek işlem durumunu kontrol etmelisiniz."]],
      checkpoints:["Güvenli transferin dört adımını söyleyebilirim.","Test transferinin neden önemli olduğunu biliyorum.","TxID'nin ne işe yaradığını anlıyorum."],
      quiz:[["Tam tutarı göndermeden önce ne yapmalısınız?","Ağı ve adresi kontrol etmeli, mümkünse küçük bir test transferi yapmalısınız."],["TxID size nasıl yardımcı olur?","İşlemin blokzincir kaydındaki durumunu doğrulamanızı sağlar."]]
    },
    {
      cat:"Roller",
      title:"Kriptonun 5 temel rolü",
      intro:"Kriptoyu isimlerden çok rolleri üzerinden anlamak daha kolaydır. Bazı varlıklar dijital nakit gibi çalışır; bazıları erişim, oylama veya sahiplik kanıtı sunar.",
      sections:[
        {h:"Role bakınca tablo sadeleşir", ps:["Yeni başlayanların kafasının karışmasının bir nedeni proje isimlerinin çok fazla olmasıdır.", "Ama önce isme değil role bakarsanız yapı daha basit görünür. Soru şudur: Bu token gerçekte ne işe yarıyor?"]},
        {h:"Yeni başlayanlar için 5 kategori", ps:["DeFi; borç verme, borç alma veya takas gibi finansal işlevleri temsil eder.", "Yardımcı token'ler bir ürün veya hizmet içinde erişim ve kullanım sağlar.", "Yönetişim token'leri teklif ve kararlarda oy vermeye yarar.", "NFT'ler belirli bir dijital öğe için sahiplik kanıtı gibi düşünülebilir.", "Stablecoin'ler ise değer ölçüsü ve transfer aracı olarak dijital nakde benzer."]},
        {h:"Bu ayrım neden önemlidir?", ps:["Stablecoin ile NFT aynı rolü oynamaz. İkisine de sadece 'coin' gibi bakarsanız kullanım amacı ve risk yapısını karıştırırsınız.", "Role odaklanınca hangi sorunun çözülmeye çalışıldığını ve nerede risk oluşabileceğini daha net görmeye başlarsınız."]},
        {h:"Daha iyi soru", ps:["'Adı ne?' yerine 'Ne rol oynuyor?' diye sormak daha güçlü bir başlangıçtır.", "Bu alışkanlık, sadece modayı takip etmekten daha iyi karar vermeye yardım eder."]}
      ],
      example:"Stablecoin'in ana rolü fiyat referansı ve transfer kolaylığıdır; NFT'nin rolü ise belirli bir dijital öğe için sahiplik kanıtı sunmaktır.",
      mistakes:["Bütün token'leri aynı tür varlık sanmak.","Önce sadece fiyata bakıp rolü sonradan düşünmek.","Token'in gerçekten ne için kullanıldığını kontrol etmemek."],
      faqs:[["DeFi bankayla tamamen aynı mıdır?","Bazı işlevleri benzer görünse de yapı ve koruma mekanizmaları çok farklı olabilir."],["NFT sadece resim midir?","Başlangıç açısından daha önemli fikir, onun bir sahiplik kanıtı gibi çalışabilmesidir."],["Stablecoin'ler neden popüler?","Çünkü birçok kullanıcı için fiyat referansı ve transfer aracı olarak pratik görünürler."]],
      checkpoints:["DeFi'yi çok basit şekilde açıklayabilirim.","Yardımcı token ile yönetişim tokeni arasındaki farkı biliyorum.","Role odaklanmanın neden yararlı olduğunu anlıyorum."],
      quiz:[["Stablecoin'i en kolay neye benzetebilirsiniz?","Dijital nakde."],["Yeni başlayan biri token'e bakarken önce hangi soruyu sormalı?","Bu token hangi rolü oynuyor?"]]
    },
    {
      cat:"Gerçek dünya",
      title:"Gerçek vakalardan çıkarılan dersler",
      intro:"Kripto eğitimi sadece tanımlarla bitmemelidir. Gerçek örnekler, yeni başlayanların riskin nerede ortaya çıktığını ve hangi hataların tekrarlandığını daha iyi görmesini sağlar.",
      sections:[
        {h:"Gerçek örnekler neden önemlidir?", ps:["Gerçek olaylar, soyut uyarıları somut derse dönüştürür.", "Örneğin 'kurtarma ifadenizi paylaşmayın' cümlesi önemlidir; ama bunu gerçek bir oltalama vakasıyla birlikte görmek dersi daha kalıcı yapar."]},
        {h:"Tekrarlanan üç risk kalıbı", ps:["Birincisi oltalama dolandırıcılıklarıdır. İnsanları aceleye getirir ve cüzdan bağlama ya da kurtarma ifadesi girme baskısı kurarlar.", "İkincisi saklama riskidir. Kolaylık ile gerçek kontrol aynı şey değildir.", "Üçüncüsü tasarım riskidir. 'Kararlı' gibi görünen bir yapı bile sorunsuz olmak zorunda değildir."]},
        {h:"Haberleri daha iyi okuma yöntemi", ps:["Sadece çarpıcı başlığa bakmak yerine, önce neyin başarısız olduğunu sorun. Sorun saklama yapısı mı, dolandırıcılık mı, yoksa tasarım mı?", "Bu soru alışkanlığı gelişirse korku yerine yapıyı, söylenti yerine mekanizmayı öğrenmeye başlarsınız."]},
        {h:"Hatırlanması gereken tek cümle", ps:["ABD FTC tüketici rehberinde şu uyarı yer alır: 'Only scammers demand payment in cryptocurrency.'", "Yani birisi baskı, tehdit veya aşırı aciliyetle sizden kripto ödeme istiyorsa, bu tek başına güçlü bir uyarı işaretidir."]}
      ],
      example:"Bir borsa çöküşü haberi gördüğünüzde, 'bütün kripto başarısız oldu' demek yerine önce saklama yapısında ve kontrol modelinde neyin kırıldığını sormak daha öğreticidir.",
      mistakes:["Tüm olumsuz haberleri aynı tür problem sanmak.","Acil baskı kuran mesajlara hemen güvenmek.","Sadece isim veya markaya bakıp güvenli olduğunu düşünmek."],
      faqs:[["Eğitim platformunda neden gerçek haberler ve kaynaklar var?","Çünkü gerçek örnekler kavramların daha uzun süre akılda kalmasına yardım eder."],["Olumsuz bir olay tüm sektörün başarısız olduğu anlamına gelir mi?","Hayır. Çoğu zaman belirli bir yapısal sorunu gösterir."],["Korkutucu bir başlık görünce önce neye bakmalıyım?","Bunun dolandırıcılık mı, saklama sorunu mu, yoksa tasarım sorunu mu olduğunu ayırmaya çalışın."]],
      checkpoints:["Üç büyük risk kalıbını sayabilirim.","Kararlı görünen bir yapının risksiz olmadığını anlıyorum.","Resmî dolandırıcılık uyarılarının neden önemli olduğunu biliyorum."],
      quiz:[["Başarısızlık haberini okurken ilk sormanız gereken iyi soru nedir?","Tam olarak ne başarısız oldu ve yapının hangi kısmı kırıldı?"],["Acil baskı neden risk işaretidir?","Çünkü dolandırıcılar insanların ayrıntıları kontrol etmesine fırsat vermemek için baskı ve acele duygusunu sık kullanır."]],
      sources:[
        ["FTC tüketici uyarısı","Önemli cümle: 'Only scammers demand payment in cryptocurrency.'","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams"],
        ["FTX hakkında Reuters haberi","Reuters haberi, yeni başlayanların saklama riski ile fiyat hareketini birbirinden ayırmasına yardımcı olur.","https://www.reuters.com/technology/ftx-reaches-settlement-with-blockfi-may-pay-up-874-million-2024-03-07/"]
      ]
    }
  ];

  var allowedPages = ['home','glossary','sources','start','faq','safety','updates'];
  window.setLang = function(lang){
    if (!ui[lang] && !extraUi[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('cryptoAcademyLang', lang);
    document.documentElement.lang = lang === 'br' ? 'pt-BR' : lang;
    document.querySelectorAll('.lang-item').forEach(function(el){ el.classList.toggle('active', el.dataset.lang === lang); });
    if (typeof applyUI === 'function') applyUI();
    if (typeof renderAllLessons === 'function') renderAllLessons();
    if (allowedPages.indexOf(currentPage) !== -1) showPage(currentPage);
    else showLesson(Number.isFinite(currentLesson) ? currentLesson : 0);
  };

  currentPage = 'home';
  currentLesson = 0;

  bindLanguageMenu();

  if (typeof applyUI === 'function') applyUI();
  if (typeof renderAllLessons === 'function') renderAllLessons();
  showPage('home');
})();