(function(){
  if(window.__lessonSixHomeSearchFinal) return;
  window.__lessonSixHomeSearchFinal = true;

  var lessonSixKeywords = ['buy crypto','first crypto','buy first crypto','exchange','kyc','fiat deposit','self custody','self-custody wallet','buy btc','buy eth','first purchase','crypto purchase','safe first buy','첫 구매','암호화폐 구매','거래소','본인 확인','법정화폐','자기 보관','siyan crypto','dandalin musaya','tantance kai'];

  if(typeof ui !== 'undefined'){
    var homeDescPack = {
      en:'Use this page as your starting point. You can open Lessons 1-6 directly, review key terms in the Glossary, or read real articles and official sources in the Source Library.',
      ko:'이 페이지를 시작점으로 사용하세요. 강의 1-6으로 바로 이동할 수 있고, 용어사전에서 핵심 용어를 확인하거나 자료 라이브러리에서 실제 기사와 공식 자료를 읽을 수 있습니다.',
      th:'ใช้หน้านี้เป็นจุดเริ่มต้น คุณสามารถเปิดบทเรียน 1-6 ดูคำสำคัญในอภิธานศัพท์ หรืออ่านบทความจริงและแหล่งข้อมูลทางการในคลังแหล่งข้อมูลได้',
      id:'Gunakan halaman ini sebagai titik awal. Anda bisa langsung membuka Pelajaran 1-6, melihat istilah penting di Glosarium, atau membaca artikel nyata dan sumber resmi di Source Library.',
      pt:'Use esta página como ponto de partida. Você pode abrir as Lições 1-6, revisar termos no Glossário ou ler artigos reais e fontes oficiais na Biblioteca de Fontes.',
      br:'Use esta página como ponto de partida. Você pode abrir as Lições 1-6, revisar termos no Glossário ou ler artigos reais e fontes oficiais na Biblioteca de Fontes.',
      tr:'Bu sayfayı başlangıç noktanız olarak kullanın. Ders 1-6’yı doğrudan açabilir, terimleri Sözlükte gözden geçirebilir veya Kaynak Kütüphanesinde gerçek makaleler ile resmi kaynakları okuyabilirsiniz.',
      es:'Usa esta página como punto de partida. Puedes abrir las Lecciones 1-6, revisar términos en el Glosario o leer artículos reales y fuentes oficiales en la Biblioteca de Fuentes.',
      ar:'استخدم هذه الصفحة كنقطة بداية. يمكنك فتح الدروس 1-6 مباشرة، ومراجعة المصطلحات في المعجم، أو قراءة مقالات حقيقية ومصادر رسمية في مكتبة المصادر.',
      vi:'Hãy dùng trang này như điểm bắt đầu. Bạn có thể mở trực tiếp Bài học 1-6, xem thuật ngữ trong phần Thuật ngữ, hoặc đọc bài viết thật và nguồn chính thức trong Thư viện Nguồn.',
      ha:'Yi amfani da wannan shafin a matsayin wurin farawa. Za ka iya bude Darasi 1-6 kai tsaye, duba muhimman kalmomi a Kamus, ko karanta ainihin makaloli da madogara na hukuma a Laburaren Madogara.'
    };
    Object.keys(homeDescPack).forEach(function(lang){
      if(!ui[lang]) ui[lang] = {};
      ui[lang]['home.desc'] = homeDescPack[lang];
    });
  }

  if(typeof window.getSearchableItems === 'function'){
    var originalGetSearchableItemsFinal = window.getSearchableItems;
    if(!originalGetSearchableItemsFinal.__lessonSixSearchWrapped){
      var wrappedGetSearchableItemsFinal = function(){
        var items = originalGetSearchableItemsFinal.apply(this, arguments) || [];
        var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
        var lessonData = (typeof lessons !== 'undefined' && lessons) ? (lessons[lang] || lessons.en || []) : [];
        var lessonSix = lessonData[5];
        var exists = items.some(function(item){
          return item && item.type === 'lesson' && item.badge === 'L6';
        });
        if(lessonSix && !exists){
          items.push({
            type:'lesson',
            badge:'L6',
            title:String(lessonSix.title || ''),
            desc:lessonSix.intro ? String(lessonSix.intro).substring(0, 120) + '...' : '',
            keywords:lessonSixKeywords.slice(),
            action:function(){ if(typeof showLesson === 'function') showLesson(5); if(typeof closeSearch === 'function') closeSearch(); }
          });
        }
        return items;
      };
      wrappedGetSearchableItemsFinal.__lessonSixSearchWrapped = true;
      window.getSearchableItems = wrappedGetSearchableItemsFinal;
    }
  }

  if(typeof applyUI === 'function') applyUI();
  if(typeof currentPage !== 'undefined' && currentPage === 'home' && typeof showPage === 'function'){
    showPage('home');
  }
})();