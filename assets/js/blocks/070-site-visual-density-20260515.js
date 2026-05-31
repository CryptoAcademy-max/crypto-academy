(function(){
  if(typeof window === 'undefined' || window.__siteVisualDensity20260515) return;
  window.__siteVisualDensity20260515 = true;

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function langKey(){
    var raw = typeof currentLang === 'string' ? currentLang : ((document.documentElement && document.documentElement.lang) || 'en');
    raw = String(raw || 'en').toLowerCase();
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw === 'br' || raw.indexOf('pt-br') === 0) return 'br';
    if(raw.indexOf('pt') === 0) return 'pt';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  var COPY = {
    en:{
      visual:'Visual guide', compare:'Compare', flow:'Flow', mock:'Mock UI', warning:'Warning', checklist:'Checklist', verify:'Verify',
      homeTitle:'See the core habits at a glance', homeDesc:'Small visual cards turn the long lessons into quick checks before you act.',
      buyTitle:'First-buy screen', buyDesc:'Check amount, fee, network, and storage plan.', amount:'Amount', fee:'Fee', network:'Network', plan:'Storage plan',
      scamTitle:'Fake-site warning', scamDesc:'Compare the domain and request before you connect or log in.', real:'Verified source', fake:'Suspicious copy',
      transferTitle:'Before sending', transferDesc:'Address, network, small test, final review.',
      practicalTitle:'Practical track', practicalDesc:'Use, compare, judge, and verify after the beginner path.',
      lesson6Top:'First purchase mock panel', lesson6TopDesc:'A short training screen for the checks before buying.',
      lesson6Lower:'Final transfer check', lesson6LowerDesc:'Check asset, network, address, then test amount.',
      lesson7Top:'Scam spotting mock panel', lesson7TopDesc:'Look for the request, the domain, and the pressure tactic before acting.',
      lesson7Lower:'Stop before entering secrets', lesson7LowerDesc:'Seed phrase, private key, and unknown approvals should trigger a stop.',
      lesson8Extra:'Custody decision reference', lesson8ExtraDesc:'Split assets by purpose instead of choosing one place for everything.',
      lesson9Top:'Network selection mock panel', lesson9TopDesc:'Same asset, different network, different fee and risk.',
      lesson9Lower:'Transfer network checklist', lesson9LowerDesc:'Match asset, chain, destination, memo, and test amount.',
      lesson10Top:'Stablecoin comparison board', lesson10TopDesc:'Similar price does not mean identical structure or risk.',
      lesson10Lower:'Stablecoin risk memo', lesson10LowerDesc:'Check issuer, reserves, chain, liquidity, and redemption risk.',
      safetyTitle:'Safety visual quick map', safetyDesc:'Three scenes to review before you trust a link, enter a secret, or send funds.',
      checklistNote:'Use the visual first, then read the detail below.'
    },
    ko:{
      visual:'시각 가이드', compare:'비교', flow:'흐름', mock:'모의 화면', warning:'주의', checklist:'체크리스트', verify:'검증',
      homeTitle:'핵심 습관을 한눈에 보기', homeDesc:'긴 설명 전에 먼저 봐야 할 확인 지점을 작은 시각 카드로 정리했습니다.',
      buyTitle:'첫 구매 화면', buyDesc:'금액, 수수료, 네트워크, 보관 계획을 확인합니다.', amount:'금액', fee:'수수료', network:'네트워크', plan:'보관 계획',
      scamTitle:'가짜 사이트 경고', scamDesc:'연결하거나 로그인하기 전에 도메인과 요구 내용을 비교합니다.', real:'확인된 출처', fake:'의심 링크',
      transferTitle:'전송 전 확인', transferDesc:'주소, 네트워크, 소액 테스트, 최종 확인.',
      practicalTitle:'실전 코스', practicalDesc:'입문 이후에는 사용, 비교, 판단, 검증으로 이어집니다.',
      lesson6Top:'첫 구매 모의 패널', lesson6TopDesc:'구매 전 확인할 항목만 짧게 보여줍니다.',
      lesson6Lower:'전송 전 최종 체크', lesson6LowerDesc:'자산, 네트워크, 주소, 소액 순서로 봅니다.',
      lesson7Top:'사기 판별 모의 패널', lesson7TopDesc:'행동하기 전에 요구 내용, 도메인, 압박 문구를 먼저 봅니다.',
      lesson7Lower:'비밀 입력 전 멈춤', lesson7LowerDesc:'시드 문구, 개인 키, 알 수 없는 승인은 즉시 멈춤 신호입니다.',
      lesson8Extra:'보관 판단 참고 카드', lesson8ExtraDesc:'모든 자산을 한 곳에 두기보다 목적별로 나눕니다.',
      lesson9Top:'네트워크 선택 모의 패널', lesson9TopDesc:'같은 자산도 네트워크가 다르면 수수료와 위험이 달라집니다.',
      lesson9Lower:'전송 네트워크 체크', lesson9LowerDesc:'자산, 체인, 목적지, 메모, 테스트 금액을 맞춥니다.',
      lesson10Top:'스테이블코인 비교 보드', lesson10TopDesc:'가격이 비슷해 보여도 구조와 위험은 다를 수 있습니다.',
      lesson10Lower:'스테이블코인 위험 메모', lesson10LowerDesc:'발행 주체, 준비금, 체인, 유동성, 상환 위험을 봅니다.',
      safetyTitle:'보안 시각 빠른 지도', safetyDesc:'링크를 믿거나 비밀을 입력하거나 전송하기 전에 세 장면을 먼저 확인합니다.',
      checklistNote:'먼저 시각 카드로 흐름을 보고, 아래 세부 항목을 확인하세요.'
    }
  };

  var LABELS = {
    th:{visual:'ภาพช่วยจำ',compare:'เปรียบเทียบ',flow:'ลำดับ',mock:'หน้าจอจำลอง',warning:'คำเตือน',checklist:'เช็กลิสต์',verify:'ตรวจสอบ'},
    id:{visual:'Panduan visual',compare:'Bandingkan',flow:'Alur',mock:'UI simulasi',warning:'Peringatan',checklist:'Checklist',verify:'Verifikasi'},
    pt:{visual:'Guia visual',compare:'Comparar',flow:'Fluxo',mock:'UI simulado',warning:'Atenção',checklist:'Checklist',verify:'Verificar'},
    br:{visual:'Guia visual',compare:'Comparar',flow:'Fluxo',mock:'UI simulado',warning:'Atenção',checklist:'Checklist',verify:'Verificar'},
    tr:{visual:'Görsel rehber',compare:'Karşılaştır',flow:'Akış',mock:'Örnek arayüz',warning:'Uyarı',checklist:'Kontrol listesi',verify:'Doğrula'},
    es:{visual:'Guía visual',compare:'Comparar',flow:'Flujo',mock:'UI simulado',warning:'Advertencia',checklist:'Checklist',verify:'Verificar'},
    ar:{visual:'دليل مرئي',compare:'مقارنة',flow:'تدفق',mock:'واجهة تدريبية',warning:'تحذير',checklist:'قائمة تحقق',verify:'تحقق'},
    vi:{visual:'Hướng dẫn hình ảnh',compare:'So sánh',flow:'Luồng',mock:'UI mô phỏng',warning:'Cảnh báo',checklist:'Checklist',verify:'Xác minh'},
    ha:{visual:'Jagorar hoto',compare:'Kwatanta',flow:'Tsari',mock:'UI na gwaji',warning:'Gargadi',checklist:'Checklist',verify:'Tabbatar'}
  };

  var VISUAL_TEXT = {
    en:{
      visual:'Visual guide', compare:'Compare', flow:'Flow', mock:'Mock UI', warning:'Warning', checklist:'Checklist', verify:'Verify',
      buyTitle:'First-buy screen', buyDesc:'Check amount, fee, network, and storage plan.', amount:'Amount', fee:'Fee', network:'Network', plan:'Storage plan',
      real:'Verified source', fake:'Suspicious copy', url:'URL', checkFirst:'Check first', startSmall:'Start small', savedBookmark:'Saved bookmark', connectWalletNow:'Connect wallet now',
      lesson6Top:'First purchase mock panel', lesson6TopDesc:'A short training screen for the checks before buying.', checklistNote:'Use the visual first, then read the detail below.',
      lesson6Lower:'Final transfer check', lesson6LowerDesc:'Check asset, network, address, then test amount.', transferItems:['Confirm asset','Check network','Check address','Small test','Final review'],
      lesson7Top:'Scam spotting mock panel', lesson7TopDesc:'Look for the request, the domain, and the pressure tactic before acting.',
      lesson7Lower:'Stop before entering secrets', lesson7LowerDesc:'Seed phrase, private key, and unknown approvals should trigger a stop.', secretItems:['Seed phrase request','Private key request','Unknown approval','Support DM link']
    },
    ko:{
      visual:'시각 가이드', compare:'비교', flow:'흐름', mock:'모의 UI', warning:'주의', checklist:'체크리스트', verify:'검증',
      buyTitle:'첫 구매 화면', buyDesc:'금액, 수수료, 네트워크, 보관 계획을 확인하세요.', amount:'금액', fee:'수수료', network:'네트워크', plan:'보관 계획',
      real:'확인된 출처', fake:'의심스러운 사본', url:'웹 주소', checkFirst:'먼저 확인', startSmall:'소액부터', savedBookmark:'저장한 북마크', connectWalletNow:'지금 지갑 연결',
      lesson6Top:'첫 구매 모의 패널', lesson6TopDesc:'구매 전 확인을 위한 짧은 연습 화면입니다.', checklistNote:'먼저 시각 자료를 보고 아래 설명을 읽어보세요.',
      lesson6Lower:'전송 전 최종 확인', lesson6LowerDesc:'자산, 네트워크, 주소를 확인한 뒤 소액으로 테스트하세요.', transferItems:['자산 확인','네트워크 확인','주소 확인','소액 테스트','최종 확인'],
      lesson7Top:'사기 식별 모의 패널', lesson7TopDesc:'행동하기 전 요청, 도메인, 압박 문구를 확인하세요.',
      lesson7Lower:'비밀 정보 입력 전 멈춤', lesson7LowerDesc:'시드 문구, 개인 키, 알 수 없는 승인은 즉시 멈춤 신호입니다.', secretItems:['시드 문구 요청','개인 키 요청','알 수 없는 승인','지원 DM 링크']
    },
    th:{
      visual:'คู่มือภาพ', compare:'เปรียบเทียบ', flow:'ลำดับขั้น', mock:'หน้าจอจำลอง', warning:'คำเตือน', checklist:'เช็กลิสต์', verify:'ตรวจสอบ',
      buyTitle:'หน้าซื้อครั้งแรก', buyDesc:'ตรวจจำนวนเงิน ค่าธรรมเนียม เครือข่าย และแผนเก็บรักษา', amount:'จำนวนเงิน', fee:'ค่าธรรมเนียม', network:'เครือข่าย', plan:'แผนเก็บรักษา',
      real:'แหล่งที่ตรวจสอบแล้ว', fake:'สำเนาน่าสงสัย', url:'ที่อยู่เว็บ', checkFirst:'ตรวจสอบก่อน', startSmall:'เริ่มด้วยยอดเล็ก', savedBookmark:'บุ๊กมาร์กที่บันทึกไว้', connectWalletNow:'เชื่อมต่อวอลเล็ตทันที',
      lesson6Top:'แผงจำลองการซื้อครั้งแรก', lesson6TopDesc:'หน้าฝึกสั้น ๆ สำหรับเช็กก่อนซื้อ', checklistNote:'ดูภาพก่อน แล้วค่อยอ่านรายละเอียดด้านล่าง',
      lesson6Lower:'ตรวจขั้นสุดท้ายก่อนส่ง', lesson6LowerDesc:'ตรวจสินทรัพย์ เครือข่าย ที่อยู่ แล้วทดสอบยอดเล็ก', transferItems:['ยืนยันสินทรัพย์','ตรวจเครือข่าย','ตรวจที่อยู่','ทดสอบยอดเล็ก','ทบทวนสุดท้าย'],
      lesson7Top:'แผงจำลองการจับสัญญาณหลอกลวง', lesson7TopDesc:'ดูคำขอ โดเมน และแรงกดดันก่อนลงมือ',
      lesson7Lower:'หยุดก่อนกรอกข้อมูลลับ', lesson7LowerDesc:'วลีกู้คืน คีย์ส่วนตัว และการอนุมัติที่ไม่รู้จักคือสัญญาณให้หยุด', secretItems:['ขอวลีกู้คืน','ขอคีย์ส่วนตัว','การอนุมัติที่ไม่รู้จัก','ลิงก์ DM ฝ่ายช่วยเหลือ']
    },
    id:{
      visual:'Panduan visual', compare:'Bandingkan', flow:'Alur', mock:'UI simulasi', warning:'Peringatan', checklist:'Daftar cek', verify:'Verifikasi',
      buyTitle:'Layar beli pertama', buyDesc:'Cek jumlah, biaya, jaringan, dan rencana penyimpanan.', amount:'Jumlah', fee:'Biaya', network:'Jaringan', plan:'Rencana simpan',
      real:'Sumber terverifikasi', fake:'Salinan mencurigakan', url:'Alamat web', checkFirst:'Cek dulu', startSmall:'Mulai kecil', savedBookmark:'Bookmark tersimpan', connectWalletNow:'Hubungkan dompet sekarang',
      lesson6Top:'Panel simulasi pembelian pertama', lesson6TopDesc:'Layar latihan singkat untuk cek sebelum membeli.', checklistNote:'Lihat visual dulu, lalu baca detail di bawah.',
      lesson6Lower:'Cek akhir sebelum transfer', lesson6LowerDesc:'Cek aset, jaringan, alamat, lalu uji jumlah kecil.', transferItems:['Pastikan aset','Cek jaringan','Cek alamat','Tes kecil','Tinjau akhir'],
      lesson7Top:'Panel simulasi deteksi penipuan', lesson7TopDesc:'Periksa permintaan, domain, dan tekanan sebelum bertindak.',
      lesson7Lower:'Berhenti sebelum memasukkan rahasia', lesson7LowerDesc:'Frasa pemulihan, kunci privat, dan persetujuan tidak dikenal adalah tanda berhenti.', secretItems:['Permintaan frasa pemulihan','Permintaan kunci privat','Persetujuan tidak dikenal','Link dukungan DM']
    },
    pt:{
      visual:'Guia visual', compare:'Comparar', flow:'Fluxo', mock:'UI simulado', warning:'Atenção', checklist:'Lista de verificação', verify:'Verificar',
      buyTitle:'Tela da primeira compra', buyDesc:'Confira valor, taxa, rede e plano de custódia.', amount:'Valor', fee:'Taxa', network:'Rede', plan:'Plano de custódia',
      real:'Fonte verificada', fake:'Cópia suspeita', url:'Endereço web', checkFirst:'Verifique antes', startSmall:'Comece pequeno', savedBookmark:'Favorito salvo', connectWalletNow:'Conectar carteira agora',
      lesson6Top:'Painel simulado da primeira compra', lesson6TopDesc:'Tela curta de treino para checar antes de comprar.', checklistNote:'Veja o visual primeiro, depois leia os detalhes abaixo.',
      lesson6Lower:'Checagem final de envio', lesson6LowerDesc:'Confira ativo, rede, endereço e depois teste um valor pequeno.', transferItems:['Confirmar ativo','Checar rede','Checar endereço','Teste pequeno','Revisão final'],
      lesson7Top:'Painel simulado para identificar golpes', lesson7TopDesc:'Observe a solicitação, o domínio e a pressão antes de agir.',
      lesson7Lower:'Pare antes de inserir segredos', lesson7LowerDesc:'Frase de recuperação, chave privada e aprovações desconhecidas são sinal de parada.', secretItems:['Pedido de frase de recuperação','Pedido de chave privada','Aprovação desconhecida','Link de suporte por DM']
    },
    br:{
      visual:'Guia visual', compare:'Comparar', flow:'Fluxo', mock:'UI simulado', warning:'Atenção', checklist:'Lista de verificação', verify:'Verificar',
      buyTitle:'Tela da primeira compra', buyDesc:'Confira valor, taxa, rede e plano de custódia.', amount:'Valor', fee:'Taxa', network:'Rede', plan:'Plano de custódia',
      real:'Fonte verificada', fake:'Cópia suspeita', url:'Endereço web', checkFirst:'Verifique antes', startSmall:'Comece pequeno', savedBookmark:'Favorito salvo', connectWalletNow:'Conectar carteira agora',
      lesson6Top:'Painel simulado da primeira compra', lesson6TopDesc:'Tela curta de treino para checar antes de comprar.', checklistNote:'Veja o visual primeiro, depois leia os detalhes abaixo.',
      lesson6Lower:'Checagem final de envio', lesson6LowerDesc:'Confira ativo, rede, endereço e depois teste um valor pequeno.', transferItems:['Confirmar ativo','Checar rede','Checar endereço','Teste pequeno','Revisão final'],
      lesson7Top:'Painel simulado para identificar golpes', lesson7TopDesc:'Observe a solicitação, o domínio e a pressão antes de agir.',
      lesson7Lower:'Pare antes de inserir segredos', lesson7LowerDesc:'Frase de recuperação, chave privada e aprovações desconhecidas são sinal de parada.', secretItems:['Pedido de frase de recuperação','Pedido de chave privada','Aprovação desconhecida','Link de suporte por DM']
    },
    tr:{
      visual:'Görsel rehber', compare:'Karşılaştır', flow:'Akış', mock:'Örnek arayüz', warning:'Uyarı', checklist:'Kontrol listesi', verify:'Doğrula',
      buyTitle:'İlk alım ekranı', buyDesc:'Tutarı, ücreti, ağı ve saklama planını kontrol et.', amount:'Tutar', fee:'Ücret', network:'Ağ', plan:'Saklama planı',
      real:'Doğrulanmış kaynak', fake:'Şüpheli kopya', url:'Web adresi', checkFirst:'Önce kontrol et', startSmall:'Küçük başla', savedBookmark:'Kayıtlı yer imi', connectWalletNow:'Cüzdanı şimdi bağla',
      lesson6Top:'İlk alım örnek paneli', lesson6TopDesc:'Satın almadan önce kontroller için kısa eğitim ekranı.', checklistNote:'Önce görseli kullan, sonra aşağıdaki ayrıntıyı oku.',
      lesson6Lower:'Son transfer kontrolü', lesson6LowerDesc:'Varlık, ağ ve adresi kontrol et; sonra küçük tutar dene.', transferItems:['Varlığı doğrula','Ağı kontrol et','Adresi kontrol et','Küçük test','Son gözden geçirme'],
      lesson7Top:'Dolandırıcılık tespit örnek paneli', lesson7TopDesc:'Harekete geçmeden önce isteği, domaini ve baskıyı kontrol et.',
      lesson7Lower:'Gizli bilgi girmeden önce dur', lesson7LowerDesc:'Kurtarma ifadesi, özel anahtar ve bilinmeyen onaylar durma sebebidir.', secretItems:['Kurtarma ifadesi isteği','Özel anahtar isteği','Bilinmeyen onay','Destek DM bağlantısı']
    },
    es:{
      visual:'Guía visual', compare:'Comparar', flow:'Flujo', mock:'UI simulado', warning:'Advertencia', checklist:'Lista de verificación', verify:'Verificar',
      buyTitle:'Pantalla de primera compra', buyDesc:'Revisa importe, comisión, red y plan de custodia.', amount:'Importe', fee:'Comisión', network:'Red', plan:'Plan de custodia',
      real:'Fuente verificada', fake:'Copia sospechosa', url:'Dirección web', checkFirst:'Revisar primero', startSmall:'Empieza pequeño', savedBookmark:'Marcador guardado', connectWalletNow:'Conectar billetera ahora',
      lesson6Top:'Panel simulado de primera compra', lesson6TopDesc:'Pantalla breve para revisar antes de comprar.', checklistNote:'Mira primero el visual y luego lee el detalle.',
      lesson6Lower:'Revisión final de envío', lesson6LowerDesc:'Revisa activo, red, dirección y luego prueba un importe pequeño.', transferItems:['Confirmar activo','Revisar red','Revisar dirección','Prueba pequeña','Revisión final'],
      lesson7Top:'Panel simulado para detectar estafas', lesson7TopDesc:'Revisa la solicitud, el dominio y la presión antes de actuar.',
      lesson7Lower:'Pausa antes de escribir secretos', lesson7LowerDesc:'Frase de recuperación, clave privada y aprobaciones desconocidas deben hacerte parar.', secretItems:['Solicitud de frase de recuperación','Solicitud de clave privada','Aprobación desconocida','Link de soporte por DM']
    },
    ar:{
      visual:'دليل بصري', compare:'مقارنة', flow:'تدفق', mock:'واجهة تدريبية', warning:'تحذير', checklist:'قائمة فحص', verify:'تحقق',
      buyTitle:'شاشة الشراء الأول', buyDesc:'تحقق من المبلغ والرسوم والشبكة وخطة الحفظ.', amount:'المبلغ', fee:'الرسوم', network:'الشبكة', plan:'خطة الحفظ',
      real:'مصدر موثوق', fake:'نسخة مشبوهة', url:'الرابط', checkFirst:'تحقق أولاً', startSmall:'ابدأ بمبلغ صغير', savedBookmark:'إشارة محفوظة', connectWalletNow:'اربط المحفظة الآن',
      lesson6Top:'لوحة محاكاة للشراء الأول', lesson6TopDesc:'شاشة تدريب قصيرة للفحص قبل الشراء.', checklistNote:'شاهد الصورة أولاً ثم اقرأ التفاصيل أدناه.',
      lesson6Lower:'فحص أخير قبل الإرسال', lesson6LowerDesc:'تحقق من الأصل والشبكة والعنوان ثم اختبر مبلغاً صغيراً.', transferItems:['تأكيد الأصل','فحص الشبكة','فحص العنوان','اختبار صغير','مراجعة أخيرة'],
      lesson7Top:'لوحة محاكاة لاكتشاف الاحتيال', lesson7TopDesc:'افحص الطلب والنطاق والضغط قبل التصرف.',
      lesson7Lower:'توقف قبل إدخال الأسرار', lesson7LowerDesc:'عبارة الاسترداد والمفتاح الخاص والموافقات الغريبة تعني التوقف.', secretItems:['طلب عبارة الاسترداد','طلب مفتاح خاص','موافقة غير معروفة','رابط دعم عبر DM']
    },
    vi:{
      visual:'Hướng dẫn hình ảnh', compare:'So sánh', flow:'Luồng', mock:'UI mô phỏng', warning:'Cảnh báo', checklist:'Danh sách kiểm', verify:'Xác minh',
      buyTitle:'Màn hình mua đầu', buyDesc:'Kiểm tra số tiền, phí, mạng và kế hoạch lưu giữ.', amount:'Số tiền', fee:'Phí', network:'Mạng', plan:'Kế hoạch lưu giữ',
      real:'Nguồn đã xác minh', fake:'Bản sao đáng ngờ', url:'Địa chỉ web', checkFirst:'Kiểm tra trước', startSmall:'Bắt đầu nhỏ', savedBookmark:'Dấu trang đã lưu', connectWalletNow:'Kết nối ví ngay',
      lesson6Top:'Bảng mô phỏng lần mua đầu', lesson6TopDesc:'Màn hình luyện tập ngắn để kiểm tra trước khi mua.', checklistNote:'Xem hình trước, rồi đọc chi tiết bên dưới.',
      lesson6Lower:'Kiểm tra cuối trước khi gửi', lesson6LowerDesc:'Kiểm tra tài sản, mạng, địa chỉ rồi thử số tiền nhỏ.', transferItems:['Xác nhận tài sản','Kiểm tra mạng','Kiểm tra địa chỉ','Test nhỏ','Xem lại cuối'],
      lesson7Top:'Bảng mô phỏng nhận diện lừa đảo', lesson7TopDesc:'Xem yêu cầu, tên miền và áp lực trước khi hành động.',
      lesson7Lower:'Dừng trước khi nhập bí mật', lesson7LowerDesc:'Cụm từ khôi phục, khóa riêng và quyền duyệt lạ là tín hiệu phải dừng.', secretItems:['Yêu cầu cụm từ khôi phục','Yêu cầu khóa riêng','Quyền duyệt lạ','Link hỗ trợ qua DM']
    },
    ha:{
      visual:'Jagorar hoto', compare:'Kwatanta', flow:'Tsari', mock:'UI na gwaji', warning:'Gargadi', checklist:'Jerin dubawa', verify:'Tabbatar',
      buyTitle:'Allon saye na farko', buyDesc:'Duba adadi, kudin caji, hanyar sadarwa, da tsarin ajiya.', amount:'Adadi', fee:'Kudin caji', network:'Hanyar sadarwa', plan:'Tsarin ajiya',
      real:'Tushen da aka tabbatar', fake:'Kwafi mai zargi', url:'Adireshin yanar gizo', checkFirst:'Duba farko', startSmall:'Fara da kadan', savedBookmark:'Alamar da aka ajiye', connectWalletNow:'Hada walat yanzu',
      lesson6Top:'Allon gwajin saye na farko', lesson6TopDesc:'Gajeren allon horo don dubawa kafin siya.', checklistNote:'Duba hoton farko, sannan karanta bayani a kasa.',
      lesson6Lower:'Binciken karshe kafin aikawa', lesson6LowerDesc:'Duba kadara, hanya, adireshi, sannan gwada kudi kadan.', transferItems:['Tabbatar da kadara','Duba hanyar sadarwa','Duba adireshi','Gwaji kadan','Bincike na karshe'],
      lesson7Top:'Allon gwajin gano damfara', lesson7TopDesc:'Duba bukata, domain, da matsin lamba kafin aiki.',
      lesson7Lower:'Tsaya kafin shigar da sirri', lesson7LowerDesc:'Kalmomin dawo da walat, mabudin sirri, da yarda da ba ka sani ba alamar tsayawa ne.', secretItems:['Neman kalmomin dawo da walat','Neman mabudin sirri','Yarda da ba a sani ba','Link din tallafi na DM']
    }
  };

  function copy(){
    var lang = langKey();
    var base = COPY[lang] || COPY.en;
    var labels = LABELS[lang] || {};
    var visualText = VISUAL_TEXT[lang] || VISUAL_TEXT.en;
    var merged = {};
    Object.keys(COPY.en).forEach(function(key){ merged[key] = COPY.en[key]; });
    Object.keys(base).forEach(function(key){ merged[key] = base[key]; });
    Object.keys(labels).forEach(function(key){ merged[key] = labels[key]; });
    Object.keys(visualText).forEach(function(key){ merged[key] = visualText[key]; });
    return merged;
  }

  var VISUAL_EXTRA_TEXT = {
    en:{
      custodyItems:['Exchange can fit soon-to-trade assets','Wallets fit long-term custody','Recovery readiness comes first','Do not move everything at once'],
      networkCompareBeforeSend:'Compare before send',
      eta:'ETA',
      fastNotAlwaysSafer:'Fast is not always safer',
      networkChecklistItems:['Match sending and receiving asset','Match sending and receiving network','Check memo or tag requirements','Test with a small amount first'],
      stableIssuerModel:'Issuer model',
      stableCollateralModel:'Collateral model',
      stableMultipleChains:'Multiple chains',
      useCase:'Use case',
      stableExchangePayments:'Exchange / payments',
      stableRiskItems:['Issuer and reserve model','Chain being used','Available liquidity','Redemption or depeg risk']
    },
    ko:{
      custodyItems:['곧 거래할 자산은 거래소가 편할 수 있음','장기 보관은 지갑이 더 적합함','복구 준비가 먼저임','한 번에 전부 옮기지 않기'],
      networkCompareBeforeSend:'보내기 전 비교',
      eta:'예상 시간',
      fastNotAlwaysSafer:'빠른 것이 항상 안전한 것은 아님',
      networkChecklistItems:['보내는 자산과 받는 자산 일치','보내는 네트워크와 받는 네트워크 일치','메모나 태그 필요 여부 확인','처음에는 소액으로 테스트'],
      stableIssuerModel:'발행 주체 모델',
      stableCollateralModel:'담보 모델',
      stableMultipleChains:'여러 체인',
      useCase:'사용 상황',
      stableExchangePayments:'거래소 / 결제',
      stableRiskItems:['발행 주체와 준비금 구조','사용 중인 체인','거래 가능한 유동성','상환 또는 디페그 위험']
    },
    th:{
      custodyItems:['สินทรัพย์ที่จะเทรดเร็ว ๆ นี้อาจไว้ที่ exchange','การเก็บระยะยาวเหมาะกับ wallet มากกว่า','ต้องพร้อมเรื่องการกู้คืนก่อน','อย่าย้ายทั้งหมดในครั้งเดียว'],
      networkCompareBeforeSend:'เปรียบเทียบก่อนส่ง',
      eta:'เวลาประมาณ',
      fastNotAlwaysSafer:'เร็วกว่าไม่ได้ปลอดภัยกว่าเสมอ',
      networkChecklistItems:['สินทรัพย์ฝั่งส่งและรับต้องตรงกัน','เครือข่ายฝั่งส่งและรับต้องตรงกัน','ตรวจ memo หรือ tag ที่จำเป็น','ทดสอบด้วยยอดเล็กก่อน'],
      stableIssuerModel:'โมเดลผู้ออก',
      stableCollateralModel:'โมเดลหลักประกัน',
      stableMultipleChains:'หลายเชน',
      useCase:'การใช้งาน',
      stableExchangePayments:'exchange / การชำระเงิน',
      stableRiskItems:['ผู้ออกและทุนสำรอง','เชนที่ใช้อยู่','สภาพคล่องที่มี','ความเสี่ยงไถ่ถอนหรือ depeg']
    },
    id:{
      custodyItems:['Aset yang segera diperdagangkan bisa tetap di exchange','Penyimpanan jangka panjang lebih cocok di wallet','Kesiapan pemulihan harus lebih dulu','Jangan pindahkan semuanya sekaligus'],
      networkCompareBeforeSend:'Bandingkan sebelum mengirim',
      eta:'Estimasi waktu',
      fastNotAlwaysSafer:'Lebih cepat tidak selalu lebih aman',
      networkChecklistItems:['Cocokkan aset pengirim dan penerima','Cocokkan jaringan pengirim dan penerima','Cek kebutuhan memo atau tag','Uji dengan jumlah kecil dulu'],
      stableIssuerModel:'Model penerbit',
      stableCollateralModel:'Model kolateral',
      stableMultipleChains:'Beberapa chain',
      useCase:'Kegunaan',
      stableExchangePayments:'Exchange / pembayaran',
      stableRiskItems:['Model penerbit dan cadangan','Chain yang dipakai','Likuiditas tersedia','Risiko penebusan atau depeg']
    },
    pt:{
      custodyItems:['Ativos para negociar em breve podem ficar na corretora','Carteiras combinam mais com custódia longa','Prepare a recuperação primeiro','Não mova tudo de uma vez'],
      networkCompareBeforeSend:'Compare antes de enviar',
      eta:'Tempo estimado',
      fastNotAlwaysSafer:'Mais rápido nem sempre é mais seguro',
      networkChecklistItems:['Combine o ativo enviado e recebido','Combine a rede de envio e recebimento','Confira memo ou tag necessários','Teste primeiro com valor pequeno'],
      stableIssuerModel:'Modelo do emissor',
      stableCollateralModel:'Modelo de colateral',
      stableMultipleChains:'Várias chains',
      useCase:'Uso',
      stableExchangePayments:'Corretora / pagamentos',
      stableRiskItems:['Emissor e modelo de reservas','Chain em uso','Liquidez disponível','Risco de resgate ou depeg']
    },
    br:{
      custodyItems:['Ativos para negociar em breve podem ficar na corretora','Carteiras combinam mais com custódia longa','Prepare a recuperação primeiro','Não mova tudo de uma vez'],
      networkCompareBeforeSend:'Compare antes de enviar',
      eta:'Tempo estimado',
      fastNotAlwaysSafer:'Mais rápido nem sempre é mais seguro',
      networkChecklistItems:['Combine o ativo enviado e recebido','Combine a rede de envio e recebimento','Confira memo ou tag necessários','Teste primeiro com valor pequeno'],
      stableIssuerModel:'Modelo do emissor',
      stableCollateralModel:'Modelo de colateral',
      stableMultipleChains:'Várias chains',
      useCase:'Uso',
      stableExchangePayments:'Corretora / pagamentos',
      stableRiskItems:['Emissor e modelo de reservas','Chain em uso','Liquidez disponível','Risco de resgate ou depeg']
    },
    tr:{
      custodyItems:['Yakında işlem yapılacak varlık exchange üzerinde kalabilir','Uzun vadeli saklama wallet için daha uygundur','Önce kurtarma hazırlığı gerekir','Her şeyi tek seferde taşıma'],
      networkCompareBeforeSend:'Göndermeden önce karşılaştır',
      eta:'Tahmini süre',
      fastNotAlwaysSafer:'Daha hızlı olmak her zaman daha güvenli değildir',
      networkChecklistItems:['Gönderilen ve alınan varlığı eşleştir','Gönderim ve alım ağını eşleştir','Memo veya tag gerekip gerekmediğini kontrol et','Önce küçük tutarla test et'],
      stableIssuerModel:'İhraççı modeli',
      stableCollateralModel:'Teminat modeli',
      stableMultipleChains:'Birden çok chain',
      useCase:'Kullanım',
      stableExchangePayments:'Exchange / ödemeler',
      stableRiskItems:['İhraççı ve rezerv modeli','Kullanılan chain','Mevcut likidite','Geri ödeme veya depeg riski']
    },
    es:{
      custodyItems:['Los activos para operar pronto pueden quedarse en exchange','La custodia larga encaja mejor con wallet','Prepara la recuperación primero','No muevas todo de una vez'],
      networkCompareBeforeSend:'Compara antes de enviar',
      eta:'Tiempo estimado',
      fastNotAlwaysSafer:'Más rápido no siempre es más seguro',
      networkChecklistItems:['Haz coincidir activo enviado y recibido','Haz coincidir red de envío y recepción','Revisa si hace falta memo o tag','Prueba primero con un importe pequeño'],
      stableIssuerModel:'Modelo del emisor',
      stableCollateralModel:'Modelo de colateral',
      stableMultipleChains:'Varias chains',
      useCase:'Uso',
      stableExchangePayments:'Exchange / pagos',
      stableRiskItems:['Emisor y modelo de reservas','Chain en uso','Liquidez disponible','Riesgo de rescate o depeg']
    },
    ar:{
      custodyItems:['الأصول التي ستتداولها قريباً قد تبقى في المنصة','الحفظ الطويل يناسب المحفظة أكثر','جهّز الاسترداد أولاً','لا تنقل كل شيء دفعة واحدة'],
      networkCompareBeforeSend:'قارن قبل الإرسال',
      eta:'الوقت المتوقع',
      fastNotAlwaysSafer:'الأسرع ليس دائماً أكثر أماناً',
      networkChecklistItems:['طابق الأصل المرسل والمستلم','طابق شبكة الإرسال والاستقبال','تحقق من memo أو tag المطلوب','اختبر بمبلغ صغير أولاً'],
      stableIssuerModel:'نموذج الجهة المصدرة',
      stableCollateralModel:'نموذج الضمان',
      stableMultipleChains:'عدة شبكات',
      useCase:'الاستخدام',
      stableExchangePayments:'منصة / مدفوعات',
      stableRiskItems:['الجهة المصدرة ونموذج الاحتياطي','الشبكة المستخدمة','السيولة المتاحة','خطر الاسترداد أو depeg']
    },
    vi:{
      custodyItems:['Tài sản sắp giao dịch có thể để ở exchange','Lưu trữ dài hạn hợp với wallet hơn','Chuẩn bị khôi phục trước','Đừng chuyển tất cả cùng lúc'],
      networkCompareBeforeSend:'So sánh trước khi gửi',
      eta:'Thời gian dự kiến',
      fastNotAlwaysSafer:'Nhanh hơn không phải lúc nào cũng an toàn hơn',
      networkChecklistItems:['Khớp tài sản gửi và nhận','Khớp mạng gửi và nhận','Kiểm tra memo hoặc tag cần thiết','Thử trước bằng số tiền nhỏ'],
      stableIssuerModel:'Mô hình bên phát hành',
      stableCollateralModel:'Mô hình tài sản thế chấp',
      stableMultipleChains:'Nhiều chain',
      useCase:'Cách dùng',
      stableExchangePayments:'Exchange / thanh toán',
      stableRiskItems:['Bên phát hành và dự trữ','Chain đang dùng','Thanh khoản hiện có','Rủi ro đổi lại hoặc depeg']
    },
    ha:{
      custodyItems:['Kadara da za a sayar nan kusa na iya zama a exchange','Ajiya na dogon lokaci ya fi dacewa da wallet','Shirya dawo da wallet da farko','Kada ka matsar da komai lokaci guda'],
      networkCompareBeforeSend:'Kwatanta kafin aikawa',
      eta:'Lokacin da ake tsammani',
      fastNotAlwaysSafer:'Sauri ba koyaushe ya fi aminci ba',
      networkChecklistItems:['Daidaita kadarar aikawa da karba','Daidaita network na aikawa da karba','Duba bukatar memo ko tag','Gwada da kudi kadan da farko'],
      stableIssuerModel:'Tsarin mai bayarwa',
      stableCollateralModel:'Tsarin jingina',
      stableMultipleChains:'Chains da yawa',
      useCase:'Amfani',
      stableExchangePayments:'Exchange / biyan kudi',
      stableRiskItems:['Mai bayarwa da tsarin ajiyar kudi','Chain da ake amfani da shi','Liquidity da ke akwai','Hadarin fansa ko depeg']
    }
  };

  function extraText(){
    var lang = langKey();
    var base = VISUAL_EXTRA_TEXT.en;
    var picked = VISUAL_EXTRA_TEXT[lang] || base;
    var merged = {};
    Object.keys(base).forEach(function(key){ merged[key] = base[key]; });
    Object.keys(picked).forEach(function(key){ merged[key] = picked[key]; });
    return merged;
  }

  function field(label, value, tone){
    return '<div class="site-visual-field' + (tone ? ' is-' + tone : '') + '"><span>' + esc(label) + '</span><strong>' + esc(value) + '</strong></div>';
  }

  function chip(text, tone){
    return '<span class="site-visual-chip' + (tone ? ' is-' + tone : '') + '">' + esc(text) + '</span>';
  }

  function panel(opts){
    opts = opts || {};
    return ''
      + '<section class="site-visual-panel ' + esc(opts.tone || 'is-practical') + '" data-site-visual="' + esc(opts.id || '') + '">'
      +   '<div class="site-visual-head">'
      +     '<span class="site-visual-kicker">' + esc(opts.kicker || copy().visual) + '</span>'
      +     '<div><h3>' + esc(opts.title || '') + '</h3><p>' + esc(opts.desc || '') + '</p></div>'
      +   '</div>'
      +   (opts.body || '')
      +   (opts.caption ? '<p class="site-visual-caption">' + esc(opts.caption) + '</p>' : '')
      + '</section>';
  }

  function flowSteps(items){
    return '<div class="site-visual-flow">' + items.map(function(item, index){
      return '<div class="site-visual-step"><b>' + String(index + 1).padStart(2, '0') + '</b><span>' + esc(item) + '</span></div>';
    }).join('') + '</div>';
  }

  function checkList(items){
    return '<ul class="site-visual-checks">' + items.map(function(item){
      return '<li><span aria-hidden="true"></span>' + esc(item) + '</li>';
    }).join('') + '</ul>';
  }

  function mockCard(title, rows, tone){
    return '<div class="site-visual-mock-card' + (tone ? ' is-' + tone : '') + '"><div class="site-visual-mock-top"><span></span><span></span><span></span></div><strong>' + esc(title) + '</strong>' + rows.join('') + '</div>';
  }

  function renderHomeVisualStrip(){
    var c = copy();
    return ''
      + '<section class="home-visual-strip" aria-label="' + esc(c.visual) + '">'
      +   '<div class="home-visual-copy"><span>' + esc(c.visual) + '</span><strong>' + esc(c.homeTitle) + '</strong><p>' + esc(c.homeDesc) + '</p></div>'
      +   '<div class="home-visual-cards">'
      +     '<div class="home-visual-card">' + chip(c.mock) + '<strong>' + esc(c.buyTitle) + '</strong><small>' + esc(c.buyDesc) + '</small></div>'
      +     '<div class="home-visual-card is-warning">' + chip(c.warning, 'warning') + '<strong>' + esc(c.scamTitle) + '</strong><small>' + esc(c.scamDesc) + '</small></div>'
      +     '<div class="home-visual-card">' + chip(c.checklist) + '<strong>' + esc(c.transferTitle) + '</strong><small>' + esc(c.transferDesc) + '</small></div>'
      +     '<div class="home-visual-card is-deep">' + chip(c.compare) + '<strong>' + esc(c.practicalTitle) + '</strong><small>' + esc(c.practicalDesc) + '</small></div>'
      +   '</div>'
      + '</section>';
  }

  function renderPurchaseVisual(){
    var c = copy();
    var rows = [
      field(c.amount, '50 USDT', 'good'),
      field(c.fee, '0.80 USDT'),
      field(c.network, langKey() === 'ko' ? '먼저 확인' : 'Check first', 'warn'),
      field(c.plan, langKey() === 'ko' ? '소액부터' : 'Start small', 'good')
    ];
    return panel({
      id:'lesson6-purchase',
      tone:'is-mock',
      kicker:c.mock,
      title:c.lesson6Top,
      desc:c.lesson6TopDesc,
      body:'<div class="site-visual-two">' + mockCard(c.buyTitle, rows, 'primary') + '<div class="site-visual-note-stack">' + chip(c.checklist) + flowSteps([c.amount, c.fee, c.network, c.plan]) + '</div></div>',
      caption:c.checklistNote
    });
  }

  function renderTransferCheckVisual(){
    var c = copy();
    var items = langKey() === 'ko'
      ? ['자산 확인', '네트워크 확인', '주소 확인', '소액 테스트', '최종 확인']
      : ['Confirm asset', 'Check network', 'Check address', 'Small test', 'Final review'];
    return panel({ id:'lesson6-transfer-check', tone:'is-check', kicker:c.checklist, title:c.lesson6Lower, desc:c.lesson6LowerDesc, body:flowSteps(items) });
  }

  function renderScamVisual(){
    var c = copy();
    var left = mockCard(c.real, [field('URL', 'academy.example/learn', 'good'), field(c.verify, 'Saved bookmark', 'good')], 'safe');
    var right = mockCard(c.fake, [field('URL', 'acadamy-examp1e.site', 'warn'), field(c.warning, 'Connect wallet now', 'warn')], 'danger');
    return panel({ id:'lesson7-fake-site', tone:'is-warning', kicker:c.warning, title:c.lesson7Top, desc:c.lesson7TopDesc, body:'<div class="site-visual-two">' + left + right + '</div>' });
  }

  function renderSecretStopVisual(){
    var c = copy();
    var items = langKey() === 'ko'
      ? ['시드 문구 입력 요청', '개인 키 입력 요청', '알 수 없는 승인', 'DM 고객지원 링크']
      : ['Seed phrase request', 'Private key request', 'Unknown approval', 'Support DM link'];
    return panel({ id:'lesson7-secret-stop', tone:'is-warning', kicker:c.warning, title:c.lesson7Lower, desc:c.lesson7LowerDesc, body:checkList(items) });
  }

  function renderCustodyReferenceVisual(){
    var c = copy();
    var items = langKey() === 'ko'
      ? ['곧 거래할 자산은 거래소가 편할 수 있음', '장기 보관은 지갑 통제권을 고려', '복구 문구 관리 준비가 먼저', '한 번에 전부 옮기지 않기']
      : ['Exchange can fit soon-to-trade assets', 'Wallets fit long-term custody', 'Recovery readiness comes first', 'Do not move everything at once'];
    return panel({ id:'lesson8-custody-reference', tone:'is-reference', kicker:c.compare, title:c.lesson8Extra, desc:c.lesson8ExtraDesc, body:checkList(items) });
  }

  function renderNetworkVisual(){
    var c = copy();
    var rows = [
      field(c.amount, 'USDT 100'),
      field(c.network, 'ERC20 / TRC20 / BEP20 / SOL', 'warn'),
      field(c.fee, 'Compare before send'),
      field('ETA', 'Fast is not always safer')
    ];
    return panel({ id:'lesson9-network-mock', tone:'is-mock', kicker:c.mock, title:c.lesson9Top, desc:c.lesson9TopDesc, body:mockCard(c.network, rows, 'primary') });
  }

  function renderNetworkChecklistVisual(){
    var c = copy();
    var items = langKey() === 'ko'
      ? ['보내는 자산과 받는 자산 이름 일치', '보내는 네트워크와 받는 네트워크 일치', '메모/태그 필요 여부 확인', '처음에는 소액 테스트']
      : ['Match sending and receiving asset', 'Match sending and receiving network', 'Check memo or tag requirements', 'Test with a small amount first'];
    return panel({ id:'lesson9-network-check', tone:'is-check', kicker:c.checklist, title:c.lesson9Lower, desc:c.lesson9LowerDesc, body:checkList(items) });
  }

  function renderStablecoinVisual(){
    var c = copy();
    var cards = ['USDT','USDC','DAI'].map(function(name){
      var rows = [field(c.verify, name === 'DAI' ? 'Collateral model' : 'Issuer model'), field(c.network, 'Multiple chains'), field('Use case', name === 'DAI' ? 'DeFi' : 'Exchange / payments')];
      return mockCard(name, rows, name === 'DAI' ? 'secondary' : 'primary');
    }).join('');
    return panel({ id:'lesson10-stablecoin-board', tone:'is-reference', kicker:c.compare, title:c.lesson10Top, desc:c.lesson10TopDesc, body:'<div class="site-visual-three">' + cards + '</div>' });
  }

  function renderStablecoinRiskVisual(){
    var c = copy();
    var items = langKey() === 'ko'
      ? ['발행 주체와 준비금 구조', '사용 중인 체인', '거래 가능한 유동성', '상환 또는 디페그 위험']
      : ['Issuer and reserve model', 'Chain being used', 'Available liquidity', 'Redemption or depeg risk'];
    return panel({ id:'lesson10-stablecoin-risk', tone:'is-warning', kicker:c.warning, title:c.lesson10Lower, desc:c.lesson10LowerDesc, body:checkList(items) });
  }

  function renderSafetyVisualDeck(){
    var c = copy();
    return ''
      + '<section class="safety-visual-deck">'
      +   '<div class="safety-visual-head"><span>' + esc(c.visual) + '</span><strong>' + esc(c.safetyTitle) + '</strong><p>' + esc(c.safetyDesc) + '</p></div>'
      +   '<div class="safety-visual-grid">'
      +     renderScamVisual()
      +     renderSecretStopVisual()
      +     renderTransferCheckVisual()
      +   '</div>'
      + '</section>';
  }

  renderPurchaseVisual = function(){
    var c = copy();
    var rows = [
      field(c.amount, '50 USDT', 'good'),
      field(c.fee, '0.80 USDT'),
      field(c.network, c.checkFirst, 'warn'),
      field(c.plan, c.startSmall, 'good')
    ];
    return panel({
      id:'lesson6-purchase',
      tone:'is-mock',
      kicker:c.mock,
      title:c.lesson6Top,
      desc:c.lesson6TopDesc,
      body:'<div class="site-visual-two">' + mockCard(c.buyTitle, rows, 'primary') + '<div class="site-visual-note-stack">' + chip(c.checklist) + flowSteps([c.amount, c.fee, c.network, c.plan]) + '</div></div>',
      caption:c.checklistNote
    });
  };

  renderTransferCheckVisual = function(){
    var c = copy();
    var items = c.transferItems || VISUAL_TEXT.en.transferItems;
    return panel({ id:'lesson6-transfer-check', tone:'is-check', kicker:c.checklist, title:c.lesson6Lower, desc:c.lesson6LowerDesc, body:flowSteps(items) });
  };

  renderScamVisual = function(){
    var c = copy();
    var left = mockCard(c.real, [field(c.url, 'academy.example/learn', 'good'), field(c.verify, c.savedBookmark, 'good')], 'safe');
    var right = mockCard(c.fake, [field(c.url, 'acadamy-examp1e.site', 'warn'), field(c.warning, c.connectWalletNow, 'warn')], 'danger');
    return panel({ id:'lesson7-fake-site', tone:'is-warning', kicker:c.warning, title:c.lesson7Top, desc:c.lesson7TopDesc, body:'<div class="site-visual-two">' + left + right + '</div>' });
  };

  renderSecretStopVisual = function(){
    var c = copy();
    var items = c.secretItems || VISUAL_TEXT.en.secretItems;
    return panel({ id:'lesson7-secret-stop', tone:'is-warning', kicker:c.warning, title:c.lesson7Lower, desc:c.lesson7LowerDesc, body:checkList(items) });
  };

  renderCustodyReferenceVisual = function(){
    var c = copy();
    return panel({ id:'lesson8-custody-reference', tone:'is-reference', kicker:c.compare, title:c.lesson8Extra, desc:c.lesson8ExtraDesc, body:checkList(extraText().custodyItems) });
  };

  renderNetworkVisual = function(){
    var c = copy();
    var extra = extraText();
    var rows = [
      field(c.amount, 'USDT 100'),
      field(c.network, 'ERC20 / TRC20 / BEP20 / SOL', 'warn'),
      field(c.fee, extra.networkCompareBeforeSend),
      field(extra.eta, extra.fastNotAlwaysSafer)
    ];
    return panel({ id:'lesson9-network-mock', tone:'is-mock', kicker:c.mock, title:c.lesson9Top, desc:c.lesson9TopDesc, body:mockCard(c.network, rows, 'primary') });
  };

  renderNetworkChecklistVisual = function(){
    var c = copy();
    return panel({ id:'lesson9-network-check', tone:'is-check', kicker:c.checklist, title:c.lesson9Lower, desc:c.lesson9LowerDesc, body:checkList(extraText().networkChecklistItems) });
  };

  renderStablecoinVisual = function(){
    var c = copy();
    var extra = extraText();
    var cards = ['USDT','USDC','DAI'].map(function(name){
      var rows = [
        field(c.verify, name === 'DAI' ? extra.stableCollateralModel : extra.stableIssuerModel),
        field(c.network, extra.stableMultipleChains),
        field(extra.useCase, name === 'DAI' ? 'DeFi' : extra.stableExchangePayments)
      ];
      return mockCard(name, rows, name === 'DAI' ? 'secondary' : 'primary');
    }).join('');
    return panel({ id:'lesson10-stablecoin-board', tone:'is-reference', kicker:c.compare, title:c.lesson10Top, desc:c.lesson10TopDesc, body:'<div class="site-visual-three">' + cards + '</div>' });
  };

  renderStablecoinRiskVisual = function(){
    var c = copy();
    return panel({ id:'lesson10-stablecoin-risk', tone:'is-warning', kicker:c.warning, title:c.lesson10Lower, desc:c.lesson10LowerDesc, body:checkList(extraText().stableRiskItems) });
  };

  window.debugRemainingVisualEnglish = function(){
    var lang = langKey();
    var targets = [
      /FIRST PURCHASE/i, /First purchase/i, /First-buy/i, /A short training/i, /Check first/i,
      /Use the visual first/i, /SCAM SPOTTING/i, /Scam spotting/i, /Verified source/i,
      /Suspicious copy/i, /Saved bookmark/i, /Connect wallet now/i, /Pause first/i,
      /Check the offer/i, /Check the domain/i, /Check the wallet request/i, /Open the official source/i
    ];
    var found = [];
    if(lang !== 'en' && typeof document !== 'undefined'){
      var nodes = document.querySelectorAll('[data-site-visual], .lesson-guide-step-card, .lesson-guide-panel');
      Array.prototype.forEach.call(nodes, function(node){
        var text = (node.textContent || '').replace(/\s+/g, ' ').trim();
        if(text && targets.some(function(pattern){ return pattern.test(text); })){
          found.push({ selector: node.getAttribute('data-site-visual') || node.className || node.tagName, text: text, sourceHint: '070-site-visual-density-20260515.js' });
        }
      });
    }
    return { currentLocale: lang, suspectedEnglishText: found };
  };

  function wrapVisualForLesson(){
    var previous = window.visualForLesson || (typeof visualForLesson === 'function' ? visualForLesson : null);
    if(typeof previous !== 'function' || previous.__siteVisualDensityWrapped) return;
    function wrapped(i){
      var html = previous.apply(this, arguments);
      if(typeof html !== 'string') html = html || '';
      if(i === 5) return html + renderPurchaseVisual();
      if(i === 6) return html + renderScamVisual();
      if(i === 7) return html + renderCustodyReferenceVisual();
      if(i === 8) return html + renderNetworkVisual();
      if(i === 9) return html + renderStablecoinVisual();
      return html;
    }
    wrapped.__siteVisualDensityWrapped = true;
    window.visualForLesson = wrapped;
    try{ visualForLesson = wrapped; }catch(err){}
  }

  function wrapGuidedLower(){
    var previous = window.renderLessonGuidedVisualsLower || (typeof renderLessonGuidedVisualsLower === 'function' ? renderLessonGuidedVisualsLower : null);
    if(typeof previous !== 'function' || previous.__siteVisualDensityWrapped) return;
    function wrapped(i, lesson){
      var html = previous.apply(this, arguments);
      if(typeof html !== 'string') html = html || '';
      if(i === 5) return html + renderTransferCheckVisual();
      if(i === 6) return html + renderSecretStopVisual();
      if(i === 8) return html + renderNetworkChecklistVisual();
      if(i === 9) return html + renderStablecoinRiskVisual();
      return html;
    }
    wrapped.__siteVisualDensityWrapped = true;
    window.renderLessonGuidedVisualsLower = wrapped;
    try{ renderLessonGuidedVisualsLower = wrapped; }catch(err){}
  }

  function wrapHome(){
    var previous = window.renderHome || (typeof renderHome === 'function' ? renderHome : null);
    if(typeof previous !== 'function' || previous.__siteVisualDensityWrapped) return;
    function wrapped(){
      var html = previous.apply(this, arguments);
      if(typeof html !== 'string' || html.indexOf('home-visual-strip') !== -1) return html;
      return html.replace(/(<p class="home-desc">[\s\S]*?<\/p>)/, '$1' + renderHomeVisualStrip());
    }
    wrapped.__siteVisualDensityWrapped = true;
    window.renderHome = wrapped;
    try{ renderHome = wrapped; }catch(err){}
  }

  function wrapSafety(){
    var previous = window.renderSafetyPage || (typeof renderSafetyPage === 'function' ? renderSafetyPage : null);
    if(typeof previous !== 'function' || previous.__siteVisualDensityWrapped) return;
    function wrapped(){
      var html = previous.apply(this, arguments);
      if(typeof html !== 'string' || html.indexOf('safety-visual-deck') !== -1) return html || '';
      if(html.indexOf('<div class="lesson-body">') !== -1){
        return html.replace('<div class="lesson-body">', renderSafetyVisualDeck() + '<div class="lesson-body">');
      }
      return html + renderSafetyVisualDeck();
    }
    wrapped.__siteVisualDensityWrapped = true;
    window.renderSafetyPage = wrapped;
    try{ renderSafetyPage = wrapped; }catch(err){}
  }

  wrapVisualForLesson();
  wrapGuidedLower();
  wrapHome();
  wrapSafety();

  if(typeof renderAllLessons === 'function'){
    var previousAll = renderAllLessons;
    if(!previousAll.__siteVisualDensityWrapped){
      renderAllLessons = function(){
        previousAll.apply(this, arguments);
        var home = document.getElementById('homePanel');
        var safety = document.getElementById('safetyPanel');
        if(home && typeof renderHome === 'function') home.innerHTML = renderHome();
        if(safety && typeof renderSafetyPage === 'function') safety.innerHTML = renderSafetyPage();
        [5,6,7,8,9].forEach(function(i){
          var panel = document.getElementById('lesson' + i);
          if(panel && typeof renderLesson === 'function') panel.innerHTML = renderLesson(i);
        });
      };
      renderAllLessons.__siteVisualDensityWrapped = true;
    }
  }

  function refreshVisualDensityPanels(){
    var home = document.getElementById('homePanel');
    var safety = document.getElementById('safetyPanel');
    if(home && typeof renderHome === 'function') home.innerHTML = renderHome();
    if(safety && typeof renderSafetyPage === 'function') safety.innerHTML = renderSafetyPage();
    [5,6,7,8,9].forEach(function(i){
      var panel = document.getElementById('lesson' + i);
      if(panel && typeof renderLesson === 'function') panel.innerHTML = renderLesson(i);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', refreshVisualDensityPanels, { once:true });
  }else{
    refreshVisualDensityPanels();
  }
})();
