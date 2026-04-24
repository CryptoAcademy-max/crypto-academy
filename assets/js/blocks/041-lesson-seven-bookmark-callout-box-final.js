(function(){
  if(window.__lessonSevenBookmarkCalloutBoxFinal) return;
  window.__lessonSevenBookmarkCalloutBoxFinal = true;
  if(typeof window.renderLesson !== 'function') return;

  function baseLang(lang){
    var resolved = lang || (typeof currentLang === 'string' ? currentLang : 'en') || 'en';
    return resolved === 'br' ? 'pt' : resolved;
  }

  function normalizeText(value){
    return String(value || '').replace(/\s+/g,' ').trim().toLowerCase();
  }

  var bookmarkPack = {
    en: {
      title: 'Use bookmarked official sites',
      body: 'For important exchanges, wallets, and crypto services, confirm the official domain first and save it as a bookmark. Using a trusted bookmark instead of random search results, ads, or DM links can reduce the risk of fake websites.'
    },
    ko: {
      title: '북마크된 공식 사이트만 사용하세요',
      body: '중요한 거래소, 지갑, 자주 쓰는 서비스는 공식 도메인을 직접 확인한 뒤 북마크해 두는 것이 좋습니다. 검색 결과, 광고, DM 링크를 바로 누르기보다 저장해 둔 북마크로 접속하는 습관이 가짜 사이트 위험을 줄여줍니다.'
    },
    th: {
      title: 'ใช้เฉพาะเว็บไซต์ทางการที่บันทึกไว้',
      body: 'สำหรับเว็บเทรด กระเป๋าเงิน และบริการคริปโตที่สำคัญ ควรตรวจสอบโดเมนทางการก่อนแล้วบันทึกเป็นบุ๊กมาร์ก การเข้าใช้งานผ่านบุ๊กมาร์กที่เชื่อถือได้แทนผลค้นหา โฆษณา หรือ ลิงก์จาก DM จะช่วยลดความเสี่ยงจากเว็บไซต์ปลอมได้'
    },
    id: {
      title: 'Gunakan hanya situs resmi yang sudah dibookmark',
      body: 'Untuk exchange, wallet, dan layanan crypto yang penting, periksa dulu domain resminya lalu simpan sebagai bookmark. Membuka lewat bookmark tepercaya, bukan dari hasil pencarian, iklan, atau tautan DM, bisa mengurangi risiko situs palsu.'
    },
    pt: {
      title: 'Use apenas sites oficiais salvos nos favoritos',
      body: 'Para exchanges, carteiras e serviços cripto importantes, confirme primeiro o domínio oficial e salve-o nos favoritos. Abrir pelo favorito confiável, em vez de resultados de busca, anúncios ou links por DM, pode reduzir o risco de sites falsos.'
    },
    tr: {
      title: 'Yalnızca yer imlerine kaydettiğiniz resmi siteleri kullanın',
      body: 'Önemli borsalar, cüzdanlar ve kripto hizmetleri için önce resmi alan adını doğrulayın ve yer imlerine kaydedin. Arama sonuçları, reklamlar veya DM bağlantıları yerine kayıtlı yer imini kullanmak sahte site riskini azaltabilir.'
    },
    es: {
      title: 'Usa solo sitios oficiales guardados en marcadores',
      body: 'Para exchanges, billeteras y servicios cripto importantes, confirma primero el dominio oficial y guárdalo en marcadores. Entrar desde un marcador confiable, en lugar de resultados de búsqueda, anuncios o enlaces por DM, puede reducir el riesgo de sitios falsos.'
    },
    ar: {
      title: 'استخدم فقط المواقع الرسمية المحفوظة في الإشارات المرجعية',
      body: 'بالنسبة إلى المنصات والمحافظ وخدمات العملات الرقمية المهمة، تأكد أولا من النطاق الرسمي ثم احفظه في الإشارات المرجعية. استخدام رابط محفوظ وموثوق بدلا من نتائج البحث أو الإعلانات أو روابط الرسائل الخاصة يقلل خطر المواقع المزيفة.'
    },
    vi: {
      title: 'Chỉ dùng các trang chính thức đã lưu dấu trang',
      body: 'Với các sàn, ví và dịch vụ crypto quan trọng, hãy kiểm tra đúng tên miền chính thức trước rồi lưu lại bằng dấu trang. Mở từ dấu trang tin cậy thay vì kết quả tìm kiếm, quảng cáo hoặc liên kết trong DM sẽ giúp giảm rủi ro gặp trang giả.'
    },
    ha: {
      title: 'Yi amfani da shafukan hukuma da ka yi wa alamar shafi kawai',
      body: 'Ga muhimman dandamali, walat da ayyukan crypto, ka fara tabbatar da sahihin domain na hukuma sannan ka yi masa alamar shafi. Yin shiga ta alamar shafi da ka amince da ita maimakon sakamakon bincike, talla ko mahaɗin DM na rage haɗarin shafukan bogi.'
    }
  };
  bookmarkPack.br = bookmarkPack.pt;

  function buildBookmarkCallout(lang){
    var entry = bookmarkPack[baseLang(lang)] || bookmarkPack.en;
    return (
      '<div class="callout warn lesson-seven-bookmark-callout">' +
        '<strong>' + entry.title + '</strong><br>' +
        entry.body +
      '</div>'
    );
  }

  function removeInjectedWarningParagraph(root, lang){
    var entry = bookmarkPack[baseLang(lang)] || bookmarkPack.en;
    var target = normalizeText(entry.body);
    Array.prototype.slice.call(root.querySelectorAll('.lesson-body p')).forEach(function(node){
      if(normalizeText(node.textContent) === target){
        node.remove();
      }
    });
  }

  function insertBookmarkCallout(root, lang){
    var body = root.querySelector('.lesson-body');
    if(!body || body.querySelector('.lesson-seven-bookmark-callout')) return;

    var headings = body.querySelectorAll('h2');
    var anchor = headings[4] || headings[2] || headings[headings.length - 1] || null;
    if(!anchor){
      body.insertAdjacentHTML('afterbegin', buildBookmarkCallout(lang));
      return;
    }

    var insertAfter = anchor;
    var next = anchor.nextElementSibling;
    while(next && next.tagName === 'P'){
      insertAfter = next;
      next = next.nextElementSibling;
    }
    insertAfter.insertAdjacentHTML('afterend', buildBookmarkCallout(lang));
  }

  var originalRenderLesson = window.renderLesson;
  if(originalRenderLesson.__lessonSevenBookmarkCalloutWrapped) return;

  function wrappedRenderLesson(i){
    var html = originalRenderLesson.apply(this, arguments);
    if(i !== 6 || typeof html !== 'string') return html;
    var shell = document.createElement('div');
    shell.innerHTML = html;
    var lang = baseLang();
    removeInjectedWarningParagraph(shell, lang);
    insertBookmarkCallout(shell, lang);
    return shell.innerHTML;
  }

  wrappedRenderLesson.__lessonSevenBookmarkCalloutWrapped = true;
  window.renderLesson = wrappedRenderLesson;

  if(typeof document !== 'undefined'){
    var lessonSevenPanel = document.getElementById('lesson6');
    if(lessonSevenPanel){
      lessonSevenPanel.innerHTML = window.renderLesson(6);
    }
  }

  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof currentLesson === 'number' && currentLesson === 6 && typeof showLesson === 'function'){
    showLesson(6);
  }
})();