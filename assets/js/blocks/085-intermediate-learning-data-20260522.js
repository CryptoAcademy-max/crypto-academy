(function(){
  if(typeof window === 'undefined' || window.__intermediateLearningData20260522) return;
  window.__intermediateLearningData20260522 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var START_INDEX = 7;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function normalize(value){
    var text = String(value || '').toLowerCase();
    try{
      if(text.normalize){
        text = /[\uac00-\ud7a3\u3130-\u318f가-힣ㄱ-ㅎㅏ-ㅣ]/.test(text)
          ? text.normalize('NFC')
          : text.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      }
    }catch(err){}
    return text.replace(/[^a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\u0e00-\u0e7f\u0600-\u06ff]+/g,' ').replace(/\s+/g,' ').trim();
  }

  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }

  function currentLangKey(){
    var lang = 'en';
    try{
      lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(err){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    return langKey(lang);
  }

  function prefix(){
    return (document.body && document.body.dataset && document.body.dataset.basePrefix) ? document.body.dataset.basePrefix : './';
  }

  var EXISTING_TERM_ALIASES = {
    address:['address','주소','ที่อยู่กระเป๋า','alamat dompet','endereco da carteira','endereço da carteira','dirección de la billetera','direccion de la billetera','adireshi'],
    privateKey:['private key','개인키','คีย์ส่วนตัว','kunci privat','chave privada','clave privada','makullin sirri'],
    seedPhrase:['seed phrase','recovery words','시드 문구','시드문구','วลีสำรอง','วลีกู้คืน','frasa pemulihan','frase de recuperação','frase semilla','jimlar dawo da walat'],
    gasFee:['gas fee','가스비','ค่าธรรมเนียมแก๊ส','taxa de gas','tarifa de gas','kudin gas'],
    publicKey:['public key','공개키','กุญแจสาธารณะ','kunci publik','chave pública','clave pública'],
    explorer:['explorer','익스플로러','ตัวสำรวจบล็อกเชน','penjelajah blockchain','explorador de blockchain','mai duba sarkar bayanai'],
    smartContract:['smart contract','스마트 컨트랙트','สมาร์ตคอนแทรกต์','kontrak pintar','contrato inteligente','kwangilar smart'],
    custody:['custody','커스터디','การดูแลสินทรัพย์','kustodi','custódia','custodia','rikon kadara'],
    bridge:['bridge','브리지','บริดจ์บล็อกเชน','jembatan blockchain','ponte entre blockchains','puente entre blockchains','gada'],
    wallet:['wallet','지갑','วอลเล็ต','dompet','carteira','billetera','walat'],
    exchange:['exchange','거래소','ตลาดแลกเปลี่ยน','bursa','corretora','plataforma de intercambio','musaya'],
    token:['token','토큰','โทเค็น','tokan'],
    stablecoin:['stablecoin','스테이블코인','สเตเบิลคอยน์','tsayayyen kudin dijital'],
    peg:['peg','페그','เพก','paridade','paridad'],
    liquidity:['liquidity','유동성','สภาพคล่อง','likuiditas','liquidez','saukakiyar musaya'],
    defi:['defi','DeFi','디파이'],
    nft:['nft','NFT'],
    selfCustodyWallet:['self-custody wallet','자기보관지갑','กระเป๋าเงินดูแลเอง','dompet kustodi mandiri','carteira de autocustódia','billetera de autocustodia','walat na kanka'],
    addressPoisoning:['address poisoning','주소오염공격','วางยาพิษที่อยู่','peracunan alamat','envenenamiento de direcciones','gurbatar adireshi']
  };

  function textPack(en, ko, th, id, pt, tr, es, ar, vi, ha, br){
    return { en:en, ko:ko, th:th, id:id, pt:pt, br:br || pt, tr:tr, es:es, ar:ar, vi:vi, ha:ha };
  }

  var TERM_ROWS = [
    {id:'recovery-responsibility', lesson:8, category:'wallet-custody',
      terms:textPack('Recovery responsibility','복구 책임','ความรับผิดชอบในการกู้คืน','Tanggung jawab pemulihan','Responsabilidade de recuperação','Kurtarma sorumluluğu','Responsabilidad de recuperación','مسؤولية الاسترداد','Trách nhiệm khôi phục','Nauyin dawo da dama'),
      defs:textPack('The duty to keep wallet recovery information safe and usable if access is lost.','지갑 접근을 잃었을 때 복구할 수 있도록 백업 정보를 안전하게 관리하는 책임입니다.','หน้าที่เก็บข้อมูลกู้คืนวอลเล็ตให้ปลอดภัยและใช้ได้เมื่อเข้าถึงไม่ได้','Tanggung jawab menjaga data pemulihan wallet agar aman saat akses hilang.','Dever de manter dados de recuperação da carteira seguros e utilizáveis.','Cüzdan erişimi kaybolursa kurtarma bilgisini güvenli tutma görevidir.','Deber de guardar datos de recuperación de la billetera de forma segura.','مسؤولية حفظ معلومات استرداد المحفظة آمنة وقابلة للاستخدام.','Trách nhiệm giữ thông tin khôi phục ví an toàn khi mất quyền truy cập.','Alhakin kiyaye bayanan dawo da walat idan an rasa shiga.')},
    {id:'hot-wallet', lesson:8, category:'wallet-custody',
      terms:textPack('Hot wallet','핫월렛','Hot wallet','Hot wallet','Carteira quente','Sıcak cüzdan','Billetera caliente','محفظة ساخنة','Ví nóng','Walat mai zafi'),
      defs:textPack('A wallet connected to the internet, useful for frequent use but exposed to online risk.','인터넷에 연결된 지갑으로 자주 쓰기 편하지만 온라인 위험에 노출됩니다.','วอลเล็ตที่เชื่อมอินเทอร์เน็ต ใช้ง่ายแต่มีความเสี่ยงออนไลน์','Wallet yang terhubung internet, praktis tetapi lebih terbuka pada risiko online.','Carteira conectada à internet, prática mas exposta a risco online.','İnternete bağlı, sık kullanım için pratik ama çevrimiçi riske açık cüzdan.','Billetera conectada a internet, útil pero expuesta a riesgo en línea.','محفظة متصلة بالإنترنت، مريحة لكنها معرضة لمخاطر الإنترنت.','Ví kết nối internet, tiện dùng nhưng có rủi ro trực tuyến.','Walat da ke kan intanet, mai sauki amma yana da hadarin yanar gizo.')},
    {id:'cold-wallet', lesson:8, category:'wallet-custody',
      terms:textPack('Cold wallet','콜드월렛','Cold wallet','Cold wallet','Carteira fria','Soğuk cüzdan','Billetera fría','محفظة باردة','Ví lạnh','Walat mai sanyi'),
      defs:textPack('A wallet kept offline to reduce online attack exposure, often used for long-term storage.','온라인 공격 노출을 줄이기 위해 오프라인 중심으로 보관하는 지갑입니다.','วอลเล็ตที่เก็บแบบออฟไลน์เพื่อลดความเสี่ยงจากการโจมตีออนไลน์','Wallet yang disimpan offline untuk mengurangi risiko serangan online.','Carteira mantida offline para reduzir exposição a ataques online.','Çevrimiçi saldırı riskini azaltmak için çevrimdışı tutulan cüzdan.','Billetera mantenida sin conexión para reducir ataques en línea.','محفظة تحفظ دون اتصال لتقليل التعرض للهجمات.','Ví giữ ngoại tuyến để giảm rủi ro tấn công online.','Walat da ake ajiye a wajen intanet domin rage harin yanar gizo.')},
    {id:'network', lesson:9, category:'networks',
      terms:textPack('Network','네트워크','เครือข่าย','Jaringan','Rede','Ağ','Red','الشبكة','Mạng','Hanyar sadarwa'),
      defs:textPack('The blockchain route where a transfer is processed, such as Ethereum, Tron, BNB Chain, or Solana.','전송이 실제로 처리되는 블록체인 경로입니다. Ethereum, Tron, BNB Chain, Solana 등이 있습니다.','เส้นทางบล็อกเชนที่ธุรกรรมถูกประมวลผล เช่น Ethereum, Tron, BNB Chain หรือ Solana','Rute blockchain tempat transfer diproses, seperti Ethereum, Tron, BNB Chain, atau Solana.','Rota blockchain onde a transferência é processada, como Ethereum, Tron, BNB Chain ou Solana.','Transferin işlendiği blockchain yolu; Ethereum, Tron, BNB Chain veya Solana gibi.','Ruta blockchain donde se procesa una transferencia, como Ethereum, Tron, BNB Chain o Solana.','مسار البلوكشين الذي تتم عليه المعاملة مثل Ethereum أو Tron أو BNB Chain أو Solana.','Tuyến blockchain nơi giao dịch được xử lý như Ethereum, Tron, BNB Chain hoặc Solana.','Hanyar blockchain da ake sarrafa tura kudi, kamar Ethereum, Tron, BNB Chain ko Solana.')},
    {id:'wrong-network', lesson:9, category:'networks',
      terms:textPack('Wrong network','잘못된 네트워크','เครือข่ายผิด','Jaringan salah','Rede errada','Yanlış ağ','Red equivocada','شبكة خاطئة','Sai mạng','Hanyar sadarwa mara daidai'),
      defs:textPack('A transfer made on a network the receiving wallet or platform does not support.','받는 지갑이나 플랫폼이 지원하지 않는 네트워크로 보내는 실수입니다.','การโอนผ่านเครือข่ายที่วอลเล็ตหรือแพลตฟอร์มปลายทางไม่รองรับ','Transfer melalui jaringan yang tidak didukung wallet atau platform penerima.','Transferência feita por uma rede não aceita pela carteira ou plataforma de destino.','Alıcı cüzdanın veya platformun desteklemediği ağdan yapılan transfer.','Transferencia en una red que la billetera o plataforma receptora no admite.','تحويل على شبكة لا تدعمها المحفظة أو المنصة المستقبلة.','Chuyển trên mạng mà ví hoặc nền tảng nhận không hỗ trợ.','Tura kudi ta hanyar da walat ko dandali mai karba baya goyon baya.')},
    {id:'test-transfer', lesson:9, category:'networks',
      terms:textPack('Test transfer','소액 테스트 전송','การโอนทดสอบ','Transfer uji','Transferência de teste','Test transferi','Transferencia de prueba','تحويل اختباري','Chuyển thử','Gwajin tura kudi'),
      defs:textPack('A small first transfer used to confirm the address, network, fee, and destination before sending more.','큰 금액 전송 전 주소, 네트워크, 수수료, 도착 여부를 확인하는 소액 전송입니다.','การโอนจำนวนน้อยก่อน เพื่อยืนยันที่อยู่ เครือข่าย ค่าธรรมเนียม และปลายทาง','Transfer kecil lebih dulu untuk memastikan alamat, jaringan, biaya, dan tujuan.','Pequena transferência inicial para confirmar endereço, rede, taxa e destino.','Adres, ağ, ücret ve varışı kontrol etmek için yapılan küçük ilk transfer.','Pequeña transferencia inicial para confirmar dirección, red, tarifa y destino.','تحويل صغير أولا للتأكد من العنوان والشبكة والرسوم والوجهة.','Khoản chuyển nhỏ trước để kiểm tra địa chỉ, mạng, phí và nơi nhận.','Karamin tura kudi na farko don tabbatar da adireshi, hanyar sadarwa, kudi da wurin karba.')},
    {id:'reserve', lesson:10, category:'stablecoins',
      terms:textPack('Reserve','준비금','ทุนสำรอง','Cadangan','Reserva','Rezerv','Reserva','الاحتياطي','Dự trữ','Ajiyar tallafi'),
      defs:textPack('Assets held to support a stablecoin or another financial promise.','스테이블코인 가치나 지급 약속을 뒷받침하기 위해 보유하는 자산입니다.','สินทรัพย์ที่ถือไว้เพื่อรองรับมูลค่าของ stablecoin หรือคำมั่นทางการเงิน','Aset yang disimpan untuk mendukung nilai stablecoin atau janji finansial.','Ativos mantidos para sustentar uma stablecoin ou promessa financeira.','Bir stablecoin değerini veya finansal vaadi desteklemek için tutulan varlıklar.','Activos mantenidos para respaldar una stablecoin o promesa financiera.','أصول محفوظة لدعم قيمة stablecoin أو وعد مالي.','Tài sản được giữ để hỗ trợ giá trị stablecoin hoặc cam kết tài chính.','Kadarorin da ake rike domin tallafawa stablecoin ko alkawarin kudi.')},
    {id:'issuer', lesson:10, category:'stablecoins',
      terms:textPack('Issuer','발행 주체','ผู้ออก','Penerbit','Emissor','İhraççı','Emisor','المصدر','Tổ chức phát hành','Mai fitarwa'),
      defs:textPack('The company, protocol, or organization that creates and manages a token or stablecoin.','토큰이나 스테이블코인을 발행하고 관리하는 회사, 프로토콜, 또는 조직입니다.','บริษัท โปรโตคอล หรือองค์กรที่สร้างและดูแล token หรือ stablecoin','Perusahaan, protokol, atau organisasi yang membuat dan mengelola token atau stablecoin.','Empresa, protocolo ou organização que cria e gerencia um token ou stablecoin.','Token veya stablecoin çıkaran ve yöneten şirket, protokol ya da kuruluş.','Empresa, protocolo u organización que crea y gestiona un token o stablecoin.','الشركة أو البروتوكول أو الجهة التي تنشئ وتدير التوكن أو stablecoin.','Công ty, giao thức hoặc tổ chức tạo và quản lý token hoặc stablecoin.','Kamfani, tsari ko kungiya da ke kirkira da kula da token ko stablecoin.')},
    {id:'depeg', lesson:10, category:'stablecoins',
      terms:textPack('Depeg','디페그','หลุด peg','Depeg','Depeg','Depeg','Depeg','فقدان الربط','Mất neo giá','Rabuwa da peg'),
      defs:textPack('When a stablecoin price moves away from its intended target value.','스테이블코인 가격이 목표 기준 가치에서 벗어나는 상황입니다.','เมื่อราคาของ stablecoin หลุดออกจากมูลค่าเป้าหมาย','Saat harga stablecoin menjauh dari nilai targetnya.','Quando o preço de uma stablecoin se afasta do valor-alvo.','Bir stablecoin fiyatının hedef değerinden uzaklaşması.','Cuando el precio de una stablecoin se aleja de su valor objetivo.','عندما يبتعد سعر stablecoin عن قيمته المستهدفة.','Khi giá stablecoin lệch khỏi giá trị mục tiêu.','Lokacin da farashin stablecoin ya kauce daga kimar da aka nufa.')},
    {id:'approval', lesson:11, category:'defi',
      terms:textPack('Approval','승인','การอนุมัติ','Approval','Aprovação','Onay','Aprobación','الموافقة','Phê duyệt','Amincewa'),
      defs:textPack('A wallet action that gives a smart contract permission to use a token.','스마트 컨트랙트가 특정 토큰을 사용할 수 있도록 허용하는 지갑 동작입니다.','การกระทำในวอลเล็ตที่อนุญาตให้ smart contract ใช้ token ได้','Aksi wallet yang memberi smart contract izin memakai token.','Ação da carteira que permite a um smart contract usar um token.','Bir smart contracta token kullanma izni veren cüzdan işlemi.','Acción de la billetera que permite a un smart contract usar un token.','إجراء في المحفظة يمنح العقد الذكي إذنا لاستخدام توكن.','Hành động ví cho smart contract quyền dùng token.','Aikin walat da ke ba smart contract izinin amfani da token.')},
    {id:'signature', lesson:11, category:'defi',
      terms:textPack('Signature','서명','ลายเซ็น','Tanda tangan','Assinatura','İmza','Firma','التوقيع','Chữ ký','Sa hannu'),
      defs:textPack('A wallet confirmation that proves control or approves a message or action.','지갑 통제권을 증명하거나 메시지/동작을 확인하는 서명 요청입니다.','การยืนยันจากวอลเล็ตเพื่อพิสูจน์การควบคุมหรือยืนยันข้อความ/การกระทำ','Konfirmasi wallet untuk membuktikan kontrol atau menyetujui pesan/tindakan.','Confirmação da carteira que prova controle ou aprova uma mensagem/ação.','Kontrolü kanıtlayan ya da mesaj/işlemi onaylayan cüzdan doğrulaması.','Confirmación de billetera que prueba control o aprueba un mensaje/acción.','تأكيد من المحفظة يثبت التحكم أو يوافق على رسالة أو إجراء.','Xác nhận ví để chứng minh quyền kiểm soát hoặc duyệt hành động.','Tabbacin walat da ke nuna iko ko amincewa da sako ko aiki.')},
    {id:'slippage', lesson:11, category:'defi',
      terms:textPack('Slippage','슬리피지','Slippage','Slippage','Slippage','Slippage','Slippage','الانزلاق السعري','Trượt giá','Sauyin farashi'),
      defs:textPack('The allowed price movement between the expected swap price and the final executed price.','스왑 예상 가격과 실제 체결 가격 사이에 허용하는 가격 변동 폭입니다.','ช่วงราคาที่อนุญาตระหว่างราคาคาดหวังกับราคาที่ทำรายการจริง','Batas perubahan harga antara harga swap yang diharapkan dan harga akhir.','Variação permitida entre o preço esperado do swap e o preço final.','Beklenen swap fiyatı ile gerçekleşen fiyat arasındaki izin verilen fark.','Movimiento permitido entre el precio esperado del swap y el precio final.','فرق السعر المسموح بين سعر المبادلة المتوقع والمنفذ.','Mức lệch cho phép giữa giá swap dự kiến và giá thực hiện.','Iyakar bambancin farashi tsakanin abin da ake tsammani da wanda aka aiwatar.')},
    {id:'tokenomics', lesson:12, category:'project-review',
      terms:textPack('Tokenomics','토크노믹스','Tokenomics','Tokenomics','Tokenomics','Tokenomics','Tokenomics','اقتصاديات التوكن','Tokenomics','Tokenomics'),
      defs:textPack('The supply, distribution, incentives, and economic rules behind a token.','토큰의 공급량, 분배, 인센티브, 경제 규칙을 함께 보는 개념입니다.','กฎด้านอุปทาน การกระจาย แรงจูงใจ และเศรษฐกิจของ token','Aturan suplai, distribusi, insentif, dan ekonomi di balik token.','Regras de oferta, distribuição, incentivos e economia de um token.','Tokenin arz, dağıtım, teşvik ve ekonomik kurallarının bütünü.','Reglas de oferta, distribución, incentivos y economía de un token.','قواعد العرض والتوزيع والحوافز والاقتصاد وراء التوكن.','Nguồn cung, phân phối, khuyến khích và quy tắc kinh tế của token.','Tsarin arziki, rabawa, kwadaitarwa da dokokin tattalin token.')},
    {id:'red-flag', lesson:12, category:'project-review',
      terms:textPack('Red flag','위험 신호','สัญญาณอันตราย','Sinyal bahaya','Sinal de alerta','Kırmızı bayrak','Señal de alerta','إشارة خطر','Dấu hiệu đỏ','Alamar hadari'),
      defs:textPack('A warning sign that a project, link, or request may be unsafe.','프로젝트, 링크, 요청이 안전하지 않을 수 있음을 보여주는 경고 신호입니다.','สัญญาณเตือนว่าโปรเจกต์ ลิงก์ หรือคำขออาจไม่ปลอดภัย','Tanda peringatan bahwa proyek, tautan, atau permintaan mungkin tidak aman.','Sinal de que um projeto, link ou pedido pode ser inseguro.','Proje, bağlantı veya isteğin güvensiz olabileceğini gösteren uyarı.','Señal de que un proyecto, enlace o solicitud puede ser inseguro.','علامة تحذير أن المشروع أو الرابط أو الطلب قد لا يكون آمنا.','Dấu hiệu cảnh báo dự án, liên kết hoặc yêu cầu có thể không an toàn.','Alama da ke nuna aiki, hanyar link ko bukata na iya zama maras tsaro.')},
    {id:'green-flag', lesson:12, category:'project-review',
      terms:textPack('Green flag','긍정 신호','สัญญาณที่ดี','Sinyal positif','Sinal positivo','Yeşil bayrak','Señal positiva','إشارة إيجابية','Dấu hiệu xanh','Alamar kyau'),
      defs:textPack('A positive sign that supports trust, such as clear documentation, active use, or verifiable links.','명확한 문서, 실제 활동, 검증 가능한 링크처럼 신뢰를 보강하는 긍정 신호입니다.','สัญญาณที่ช่วยเพิ่มความน่าเชื่อถือ เช่น เอกสารชัดเจน การใช้งานจริง หรือลิงก์ตรวจสอบได้','Tanda positif seperti dokumentasi jelas, penggunaan aktif, atau tautan yang bisa diverifikasi.','Sinal positivo, como documentação clara, uso ativo ou links verificáveis.','Açık doküman, aktif kullanım veya doğrulanabilir bağlantı gibi olumlu işaret.','Señal positiva como documentación clara, uso activo o enlaces verificables.','علامة إيجابية مثل وثائق واضحة أو استخدام نشط أو روابط قابلة للتحقق.','Dấu hiệu tốt như tài liệu rõ, hoạt động thật hoặc liên kết kiểm chứng được.','Alama mai kyau kamar takardu bayyanannu, amfani na gaske ko links masu tantancewa.')},
    {id:'multichain', lesson:13, category:'bridges',
      terms:textPack('Multichain','멀티체인','Multichain','Multichain','Multichain','Çoklu zincir','Multichain','متعدد السلاسل','Đa chuỗi','Sarkoki da yawa'),
      defs:textPack('A setup where assets, apps, or users operate across more than one blockchain.','자산, 앱, 사용자가 여러 블록체인에 걸쳐 움직이는 구조입니다.','โครงสร้างที่สินทรัพย์ แอป หรือผู้ใช้ทำงานข้ามหลาย blockchain','Kondisi saat aset, aplikasi, atau pengguna berjalan di lebih dari satu blockchain.','Estrutura em que ativos, apps ou usuários operam em mais de uma blockchain.','Varlık, uygulama veya kullanıcıların birden fazla blockchain üzerinde çalışması.','Estructura donde activos, apps o usuarios operan en más de una blockchain.','حالة تعمل فيها الأصول أو التطبيقات أو المستخدمون عبر أكثر من بلوكشين.','Cấu trúc nơi tài sản, ứng dụng hoặc người dùng hoạt động trên nhiều blockchain.','Tsari da kadarori, apps ko masu amfani ke aiki a kan blockchain fiye da daya.')},
    {id:'source-chain', lesson:13, category:'bridges',
      terms:textPack('Source chain','출발 체인','เชนต้นทาง','Chain asal','Chain de origem','Kaynak zincir','Cadena de origen','السلسلة المصدر','Chuỗi nguồn','Sarkar farawa'),
      defs:textPack('The blockchain where a bridge or cross-chain transfer starts.','브리지나 크로스체인 전송이 시작되는 블록체인입니다.','Blockchain ที่การ bridge หรือการโอนข้ามเชนเริ่มต้น','Blockchain tempat bridge atau transfer lintas-chain dimulai.','Blockchain onde uma ponte ou transferência cross-chain começa.','Bridge veya cross-chain transferin başladığı blockchain.','Blockchain donde empieza un puente o transferencia cross-chain.','البلوكشين التي تبدأ منها عملية الجسر أو النقل بين السلاسل.','Blockchain nơi bridge hoặc chuyển liên chuỗi bắt đầu.','Blockchain da bridge ko tura kudin cross-chain ke farawa.')},
    {id:'destination-chain', lesson:13, category:'bridges',
      terms:textPack('Destination chain','도착 체인','เชนปลายทาง','Chain tujuan','Chain de destino','Hedef zincir','Cadena de destino','السلسلة الوجهة','Chuỗi đích','Sarkar karba'),
      defs:textPack('The blockchain where a bridge or cross-chain transfer is expected to arrive.','브리지나 크로스체인 전송이 도착해야 하는 블록체인입니다.','Blockchain ที่สินทรัพย์ควรไปถึงหลัง bridge หรือโอนข้ามเชน','Blockchain tujuan dari bridge atau transfer lintas-chain.','Blockchain onde uma ponte ou transferência cross-chain deve chegar.','Bridge veya cross-chain transferin varması beklenen blockchain.','Blockchain donde debe llegar un puente o transferencia cross-chain.','البلوكشين التي يفترض أن تصل إليها عملية النقل بين السلاسل.','Blockchain nơi bridge hoặc chuyển liên chuỗi dự kiến đến.','Blockchain da ake tsammanin tura kudin cross-chain zai isa.')},
    {id:'official-source', lesson:14, category:'verification',
      terms:textPack('Official source','공식 출처','แหล่งทางการ','Sumber resmi','Fonte oficial','Resmi kaynak','Fuente oficial','المصدر الرسمي','Nguồn chính thức','Tushe na hukuma'),
      defs:textPack('A verified website, documentation page, or account controlled by the real project or organization.','실제 프로젝트나 조직이 관리하는 검증된 웹사이트, 문서, 계정입니다.','เว็บไซต์ เอกสาร หรือบัญชีที่ตรวจสอบได้และควบคุมโดยโปรเจกต์จริง','Situs, dokumen, atau akun terverifikasi yang dikendalikan proyek atau organisasi asli.','Site, documentação ou conta verificada controlada pelo projeto ou organização real.','Gerçek proje veya kuruluşun yönettiği doğrulanmış site, doküman veya hesap.','Sitio, documento o cuenta verificada controlada por el proyecto real.','موقع أو وثائق أو حساب موثق يديره المشروع أو الجهة الحقيقية.','Website, tài liệu hoặc tài khoản đã xác minh do dự án thật kiểm soát.','Shafi, takardu ko asusun da aka tabbatar daga aikin ko kungiya ta gaskiya.')},
    {id:'domain', lesson:14, category:'verification',
      terms:textPack('Domain','도메인','โดเมน','Domain','Domínio','Alan adı','Dominio','النطاق','Tên miền','Sunan domain'),
      defs:textPack('The website address name that should be checked carefully before connecting a wallet or signing.','지갑 연결이나 서명 전에 정확히 확인해야 하는 웹사이트 주소 이름입니다.','ชื่อที่อยู่เว็บไซต์ที่ควรตรวจให้ครบก่อนเชื่อมวอลเล็ตหรือเซ็น','Nama alamat situs yang harus dicek sebelum menghubungkan wallet atau menandatangani.','Nome do endereço do site que deve ser conferido antes de conectar carteira ou assinar.','Cüzdan bağlamadan veya imzalamadan önce dikkatle kontrol edilen site adresi.','Nombre de sitio que debe revisarse antes de conectar billetera o firmar.','اسم عنوان الموقع الذي يجب فحصه قبل ربط المحفظة أو التوقيع.','Tên địa chỉ website cần kiểm tra kỹ trước khi kết nối ví hoặc ký.','Sunan adireshin shafi da ake dubawa kafin hada walat ko sa hannu.')},
    {id:'contract-address', lesson:14, category:'verification',
      terms:textPack('Contract address','컨트랙트 주소','ที่อยู่สัญญา','Alamat kontrak','Endereço do contrato','Kontrat adresi','Dirección del contrato','عنوان العقد','Địa chỉ hợp đồng','Adireshin kwangila'),
      defs:textPack('The blockchain address of a token or smart contract that should match official sources.','토큰이나 스마트 컨트랙트의 블록체인 주소로, 공식 출처와 일치해야 합니다.','ที่อยู่บน blockchain ของ token หรือ smart contract ที่ต้องตรงกับแหล่งทางการ','Alamat blockchain token atau smart contract yang harus cocok dengan sumber resmi.','Endereço blockchain de um token ou smart contract que deve bater com fontes oficiais.','Token veya smart contract blockchain adresi; resmi kaynaklarla eşleşmelidir.','Dirección blockchain de un token o smart contract que debe coincidir con fuentes oficiales.','عنوان بلوكشين لتوكن أو عقد ذكي يجب أن يطابق المصادر الرسمية.','Địa chỉ blockchain của token hoặc smart contract cần khớp nguồn chính thức.','Adireshin blockchain na token ko smart contract da ya kamata ya dace da tushen hukuma.')},
    {id:'cross-check', lesson:14, category:'verification',
      terms:textPack('Cross-check','교차 확인','ตรวจสอบข้ามแหล่ง','Cek silang','Verificação cruzada','Çapraz kontrol','Comprobación cruzada','تحقق متقاطع','Đối chiếu chéo','Binciken kwatance'),
      defs:textPack('Checking the same claim through more than one trusted source before acting.','행동하기 전 같은 정보를 여러 신뢰 가능한 출처에서 다시 확인하는 과정입니다.','การตรวจข้อมูลเดียวกันจากแหล่งที่เชื่อถือได้มากกว่าหนึ่งแห่งก่อนลงมือ','Memeriksa klaim yang sama lewat lebih dari satu sumber tepercaya sebelum bertindak.','Checar a mesma afirmação em mais de uma fonte confiável antes de agir.','Harekete geçmeden önce aynı bilgiyi birden fazla güvenilir kaynaktan kontrol etmek.','Revisar la misma afirmación en más de una fuente confiable antes de actuar.','فحص الادعاء نفسه عبر أكثر من مصدر موثوق قبل التصرف.','Kiểm tra cùng một thông tin qua nhiều nguồn đáng tin trước khi hành động.','Duba magana daya ta hanyar tushe fiye da daya kafin aiki.')}
  ];

  var SOURCE_UI = {
    en:{sectionTitle:'Intermediate Roadmap resources',sectionDesc:'Lesson-specific checklists and guides for comparing, verifying, and reducing mistakes.',label:'Intermediate resource',open:'Open resources',terms:'Key terms',lesson:'Lesson'},
    ko:{sectionTitle:'중급자 로드맵 자료',sectionDesc:'비교, 검증, 실수 줄이기에 필요한 강의별 체크리스트와 가이드입니다.',label:'중급자 자료',open:'자료 열기',terms:'핵심 용어',lesson:'강의'},
    th:{sectionTitle:'แหล่งข้อมูล Roadmap ระดับกลาง',sectionDesc:'เช็กลิสต์และคู่มือรายบทสำหรับเปรียบเทียบ ตรวจสอบ และลดความผิดพลาด',label:'แหล่งข้อมูลระดับกลาง',open:'เปิดแหล่งข้อมูล',terms:'คำสำคัญ',lesson:'บทเรียน'},
    id:{sectionTitle:'Resource Roadmap Menengah',sectionDesc:'Checklist dan panduan per pelajaran untuk membandingkan, memverifikasi, dan mengurangi kesalahan.',label:'Resource menengah',open:'Buka resource',terms:'Istilah kunci',lesson:'Pelajaran'},
    pt:{sectionTitle:'Recursos do roteiro intermediário',sectionDesc:'Checklists e guias por lição para comparar, verificar e reduzir erros.',label:'Recurso intermediário',open:'Abrir recursos',terms:'Termos-chave',lesson:'Lição'},
    br:{sectionTitle:'Recursos do roteiro intermediário',sectionDesc:'Checklists e guias por aula para comparar, verificar e reduzir erros.',label:'Recurso intermediário',open:'Abrir recursos',terms:'Termos-chave',lesson:'Aula'},
    tr:{sectionTitle:'Orta seviye yol haritası kaynakları',sectionDesc:'Karşılaştırma, doğrulama ve hata azaltma için ders bazlı kontrol listeleri.',label:'Orta seviye kaynak',open:'Kaynakları aç',terms:'Temel terimler',lesson:'Ders'},
    es:{sectionTitle:'Recursos de la ruta intermedia',sectionDesc:'Checklists y guías por lección para comparar, verificar y reducir errores.',label:'Recurso intermedio',open:'Abrir recursos',terms:'Términos clave',lesson:'Lección'},
    ar:{sectionTitle:'موارد خارطة الطريق المتوسطة',sectionDesc:'قوائم تحقق وأدلة لكل درس للمقارنة والتحقق وتقليل الأخطاء.',label:'مورد متوسط',open:'افتح الموارد',terms:'مصطلحات أساسية',lesson:'الدرس'},
    vi:{sectionTitle:'Tài nguyên lộ trình trung cấp',sectionDesc:'Checklist và hướng dẫn theo bài để so sánh, xác minh và giảm lỗi.',label:'Tài nguyên trung cấp',open:'Mở tài nguyên',terms:'Thuật ngữ chính',lesson:'Bài học'},
    ha:{sectionTitle:'Albarkatun taswirar matsakaici',sectionDesc:'Checklist da jagorori na darasi domin kwatanta, tabbatarwa, da rage kuskure.',label:'Albarkatun matsakaici',open:'Bude albarkatu',terms:'Muhimman kalmomi',lesson:'Darasi'}
  };

  var SOURCE_ROWS = [
    {id:'exchange-wallet-checklist', lesson:8, terms:['Exchange','Wallet','Custody','Recovery responsibility'],
      titles:textPack('Exchange vs Wallet Checklist','거래소와 지갑 비교 체크리스트','เช็กลิสต์ Exchange vs Wallet','Checklist Exchange vs Wallet','Checklist Exchange vs Wallet','Borsa vs Cüzdan kontrol listesi','Checklist Exchange vs Wallet','قائمة تحقق المنصة مقابل المحفظة','Checklist Exchange vs Wallet','Jerin duba Musaya vs Walat'),
      descs:textPack('Separate trading, custody, and recovery responsibility before moving assets.','자산을 옮기기 전에 거래, 보관, 복구 책임을 구분합니다.','แยกการเทรด การดูแลสินทรัพย์ และความรับผิดชอบกู้คืนก่อนย้ายสินทรัพย์','Pisahkan trading, custody, dan tanggung jawab pemulihan sebelum memindahkan aset.','Separe trading, custódia e responsabilidade de recuperação antes de mover ativos.','Varlık taşımadan önce alım satım, saklama ve kurtarma sorumluluğunu ayırın.','Separa trading, custodia y recuperación antes de mover activos.','افصل التداول والحفظ ومسؤولية الاسترداد قبل نقل الأصول.','Tách giao dịch, lưu ký và trách nhiệm khôi phục trước khi chuyển tài sản.','Raba ciniki, rikon kadara da nauyin dawowa kafin motsa kadarori.')},
    {id:'network-fee-guide', lesson:9, terms:['Network','Gas fee','Wrong network','Test transfer'],
      titles:textPack('Network and Fee Comparison Guide','네트워크와 수수료 비교 가이드','คู่มือเปรียบเทียบเครือข่ายและค่าธรรมเนียม','Panduan jaringan dan biaya','Guia de comparação de rede e taxa','Ağ ve ücret karşılaştırma rehberi','Guía de red y tarifas','دليل مقارنة الشبكة والرسوم','Hướng dẫn so sánh mạng và phí','Jagorar hanyar sadarwa da kudi'),
      descs:textPack('Check network support, fee, speed, and test transfer before sending.','전송 전 네트워크 지원, 수수료, 속도, 소액 테스트를 확인합니다.','ตรวจการรองรับเครือข่าย ค่าธรรมเนียม ความเร็ว และการโอนทดสอบก่อนส่ง','Cek dukungan jaringan, biaya, kecepatan, dan transfer uji sebelum mengirim.','Confira rede, taxa, velocidade e transferência de teste antes de enviar.','Göndermeden önce ağ desteği, ücret, hız ve test transferini kontrol edin.','Revisa red, tarifa, velocidad y prueba antes de enviar.','تحقق من دعم الشبكة والرسوم والسرعة والتحويل الاختباري قبل الإرسال.','Kiểm tra hỗ trợ mạng, phí, tốc độ và chuyển thử trước khi gửi.','Duba hanyar sadarwa, kudi, sauri da gwajin tura kafin aikawa.')},
    {id:'stablecoin-risk-notes', lesson:10, terms:['Stablecoin','Reserve','Issuer','Depeg'],
      titles:textPack('Stablecoin Risk Notes','스테이블코인 위험 메모','บันทึกความเสี่ยง Stablecoin','Catatan risiko stablecoin','Notas de risco de stablecoin','Stablecoin risk notları','Notas de riesgo de stablecoin','ملاحظات مخاطر stablecoin','Ghi chú rủi ro stablecoin','Bayanan hadarin stablecoin'),
      descs:textPack('Review issuer, reserve model, liquidity, and depeg risk before relying on a stablecoin.','스테이블코인을 쓰기 전 발행 주체, 준비금, 유동성, 디페그 위험을 봅니다.','ดูผู้ออก ทุนสำรอง สภาพคล่อง และความเสี่ยง depeg ก่อนใช้ stablecoin','Tinjau penerbit, cadangan, likuiditas, dan risiko depeg sebelum memakai stablecoin.','Revise emissor, reserva, liquidez e risco de depeg antes de usar uma stablecoin.','Stablecoin kullanmadan önce ihraççı, rezerv, likidite ve depeg riskini inceleyin.','Revisa emisor, reserva, liquidez y riesgo de depeg antes de usar una stablecoin.','راجع المصدر والاحتياطي والسيولة وخطر فقدان الربط قبل الاعتماد على stablecoin.','Xem tổ chức phát hành, dự trữ, thanh khoản và rủi ro mất neo trước khi dùng stablecoin.','Duba mai fitarwa, ajiyar tallafi, saukin musaya da hadarin depeg.')},
    {id:'defi-approval-checklist', lesson:11, terms:['DeFi','Approval','Signature','Slippage'],
      titles:textPack('DeFi Approval Safety Checklist','DeFi 승인 안전 체크리스트','เช็กลิสต์ความปลอดภัยการอนุมัติ DeFi','Checklist keamanan approval DeFi','Checklist de segurança de aprovação DeFi','DeFi onay güvenliği kontrol listesi','Checklist de seguridad de aprobación DeFi','قائمة أمان موافقات DeFi','Checklist an toàn phê duyệt DeFi','Jerin duba amincin amincewar DeFi'),
      descs:textPack('Read wallet prompts, spender, amount, and signature requests before approving.','승인 전 지갑 요청, 권한 대상, 금액, 서명 내용을 읽습니다.','อ่านคำขอจากวอลเล็ต ผู้ใช้สิทธิ์ จำนวน และลายเซ็นก่อนอนุมัติ','Baca prompt wallet, spender, jumlah, dan permintaan tanda tangan sebelum approve.','Leia prompts da carteira, spender, valor e assinatura antes de aprovar.','Onaydan önce cüzdan uyarısı, spender, tutar ve imza isteğini okuyun.','Lee prompts de billetera, spender, importe y firma antes de aprobar.','اقرأ طلبات المحفظة والمصرح له والمبلغ والتوقيع قبل الموافقة.','Đọc yêu cầu ví, spender, số tiền và chữ ký trước khi phê duyệt.','Karanta bukatar walat, wanda zai kashe, adadi da sa hannu kafin amincewa.')},
    {id:'project-review-checklist', lesson:12, terms:['Tokenomics','Liquidity','Red flag','Green flag'],
      titles:textPack('Project Review Checklist','프로젝트 검토 체크리스트','เช็กลิสต์ตรวจโปรเจกต์','Checklist review proyek','Checklist de revisão de projeto','Proje inceleme kontrol listesi','Checklist de revisión de proyecto','قائمة مراجعة المشروع','Checklist đánh giá dự án','Jerin duba aiki'),
      descs:textPack('Check tokenomics, activity, liquidity, links, and red flags before trusting hype.','유행을 믿기 전 토크노믹스, 활동성, 유동성, 링크, 위험 신호를 봅니다.','ตรวจ tokenomics กิจกรรม สภาพคล่อง ลิงก์ และสัญญาณอันตรายก่อนเชื่อ hype','Cek tokenomics, aktivitas, likuiditas, tautan, dan sinyal bahaya sebelum percaya hype.','Confira tokenomics, atividade, liquidez, links e sinais de alerta antes do hype.','Hype öncesi tokenomics, aktivite, likidite, link ve kırmızı bayrakları kontrol edin.','Revisa tokenomics, actividad, liquidez, enlaces y alertas antes del hype.','تحقق من اقتصاديات التوكن والنشاط والسيولة والروابط وإشارات الخطر قبل تصديق الضجيج.','Kiểm tra tokenomics, hoạt động, thanh khoản, liên kết và dấu hiệu đỏ trước khi tin hype.','Duba tokenomics, aiki, saukin musaya, links da alamomin hadari kafin yarda da hayaniya.')},
    {id:'bridge-safety-guide', lesson:13, terms:['Bridge','Multichain','Source chain','Destination chain'],
      titles:textPack('Bridge Safety Guide','브리지 안전 가이드','คู่มือความปลอดภัย Bridge','Panduan keamanan bridge','Guia de segurança de bridge','Bridge güvenlik rehberi','Guía de seguridad de bridge','دليل أمان الجسور','Hướng dẫn an toàn bridge','Jagorar tsaron bridge'),
      descs:textPack('Confirm source chain, destination chain, asset version, and bridge route before moving.','이동 전 출발 체인, 도착 체인, 자산 버전, 브리지 경로를 확인합니다.','ยืนยันเชนต้นทาง เชนปลายทาง เวอร์ชันสินทรัพย์ และเส้นทาง bridge ก่อนย้าย','Pastikan chain asal, chain tujuan, versi aset, dan rute bridge sebelum memindahkan.','Confirme chain de origem, destino, versão do ativo e rota de bridge antes de mover.','Taşımadan önce kaynak zincir, hedef zincir, varlık sürümü ve bridge rotasını doğrulayın.','Confirma cadena de origen, destino, versión del activo y ruta de bridge antes de mover.','أكد السلسلة المصدر والوجهة ونسخة الأصل ومسار الجسر قبل النقل.','Xác nhận chuỗi nguồn, chuỗi đích, phiên bản tài sản và tuyến bridge trước khi chuyển.','Tabbatar da sarkar farawa, karba, sigar kadara da hanyar bridge kafin motsi.')},
    {id:'verification-routine-guide', lesson:14, terms:['Official source','Domain','Contract address','Cross-check'],
      titles:textPack('Verification Routine Guide','정보 검증 루틴 가이드','คู่มือรูทีนการตรวจสอบ','Panduan rutinitas verifikasi','Guia de rotina de verificação','Doğrulama rutini rehberi','Guía de rutina de verificación','دليل روتين التحقق','Hướng dẫn quy trình xác minh','Jagorar tsarin tabbatarwa'),
      descs:textPack('Verify official source, domain, contract address, and warnings before acting.','행동 전 공식 출처, 도메인, 컨트랙트 주소, 경고를 순서대로 확인합니다.','ตรวจแหล่งทางการ โดเมน ที่อยู่สัญญา และคำเตือนก่อนลงมือ','Verifikasi sumber resmi, domain, alamat kontrak, dan peringatan sebelum bertindak.','Verifique fonte oficial, domínio, endereço do contrato e alertas antes de agir.','Harekete geçmeden önce resmi kaynak, alan adı, kontrat adresi ve uyarıları doğrulayın.','Verifica fuente oficial, dominio, contrato y alertas antes de actuar.','تحقق من المصدر الرسمي والنطاق وعنوان العقد والتحذيرات قبل التصرف.','Xác minh nguồn chính thức, tên miền, địa chỉ hợp đồng và cảnh báo trước khi hành động.','Tabbatar da tushe na hukuma, domain, adireshin kwangila da gargadi kafin aiki.')}
  ];

  var EXISTING_RELATED_TERMS = [
    {key:'exchange', lessons:[8], category:'wallet-custody'},
    {key:'wallet', lessons:[8], category:'wallet-custody'},
    {key:'custody', lessons:[8], category:'wallet-custody'},
    {key:'gasFee', lessons:[9], category:'networks'},
    {key:'stablecoin', lessons:[10], category:'stablecoins'},
    {key:'liquidity', lessons:[10,12], category:'stablecoins'},
    {key:'defi', lessons:[11], category:'defi'},
    {key:'bridge', lessons:[13], category:'bridges'},
    {key:'explorer', lessons:[14], category:'verification'},
    {key:'smartContract', lessons:[11,14], category:'verification'}
  ];

  var summary = {
    existingTermsSkipped: [],
    newTermsAdded: [],
    existingSourcesSkipped: [],
    newSourcesAdded: [],
    relatedOnly: [
      'Exchange -> Lesson 8',
      'Wallet -> Lesson 8',
      'Custody -> Lesson 8',
      'Gas fee -> Lesson 9',
      'Stablecoin -> Lesson 10',
      'Liquidity -> Lessons 10, 12',
      'DeFi -> Lesson 11',
      'Bridge -> Lesson 13',
      'Explorer -> Lesson 14',
      'Smart contract -> Lessons 11, 14'
    ]
  };

  function existingAliasSet(lang){
    var set = {};
    Object.keys(EXISTING_TERM_ALIASES).forEach(function(key){
      EXISTING_TERM_ALIASES[key].forEach(function(alias){ set[normalize(alias)] = true; });
    });
    try{
      var current = typeof getGlossaryItems === 'function' ? getGlossaryItems() : [];
      (current || []).forEach(function(item){ if(item && item[0]) set[normalize(item[0])] = true; });
    }catch(err){}
    if(window.__UNIFIED_GLOSSARY && window.__UNIFIED_GLOSSARY[lang]){
      window.__UNIFIED_GLOSSARY[lang].forEach(function(item){ if(item && item[0]) set[normalize(item[0])] = true; });
    }
    return set;
  }

  function applyGlossaryTerms(){
    if(!window.__UNIFIED_GLOSSARY) window.__UNIFIED_GLOSSARY = {};
    LANGS.forEach(function(lang){
      if(!window.__UNIFIED_GLOSSARY[lang]) window.__UNIFIED_GLOSSARY[lang] = clone((window.__UNIFIED_GLOSSARY.en || []));
      var visible = existingAliasSet(lang);
      TERM_ROWS.forEach(function(row){
        var term = row.terms[lang] || row.terms.en;
        var def = row.defs[lang] || row.defs.en;
        var key = normalize(term);
        if(!key || visible[key]){
          if(lang === 'en' && summary.existingTermsSkipped.indexOf(row.terms.en) === -1) summary.existingTermsSkipped.push(row.terms.en);
          return;
        }
        window.__UNIFIED_GLOSSARY[lang].push([term, def, {id:row.id, category:row.category, level:'intermediate', relatedLessons:[row.lesson]}]);
        visible[key] = true;
        if(lang === 'en') summary.newTermsAdded.push(row.terms.en);
      });
      if(typeof glossaryData !== 'undefined') glossaryData[lang] = window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1]]; });
      if(typeof glossaryOverrides !== 'undefined') glossaryOverrides[lang] = window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1]]; });
    });

    var previous = typeof getGlossaryItems === 'function' ? getGlossaryItems : null;
    var wrapped = function(){
      var lang = currentLangKey();
      if(window.__UNIFIED_GLOSSARY && window.__UNIFIED_GLOSSARY[lang]){
        return window.__UNIFIED_GLOSSARY[lang].map(function(item){ return [item[0], item[1], item[2]]; });
      }
      return previous ? previous.apply(this, arguments) : [];
    };
    wrapped.__intermediateLearningDataWrapped = true;
    window.getGlossaryItems = wrapped;
    try{ getGlossaryItems = wrapped; }catch(err){}
  }

  function mergeLessons(current, additions){
    var seen = {};
    var result = [];
    (current || []).concat(additions || []).forEach(function(n){
      var value = Number(n);
      if(!isFinite(value) || seen[value]) return;
      seen[value] = true;
      result.push(value);
    });
    return result.sort(function(a,b){ return a - b; });
  }

  function applyExistingTermRelations(){
    if(!window.__UNIFIED_GLOSSARY) return;
    LANGS.forEach(function(lang){
      var list = window.__UNIFIED_GLOSSARY[lang] || [];
      EXISTING_RELATED_TERMS.forEach(function(rel){
        var aliases = (EXISTING_TERM_ALIASES[rel.key] || [rel.key]).map(normalize);
        var item = list.find(function(entry){ return entry && aliases.indexOf(normalize(entry[0])) !== -1; });
        if(!item) return;
        item[2] = item[2] || {};
        item[2].id = item[2].id || rel.key;
        item[2].category = item[2].category || rel.category;
        item[2].level = item[2].level || 'intermediate';
        item[2].relatedLessons = mergeLessons(item[2].relatedLessons, rel.lessons);
      });
    });
  }

  function ensureSourceCategory(lang){
    if(typeof sourceLibraryCats === 'undefined') return;
    if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = clone(sourceLibraryCats.en || []);
    var ui = SOURCE_UI[lang] || SOURCE_UI.en;
    if(!sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate'; })){
      sourceLibraryCats[lang].push({key:'intermediate', label:ui.sectionTitle});
    }
  }

  function sourceArray(row, lang){
    var ui = SOURCE_UI[lang] || SOURCE_UI.en;
    return [
      'intermediate',
      'Coin ProofPath',
      row.titles[lang] || row.titles.en,
      row.descs[lang] || row.descs.en,
      '',
      formatLessonLabel(lang, row.lesson),
      ui.terms + ': ' + row.terms.join(', ')
    ];
  }

  function formatLessonLabel(lang, number){
    var ui = SOURCE_UI[lang] || SOURCE_UI.en;
    if(lang === 'ko') return number + '강';
    if(lang === 'ar') return ui.lesson + ' ' + number;
    return ui.lesson + ' ' + number;
  }

  function addToSourceStore(store, lang, item, row){
    if(!store) return false;
    if(!store[lang]) store[lang] = clone((store.en || []));
    var titleKey = normalize(item[2]);
    var exists = store[lang].some(function(existing){
      if(!existing) return false;
      return normalize(existing[2] || existing[1] || '') === titleKey || (row.id && normalize(existing[2] || '').indexOf(normalize(row.id)) !== -1);
    });
    if(exists) return false;
    store[lang].push(item);
    return true;
  }

  function applySourceResources(){
    if(typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(lang){
      ensureSourceCategory(lang);
      SOURCE_ROWS.forEach(function(row){
        var item = sourceArray(row, lang);
        var addedLibrary = addToSourceStore(sourceLibrary, lang, item, row);
        var addedOverride = false;
        if(typeof sourceOverrides !== 'undefined' && Array.isArray(sourceOverrides[lang]) && sourceOverrides[lang].length){
          addedOverride = addToSourceStore(sourceOverrides, lang, clone(item), row);
        }
        if(lang === 'en'){
          if(addedLibrary || addedOverride) summary.newSourcesAdded.push(row.titles.en);
          else summary.existingSourcesSkipped.push(row.titles.en);
        }
      });
    });
  }

  function renderRelatedCard(row, lang){
    var ui = SOURCE_UI[lang] || SOURCE_UI.en;
    return '<a class="source-card related-resource-card" href="' + esc(prefix() + 'sources/') + '" data-intermediate-learning-resource="' + esc(row.id) + '">'
      + '<span class="related-card-label">' + esc(ui.label) + '</span>'
      + '<strong class="related-card-title">' + esc(row.titles[lang] || row.titles.en) + '</strong>'
      + '<span class="related-card-desc">' + esc(row.descs[lang] || row.descs.en) + '</span>'
      + '<span class="related-card-link">' + esc(ui.open) + '</span>'
      + '</a>';
  }

  function patchLessonRelatedHtml(html, index){
    if(index < START_INDEX || index >= START_INDEX + SOURCE_ROWS.length) return html;
    if(!html || html.indexOf('lesson-system-related') === -1 || html.indexOf('data-intermediate-learning-resource') !== -1) return html;
    var row = SOURCE_ROWS[index - START_INDEX];
    var card = renderRelatedCard(row, currentLangKey());
    var marker = '</div></div></section>';
    var pos = html.indexOf(marker, html.indexOf('lesson-system-related'));
    if(pos === -1) return html;
    return html.slice(0, pos) + card + html.slice(pos);
  }

  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__intermediateLearningDataWrapped) return;
    var wrapped = function(index){
      var html = previous.apply(this, arguments) || '';
      return patchLessonRelatedHtml(html, index);
    };
    wrapped.__intermediateLearningDataWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(err){}
  }

  function renderSourceSection(){
    var lang = currentLangKey();
    var ui = SOURCE_UI[lang] || SOURCE_UI.en;
    var cards = SOURCE_ROWS.map(function(row){
      return '<a class="source-library-item lesson-guide-source-card" href="' + esc(prefix() + 'sources/') + '" data-intermediate-learning-source="' + esc(row.id) + '">'
        + '<div class="source-library-meta">' + esc(ui.label) + '</div>'
        + '<div class="src-publisher-row"><span class="src-publisher">&#9654; Coin ProofPath</span><span class="src-section-tag">' + esc(formatLessonLabel(lang, row.lesson)) + '</span></div>'
        + '<h3>' + esc(row.titles[lang] || row.titles.en) + '</h3>'
        + '<p>' + esc(row.descs[lang] || row.descs.en) + '</p>'
        + '<div class="src-why"><strong>' + esc(ui.terms) + ':</strong> ' + esc(row.terms.join(', ')) + '</div>'
        + '</a>';
    }).join('');
    return '<section class="src-section-block is-action-track" data-intermediate-learning-sources>'
      + '<div class="src-section-heading">' + esc(ui.sectionTitle) + '<span class="src-section-count">' + SOURCE_ROWS.length + '</span></div>'
      + '<p class="src-group-desc">' + esc(ui.sectionDesc) + '</p>'
      + '<div class="source-library-grid">' + cards + '</div>'
      + '</section>';
  }

  function ensureSourceSection(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var lang = currentLangKey();
    var titles = SOURCE_ROWS.map(function(row){ return row.titles[lang] || row.titles.en; });
    Array.prototype.forEach.call(panel.querySelectorAll('.source-library-item'), function(card){
      if(card.closest && card.closest('[data-intermediate-learning-sources]')) return;
      var heading = card.querySelector && card.querySelector('h3');
      var text = heading ? String(heading.textContent || '').replace(/\s+/g,' ').trim() : '';
      if(titles.indexOf(text) !== -1 && card.parentNode) card.parentNode.removeChild(card);
    });
    var existing = panel.querySelector('[data-intermediate-learning-sources]');
    var html = renderSourceSection();
    if(existing) existing.outerHTML = html;
    else panel.insertAdjacentHTML('beforeend', html);
  }

  function patchRenderSources(){
    var previous = window.renderSources || (typeof renderSources === 'function' ? renderSources : null);
    if(typeof previous === 'function' && !previous.__intermediateLearningDataWrapped){
      var wrapped = function(){
        var html = previous.apply(this, arguments);
        setTimeout(ensureSourceSection, 0);
        return html;
      };
      wrapped.__intermediateLearningDataWrapped = true;
      window.renderSources = wrapped;
      try{ renderSources = wrapped; }catch(err){}
    }
  }

  function wrapSyncFunction(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__intermediateLearningSyncWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(ensureSourceSection, 0);
      return result;
    };
    wrapped.__intermediateLearningSyncWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function duplicateNames(items, pick){
    var seen = {};
    var dupes = [];
    (items || []).forEach(function(item){
      var key = normalize(pick(item));
      if(!key) return;
      if(seen[key] && dupes.indexOf(pick(item)) === -1) dupes.push(pick(item));
      seen[key] = true;
    });
    return dupes;
  }

  function installDebugHelper(){
    window.debugDuplicateLearningData = function(){
      var lang = currentLangKey();
      var glossaryItems = typeof getGlossaryItems === 'function' ? (getGlossaryItems() || []) : [];
      var sourceItems = typeof getSourceItems === 'function' ? (getSourceItems() || []) : [];
      return {
        currentLocale: lang,
        duplicateGlossaryTerms: duplicateNames(glossaryItems, function(item){ return item && item[0]; }),
        duplicateSourceResources: duplicateNames(sourceItems, function(item){ return item && (item[2] || item[1]); }),
        addedGlossaryTerms: summary.newTermsAdded.slice(),
        skippedExistingTerms: summary.existingTermsSkipped.slice(),
        addedSourceResources: summary.newSourcesAdded.slice(),
        skippedExistingSources: summary.existingSourcesSkipped.slice(),
        relatedLessonsOnly: summary.relatedOnly.slice(),
        relatedLessonsCoverage: SOURCE_ROWS.map(function(row){ return {lesson:row.lesson, resource:row.titles.en, terms:row.terms}; }),
        missingTranslations: {
          glossary: TERM_ROWS.filter(function(row){ return LANGS.some(function(lang){ return !row.terms[lang] || !row.defs[lang]; }); }).map(function(row){ return row.id; }),
          sources: SOURCE_ROWS.filter(function(row){ return LANGS.some(function(lang){ return !row.titles[lang] || !row.descs[lang]; }); }).map(function(row){ return row.id; })
        }
      };
    };
    window.__intermediateLearningDataSummary = summary;
    window.__intermediateGlossaryTermRows = TERM_ROWS;
    window.__intermediateSourceRows = SOURCE_ROWS;
  }

  applyGlossaryTerms();
  applyExistingTermRelations();
  applySourceResources();
  patchRenderLesson();
  patchRenderSources();
  wrapSyncFunction('showPage');
  wrapSyncFunction('setLang');
  installDebugHelper();
  setTimeout(ensureSourceSection, 0);
})();
