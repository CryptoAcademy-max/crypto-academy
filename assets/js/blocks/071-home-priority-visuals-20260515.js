(function(){
  if(typeof window === 'undefined' || window.__homePriorityVisuals20260515) return;
  window.__homePriorityVisuals20260515 = true;

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function getLang(){
    var raw = typeof currentLang === 'string' ? currentLang : ((document.documentElement && document.documentElement.lang) || 'en');
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'br' || raw.indexOf('pt-br') === 0) return 'br';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw.indexOf('pt') === 0) return 'pt';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function pack(){
    var packs = {
      en:{
        label:'Visual guide', open:'Open',
        overviewTitle:'What you learn here', overviewDesc:'Five learning areas make the site easier to scan before you choose a lesson.',
        overview:['Blockchain basics','Wallets','Safe transfers','Scam prevention','Practical crypto learning'],
        flowTitle:'Where should I start?', flowDesc:'A simple beginner path from first lesson to safety habits.',
        flow:['Start with Lesson 1','Learn wallet basics','Practice safe transfer','Check scams and safety'],
        warningTitle:'Common beginner mistakes', warningDesc:'Quick warning cards point you toward the safety lessons before risk becomes real.',
        warnings:[['Wrong network','Check both sides before sending.'],['Fake website','Compare the domain before logging in.'],['Seed phrase exposure','Never type recovery words into a site.']],
        checklistTitle:'Send safely in 30 seconds', checklistDesc:'Use this compact card before a real transfer.',
        checks:['Is the address correct?','Is the network correct?','Is this the official destination?','Did you test with a small amount?'],
        roadTitle:'Recommended learning path', roadDesc:'Move from basics to safety, first buy, practical use, then intermediate judgment.',
        road:['Beginner','Safety','First Buy','Practical Use','Intermediate Roadmap']
      },
      ko:{
        label:'시각 가이드', open:'보기',
        overviewTitle:'이 사이트에서 배우는 것', overviewDesc:'강의를 고르기 전에 핵심 학습 범위를 한눈에 볼 수 있게 정리했습니다.',
        overview:['블록체인 기초','지갑 이해','안전한 전송','사기 예방','실전 학습'],
        flowTitle:'어디서 시작할까?', flowDesc:'처음 온 사용자를 위한 가장 쉬운 입문 흐름입니다.',
        flow:['1강부터 시작','지갑 이해','전송 실습','사기 예방 확인'],
        warningTitle:'초보자가 자주 실수하는 것', warningDesc:'위험이 실제 문제가 되기 전에 Safety와 Lesson 7로 이어지는 경고 카드입니다.',
        warnings:[['잘못된 네트워크 선택','전송 전 양쪽 네트워크를 맞추세요.'],['가짜 사이트 접속','로그인 전 도메인을 비교하세요.'],['시드 문구 노출','복구 문구는 사이트에 입력하지 마세요.']],
        checklistTitle:'보내기 전 30초 체크', checklistDesc:'실제 전송 전에 바로 확인할 수 있는 compact 카드입니다.',
        checks:['주소가 맞는가?','네트워크가 맞는가?','공식 목적지인가?','소액 테스트를 했는가?'],
        roadTitle:'추천 학습 경로', roadDesc:'기초, 안전, 첫 구매, 실전 학습, 중급자 판단으로 이어지는 흐름입니다.',
        road:['초보자 시작','안전 기초','첫 구매','실전 학습','중급자 트랙']
      },
      th:{
        label:'ภาพนำทาง', open:'เปิด',
        overviewTitle:'สิ่งที่จะเรียนที่นี่', overviewDesc:'ดูภาพรวมก่อนเลือกบทเรียน',
        overview:['พื้นฐานบล็อกเชน','เข้าใจกระเป๋า','โอนอย่างปลอดภัย','ป้องกันหลอกลวง','ฝึกใช้จริง'],
        flowTitle:'ควรเริ่มตรงไหน?', flowDesc:'เส้นทางง่าย ๆ สำหรับผู้เริ่มต้น',
        flow:['เริ่มบทที่ 1','เรียนเรื่องกระเป๋า','ฝึกโอนปลอดภัย','เช็กสแกม'],
        warningTitle:'ข้อผิดพลาดที่พบบ่อย', warningDesc:'การ์ดเตือนสั้น ๆ ก่อนเกิดความเสี่ยง',
        warnings:[['เลือกเครือข่ายผิด','เช็กทั้งสองฝั่งก่อนส่ง'],['เว็บปลอม','เทียบโดเมนก่อนล็อกอิน'],['เผย seed phrase','อย่าพิมพ์คำกู้คืนบนเว็บ']],
        checklistTitle:'เช็ก 30 วินาทีก่อนส่ง', checklistDesc:'ใช้การ์ดนี้ก่อนโอนจริง',
        checks:['ที่อยู่ถูกไหม?','เครือข่ายถูกไหม?','ปลายทางเป็นทางการไหม?','ลองส่งจำนวนน้อยหรือยัง?'],
        roadTitle:'เส้นทางแนะนำ', roadDesc:'จากพื้นฐานไปสู่ความปลอดภัย ซื้อครั้งแรก และภาคปฏิบัติ',
        road:['เริ่มต้น','ความปลอดภัย','ซื้อครั้งแรก','ฝึกใช้จริง','ระดับกลาง']
      },
      id:{
        label:'Panduan visual', open:'Buka',
        overviewTitle:'Yang dipelajari di sini', overviewDesc:'Lihat area belajar utama sebelum memilih pelajaran.',
        overview:['Dasar blockchain','Wallet','Transfer aman','Cegah scam','Praktik crypto'],
        flowTitle:'Mulai dari mana?', flowDesc:'Jalur sederhana untuk pemula.',
        flow:['Mulai Pelajaran 1','Pahami wallet','Latih transfer aman','Cek scam dan keamanan'],
        warningTitle:'Kesalahan umum pemula', warningDesc:'Kartu peringatan cepat sebelum risiko menjadi nyata.',
        warnings:[['Jaringan salah','Cek kedua sisi sebelum kirim.'],['Situs palsu','Bandingkan domain sebelum login.'],['Seed phrase bocor','Jangan ketik kata pemulihan di situs.']],
        checklistTitle:'Cek 30 detik sebelum kirim', checklistDesc:'Kartu ringkas sebelum transfer sungguhan.',
        checks:['Alamat benar?','Jaringan benar?','Tujuan resmi?','Sudah tes jumlah kecil?'],
        roadTitle:'Jalur belajar yang disarankan', roadDesc:'Dari dasar ke keamanan, beli pertama, praktik, lalu level menengah.',
        road:['Pemula','Keamanan','Beli pertama','Praktik','Menengah']
      },
      pt:{
        label:'Guia visual', open:'Abrir',
        overviewTitle:'O que você aprende aqui', overviewDesc:'Veja as áreas principais antes de escolher uma lição.',
        overview:['Blockchain básico','Carteiras','Envios seguros','Prevenção de golpes','Prática cripto'],
        flowTitle:'Por onde começar?', flowDesc:'Um caminho simples para iniciantes.',
        flow:['Comece pela Lição 1','Entenda carteiras','Pratique envio seguro','Cheque golpes e segurança'],
        warningTitle:'Erros comuns de iniciantes', warningDesc:'Cartões de alerta levam você para segurança antes do risco.',
        warnings:[['Rede errada','Confira os dois lados antes de enviar.'],['Site falso','Compare o domínio antes do login.'],['Seed phrase exposta','Nunca digite palavras de recuperação em sites.']],
        checklistTitle:'Cheque 30 segundos antes de enviar', checklistDesc:'Um cartão compacto para antes da transferência real.',
        checks:['O endereço está correto?','A rede está correta?','O destino é oficial?','Você testou com pouco valor?'],
        roadTitle:'Caminho recomendado', roadDesc:'Do básico à segurança, primeira compra, prática e nível intermediário.',
        road:['Iniciante','Segurança','Primeira compra','Prática','Intermediário']
      },
      tr:{
        label:'Görsel rehber', open:'Aç',
        overviewTitle:'Burada ne öğrenirsiniz', overviewDesc:'Ders seçmeden önce ana öğrenme alanlarını görün.',
        overview:['Blockchain temeli','Cüzdanlar','Güvenli transfer','Dolandırıcılık önleme','Pratik kripto'],
        flowTitle:'Nereden başlamalı?', flowDesc:'Yeni başlayanlar için basit rota.',
        flow:['1. dersten başla','Cüzdanı öğren','Güvenli transfer dene','Scam ve güvenliği kontrol et'],
        warningTitle:'Yeni başlayan hataları', warningDesc:'Risk büyümeden önce kısa uyarı kartları.',
        warnings:[['Yanlış ağ','Göndermeden önce iki tarafı kontrol et.'],['Sahte site','Girişten önce domaini karşılaştır.'],['Seed phrase paylaşımı','Kurtarma kelimelerini siteye yazma.']],
        checklistTitle:'Göndermeden önce 30 saniye kontrol', checklistDesc:'Gerçek transferden önce kompakt kart.',
        checks:['Adres doğru mu?','Ağ doğru mu?','Hedef resmi mi?','Küçük miktarla test ettin mi?'],
        roadTitle:'Önerilen öğrenme yolu', roadDesc:'Temelden güvenliğe, ilk alıma, pratiğe ve orta seviyeye.',
        road:['Başlangıç','Güvenlik','İlk alım','Pratik','Orta seviye']
      },
      es:{
        label:'Guía visual', open:'Abrir',
        overviewTitle:'Qué aprendes aquí', overviewDesc:'Mira las áreas principales antes de elegir una lección.',
        overview:['Blockchain básico','Wallets','Transferencias seguras','Prevención de estafas','Práctica cripto'],
        flowTitle:'¿Dónde empiezo?', flowDesc:'Una ruta sencilla para principiantes.',
        flow:['Empieza con la Lección 1','Aprende wallets','Practica envío seguro','Revisa estafas y seguridad'],
        warningTitle:'Errores comunes de principiantes', warningDesc:'Tarjetas de alerta para ir a seguridad antes del riesgo.',
        warnings:[['Red incorrecta','Revisa ambos lados antes de enviar.'],['Sitio falso','Compara el dominio antes de iniciar sesión.'],['Seed phrase expuesta','Nunca escribas palabras de recuperación en un sitio.']],
        checklistTitle:'Chequeo de 30 segundos antes de enviar', checklistDesc:'Una tarjeta compacta antes de transferir.',
        checks:['¿La dirección es correcta?','¿La red es correcta?','¿El destino es oficial?','¿Probaste con poco monto?'],
        roadTitle:'Ruta recomendada', roadDesc:'De fundamentos a seguridad, primera compra, práctica y nivel intermedio.',
        road:['Principiante','Seguridad','Primera compra','Práctica','Intermedio']
      },
      ar:{
        label:'دليل مرئي', open:'افتح',
        overviewTitle:'ماذا تتعلم هنا', overviewDesc:'شاهد مجالات التعلم الأساسية قبل اختيار الدرس.',
        overview:['أساسيات البلوكشين','المحافظ','إرسال آمن','منع الاحتيال','تطبيق عملي'],
        flowTitle:'من أين أبدأ؟', flowDesc:'مسار بسيط للمبتدئين.',
        flow:['ابدأ بالدرس 1','افهم المحافظ','تدرّب على الإرسال الآمن','راجع الاحتيال والأمان'],
        warningTitle:'أخطاء شائعة للمبتدئين', warningDesc:'بطاقات تحذير قصيرة قبل أن يصبح الخطر حقيقياً.',
        warnings:[['شبكة خاطئة','تحقق من الجانبين قبل الإرسال.'],['موقع مزيف','قارن النطاق قبل تسجيل الدخول.'],['كشف عبارة الاسترداد','لا تكتب كلمات الاسترداد في موقع.']],
        checklistTitle:'فحص 30 ثانية قبل الإرسال', checklistDesc:'بطاقة مختصرة قبل التحويل الحقيقي.',
        checks:['هل العنوان صحيح؟','هل الشبكة صحيحة؟','هل الوجهة رسمية؟','هل اختبرت مبلغاً صغيراً؟'],
        roadTitle:'مسار التعلم المقترح', roadDesc:'من الأساسيات إلى الأمان والشراء الأول والتطبيق والمستوى المتوسط.',
        road:['مبتدئ','الأمان','أول شراء','تطبيق عملي','متوسط']
      },
      vi:{
        label:'Hướng dẫn hình ảnh', open:'Mở',
        overviewTitle:'Bạn học gì ở đây', overviewDesc:'Xem nhanh các mảng học chính trước khi chọn bài.',
        overview:['Cơ bản blockchain','Ví','Chuyển an toàn','Phòng tránh lừa đảo','Thực hành crypto'],
        flowTitle:'Bắt đầu ở đâu?', flowDesc:'Lộ trình đơn giản cho người mới.',
        flow:['Bắt đầu Bài 1','Hiểu ví','Tập chuyển an toàn','Kiểm tra lừa đảo và an toàn'],
        warningTitle:'Lỗi người mới hay gặp', warningDesc:'Thẻ cảnh báo nhanh để mở phần an toàn trước khi rủi ro xảy ra.',
        warnings:[['Sai mạng','Kiểm tra hai bên trước khi gửi.'],['Web giả','So sánh tên miền trước khi đăng nhập.'],['Lộ seed phrase','Không nhập cụm khôi phục vào website.']],
        checklistTitle:'Kiểm tra 30 giây trước khi gửi', checklistDesc:'Thẻ gọn để dùng trước giao dịch thật.',
        checks:['Địa chỉ đúng chưa?','Mạng đúng chưa?','Đích có chính thức không?','Đã thử số tiền nhỏ chưa?'],
        roadTitle:'Lộ trình gợi ý', roadDesc:'Từ cơ bản đến an toàn, mua lần đầu, thực hành và trung cấp.',
        road:['Người mới','An toàn','Mua lần đầu','Thực hành','Trung cấp']
      },
      ha:{
        label:'Jagorar hoto', open:'Bude',
        overviewTitle:'Abin da za ka koya', overviewDesc:'Duba manyan fannoni kafin ka zabi darasi.',
        overview:['Tushen blockchain','Wallets','Aika lafiya','Kariya daga damfara','Aikin crypto'],
        flowTitle:'A ina zan fara?', flowDesc:'Hanya mai sauki ga masu farawa.',
        flow:['Fara da Darasi 1','Fahimci wallet','Gwada aika lafiya','Duba damfara da tsaro'],
        warningTitle:'Kurakuran masu farawa', warningDesc:'Kananan katunan gargadi kafin hadari ya zama matsala.',
        warnings:[['Network ba daidai ba','Duba bangarori biyu kafin aika.'],['Shafin karya','Kwatanta domain kafin shiga.'],['Seed phrase ya bayyana','Kada ka rubuta kalmomin dawo da wallet a shafi.']],
        checklistTitle:'Duba dakika 30 kafin aika', checklistDesc:'Katin duba kafin transfer na gaske.',
        checks:['Address daidai ne?','Network daidai ne?','Wurin karba na hukuma ne?','Ka gwada da kadan?'],
        roadTitle:'Hanyar koyo da aka ba da shawara', roadDesc:'Daga tushe zuwa tsaro, sayen farko, aiki, sannan matsakaici.',
        road:['Mai farawa','Tsaro','Sayen farko','Aiki','Matsakaici']
      }
    };
    packs.br = packs.br || packs.pt;
    return packs[getLang()] || packs.en;
  }

  function href(path){
    if(typeof window.__CA_TO_INDEX_ROUTE === 'function') return window.__CA_TO_INDEX_ROUTE('./' + path.replace(/^\.?\//,''));
    return './' + path.replace(/^\.?\//,'');
  }

  function link(path, className, body, extra){
    return '<a class="' + className + '" href="' + esc(href(path)) + '"' + (extra || '') + '>' + body + '</a>';
  }

  function stepNum(index){
    var value = String(index + 1);
    return value.length < 2 ? '0' + value : value;
  }

  function renderOverview(p){
    var routes = ['lesson/blockchain/','lesson/wallet/','lesson/transfer/','lesson/scams/','index.html#lesson8'];
    var icons = ['chain','wallet','send','shield','spark'];
    return '<section class="home-priority-visual home-priority-overview is-priority-4 is-compact" data-home-visual="overview" data-priority="4">'
      + '<div class="home-priority-head"><span>' + esc(p.label) + '</span><h2>' + esc(p.overviewTitle) + '</h2><p>' + esc(p.overviewDesc) + '</p></div>'
      + '<div class="home-priority-overview-grid">'
      + p.overview.map(function(item, index){
          return link(routes[index], 'home-priority-tile is-' + icons[index], '<i aria-hidden="true"></i><strong>' + esc(item) + '</strong><small>' + esc(p.open) + '</small>');
        }).join('')
      + '</div></section>';
  }

  function renderStarterFlow(p){
    var routes = ['lesson/blockchain/','lesson/wallet/','lesson/transfer/','lesson/scams/'];
    return '<section class="home-priority-visual home-priority-flow is-priority-1" data-home-visual="starter-flow" data-priority="1">'
      + '<div class="home-priority-head"><span>' + esc(p.label) + '</span><h2>' + esc(p.flowTitle) + '</h2><p>' + esc(p.flowDesc) + '</p></div>'
      + '<div class="home-flow-track">'
      + p.flow.map(function(item, index){
          return link(routes[index], 'home-flow-step', '<b>' + stepNum(index) + '</b><strong>' + esc(item) + '</strong><em>' + esc(p.open) + '</em>');
        }).join('')
      + '</div></section>';
  }

  function renderWarnings(p){
    var routes = ['lesson/transfer/','lesson/scams/','checklists/seed-phrase-safety/'];
    return '<section class="home-priority-visual home-priority-warning is-priority-3" data-home-visual="warning-cards" data-priority="3">'
      + '<div class="home-priority-head"><span>' + esc(p.label) + '</span><h2>' + esc(p.warningTitle) + '</h2><p>' + esc(p.warningDesc) + '</p></div>'
      + '<div class="home-warning-grid">'
      + p.warnings.map(function(item, index){
          return link(routes[index], 'home-warning-card', '<b aria-hidden="true"></b><strong>' + esc(item[0]) + '</strong><small>' + esc(item[1]) + '</small>');
        }).join('')
      + '</div></section>';
  }

  function renderChecklist(p){
    return '<section class="home-priority-visual home-priority-check is-priority-2" data-home-visual="quick-checklist" data-priority="2">'
      + '<div class="home-priority-check-copy"><span>' + esc(p.label) + '</span><h2>' + esc(p.checklistTitle) + '</h2><p>' + esc(p.checklistDesc) + '</p></div>'
      + '<div class="home-priority-check-card">'
      + p.checks.map(function(item){
          return '<div class="home-priority-check-row"><i aria-hidden="true"></i><strong>' + esc(item) + '</strong></div>';
        }).join('')
      + link('checklists/before-send/', 'home-priority-mini-cta', esc(p.open))
      + '</div></section>';
  }

  function renderRoadmap(p){
    var routes = ['lesson/blockchain/','safety/','lesson/first-buy/','index.html#lesson8','index.html#lesson14'];
    return '<section class="home-priority-visual home-priority-roadmap is-priority-5 is-compact" data-home-visual="roadmap-strip" data-priority="5">'
      + '<div class="home-priority-head"><span>' + esc(p.label) + '</span><h2>' + esc(p.roadTitle) + '</h2><p>' + esc(p.roadDesc) + '</p></div>'
      + '<div class="home-roadmap-strip">'
      + p.road.map(function(item, index){
          return link(routes[index], 'home-roadmap-segment', '<b>' + stepNum(index) + '</b><strong>' + esc(item) + '</strong>');
        }).join('')
      + '</div></section>';
  }

  function insertAfter(target, html){
    if(!target) return null;
    target.insertAdjacentHTML('afterend', html);
    return target.nextElementSibling;
  }

  function applyHomeVisuals(root){
    if(!root || !root.querySelector) return;
    root.querySelectorAll('.home-visual-strip,.home-priority-visual').forEach(function(node){ node.remove(); });
    var p = pack();

    var desc = root.querySelector('.home-desc');
    var starter = insertAfter(desc, renderStarterFlow(p));
    var checklistAnchor = starter || root.querySelector('#home-visitor-start-paths-section') || root.querySelector('.home-start-three-block');
    var checklist = insertAfter(checklistAnchor, renderChecklist(p));
    var overviewAnchor = checklist || starter || desc;
    insertAfter(overviewAnchor, renderOverview(p));

    var fast = root.querySelector('#home-30-second-cards-section') || root.querySelector('.home-fast-actions-block');
    insertAfter(fast, renderWarnings(p));

    var roadmap = root.querySelector('#home-learning-spin-section') || root.querySelector('[data-intermediate-track]');
    insertAfter(roadmap, renderRoadmap(p));
  }

  function enhanceHomeHtml(html){
    if(typeof html !== 'string') return html || '';
    var shell = document.createElement('div');
    shell.innerHTML = html;
    applyHomeVisuals(shell);

    return shell.innerHTML;
  }

  function wrapRenderHome(){
    var previous = window.renderHome || (typeof renderHome === 'function' ? renderHome : null);
    if(typeof previous !== 'function' || previous.__homePriorityVisualsWrapped) return;
    function wrapped(){
      return enhanceHomeHtml(previous.apply(this, arguments));
    }
    wrapped.__homePriorityVisualsWrapped = true;
    window.renderHome = wrapped;
    try{ renderHome = wrapped; }catch(err){}
  }

  function refreshHome(){
    var home = document.getElementById('homePanel');
    if(home && typeof renderHome === 'function') home.innerHTML = renderHome();
    applyHomeVisuals(home);
  }

  function syncHomeVisuals(){
    applyHomeVisuals(document.getElementById('homePanel'));
  }

  function scheduleHomeVisualSync(){
    syncHomeVisuals();
    setTimeout(syncHomeVisuals, 80);
    setTimeout(syncHomeVisuals, 320);
    setTimeout(syncHomeVisuals, 900);
  }

  wrapRenderHome();

  if(typeof renderAllLessons === 'function' && !renderAllLessons.__homePriorityVisualsWrapped){
    var previousAll = renderAllLessons;
    renderAllLessons = function(){
      previousAll.apply(this, arguments);
      refreshHome();
    };
    renderAllLessons.__homePriorityVisualsWrapped = true;
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      refreshHome();
      scheduleHomeVisualSync();
    }, { once:true });
  }else{
    refreshHome();
    scheduleHomeVisualSync();
  }
})();
