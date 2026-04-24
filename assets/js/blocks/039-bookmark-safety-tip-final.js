(function(){
  if(window.__bookmarkSafetyTipFinal) return;
  window.__bookmarkSafetyTipFinal = true;
  if(typeof polishedSectionContent === 'undefined' || !polishedSectionContent) return;

  function clone(value){
    return JSON.parse(JSON.stringify(value));
  }

  function norm(value){
    return String(value || '').toLowerCase().replace(/\s+/g,' ').trim();
  }

  var bookmarkSafetyPack = {
    en:{
      title:'Use bookmarked official sites',
      body:'For important exchanges, wallets, and crypto services, confirm the official domain first and save it as a bookmark. Using a trusted bookmark instead of random search results, ads, or DM links can reduce the risk of fake websites.'
    },
    ko:{
      title:'북마크된 공식 사이트만 사용하세요',
      body:'중요한 거래소, 지갑, 자주 쓰는 서비스는 공식 도메인을 직접 확인한 뒤 북마크해 두는 것이 좋습니다. 검색 결과, 광고, DM 링크를 바로 누르기보다 저장해 둔 북마크를 사용하는 습관이 가짜 사이트 위험을 줄여줍니다.'
    },
    th:{
      title:'ใช้เฉพาะเว็บทางการที่บันทึกบุ๊กมาร์กไว้',
      body:'สำหรับเว็บเทรด วอลเล็ต และบริการคริปโตที่สำคัญ ควรตรวจสอบโดเมนทางการด้วยตัวเองก่อนแล้วบันทึกเป็นบุ๊กมาร์กไว้ การเปิดจากบุ๊กมาร์กที่เชื่อถือได้แทนผลค้นหา โฆษณา หรือ DM จะช่วยลดความเสี่ยงจากเว็บไซต์ปลอมได้'
    },
    id:{
      title:'Gunakan situs resmi yang sudah dibookmark',
      body:'Untuk exchange, wallet, dan layanan crypto penting, periksa dulu domain resminya lalu simpan sebagai bookmark. Kebiasaan membuka dari bookmark tepercaya, bukan dari hasil pencarian, iklan, atau tautan DM, bisa mengurangi risiko situs palsu.'
    },
    pt:{
      title:'Use apenas sites oficiais salvos nos favoritos',
      body:'Para exchanges, carteiras e serviços importantes, confirme primeiro o domínio oficial e salve-o nos favoritos. Abrir por um favorito confiável, em vez de resultados de busca, anúncios ou links por DM, reduz o risco de sites falsos.'
    },
    tr:{
      title:'Yalnızca yer imlerine eklediğiniz resmi siteleri kullanın',
      body:'Önemli borsalar, cüzdanlar ve kripto hizmetleri için önce resmi alan adını kendiniz doğrulayın ve yer imlerine kaydedin. Arama sonuçları, reklamlar veya DM bağlantıları yerine güvenilir yer imlerini kullanmak sahte site riskini azaltır.'
    },
    es:{
      title:'Usa solo sitios oficiales guardados en marcadores',
      body:'Para exchanges, billeteras y servicios cripto importantes, confirma primero el dominio oficial y guárdalo en tus marcadores. Abrir un marcador confiable en lugar de resultados de búsqueda, anuncios o enlaces por DM reduce el riesgo de sitios falsos.'
    },
    ar:{
      title:'استخدم فقط المواقع الرسمية المحفوظة في الإشارات المرجعية',
      body:'بالنسبة للمنصات والمحافظ والخدمات المهمة، تأكد أولاً من النطاق الرسمي بنفسك ثم احفظه في الإشارات المرجعية. استخدام رابط محفوظ وموثوق بدلاً من نتائج البحث أو الإعلانات أو روابط الرسائل الخاصة يقلل من خطر المواقع المزيفة.'
    },
    vi:{
      title:'Chi dùng các trang chính thức đã lưu dấu trang',
      body:'Với các sàn, ví và dịch vụ crypto quan trọng, hãy tự xác nhận tên miền chính thức trước rồi lưu lại bằng dấu trang. Mở từ dấu trang đáng tin cậy thay vì kết quả tìm kiếm, quảng cáo hoặc liên kết trong DM sẽ giúp giảm rủi ro gặp trang giả.'
    },
    ha:{
      title:'Yi amfani da shafukan hukuma da ka yi wa alamar shafi',
      body:'Ga muhimman dandali, walat, da ayyukan crypto, ka fara tabbatar da sahihin domain ɗin hukuma sannan ka yi masa alamar shafi. Yin amfani da alamar shafi mai aminci maimakon sakamakon bincike, talla, ko mahaɗin DM yana rage haɗarin shafin bogi.'
    }
  };
  bookmarkSafetyPack.br = clone(bookmarkSafetyPack.pt);

  function ensureBookmarkTip(lang){
    var target = polishedSectionContent[lang];
    var pack = bookmarkSafetyPack[lang] || bookmarkSafetyPack.en;
    if(!target || !pack) return;
    target.safetyItems = Array.isArray(target.safetyItems) ? target.safetyItems.slice() : [];
    var exists = target.safetyItems.some(function(row){
      return norm(row && row[0]) === norm(pack.title);
    });
    if(!exists){
      target.safetyItems.push([pack.title, pack.body]);
    }
  }

  Object.keys(bookmarkSafetyPack).forEach(function(lang){
    ensureBookmarkTip(lang);
  });

  if(typeof currentPage !== 'undefined' && currentPage === 'safety' && typeof showPage === 'function'){
    showPage('safety');
  }else if(typeof document !== 'undefined'){
    var panel = document.getElementById('safetyPanel');
    if(panel && typeof renderSafetyPage === 'function'){
      panel.innerHTML = renderSafetyPage();
    }
  }
})();