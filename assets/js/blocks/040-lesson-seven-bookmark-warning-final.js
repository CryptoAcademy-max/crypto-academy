(function(){
  if(window.__lessonSevenBookmarkWarningFinal) return;
  window.__lessonSevenBookmarkWarningFinal = true;
  if(typeof lessons === 'undefined' || !lessons) return;

  function clone(value){
    return JSON.parse(JSON.stringify(value));
  }

  function norm(value){
    return String(value || '').toLowerCase().replace(/\s+/g,' ').trim();
  }

  var warningPack = {
    en:'Fake sites that look visually similar can fool a beginner very easily. For important services, confirm the official domain first and use a saved bookmark instead of random search results, ads, or DM links.',
    ko:'겉보기에 비슷한 가짜 사이트는 초보자를 쉽게 속일 수 있습니다. 중요한 서비스는 공식 도메인을 먼저 확인한 뒤 북마크해 두고, 검색 결과나 광고, DM 링크 대신 저장한 북마크로 접속하는 습관이 더 안전합니다.',
    th:'เว็บปลอมที่หน้าตาคล้ายกันมากสามารถหลอกผู้เริ่มต้นได้ง่าย สำหรับบริการสำคัญ ควรตรวจสอบโดเมนทางการก่อนแล้วบันทึกเป็นบุ๊กมาร์กไว้ และใช้บุ๊กมาร์กนั้นแทนผลค้นหา โฆษณา หรือ DM',
    id:'Situs palsu yang tampak sangat mirip bisa dengan mudah menipu pemula. Untuk layanan penting, periksa dulu domain resminya lalu simpan sebagai bookmark, dan biasakan membuka dari bookmark itu, bukan dari hasil pencarian, iklan, atau tautan DM.',
    pt:'Sites falsos muito parecidos podem enganar iniciantes com facilidade. Para serviços importantes, confirme primeiro o domínio oficial, salve-o nos favoritos e use esse favorito em vez de resultados de busca, anúncios ou links por DM.',
    tr:'Birbirine çok benzeyen sahte siteler yeni başlayanları kolayca kandırabilir. Önemli hizmetlerde önce resmi alan adını doğrulayın, yer imlerine kaydedin ve arama sonuçları, reklamlar veya DM bağlantıları yerine o kaydı kullanın.',
    es:'Los sitios falsos que se parecen mucho al original pueden engañar fácilmente a un principiante. Para servicios importantes, confirma primero el dominio oficial, guárdalo en marcadores y entra desde ese marcador en lugar de resultados de búsqueda, anuncios o enlaces por DM.',
    ar:'المواقع المزيفة المتشابهة بصرياً قد تخدع المبتدئ بسهولة. في الخدمات المهمة، تأكد أولاً من النطاق الرسمي ثم احفظه في الإشارات المرجعية، وادخل من هذا الرابط المحفوظ بدلاً من نتائج البحث أو الإعلانات أو روابط الرسائل الخاصة.',
    vi:'Những trang giả có giao diện rất giống trang thật có thể đánh lừa người mới rất dễ dàng. Với các dịch vụ quan trọng, hãy xác nhận tên miền chính thức trước, lưu lại bằng dấu trang, rồi dùng dấu trang đó thay vì kết quả tìm kiếm, quảng cáo hoặc liên kết trong DM.',
    ha:'Shafukan bogi masu kama da na gaske na iya ruɗar mai farawa cikin sauƙi. Ga muhimman ayyuka, ka fara tabbatar da sahihin domain ɗin hukuma, ka yi masa alamar shafi, sannan ka riƙa shiga ta wannan alamar shafi maimakon sakamakon bincike, talla, ko mahaɗin DM.'
  };
  warningPack.br = warningPack.pt;

  function injectWarningIntoLesson(lang, store){
    if(!store || !store[lang] || !store[lang][6] || !Array.isArray(store[lang][6].sections)) return;
    var lesson = store[lang][6];
    var section = lesson.sections[4];
    var warning = warningPack[lang] || warningPack.en;
    if(!section || !Array.isArray(section.ps) || !warning) return;
    if(!section.ps.some(function(line){ return norm(line) === norm(warning); })){
      section.ps = section.ps.slice();
      section.ps.push(warning);
    }
  }

  Object.keys(warningPack).forEach(function(lang){
    injectWarningIntoLesson(lang, lessons);
    if(typeof lessonOverrides !== 'undefined' && lessonOverrides){
      injectWarningIntoLesson(lang, lessonOverrides);
    }
  });

  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof currentLesson === 'number' && currentLesson === 6 && typeof showLesson === 'function'){
    showLesson(6);
  }
})();