(function(){
  if(typeof window === 'undefined' || window.__caVisualI18nLesson67_20260517) return;
  window.__caVisualI18nLesson67_20260517 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function getLang(){
    var raw = (typeof currentLang === 'string' && currentLang) ? currentLang : (document.documentElement.lang || 'en');
    raw = String(raw || 'en').toLowerCase();
    if(raw === 'pt-br') return 'br';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw.indexOf('pt') === 0) return raw.indexOf('br') > -1 ? 'br' : 'pt';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return LANGS.indexOf(raw) > -1 ? raw : 'en';
  }

  function lessonAt(index){
    var code = getLang();
    if(typeof lessons !== 'undefined' && lessons){
      return (lessons[code] && lessons[code][index]) || (lessons.en && lessons.en[index]) || {};
    }
    return {};
  }

  var TEXT = {
    en: {
      c:{buy:'Review amount, fee, and payment method together.',network:'Match the network before focusing on the asset name.',transfer:'Check address, network, and test amount before confirming.',custody:'Compare convenience and direct control side by side.',site:'Read the full domain, not just the familiar design.',support:'Be careful when support contacts you first.',seed:'If a page asks for recovery words, stop immediately.',address:'Do not trust look-alike recent addresses.',clipboard:'After pasting, confirm the address did not change.'},
      l6:{buy:{k:'First buy screen',leftK:'Pre-buy check',leftT:'Start small',leftD:'Check fee, payment method, and expected amount in one place.',checks:['Fee first','Simple first buy','Storage plan'],rightT:'Order preview',rightD:'Educational mock screen before buying',asset:'Asset',amount:'Buy amount',estimate:'Estimated amount',fee:'Fee',payment:'Payment method',method:'Bank / Card',note:'Check expected amount and fee together.'},network:{k:'Asset transfer',leftT:'USDT transfer setup',leftD:'Even with the same asset, the network must match.',to:'Receiving wallet',wallet:'Personal wallet',amount:'Amount',warnK:'Warning',warn:'A wrong network can make the transfer fail.',rightT:'Network selection',fee:'Fee',eta:'ETA',footer:'Match the network supported by the receiving wallet.'},transfer:{k:'Final review',title:'Before confirming',steps:['Asset','Network','Address','Small test','Final review'],note:'Pause for one final review before sending.'},custody:{k:'Custody comparison',title:'Exchange custody vs self-custody',exchange:'Exchange custody',wallet:'Self-custody wallet',exchangeD:'Convenient for active trading.',walletD:'More control, more responsibility.',points:['Convenience','Control','Recovery','Long-term fit'],eVals:['High','Limited','Platform','Active use'],wVals:['Medium','High','You','Long hold']}},
      l7:{site:{k:'Site comparison',title:'Check the full domain',safe:'Official example',risk:'Risk example',url:'Address bar',connect:'Account connection',btn:'Open official source',warn:'Different domain',note:'A tiny spelling change can point to a different site.'},support:{k:'Fake support DM',title:'Support pressure pattern',bubbles:['I found your wallet issue. Act now.','For asset protection, connect your wallet.','Open this link and verify in 5 minutes.'],tags:['Pressure','Seed request','Wallet connect','DM first'],note:'Real support will not ask for recovery words.'},seed:{k:'Seed warning',title:'Recovery phrase entry blocked',sub:'Do not enter recovery words on random pages.',boxes:['word','word','word','word','word','word','word','word','word','word','word','word'],warn:'Never enter recovery words here',btn:'Close and verify'},address:{k:'Address poisoning',title:'Review recent addresses carefully',safe:'Correct address',risk:'Look-alike address',original:'Original',inserted:'Planted',note:'Compare more than the first and last characters.'},clipboard:{k:'Clipboard warning',title:'Check pasted address again',from:'Copied address',alert:'Pasted value changed',to:'Confirm after paste',note:'Compare before and after pasting.'}}
    },
    ko: {
      c:{buy:'금액, 수수료, 결제 수단을 함께 확인합니다.',network:'자산 이름보다 네트워크를 먼저 맞춥니다.',transfer:'주소, 네트워크, 소액 테스트를 확인한 뒤 전송합니다.',custody:'편의성과 통제권을 나란히 비교합니다.',site:'익숙한 디자인보다 전체 도메인을 읽으세요.',support:'먼저 연락하는 지원 계정은 특히 조심합니다.',seed:'복구 문구 입력창이 보이면 바로 멈춥니다.',address:'비슷한 최근 주소를 그대로 믿지 마세요.',clipboard:'붙여넣은 뒤 주소가 바뀌지 않았는지 확인합니다.'},
      l6:{buy:{k:'첫 구매 화면',leftK:'구매 전 확인',leftT:'소액으로 시작',leftD:'수수료, 결제 수단, 예상 수량을 한 화면에서 확인하세요.',checks:['수수료 먼저 확인','첫 구매는 단순하게','보관 계획 정하기'],rightT:'주문 미리보기',rightD:'구매 전 교육용 예시 화면',asset:'자산',amount:'구매 금액',estimate:'예상 수량',fee:'수수료',payment:'결제 수단',method:'계좌 / 카드',note:'예상 수량과 수수료를 같이 확인하세요.'},network:{k:'자산 전송',leftT:'USDT 전송 설정',leftD:'자산 이름이 같아도 네트워크는 다시 확인해야 합니다.',to:'받는 지갑',wallet:'개인 지갑',amount:'금액',warnK:'경고',warn:'잘못된 네트워크면 전송이 실패할 수 있습니다.',rightT:'네트워크 선택',fee:'수수료',eta:'예상 시간',footer:'받는 지갑이 지원하는 네트워크와 맞추세요.'},transfer:{k:'최종 확인',title:'확정하기 전에',steps:['자산','네트워크','주소','소액 테스트','최종 확인'],note:'보내기 전 마지막으로 한 번 더 멈춰 확인하세요.'},custody:{k:'보관 방법 비교',title:'거래소 보관 vs 자기 보관',exchange:'거래소 보관',wallet:'자기 보관 지갑',exchangeD:'자주 사고팔 때 편합니다.',walletD:'통제권이 크지만 책임도 큽니다.',points:['편의성','통제권','복구','장기 보관'],eVals:['높음','제한적','플랫폼','자주 사용'],wVals:['보통','높음','본인','장기 보관']}},
      l7:{site:{k:'사이트 비교',title:'전체 도메인 확인',safe:'정상 예시',risk:'위험 예시',url:'주소창',connect:'계정 연결',btn:'공식 링크 열기',warn:'다른 도메인',note:'철자 하나만 달라도 다른 사이트일 수 있습니다.'},support:{k:'가짜 지원 DM',title:'압박하는 지원 패턴',bubbles:['지갑 문제가 확인됐습니다. 지금 바로 연결하세요.','자산 보호를 위해 복구 문구를 제출하세요.','이 링크로 들어가 5분 안에 확인하세요.'],tags:['압박','시드 요구','지갑 연결','DM 접근'],note:'진짜 지원은 복구 문구를 요구하지 않습니다.'},seed:{k:'시드 경고',title:'복구 문구 입력 금지',sub:'임의 페이지에 복구 단어를 입력하지 마세요.',boxes:['단어','단어','단어','단어','단어','단어','단어','단어','단어','단어','단어','단어'],warn:'아무 페이지에도 복구 문구 입력 금지',btn:'닫고 확인'},address:{k:'주소 오염',title:'최근 주소를 다시 보기',safe:'정상 주소',risk:'위험 주소',original:'원래 주소',inserted:'새 주소',note:'앞뒤 몇 글자보다 전체 주소를 비교하세요.'},clipboard:{k:'클립보드 경고',title:'붙여넣은 주소 다시 확인',from:'복사한 주소',alert:'붙여넣기 값이 바뀜',to:'붙여넣은 주소 확인',note:'붙여넣기 전후 주소가 같은지 다시 확인합니다.'}}
    },
    th: {
      c:{buy:'ตรวจจำนวน ค่าธรรมเนียม และวิธีจ่ายพร้อมกัน',network:'จับคู่เครือข่ายก่อนดูชื่อสินทรัพย์',transfer:'ตรวจที่อยู่ เครือข่าย และยอดทดสอบก่อนยืนยัน',custody:'เปรียบเทียบความสะดวกกับการควบคุม',site:'อ่านโดเมนทั้งหมด ไม่ใช่แค่หน้าตาที่คุ้นเคย',support:'ระวังเมื่อฝ่ายสนับสนุนติดต่อมาก่อน',seed:'ถ้าเห็นช่องคำกู้คืน ให้หยุดทันที',address:'อย่าเชื่อที่อยู่ล่าสุดที่หน้าตาคล้ายกัน',clipboard:'หลังวาง ตรวจว่าที่อยู่ไม่เปลี่ยน'},
      l6:{buy:{k:'หน้าซื้อครั้งแรก',leftK:'เช็กก่อนซื้อ',leftT:'เริ่มจำนวนน้อย',leftD:'ตรวจค่าธรรมเนียม วิธีจ่าย และจำนวนที่คาดว่าจะได้รับ',checks:['เช็กค่าธรรมเนียม','ซื้อแบบง่าย','วางแผนเก็บ'],rightT:'พรีวิวคำสั่ง',rightD:'หน้าจำลองเพื่อเรียนรู้ก่อนซื้อ',asset:'สินทรัพย์',amount:'จำนวนซื้อ',estimate:'จำนวนที่ได้',fee:'ค่าธรรมเนียม',payment:'วิธีจ่าย',method:'บัญชี / บัตร',note:'ดูจำนวนที่ได้และค่าธรรมเนียมพร้อมกัน'},network:{k:'ตั้งค่าโอน',leftT:'ตั้งค่าโอน USDT',leftD:'แม้เป็นสินทรัพย์เดียวกัน เครือข่ายต้องตรงกัน',to:'กระเป๋ารับ',wallet:'กระเป๋าส่วนตัว',amount:'จำนวน',warnK:'เตือน',warn:'เครือข่ายผิดอาจทำให้โอนล้มเหลว',rightT:'เลือกเครือข่าย',fee:'ค่าธรรมเนียม',eta:'เวลา',footer:'เลือกเครือข่ายที่ปลายทางรองรับ'},transfer:{k:'ตรวจสุดท้าย',title:'ก่อนยืนยัน',steps:['สินทรัพย์','เครือข่าย','ที่อยู่','ทดสอบน้อย','ตรวจสุดท้าย'],note:'หยุดตรวจอีกครั้งก่อนส่ง'},custody:{k:'เทียบการเก็บ',title:'เก็บบน exchange vs เก็บเอง',exchange:'เก็บบน exchange',wallet:'เก็บด้วย wallet',exchangeD:'สะดวกเมื่อซื้อขายบ่อย',walletD:'ควบคุมมากขึ้น แต่รับผิดชอบมากขึ้น',points:['สะดวก','ควบคุม','กู้คืน','ถือยาว'],eVals:['สูง','จำกัด','แพลตฟอร์ม','ใช้บ่อย'],wVals:['กลาง','สูง','คุณ','ถือยาว']}},
      l7:{site:{k:'เทียบเว็บไซต์',title:'ตรวจโดเมนเต็ม',safe:'ตัวอย่างทางการ',risk:'ตัวอย่างเสี่ยง',url:'แถบที่อยู่',connect:'เชื่อมบัญชี',btn:'เปิดแหล่งทางการ',warn:'โดเมนต่างกัน',note:'สะกดต่างนิดเดียวก็อาจเป็นคนละเว็บ'},support:{k:'DM ปลอม',title:'รูปแบบกดดัน',bubbles:['พบปัญหากระเป๋า รีบเชื่อมต่อ','เพื่อป้องกันสินทรัพย์ ให้ส่งคำกู้คืน','เปิดลิงก์นี้และยืนยันใน 5 นาที'],tags:['กดดัน','ขอ seed','เชื่อม wallet','DM ก่อน'],note:'ฝ่ายสนับสนุนจริงจะไม่ขอคำกู้คืน'},seed:{k:'เตือน seed',title:'ห้ามกรอกคำกู้คืน',sub:'อย่ากรอกคำกู้คืนบนหน้าที่ไม่แน่ใจ',boxes:['คำ','คำ','คำ','คำ','คำ','คำ','คำ','คำ','คำ','คำ','คำ','คำ'],warn:'ห้ามกรอกคำกู้คืนที่นี่',btn:'ปิดและตรวจ'},address:{k:'Address poisoning',title:'ตรวจที่อยู่ล่าสุด',safe:'ที่อยู่ถูก',risk:'ที่อยู่คล้าย',original:'เดิม',inserted:'แทรก',note:'เปรียบเทียบมากกว่าตัวหน้าและท้าย'},clipboard:{k:'เตือนคลิปบอร์ด',title:'ตรวจที่อยู่หลังวาง',from:'ที่คัดลอก',alert:'ค่าที่วางเปลี่ยน',to:'ตรวจหลังวาง',note:'เปรียบเทียบก่อนและหลังวาง'}}
    },
    id: {
      c:{buy:'Periksa jumlah, biaya, dan metode bayar bersama.',network:'Cocokkan jaringan sebelum nama aset.',transfer:'Cek alamat, jaringan, dan tes kecil sebelum konfirmasi.',custody:'Bandingkan kenyamanan dan kontrol.',site:'Baca domain lengkap, bukan hanya desain.',support:'Hati-hati jika support menghubungi dulu.',seed:'Jika diminta recovery words, berhenti.',address:'Jangan percaya alamat terbaru yang mirip.',clipboard:'Setelah paste, pastikan alamat tidak berubah.'},
      l6:{buy:{k:'Layar beli pertama',leftK:'Cek sebelum beli',leftT:'Mulai kecil',leftD:'Cek biaya, metode bayar, dan estimasi jumlah dalam satu layar.',checks:['Cek biaya','Beli sederhana','Rencana simpan'],rightT:'Pratinjau order',rightD:'Mock edukasi sebelum membeli',asset:'Aset',amount:'Jumlah beli',estimate:'Estimasi',fee:'Biaya',payment:'Metode bayar',method:'Bank / Kartu',note:'Cek estimasi dan biaya bersama.'},network:{k:'Transfer aset',leftT:'Pengaturan kirim USDT',leftD:'Walau aset sama, jaringan harus cocok.',to:'Wallet penerima',wallet:'Wallet pribadi',amount:'Jumlah',warnK:'Peringatan',warn:'Jaringan salah bisa membuat transfer gagal.',rightT:'Pilih jaringan',fee:'Biaya',eta:'ETA',footer:'Cocokkan dengan jaringan wallet penerima.'},transfer:{k:'Cek akhir',title:'Sebelum konfirmasi',steps:['Aset','Jaringan','Alamat','Tes kecil','Cek akhir'],note:'Berhenti sebentar untuk cek akhir sebelum kirim.'},custody:{k:'Bandingkan custody',title:'Custody exchange vs self-custody',exchange:'Custody exchange',wallet:'Self-custody wallet',exchangeD:'Praktis untuk trading aktif.',walletD:'Kontrol lebih besar, tanggung jawab lebih besar.',points:['Praktis','Kontrol','Pemulihan','Jangka panjang'],eVals:['Tinggi','Terbatas','Platform','Sering pakai'],wVals:['Sedang','Tinggi','Anda','Simpan lama']}},
      l7:{site:{k:'Perbandingan situs',title:'Cek domain penuh',safe:'Contoh resmi',risk:'Contoh risiko',url:'Address bar',connect:'Koneksi akun',btn:'Buka sumber resmi',warn:'Domain berbeda',note:'Satu huruf berbeda bisa menjadi situs lain.'},support:{k:'DM support palsu',title:'Pola tekanan support',bubbles:['Saya menemukan masalah wallet. Bertindak sekarang.','Untuk lindungi aset, hubungkan wallet.','Buka link ini dan verifikasi 5 menit.'],tags:['Tekanan','Minta seed','Hubungkan wallet','DM dulu'],note:'Support asli tidak meminta recovery words.'},seed:{k:'Peringatan seed',title:'Jangan isi recovery phrase',sub:'Jangan masukkan recovery words di halaman acak.',boxes:['kata','kata','kata','kata','kata','kata','kata','kata','kata','kata','kata','kata'],warn:'Jangan isi recovery words di sini',btn:'Tutup dan cek'},address:{k:'Address poisoning',title:'Tinjau alamat terbaru',safe:'Alamat benar',risk:'Alamat mirip',original:'Asli',inserted:'Disisipkan',note:'Bandingkan lebih dari huruf awal dan akhir.'},clipboard:{k:'Peringatan clipboard',title:'Cek alamat setelah paste',from:'Alamat disalin',alert:'Nilai paste berubah',to:'Cek setelah paste',note:'Bandingkan sebelum dan sesudah paste.'}}
    },
    pt: {
      c:{buy:'Revise valor, taxa e pagamento juntos.',network:'Confira a rede antes do nome do ativo.',transfer:'Confira endereço, rede e teste pequeno antes de confirmar.',custody:'Compare praticidade e controle.',site:'Leia o domínio inteiro, não só o visual.',support:'Cuidado quando o suporte vem primeiro.',seed:'Se pedir palavras de recuperação, pare.',address:'Não confie em endereços recentes parecidos.',clipboard:'Depois de colar, confirme que o endereço não mudou.'},
      l6:{buy:{k:'Tela da primeira compra',leftK:'Checar antes',leftT:'Comece pequeno',leftD:'Veja taxa, pagamento e quantidade estimada em uma tela.',checks:['Taxa primeiro','Compra simples','Plano de guarda'],rightT:'Prévia do pedido',rightD:'Tela educativa antes da compra',asset:'Ativo',amount:'Valor da compra',estimate:'Estimado',fee:'Taxa',payment:'Pagamento',method:'Banco / Cartão',note:'Confira estimado e taxa juntos.'},network:{k:'Transferência',leftT:'Configurar envio USDT',leftD:'Mesmo ativo: a rede precisa combinar.',to:'Carteira destino',wallet:'Carteira pessoal',amount:'Valor',warnK:'Aviso',warn:'Rede errada pode fazer a transferência falhar.',rightT:'Escolher rede',fee:'Taxa',eta:'Tempo',footer:'Combine com a rede aceita pela carteira destino.'},transfer:{k:'Revisão final',title:'Antes de confirmar',steps:['Ativo','Rede','Endereço','Teste pequeno','Revisão final'],note:'Pare por um instante antes de enviar.'},custody:{k:'Comparar guarda',title:'Exchange vs self-custody',exchange:'Guarda na exchange',wallet:'Carteira própria',exchangeD:'Prática para negociar com frequência.',walletD:'Mais controle, mais responsabilidade.',points:['Praticidade','Controle','Recuperação','Longo prazo'],eVals:['Alta','Limitado','Plataforma','Uso ativo'],wVals:['Média','Alta','Você','Guardar']}},
      l7:{site:{k:'Comparar site',title:'Confira o domínio completo',safe:'Exemplo oficial',risk:'Exemplo de risco',url:'Barra de endereço',connect:'Conectar conta',btn:'Abrir fonte oficial',warn:'Domínio diferente',note:'Uma letra diferente pode levar a outro site.'},support:{k:'DM de suporte falso',title:'Pressão de suporte falso',bubbles:['Achei um problema na sua carteira. Aja agora.','Para proteger ativos, conecte a carteira.','Abra este link e confirme em 5 minutos.'],tags:['Pressão','Pede seed','Conecta wallet','DM primeiro'],note:'Suporte real não pede palavras de recuperação.'},seed:{k:'Aviso de seed',title:'Não digite frase de recuperação',sub:'Não informe palavras de recuperação em páginas aleatórias.',boxes:['palavra','palavra','palavra','palavra','palavra','palavra','palavra','palavra','palavra','palavra','palavra','palavra'],warn:'Nunca digite palavras aqui',btn:'Fechar e verificar'},address:{k:'Address poisoning',title:'Revise endereços recentes',safe:'Endereço correto',risk:'Endereço parecido',original:'Original',inserted:'Inserido',note:'Compare mais que o início e o fim.'},clipboard:{k:'Aviso clipboard',title:'Confira o endereço colado',from:'Endereço copiado',alert:'Valor colado mudou',to:'Confirmar após colar',note:'Compare antes e depois de colar.'}}
    },
    tr: {
      c:{buy:'Tutar, ücret ve ödeme yöntemini birlikte kontrol edin.',network:'Varlık adından önce ağı eşleştirin.',transfer:'Onaydan önce adres, ağ ve küçük testi kontrol edin.',custody:'Kolaylık ve kontrolü yan yana karşılaştırın.',site:'Sadece tasarımı değil tam domaini okuyun.',support:'Destek önce size yazıyorsa dikkat edin.',seed:'Kurtarma kelimeleri istenirse durun.',address:'Benzer son adreslere güvenmeyin.',clipboard:'Yapıştırdıktan sonra adresin değişmediğini kontrol edin.'},
      l6:{buy:{k:'İlk alım ekranı',leftK:'Alım öncesi',leftT:'Küçük başla',leftD:'Ücreti, ödeme yöntemini ve beklenen miktarı aynı ekranda kontrol edin.',checks:['Önce ücret','Basit alım','Saklama planı'],rightT:'Emir önizleme',rightD:'Satın alma öncesi eğitim ekranı',asset:'Varlık',amount:'Alım tutarı',estimate:'Tahmini miktar',fee:'Ücret',payment:'Ödeme',method:'Banka / Kart',note:'Tahmini miktarı ve ücreti birlikte kontrol edin.'},network:{k:'Varlık transferi',leftT:'USDT gönderim ayarı',leftD:'Varlık aynı olsa bile ağ eşleşmelidir.',to:'Alıcı cüzdan',wallet:'Kişisel cüzdan',amount:'Tutar',warnK:'Uyarı',warn:'Yanlış ağ transferi başarısız yapabilir.',rightT:'Ağ seçimi',fee:'Ücret',eta:'Süre',footer:'Alıcı cüzdanın desteklediği ağla eşleştirin.'},transfer:{k:'Son kontrol',title:'Onaylamadan önce',steps:['Varlık','Ağ','Adres','Küçük test','Son kontrol'],note:'Göndermeden önce son kez durup kontrol edin.'},custody:{k:'Saklama karşılaştırması',title:'Exchange saklama vs self-custody',exchange:'Exchange saklama',wallet:'Kendi cüzdanın',exchangeD:'Sık işlem için kullanışlıdır.',walletD:'Daha çok kontrol, daha çok sorumluluk.',points:['Kolaylık','Kontrol','Kurtarma','Uzun vade'],eVals:['Yüksek','Sınırlı','Platform','Aktif kullanım'],wVals:['Orta','Yüksek','Siz','Uzun saklama']}},
      l7:{site:{k:'Site karşılaştırması',title:'Tam domaini kontrol et',safe:'Resmi örnek',risk:'Riskli örnek',url:'Adres çubuğu',connect:'Hesap bağlantısı',btn:'Resmi kaynağı aç',warn:'Farklı domain',note:'Tek harf farkı başka siteye götürebilir.'},support:{k:'Sahte destek DM',title:'Sahte destek baskısı',bubbles:['Cüzdan sorununuzu buldum. Hemen işlem yapın.','Varlık koruması için cüzdanı bağlayın.','Bu linki açıp 5 dakika içinde doğrulayın.'],tags:['Baskı','Seed ister','Cüzdan bağlar','İlk DM'],note:'Gerçek destek kurtarma kelimeleri istemez.'},seed:{k:'Seed uyarısı',title:'Kurtarma kelimelerini girme',sub:'Rastgele sayfalara kurtarma kelimeleri yazmayın.',boxes:['kelime','kelime','kelime','kelime','kelime','kelime','kelime','kelime','kelime','kelime','kelime','kelime'],warn:'Buraya kelime girme',btn:'Kapat ve doğrula'},address:{k:'Address poisoning',title:'Son adresleri dikkatle incele',safe:'Doğru adres',risk:'Benzer adres',original:'Orijinal',inserted:'Eklenen',note:'Sadece ilk ve son karaktere bakmayın.'},clipboard:{k:'Clipboard uyarısı',title:'Yapıştırılan adresi tekrar kontrol et',from:'Kopyalanan adres',alert:'Yapıştırılan değer değişti',to:'Yapıştırınca kontrol',note:'Yapıştırmadan önce ve sonra karşılaştırın.'}}
    },
    es: {
      c:{buy:'Revisa importe, comisión y pago juntos.',network:'Primero coincide la red, luego el activo.',transfer:'Revisa dirección, red y prueba pequeña antes de confirmar.',custody:'Compara comodidad y control.',site:'Lee el dominio completo, no solo el diseño.',support:'Cuidado si soporte te contacta primero.',seed:'Si pide palabras de recuperación, detente.',address:'No confíes en direcciones recientes parecidas.',clipboard:'Después de pegar, confirma que la dirección no cambió.'},
      l6:{buy:{k:'Pantalla de primera compra',leftK:'Revisar antes',leftT:'Empieza pequeño',leftD:'Revisa comisión, pago y cantidad estimada en una pantalla.',checks:['Comisión primero','Compra simple','Plan de custodia'],rightT:'Vista del pedido',rightD:'Pantalla educativa antes de comprar',asset:'Activo',amount:'Importe',estimate:'Estimado',fee:'Comisión',payment:'Pago',method:'Banco / Tarjeta',note:'Revisa estimado y comisión juntos.'},network:{k:'Transferencia',leftT:'Configurar envío USDT',leftD:'Aunque sea el mismo activo, la red debe coincidir.',to:'Wallet receptora',wallet:'Wallet personal',amount:'Importe',warnK:'Advertencia',warn:'Una red incorrecta puede fallar.',rightT:'Seleccionar red',fee:'Comisión',eta:'Tiempo',footer:'Coincide con la red aceptada por la wallet.'},transfer:{k:'Revisión final',title:'Antes de confirmar',steps:['Activo','Red','Dirección','Prueba pequeña','Revisión final'],note:'Pausa para una última revisión antes de enviar.'},custody:{k:'Comparar custodia',title:'Exchange vs self-custody',exchange:'Custodia exchange',wallet:'Wallet propia',exchangeD:'Cómoda para operar seguido.',walletD:'Más control, más responsabilidad.',points:['Comodidad','Control','Recuperación','Largo plazo'],eVals:['Alta','Limitado','Plataforma','Uso activo'],wVals:['Media','Alta','Tú','Guardar']}},
      l7:{site:{k:'Comparar sitio',title:'Verifica el dominio completo',safe:'Ejemplo oficial',risk:'Ejemplo de riesgo',url:'Barra de dirección',connect:'Conexión de cuenta',btn:'Abrir fuente oficial',warn:'Dominio distinto',note:'Una letra distinta puede llevar a otro sitio.'},support:{k:'DM de soporte falso',title:'Presión de soporte falso',bubbles:['Encontré un problema en tu wallet. Actúa ahora.','Para proteger activos, conecta tu wallet.','Abre este enlace y verifica en 5 minutos.'],tags:['Presión','Pide seed','Conecta wallet','DM primero'],note:'El soporte real no pide palabras de recuperación.'},seed:{k:'Advertencia seed',title:'No ingreses palabras de recuperación',sub:'No escribas palabras de recuperación en páginas aleatorias.',boxes:['palabra','palabra','palabra','palabra','palabra','palabra','palabra','palabra','palabra','palabra','palabra','palabra'],warn:'No escribas palabras aquí',btn:'Cerrar y verificar'},address:{k:'Address poisoning',title:'Revisa direcciones recientes',safe:'Dirección correcta',risk:'Dirección parecida',original:'Original',inserted:'Insertada',note:'Compara más que el inicio y el final.'},clipboard:{k:'Aviso clipboard',title:'Comprueba la dirección pegada',from:'Dirección copiada',alert:'El valor pegado cambió',to:'Confirmar tras pegar',note:'Compara antes y después de pegar.'}}
    },
    ar: {
      c:{buy:'راجع المبلغ والرسوم وطريقة الدفع معاً.',network:'طابق الشبكة قبل اسم الأصل.',transfer:'افحص العنوان والشبكة واختباراً صغيراً قبل التأكيد.',custody:'قارن السهولة والتحكم جنباً إلى جنب.',site:'اقرأ النطاق الكامل لا التصميم فقط.',support:'احذر عندما يبدأ الدعم بالتواصل معك.',seed:'إذا طُلبت كلمات الاسترداد فتوقف.',address:'لا تثق بعناوين حديثة متشابهة.',clipboard:'بعد اللصق تأكد أن العنوان لم يتغير.'},
      l6:{buy:{k:'شاشة أول شراء',leftK:'فحص قبل الشراء',leftT:'ابدأ بمبلغ صغير',leftD:'راجع الرسوم وطريقة الدفع والكمية المتوقعة في شاشة واحدة.',checks:['الرسوم أولاً','شراء بسيط','خطة حفظ'],rightT:'معاينة الطلب',rightD:'شاشة تعليمية قبل الشراء',asset:'الأصل',amount:'مبلغ الشراء',estimate:'الكمية المتوقعة',fee:'الرسوم',payment:'طريقة الدفع',method:'بنك / بطاقة',note:'راجع الكمية المتوقعة والرسوم معاً.'},network:{k:'تحويل أصل',leftT:'إعداد إرسال USDT',leftD:'حتى مع نفس الأصل يجب أن تتطابق الشبكة.',to:'المحفظة المستلمة',wallet:'محفظة شخصية',amount:'المبلغ',warnK:'تحذير',warn:'الشبكة الخطأ قد تفشل التحويل.',rightT:'اختيار الشبكة',fee:'الرسوم',eta:'الوقت',footer:'طابقها مع الشبكة التي تدعمها المحفظة المستلمة.'},transfer:{k:'فحص نهائي',title:'قبل التأكيد',steps:['الأصل','الشبكة','العنوان','اختبار صغير','فحص نهائي'],note:'توقف للحظة وراجع مرة أخيرة قبل الإرسال.'},custody:{k:'مقارنة الحفظ',title:'حفظ المنصة مقابل الحفظ الذاتي',exchange:'حفظ في منصة',wallet:'محفظة ذاتية',exchangeD:'مناسب للتداول المتكرر.',walletD:'تحكم أكبر ومسؤولية أكبر.',points:['سهولة','تحكم','استرداد','طويل الأجل'],eVals:['عالٍ','محدود','المنصة','استخدام نشط'],wVals:['متوسط','عالٍ','أنت','حفظ طويل']}},
      l7:{site:{k:'مقارنة الموقع',title:'تحقق من النطاق الكامل',safe:'مثال رسمي',risk:'مثال خطر',url:'شريط العنوان',connect:'ربط الحساب',btn:'افتح المصدر الرسمي',warn:'نطاق مختلف',note:'اختلاف حرف واحد قد يعني موقعاً آخر.'},support:{k:'رسالة دعم مزيفة',title:'نمط ضغط الدعم',bubbles:['وجدت مشكلة في محفظتك. تصرف الآن.','لحماية الأصول، اربط محفظتك.','افتح هذا الرابط وتحقق خلال 5 دقائق.'],tags:['ضغط','طلب seed','ربط محفظة','رسالة أولاً'],note:'الدعم الحقيقي لا يطلب كلمات الاسترداد.'},seed:{k:'تحذير seed',title:'لا تدخل عبارة الاسترداد',sub:'لا تكتب كلمات الاسترداد في صفحات عشوائية.',boxes:['كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة','كلمة'],warn:'لا تكتب الكلمات هنا',btn:'أغلق وتحقق'},address:{k:'تلويث العنوان',title:'راجع العناوين الحديثة بعناية',safe:'عنوان صحيح',risk:'عنوان مشابه',original:'الأصلي',inserted:'مزروع',note:'قارن أكثر من أول وآخر الأحرف.'},clipboard:{k:'تحذير الحافظة',title:'تحقق من العنوان الملصق',from:'العنوان المنسوخ',alert:'القيمة الملصقة تغيرت',to:'تحقق بعد اللصق',note:'قارن قبل اللصق وبعده.'}}
    },
    vi: {
      c:{buy:'Kiểm tra số tiền, phí và phương thức thanh toán cùng nhau.',network:'Khớp mạng trước khi nhìn tên tài sản.',transfer:'Kiểm tra địa chỉ, mạng và thử nhỏ trước khi xác nhận.',custody:'So sánh tiện lợi và quyền kiểm soát.',site:'Đọc toàn bộ tên miền, không chỉ giao diện quen.',support:'Cẩn thận khi hỗ trợ liên hệ trước.',seed:'Nếu yêu cầu từ khôi phục, hãy dừng lại.',address:'Đừng tin địa chỉ gần đây trông giống.',clipboard:'Sau khi dán, xác nhận địa chỉ không đổi.'},
      l6:{buy:{k:'Màn hình mua lần đầu',leftK:'Kiểm tra trước mua',leftT:'Bắt đầu nhỏ',leftD:'Kiểm tra phí, cách trả và lượng dự kiến trên cùng màn hình.',checks:['Xem phí trước','Mua đơn giản','Kế hoạch lưu giữ'],rightT:'Xem trước lệnh',rightD:'Màn hình mô phỏng để học trước khi mua',asset:'Tài sản',amount:'Số tiền mua',estimate:'Ước tính nhận',fee:'Phí',payment:'Thanh toán',method:'Ngân hàng / Thẻ',note:'Kiểm tra lượng nhận và phí cùng lúc.'},network:{k:'Chuyển tài sản',leftT:'Cài đặt gửi USDT',leftD:'Dù cùng tài sản, mạng vẫn phải khớp.',to:'Ví nhận',wallet:'Ví cá nhân',amount:'Số tiền',warnK:'Cảnh báo',warn:'Sai mạng có thể làm gửi thất bại.',rightT:'Chọn mạng',fee:'Phí',eta:'Thời gian',footer:'Khớp với mạng ví nhận hỗ trợ.'},transfer:{k:'Kiểm tra cuối',title:'Trước khi xác nhận',steps:['Tài sản','Mạng','Địa chỉ','Thử nhỏ','Kiểm tra cuối'],note:'Dừng lại để kiểm tra lần cuối trước khi gửi.'},custody:{k:'So sánh lưu giữ',title:'Sàn lưu giữ vs tự lưu giữ',exchange:'Lưu trên sàn',wallet:'Tự lưu giữ',exchangeD:'Tiện khi giao dịch thường xuyên.',walletD:'Nhiều quyền kiểm soát, nhiều trách nhiệm hơn.',points:['Tiện lợi','Kiểm soát','Khôi phục','Dài hạn'],eVals:['Cao','Giới hạn','Nền tảng','Dùng thường'],wVals:['Vừa','Cao','Bạn','Giữ lâu']}},
      l7:{site:{k:'So sánh website',title:'Kiểm tra toàn bộ tên miền',safe:'Ví dụ chính thức',risk:'Ví dụ rủi ro',url:'Thanh địa chỉ',connect:'Kết nối tài khoản',btn:'Mở nguồn chính thức',warn:'Tên miền khác',note:'Khác một ký tự có thể là website khác.'},support:{k:'DM hỗ trợ giả',title:'Mẫu gây áp lực',bubbles:['Tôi thấy ví của bạn có lỗi. Hãy làm ngay.','Để bảo vệ tài sản, hãy kết nối ví.','Mở liên kết này và xác minh trong 5 phút.'],tags:['Áp lực','Đòi seed','Kết nối ví','DM trước'],note:'Hỗ trợ thật không yêu cầu từ khôi phục.'},seed:{k:'Cảnh báo seed',title:'Không nhập từ khôi phục',sub:'Không nhập từ khôi phục trên trang lạ.',boxes:['từ','từ','từ','từ','từ','từ','từ','từ','từ','từ','từ','từ'],warn:'Không nhập từ ở đây',btn:'Đóng và xác minh'},address:{k:'Đầu độc địa chỉ',title:'Xem kỹ địa chỉ gần đây',safe:'Địa chỉ đúng',risk:'Địa chỉ giống',original:'Gốc',inserted:'Cài vào',note:'So sánh nhiều hơn ký tự đầu và cuối.'},clipboard:{k:'Cảnh báo clipboard',title:'Kiểm tra địa chỉ đã dán',from:'Địa chỉ đã sao chép',alert:'Giá trị dán đã đổi',to:'Xác nhận sau khi dán',note:'So sánh trước và sau khi dán.'}}
    },
    ha: {
      c:{buy:'Duba kudi, fee, da hanyar biya tare.',network:'Daidaita network kafin sunan asset.',transfer:'Duba address, network, da karamin gwaji kafin tabbatarwa.',custody:'Kwatanta sauki da iko gefe da gefe.',site:'Karanta cikakken domain, ba zane kawai ba.',support:'Yi hankali idan support ya fara tuntubarka.',seed:'Idan an nemi recovery words, tsaya.',address:'Kada ka yarda da adireshin baya mai kama.',clipboard:'Bayan liqa, tabbatar address bai canza ba.'},
      l6:{buy:{k:'Allon sayen farko',leftK:'Duba kafin saya',leftT:'Fara da kadan',leftD:'Duba fee, hanyar biya, da adadin da ake tsammani a wuri daya.',checks:['Fee da farko','Saye mai sauki','Tsarin ajiya'],rightT:'Duba oda',rightD:'Allon koyo kafin saya',asset:'Asset',amount:'Kudin saya',estimate:'Abin da za a samu',fee:'Fee',payment:'Biya',method:'Banki / Kati',note:'Duba abin da za a samu da fee tare.'},network:{k:'Aika asset',leftT:'Saita aika USDT',leftD:'Ko asset daya ne, network dole ya dace.',to:'Wallet mai karba',wallet:'Wallet naka',amount:'Kudi',warnK:'Gargadi',warn:'Network kuskure na iya hana aikawa.',rightT:'Zabi network',fee:'Fee',eta:'Lokaci',footer:'Daidaita da network din wallet mai karba.'},transfer:{k:'Duba karshe',title:'Kafin tabbatarwa',steps:['Asset','Network','Address','Gwaji kadan','Duba karshe'],note:'Dakatar ka duba sau daya kafin aikawa.'},custody:{k:'Kwatanta ajiya',title:'Exchange custody vs self-custody',exchange:'Ajiya a exchange',wallet:'Ajiya da kai',exchangeD:'Yana da sauki don ciniki akai-akai.',walletD:'Iko ya fi yawa, nauyi ma ya fi yawa.',points:['Sauki','Iko','Dawo da wallet','Dogon lokaci'],eVals:['Mai yawa','Iyaka','Platform','Amfani sosai'],wVals:['Matsakaici','Mai yawa','Kai','Ajiya dogo']}},
      l7:{site:{k:'Kwatanta site',title:'Duba cikakken domain',safe:'Misalin hukuma',risk:'Misalin hadari',url:'Address bar',connect:'Hada account',btn:'Bude tushen hukuma',warn:'Domain daban',note:'Harafi daya na iya kai ka wani site.'},support:{k:'DM support na bogi',title:'Salon matsin support',bubbles:['Na ga matsalar wallet. Yi aiki yanzu.','Don kare asset, hada wallet dinka.','Bude wannan link ka tabbatar cikin minti 5.'],tags:['Matsi','Neman seed','Hada wallet','DM farko'],note:'Support na gaske baya neman recovery words.'},seed:{k:'Gargadin seed',title:'Kada ka shigar da kalmomin dawo',sub:'Kada ka rubuta recovery words a shafi da ba ka tabbatar ba.',boxes:['kalma','kalma','kalma','kalma','kalma','kalma','kalma','kalma','kalma','kalma','kalma','kalma'],warn:'Kada ka rubuta kalmomi a nan',btn:'Rufe ka tabbatar'},address:{k:'Address poisoning',title:'Duba adireshin baya da kyau',safe:'Address daidai',risk:'Address mai kama',original:'Na asali',inserted:'An saka',note:'Kada ka duba farko da karshe kawai.'},clipboard:{k:'Gargadin clipboard',title:'Duba address bayan liqa',from:'Address da aka kwafa',alert:'Abin da aka liqa ya canza',to:'Tabbatar bayan liqa',note:'Kwatanta kafin da bayan liqa.'}}
    }
  };

  TEXT.br = TEXT.pt;

  function t(){
    return TEXT[getLang()] || TEXT.en;
  }

  function list(items, cls){
    return '<div class="' + cls + '">' + (items || []).map(function(item){
      return '<span>' + esc(item) + '</span>';
    }).join('') + '</div>';
  }

  function rows(labels, left, right){
    return (labels || []).map(function(label, i){
      return '<div class="ca-v-row"><span>' + esc(label) + '</span><strong>' + esc((left || [])[i] || '') + '</strong><em>' + esc((right || [])[i] || '') + '</em></div>';
    }).join('');
  }

  function figure(key, html, caption, extraClass){
    var rtl = getLang() === 'ar' ? ' dir="rtl"' : '';
    return '<figure class="lesson-guide-figure lesson-guide-figure-mock ' + (extraClass || 'lesson-guide-figure-side') + ' ca-v-figure ca-v-figure-' + esc(key) + '"' + rtl + '>'
      + html
      + '<figcaption class="lesson-guide-caption">' + esc(caption || '') + '</figcaption>'
      + '</figure>';
  }

  function buyVisual(c){
    var p = c.l6.buy;
    return figure('buy', '<div class="ca-v-mock ca-v-buy">'
      + '<div class="ca-v-window"><i></i><i></i><i></i><strong>' + esc(p.k) + '</strong></div>'
      + '<div class="ca-v-buy-grid">'
      + '<div class="ca-v-side-card"><span class="ca-v-kicker">' + esc(p.leftK) + '</span><h4>' + esc(p.leftT) + '</h4><p>' + esc(p.leftD) + '</p>' + list(p.checks, 'ca-v-check-list') + '</div>'
      + '<div class="ca-v-order"><h4>' + esc(p.rightT) + '</h4><p>' + esc(p.rightD) + '</p><div class="ca-v-order-grid">'
      + '<div><span>' + esc(p.asset) + '</span><strong>BTC / USDB</strong></div><div><span>' + esc(p.amount) + '</span><strong>$35.00</strong></div>'
      + '<div class="wide"><span>' + esc(p.estimate) + '</span><strong>0.00052 BTC</strong></div><div><span>' + esc(p.fee) + '</span><strong>$0.70</strong></div><div><span>' + esc(p.payment) + '</span><strong>' + esc(p.method) + '</strong></div>'
      + '</div><div class="ca-v-note">' + esc(p.note) + '</div></div></div></div>', c.c.buy, 'lesson-guide-figure-hero');
  }

  function networkVisual(c){
    var p = c.l6.network;
    var nets = [['ERC20','$6.40','5-15 min'],['TRC20','$1.10','1-3 min'],['BEP20','$0.80','1-2 min']];
    return figure('network', '<div class="ca-v-mock ca-v-network">'
      + '<div class="ca-v-transfer-card"><h4>' + esc(p.leftT) + '</h4><p>' + esc(p.leftD) + '</p><div class="ca-v-field"><span>' + esc(p.to) + '</span><strong>' + esc(p.wallet) + '</strong></div><div class="ca-v-field"><span>' + esc(p.amount) + '</span><strong>150.00 USDT</strong></div><div class="ca-v-alert"><b>' + esc(p.warnK) + '</b><span>' + esc(p.warn) + '</span></div></div>'
      + '<div class="ca-v-network-card"><h4>' + esc(p.rightT) + '</h4>' + nets.map(function(n, i){ return '<div class="ca-v-net-row' + (i === 0 ? ' active' : '') + '"><strong>' + n[0] + '</strong><span>' + esc(p.fee) + ' <b>' + n[1] + '</b></span><em>' + esc(p.eta) + ' ' + n[2] + '</em></div>'; }).join('') + '<div class="ca-v-success">' + esc(p.footer) + '</div></div>'
      + '</div>', c.c.network);
  }

  function transferVisual(c){
    var p = c.l6.transfer;
    return figure('transfer', '<div class="ca-v-mock ca-v-transfer-review"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-flow-line">' + (p.steps || []).map(function(step, i){ return '<div><b>0' + (i + 1) + '</b><span>' + esc(step) + '</span></div>'; }).join('') + '</div><p class="ca-v-note">' + esc(p.note) + '</p></div>', c.c.transfer);
  }

  function custodyVisual(c){
    var p = c.l6.custody;
    return figure('custody', '<div class="ca-v-mock ca-v-custody"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-custody-grid"><div class="ca-v-custody-card"><strong>' + esc(p.exchange) + '</strong><p>' + esc(p.exchangeD) + '</p>' + rows(p.points, p.eVals, []) + '</div><div class="ca-v-custody-card alt"><strong>' + esc(p.wallet) + '</strong><p>' + esc(p.walletD) + '</p>' + rows(p.points, p.wVals, []) + '</div></div></div>', c.c.custody);
  }

  function siteVisual(c){
    var p = c.l7.site;
    return figure('site', '<div class="ca-v-mock ca-v-site"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-site-grid"><div class="ca-v-browser safe"><b>' + esc(p.safe) + '</b><div class="ca-v-url"><span>' + esc(p.url) + '</span><strong>https://vault.example.com</strong></div><div class="ca-v-login"><span>' + esc(p.connect) + '</span><i></i><i></i><button>' + esc(p.btn) + '</button></div></div><div class="ca-v-browser risk"><b>' + esc(p.risk) + '</b><div class="ca-v-url danger"><span>' + esc(p.url) + '</span><strong>https://vau1t-examp1e.co</strong></div><div class="ca-v-login"><span>' + esc(p.connect) + '</span><i></i><i></i><button>' + esc(p.warn) + '</button></div></div></div><p class="ca-v-note">' + esc(p.note) + '</p></div>', c.c.site);
  }

  function supportVisual(c){
    var p = c.l7.support;
    return figure('support', '<div class="ca-v-mock ca-v-dm"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-dm-grid"><div class="ca-v-chat">' + (p.bubbles || []).map(function(b, i){ return '<p class="' + (i === 1 ? 'warn' : '') + '">' + esc(b) + '</p>'; }).join('') + '</div>' + list(p.tags, 'ca-v-tag-list') + '</div><p class="ca-v-note">' + esc(p.note) + '</p></div>', c.c.support);
  }

  function seedVisual(c){
    var p = c.l7.seed;
    return figure('seed', '<div class="ca-v-mock ca-v-seed"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><p>' + esc(p.sub) + '</p><div class="ca-v-seed-grid">' + (p.boxes || []).map(function(b){ return '<i>' + esc(b) + '</i>'; }).join('') + '</div><div class="ca-v-danger">' + esc(p.warn) + '</div><button>' + esc(p.btn) + '</button></div>', c.c.seed);
  }

  function addressVisual(c){
    var p = c.l7.address;
    return figure('address', '<div class="ca-v-mock ca-v-address"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-address-bar safe"><span>' + esc(p.safe) + '</span><strong>0x7A...08Z2</strong><em>' + esc(p.original) + '</em></div><div class="ca-v-address-bar risk"><span>' + esc(p.risk) + '</span><strong>0x7A...00Z2</strong><em>' + esc(p.inserted) + '</em></div><div class="ca-v-note">' + esc(p.note) + '</div></div>', c.c.address);
  }

  function clipboardVisual(c){
    var p = c.l7.clipboard;
    return figure('clipboard', '<div class="ca-v-mock ca-v-clipboard"><span class="ca-v-kicker">' + esc(p.k) + '</span><h4>' + esc(p.title) + '</h4><div class="ca-v-clip-flow"><div><b>' + esc(p.from) + '</b><span>0x7A8B...00Z2</span></div><em>→</em><div class="danger"><b>' + esc(p.alert) + '</b><span>0x7A8B...08Z2</span></div><em>→</em><div><b>' + esc(p.to) + '</b><span>0x7A8B...00Z2</span></div></div><p class="ca-v-note">' + esc(p.note) + '</p></div>', c.c.clipboard);
  }

  function stepCards(lesson){
    var visual = lesson && Array.isArray(lesson.visual) ? lesson.visual : [];
    return '<div class="lesson-guide-step-strip">' + visual.map(function(step, index){
      return '<div class="lesson-guide-step-card"><div class="lesson-guide-step-num">0' + (index + 1) + '</div><div class="lesson-guide-step-copy"><div class="lesson-guide-step-head">' + esc(step.title || '') + '</div><div class="lesson-guide-step-body">' + esc(step.desc || '') + '</div></div></div>';
    }).join('') + '</div>';
  }

  function lesson6Top(){
    var c = t();
    var lesson = lessonAt(5);
    return '<section class="lesson-guide-stack ca-v-stack" aria-label="' + esc(c.l6.buy.k) + '">'
      + '<div class="lesson-guide-panel"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l6.buy.k) + '</span><h3>' + esc(c.l6.buy.leftT) + '</h3></div>' + buyVisual(c) + stepCards(lesson) + '</div>'
      + '<div class="lesson-guide-panel ca-v-section-panel ca-v-network-section"><div class="lesson-guide-copy ca-v-section-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l6.network.k) + '</span><h3>' + esc(c.l6.network.leftT) + '</h3></div><p class="lesson-guide-body">' + esc(c.l6.network.leftD) + '</p></div>' + networkVisual(c) + '</div>'
      + '</section>';
  }

  function lesson6Lower(){
    var c = t();
    return '<section class="lesson-guide-stack lesson-guide-stack-lower ca-v-stack" aria-label="' + esc(c.l6.transfer.k) + '">'
      + '<div class="lesson-guide-panel lesson-guide-panel-split"><div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l6.transfer.k) + '</span><h3>' + esc(c.l6.transfer.title) + '</h3></div><div class="lesson-guide-check-row">' + (c.l6.transfer.steps || []).map(function(s){ return '<span class="lesson-guide-check-chip">' + esc(s) + '</span>'; }).join('') + '</div></div>' + transferVisual(c) + '</div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">' + custodyVisual(c) + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l6.custody.k) + '</span><h3>' + esc(c.l6.custody.title) + '</h3></div><div class="lesson-guide-compare-grid"><div class="lesson-guide-compare-card is-safe"><div class="lesson-guide-compare-title">' + esc(c.l6.custody.exchange) + '</div></div><div class="lesson-guide-compare-card is-risk"><div class="lesson-guide-compare-title">' + esc(c.l6.custody.wallet) + '</div></div></div></div></div>'
      + '</section>';
  }

  function lesson7Top(){
    var c = t();
    return '<section class="lesson-guide-stack ca-v-stack" aria-label="' + esc(c.l7.site.k) + '">'
      + '<div class="lesson-guide-panel lesson-guide-panel-split"><div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l7.site.k) + '</span><h3>' + esc(c.l7.site.title) + '</h3></div></div>' + siteVisual(c) + '</div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">' + supportVisual(c) + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l7.support.k) + '</span><h3>' + esc(c.l7.support.title) + '</h3></div></div></div>'
      + '</section>';
  }

  function lesson7Lower(){
    var c = t();
    return '<section class="lesson-guide-stack lesson-guide-stack-lower ca-v-stack" aria-label="' + esc(c.l7.seed.k) + '">'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">' + seedVisual(c) + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l7.seed.k) + '</span><h3>' + esc(c.l7.seed.title) + '</h3></div></div></div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split"><div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l7.address.k) + '</span><h3>' + esc(c.l7.address.title) + '</h3></div></div>' + addressVisual(c) + '</div>'
      + '<div class="lesson-guide-panel lesson-guide-panel-split">' + clipboardVisual(c) + '<div class="lesson-guide-copy"><div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(c.l7.clipboard.k) + '</span><h3>' + esc(c.l7.clipboard.title) + '</h3></div></div></div>'
      + '</section>';
  }

  var prevTop = window.renderLessonGuidedVisualsTop;
  window.renderLessonGuidedVisualsTop = function(i){
    if(i === 5) return lesson6Top();
    if(i === 6) return lesson7Top();
    return typeof prevTop === 'function' ? prevTop.apply(this, arguments) : '';
  };
  try{ renderLessonGuidedVisualsTop = window.renderLessonGuidedVisualsTop; }catch(err){}

  var prevLower = window.renderLessonGuidedVisualsLower;
  window.renderLessonGuidedVisualsLower = function(i){
    if(i === 5) return lesson6Lower();
    if(i === 6) return lesson7Lower();
    return typeof prevLower === 'function' ? prevLower.apply(this, arguments) : '';
  };
  try{ renderLessonGuidedVisualsLower = window.renderLessonGuidedVisualsLower; }catch(err){}

  function refresh(){
    if(typeof renderAllLessons === 'function') renderAllLessons();
    if(typeof currentPage === 'string' && /^lesson\d+$/.test(currentPage) && typeof showLesson === 'function'){
      showLesson(typeof currentLesson === 'number' ? currentLesson : 0);
    }
  }

  refresh();
})();
