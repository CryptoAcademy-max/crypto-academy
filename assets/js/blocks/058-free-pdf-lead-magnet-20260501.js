(function(){
  if(typeof window === 'undefined' || window.__freePdfLeadMagnet20260501) return;
  window.__freePdfLeadMagnet20260501 = true;

  var FREE_PDF_FILES = {
    en:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-en.pdf',
    ko:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ko.pdf',
    th:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-th.pdf',
    id:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-id.pdf',
    pt:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-pt.pdf',
    br:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-br.pdf',
    tr:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-tr.pdf',
    es:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-es.pdf',
    ar:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ar.pdf',
    vi:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-vi.pdf',
    ha:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ha.pdf'
  };

  function leadLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getFreePdfHref(){
    var lang = leadLang();
    if(FREE_PDF_FILES[currentLang]) return FREE_PDF_FILES[currentLang];
    if(FREE_PDF_FILES[lang]) return FREE_PDF_FILES[lang];
    if(FREE_PDF_FILES.en) return FREE_PDF_FILES.en;
    return FREE_PDF_FILES.ko || './pdf/crypto-safety-guide-ko.pdf';
  }

  function getHomeEbookHref(){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      return window.__CA_GET_PAGE_ROUTE('home') + '#home-crypto-ebook-section';
    }
    return (window.__CA_BASE_PREFIX__ || './') + 'index.html#home-crypto-ebook-section';
  }

  function getPack(){
    var lang = leadLang();
    var packs = {
      en:{
        title:'Free PDFs Worth Saving',
        body:'These free PDFs are especially useful when you come back to review them before a real transfer, purchase, or safety check.',
        points:[
          'Quickly review the key checks before sending',
          'Revisit the essential flow before your first buy',
          'Recheck scam warning signs in a shorter format',
          'Save the site\'s core ideas as a simpler reference'
        ],
        compare:'The free PDFs work more like quick review checklists, while the eBooks are better for deeper and more structured review.',
        ctaFree:'Open Free PDF',
        ctaEbook:'Explore the eBook',
        sourceNote:'Useful as short review material before a real transfer, purchase, or safety check.',
        sourceCompare:'The free PDFs are for fast practical review, while the eBooks help with deeper and more structured follow-up.'
      },
      ko:{
        title:'저장해두면 좋은 무료 PDF',
        body:'처음 읽을 때보다, 실제로 전송하거나 구매하기 전에 다시 보는 용도로 더 유용한 무료 PDF입니다.',
        points:[
          '전송 전에 빠르게 다시 확인할 수 있습니다',
          '첫 구매 전에 핵심 흐름만 다시 복습할 수 있습니다',
          '사기 위험 신호를 짧게 다시 체크할 수 있습니다',
          '사이트 내용을 한 장 요약처럼 저장해둘 수 있습니다'
        ],
        compare:'무료 PDF는 빠르게 다시 확인하는 체크리스트에 가깝고, 전자책은 더 정리된 흐름으로 깊이 복습하는 데 가깝습니다.',
        ctaFree:'무료 PDF 열기',
        ctaEbook:'전자책 살펴보기',
        sourceNote:'실제 전송, 구매, 보안 확인 전에 짧게 다시 보기 좋은 무료 정리 자료입니다.',
        sourceCompare:'무료 PDF는 빠른 실전 체크에 가깝고, 전자책은 더 정리된 흐름으로 깊이 복습하는 데 적합합니다.'
      },
      th:{
        title:'PDF ฟรีที่ควรบันทึกไว้',
        body:'PDF ฟรีเหล่านี้มีประโยชน์เมื่อกลับมาทบทวนก่อนโอนจริง ซื้อจริง หรือเช็กความปลอดภัยจริง',
        points:[
          'ทบทวนจุดตรวจสำคัญอย่างรวดเร็วก่อนส่ง',
          'กลับมาดูลำดับสำคัญก่อนซื้อครั้งแรก',
          'ตรวจสัญญาณเตือนการหลอกลวงในรูปแบบที่สั้นลง',
          'บันทึกแนวคิดหลักของเว็บไซต์ไว้เป็นคู่มืออ้างอิงที่ง่ายขึ้น'
        ],
        compare:'PDF ฟรีเหมาะกับการทบทวนแบบ checklist อย่างรวดเร็ว ส่วน eBook เหมาะกับการทบทวนที่ลึกและเป็นระบบกว่า',
        ctaFree:'เปิด PDF ฟรี',
        ctaEbook:'ดู eBook',
        sourceNote:'เหมาะสำหรับทบทวนสั้น ๆ ก่อนโอนจริง ซื้อจริง หรือเช็กความปลอดภัยจริง',
        sourceCompare:'PDF ฟรีช่วยทบทวนภาคปฏิบัติได้เร็ว ส่วน eBook ช่วยติดตามและทบทวนอย่างลึกและเป็นระบบกว่า'
      },
      /* legacy corrupted Thai pack disabled:
      th:{
        title:'PDF ฟรีที่ควรเก็บไว้',
        body:'PDF ฟรีเหล่านี้มีประโยชน์มากเมื่อกลับมาเปิดดูก่อนโอน ซื้อ หรือเช็กความปลอดภัยจริง',
        points:[
          'เปิดกลับมาเช็กก่อนโอนได้อย่างรวดเร็ว',
          'ทบทวนขั้นตอนสำคัญก่อนซื้อครั้งแรกได้',
          'เช็กสัญญาณเตือนเรื่องสแกมแบบสั้นได้อีกครั้ง',
          'เก็บแก่นสำคัญของเว็บไซต์ไว้เป็นสรุปสั้น'
        ],
        compare:'PDF ฟรีเหมาะกับการทบทวนแบบเร็ว ส่วน eBook เหมาะกับการทบทวนเชิงลึกที่เป็นระบบมากกว่า',
        ctaFree:'เปิด PDF ฟรี',
        ctaEbook:'ดู eBook',
        sourceNote:'เหมาะสำหรับเปิดทบทวนสั้น ๆ ก่อนโอน ซื้อ หรือเช็กความปลอดภัยจริง',
        sourceCompare:'PDF ฟรีเหมาะกับการเช็กใช้งานเร็ว ส่วน eBook เหมาะกับการทบทวนเชิงลึกที่เป็นระเบียบกว่า'
      },
      */
      id:{
        title:'PDF Gratis yang Layak Disimpan',
        body:'PDF gratis ini sangat berguna saat Anda membukanya lagi sebelum transfer, pembelian, atau pengecekan keamanan yang nyata.',
        points:[
          'Tinjau cepat pengecekan penting sebelum mengirim',
          'Ulangi alur inti sebelum pembelian pertama',
          'Cek lagi tanda peringatan scam dalam format yang lebih singkat',
          'Simpan inti isi situs sebagai referensi yang lebih sederhana'
        ],
        compare:'PDF gratis lebih cocok sebagai checklist tinjauan cepat, sedangkan eBook lebih cocok untuk tinjauan yang lebih dalam dan terstruktur.',
        ctaFree:'Buka PDF Gratis',
        ctaEbook:'Lihat eBook',
        sourceNote:'Cocok sebagai bahan tinjauan singkat sebelum transfer, pembelian, atau pengecekan keamanan nyata.',
        sourceCompare:'PDF gratis cocok untuk tinjauan praktis yang cepat, sedangkan eBook membantu tindak lanjut yang lebih dalam dan terstruktur.'
      },
      pt:{
        title:'PDFs Gratuitos que Valem Guardar',
        body:'Esses PDFs gratuitos sao especialmente uteis quando voce volta a revisa-los antes de uma transferencia, compra ou verificacao de seguranca real.',
        points:[
          'Reveja rapidamente os checks principais antes de enviar',
          'Retome o fluxo essencial antes da primeira compra',
          'Revise sinais de golpe em um formato mais curto',
          'Guarde as ideias centrais do site como referencia simples'
        ],
        compare:'Os PDFs gratuitos funcionam mais como checklists de revisao rapida, enquanto os eBooks servem melhor para uma revisao mais profunda e organizada.',
        ctaFree:'Abrir PDF Gratuito',
        ctaEbook:'Ver eBook',
        sourceNote:'Uteis como material curto de revisao antes de uma transferencia, compra ou verificacao de seguranca real.',
        sourceCompare:'Os PDFs gratuitos ajudam na revisao pratica e rapida, enquanto os eBooks ajudam em uma revisao mais profunda e estruturada.'
      },
      tr:{
        title:'Kaydetmeye Deger Ucretsiz PDFler',
        body:'Bu ucretsiz PDFler, gercek bir transfer, alim veya guvenlik kontrolu oncesinde tekrar acip bakmak icin ozellikle faydalidir.',
        points:[
          'Gondermeden once temel kontrolleri hizlica gozden gecirin',
          'Ilk alimdan once temel akisi yeniden inceleyin',
          'Dolandiricilik uyari isaretlerini daha kisa bir formatta tekrar kontrol edin',
          'Sitenin temel fikirlerini daha sade bir referans olarak kaydedin'
        ],
        compare:'Ucretsiz PDFler daha cok hizli tekrar checklistleri gibidir; eBookler ise daha derin ve duzenli tekrar icin daha uygundur.',
        ctaFree:'Ucretsiz PDF Ac',
        ctaEbook:'eBooku Incele',
        sourceNote:'Gercek bir transfer, alim veya guvenlik kontrolunden once kisa tekrar materyali olarak faydalidir.',
        sourceCompare:'Ucretsiz PDFler hizli pratik tekrar icindir; eBookler ise daha derin ve duzenli takip icin daha uygundur.'
      },
      es:{
        title:'PDF Gratis que Vale la Pena Guardar',
        body:'Estos PDF gratis son especialmente utiles cuando vuelves a revisarlos antes de una transferencia, compra o comprobacion de seguridad real.',
        points:[
          'Revisa rapido los puntos clave antes de enviar',
          'Repasa el flujo esencial antes de la primera compra',
          'Vuelve a comprobar las senales de estafa en un formato mas corto',
          'Guarda las ideas centrales del sitio como referencia mas simple'
        ],
        compare:'Los PDF gratis funcionan mas como checklists de repaso rapido, mientras que los eBooks son mejores para un repaso mas profundo y ordenado.',
        ctaFree:'Abrir PDF Gratis',
        ctaEbook:'Ver eBook',
        sourceNote:'Utiles como material corto de repaso antes de una transferencia, compra o verificacion de seguridad real.',
        sourceCompare:'Los PDF gratis sirven para un repaso practico y rapido, mientras que los eBooks ayudan a una revision mas profunda y estructurada.'
      },
      ar:{
        title:'ملفات PDF مجانية تستحق الحفظ',
        body:'هذه الملفات المجانية تكون اكثر فائدة عندما تعود لمراجعتها قبل تحويل حقيقي او شراء او فحص امان فعلي.',
        points:[
          'راجع الفحوصات الاساسية بسرعة قبل الارسال',
          'ارجع الى الخطوات المهمة قبل اول عملية شراء',
          'تحقق مرة اخرى من علامات الاحتيال بصيغة اقصر',
          'احفظ افكار الموقع الاساسية كمرجع ابسط'
        ],
        compare:'تعمل ملفات PDF المجانية اكثر كقوائم مراجعة سريعة، بينما تناسب الكتب الالكترونية المراجعة الاعمق والاكثر تنظيما.',
        ctaFree:'افتح PDF المجاني',
        ctaEbook:'استكشف الكتاب الالكتروني',
        sourceNote:'مفيدة كمادة مراجعة قصيرة قبل تحويل حقيقي او شراء او فحص امان فعلي.',
        sourceCompare:'ملفات PDF المجانية مناسبة للمراجعة العملية السريعة، بينما تساعد الكتب الالكترونية على متابعة اعمق واكثر تنظيما.'
      },
      vi:{
        title:'PDF Mien Phi Dang de Luu Lai',
        body:'Nhung PDF mien phi nay dac biet huu ich khi ban mo lai de xem truoc mot lan chuyen tien, mua, hoac kiem tra an toan thuc te.',
        points:[
          'Xem nhanh lai cac buoc can kiem tra truoc khi gui',
          'On lai luong chinh truoc lan mua dau tien',
          'Kiem tra lai dau hieu lua dao trong mot dinh dang ngan hon',
          'Luu cac y chinh cua trang nhu mot tai lieu tham khao gon hon'
        ],
        compare:'Cac PDF mien phi giong checklist on nhanh hon, trong khi eBook phu hop hon cho viec on sau va co cau truc ro rang.',
        ctaFree:'Mo PDF Mien Phi',
        ctaEbook:'Xem eBook',
        sourceNote:'Huu ich nhu tai lieu on ngan truoc mot lan chuyen tien, mua, hoac kiem tra an toan thuc te.',
        sourceCompare:'PDF mien phi hop voi viec on thuc hanh nhanh, trong khi eBook ho tro viec on tap sau hon va co to chuc hon.'
      },
      ha:{
        title:'PDF na Kyauta da Ya Kamata a Ajiye',
        body:'Wadannan PDF na kyauta suna da amfani sosai idan ka dawo ka sake dubawa kafin tura kudi, saye, ko duba tsaro na ainihi.',
        points:[
          'Ka sake duba muhimman abubuwa cikin sauri kafin ka tura',
          'Ka maimaita muhimmin tsari kafin sayenka na farko',
          'Ka sake duba alamun damfara a gajeren tsari',
          'Ka adana muhimman darussan shafin a matsayin madogara mai sauki'
        ],
        compare:'PDF na kyauta sun fi kama da checklist na saurin dubawa, yayin da eBooks suka fi dacewa da zurfin bita mai tsari.',
        ctaFree:'Bude PDF na Kyauta',
        ctaEbook:'Duba eBook',
        sourceNote:'Ya dace a matsayin gajeren abin dubawa kafin tura kudi, saye, ko duba tsaro na ainihi.',
        sourceCompare:'PDF na kyauta sun dace da saurin duba aiki, yayin da eBooks suke taimakawa wajen zurfin bita mai tsari.'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function buildHomeFreePdfValueHtml(){
    var pack = getPack();
    return ''
      + '<section class="home-free-pdf-value-block">'
      +   '<div class="home-free-pdf-value-title">' + pack.title + '</div>'
      +   '<div class="home-free-pdf-value-body">' + pack.body + '</div>'
      +   '<ul class="home-free-pdf-value-list">' + (pack.points || []).map(function(point){
            return '<li>' + point + '</li>';
          }).join('') + '</ul>'
      +   '<div class="home-free-pdf-value-compare">' + pack.compare + '</div>'
      +   '<div class="home-free-pdf-value-actions">'
      +     '<a class="home-premium-pdf-btn is-free" href="' + getFreePdfHref() + '" target="_blank" rel="noopener noreferrer">' + pack.ctaFree + '</a>'
      +     '<a class="home-premium-pdf-btn" href="' + getHomeEbookHref() + '">' + pack.ctaEbook + '</a>'
      +   '</div>'
      + '</section>';
  }

  function buildSourceFreePdfValueHtml(){
    var pack = getPack();
    return ''
      + '<div class="src-freepdf-flow-block">'
      +   '<p class="src-section-note">' + pack.sourceNote + '</p>'
      +   '<div class="src-freepdf-flow-compare">' + pack.sourceCompare + '</div>'
      + '</div>';
  }

  function ensureHomeFreePdfValueBlock(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    panel.querySelectorAll('.home-free-pdf-value-block').forEach(function(node){
      if(node.parentNode !== finder) node.remove();
    });
    var anchor = finder.querySelector('.home-pdf-block');
    if(!anchor) return;
    var block = finder.querySelector('.home-free-pdf-value-block');
    if(!block){
      anchor.insertAdjacentHTML('afterend', buildHomeFreePdfValueHtml());
      block = finder.querySelector('.home-free-pdf-value-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildHomeFreePdfValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function ensureSourceFreePdfValueBlock(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var section = panel.querySelector('.src-section-block[data-source-group="freepdf"], .src-section-block[data-source-section="freePdf"]');
    if(!section) return;
    panel.querySelectorAll('.src-freepdf-flow-block').forEach(function(node){
      if(node.parentNode !== section) node.remove();
    });
    var desc = section.querySelector('.src-group-desc');
    var block = section.querySelector('.src-freepdf-flow-block');
    if(!block){
      if(desc){
        desc.insertAdjacentHTML('afterend', buildSourceFreePdfValueHtml());
      } else {
        section.insertAdjacentHTML('afterbegin', buildSourceFreePdfValueHtml());
      }
      block = section.querySelector('.src-freepdf-flow-block');
    }
    if(!block) return;
    var host = document.createElement('div');
    host.innerHTML = buildSourceFreePdfValueHtml();
    var next = host.firstElementChild;
    if(next) block.replaceWith(next);
  }

  function syncFreePdfLeadMagnet(){
    ensureHomeFreePdfValueBlock();
    ensureSourceFreePdfValueBlock();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__freePdfLeadWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncFreePdfLeadMagnet();
      return result;
    };
    wrapped.__freePdfLeadWrapped = true;
    wrapped.__freePdfLeadOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapAndSync('renderHome');
  wrapAndSync('renderSources');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncFreePdfLeadMagnet);
  }

  syncFreePdfLeadMagnet();
})();
