(function(){
  if(window.__startGuideLesson67Final) return;
  window.__startGuideLesson67Final = true;

  var step67Pack = {
    en:{
      lesson6:['Step 6 - Buying Your First Crypto','Learn a safe first purchase flow before using larger amounts.','showLesson(5)'],
      lesson7:['Step 7 - Spotting Crypto Scams','Review beginner warning signs before you trust links, DMs, or urgent requests.','showLesson(6)'],
      tip:'A good beginner route is: 1 → 2 → Glossary → 3 → 4 → 5 → 6 → 7 → Safety → Source Library.'
    },
    ko:{
      lesson6:['6단계 - 첫 암호화폐 구매하기','안전한 첫 구매 흐름을 먼저 익히고 큰 금액은 그다음에 생각하세요.','showLesson(5)'],
      lesson7:['7단계 - 암호화폐 사기 구별하기','링크, DM, 긴급 요청을 믿기 전에 초보자용 경고 신호를 먼저 익히세요.','showLesson(6)'],
      tip:'처음이라면 1 → 2 → 용어사전 → 3 → 4 → 5 → 6 → 7 → Safety → Source Library 순서가 좋습니다.'
    },
    th:{
      lesson6:['ขั้นที่ 6 - ซื้อคริปโตครั้งแรก','เรียนรู้ลำดับการซื้อครั้งแรกอย่างปลอดภัยก่อนใช้เงินก้อนใหญ่','showLesson(5)'],
      lesson7:['ขั้นที่ 7 - แยกแยะคริปโตสแกม','ทบทวนสัญญาณเตือนสำหรับมือใหม่ก่อนเชื่อลิงก์ DM หรือคำขอเร่งด่วน','showLesson(6)'],
      tip:'เส้นทางที่เหมาะกับผู้เริ่มต้นคือ 1 → 2 → อภิธานศัพท์ → 3 → 4 → 5 → 6 → 7 → ความปลอดภัย → คลังแหล่งข้อมูล'
    },
    id:{
      lesson6:['Langkah 6 - Membeli Crypto Pertama','Pelajari alur pembelian pertama yang aman sebelum memakai jumlah yang lebih besar.','showLesson(5)'],
      lesson7:['Langkah 7 - Mengenali Penipuan Crypto','Pelajari tanda bahaya pemula sebelum mempercayai tautan, DM, atau permintaan mendesak.','showLesson(6)'],
      tip:'Urutan yang disarankan untuk pemula adalah 1 → 2 → Glosarium → 3 → 4 → 5 → 6 → 7 → Keamanan → Source Library.'
    },
    pt:{
      lesson6:['Passo 6 - Comprar sua primeira cripto','Aprenda primeiro um fluxo seguro de compra antes de usar valores maiores.','showLesson(5)'],
      lesson7:['Passo 7 - Identificar golpes cripto','Revise sinais de alerta para iniciantes antes de confiar em links, DMs ou pedidos urgentes.','showLesson(6)'],
      tip:'Um bom caminho para iniciantes é: 1 → 2 → Glossário → 3 → 4 → 5 → 6 → 7 → Segurança → Biblioteca de Fontes.'
    },
    tr:{
      lesson6:['6. Adım - İlk kriptonu satın almak','Daha büyük miktarlara geçmeden önce güvenli ilk alım akışını öğren.','showLesson(5)'],
      lesson7:['7. Adım - Kripto dolandırıcılıklarını anlamak','Bağlantılara, DM’lere veya acil isteklere güvenmeden önce başlangıç uyarı işaretlerini gözden geçir.','showLesson(6)'],
      tip:'Yeni başlayanlar için iyi rota: 1 → 2 → Sözlük → 3 → 4 → 5 → 6 → 7 → Güvenlik → Kaynak Kütüphanesi.'
    },
    es:{
      lesson6:['Paso 6 - Comprar tu primera cripto','Aprende primero un flujo seguro de compra antes de usar montos mayores.','showLesson(5)'],
      lesson7:['Paso 7 - Detectar estafas cripto','Revisa señales de alerta para principiantes antes de confiar en enlaces, DMs o pedidos urgentes.','showLesson(6)'],
      tip:'Una buena ruta para principiantes es: 1 → 2 → Glosario → 3 → 4 → 5 → 6 → 7 → Seguridad → Biblioteca de Fuentes.'
    },
    ar:{
      lesson6:['الخطوة 6 - شراء أول عملة رقمية','تعلّم مسار الشراء الأول الآمن قبل استخدام مبالغ أكبر.','showLesson(5)'],
      lesson7:['الخطوة 7 - كشف الاحتيال في العملات الرقمية','راجع إشارات التحذير للمبتدئ قبل الوثوق في الروابط أو الرسائل الخاصة أو الطلبات العاجلة.','showLesson(6)'],
      tip:'مسار جيد للمبتدئين هو: 1 → 2 → المصطلحات → 3 → 4 → 5 → 6 → 7 → الأمان → مكتبة المصادر.'
    },
    vi:{
      lesson6:['Buoc 6 - Mua crypto dau tien','Hoc quy trinh mua dau tien an toan truoc khi dung so tien lon hon.','showLesson(5)'],
      lesson7:['Buoc 7 - Nhan biet lua dao crypto','Xem lai cac dau hieu canh bao cho nguoi moi truoc khi tin vao lien ket, DM hay yeu cau gap.','showLesson(6)'],
      tip:'Lo trinh tot cho nguoi moi la: 1 → 2 → Thuật ngữ → 3 → 4 → 5 → 6 → 7 → An toàn → Thư viện nguồn.'
    },
    ha:{
      lesson6:['Mataki na 6 - Siyan kudin dijital na farko','Koyi hanyar saye ta farko cikin aminci kafin ka yi amfani da manyan kudi.','showLesson(5)'],
      lesson7:['Mataki na 7 - Yadda za a gane damfarar crypto','Duba alamun gargadi ga mai farawa kafin ka yarda da link, DM, ko bukatar gaggawa.','showLesson(6)'],
      tip:'Kyakyawan hanya ga masu farawa ita ce: 1 → 2 → Kamus → 3 → 4 → 5 → 6 → 7 → Tsaro → Laburaren Madogara.'
    }
  };
  step67Pack.br = step67Pack.pt;

  function startGuideLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function ensureStartGuideStepsFinal(){
    if(typeof polishedSectionContent === 'undefined' || !polishedSectionContent) return;
    var baseStepActions = [
      'showLesson(0)',
      'showLesson(1)',
      'showPage(\'glossary\')',
      'showLesson(2)',
      'showLesson(3)'
    ];
    Object.keys(step67Pack).forEach(function(lang){
      var target = polishedSectionContent[lang];
      if(!target || !Array.isArray(target.startSteps)) return;
      var local = step67Pack[lang];
      target.startSteps = target.startSteps.slice(0,5).map(function(item, idx){
        var nextItem = Array.isArray(item) ? item.slice(0,3) : [];
        nextItem[0] = item && item[0] ? item[0] : '';
        nextItem[1] = item && item[1] ? item[1] : '';
        nextItem[2] = baseStepActions[idx] || '';
        return nextItem;
      });
      target.startSteps[5] = local.lesson6.slice();
      target.startSteps[6] = local.lesson7.slice();
      target.startTip = local.tip;
    });
  }

  var previousRenderStartHereFinal = window.renderStartHere;
  if(typeof previousRenderStartHereFinal === 'function' && !previousRenderStartHereFinal.__lesson67Wrapped){
    window.renderStartHere = function(){
      var c = polishedSectionContent[currentLang] || polishedSectionContent.en;
      var stepHtml = (c.startSteps || []).map(function(item, i){
        var action = item[2] || '';
        var interactive = !!action;
        var attrs = interactive
          ? ' class="step-item start-step-link" role="button" tabindex="0" onclick="' + action + '" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();' + action + ';}"'
          : ' class="step-item"';
        return '<div' + attrs + '><div class="step-n">' + (i + 1) + '</div><div><div class="step-title">' + item[0] + '</div><div class="step-desc">' + item[1] + '</div></div></div>';
      }).join('');
      return ''
        + '<div class="lc-header">'
        +   '<div class="lc-meta"><span class="meta-pill">' + (typeof t === 'function' ? (t('nav.start') || 'Start Here') : 'Start Here') + '</span><span class="meta-cat">' + c.startTitle + '</span></div>'
        +   '<h1 class="lc-title">' + c.startTitle + '</h1>'
        +   '<p class="lc-intro">' + c.startIntro + '</p>'
        + '</div>'
        + '<div class="lesson-body">'
        +   '<div class="steps-list">' + stepHtml + '</div>'
        +   '<div class="callout success"><strong>' + (typeof t === 'function' ? t('callout.quick') : 'Quick tip') + ':</strong> ' + c.startTip + '</div>'
        + '</div>';
    };
    window.renderStartHere.__lesson67Wrapped = true;
  }

  ensureStartGuideStepsFinal();
  var startPanel = document.getElementById('startPanel');
  if(startPanel && typeof window.renderStartHere === 'function'){
    startPanel.innerHTML = window.renderStartHere();
  }
  if(typeof currentPage !== 'undefined' && currentPage === 'start' && typeof showPage === 'function'){
    showPage('start');
  }
})();