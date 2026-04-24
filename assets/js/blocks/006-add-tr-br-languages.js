(function(){
  if (typeof langLabels === 'undefined' || typeof ui === 'undefined') return;

  // Add language labels
  langLabels.tr = 'TR';
  langLabels.br = 'BR';

  // Add menu items if missing
  const langMenu = document.getElementById('langMenu');
  if (langMenu && !langMenu.querySelector('[data-lang="tr"]')) {
    const tr = document.createElement('div');
    tr.className = 'lang-item';
    tr.dataset.lang = 'tr';
    tr.innerHTML = '<span>🇹🇷</span><span>Türkçe</span><span class="native">TR</span>';
    langMenu.appendChild(tr);

    const br = document.createElement('div');
    br.className = 'lang-item';
    br.dataset.lang = 'br';
    br.innerHTML = '<span>🇧🇷</span><span>Português (Brasil)</span><span class="native">BR</span>';
    langMenu.appendChild(br);

    // bind click handlers for newly added items
    langMenu.querySelectorAll('.lang-item').forEach(item => {
      if (!item.dataset.boundLang) {
        item.addEventListener('click', () => setLang(item.dataset.lang));
        item.dataset.boundLang = '1';
      }
    });
  }

  // Brazilian Portuguese: clone pt and slightly localize labels
  ui.br = JSON.parse(JSON.stringify(ui.pt || ui.en));
  extraUi.br = JSON.parse(JSON.stringify(extraUi.pt || extraUi.en));
  homeContent.br = JSON.parse(JSON.stringify(homeContent.pt || homeContent.en));
  sourceLibrary.br = JSON.parse(JSON.stringify(sourceLibrary.pt || sourceLibrary.en));
  if (typeof sourceOverrides !== 'undefined' && sourceOverrides.pt) sourceOverrides.br = JSON.parse(JSON.stringify(sourceOverrides.pt));
  if (typeof glossaryOverrides !== 'undefined' && glossaryOverrides.pt) glossaryOverrides.br = JSON.parse(JSON.stringify(glossaryOverrides.pt));
  if (typeof lessonOverrides !== 'undefined' && lessonOverrides.pt) lessonOverrides.br = JSON.parse(JSON.stringify(lessonOverrides.pt));
  if (typeof lessons !== 'undefined' && lessons.pt) lessons.br = JSON.parse(JSON.stringify(lessons.pt));

  // Small Brazilian Portuguese label tweaks
  Object.assign(ui.br, {
    "brand.sub":"Lições claras para iniciantes",
    "overview.chip2":"Multilíngue",
    "nav.l2":"Carteiras",
    "topic.wallet":"O que é uma carteira?",
    "home.title":"Aprenda cripto passo a passo — e saiba o que ver depois",
    "home.desc":"Comece pelo básico e avance por carteiras, transferências seguras, papéis dos tokens e lições do mundo real. Você também pode abrir o Glossário e a Biblioteca de Fontes a qualquer momento."
  });

  // Turkish UI/core translations
  ui.tr = {
    "brand.name":"Kripto Akademi",
    "brand.sub":"Yeni başlayanlar için anlaşılır dersler",
    "sidebar.lessons":"Dersler",
    "sidebar.topics":"Hızlı konular",
    "nav.home":"Ana Sayfa",
    "nav.homesub":"Buradan başlayın",
    "nav.l1":"Blokzincir",
    "nav.l1sub":"Paylaşılan defterin temelleri",
    "nav.l2":"Cüzdanlar",
    "nav.l2sub":"Anahtarlar ve erişim",
    "nav.l3":"Güvenli Transferler",
    "nav.l3sub":"Güvenli gönderim",
    "nav.l4":"Kriptonun 5 Rolü",
    "nav.l4sub":"Token rollerini anlamak",
    "nav.l5":"Gerçek Dünya Dersleri",
    "nav.l5sub":"Yapı neden önemlidir",
    "nav.glossary":"Sözlük",
    "nav.glossarysub":"Temel terimleri kolayca görün",
    "nav.sources":"Kaynak Kütüphanesi",
    "nav.sourcesub":"Makaleler ve resmi kaynaklar",
    "topic.blockchain":"Blokzincir nedir?",
    "topic.wallet":"Cüzdan nedir?",
    "topic.transfer":"Güvenli transfer nasıl çalışır?",
    "topic.roles":"Token rolleri nasıl farklıdır?",
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
    "btn.restart":"Baştan başla",
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
    "complete.note":"İlerlemeniz bu tarayıcıda kaydedilir.",
    "home.title":"Kriptoyu adım adım öğrenin — ve sonra nereye bakacağınızı bilin",
    "home.desc":"Temelden başlayın; cüzdanlar, güvenli transferler, token rolleri ve gerçek dünya dersleriyle devam edin. İstediğiniz zaman Sözlük ve Kaynak Kütüphanesi bölümlerini de açabilirsiniz.",
    "home.start":"Nereden başlamalısınız?",
    "home.openLesson":"Dersi aç",
    "glossary.title":"Sözlük",
    "glossary.desc":"Temel kripto terimlerinin basit anlamları. Bir ders yabancı geliyorsa önce burayı okuyun.",
    "sources.pageTitle":"Kaynak Kütüphanesi",
    "sources.pageDesc":"Gerçek makaleler ve resmi kaynaklardan oluşan okuma listesi. Derslerdeki fikirleri gerçek dünyadaki örneklerle bağlamak için kullanın.",
    "sources.catScams":"Dolandırıcılıklar",
    "sources.catExchanges":"Borsalar",
    "sources.catStable":"Stablecoinler",
    "sources.catWallet":"Cüzdan Güvenliği",
    "nav.updates":"Güncelleme Geçmişi",
    "nav.updatessub":"Son iyileştirmeler",
    "updates.title":"Güncelleme Geçmişi",
    "updates.desc":"Bu sayfa, platformda zaman içinde yapılan geliştirmeleri gösterir."
  };

  extraUi.tr = {
    "v.ledger":"Defter",
    "v.node":"Düğüm",
    "v.wallet":"Cüzdan",
    "v.interface":"arayüz",
    "v.address":"Cüzdan adresi",
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
    "v.bank":"Banka gibi",
    "v.access":"Erişim",
    "v.voting":"Oylama",
    "v.ownership":"Sahiplik",
    "v.cash":"Dijital nakit",
    "v.roleDesc1":"Kod ve cüzdanlarla çalışan finansal işlevler.",
    "v.roleDesc2":"Hizmet içi erişim, fayda ve işlevler için kullanılır.",
    "v.roleDesc3":"Teklif ve kararlara katılım için kullanılır.",
    "v.roleDesc4":"Belirli bir dijital varlığın sahiplik kanıtı.",
    "v.roleDesc5":"Bir referans değere yakın kalacak şekilde tasarlanır.",
    "v.phishing":"Oltalama",
    "v.custody":"Saklama",
    "v.designrisk":"Tasarım riski",
    "v.riskDesc1":"Sahte siteler veya kötü niyetli onaylar varlıkları boşaltabilir.",
    "v.riskDesc2":"Anahtarlar başkasındaysa onun sistemine bağımlı olursunuz.",
    "v.riskDesc3":"Durağan görünse bile yapı hâlâ önemlidir."
  };

  homeContent.tr = {
    title:"Kriptoyu adım adım öğrenin — ve sonra neye bakacağınızı bilin",
    desc:"Temelden başlayın; cüzdanlar, güvenli transferler, token rolleri ve gerçek dünya dersleriyle ilerleyin. İstediğiniz zaman Sözlük ve Kaynak Kütüphanesi bölümlerini de kullanabilirsiniz.",
    start:"Nereden başlamalısınız?",
    guide:"Tamamen yeniyseniz dersleri sırayla izleyin. Her sayfa basit bir dille; örnekler, yaygın hatalar, kontrol noktaları ve kaynaklarla yazılmıştır."
  };

  // Turkish glossary and sources
  glossaryOverrides.tr = [
    ["Cüzdan adresi","Dijital varlık almak için kullanılan herkese açık konum."],
    ["Özel anahtar","Cüzdanı kontrol etmenizi sağlayan gizli anahtar."],
    ["Kurtarma ifadesi","Cüzdanı geri yüklemek için kullanılan yedek kelime dizisi. Asla paylaşmayın."],
    ["Gas ücreti","İşlemi gerçekleştirmek için ödenen ağ ücreti."],
    ["Açık anahtar","Cüzdan kimliğine bağlı kriptografik anahtar; adres oluşturmaya yardımcı olur."],
    ["Blokzincir gezgini","Blokzincirdeki işlemleri ve adresleri görüntülemek için kullanılan site veya araç."],
    ["Akıllı sözleşme","Önceden tanımlı kuralları otomatik çalıştıran blokzincir kodu."],
    ["Saklama","Anahtarları ve varlıklara erişimi kimin kontrol ettiği."],
    ["Blokzincir köprüsü","Farklı blokzincirler arasında varlık veya mesaj taşımaya yarayan araç."]
  ];

  sourceOverrides.tr = [
    ["scams","FTC","FTC tüketici uyarısı","FTC'nin kripto dolandırıcılıkları ve tüketici koruması hakkındaki rehberi.","https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams","Güvenlik","Yeni başlayanların para kaybetmeden önce dolandırıcılık kalıplarını tanımasına yardımcı olur."],
    ["exchanges","Reuters","FTX hakkında Reuters makalesi","FTX vakası, borsa ve saklama risklerini anlamaya yardımcı olur.","https://www.reuters.com/world/us/ftx-begins-paying-customers-creditors-billions-us-2025-02-18/","Ders 5 — Gerçek Dünya","Gerçek bir borsa çöküşü üzerinden custody riskini açıklar."],
    ["stable","ECB","Stablecoinler hakkında ECB açıklaması","Bir politika kurumunun stablecoin yapısını ve risklerini nasıl gördüğünü açıklar.","https://www.ecb.europa.eu/press/financial-stability-publications/macroprudential-bulletin/html/ecb.mpbu202206_3~406cc89b68.en.html","Ders 4 — Token Türleri","Düzenleyicilerin stablecoin riskini nasıl değerlendirdiğini anlamaya yardımcı olur."],
    ["wallet","FTC","FTC ödeme uyarısı","Kriptoyla ödeme talebinin neden güçlü bir uyarı sinyali olduğunu gösterir.","https://consumer.ftc.gov/consumer-alerts/2024/09/dont-pay-anyone-who-contacts-you-and-says-theyll-protect-your-money-or-fix-your-problem","Güvenlik","Kripto ödeme taleplerinin neden dolandırıcılık sinyali olabileceğini gösterir."]
  ];

  // Turkish lessons currently fall back to English lesson bodies if a localized override is missing.
  // To keep the site stable, rely on English lesson content until a full Turkish lesson set is added.
  lessons.tr = JSON.parse(JSON.stringify(lessons.en));

  // Add Turkish/BR labels to language selector current display
  const origSetLang = window.setLang;
  window.setLang = function(lang){
    origSetLang(lang);
    document.documentElement.lang = (lang === 'br') ? 'pt-BR' : lang;
  };

  // Re-render now that new languages exist
  if (typeof currentPage !== 'undefined') {
    currentPage = 'home';
  }
  if (typeof currentLesson !== 'undefined') {
    currentLesson = 0;
  }
  if (typeof applyUI === 'function') applyUI();
  if (typeof renderAllLessons === 'function') renderAllLessons();
  if (typeof showPage === 'function') showPage('home');
})();