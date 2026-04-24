(function(){
  if(window.__lessonSixFinalUltimate) return;
  window.__lessonSixFinalUltimate = true;

  function deepClone(value){
    if(value === undefined || value === null) return value;
    return JSON.parse(JSON.stringify(value));
  }

  function lessonSixLangFinal(){
    return currentLang === 'br' ? 'pt' : currentLang;
  }

  function ensureLessonSixVisualStyleFinal(){
    if(document.getElementById('lesson6-visual-style-ultimate')) return;
    var style = document.createElement('style');
    style.id = 'lesson6-visual-style-ultimate';
    style.textContent = '.lesson6-visual-shell{padding:18px 18px 20px;background:linear-gradient(180deg,#fffdf8 0%,#f7f1e6 100%);border:1px solid rgba(38,65,99,.12)}.lesson6-visual-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}.lesson6-visual-card{position:relative;padding:14px 14px 16px;border-radius:18px;background:#fff;border:1px solid rgba(38,65,99,.08);box-shadow:0 10px 22px rgba(24,42,69,.07);overflow:hidden}.lesson6-visual-card::after{content:\"\";position:absolute;right:-22px;bottom:-22px;width:82px;height:82px;border-radius:50%;background:rgba(38,65,99,.06)}.lesson6-visual-meta{display:flex;align-items:center;gap:10px;margin-bottom:10px}.lesson6-visual-icon{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;background:#264163;color:#fff;font-size:20px;box-shadow:0 8px 18px rgba(38,65,99,.18)}.lesson6-visual-card:nth-child(2) .lesson6-visual-icon{background:#98762f}.lesson6-visual-card:nth-child(3) .lesson6-visual-icon{background:#2d6b49}.lesson6-visual-card:nth-child(4) .lesson6-visual-icon{background:#8a3731}.lesson6-visual-card:nth-child(5) .lesson6-visual-icon{background:#5f4a91}.lesson6-visual-step{font-family:\"IBM Plex Mono\",monospace;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7a5f1f}.lesson6-visual-head{font-size:1rem;font-weight:800;color:#1f2430;line-height:1.25}.lesson6-visual-body{margin-top:8px;font-size:.92rem;line-height:1.56;color:#5b534a}@media (max-width:720px){.lesson6-visual-shell{padding:15px}.lesson6-visual-grid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }

  function buildLessonSixVisualMarkupFinal(lesson){
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    var icons = ['🏦','🛡️','💳','🔗','👛'];
    return '<div class="visual lesson6-visual-shell"><div class="visual-title">' + (typeof t === 'function' ? t('visual.title') : 'Visual explanation') + '</div><div class="lesson6-visual-grid">' + visual.map(function(step, idx){
      return '<div class="lesson6-visual-card"><div class="lesson6-visual-meta"><div class="lesson6-visual-icon">' + (icons[idx] || '•') + '</div><div class="lesson6-visual-step">0' + (idx + 1) + '</div></div><div class="lesson6-visual-head">' + step.title + '</div><div class="lesson6-visual-body">' + step.desc + '</div></div>';
    }).join('') + '</div></div>';
  }

  var lessonSixUiPackFinal = {
    en:{'nav.l6':'Buying Your First Crypto','nav.l6sub':'A safe first purchase flow','topic.buy':'How do I buy my first crypto safely?'},
    ko:{'nav.l6':'첫 암호화폐 구매하기','nav.l6sub':'안전한 첫 구매 흐름','topic.buy':'첫 암호화폐는 어떻게 안전하게 살까?'},
    th:{'nav.l6':'ซื้อคริปโตครั้งแรก','nav.l6sub':'ขั้นตอนซื้อครั้งแรกอย่างปลอดภัย','topic.buy':'จะซื้อคริปโตครั้งแรกอย่างปลอดภัยได้อย่างไร?'},
    id:{'nav.l6':'Membeli Crypto Pertama','nav.l6sub':'Alur pembelian pertama yang aman','topic.buy':'Bagaimana membeli crypto pertama dengan aman?'},
    pt:{'nav.l6':'Comprar sua primeira cripto','nav.l6sub':'Um fluxo seguro de primeira compra','topic.buy':'Como comprar sua primeira cripto com segurança?'},
    br:{'nav.l6':'Comprar sua primeira cripto','nav.l6sub':'Um fluxo seguro de primeira compra','topic.buy':'Como comprar sua primeira cripto com segurança?'},
    tr:{'nav.l6':'İlk Kriptonu Satın Almak','nav.l6sub':'Güvenli ilk alım akışı','topic.buy':'İlk kriptonu güvenli şekilde nasıl alırsın?'},
    es:{'nav.l6':'Comprar tu primera cripto','nav.l6sub':'Un flujo seguro de primera compra','topic.buy':'¿Cómo comprar tu primera cripto de forma segura?'},
    ar:{'nav.l6':'شراء أول عملة رقمية','nav.l6sub':'خطوات أول شراء بشكل آمن','topic.buy':'كيف أشتري أول عملة رقمية بشكل آمن؟'},
    vi:{'nav.l6':'Mua crypto đầu tiên','nav.l6sub':'Quy trình mua đầu tiên an toàn','topic.buy':'Làm sao mua crypto đầu tiên một cách an toàn?'},
    ha:{'nav.l6':'Siyan kudin dijital na farko','nav.l6sub':'Hanyar saye ta farko cikin aminci','topic.buy':'Ta yaya zan sayi kudin dijital na farko cikin aminci?'}
  };

  var lessonSixMiniQuizPackFinal = {
    en:[
      ['Question 1. What is the safest way to make a first crypto purchase?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Buy a large amount right away</div><div>B. Start small and learn the flow</div><div>C. Ignore the network until later</div></div>','Answer: B<br>Explanation: Starting small lowers pressure and helps you learn the full purchase flow more safely.'],
      ['Question 2. What should you check before sending crypto to another place?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. The coin color</div><div>B. The network and the address</div><div>C. The logo size</div></div>','Answer: B<br>Explanation: The address and the network matter most. A mismatch can create transfer problems that are hard to undo.'],
      ['Question 3. What should you think about right after the purchase?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Whether to buy another coin immediately</div><div>B. Where to store it safely</div><div>C. Whether to change the screen color</div></div>','Answer: B<br>Explanation: Buying is only the start. You still need a clear storage plan.']
    ],
    ko:[
      ['문항 1. 처음 암호화폐를 살 때 가장 좋은 방법은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 처음부터 큰 금액을 한 번에 산다</div><div>B. 소액으로 시작해서 과정부터 익힌다</div><div>C. 네트워크 확인은 나중에 한다</div></div>','정답: B<br>해설: 처음에는 수익보다 과정 이해가 더 중요합니다. 소액으로 시작해야 실수를 줄일 수 있습니다.'],
      ['문항 2. 코인을 다른 곳으로 보낼 때 가장 먼저 확인해야 할 것은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 코인 색상</div><div>B. 네트워크와 주소</div><div>C. 로고 크기</div></div>','정답: B<br>해설: 전송에서는 주소와 네트워크 확인이 가장 중요합니다. 이 부분을 틀리면 되돌리기 어렵습니다.'],
      ['문항 3. 구매 후 바로 생각해야 할 것은 무엇인가요?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. 다음 코인을 바로 더 살지</div><div>B. 어디에 안전하게 보관할지</div><div>C. 화면 색상을 바꿀지</div></div>','정답: B<br>해설: 구매 자체가 끝이 아닙니다. 자산을 어디에, 어떤 방식으로 보관할지가 매우 중요합니다.']
    ],
    th:[
      ['คำถาม 1. วิธีที่ปลอดภัยที่สุดสำหรับการซื้อคริปโตครั้งแรกคืออะไร?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. ซื้อเงินก้อนใหญ่ทันที</div><div>B. เริ่มจากจำนวนน้อยและเรียนรู้ขั้นตอน</div><div>C. ค่อยตรวจเครือข่ายทีหลัง</div></div>','คำตอบ: B<br>อธิบาย: การเริ่มจากจำนวนน้อยช่วยลดแรงกดดันและทำให้เรียนรู้กระบวนการได้ปลอดภัยกว่า'],
      ['คำถาม 2. ก่อนส่งคริปโตไปที่อื่นควรตรวจอะไรเป็นอันดับแรก?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. สีของเหรียญ</div><div>B. เครือข่ายและที่อยู่</div><div>C. ขนาดโลโก้</div></div>','คำตอบ: B<br>อธิบาย: ที่อยู่และเครือข่ายสำคัญที่สุด เพราะถ้าผิดอาจแก้ไขได้ยาก'],
      ['คำถาม 3. หลังซื้อแล้วควรคิดเรื่องใดก่อน?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. จะซื้อเหรียญอื่นต่อทันทีไหม</div><div>B. จะเก็บสินทรัพย์ไว้อย่างปลอดภัยที่ไหน</div><div>C. จะเปลี่ยนสีหน้าจอไหม</div></div>','คำตอบ: B<br>อธิบาย: การซื้อไม่ใช่จุดจบ คุณยังต้องคิดเรื่องการเก็บรักษาอย่างปลอดภัย']
    ],
    id:[
      ['Pertanyaan 1. Apa cara paling aman untuk pembelian crypto pertama?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Langsung beli dalam jumlah besar</div><div>B. Mulai kecil sambil belajar alurnya</div><div>C. Cek jaringan nanti saja</div></div>','Jawaban: B<br>Penjelasan: Memulai dari kecil mengurangi tekanan dan membantu Anda belajar alur dengan lebih aman.'],
      ['Pertanyaan 2. Apa yang paling penting dicek sebelum mengirim crypto ke tempat lain?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Warna koin</div><div>B. Jaringan dan alamat</div><div>C. Ukuran logo</div></div>','Jawaban: B<br>Penjelasan: Alamat dan jaringan adalah hal terpenting. Salah pilih bisa menimbulkan masalah transfer.'],
      ['Pertanyaan 3. Apa yang perlu dipikirkan segera setelah membeli?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Langsung membeli koin lain</div><div>B. Menentukan tempat penyimpanan yang aman</div><div>C. Mengubah warna layar</div></div>','Jawaban: B<br>Penjelasan: Pembelian bukan langkah terakhir. Anda tetap perlu memikirkan penyimpanan yang aman.']
    ],
    pt:[
      ['Pergunta 1. Qual é a forma mais segura de fazer a primeira compra de cripto?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Comprar um valor grande de imediato</div><div>B. Começar com pouco e aprender o processo</div><div>C. Deixar a verificação da rede para depois</div></div>','Resposta: B<br>Explicação: Começar com pouco reduz a pressão e ajuda a entender o fluxo com mais segurança.'],
      ['Pergunta 2. O que deve ser verificado primeiro antes de enviar cripto para outro lugar?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. A cor da moeda</div><div>B. A rede e o endereço</div><div>C. O tamanho do logotipo</div></div>','Resposta: B<br>Explicação: Endereço e rede são o ponto mais importante. Um erro aqui pode causar problemas difíceis de desfazer.'],
      ['Pergunta 3. O que você deve pensar logo depois da compra?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Se vai comprar outra moeda imediatamente</div><div>B. Onde armazenar com segurança</div><div>C. Se vai mudar a cor da tela</div></div>','Resposta: B<br>Explicação: Comprar é só o começo. Você ainda precisa decidir como guardar o ativo com segurança.']
    ],
    tr:[
      ['Soru 1. İlk kripto alımı için en güvenli yaklaşım nedir?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Hemen büyük miktarla başlamak</div><div>B. Küçük başlayıp süreci öğrenmek</div><div>C. Ağ kontrolünü sonraya bırakmak</div></div>','Cevap: B<br>Açıklama: Küçük başlamak baskıyı azaltır ve süreci daha güvenli biçimde öğrenmenizi sağlar.'],
      ['Soru 2. Kriptoyu başka bir yere göndermeden önce ilk neyi kontrol etmelisiniz?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Coin rengi</div><div>B. Ağ ve adres</div><div>C. Logo boyutu</div></div>','Cevap: B<br>Açıklama: Adres ve ağ en kritik kontroldür. Buradaki hata transfer sorununa yol açabilir.'],
      ['Soru 3. Satın alma sonrası hemen neyi düşünmelisiniz?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Hemen başka coin almak</div><div>B. Varlığı nerede güvenle saklayacağınızı</div><div>C. Ekran rengini değiştirmeyi</div></div>','Cevap: B<br>Açıklama: Satın alma son adım değildir. Güvenli saklama planı da gerekir.']
    ],
    es:[
      ['Pregunta 1. ¿Cuál es la forma más segura de hacer la primera compra de cripto?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Comprar una cantidad grande de inmediato</div><div>B. Empezar con poco y aprender el proceso</div><div>C. Dejar la revisión de la red para después</div></div>','Respuesta: B<br>Explicación: Empezar con poco reduce la presión y ayuda a entender el proceso con más seguridad.'],
      ['Pregunta 2. ¿Qué debes revisar primero antes de enviar cripto a otro lugar?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. El color de la moneda</div><div>B. La red y la dirección</div><div>C. El tamaño del logo</div></div>','Respuesta: B<br>Explicación: La red y la dirección son la parte más importante. Un error aquí puede causar problemas de transferencia.'],
      ['Pregunta 3. ¿Qué debes pensar justo después de comprar?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Si vas a comprar otra moneda enseguida</div><div>B. Dónde guardarla de forma segura</div><div>C. Si vas a cambiar el color de la pantalla</div></div>','Respuesta: B<br>Explicación: Comprar no es el final. También necesitas decidir cómo guardar el activo con seguridad.']
    ],
    ar:[
      ['السؤال 1. ما الطريقة الأكثر أماناً لشراء أول عملة رقمية؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. شراء مبلغ كبير مباشرة</div><div>B. البدء بمبلغ صغير وتعلّم الخطوات</div><div>C. تأجيل فحص الشبكة إلى وقت لاحق</div></div>','الإجابة: B<br>الشرح: البدء بمبلغ صغير يخفف الضغط ويساعدك على تعلم المسار بشكل أكثر أماناً.'],
      ['السؤال 2. ما أول شيء يجب فحصه قبل إرسال العملة إلى مكان آخر؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. لون العملة</div><div>B. الشبكة والعنوان</div><div>C. حجم الشعار</div></div>','الإجابة: B<br>الشرح: العنوان والشبكة هما الأهم. الخطأ هنا قد يسبب مشكلة في النقل يصعب إصلاحها.'],
      ['السؤال 3. ما الذي يجب التفكير فيه مباشرة بعد الشراء؟<div style="margin-top:8px;display:grid;gap:4px;"><div>A. هل تشتري عملة أخرى فوراً</div><div>B. أين ستحتفظ بها بأمان</div><div>C. هل ستغير لون الشاشة</div></div>','الإجابة: B<br>الشرح: الشراء ليس النهاية. ما زلت تحتاج إلى خطة حفظ آمنة.']
    ],
    vi:[
      ['Câu hỏi 1. Cách an toàn nhất để mua crypto lần đầu là gì?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Mua số tiền lớn ngay lập tức</div><div>B. Bắt đầu nhỏ và học quy trình</div><div>C. Để việc kiểm tra mạng lại sau</div></div>','Đáp án: B<br>Giải thích: Bắt đầu với số tiền nhỏ giúp giảm áp lực và học quy trình an toàn hơn.'],
      ['Câu hỏi 2. Điều gì cần kiểm tra đầu tiên trước khi gửi crypto đi nơi khác?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Màu của coin</div><div>B. Mạng lưới và địa chỉ</div><div>C. Kích thước logo</div></div>','Đáp án: B<br>Giải thích: Địa chỉ và mạng lưới là quan trọng nhất. Sai ở bước này có thể gây lỗi chuyển.'],
      ['Câu hỏi 3. Bạn nên nghĩ về điều gì ngay sau khi mua?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Có nên mua ngay coin khác không</div><div>B. Sẽ lưu trữ ở đâu cho an toàn</div><div>C. Có nên đổi màu màn hình không</div></div>','Đáp án: B<br>Giải thích: Việc mua chưa phải là kết thúc. Bạn vẫn cần một kế hoạch lưu trữ an toàn.']
    ],
    ha:[
      ['Tambaya ta 1. Wace hanya ce mafi aminci wajen sayen kudin dijital na farko?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Siyan babban adadi nan take</div><div>B. Fara da kadan kana koyon tsarin</div><div>C. Bar duba hanyar sadarwa zuwa gaba</div></div>','Amsa: B<br>Bayani: Fara da kadan yana rage matsin lamba kuma yana taimaka maka koyon tsarin cikin aminci.'],
      ['Tambaya ta 2. Mene ne ya kamata ka fara dubawa kafin ka tura kudin dijital zuwa wani wuri?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Launin kudin</div><div>B. Hanyar sadarwa da adireshi</div><div>C. Girman tambari</div></div>','Amsa: B<br>Bayani: Adireshi da hanyar sadarwa su ne mafi muhimmanci. Kuskure a nan na iya jawo matsalar canja wuri.'],
      ['Tambaya ta 3. Mene ne ya kamata ka fara tunani a kai bayan ka saya?<div style="margin-top:8px;display:grid;gap:4px;"><div>A. Ko za ka sayi wani kudin nan take</div><div>B. Inda za ka adana shi cikin aminci</div><div>C. Ko za ka canza launin allo</div></div>','Amsa: B<br>Bayani: Saye ba shi ne karshen aikin ba. Har yanzu kana bukatar shirin adanawa cikin aminci.']
    ]
  };
  lessonSixMiniQuizPackFinal.br = deepClone(lessonSixMiniQuizPackFinal.pt);

  var lessonSixUnderstandingTitlePackFinal = {
    en:'Test Your Understanding', ko:'이해도 확인', th:'ทดสอบความเข้าใจ', id:'Uji Pemahamanmu',
    pt:'Teste seu Entendimento', br:'Teste seu Entendimento', tr:'Anlayışınızı Test Edin',
    es:'Pon a Prueba tu Comprensión', ar:'اختبر فهمك', vi:'Kiểm Tra Hiểu Biết', ha:'Gwada Fahimtarka'
  };

  var lessonSixUnderstandingPackFinal = {
    en:{q:'What is the safest beginner approach to buying crypto for the first time?',opts:['Put in a large amount immediately','Start small and learn the flow','Check the network later'],correct:1,fb:'Correct! The safest beginner approach is to start small and understand each step first.'},
    ko:{q:'처음 암호화폐를 살 때 가장 안전한 접근은 무엇인가요?',opts:['큰 금액부터 바로 넣는다','소액으로 시작하며 흐름을 익힌다','네트워크 확인은 나중에 한다'],correct:1,fb:'정답! 초보자에게 가장 안전한 방법은 소액으로 시작하면서 전체 흐름을 익히는 것입니다.'},
    th:{q:'เมื่อต้องซื้อคริปโตครั้งแรก วิธีที่ปลอดภัยที่สุดคืออะไร?',opts:['ใส่เงินก้อนใหญ่ทันที','เริ่มจากจำนวนน้อยและเรียนรู้ขั้นตอน','ค่อยตรวจเครือข่ายทีหลัง'],correct:1,fb:'ถูกต้อง! สำหรับมือใหม่ การเริ่มจากจำนวนน้อยและค่อย ๆ เรียนรู้ขั้นตอนปลอดภัยกว่า'},
    id:{q:'Saat membeli crypto pertama kali, pendekatan paling aman adalah apa?',opts:['Langsung memasukkan dana besar','Mulai kecil sambil belajar alurnya','Cek jaringan nanti saja'],correct:1,fb:'Benar! Cara paling aman untuk pemula adalah mulai kecil sambil memahami setiap langkah.'},
    pt:{q:'Ao comprar cripto pela primeira vez, qual é a abordagem mais segura?',opts:['Colocar um valor grande logo de início','Começar com pouco e aprender o fluxo','Deixar a checagem da rede para depois'],correct:1,fb:'Correto! Para iniciantes, o mais seguro é começar com pouco e entender o fluxo primeiro.'},
    br:{q:'Ao comprar cripto pela primeira vez, qual é a abordagem mais segura?',opts:['Colocar um valor grande logo de início','Começar com pouco e aprender o fluxo','Deixar a checagem da rede para depois'],correct:1,fb:'Correto! Para iniciantes, o mais seguro é começar com pouco e entender o fluxo primeiro.'},
    tr:{q:'İlk kez kripto alırken en güvenli yaklaşım nedir?',opts:['Hemen büyük miktar yatırmak','Küçük başlayıp süreci öğrenmek','Ağ kontrolünü sonraya bırakmak'],correct:1,fb:'Doğru! Yeni başlayanlar için en güvenli yol küçük başlayıp akışı öğrenmektir.'},
    es:{q:'Al comprar cripto por primera vez, ¿cuál es el enfoque más seguro?',opts:['Poner una cantidad grande de inmediato','Empezar con poco y aprender el proceso','Dejar la revisión de la red para después'],correct:1,fb:'Correcto! Para un principiante, lo más seguro es empezar con poco y entender el proceso.'},
    ar:{q:'عند شراء العملة الرقمية لأول مرة، ما النهج الأكثر أماناً؟',opts:['إدخال مبلغ كبير مباشرة','البدء بمبلغ صغير وتعلّم الخطوات','تأجيل فحص الشبكة إلى وقت لاحق'],correct:1,fb:'صحيح! النهج الأكثر أماناً للمبتدئ هو البدء بمبلغ صغير وفهم الخطوات أولاً.'},
    vi:{q:'Khi mua crypto lần đầu, cách tiếp cận an toàn nhất là gì?',opts:['Bỏ vào số tiền lớn ngay','Bắt đầu nhỏ và học quy trình','Để việc kiểm tra mạng lại sau'],correct:1,fb:'Đúng! Với người mới, cách an toàn nhất là bắt đầu nhỏ và hiểu rõ từng bước.'},
    ha:{q:'Lokacin sayen kudin dijital na farko, wace hanya ce mafi aminci?',opts:['Saka babban adadi nan take','Fara da kadan kana koyon tsarin','Bar duba hanyar sadarwa zuwa gaba'],correct:1,fb:'Daidai! Ga mai farawa, hanya mafi aminci ita ce fara da kadan kana fahimtar kowane mataki.'}
  };

  var lessonSixLocaleVisualPackFinal = deepClone(window.__lessonSixLocaleFixPack || {});
  var lessonSixSourcePack = deepClone(window.__lessonSixLocaleFixPack || {});
  if(typeof lessons !== 'undefined' && lessons){
    lessonSixSourcePack.en = {ui:deepClone(lessonSixUiPackFinal.en), lesson:deepClone((lessons.en && lessons.en[5]) || {})};
    lessonSixSourcePack.ko = {ui:deepClone(lessonSixUiPackFinal.ko), lesson:deepClone((lessons.ko && lessons.ko[5]) || {})};
    if(lessonSixSourcePack.pt && !lessonSixSourcePack.br){
      lessonSixSourcePack.br = deepClone(lessonSixSourcePack.pt);
    }
  }

  var lessonSixDefsLocalePatchFinal = {
    th:[
      ['แพลตฟอร์มซื้อขาย','แพลตฟอร์มสำหรับซื้อ ขาย ฝาก หรือถอนสินทรัพย์ดิจิทัล'],
      ['KYC','การยืนยันตัวตนพื้นฐานก่อนใช้งานแพลตฟอร์มได้เต็มรูปแบบ'],
      ['เงินทั่วไป','เงินที่รัฐบาลออกให้ใช้งานทั่วไป เช่น บาท ดอลลาร์ หรือยูโร'],
      ['กระเป๋าแบบดูแลกุญแจเอง','กระเป๋าที่คุณควบคุมกุญแจด้วยตัวเอง']
    ],
    id:[
      ['Platform pertukaran','Platform untuk membeli, menjual, setor, atau menarik aset digital.'],
      ['KYC','Pemeriksaan identitas dasar sebelum akses penuh.'],
      ['Uang fiat','Uang resmi seperti rupiah, dolar, atau euro.'],
      ['Dompet self-custody','Dompet yang kuncinya Anda kendalikan sendiri.']
    ],
    pt:[
      ['Corretora','Plataforma para comprar, vender, depositar ou sacar ativos digitais.'],
      ['KYC','Verificação básica de identidade antes do acesso completo.'],
      ['Moeda fiduciária','Dinheiro comum emitido por governos, como real, dólar ou euro.'],
      ['Carteira de autocustódia','Carteira em que você controla as chaves.']
    ],
    tr:[
      ['Borsa','Dijital varlık almak, satmak, yatırmak veya çekmek için kullanılan platform.'],
      ['KYC','Tam erişimden önce yapılan temel kimlik doğrulaması.'],
      ['İtibari para','TL, dolar veya euro gibi resmi para birimleri.'],
      ['Kendi saklamalı cüzdan','Anahtarlarını kendiniz kontrol ettiğiniz cüzdan.']
    ],
    es:[
      ['Plataforma de intercambio','Plataforma para comprar, vender, depositar o retirar activos digitales.'],
      ['KYC','Verificación básica de identidad antes del acceso completo.'],
      ['Dinero fiduciario','Dinero normal emitido por gobiernos, como euro, dólar o peso.'],
      ['Cartera de autocustodia','Cartera en la que tú controlas las llaves.']
    ],
    ar:[
      ['منصة تداول','منصة لشراء وبيع وإيداع وسحب الأصول الرقمية.'],
      ['KYC','تحقق أساسي من الهوية قبل استخدام المنصة بشكل كامل.'],
      ['عملة تقليدية','أموال حكومية عادية مثل العملة المحلية أو الدولار أو اليورو.'],
      ['محفظة حفظ ذاتي','محفظة تتحكم أنت بمفاتيحها بنفسك.']
    ],
    vi:[
      ['Sàn giao dịch','Nền tảng để mua, bán, nạp hoặc rút tài sản số.'],
      ['KYC','Bước xác minh danh tính cơ bản trước khi dùng đầy đủ nền tảng.'],
      ['Tiền pháp định','Tiền do chính phủ phát hành như đồng nội tệ, USD hoặc EUR.'],
      ['Ví tự lưu ký','Ví mà bạn tự kiểm soát khóa của mình.']
    ],
    ha:[
      ['Dandalin musaya','Wurin da za ka iya saya, sayarwa, ajiya ko cire kadarorin dijital.'],
      ['KYC','Tantance kai mai sauki kafin cikakken amfani da dandali.'],
      ['Kudin fiat','Kudin gwamnati na yau da kullum kamar naira, dala ko euro.'],
      ['Walat na ajiyar kai','Walat da kai da kanka ke sarrafa makullansa.']
    ]
  };
  lessonSixDefsLocalePatchFinal.br = deepClone(lessonSixDefsLocalePatchFinal.pt);

  function getLessonSixVisualDataFinal(lang){
    var normalized = lang === 'br' ? 'pt' : (lang || 'en');
    var localeEntry = lessonSixLocaleVisualPackFinal[normalized] || (normalized === 'br' ? lessonSixLocaleVisualPackFinal.pt : null) || lessonSixLocaleVisualPackFinal.en || {};
    var localeLesson = localeEntry.lesson || {};
    if(Array.isArray(localeLesson.visual) && localeLesson.visual.length){
      return deepClone(localeLesson.visual);
    }
    var sourceEntry = lessonSixSourcePack[normalized] || lessonSixSourcePack.en || {};
    var sourceLesson = sourceEntry.lesson || {};
    if(Array.isArray(sourceLesson.visual) && sourceLesson.visual.length){
      return deepClone(sourceLesson.visual);
    }
    var fallbackLesson = (typeof lessons !== 'undefined' && lessons && lessons[normalized] && lessons[normalized][5]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[5]) || {};
    return deepClone(Array.isArray(fallbackLesson.visual) ? fallbackLesson.visual : []);
  }

  function getLessonSixDefsDataFinal(lang){
    var normalized = lang === 'br' ? 'pt' : (lang || 'en');
    if(Array.isArray(lessonSixDefsLocalePatchFinal[normalized]) && lessonSixDefsLocalePatchFinal[normalized].length){
      return deepClone(lessonSixDefsLocalePatchFinal[normalized]);
    }
    var localeEntry = lessonSixLocaleVisualPackFinal[normalized] || (normalized === 'br' ? lessonSixLocaleVisualPackFinal.pt : null) || lessonSixLocaleVisualPackFinal.en || {};
    var localeLesson = localeEntry.lesson || {};
    if(Array.isArray(localeLesson.defs) && localeLesson.defs.length){
      return deepClone(localeLesson.defs);
    }
    var sourceEntry = lessonSixSourcePack[normalized] || lessonSixSourcePack.en || {};
    var sourceLesson = sourceEntry.lesson || {};
    if(Array.isArray(sourceLesson.defs) && sourceLesson.defs.length){
      return deepClone(sourceLesson.defs);
    }
    var fallbackLesson = (typeof lessons !== 'undefined' && lessons && lessons[normalized] && lessons[normalized][5]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[5]) || {};
    return deepClone(Array.isArray(fallbackLesson.defs) ? fallbackLesson.defs : []);
  }

  function buildLessonSixDefsMarkupFinal(defs){
    var rows = Array.isArray(defs) ? defs : [];
    return '<div class="def-grid">' + rows.map(function(row){
      var term = Array.isArray(row) ? row[0] : '';
      var body = Array.isArray(row) ? row[1] : '';
      return '<div class="def-block"><div class="def-term">' + String(term || '') + '</div><div class="def-body">' + String(body || '') + '</div></div>';
    }).join('') + '</div>';
  }

  function renderLessonSixUnderstandingBlockFinal(lang){
    var item = deepClone(lessonSixUnderstandingPackFinal[lang] || lessonSixUnderstandingPackFinal.en);
    if(!item) return '';
    var title = lessonSixUnderstandingTitlePackFinal[lang] || lessonSixUnderstandingTitlePackFinal.en || 'Test Your Understanding';
    var uid = 'lesson6_eq_' + String(lang || 'en') + '_' + Math.random().toString(36).slice(2,7);
    var optionsHtml = (item.opts || []).map(function(opt, oi){
      var safeOpt = String(opt == null ? '' : opt);
      return '<div class="quiz-e-opt" data-correct="' + (oi === item.correct ? '1' : '0') + '" onclick="handleQuizClick(this,\'' + uid + '\',' + Number(item.correct || 0) + ',\'' + uid + '_fb\')"><div class="quiz-e-dot"></div><span>' + safeOpt + '</span></div>';
    }).join('');
    return '<div class="quiz-enhanced"><div class="quiz-e-title">' + title + '</div><div class="quiz-e-question">' + String(item.q || '') + '</div><div class="quiz-e-options" id="' + uid + '">' + optionsHtml + '</div><div class="quiz-e-feedback" id="' + uid + '_fb">' + String(item.fb || '') + '</div></div>';
  }

  if(typeof ui !== 'undefined'){
    Object.keys(lessonSixUiPackFinal).forEach(function(lang){
      if(!ui[lang]) ui[lang] = {};
      Object.assign(ui[lang], lessonSixUiPackFinal[lang]);
    });
  }

  if(typeof lessons !== 'undefined' && lessons){
    Object.keys(lessonSixUiPackFinal).forEach(function(lang){
      if(!lessons[lang]) lessons[lang] = (lang === 'br' && lessons.pt) ? deepClone(lessons.pt) : deepClone(lessons.en);
      var sourceEntry = lessonSixSourcePack[lang] || (lang === 'br' ? lessonSixSourcePack.pt : null) || {};
      var localizedLesson = deepClone(sourceEntry.lesson || {});
      var currentLessonData = deepClone((lessons[lang] && lessons[lang][5]) || (lessons.en && lessons.en[5]) || {});
      var mergedLesson = Object.assign({}, currentLessonData, localizedLesson);
      mergedLesson.defs = getLessonSixDefsDataFinal(lang);
      mergedLesson.checkpoints = deepClone(localizedLesson.checkpoints || currentLessonData.checkpoints || []);
      mergedLesson.quiz = deepClone(lessonSixMiniQuizPackFinal[lang] || lessonSixMiniQuizPackFinal.en);
      mergedLesson.visual = getLessonSixVisualDataFinal(lang);
      lessons[lang][5] = mergedLesson;
    });
  }

  function ensureHausaLessonSixBodyFinal(){
    if(typeof lessons === 'undefined' || !lessons) return;
    var haSourceEntry = (lessonSixSourcePack && lessonSixSourcePack.ha) || (window.__lessonSixLocaleFixPack && window.__lessonSixLocaleFixPack.ha) || null;
    var haSourceLesson = deepClone(haSourceEntry && haSourceEntry.lesson ? haSourceEntry.lesson : {});
    if(!haSourceLesson || !Object.keys(haSourceLesson).length) return;
    if(!lessons.ha) lessons.ha = deepClone(lessons.en || []);
    var baseLesson = deepClone((lessons.en && lessons.en[5]) || {});
    var haLesson = Object.assign({}, baseLesson, haSourceLesson);
    haLesson.defs = getLessonSixDefsDataFinal('ha');
    haLesson.checkpoints = deepClone(haSourceLesson.checkpoints || haLesson.checkpoints || []);
    haLesson.quiz = deepClone(lessonSixMiniQuizPackFinal.ha || haLesson.quiz || []);
    haLesson.visual = getLessonSixVisualDataFinal('ha');
    lessons.ha[5] = haLesson;
    if(typeof lessonOverrides !== 'undefined' && lessonOverrides){
      if(!lessonOverrides.ha) lessonOverrides.ha = deepClone(lessonOverrides.en || []);
      lessonOverrides.ha[5] = deepClone(haLesson);
    }
  }

  ensureHausaLessonSixBodyFinal();

  ensureLessonSixVisualStyleFinal();

  var previousRenderLessonUltimate = window.renderLesson;
  if(typeof previousRenderLessonUltimate === 'function' && !previousRenderLessonUltimate.__lessonSixUltimateWrapped){
    var wrappedRenderLessonUltimate = function(i){
      var html = previousRenderLessonUltimate.apply(this, arguments);
      if(i !== 5 || typeof html !== 'string') return html || '';
      return html.replace(/<ul class="steps-list">[\s\S]*?Choose carefully[\s\S]*?<\/ul>/, '');
    };
    wrappedRenderLessonUltimate.__lessonSixUltimateWrapped = true;
    window.renderLesson = wrappedRenderLessonUltimate;
  }

  var previousRenderLessonSixUnderstanding = window.renderLesson;
  if(typeof previousRenderLessonSixUnderstanding === 'function' && !previousRenderLessonSixUnderstanding.__lessonSixUnderstandingWrapped){
    var wrappedRenderLessonSixUnderstanding = function(i){
      var html = previousRenderLessonSixUnderstanding.apply(this, arguments);
      if(i !== 5 || typeof html !== 'string') return html || '';
      var temp = document.createElement('div');
      temp.innerHTML = html;
      temp.querySelectorAll('.quiz-enhanced').forEach(function(node){ node.remove(); });
      var lang = lessonSixLangFinal();
      var understandingHtml = renderLessonSixUnderstandingBlockFinal(lang);
      if(!understandingHtml) return html;
      var completeRow = temp.querySelector('.complete-row');
      if(completeRow){
        var mount = document.createElement('div');
        mount.innerHTML = understandingHtml;
        if(mount.firstElementChild){
          completeRow.parentNode.insertBefore(mount.firstElementChild, completeRow);
        }
      }
      return temp.innerHTML;
    };
    wrappedRenderLessonSixUnderstanding.__lessonSixUnderstandingWrapped = true;
    window.renderLesson = wrappedRenderLessonSixUnderstanding;
  }

  var previousVisualForLessonUltimate = window.visualForLesson;
  if(typeof previousVisualForLessonUltimate === 'function' && !previousVisualForLessonUltimate.__lessonSixUltimateWrapped){
    var wrappedVisualForLessonUltimate = function(i){
      if(i !== 5) return previousVisualForLessonUltimate.apply(this, arguments);
      var lang = lessonSixLangFinal();
      var lesson = deepClone((typeof lessons !== 'undefined' && lessons && lessons[lang] && lessons[lang][5]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[5]) || {});
      lesson.visual = getLessonSixVisualDataFinal(lang);
      return buildLessonSixVisualMarkupFinal(lesson);
    };
    wrappedVisualForLessonUltimate.__lessonSixUltimateWrapped = true;
    window.visualForLesson = wrappedVisualForLessonUltimate;
  }

  function renderLessonSixLocalizedHtmlFinal(html){
    if(typeof html !== 'string') return html || '';
    var temp = document.createElement('div');
    temp.innerHTML = html;
    var lang = lessonSixLangFinal();
    var lesson = deepClone((typeof lessons !== 'undefined' && lessons && lessons[lang] && lessons[lang][5]) || (typeof lessons !== 'undefined' && lessons && lessons.en && lessons.en[5]) || {});
    lesson.defs = getLessonSixDefsDataFinal(lang);
    lesson.visual = getLessonSixVisualDataFinal(lang);

    temp.querySelectorAll('ul.steps-list').forEach(function(list){
      if(!list.closest('.visual')){
        list.remove();
      }
    });

    var lessonBody = temp.querySelector('.lesson-body');
    var visualMount = lessonBody ? lessonBody.querySelector('.visual') : null;
    var visualHost = document.createElement('div');
    visualHost.innerHTML = buildLessonSixVisualMarkupFinal(lesson);
    var nextVisual = visualHost.firstElementChild;
    if(lessonBody && nextVisual){
      if(visualMount){
        visualMount.replaceWith(nextVisual);
      }else{
        lessonBody.insertBefore(nextVisual, lessonBody.firstChild);
      }
    }

    var defsMount = temp.querySelector('.def-grid');
    if(Array.isArray(lesson.defs) && lesson.defs.length){
      var defsHost = document.createElement('div');
      defsHost.innerHTML = buildLessonSixDefsMarkupFinal(lesson.defs);
      if(defsHost.firstElementChild){
        if(defsMount){
          defsMount.replaceWith(defsHost.firstElementChild);
        }
      }
    }
    return temp.innerHTML;
  }

  var previousRenderLessonVisualLockFinal = window.renderLesson;
  if(typeof previousRenderLessonVisualLockFinal === 'function' && !previousRenderLessonVisualLockFinal.__lessonSixVisualLockFinal){
    var wrappedRenderLessonVisualLockFinal = function(i){
      var html = previousRenderLessonVisualLockFinal.apply(this, arguments);
      if(i !== 5) return html || '';
      return renderLessonSixLocalizedHtmlFinal(html);
    };
    wrappedRenderLessonVisualLockFinal.__lessonSixVisualLockFinal = true;
    window.renderLesson = wrappedRenderLessonVisualLockFinal;
  }

  if(typeof renderAllLessons === 'function') renderAllLessons();
  if(typeof applyUI === 'function') applyUI();
  if(typeof currentPage !== 'undefined' && /^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
    showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
  }
})();