(function(){
  if(typeof window === 'undefined' || window.__intermediateLessonSupportCleanup20260526) return;
  window.__intermediateLessonSupportCleanup20260526 = true;

  var START_INDEX = 7;
  var END_INDEX = 13;
  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var QUICK_REVIEW_CLASSES = [
    'lesson-quick-review',
    'lesson-quick-review-compact',
    'intermediate-quick-review',
    'intermediate-quick-review-fixed',
    'quick-review-grid',
    'quick-review-card',
    'intermediate-quick-review-grid',
    'intermediate-quick-review-card'
  ];

  var COPY = {
    en:{
      quickTitle:'Quick Review',
      quickDesc:'Check the key points from this lesson.',
      q:'Q',
      a:'Answer',
      relatedDesc:'Check the connected checklists and practical resources for this lesson.',
      libraryAll:'View full Source Library'
    },
    ko:{
      quickTitle:'짧은 확인 문제',
      quickDesc:'방금 배운 내용을 짧게 확인해 보세요.',
      q:'Q',
      a:'답변',
      relatedDesc:'이 강의와 연결된 체크리스트와 실전 자료를 더 확인할 수 있습니다.',
      libraryAll:'자료 라이브러리 전체 보기'
    },
    th:{
      quickTitle:'ทบทวนสั้น ๆ',
      quickDesc:'ทบทวนจุดตัดสินใจสำคัญก่อนเรียนต่อ',
      q:'คำถาม',
      a:'คำตอบ',
      relatedDesc:'ตรวจเช็กลิสต์และแหล่งเรียนรู้ที่เกี่ยวข้องกับบทนี้',
      libraryAll:'ดูคลังแหล่งข้อมูลทั้งหมด'
    },
    id:{
      quickTitle:'Tinjauan Singkat',
      quickDesc:'Tinjau poin keputusan utama sebelum lanjut.',
      q:'Pertanyaan',
      a:'Jawaban',
      relatedDesc:'Lihat checklist dan sumber praktis yang terhubung dengan pelajaran ini.',
      libraryAll:'Lihat seluruh Pustaka Sumber'
    },
    pt:{
      quickTitle:'Revisao rapida',
      quickDesc:'Revise os pontos principais antes de continuar.',
      q:'Pergunta',
      a:'Resposta',
      relatedDesc:'Veja checklists e recursos praticos ligados a esta licao.',
      libraryAll:'Ver toda a Biblioteca de Fontes'
    },
    br:{
      quickTitle:'Revisao rapida',
      quickDesc:'Revise os pontos principais antes de continuar.',
      q:'Pergunta',
      a:'Resposta',
      relatedDesc:'Veja checklists e recursos praticos ligados a esta aula.',
      libraryAll:'Ver toda a Biblioteca de Fontes'
    },
    tr:{
      quickTitle:'Kisa tekrar',
      quickDesc:'Devam etmeden once ana karar noktalarini gozden gecirin.',
      q:'Soru',
      a:'Yanıt',
      relatedDesc:'Bu dersle baglantili kontrol listelerini ve pratik kaynaklari inceleyin.',
      libraryAll:'Tum Kaynak Kutuphanesini gor'
    },
    es:{
      quickTitle:'Repaso rapido',
      quickDesc:'Repasa los puntos clave antes de continuar.',
      q:'Pregunta',
      a:'Respuesta',
      relatedDesc:'Consulta checklists y recursos practicos conectados con esta leccion.',
      libraryAll:'Ver toda la Biblioteca de Fuentes'
    },
    ar:{
      quickTitle:'مراجعة قصيرة',
      quickDesc:'راجع نقاط القرار الأساسية قبل المتابعة.',
      q:'سؤال',
      a:'إجابة',
      relatedDesc:'راجع قوائم التحقق والموارد العملية المرتبطة بهذا الدرس.',
      libraryAll:'عرض مكتبة المصادر كاملة'
    },
    vi:{
      quickTitle:'On nhanh',
      quickDesc:'Xem lai cac diem quyet dinh chinh truoc khi tiep tuc.',
      q:'Cau hoi',
      a:'Tra loi',
      relatedDesc:'Xem checklist va tai lieu thuc hanh lien quan den bai hoc nay.',
      libraryAll:'Xem toan bo Thu vien nguon'
    },
    ha:{
      quickTitle:'Takaitaccen bita',
      quickDesc:'Duba muhimman wuraren yanke shawara kafin ci gaba.',
      q:'Tambaya',
      a:'Amsa',
      relatedDesc:'Duba checklist da kayan aiki masu alaka da wannan darasi.',
      libraryAll:'Duba duk Laburaren Tushe'
    }
  };

  var REVIEWS = {
    en:[
      [
        ['What is the biggest difference between an exchange and a wallet?','An exchange is convenient for buying and selling, while a wallet gives the user more direct control.'],
        ['What should you check now?','Decide whether buying belongs on the exchange, whether storage belongs in a wallet, and whether you have a recovery plan and small test habit.'],
        ['Where are mistakes most likely?','Mistakes happen when users treat exchanges and wallets as the same thing or skip recovery planning.']
      ],
      [
        ['What should you check first when choosing a network?','Confirm that the sending side and receiving side support the same network.'],
        ['Why be careful even when fees are low?','Low fees do not help if the wrong network makes the asset hard to recover.'],
        ['Why is a small test useful?','It checks the address and network with a small amount before sending more.']
      ],
      [
        ['Why are stablecoins not all the same?','They can differ by issuer, reserve structure, transparency, and liquidity.'],
        ['Why check reserves and the issuer?','They help you understand who backs the coin and what kind of trust model you are relying on.'],
        ['What is depeg risk?','It is the risk that a stablecoin moves away from its intended reference value.']
      ],
      [
        ['How are connecting a wallet and approving different?','Connecting lets a site see or request wallet interaction; approval can grant permission to move specific tokens.'],
        ['What should you check before signing?','Check the site, contract, token, amount, and action the wallet is asking you to confirm.'],
        ['Why revoke unused approvals?','Old approvals can remain risky if a connected contract or site becomes unsafe.']
      ],
      [
        ['What should come before hype when reviewing a project?','Look for structure: utility, activity, liquidity, team behavior, and verifiable links.'],
        ['What matters in tokenomics?','Supply, distribution, incentives, unlocks, and whether the design supports long-term use.'],
        ['What are common red flags?','Unclear links, fake urgency, thin liquidity, anonymous claims, and promises that cannot be verified.']
      ],
      [
        ['Why re-check chains before using a bridge?','A bridge depends on source chain, destination chain, route, and asset version.'],
        ['Why treat wrapped tokens carefully?','A wrapped token depends on the bridge or issuer that represents the original asset.'],
        ['What is the most important check before bridging?','Confirm the official bridge, supported chains, destination address, and small test path.']
      ],
      [
        ['What should you check first before trusting information?','Start with the official source instead of a screenshot, DM, or repost.'],
        ['Why check official source and domain together?','Scams often copy names and visuals, so the exact domain matters.'],
        ['Why cross-check a contract address?','A lookalike token can use a similar name, so the address should match multiple trusted sources.']
      ]
    ],
    ko:[
      [
        ['거래소와 지갑의 가장 큰 차이는 무엇인가요?','거래소는 사고팔기 편한 곳이고, 지갑은 사용자가 통제권을 더 많이 갖는 곳입니다.'],
        ['지금 확인해야 할 것은 무엇인가요?','구매는 거래소에서 할지, 보관은 지갑에서 할지, 복구 계획과 소액 테스트를 확인해야 합니다.'],
        ['어디서 실수하기 쉬운가요?','거래소와 지갑을 같은 용도로 생각하거나, 복구 책임을 준비하지 않을 때 실수가 생깁니다.']
      ],
      [
        ['네트워크 선택에서 가장 먼저 확인할 것은 무엇인가요?','보내는 곳과 받는 곳이 같은 네트워크를 지원하는지 먼저 확인해야 합니다.'],
        ['수수료가 낮아도 왜 조심해야 하나요?','수수료가 낮아도 잘못된 네트워크를 선택하면 자산을 찾기 어려울 수 있습니다.'],
        ['소액 테스트가 필요한 이유는 무엇인가요?','큰 금액을 보내기 전에 주소와 네트워크가 맞는지 작은 금액으로 확인하기 위해서입니다.']
      ],
      [
        ['스테이블코인이 모두 같은 것은 아닌 이유는 무엇인가요?','발행자, 준비금 구조, 투명성, 유동성이 서로 다를 수 있기 때문입니다.'],
        ['준비금과 발행자를 왜 확인해야 하나요?','누가 코인을 뒷받침하고 어떤 신뢰 구조에 의존하는지 보기 위해서입니다.'],
        ['디페그 위험은 무엇인가요?','스테이블코인이 목표 기준 가격에서 벗어날 수 있는 위험입니다.']
      ],
      [
        ['지갑 연결과 승인은 어떻게 다른가요?','지갑 연결은 사이트와 지갑을 연결하는 것이고, 승인은 특정 토큰 사용 권한을 허용하는 것입니다.'],
        ['서명하기 전에 무엇을 확인해야 하나요?','무엇에 동의하는지, 어떤 권한을 주는지, 요청한 사이트가 맞는지 확인해야 합니다.'],
        ['사용하지 않는 승인은 왜 해제해야 하나요?','불필요한 승인이 남아 있으면 나중에 악용될 위험이 생길 수 있기 때문입니다.']
      ],
      [
        ['프로젝트를 볼 때 유행보다 먼저 확인할 것은 무엇인가요?','유틸리티, 토크노믹스, 유동성, 커뮤니티 활동, 위험 신호를 먼저 확인해야 합니다.'],
        ['토크노믹스에서 무엇을 봐야 하나요?','공급량, 분배 구조, 락업, 인센티브가 장기적으로 지속 가능한지 확인해야 합니다.'],
        ['위험 신호는 어떤 것들이 있나요?','불명확한 팀, 과장된 약속, 낮은 유동성, 지나친 홍보, 검증되지 않은 링크가 위험 신호가 될 수 있습니다.']
      ],
      [
        ['브리지를 사용할 때 왜 체인을 다시 확인해야 하나요?','출발 체인과 도착 체인이 다르면 자산 이동 방식과 위험이 달라질 수 있기 때문입니다.'],
        ['Wrapped token은 왜 주의해야 하나요?','다른 체인의 자산을 표현한 토큰이기 때문에 원래 자산과 구조가 다를 수 있습니다.'],
        ['브리지 사용 전 가장 중요한 확인은 무엇인가요?','지원 체인, 지원 토큰, 수수료, 예상 시간, 공식 링크 여부를 확인해야 합니다.']
      ],
      [
        ['정보를 믿기 전 가장 먼저 확인할 것은 무엇인가요?','공식 출처인지, 도메인이 맞는지, 같은 정보가 다른 공식 채널에서도 확인되는지 봐야 합니다.'],
        ['공식 출처와 도메인은 왜 함께 봐야 하나요?','가짜 사이트는 이름과 디자인을 비슷하게 만들 수 있으므로 주소와 출처를 함께 확인해야 합니다.'],
        ['컨트랙트 주소는 왜 교차 확인해야 하나요?','비슷한 이름의 가짜 토큰이 있을 수 있으므로 공식 문서와 익스플로러에서 함께 확인해야 합니다.']
      ]
    ],
    th:[
      [
        ['Exchange กับ wallet ต่างกันอย่างไร?','Exchange ใช้ซื้อขายสะดวก ส่วน wallet ให้ผู้ใช้ควบคุมได้มากกว่า'],
        ['ตอนนี้ควรตรวจอะไร?','แยกว่า exchange ใช้ซื้อ wallet ใช้เก็บ และมีแผนกู้คืนกับการทดสอบจำนวนเล็ก'],
        ['สมดุลสำคัญคืออะไร?','สมดุลระหว่างความสะดวกและการควบคุม']
      ],
      [
        ['เลือกเครือข่ายต้องดูอะไรก่อน?','ตรวจว่าเครือข่ายส่งและรับตรงกัน'],
        ['ค่าธรรมเนียมต่ำทำไมยังต้องระวัง?','ถ้าปลายทางไม่รองรับ เครือข่ายราคาถูกก็ยังเสี่ยง'],
        ['ทำไมต้องทดสอบจำนวนน้อย?','ช่วยเจอความผิดพลาดก่อนส่งเต็มจำนวน']
      ],
      [
        ['ทำไม stablecoin ไม่เหมือนกันทั้งหมด?','ผู้ออก เงินสำรอง ความโปร่งใส และสภาพคล่องต่างกันได้'],
        ['ทำไมต้องดูเงินสำรองและผู้ออก?','เพื่อรู้ว่าพึ่งพาใครและโมเดลความเชื่อใจแบบใด'],
        ['depeg risk คืออะไร?','ความเสี่ยงที่ stablecoin หลุดจากมูลค่าอ้างอิง']
      ],
      [
        ['เชื่อม wallet กับ approval ต่างกันอย่างไร?','การเชื่อมคือการโต้ตอบ ส่วน approval อาจให้สิทธิ์ย้าย token'],
        ['ก่อน sign ต้องตรวจอะไร?','ตรวจเว็บ contract token จำนวน และสิ่งที่ wallet ขอให้ยืนยัน'],
        ['ทำไมควร revoke approval ที่ไม่ใช้?','approval เก่าอาจเสี่ยงถ้า contract หรือเว็บไม่ปลอดภัย']
      ],
      [
        ['ก่อนกระแส hype ควรดูอะไร?','ดู utility กิจกรรม สภาพคล่อง ทีม และลิงก์ที่ตรวจสอบได้'],
        ['tokenomics ต้องตรวจอะไร?','อุปทาน การกระจาย incentive unlock และโครงสร้างระยะยาว'],
        ['red flag มีอะไรบ้าง?','ลิงก์ไม่ชัด เร่งรีบเกินจริง สภาพคล่องบาง และคำอ้างที่ตรวจไม่ได้']
      ],
      [
        ['ใช้ bridge ทำไมต้องตรวจ chain ซ้ำ?','ต้องตรงทั้ง source chain, destination chain, route และ asset version'],
        ['ทำไม wrapped token ต้องระวัง?','มันพึ่งพา bridge หรือผู้ออกที่แทนสินทรัพย์เดิม'],
        ['ก่อน bridge ต้องตรวจอะไรสำคัญที่สุด?','official bridge, chain ที่รองรับ, address ปลายทาง และ test amount']
      ],
      [
        ['ก่อนเชื่อข้อมูลต้องตรวจอะไรก่อน?','เริ่มจาก official source ไม่ใช่ภาพแคป DM หรือ repost'],
        ['ทำไมต้องดู source และ domain พร้อมกัน?','scam มักเลียนแบบชื่อและหน้าตา domain จึงสำคัญ'],
        ['ทำไมต้อง cross-check contract address?','token ปลอมอาจชื่อคล้ายกัน ต้องเทียบ address หลายแหล่ง']
      ]
    ],
    id:[
      [
        ['Apa beda utama exchange dan wallet?','Exchange memudahkan jual beli, sedangkan wallet memberi kontrol lebih langsung kepada pengguna.'],
        ['Apa yang perlu dicek sekarang?','Pastikan exchange untuk membeli, wallet untuk menyimpan, serta ada rencana recovery dan test kecil.'],
        ['Keseimbangan apa yang penting?','Keseimbangan antara kemudahan dan kontrol.']
      ],
      [
        ['Apa yang dilihat pertama saat memilih jaringan?','Pastikan jaringan kirim dan jaringan terima sama.'],
        ['Mengapa biaya rendah tetap perlu hati-hati?','Jaringan murah tidak berguna jika tujuan tidak mendukungnya.'],
        ['Mengapa test transfer penting?','Test kecil membantu menemukan salah alamat atau jaringan sebelum jumlah besar dikirim.']
      ],
      [
        ['Mengapa stablecoin tidak semuanya sama?','Issuer, reserve, transparansi, dan likuiditas bisa berbeda.'],
        ['Mengapa reserve dan issuer perlu dicek?','Untuk memahami siapa yang mendukung coin dan model kepercayaannya.'],
        ['Apa itu risiko depeg?','Risiko stablecoin menjauh dari nilai acuannya.']
      ],
      [
        ['Apa beda wallet connect dan approval?','Connect membuka interaksi; approval bisa memberi izin memindahkan token tertentu.'],
        ['Apa yang dicek sebelum sign?','Cek situs, contract, token, jumlah, dan aksi yang diminta wallet.'],
        ['Mengapa approval lama perlu dicabut?','Approval lama bisa berisiko jika contract atau situs menjadi tidak aman.']
      ],
      [
        ['Apa yang dilihat sebelum hype?','Lihat utility, aktivitas, likuiditas, perilaku tim, dan link yang bisa diverifikasi.'],
        ['Apa yang dicek di tokenomics?','Supply, distribusi, insentif, unlock, dan desain jangka panjang.'],
        ['Apa contoh red flag?','Link tidak jelas, tekanan mendesak, likuiditas tipis, dan klaim tanpa bukti.']
      ],
      [
        ['Mengapa chain perlu dicek ulang saat bridge?','Bridge bergantung pada source chain, destination chain, rute, dan versi aset.'],
        ['Mengapa wrapped token perlu hati-hati?','Wrapped token bergantung pada bridge atau issuer yang mewakili aset asli.'],
        ['Apa cek terpenting sebelum bridge?','Official bridge, chain yang didukung, alamat tujuan, dan test kecil.']
      ],
      [
        ['Apa yang dicek pertama sebelum percaya informasi?','Mulai dari sumber resmi, bukan screenshot, DM, atau repost.'],
        ['Mengapa sumber resmi dan domain dicek bersama?','Scam sering meniru nama dan tampilan, jadi domain tepat penting.'],
        ['Mengapa contract address perlu cross-check?','Token palsu bisa memakai nama mirip, jadi address harus cocok di beberapa sumber tepercaya.']
      ]
    ]
  };
  REVIEWS.pt = [
    [['Qual e a maior diferenca entre exchange e wallet?','A exchange facilita comprar e vender; a wallet da mais controle direto ao usuario.'],['O que verificar agora?','Se a exchange e para compra, a wallet para guarda, e se ha plano de recuperacao e teste pequeno.'],['Qual equilibrio importa mais?','O equilibrio entre conveniencia e controle.']],
    [['O que olhar primeiro ao escolher a rede?','Confirme se a rede de envio e recebimento e a mesma.'],['Por que cuidado mesmo com taxa baixa?','Uma rede barata nao ajuda se o destino nao a suporta.'],['Por que fazer teste pequeno?','Ele revela erro de endereco ou rede antes do valor maior.']],
    [['Por que stablecoins nao sao iguais?','Emissor, reservas, transparencia e liquidez podem variar.'],['Por que checar reservas e emissor?','Para entender quem sustenta a moeda e o modelo de confianca.'],['O que e risco de depeg?','O risco de a stablecoin sair do valor de referencia.']],
    [['Como conectar wallet difere de aprovar?','Conectar permite interacao; aprovar pode dar permissao sobre tokens.'],['O que checar antes de assinar?','Site, contrato, token, valor e acao solicitada.'],['Por que revogar aprovacoes antigas?','Permissoes antigas podem ser risco se o contrato ficar inseguro.']],
    [['O que olhar antes do hype?','Utilidade, atividade, liquidez, equipe e links verificaveis.'],['O que checar em tokenomics?','Oferta, distribuicao, incentivos, unlocks e uso de longo prazo.'],['Quais red flags comuns?','Links confusos, urgencia, pouca liquidez e promessas sem prova.']],
    [['Por que conferir chains no bridge?','Importam source chain, destination chain, rota e versao do ativo.'],['Por que cuidado com wrapped token?','Ele depende do bridge ou emissor que representa o ativo original.'],['Qual checagem principal antes do bridge?','Bridge oficial, chains suportadas, endereco e teste pequeno.']],
    [['O que checar antes de confiar?','Comece pela fonte oficial, nao por print, DM ou repost.'],['Por que fonte oficial e dominio juntos?','Scams copiam nomes e visual; o dominio exato importa.'],['Por que cruzar contract address?','Tokens falsos usam nomes parecidos; confira o address em varias fontes.']]
  ];
  REVIEWS.br = REVIEWS.pt;
  REVIEWS.tr = [
    [['Exchange ve wallet arasindaki ana fark nedir?','Exchange al-sat icin rahattir; wallet kullaniciya daha dogrudan kontrol verir.'],['Simdi ne kontrol edilmeli?','Exchange alis icin mi, wallet saklama icin mi, kurtarma plani ve kucuk test var mi kontrol edin.'],['En onemli denge nedir?','Kolaylik ve kontrol dengesi.']],
    [['Ag secerken once neye bakilir?','Gonderen ve alan agin ayni oldugunu dogrulayin.'],['Ucret dusuk olsa da neden dikkat?','Hedef desteklemiyorsa ucuz ag fayda degil risktir.'],['Kucuk test neden gerekli?','Buyuk tutardan once adres veya ag hatasini yakalar.']],
    [['Stablecoinler neden ayni degildir?','Ihraçci, rezerv, seffaflik ve likidite farkli olabilir.'],['Rezerv ve ihraçci neden kontrol edilir?','Hangi guven modeline dayandiginizi anlamak icin.'],['Depeg riski nedir?','Stablecoinin hedef degerden uzaklasma riskidir.']],
    [['Wallet connect ve approval farki nedir?','Connect etkilesim acar; approval belirli token izni verebilir.'],['Imzalamadan once ne kontrol edilmeli?','Site, contract, token, miktar ve istenen aksiyon.'],['Kullanilmayan approval neden iptal edilir?','Eski izinler guvensiz contractlarda risk yaratabilir.']],
    [['Hype oncesi neye bakilir?','Utility, aktivite, likidite, ekip davranisi ve dogrulanabilir linkler.'],['Tokenomics icinde ne kontrol edilir?','Arz, dagitim, tesvik, unlock ve uzun vadeli kullanim.'],['Red flag ornekleri nedir?','Belirsiz link, asiri acele, ince likidite ve kanitsiz iddialar.']],
    [['Bridge kullanirken chain neden tekrar kontrol edilir?','Source chain, destination chain, rota ve varlik versiyonu uyumlu olmalidir.'],['Wrapped token neden dikkat ister?','Orijinal varligi temsil eden bridge veya ihraçciya baglidir.'],['Bridge oncesi en onemli kontrol nedir?','Resmi bridge, desteklenen chainler, hedef adres ve kucuk test.']],
    [['Bilgiye guvenmeden once ne kontrol edilir?','Ekran goruntusu, DM veya repost yerine resmi kaynak.'],['Resmi kaynak ve domain neden birlikte bakilir?','Scamler isim ve tasarimi kopyalar; domain onemlidir.'],['Contract address neden capraz kontrol edilir?','Benzer isimli sahte token olabilir; address birden cok kaynakta eslesmelidir.']]
  ];
  REVIEWS.es = [
    [['Cual es la mayor diferencia entre exchange y wallet?','El exchange facilita comprar y vender; la wallet da mas control directo al usuario.'],['Que revisar ahora?','Si el exchange es para comprar, la wallet para guardar, y si hay plan de recuperacion y prueba pequena.'],['Que equilibrio importa mas?','El equilibrio entre comodidad y control.']],
    [['Que mirar primero al elegir red?','Confirma que la red de envio y recepcion coincidan.'],['Por que tener cuidado aunque la comision sea baja?','Una red barata no ayuda si el destino no la soporta.'],['Por que hacer una prueba pequena?','Ayuda a detectar errores antes de enviar el monto completo.']],
    [['Por que las stablecoins no son iguales?','Emisor, reservas, transparencia y liquidez pueden variar.'],['Por que revisar reservas y emisor?','Para entender quien respalda la moneda y el modelo de confianza.'],['Que es el riesgo de depeg?','El riesgo de que la stablecoin se aleje de su valor de referencia.']],
    [['Como difieren conectar wallet y aprobar?','Conectar permite interaccion; aprobar puede dar permiso sobre tokens.'],['Que revisar antes de firmar?','Sitio, contrato, token, cantidad y accion solicitada.'],['Por que revocar aprobaciones no usadas?','Permisos antiguos pueden ser riesgosos si el contrato deja de ser seguro.']],
    [['Que mirar antes del hype?','Utilidad, actividad, liquidez, equipo y enlaces verificables.'],['Que revisar en tokenomics?','Oferta, distribucion, incentivos, unlocks y uso a largo plazo.'],['Que red flags son comunes?','Enlaces confusos, urgencia, poca liquidez y promesas sin prueba.']],
    [['Por que revisar chains al usar bridge?','Importan source chain, destination chain, ruta y version del activo.'],['Por que cuidado con wrapped token?','Depende del bridge o emisor que representa el activo original.'],['Cual es la revision clave antes del bridge?','Bridge oficial, chains soportadas, direccion destino y prueba pequena.']],
    [['Que revisar antes de confiar?','Empieza por la fuente oficial, no por captura, DM o repost.'],['Por que fuente oficial y dominio juntos?','Las estafas copian nombre y apariencia; el dominio exacto importa.'],['Por que cruzar contract address?','Puede haber tokens falsos con nombre similar; verifica el address en varias fuentes.']]
  ];
  REVIEWS.ar = [
    [['ما الفرق الأكبر بين المنصة والمحفظة؟','المنصة تسهل البيع والشراء، أما المحفظة فتعطي المستخدم تحكما أكبر.'],['ما الذي يجب فحصه الآن؟','حدد هل المنصة للشراء والمحفظة للحفظ، وتأكد من خطة الاسترداد واختبار مبلغ صغير.'],['ما التوازن الأهم؟','التوازن بين السهولة والتحكم.']],
    [['ما أول ما يفحص عند اختيار الشبكة؟','تأكد أن شبكة الإرسال والاستقبال متطابقتان.'],['لماذا الحذر حتى مع رسوم منخفضة؟','الشبكة الأرخص لا تفيد إذا لم يدعمها الطرف المستقبل.'],['لماذا اختبار مبلغ صغير؟','يكشف أخطاء العنوان أو الشبكة قبل إرسال المبلغ الكامل.']],
    [['لماذا ليست كل stablecoin متشابهة؟','قد تختلف جهة الإصدار والاحتياطي والشفافية والسيولة.'],['لماذا نفحص الاحتياطي والجهة المصدرة؟','لفهم من يدعم العملة ونموذج الثقة المستخدم.'],['ما خطر depeg؟','خطر ابتعاد stablecoin عن قيمتها المرجعية.']],
    [['ما الفرق بين ربط المحفظة والموافقة؟','الربط يتيح التفاعل، أما الموافقة فقد تمنح إذنا لتحريك tokens.'],['ماذا تفحص قبل التوقيع؟','الموقع والعقد والرمز والمبلغ والإجراء المطلوب.'],['لماذا نلغي الموافقات غير المستخدمة؟','الموافقات القديمة قد تصبح خطرة إذا صار العقد غير آمن.']],
    [['ما الذي يسبق الضجة عند تقييم مشروع؟','الفائدة والنشاط والسيولة وسلوك الفريق والروابط القابلة للتحقق.'],['ماذا نفحص في tokenomics؟','العرض والتوزيع والحوافز وعمليات unlock والاستخدام الطويل.'],['ما إشارات الخطر؟','روابط غامضة، استعجال، سيولة ضعيفة، ووعود بلا دليل.']],
    [['لماذا نعيد فحص السلاسل قبل bridge؟','يجب توافق source chain وdestination chain والمسار ونسخة الأصل.'],['لماذا نحذر من wrapped token؟','يعتمد على bridge أو جهة تصدر تمثيل الأصل الأصلي.'],['ما أهم فحص قبل bridge؟','bridge الرسمي، السلاسل المدعومة، عنوان الوجهة، واختبار صغير.']],
    [['ما أول فحص قبل تصديق معلومة؟','ابدأ بالمصدر الرسمي لا بصورة أو DM أو إعادة نشر.'],['لماذا نفحص المصدر الرسمي والدومين معا؟','الاحتيال يقلد الاسم والشكل، لذلك الدومين الدقيق مهم.'],['لماذا نتحقق من contract address عبر مصادر متعددة؟','قد توجد tokens مزيفة بأسماء مشابهة، لذلك يجب تطابق العنوان في مصادر موثوقة.']]
  ];
  REVIEWS.vi = [
    [['Khac nhau lon nhat giua exchange va wallet la gi?','Exchange tien cho mua ban, con wallet cho nguoi dung nhieu quyen kiem soat hon.'],['Can kiem tra gi bay gio?','Exchange dung de mua, wallet de luu tru, co ke hoach khoi phuc va test so tien nho.'],['Can bang quan trong nhat la gi?','Can bang giua tien loi va quyen kiem soat.']],
    [['Chon network can xem gi truoc?','Xac nhan network gui va network nhan khop nhau.'],['Phi thap sao van can can than?','Network re khong huu ich neu noi nhan khong ho tro.'],['Tai sao can test transfer?','Test nho giup phat hien sai dia chi hoac network truoc khi gui so lon.']],
    [['Tai sao stablecoin khong giong nhau?','Issuer, reserve, minh bach va thanh khoan co the khac nhau.'],['Tai sao xem reserve va issuer?','De hieu ai bao chung coin va minh dua vao mo hinh tin cay nao.'],['Rui ro depeg la gi?','Rui ro stablecoin roi khoi gia tri tham chieu.']],
    [['Wallet connect va approval khac nhau the nao?','Connect mo tuong tac; approval co the cap quyen voi token.'],['Truoc khi sign can xem gi?','Site, contract, token, so tien va hanh dong wallet yeu cau.'],['Tai sao revoke approval khong dung?','Approval cu co the thanh rui ro neu contract hoac site khong an toan.']],
    [['Truoc hype can xem gi?','Utility, hoat dong, thanh khoan, hanh vi team va link kiem chung duoc.'],['Tokenomics can kiem tra gi?','Supply, phan bo, incentive, unlock va kha nang dung lau dai.'],['Red flag gom nhung gi?','Link mo ho, ep gap, thanh khoan mong va loi hua khong co bang chung.']],
    [['Dung bridge sao phai kiem tra chain?','Can dung source chain, destination chain, route va phien ban tai san.'],['Wrapped token sao can can than?','No phu thuoc vao bridge hoac issuer dai dien tai san goc.'],['Kiem tra quan trong truoc bridge la gi?','Bridge chinh thuc, chain ho tro, dia chi dich va test nho.']],
    [['Truoc khi tin thong tin can xem gi?','Bat dau tu official source, khong phai anh chup, DM hay repost.'],['Tai sao xem source va domain cung nhau?','Scam hay sao chep ten va giao dien, domain chinh xac rat quan trong.'],['Tai sao cross-check contract address?','Token gia co the ten gan giong; address phai khop o nhieu nguon tin cay.']]
  ];
  REVIEWS.ha = [
    [['Menene babban bambanci tsakanin exchange da wallet?','Exchange yana saukaka saye da sayarwa, wallet kuma yana ba mai amfani iko kai tsaye.'],['Me za a duba yanzu?','Duba ko exchange na saye ne, wallet na ajiya ne, akwai recovery plan da karamin test.'],['Wane daidaito ya fi muhimmanci?','Daidaito tsakanin sauki da iko.']],
    [['Me za a fara duba wajen zaben network?','Tabbatar network na aikawa da na karba sun dace.'],['Me yasa a kiyaye ko fee ya yi kasa?','Network mai sauki ba zai taimaka ba idan wurin karba bai goyi bayan sa ba.'],['Me yasa test transfer yake da amfani?','Karamin test yana gano kuskure kafin babban kudi.']],
    [['Me yasa stablecoin ba daya suke ba?','Issuer, reserve, gaskiya da liquidity na iya bambanta.'],['Me yasa ake duba reserve da issuer?','Don fahimtar wanda ke goyon baya da tsarin amincewa.'],['Menene depeg risk?','Hadarin stablecoin ya kauce daga darajar da ake nufi.']],
    [['Wallet connect da approval sun bambanta yaya?','Connect yana bude hulda; approval na iya ba da izinin token.'],['Me za a duba kafin sign?','Site, contract, token, adadi, da aikin da wallet ke nema.'],['Me yasa a revoke approval da ba a amfani?','Tsohon approval na iya zama hadari idan contract ya zama mara tsaro.']],
    [['Me za a duba kafin hype?','Utility, activity, liquidity, halin team, da links masu tabbaci.'],['Me ake duba a tokenomics?','Supply, distribution, incentives, unlocks, da dogon amfani.'],['Menene red flags?','Links marasa tabbas, gaggawa, karancin liquidity, da alkawari ba tare da shaida ba.']],
    [['Me yasa a sake duba chain kafin bridge?','Source chain, destination chain, route, da asset version dole su dace.'],['Me yasa wrapped token ke bukatar kulawa?','Yana dogara da bridge ko issuer da ke wakiltar asalin asset.'],['Muhimmin duba kafin bridge?','Official bridge, chains da ake goyon baya, address, da karamin test.']],
    [['Me za a fara duba kafin yarda da bayani?','Fara da official source, ba screenshot, DM, ko repost ba.'],['Me yasa source da domain tare?','Scam na kwaikwayon suna da gani, don haka domain na da muhimmanci.'],['Me yasa contract address ake cross-check?','Fake token na iya kama da suna; address ya dace a tushe masu yawa.']]
  ];

  var COMPACT_REVIEWS = {
    en:[
      [['Exchange vs wallet difference?','Exchanges are easier for trading; wallets give users more control.'],['What should you check first?','Buying place, storage place, recovery plan, and a small test.'],['Where do mistakes happen?','When exchanges and wallets are treated as the same tool.']],
      [['Network check first?','Confirm both sides support the same network.'],['Why be careful with low fees?','A wrong network can make assets hard to recover.'],['Why test small?','To confirm the address and network before sending more.']],
      [['Are stablecoins all the same?','Issuer, reserves, and liquidity can differ.'],['Why check reserves?','To see what supports the stability model.'],['What is depeg?','When a stablecoin moves away from its target value.']],
      [['Connect vs approval?','Connect opens access; approval grants token permission.'],['Before signing?','Check the site, permission, and requested action.'],['Why revoke approvals?','Unused permissions can be abused later.']],
      [['Before hype, check what?','Utility, tokenomics, liquidity, and red flags.'],['Tokenomics check?','Supply, distribution, lockups, and incentives.'],['Common red flags?','Unclear team, big promises, low liquidity.']],
      [['Before bridging?','Check source chain, destination chain, and token support.'],['Why watch wrapped tokens?','They can differ from the original asset structure.'],['Most important check?','Official link, fees, time, and supported chains.']],
      [['First verification step?','Check the official source and domain first.'],['Why check domain?','Fake sites can copy names and design.'],['Why cross-check addresses?','To avoid fake tokens with similar names.']]
    ],
    ko:[
      [['거래소와 지갑의 차이는?','거래소는 사고팔기 쉽고, 지갑은 통제권을 더 많이 갖는 곳입니다.'],['먼저 확인할 것은?','구매 위치, 보관 위치, 복구 계획, 소액 테스트를 확인합니다.'],['실수는 어디서 생기나요?','거래소와 지갑을 같은 용도로 생각할 때 실수가 생깁니다.']],
      [['네트워크 먼저 확인할 것은?','보내는 곳과 받는 곳이 같은 네트워크를 지원하는지 확인합니다.'],['수수료가 낮아도 왜 조심하나요?','잘못된 네트워크를 선택하면 자산을 찾기 어려울 수 있습니다.'],['소액 테스트는 왜 하나요?','큰 금액 전송 전 주소와 네트워크가 맞는지 확인하기 위해서입니다.']],
      [['스테이블코인은 모두 같나요?','가격은 비슷해도 발행자, 준비금, 유동성은 다를 수 있습니다.'],['준비금은 왜 보나요?','안정성이 어떤 자산과 구조로 뒷받침되는지 확인하기 위해서입니다.'],['디페그란?','목표 가격에서 벗어나는 상황을 말합니다.']],
      [['연결과 승인의 차이는?','연결은 지갑 접속이고, 승인은 토큰 사용 권한 허용입니다.'],['서명 전 확인할 것은?','어떤 권한을 주는지와 요청한 사이트가 맞는지 확인합니다.'],['승인은 왜 해제하나요?','사용하지 않는 권한이 남으면 악용될 수 있기 때문입니다.']],
      [['유행보다 먼저 볼 것은?','유틸리티, 토크노믹스, 유동성, 위험 신호를 확인합니다.'],['토크노믹스에서 볼 것은?','공급량, 분배, 락업, 인센티브 구조를 봅니다.'],['위험 신호는?','불명확한 팀, 과장된 약속, 낮은 유동성 등이 있습니다.']],
      [['브리지 전 확인할 것은?','출발 체인, 도착 체인, 지원 토큰을 확인합니다.'],['Wrapped token은 왜 주의하나요?','원래 자산과 구조가 다를 수 있기 때문입니다.'],['가장 중요한 확인은?','공식 링크, 수수료, 예상 시간, 지원 체인입니다.']],
      [['정보 확인의 첫 단계는?','공식 출처와 도메인을 먼저 확인합니다.'],['도메인은 왜 보나요?','가짜 사이트는 이름과 디자인을 비슷하게 만들 수 있습니다.'],['주소는 왜 교차 확인하나요?','비슷한 이름의 가짜 토큰을 피하기 위해서입니다.']]
    ],
    th:[
      [['Exchange กับ wallet ต่างกัน?','Exchange เหมาะกับซื้อขาย ส่วน wallet ให้ผู้ใช้ควบคุมมากขึ้น'],['ต้องเช็กอะไรก่อน?','ที่ซื้อ ที่เก็บ แผนกู้คืน และการทดสอบเล็กน้อย'],['พลาดตรงไหนบ่อย?','เมื่อคิดว่า exchange และ wallet ใช้งานเหมือนกัน']],
      [['เช็ก network อะไรก่อน?','ยืนยันว่าฝั่งส่งและฝั่งรับรองรับ network เดียวกัน'],['ค่าธรรมเนียมต่ำยังเสี่ยง?','เลือก network ผิดอาจกู้คืนสินทรัพย์ได้ยาก'],['ทำไมต้องทดสอบเล็กน้อย?','เพื่อเช็ก address และ network ก่อนส่งจำนวนมาก']],
      [['Stablecoin เหมือนกันไหม?','Issuer, reserve และ liquidity อาจต่างกัน'],['ดู reserve ทำไม?','เพื่อดูว่าเสถียรภาพพึ่งพาโครงสร้างใด'],['Depeg คืออะไร?','เมื่อ stablecoin หลุดจากราคาเป้าหมาย']],
      [['Connect กับ approval ต่างกัน?','Connect คือเชื่อม wallet ส่วน approval คือให้สิทธิ์ token'],['ก่อน sign เช็กอะไร?','เช็ก site, permission และ action ที่ขอ'],['ทำไมต้อง revoke?','สิทธิ์ที่ไม่ใช้แล้วอาจถูกนำไปใช้ผิดทาง']],
      [['ก่อน hype ดูอะไร?','Utility, tokenomics, liquidity และ red flags'],['Tokenomics ดูอะไร?','Supply, distribution, lockup และ incentives'],['Red flags คืออะไร?','ทีมไม่ชัด สัญญาเกินจริง liquidity ต่ำ']],
      [['ก่อน bridge เช็กอะไร?','Source chain, destination chain และ token ที่รองรับ'],['Wrapped token เสี่ยงทำไม?','โครงสร้างอาจต่างจากสินทรัพย์เดิม'],['เช็กสำคัญที่สุด?','Official link, fee, เวลา และ chain ที่รองรับ']],
      [['เริ่ม verify อย่างไร?','เช็ก official source และ domain ก่อน'],['ดู domain ทำไม?','เว็บปลอมอาจลอกชื่อและดีไซน์'],['ทำไม cross-check address?','เพื่อเลี่ยง token ปลอมชื่อคล้ายกัน']]
    ],
    id:[
      [['Beda exchange dan wallet?','Exchange mudah untuk jual beli; wallet memberi kontrol lebih.'],['Cek apa dulu?','Tempat beli, tempat simpan, rencana recovery, dan tes kecil.'],['Kesalahan muncul di mana?','Saat exchange dan wallet dianggap alat yang sama.']],
      [['Cek network apa dulu?','Pastikan pengirim dan penerima mendukung network yang sama.'],['Fee rendah tetap hati-hati?','Network salah bisa membuat aset sulit dipulihkan.'],['Mengapa tes kecil?','Untuk cek alamat dan network sebelum jumlah besar.']],
      [['Stablecoin sama semua?','Issuer, reserve, dan liquidity bisa berbeda.'],['Mengapa lihat reserve?','Untuk melihat struktur yang menopang stabilitas.'],['Apa itu depeg?','Saat stablecoin keluar dari nilai target.']],
      [['Connect vs approval?','Connect menghubungkan wallet; approval memberi izin token.'],['Sebelum sign?','Cek situs, izin, dan aksi yang diminta.'],['Mengapa revoke approval?','Izin yang tidak dipakai bisa disalahgunakan.']],
      [['Sebelum hype, cek apa?','Utility, tokenomics, liquidity, dan red flag.'],['Cek tokenomics?','Supply, distribusi, lockup, dan insentif.'],['Red flag umum?','Tim tidak jelas, janji besar, liquidity rendah.']],
      [['Sebelum bridge?','Cek source chain, destination chain, dan token.'],['Wrapped token kenapa hati-hati?','Strukturnya bisa berbeda dari aset asli.'],['Cek paling penting?','Link resmi, fee, waktu, dan chain yang didukung.']],
      [['Langkah verifikasi pertama?','Cek official source dan domain dulu.'],['Mengapa cek domain?','Situs palsu bisa meniru nama dan desain.'],['Mengapa cross-check address?','Untuk menghindari token palsu bernama mirip.']]
    ],
    pt:[
      [['Diferença exchange e carteira?','Exchange facilita comprar e vender; carteira dá mais controle.'],['O que checar primeiro?','Local de compra, guarda, recuperação e teste pequeno.'],['Onde surgem erros?','Quando exchange e carteira são tratadas como iguais.']],
      [['Primeira verificação da rede?','Confirme se envio e recebimento usam a mesma rede.'],['Taxa baixa ainda exige cuidado?','Rede errada pode dificultar recuperar o ativo.'],['Por que teste pequeno?','Para confirmar endereço e rede antes de enviar mais.']],
      [['Stablecoins são iguais?','Emissor, reserva e liquidez podem variar.'],['Por que ver reservas?','Para entender a estrutura que sustenta a estabilidade.'],['O que é depeg?','Quando a stablecoin sai do valor-alvo.']],
      [['Conectar vs aprovar?','Conectar liga a carteira; aprovar dá permissão ao token.'],['Antes de assinar?','Cheque site, permissão e ação solicitada.'],['Por que revogar?','Permissões antigas podem ser abusadas.']],
      [['Antes do hype, ver o quê?','Utilidade, tokenomics, liquidez e red flags.'],['Tokenomics: o que ver?','Oferta, distribuição, lockup e incentivos.'],['Red flags comuns?','Equipe vaga, promessas grandes e baixa liquidez.']],
      [['Antes do bridge?','Cheque source chain, destination chain e token.'],['Wrapped token exige cuidado?','Pode ter estrutura diferente do ativo original.'],['Verificação principal?','Link oficial, taxa, tempo e chains suportadas.']],
      [['Primeiro passo de verificação?','Cheque fonte oficial e domínio primeiro.'],['Por que ver domínio?','Sites falsos copiam nome e design.'],['Por que cruzar endereço?','Para evitar tokens falsos com nomes parecidos.']]
    ],
    tr:[
      [['Exchange ve wallet farkı?','Exchange al-sat için kolaydır; wallet daha fazla kontrol verir.'],['Önce ne kontrol edilir?','Alım yeri, saklama yeri, kurtarma planı ve küçük test.'],['Hata nerede olur?','Exchange ve wallet aynı araç sanıldığında.']],
      [['Networkte ilk kontrol?','Gönderen ve alan tarafın aynı ağı desteklediğini doğrula.'],['Düşük fee neden riskli?','Yanlış ağ varlığı kurtarmayı zorlaştırabilir.'],['Küçük test neden?','Büyük tutardan önce adres ve ağı doğrulamak için.']],
      [['Stablecoinler aynı mı?','Issuer, rezerv ve likidite farklı olabilir.'],['Rezerv neden bakılır?','İstikrarı hangi yapının desteklediğini görmek için.'],['Depeg nedir?','Stablecoinin hedef fiyattan sapmasıdır.']],
      [['Connect ve approval farkı?','Connect wallet bağlantısıdır; approval token iznidir.'],['İmzadan önce?','Siteyi, izni ve istenen işlemi kontrol et.'],['Approval neden iptal?','Kullanılmayan izinler kötüye kullanılabilir.']],
      [['Hype öncesi neye bakılır?','Utility, tokenomics, likidite ve red flag.'],['Tokenomics kontrolü?','Arz, dağıtım, lockup ve teşvikler.'],['Red flag nedir?','Belirsiz ekip, büyük vaat, düşük likidite.']],
      [['Bridge öncesi?','Source chain, destination chain ve token desteği.'],['Wrapped token neden dikkat?','Orijinal varlıktan farklı yapıda olabilir.'],['En önemli kontrol?','Resmi link, fee, süre ve desteklenen chainler.']],
      [['İlk doğrulama adımı?','Önce official source ve domain kontrol edilir.'],['Domain neden bakılır?','Sahte siteler isim ve tasarımı kopyalayabilir.'],['Adres neden çapraz kontrol?','Benzer isimli sahte tokenlardan kaçınmak için.']]
    ],
    es:[
      [['Diferencia exchange y wallet?','Exchange facilita comprar y vender; wallet da más control.'],['Qué revisar primero?','Lugar de compra, guarda, recuperación y prueba pequeña.'],['Dónde nacen errores?','Al tratar exchange y wallet como lo mismo.']],
      [['Primera revisión de red?','Confirma que envío y recepción usen la misma red.'],['Comisión baja aún exige cuidado?','Una red errónea puede dificultar recuperar activos.'],['Por qué prueba pequeña?','Para confirmar dirección y red antes de enviar más.']],
      [['Stablecoins son iguales?','Emisor, reservas y liquidez pueden variar.'],['Por qué ver reservas?','Para entender qué estructura sostiene la estabilidad.'],['Qué es depeg?','Cuando la stablecoin sale del valor objetivo.']],
      [['Conectar vs aprobar?','Conectar enlaza wallet; aprobar da permiso al token.'],['Antes de firmar?','Revisa sitio, permiso y acción solicitada.'],['Por qué revocar?','Permisos sin uso pueden abusarse.']],
      [['Antes del hype, qué ver?','Utilidad, tokenomics, liquidez y red flags.'],['Tokenomics: qué ver?','Oferta, distribución, lockup e incentivos.'],['Red flags comunes?','Equipo poco claro, promesas grandes, baja liquidez.']],
      [['Antes del bridge?','Revisa source chain, destination chain y token.'],['Wrapped token requiere cuidado?','Puede tener estructura distinta al activo original.'],['Revisión clave?','Link oficial, comisión, tiempo y chains soportadas.']],
      [['Primer paso al verificar?','Revisa fuente oficial y dominio primero.'],['Por qué ver dominio?','Sitios falsos copian nombre y diseño.'],['Por qué cruzar dirección?','Para evitar tokens falsos con nombres parecidos.']]
    ],
    ar:[
      [['فرق exchange و wallet؟','exchange أسهل للبيع والشراء، و wallet يمنحك تحكما أكبر.'],['ما أول فحص؟','مكان الشراء، مكان الحفظ، خطة الاسترداد، واختبار صغير.'],['أين يحدث الخطأ؟','عند التعامل مع exchange و wallet كأنهما نفس الشيء.']],
      [['أول فحص للشبكة؟','تأكد أن جهة الإرسال والاستقبال تدعمان نفس الشبكة.'],['لماذا الحذر مع الرسوم المنخفضة؟','الشبكة الخاطئة قد تجعل استرداد الأصل صعبا.'],['لماذا اختبار صغير؟','لتأكيد العنوان والشبكة قبل إرسال مبلغ أكبر.']],
      [['هل stablecoins متشابهة؟','المصدر والاحتياطي والسيولة قد تختلف.'],['لماذا نراجع الاحتياطي؟','لفهم ما يدعم نموذج الاستقرار.'],['ما هو depeg؟','ابتعاد stablecoin عن السعر المستهدف.']],
      [['Connect و approval؟','connect يربط wallet، أما approval فيمنح إذن token.'],['قبل التوقيع؟','راجع الموقع والإذن والإجراء المطلوب.'],['لماذا إلغاء الموافقات؟','الأذونات غير المستخدمة قد تستغل لاحقا.']],
      [['قبل hype ماذا نراجع؟','Utility و tokenomics والسيولة وإشارات الخطر.'],['ماذا في tokenomics؟','العرض والتوزيع والقفل والحوافز.'],['إشارات الخطر؟','فريق غير واضح، وعود كبيرة، وسيولة منخفضة.']],
      [['قبل bridge؟','راجع source chain و destination chain والتوكن المدعوم.'],['لماذا الحذر من wrapped token؟','قد يختلف هيكله عن الأصل الحقيقي.'],['أهم فحص؟','الرابط الرسمي، الرسوم، الوقت، والشبكات المدعومة.']],
      [['أول خطوة تحقق؟','راجع المصدر الرسمي والدومين أولا.'],['لماذا الدومين؟','المواقع المزيفة تقلد الاسم والتصميم.'],['لماذا فحص العنوان؟','لتجنب توكنات مزيفة بأسماء مشابهة.']]
    ],
    vi:[
      [['Khác nhau exchange và wallet?','Exchange dễ mua bán; wallet cho bạn nhiều quyền kiểm soát hơn.'],['Cần kiểm tra gì trước?','Nơi mua, nơi lưu, kế hoạch khôi phục và test nhỏ.'],['Lỗi thường ở đâu?','Khi xem exchange và wallet như cùng một công cụ.']],
      [['Kiểm tra network gì trước?','Xác nhận bên gửi và bên nhận hỗ trợ cùng network.'],['Fee thấp vẫn cần cẩn thận?','Sai network có thể khiến tài sản khó khôi phục.'],['Vì sao test nhỏ?','Để xác nhận địa chỉ và network trước khi gửi nhiều hơn.']],
      [['Stablecoin giống nhau không?','Issuer, reserve và liquidity có thể khác nhau.'],['Vì sao xem reserve?','Để biết cấu trúc nào hỗ trợ sự ổn định.'],['Depeg là gì?','Khi stablecoin lệch khỏi giá mục tiêu.']],
      [['Connect và approval khác gì?','Connect là kết nối wallet; approval là cấp quyền token.'],['Trước khi sign?','Kiểm tra site, quyền và hành động được yêu cầu.'],['Vì sao revoke approval?','Quyền không dùng có thể bị lạm dụng.']],
      [['Trước hype xem gì?','Utility, tokenomics, liquidity và red flags.'],['Tokenomics xem gì?','Supply, phân bổ, lockup và incentives.'],['Red flags thường gặp?','Team mơ hồ, hứa quá mức, liquidity thấp.']],
      [['Trước bridge?','Kiểm tra source chain, destination chain và token hỗ trợ.'],['Wrapped token cần cẩn thận?','Cấu trúc có thể khác tài sản gốc.'],['Kiểm tra quan trọng nhất?','Link chính thức, fee, thời gian và chain hỗ trợ.']],
      [['Bước verify đầu tiên?','Kiểm tra official source và domain trước.'],['Vì sao xem domain?','Site giả có thể sao chép tên và thiết kế.'],['Vì sao cross-check address?','Để tránh token giả có tên giống nhau.']]
    ],
    ha:[
      [['Bambancin exchange da wallet?','Exchange ya fi saukin saye da sayarwa; wallet ya fi ba da iko.'],['Me za a fara dubawa?','Wurin saye, wurin ajiya, recovery plan, da karamin test.'],['Ina kuskure ke faruwa?','Idan an dauki exchange da wallet abu daya ne.']],
      [['Network: me za a fara dubawa?','Tabbatar bangaren aika da karba suna goyon bayan network daya.'],['Fee kasa har yanzu hadari?','Wrong network na iya sa kadara ta yi wahalar dawowa.'],['Me yasa karamin test?','Don tabbatar da address da network kafin babban kudi.']],
      [['Stablecoins duk daya ne?','Issuer, reserve, da liquidity na iya bambanta.'],['Me yasa reserve?','Don ganin tsarin da ke goyon bayan stability.'],['Menene depeg?','Lokacin da stablecoin ya fita daga target value.']],
      [['Connect da approval?','Connect yana hada wallet; approval yana ba token izini.'],['Kafin sign?','Duba site, izini, da aikin da ake nema.'],['Me yasa revoke?','Izinin da ba a amfani da shi na iya zama hadari.']],
      [['Kafin hype, me za a duba?','Utility, tokenomics, liquidity, da red flags.'],['Tokenomics: me za a duba?','Supply, distribution, lockup, da incentives.'],['Red flags?','Team mara tabbas, alkawari mai yawa, liquidity kadan.']],
      [['Kafin bridge?','Duba source chain, destination chain, da token support.'],['Wrapped token me yasa hankali?','Tsarinsa na iya bambanta da original asset.'],['Muhimmin duba?','Official link, fee, lokaci, da supported chains.']],
      [['Mataki na farko na verify?','Duba official source da domain da farko.'],['Me yasa domain?','Fake site na iya kwaikwayon suna da design.'],['Me yasa cross-check address?','Don kauce wa fake token mai suna kama.']]
    ]
  };
  COMPACT_REVIEWS.br = COMPACT_REVIEWS.pt;
  COPY.ko = {
    quickKicker:'짧은 복습',
    quickTitle:'짧은 확인 문제',
    quickDesc:'방금 배운 내용을 짧게 확인해 보세요.',
    q:'Q',
    a:'답변',
    relatedDesc:'이 강의와 연결된 체크리스트와 실전 자료를 더 확인할 수 있습니다.',
    libraryAll:'자료 라이브러리 전체 보기'
  };
  COMPACT_REVIEWS.ko = [
    [['거래소와 지갑의 차이는?','거래소는 사고팔기 쉽고, 지갑은 통제권을 더 많이 갖는 곳입니다.'],['먼저 확인할 것은?','구매 위치, 보관 위치, 복구 계획, 소액 테스트를 확인합니다.'],['실수는 어디서 생기나요?','거래소와 지갑을 같은 용도로 생각할 때 실수가 생깁니다.']],
    [['네트워크 먼저 확인할 것은?','보내는 곳과 받는 곳이 같은 네트워크를 지원하는지 확인합니다.'],['수수료가 낮아도 왜 조심하나요?','잘못된 네트워크를 선택하면 자산을 찾기 어려울 수 있습니다.'],['소액 테스트는 왜 하나요?','큰 금액 전송 전 주소와 네트워크가 맞는지 확인하기 위해서입니다.']],
    [['스테이블코인은 모두 같나요?','가격은 비슷해도 발행자, 준비금, 유동성은 다를 수 있습니다.'],['준비금은 왜 보나요?','안정성이 어떤 자산과 구조로 뒷받침되는지 확인하기 위해서입니다.'],['디페그란?','목표 가격에서 벗어나는 상황을 말합니다.']],
    [['연결과 승인의 차이는?','연결은 지갑 접속이고, 승인은 토큰 사용 권한 허용입니다.'],['서명 전 확인할 것은?','어떤 권한을 주는지와 요청한 사이트가 맞는지 확인합니다.'],['승인은 왜 해제하나요?','사용하지 않는 권한이 남으면 악용될 수 있기 때문입니다.']],
    [['유행보다 먼저 볼 것은?','유틸리티, 토크노믹스, 유동성, 위험 신호를 확인합니다.'],['토크노믹스에서 볼 것은?','공급량, 분배, 락업, 인센티브 구조를 봅니다.'],['위험 신호는?','불명확한 팀, 과장된 약속, 낮은 유동성 등이 있습니다.']],
    [['브리지 전 확인할 것은?','출발 체인, 도착 체인, 지원 토큰을 확인합니다.'],['Wrapped token은 왜 주의하나요?','원래 자산과 구조가 다를 수 있기 때문입니다.'],['가장 중요한 확인은?','공식 링크, 수수료, 예상 시간, 지원 체인입니다.']],
    [['정보 확인의 첫 단계는?','공식 출처와 도메인을 먼저 확인합니다.'],['도메인은 왜 보나요?','가짜 사이트는 이름과 디자인을 비슷하게 만들 수 있습니다.'],['주소는 왜 교차 확인하나요?','비슷한 이름의 가짜 토큰을 피하기 위해서입니다.']]
  ];

  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }

  function currentLocale(){
    var lang = 'en';
    try{
      var urlLang = '';
      try{ urlLang = new URLSearchParams(window.location.search || '').get('lang') || ''; }catch(error){}
      lang = urlLang || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || localStorage.getItem('cryptoAcademyLang') || 'en';
    }catch(error){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    return langKey(lang);
  }

  function displayText(value, lang){
    if(value == null) return '';
    if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
    if(Array.isArray(value)) return value.map(function(item){ return displayText(item, lang); }).filter(Boolean).join(' / ');
    if(typeof value === 'object'){
      var locale = langKey(lang || currentLocale());
      var keys = [locale, 'text', 'label', 'title', 'description', 'desc', 'body', 'name', 'term', 'value', 'en', 'ko'];
      for(var i = 0; i < keys.length; i++){
        if(value[keys[i]] == null || value[keys[i]] === value) continue;
        var text = displayText(value[keys[i]], locale);
        if(text) return text;
      }
      return '';
    }
    return String(value);
  }

  function esc(value){
    return displayText(value).replace(/[&<>"']/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }

  function copy(lang){ return COPY[langKey(lang)] || COPY.en; }

  var SUPPORT_UI = {
    en:{understandKicker:'Check',understandTitle:'Understanding check',understandDesc:'Turn the lesson into one safer decision before moving on.',reveal:'Show answer',mistakesKicker:'Warning',mistakesTitle:'Mistakes to avoid',mistakesDesc:'Common failure points are separated into short cards.',checkKicker:'Checklist',checkTitle:'What to check now',checkDesc:'Use these short checks before taking action.',resourcesKicker:'Practice resources',resourcesTitle:'Related practical resources',resourcesDesc:'Open the checklist and resource library connected to this lesson.',glossaryTitle:'Key glossary terms',glossaryDesc:'Review the key terms from this lesson.',sourceTitle:'Source Library',sourceDesc:'Open the full resource library for more references.',openResource:'Open resource',openGlossary:'Open glossary',openSources:'View full Source Library'},
    ko:{understandKicker:'이해도 확인',understandTitle:'이해도 확인',understandDesc:'다음으로 넘어가기 전에 핵심 판단을 한 번 더 확인합니다.',reveal:'정답 보기',mistakesKicker:'주의',mistakesTitle:'피해야 할 실수',mistakesDesc:'본문 설명과 헷갈리기 쉬운 실수 지점을 카드로 정리합니다.',checkKicker:'체크',checkTitle:'지금 확인할 것',checkDesc:'행동하기 전에 아래 항목을 짧게 확인하세요.',resourcesKicker:'실전 자료',resourcesTitle:'함께 보면 좋은 실전 자료',resourcesDesc:'이 강의와 연결된 체크리스트와 자료를 더 확인할 수 있습니다.',glossaryTitle:'핵심 용어 더 보기',glossaryDesc:'이 강의에서 나온 용어를 다시 확인합니다.',sourceTitle:'자료 라이브러리',sourceDesc:'관련 자료와 참고 출처를 이어서 봅니다.',openResource:'자료 열기',openGlossary:'용어 보기',openSources:'자료 라이브러리 전체 보기'},
    th:{understandKicker:'ตรวจความเข้าใจ',understandTitle:'ตรวจความเข้าใจ',understandDesc:'ตรวจจุดสำคัญก่อนเรียนต่อ',reveal:'ดูคำตอบ',mistakesKicker:'ข้อควรระวัง',mistakesTitle:'ข้อผิดพลาดที่ควรหลีกเลี่ยง',mistakesDesc:'แยกจุดเสี่ยงที่พบบ่อยเป็นการ์ดสั้นๆ',checkKicker:'เช็กลิสต์',checkTitle:'สิ่งที่ต้องตรวจตอนนี้',checkDesc:'ตรวจรายการสั้นๆ ก่อนลงมือทำ',resourcesKicker:'แหล่งเรียนรู้',resourcesTitle:'แหล่งเรียนรู้ที่เกี่ยวข้อง',resourcesDesc:'เปิดเช็กลิสต์และคลังแหล่งข้อมูลของบทนี้',glossaryTitle:'คำศัพท์สำคัญ',glossaryDesc:'ทบทวนคำศัพท์สำคัญของบทนี้',sourceTitle:'คลังแหล่งข้อมูล',sourceDesc:'ดูแหล่งข้อมูลเพิ่มเติม',openResource:'เปิดแหล่งเรียนรู้',openGlossary:'เปิดคำศัพท์',openSources:'ดูคลังแหล่งข้อมูลทั้งหมด'},
    id:{understandKicker:'Cek',understandTitle:'Cek pemahaman',understandDesc:'Ubah pelajaran ini menjadi keputusan yang lebih aman.',reveal:'Lihat jawaban',mistakesKicker:'Peringatan',mistakesTitle:'Kesalahan yang perlu dihindari',mistakesDesc:'Pisahkan titik kesalahan umum dalam kartu singkat.',checkKicker:'Checklist',checkTitle:'Yang dicek sekarang',checkDesc:'Gunakan cek singkat ini sebelum bertindak.',resourcesKicker:'Sumber praktik',resourcesTitle:'Sumber praktik terkait',resourcesDesc:'Buka checklist dan pustaka sumber untuk pelajaran ini.',glossaryTitle:'Istilah kunci',glossaryDesc:'Tinjau istilah penting.',sourceTitle:'Pustaka Sumber',sourceDesc:'Lihat referensi lanjutan.',openResource:'Buka sumber',openGlossary:'Buka glosarium',openSources:'Lihat seluruh Pustaka Sumber'},
    pt:{understandKicker:'Verificar',understandTitle:'Verificacao de entendimento',understandDesc:'Transforme a licao em uma decisao mais segura.',reveal:'Mostrar resposta',mistakesKicker:'Atencao',mistakesTitle:'Erros a evitar',mistakesDesc:'Separe erros comuns em cards curtos.',checkKicker:'Checklist',checkTitle:'O que verificar agora',checkDesc:'Use estes pontos antes de agir.',resourcesKicker:'Recursos praticos',resourcesTitle:'Recursos praticos relacionados',resourcesDesc:'Abra o checklist e a biblioteca desta licao.',glossaryTitle:'Termos-chave',glossaryDesc:'Revise os termos principais.',sourceTitle:'Biblioteca de Fontes',sourceDesc:'Veja referencias relacionadas.',openResource:'Abrir recurso',openGlossary:'Abrir glossario',openSources:'Ver toda a Biblioteca de Fontes'},
    br:{understandKicker:'Verificar',understandTitle:'Verificacao de entendimento',understandDesc:'Transforme a aula em uma decisao mais segura.',reveal:'Mostrar resposta',mistakesKicker:'Atencao',mistakesTitle:'Erros a evitar',mistakesDesc:'Separe erros comuns em cards curtos.',checkKicker:'Checklist',checkTitle:'O que verificar agora',checkDesc:'Use estes pontos antes de agir.',resourcesKicker:'Recursos praticos',resourcesTitle:'Recursos praticos relacionados',resourcesDesc:'Abra o checklist e a biblioteca desta aula.',glossaryTitle:'Termos-chave',glossaryDesc:'Revise os termos principais.',sourceTitle:'Biblioteca de Fontes',sourceDesc:'Veja referencias relacionadas.',openResource:'Abrir recurso',openGlossary:'Abrir glossario',openSources:'Ver toda a Biblioteca de Fontes'},
    tr:{understandKicker:'Kontrol',understandTitle:'Anlama kontrolu',understandDesc:'Devam etmeden once daha guvenli bir karar verin.',reveal:'Cevabi goster',mistakesKicker:'Uyari',mistakesTitle:'Kacinilacak hatalar',mistakesDesc:'Yaygin hatalari kisa kartlara ayirin.',checkKicker:'Kontrol',checkTitle:'Simdi kontrol edilecekler',checkDesc:'Harekete gecmeden once kontrol edin.',resourcesKicker:'Pratik kaynaklar',resourcesTitle:'Ilgili pratik kaynaklar',resourcesDesc:'Bu dersin kontrol listesini ve kaynak kutuphanesini acin.',glossaryTitle:'Temel terimler',glossaryDesc:'Onemli terimleri tekrar edin.',sourceTitle:'Kaynak Kutuphanesi',sourceDesc:'Ilgili kaynaklari gorun.',openResource:'Kaynak ac',openGlossary:'Sozlugu ac',openSources:'Tum Kaynak Kutuphanesini gor'},
    es:{understandKicker:'Comprobar',understandTitle:'Comprobacion de comprension',understandDesc:'Convierte la leccion en una decision mas segura.',reveal:'Ver respuesta',mistakesKicker:'Advertencia',mistakesTitle:'Errores a evitar',mistakesDesc:'Separa errores comunes en tarjetas breves.',checkKicker:'Checklist',checkTitle:'Que revisar ahora',checkDesc:'Usa estas revisiones antes de actuar.',resourcesKicker:'Recursos practicos',resourcesTitle:'Recursos practicos relacionados',resourcesDesc:'Abre el checklist y la biblioteca de fuentes.',glossaryTitle:'Terminos clave',glossaryDesc:'Repasa los terminos clave.',sourceTitle:'Biblioteca de Fuentes',sourceDesc:'Consulta recursos relacionados.',openResource:'Abrir recurso',openGlossary:'Abrir glosario',openSources:'Ver toda la Biblioteca de Fuentes'},
    ar:{understandKicker:'تحقق',understandTitle:'تحقق من الفهم',understandDesc:'حوّل الدرس إلى قرار أكثر أمانا قبل المتابعة.',reveal:'عرض الإجابة',mistakesKicker:'تنبيه',mistakesTitle:'أخطاء يجب تجنبها',mistakesDesc:'افصل نقاط الخطأ الشائعة في بطاقات قصيرة.',checkKicker:'قائمة تحقق',checkTitle:'ما يجب فحصه الآن',checkDesc:'استخدم هذه الفحوصات قبل أي إجراء.',resourcesKicker:'مصادر تطبيقية',resourcesTitle:'مصادر تطبيقية مرتبطة',resourcesDesc:'افتح قائمة التحقق ومكتبة المصادر.',glossaryTitle:'مصطلحات أساسية',glossaryDesc:'راجع المصطلحات المهمة.',sourceTitle:'مكتبة المصادر',sourceDesc:'راجع المواد المرتبطة.',openResource:'فتح المصدر',openGlossary:'فتح المصطلحات',openSources:'عرض مكتبة المصادر كاملة'},
    vi:{understandKicker:'Kiem tra',understandTitle:'Kiem tra hieu bai',understandDesc:'Chuyen bai hoc thanh quyet dinh an toan hon.',reveal:'Xem dap an',mistakesKicker:'Canh bao',mistakesTitle:'Loi can tranh',mistakesDesc:'Tach loi thuong gap thanh card ngan.',checkKicker:'Checklist',checkTitle:'Can kiem tra ngay',checkDesc:'Dung cac muc ngan nay truoc khi hanh dong.',resourcesKicker:'Tai lieu thuc hanh',resourcesTitle:'Tai lieu thuc hanh lien quan',resourcesDesc:'Mo checklist va thu vien nguon.',glossaryTitle:'Thuat ngu chinh',glossaryDesc:'On lai thuat ngu quan trong.',sourceTitle:'Thu vien nguon',sourceDesc:'Xem tai lieu lien quan.',openResource:'Mo tai lieu',openGlossary:'Mo thuat ngu',openSources:'Xem toan bo Thu vien nguon'},
    ha:{understandKicker:'Dubawa',understandTitle:'Duba fahimta',understandDesc:'Mayar da darasin zuwa shawara mafi aminci.',reveal:'Nuna amsa',mistakesKicker:'Gargadi',mistakesTitle:'Kuskuren gujewa',mistakesDesc:'Raba kuskure a cikin katuna.',checkKicker:'Jerin duba',checkTitle:'Abin dubawa yanzu',checkDesc:'Duba wadannan kafin aiki.',resourcesKicker:'Kayan aiki',resourcesTitle:'Kayan aiki masu alaka',resourcesDesc:'Bude checklist da laburaren tushe.',glossaryTitle:'Muhimman kalmomi',glossaryDesc:'Sake duba kalmomi.',sourceTitle:'Laburaren Tushe',sourceDesc:'Duba karin kayan aiki.',openResource:'Bude kayan aiki',openGlossary:'Bude kamus',openSources:'Duba duk Laburaren Tushe'}
  };

  var SUPPORT_CONTENT = {
    en:[
      {understand:['Custody decision card','Split assets by purpose instead of keeping everything in one place.'],checks:['Soon-to-trade assets can fit an exchange','Long-term holdings fit a wallet better','Recovery readiness comes first','Do not move everything at once'],mistakes:[['Treating exchanges and wallets as the same tool','Exchanges are convenient for trading; wallets carry more control and recovery responsibility.'],['Moving to a wallet without a recovery plan','If you do not understand seed phrases and backups, access can be lost.'],['Moving a large amount first','A small test lowers mistake risk before a larger move.']],review:['Where should this asset stay?','Check purpose, holding period, recovery readiness, and test amount first.'],resource:['Exchange vs Wallet Checklist','Separate buying, custody, recovery, and test-transfer checks.']},
      {understand:['Network comparison card','A transfer is only safe when asset, network, address, and destination support match.'],checks:['Match sender and receiver network','Check fee and minimum amount','Confirm memo or tag requirements','Use a small test when unsure'],mistakes:[['Choosing only the cheapest network','Low fees do not help if the destination does not support the network.'],['Ignoring memo or tag fields','Some deposits need extra information to be credited correctly.'],['Skipping the small test','A small transfer can reveal a wrong route before the main amount.']],review:['What matters before sending?','Network support, address, fee, memo/tag, and a small test.'],resource:['Network and Fee Comparison Guide','Compare transfer cost, speed, support, and mistake risk.']},
      {understand:['Stablecoin risk card','Similar prices can hide different issuers, reserves, liquidity, and depeg risks.'],checks:['Check issuer and reserve information','Compare liquidity before moving size','Know the network support','Watch for depeg risk'],mistakes:[['Assuming all stablecoins are identical','Trust model, reserve structure, and liquidity can differ.'],['Ignoring reserve information','You need to know what supports the stablecoin.'],['Holding size without checking liquidity','Exiting can be harder when liquidity is thin.']],review:['What should you compare?','Issuer, reserves, liquidity, network support, and depeg risk.'],resource:['Stablecoin Risk Notes','Review reserve, issuer, depeg, and liquidity checks.']},
      {understand:['DeFi permission card','The wallet popup is the real decision point: connect, approve, sign, and swap are different.'],checks:['Verify the domain before connecting','Read spender, token, and amount','Limit approvals when possible','Revoke unused approvals'],mistakes:[['Approving unlimited access too quickly','Large approvals on unverified sites can stay risky.'],['Signing without reading the wallet request','The page design matters less than the wallet action.'],['Leaving old approvals active','Unused permissions can be abused later.']],review:['What should you read first?','The site, requested permission, spender, token, amount, and action.'],resource:['DeFi Approval Safety Checklist','Check wallet requests and approval risk before using DeFi.']},
      {understand:['Project review card','Judge projects by evidence, not image, hype, or promises.'],checks:['Review utility and activity','Check liquidity and holder distribution','Verify official links','Look for red flags'],mistakes:[['Buying hype alone','A loud community or image is not proof of project quality.'],['Ignoring liquidity','Low liquidity can make exiting difficult.'],['Trusting unverified links','Fake links and copied projects can look convincing.']],review:['What comes before hype?','Utility, tokenomics, liquidity, activity, and red flags.'],resource:['Project Review Checklist','Review utility, tokenomics, liquidity, and warning signs.']},
      {understand:['Bridge decision card','A bridge adds route, contract, chain, and asset-version risk.'],checks:['Confirm source and destination chain','Use official bridge links','Check token version and fees','Start with a small test'],mistakes:[['Treating a bridge like a normal send','Cross-chain moves add route and contract risk.'],['Using an unofficial bridge link','Copied bridge pages can be dangerous.'],['Ignoring wrapped-token differences','Wrapped tokens can differ from the original asset.']],review:['What should you confirm first?','Source chain, destination chain, token support, official link, and test path.'],resource:['Bridge Safety Guide','Check chain, bridge, wrapped token, fee, and route risk.']},
      {understand:['Verification routine card','Verify in a repeatable order before trusting posts, DMs, links, or screenshots.'],checks:['Start from official sources','Compare exact domains','Cross-check contract addresses','Pause before wallet actions'],mistakes:[['Clicking the first search or DM link','Scams often imitate names and designs.'],['Checking only one source','One screenshot or repost is not enough.'],['Skipping contract address checks','Fake tokens can use similar names.']],review:['What is the first step?','Start with official sources and exact domains, then cross-check addresses.'],resource:['Verification Routine Guide','Build a repeatable source, domain, contract, and wallet-action routine.']}
    ],
    ko:[
      {understand:['보관 판단 참고 카드','모든 자산을 한 곳에 두기보다 목적별로 나눠봅니다.'],checks:['곧 거래할 자산은 거래소가 편할 수 있음','장기 보관은 지갑이 더 적합함','복구 준비가 먼저임','한 번에 전부 옮기지 않기'],mistakes:[['거래소와 지갑을 같은 용도로 보기','거래소는 거래에 편하고, 지갑은 통제권과 복구 책임이 더 큽니다.'],['복구 계획 없이 지갑으로 옮기기','복구 문구와 백업 방법을 모르면 접근을 잃을 수 있습니다.'],['처음부터 큰 금액을 옮기기','소액 테스트 없이 큰 금액을 이동하면 실수 위험이 커집니다.']],review:['이 자산은 어디에 둘까?','목적, 보관 기간, 복구 준비, 소액 테스트를 먼저 확인합니다.'],resource:['거래소와 지갑 비교 체크리스트','구매, 보관, 복구 준비를 나눠서 확인할 수 있는 자료입니다.']},
      {understand:['네트워크 비교 참고 카드','자산, 네트워크, 주소, 받는 곳의 지원 여부가 맞아야 전송이 안전합니다.'],checks:['보내는 곳과 받는 곳의 네트워크 일치','수수료와 최소 금액 확인','메모 또는 태그 필요 여부 확인','불확실하면 소액 테스트'],mistakes:[['수수료만 보고 네트워크 선택하기','수수료가 낮아도 받는 곳이 지원하지 않으면 복구가 어려울 수 있습니다.'],['메모나 태그를 무시하기','일부 입금은 추가 정보가 있어야 정상 반영됩니다.'],['소액 테스트 없이 바로 전송하기','작은 금액으로 먼저 확인하면 큰 실수를 줄일 수 있습니다.']],review:['전송 전 무엇을 볼까?','네트워크 지원, 주소, 수수료, 메모/태그, 소액 테스트를 확인합니다.'],resource:['네트워크와 수수료 비교 가이드','전송 비용, 속도, 지원 여부, 실수 위험을 비교합니다.']},
      {understand:['스테이블코인 위험 참고 카드','가격이 비슷해도 발행자, 준비금, 유동성, 디페그 위험은 다를 수 있습니다.'],checks:['발행자와 준비금 정보 확인','큰 금액 전 유동성 확인','지원 네트워크 확인','디페그 위험 살펴보기'],mistakes:[['모든 스테이블코인을 같게 보기','신뢰 구조, 준비금, 유동성은 서로 다를 수 있습니다.'],['준비금 정보를 확인하지 않기','무엇이 가치를 뒷받침하는지 확인해야 합니다.'],['유동성 없이 큰 금액 보유하기','유동성이 낮으면 나중에 빠져나오기 어려울 수 있습니다.']],review:['무엇을 비교해야 할까?','발행자, 준비금, 유동성, 네트워크 지원, 디페그 위험을 봅니다.'],resource:['스테이블코인 위험 메모','준비금, 발행자, 디페그, 유동성 체크를 복습합니다.']},
      {understand:['DeFi 권한 참고 카드','지갑 팝업이 실제 판단 지점입니다. 연결, 승인, 서명, 스왑을 구분하세요.'],checks:['연결 전 도메인 확인','승인 대상, 토큰, 금액 읽기','가능하면 승인 범위 줄이기','사용하지 않는 승인 해제'],mistakes:[['무제한 승인을 빠르게 누르기','검증하지 않은 사이트의 큰 승인은 오래 위험으로 남을 수 있습니다.'],['지갑 요청을 읽지 않고 서명하기','화면 디자인보다 지갑이 요구하는 행동이 더 중요합니다.'],['예전 승인을 그대로 두기','사용하지 않는 권한이 나중에 악용될 수 있습니다.']],review:['무엇을 먼저 읽어야 할까?','사이트, 권한, 승인 대상, 토큰, 금액, 요청 행동을 확인합니다.'],resource:['DeFi 승인 안전 체크리스트','DeFi 사용 전 지갑 요청과 승인 위험을 확인합니다.']},
      {understand:['프로젝트 검토 참고 카드','이미지, 유행, 약속보다 확인 가능한 근거로 프로젝트를 봅니다.'],checks:['유틸리티와 활동성 확인','유동성과 보유자 분포 확인','공식 링크 검증','위험 신호 확인'],mistakes:[['유행만 보고 판단하기','커뮤니티 분위기나 이미지가 프로젝트 품질의 증거는 아닙니다.'],['유동성을 보지 않기','유동성이 낮으면 빠져나오기 어려울 수 있습니다.'],['검증되지 않은 링크를 믿기','가짜 링크와 복제 프로젝트도 그럴듯해 보일 수 있습니다.']],review:['유행보다 먼저 볼 것은?','유틸리티, 토크노믹스, 유동성, 활동성, 위험 신호입니다.'],resource:['프로젝트 검토 체크리스트','유틸리티, 토크노믹스, 유동성, 위험 신호를 확인합니다.']},
      {understand:['브리지 판단 참고 카드','브리지는 경로, 컨트랙트, 체인, 자산 버전 위험이 함께 생깁니다.'],checks:['출발 체인과 도착 체인 확인','공식 브리지 링크 사용','토큰 버전과 수수료 확인','소액 테스트 먼저'],mistakes:[['브리지를 일반 전송처럼 보기','체인을 넘는 이동은 경로와 컨트랙트 위험이 추가됩니다.'],['비공식 브리지 링크 사용하기','복제된 브리지 페이지는 위험할 수 있습니다.'],['Wrapped token 차이를 무시하기','Wrapped token은 원래 자산과 구조가 다를 수 있습니다.']],review:['먼저 확인할 것은?','출발 체인, 도착 체인, 토큰 지원, 공식 링크, 테스트 경로입니다.'],resource:['브리지 안전 가이드','체인, 브리지, Wrapped token, 수수료, 경로 위험을 확인합니다.']},
      {understand:['검증 루틴 참고 카드','게시물, DM, 링크, 캡처를 믿기 전에 반복 가능한 순서로 확인합니다.'],checks:['공식 출처에서 시작','정확한 도메인 비교','컨트랙트 주소 교차 확인','지갑 행동 전 멈추기'],mistakes:[['검색 결과나 DM 첫 링크 클릭하기','사기는 이름과 디자인을 비슷하게 따라 할 수 있습니다.'],['출처 하나만 확인하기','캡처 하나나 repost 하나만으로는 충분하지 않습니다.'],['컨트랙트 주소 확인을 생략하기','비슷한 이름의 가짜 토큰이 있을 수 있습니다.']],review:['첫 단계는 무엇일까?','공식 출처와 정확한 도메인에서 시작하고, 주소를 교차 확인합니다.'],resource:['정보 검증 루틴 가이드','출처, 도메인, 컨트랙트, 지갑 행동을 순서대로 확인합니다.']}
    ]
  };

  function supportUi(lang){
    return SUPPORT_UI[langKey(lang)] || SUPPORT_UI.en;
  }

  var CORE_LINES = {
    en:[
      'Use exchanges for buying and wallets for control, but know why each one exists.',
      'A transfer is safe only when the network, address, fee, and destination support match.',
      'Stablecoins can look similar in price but differ in issuer, reserves, liquidity, and depeg risk.',
      'In DeFi, read what the wallet asks you to connect, approve, sign, or swap.',
      'Review projects by evidence, liquidity, utility, and red flags before hype.',
      'A bridge is not a normal send; chain, route, contract, and asset version all matter.',
      'Verify official source, domain, contract address, and wallet request before acting.'
    ],
    ko:[
      '거래소는 사고팔기 편한 곳이고, 지갑은 사용자가 통제권을 더 많이 갖는 곳입니다.',
      '전송은 네트워크, 주소, 수수료, 받는 곳의 지원 여부가 맞아야 안전합니다.',
      '스테이블코인은 가격이 비슷해 보여도 발행자, 준비금, 유동성, 디페그 위험이 다를 수 있습니다.',
      'DeFi에서는 지갑이 연결, 승인, 서명, 스왑 중 무엇을 요구하는지 읽어야 합니다.',
      '프로젝트는 유행보다 근거, 유동성, 유틸리티, 위험 신호를 먼저 확인해야 합니다.',
      '브리지는 일반 전송이 아니며 체인, 경로, 컨트랙트, 자산 버전을 함께 확인해야 합니다.',
      '행동하기 전에 공식 출처, 도메인, 컨트랙트 주소, 지갑 요청을 순서대로 검증해야 합니다.'
    ]
  };

  var UNDERSTANDING_COPY = {
    en:{ kicker:'Understanding Check', title:'Understanding Check', desc:'Confirm one key point before moving on.', reveal:'Show answer' },
    ko:{ kicker:'이해도 확인', title:'이해도 확인', desc:'핵심을 이해했는지 한 번 더 확인해 보세요.', reveal:'정답 보기' },
    th:{ kicker:'ตรวจความเข้าใจ', title:'ตรวจความเข้าใจ', desc:'ตรวจประเด็นสำคัญอีกครั้งก่อนเรียนต่อ', reveal:'ดูคำตอบ' },
    id:{ kicker:'Cek Pemahaman', title:'Cek Pemahaman', desc:'Pastikan satu poin penting sebelum lanjut.', reveal:'Lihat jawaban' },
    pt:{ kicker:'Verificacao de entendimento', title:'Verificacao de entendimento', desc:'Confirme um ponto-chave antes de continuar.', reveal:'Mostrar resposta' },
    br:{ kicker:'Verificacao de entendimento', title:'Verificacao de entendimento', desc:'Confirme um ponto-chave antes de continuar.', reveal:'Mostrar resposta' },
    tr:{ kicker:'Anlama kontrolu', title:'Anlama kontrolu', desc:'Devam etmeden once bir ana noktayi kontrol edin.', reveal:'Cevabi goster' },
    es:{ kicker:'Comprobacion de comprension', title:'Comprobacion de comprension', desc:'Confirma un punto clave antes de continuar.', reveal:'Ver respuesta' },
    ar:{ kicker:'تحقق الفهم', title:'تحقق الفهم', desc:'أكد نقطة أساسية قبل المتابعة.', reveal:'عرض الإجابة' },
    vi:{ kicker:'Kiem tra hieu bai', title:'Kiem tra hieu bai', desc:'Xac nhan mot diem chinh truoc khi tiep tuc.', reveal:'Xem dap an' },
    ha:{ kicker:'Duba fahimta', title:'Duba fahimta', desc:'Tabbatar da muhimmin batu kafin ci gaba.', reveal:'Nuna amsa' }
  };

  function understandingCopy(lang){
    return UNDERSTANDING_COPY[langKey(lang)] || UNDERSTANDING_COPY.en;
  }

  function lessonData(index, lang){
    var key = langKey(lang);
    try{
      if(typeof lessonOverrides !== 'undefined' && lessonOverrides[key] && lessonOverrides[key][index]) return lessonOverrides[key][index];
    }catch(error){}
    try{
      if(typeof lessons !== 'undefined' && lessons[key] && lessons[key][index]) return lessons[key][index];
      if(typeof lessons !== 'undefined' && lessons.en && lessons.en[index]) return lessons.en[index];
    }catch(error){}
    return null;
  }

  function sourcesHref(){
    try{
      if(typeof basePrefix === 'function') return basePrefix() + 'sources/';
    }catch(error){}
    try{
      return ((document.body && document.body.dataset && document.body.dataset.basePrefix) || './') + 'sources/';
    }catch(error){}
    return './sources/';
  }

  function reviewItems(index, lang){
    var key = langKey(lang);
    var list = COMPACT_REVIEWS[key] || REVIEWS[key] || COMPACT_REVIEWS.en || REVIEWS.en;
    return list[index - START_INDEX] || [];
  }

  function supportData(index, lang){
    var key = langKey(lang);
    var offset = index - START_INDEX;
    var localized = SUPPORT_CONTENT[key] && SUPPORT_CONTENT[key][offset];
    if(localized) return localized;
    var fallback = (SUPPORT_CONTENT.en && SUPPORT_CONTENT.en[offset]) || {};
    var lesson = lessonData(index, key) || lessonData(index, 'en') || {};
    var checks = [];
    if(Array.isArray(lesson.checkpoints)) checks = lesson.checkpoints.slice(0, 4).map(function(item){ return displayText(item, key); }).filter(Boolean);
    if(!checks.length && Array.isArray(lesson.mistakes)) checks = lesson.mistakes.slice(0, 4).map(function(item){ return displayText(item, key); }).filter(Boolean);
    if(!checks.length && Array.isArray(lesson.visual)) checks = lesson.visual.slice(0, 4).map(function(item){ return displayText(item, key); }).filter(Boolean);
    if(!checks.length) checks = (fallback.checks || []).slice(0, 4);
    var mistakeText = displayText(lesson.mistake || (lesson.sections && lesson.sections[3] && lesson.sections[3].ps && lesson.sections[3].ps[0]) || '', key);
    return {
      understand:[displayText(lesson.sub || lesson.title || '', key) || (fallback.understand && fallback.understand[0]) || '', displayText(lesson.one || lesson.intro || lesson.easy || '', key) || (fallback.understand && fallback.understand[1]) || ''],
      checks:checks,
      mistakes:[
        [mistakeText || (fallback.mistakes && fallback.mistakes[0] && fallback.mistakes[0][0]) || '', (fallback.mistakes && fallback.mistakes[0] && fallback.mistakes[0][1]) || mistakeText || ''],
        [checks[0] || '', checks[1] || ''],
        [checks[2] || '', checks[3] || checks[0] || '']
      ].filter(function(pair){ return pair[0] || pair[1]; }).slice(0, 3),
      review:(reviewItems(index, key) && reviewItems(index, key)[0]) || fallback.review || [],
      resource:[displayText(lesson.title || '', key) || (fallback.resource && fallback.resource[0]) || '', displayText(lesson.sub || lesson.intro || '', key) || (fallback.resource && fallback.resource[1]) || '']
    };
  }

  function coreLine(index, lang){
    var key = langKey(lang);
    var offset = index - START_INDEX;
    if(CORE_LINES[key] && CORE_LINES[key][offset]) return CORE_LINES[key][offset];
    var lesson = lessonData(index, key) || lessonData(index, 'en') || {};
    return displayText(lesson.one || lesson.intro || '', key) || (CORE_LINES.en[offset] || '');
  }

  function normalizeCoreCallout(html, index, lang){
    var key = langKey(lang);
    var label = key === 'ko' ? '한 줄 핵심' : 'One-line key idea';
    var replacement = '<div class="callout info intermediate-core-callout"><strong>' + esc(label) + '</strong><span>' + esc(coreLine(index, key)) + '</span></div>';
    var next = String(html || '');
    next = next.replace(/<div\s+class="callout info intermediate-core-callout">[\s\S]*?<\/div>/g, '');
    var pattern = /<div\s+class="callout info">\s*<strong>[^<]*(?:One-line key idea|한 줄 핵심)[^<]*<\/strong>[\s\S]*?<\/div>/i;
    if(pattern.test(next)) return next.replace(pattern, replacement);
    return next.replace(/<div\s+class="lesson-body">/, '<div class="lesson-body">' + replacement);
  }

  function baseHref(){
    try{
      if(typeof basePrefix === 'function') return basePrefix();
    }catch(error){}
    try{
      return (document.body && document.body.dataset && document.body.dataset.basePrefix) || './';
    }catch(error){}
    return './';
  }

  function internalHref(path){
    if(/^https?:\/\//.test(String(path || ''))) return path;
    return baseHref() + String(path || '').replace(/^\.\//, '');
  }

  function checklistHref(index){
    if(index === START_INDEX) return internalHref('checklists/seed-phrase-safety/');
    if(index === 10 || index === 12 || index === 13) return internalHref('checklists/fake-website-check/');
    return internalHref('checklists/before-send/');
  }

  function renderSupportResourceCard(href, label, title, desc, linkText){
    return '<a class="source-card related-resource-card intermediate-resource-card" href="' + esc(href || '#') + '">'
      + '<span class="related-card-label">' + esc(label) + '</span>'
      + '<strong class="related-card-title">' + esc(title) + '</strong>'
      + '<span class="related-card-desc">' + esc(desc) + '</span>'
      + '<span class="related-card-link">' + esc(linkText) + '</span>'
      + '</a>';
  }

  function renderIntermediateSupportCards(index, lang){
    var ui = supportUi(lang);
    var data = supportData(index, lang);
    var lessonNo = index + 1;
    return '<section class="intermediate-support-block" data-intermediate-support-cards="' + esc(lessonNo) + '">'
      + '<div class="intermediate-support-grid">'
      + '<article class="intermediate-support-panel intermediate-mistake-panel">'
      + '<div class="intermediate-support-head"><span class="lesson-guide-kicker">' + esc(ui.mistakesKicker) + '</span><h2>' + esc(ui.mistakesTitle) + '</h2><p>' + esc(ui.mistakesDesc) + '</p></div>'
      + '<div class="intermediate-mistake-list">' + (data.mistakes || []).map(function(item){ return '<div class="intermediate-mistake-card"><strong>' + esc(item[0]) + '</strong><p>' + esc(item[1]) + '</p></div>'; }).join('') + '</div>'
      + '</article>'
      + '<article class="intermediate-support-panel intermediate-check-panel">'
      + '<div class="intermediate-support-head"><span class="lesson-guide-kicker">' + esc(ui.checkKicker) + '</span><h2>' + esc(ui.checkTitle) + '</h2><p>' + esc(ui.checkDesc) + '</p></div>'
      + '<ul class="intermediate-check-list">' + (data.checks || []).slice(0, 4).map(function(item){ return '<li><span aria-hidden="true"></span>' + esc(item) + '</li>'; }).join('') + '</ul>'
      + '</article>'
      + '</div>'
      + '</section>';
  }

  function renderPracticalResources(index, lang){
    var ui = supportUi(lang);
    var data = supportData(index, lang);
    var lessonNo = index + 1;
    return '<section class="intermediate-practical-resources" data-intermediate-practical-resources="' + esc(lessonNo) + '">'
      + '<div class="lesson-guide-panel">'
      + '<div class="lesson-guide-panel-head"><span class="lesson-guide-kicker">' + esc(ui.resourcesKicker) + '</span><h3>' + esc(ui.resourcesTitle) + '</h3></div>'
      + '<p class="intermediate-related-desc">' + esc(ui.resourcesDesc) + '</p>'
      + '<div class="intermediate-resource-grid">'
      + renderSupportResourceCard(checklistHref(index), ui.checkKicker, (data.resource && data.resource[0]) || ui.resourcesTitle, (data.resource && data.resource[1]) || ui.resourcesDesc, ui.openResource)
      + renderSupportResourceCard(internalHref('glossary/'), ui.glossaryTitle, ui.glossaryTitle, ui.glossaryDesc, ui.openGlossary)
      + renderSupportResourceCard(internalHref('sources/'), ui.sourceTitle, ui.sourceTitle, ui.sourceDesc, ui.openSources)
      + '</div>'
      + '</div>'
      + '</section>';
  }

  function renderQuickReview(index, lang){
    var items = reviewItems(index, lang);
    if(!items.length) return '';
    var c = copy(lang);
    return '<section class="lesson-quick-review lesson-quick-review-compact intermediate-quick-review intermediate-quick-review-fixed" data-lesson-quick-review="' + esc(index + 1) + '" data-intermediate-quick-review="' + esc(index + 1) + '">'
      + '<div class="lesson-quick-review-head intermediate-quick-review-head"><span class="section-kicker lesson-guide-kicker">' + esc(c.quickKicker || 'Quick Review') + '</span><h2>' + esc(c.quickTitle) + '</h2><p>' + esc(c.quickDesc) + '</p></div>'
      + '<div class="quick-review-grid intermediate-quick-review-grid">'
      + items.map(function(item, offset){
        return '<article class="quick-review-card intermediate-quick-review-card">'
          + '<span class="quick-review-label quick-review-index">Q' + (offset + 1) + '</span>'
          + '<h3>' + esc(item[0]) + '</h3>'
          + '<p><span>' + esc(c.a) + '</span>' + esc(item[1]) + '</p>'
          + '</article>';
      }).join('')
      + '</div>'
      + '</section>';
  }

  function renderUnderstandingCheck(index, lang){
    var data = supportData(index, lang);
    var items = data && data.review && data.review.length ? [data.review] : [];
    if(!items.length){
      var review = reviewItems(index, lang);
      if(review.length) items = [review[0]];
    }
    if(!items.length) return '';
    var lessonNo = index + 1;
    var c = supportUi(lang);
    return '<section class="lesson-understanding-check intermediate-understanding-check" data-intermediate-understanding-check="' + esc(lessonNo) + '">'
      + '<div class="lesson-understanding-head"><span class="section-kicker lesson-guide-kicker">' + esc(c.understandKicker) + '</span><h2>' + esc(c.understandTitle) + '</h2><p>' + esc(c.understandDesc) + '</p></div>'
      + '<div class="understanding-check-grid">'
      + items.map(function(item){
        return '<article class="understanding-check-card">'
          + '<strong class="understanding-check-question">' + esc(item && item[0]) + '</strong>'
          + '<button type="button" class="complete-btn understanding-check-toggle" onclick="this.nextElementSibling.hidden=false; this.hidden=true;">' + esc(c.reveal) + '</button>'
          + '<p class="understanding-check-answer" hidden>' + esc(item && item[1]) + '</p>'
          + '</article>';
      }).join('')
      + '</div>'
      + '</section>';
  }

  function isRealQuickReviewSection(node){
    if(!node || !node.classList || String(node.tagName || '').toLowerCase() !== 'section') return false;
    if(node.classList.contains('lesson-content')) return false;
    return node.hasAttribute('data-lesson-quick-review') || node.hasAttribute('data-intermediate-quick-review') || node.classList.contains('lesson-quick-review');
  }

  function cleanupQuickReviewClassPollution(root){
    if(typeof document === 'undefined') return;
    root = root && root.querySelectorAll ? root : document;
    var pollutedSelector = '.lesson-content,.lesson-body,.lesson-layout,.lesson-main,.lesson-panel,[id^="lesson"]';
    var nodes = [];
    if(root.matches && root.matches(pollutedSelector)) nodes.push(root);
    nodes = nodes.concat(Array.prototype.slice.call(root.querySelectorAll(pollutedSelector)));
    nodes.forEach(function(node){
      if(isRealQuickReviewSection(node)) return;
      QUICK_REVIEW_CLASSES.forEach(function(cls){
        if(node.classList) node.classList.remove(cls);
      });
      if(node.removeAttribute){
        node.removeAttribute('data-lesson-quick-review');
        node.removeAttribute('data-intermediate-quick-review');
      }
    });
  }

  function readLessonNoFromNode(node){
    if(!node || !node.getAttribute) return 0;
    var raw = node.getAttribute('data-intermediate-quick-review') || node.getAttribute('data-lesson-quick-review') || '';
    var parsed = parseInt(raw, 10);
    if(isFinite(parsed) && parsed >= 8 && parsed <= 14) return parsed;
    var root = node.closest && node.closest('[id^="lesson"]');
    if(root && root.id){
      parsed = parseInt(String(root.id).replace(/^lesson/, ''), 10);
      if(isFinite(parsed)){
        if(parsed >= START_INDEX && parsed <= END_INDEX) return parsed + 1;
        if(parsed >= 8 && parsed <= 14) return parsed;
      }
    }
    return 0;
  }

  function promoteQuickReviewNode(section){
    if(!section || !section.style) return;
    if(!isRealQuickReviewSection(section)) return;
    section.style.gridColumn = '1 / -1';
    section.style.width = '100%';
    section.style.maxWidth = '100%';
    var root = section.closest && (section.closest('.lesson-content') || section.closest('[id^="lesson"]'));
    var related = root && root.querySelector && root.querySelector('.lesson-system-related');
    if(related && related.parentNode && section.parentNode !== related.parentNode){
      related.parentNode.insertBefore(section, related);
    }
  }

  function normalizeQuickReviewNode(section){
    if(!section || !section.querySelector) return;
    if(!isRealQuickReviewSection(section)) return;
    var lessonNo = readLessonNoFromNode(section);
    if(!lessonNo) return;
    var lang = currentLocale();
    var items = reviewItems(lessonNo - 1, lang);
    if(!items.length) return;
    var c = copy(lang);

    section.classList.add('lesson-quick-review', 'lesson-quick-review-compact', 'intermediate-quick-review', 'intermediate-quick-review-fixed');
    section.setAttribute('data-lesson-quick-review', String(lessonNo));
    section.setAttribute('data-intermediate-quick-review', String(lessonNo));
    promoteQuickReviewNode(section);

    var head = section.querySelector('.lesson-quick-review-head, .intermediate-quick-review-head');
    if(!head){
      head = document.createElement('div');
      head.className = 'lesson-quick-review-head intermediate-quick-review-head';
      section.insertBefore(head, section.firstChild);
    }
    head.innerHTML = '<span class="section-kicker lesson-guide-kicker">' + esc(c.quickKicker || 'Quick Review') + '</span><h2>' + esc(c.quickTitle) + '</h2><p>' + esc(c.quickDesc) + '</p>';

    var grid = section.querySelector('.quick-review-grid, .intermediate-quick-review-grid');
    if(!grid){
      grid = document.createElement('div');
      section.appendChild(grid);
    }
    grid.classList.add('quick-review-grid', 'intermediate-quick-review-grid');
    grid.innerHTML = items.map(function(item, offset){
      return '<article class="quick-review-card intermediate-quick-review-card">'
        + '<span class="quick-review-label quick-review-index">Q' + (offset + 1) + '</span>'
        + '<h3>' + esc(item[0]) + '</h3>'
        + '<p><span>' + esc(c.a) + '</span>' + esc(item[1]) + '</p>'
        + '</article>';
    }).join('');
  }

  function forceCompactQuickReviews(root){
    if(typeof document === 'undefined') return;
    root = root && root.querySelectorAll ? root : document;
    cleanupQuickReviewClassPollution(root);
    var actualNodes = Array.prototype.slice.call(root.querySelectorAll('section[data-intermediate-quick-review], section[data-lesson-quick-review], section.lesson-quick-review')).filter(isRealQuickReviewSection);
    actualNodes.forEach(normalizeQuickReviewNode);
    cleanupQuickReviewClassPollution(root);
    return;
    var nodes = Array.prototype.slice.call(root.querySelectorAll('.lesson-quick-review, [data-intermediate-quick-review], [data-lesson-quick-review]'));
    Array.prototype.slice.call(root.querySelectorAll('section, div')).forEach(function(node){
      if(nodes.indexOf(node) !== -1) return;
      var text = node.textContent || '';
      if((text.indexOf('짧은 확인 문제') !== -1 || text.indexOf('Quick Review') !== -1 || text.indexOf('QUICK REVIEW') !== -1) && node.querySelector && node.querySelector('.quick-review-card, .intermediate-quick-review-card')){
        nodes.push(node);
      }
    });
    nodes.forEach(normalizeQuickReviewNode);
  }

  function scheduleCompactQuickReviews(){
    if(typeof document === 'undefined') return;
    [0, 80, 240].forEach(function(delay){
      setTimeout(function(){ forceCompactQuickReviews(document); }, delay);
    });
  }

  function removeDuplicateReferenceSections(html, lessonNo){
    var earlyPattern = new RegExp('<section\\b[^>]*data-reference-source-early="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g');
    var earlySeen = false;
    html = html.replace(earlyPattern, function(match){
      if(earlySeen) return '';
      earlySeen = true;
      return match;
    });
    return html
      .replace(new RegExp('<section\\b[^>]*data-lesson-reference-sources="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '')
      .replace(/<a\b[^>]*data-real-related-source=(?:"[^"]*"|'[^']*')[\s\S]*?<\/a>/g, '')
      .replace(/<a\b(?=[^>]*related-resource-card)(?=[^>]*external-source-card)[^>]*>[\s\S]*?<\/a>/g, '');
  }

  function removeOldPracticeKit(html){
    return String(html || '')
      .replace(/<div\s+data-lesson-practice-kit="true">\s*<section\b[\s\S]*?<\/section>\s*<\/div>/g, '')
      .replace(/<section\b(?=[^>]*lesson-guide-stack-lower)(?=[^>]*data-lesson-practice-kit)[\s\S]*?<\/section>/g, '')
      .replace(/<section\b(?=[^>]*lesson-guide-stack-lower)[\s\S]*?<\/section>/g, '');
  }

  function removeExistingQuickReview(html, lessonNo){
    return String(html || '')
      .replace(new RegExp('<section\\b[^>]*data-intermediate-quick-review="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '')
      .replace(new RegExp('<section\\b[^>]*data-lesson-quick-review="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '');
  }

  function removeExistingUnderstandingCheck(html, lessonNo){
    return String(html || '')
      .replace(new RegExp('<section\\b[^>]*data-intermediate-understanding-check="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '')
      .replace(/<section\b(?=[^>]*lesson-understanding-check)[\s\S]*?<\/section>/g, '');
  }

  function removeExistingIntermediateSupportCards(html, lessonNo){
    return String(html || '')
      .replace(new RegExp('<section\\b[^>]*data-intermediate-support-cards="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '')
      .replace(new RegExp('<section\\b[^>]*data-intermediate-practical-resources="' + lessonNo + '"[\\s\\S]*?<\\/section>', 'g'), '')
      .replace(/<section\b(?=[^>]*intermediate-support-block)[\s\S]*?<\/section>/g, '')
      .replace(/<section\b(?=[^>]*intermediate-practical-resources)[\s\S]*?<\/section>/g, '');
  }

  function removeLegacyIntermediateSupportBlocks(html){
    return String(html || '')
      .replace(/<h2>[^<]*(?:One-line key idea|Easy explanation|Real situation|Where people make mistakes|What to check now|한 줄 핵심|쉬운 설명|실제 상황 예시|어디서 실수|지금 확인할 것)[^<]*<\/h2>[\s\S]*?(?=<section\b|<div\b[^>]*complete-row|<div\b[^>]*lesson-nav-bar|$)/gi, '')
      .replace(/<h3>[^<]*(?:Common mistakes|Mistakes|FAQ|Checklist|자주 하는 실수|자주 묻는 질문|체크리스트|실수|확인)[^<]*<\/h3>[\s\S]*?(?=<section\b|<div\b[^>]*complete-row|<div\b[^>]*lesson-nav-bar|$)/gi, '')
      .replace(/<div\s+class="faq-item">[\s\S]*?(?:What to check now|Related practical resources|지금 확인할 것|함께 보면 좋은 실전 자료)[\s\S]*?<\/div>\s*<\/div>/gi, '')
      .replace(/<div\s+class="mistake-card">[\s\S]*?<\/div>\s*<\/div>/gi, '')
      .replace(/<div\s+class="checkpoint-list">[\s\S]*?<\/div>\s*<\/div>/gi, '');
  }

  function removeLegacyQuizSections(html){
    var nextBlock = '(?=<section\\b[^>]*lesson-related-resources|<section\\b[^>]*lesson-system-related|<div\\b[^>]*complete-row|<div\\b[^>]*lesson-nav-bar|$)';
    return String(html || '')
      .replace(/<section\s+class="card">\s*<h3>[^<]*(?:quiz|퀴즈|확인|ทดสอบ|Kuis|Mini|test|اختبار|gwaji)[^<]*<\/h3>[\s\S]*?<div\s+class="quiz-card"[\s\S]*?<\/section>/gi, '')
      .replace(new RegExp('<h3>[^<]*(?:quiz|퀴즈|확인|ทดสอบ|Kuis|Mini|test|اختبار|gwaji)[^<]*<\\/h3>[\\s\\S]*?' + nextBlock, 'gi'), function(block){
        return block.indexOf('class="quiz-card"') !== -1 ? '' : block;
      });
  }

  function insertBeforeSection(html, sectionClass, insertHtml){
    var pos = html.indexOf(sectionClass);
    if(pos !== -1){
      var start = html.lastIndexOf('<section', pos);
      if(start !== -1) return html.slice(0, start) + insertHtml + html.slice(start);
    }
    var complete = html.indexOf('<div class="complete-row"');
    if(complete !== -1) return html.slice(0, complete) + insertHtml + html.slice(complete);
    return html + insertHtml;
  }

  function extractSectionsByClass(html, className){
    var next = String(html || '');
    var sections = [];
    var marker = className;
    var pos = next.indexOf(marker);
    while(pos !== -1){
      var start = next.lastIndexOf('<section', pos);
      if(start === -1) break;
      var end = next.indexOf('</section>', pos);
      if(end === -1) break;
      end += '</section>'.length;
      sections.push(next.slice(start, end));
      next = next.slice(0, start) + next.slice(end);
      pos = next.indexOf(marker);
    }
    return { html:next, sections:sections };
  }

  function extractLateSupportSections(html){
    var next = String(html || '');
    ['lesson-related-resources', 'lesson-system-related'].forEach(function(className){
      var extracted = extractSectionsByClass(next, className);
      next = extracted.html;
    });
    return { html:next, sections:[] };
  }

  function insertBeforeCompleteRow(html, insertHtml){
    if(!insertHtml) return html;
    var complete = html.indexOf('<div class="complete-row"');
    if(complete !== -1) return html.slice(0, complete) + insertHtml + html.slice(complete);
    var nav = html.indexOf('<div class="lesson-nav-bar"');
    if(nav !== -1) return html.slice(0, nav) + insertHtml + html.slice(nav);
    return html + insertHtml;
  }

  function ensureQuickReview(html, index, lang){
    var lessonNo = index + 1;
    if(html.indexOf('data-intermediate-quick-review="' + lessonNo + '"') !== -1) return html;
    return insertBeforeCompleteRow(html, renderQuickReview(index, lang));
  }

  function enhanceRelatedResources(html, lang){
    var start = html.indexOf('lesson-system-related');
    if(start === -1) return html;
    var c = copy(lang);
    if(html.indexOf('data-intermediate-related-desc') === -1){
      var grid = html.indexOf('<div class="source-library-grid"', start);
      if(grid !== -1){
        html = html.slice(0, grid) + '<p class="intermediate-related-desc" data-intermediate-related-desc>' + esc(c.relatedDesc) + '</p>' + html.slice(grid);
      }
    }
    if(html.indexOf('data-intermediate-library-all') === -1){
      var marker = '</div></div></section>';
      var end = html.indexOf(marker, start);
      if(end !== -1){
        var link = '<div class="intermediate-related-footer"><a class="nav-action" data-intermediate-library-all href="' + esc(sourcesHref()) + '">' + esc(c.libraryAll) + '</a></div>';
        html = html.slice(0, end) + link + html.slice(end);
      }
    }
    return html;
  }

  function cleanupIntermediateLessonHtml(html, index){
    index = Number(index);
    if(!html || index < START_INDEX || index > END_INDEX) return html;
    var lessonNo = index + 1;
    var lang = currentLocale();
    var next = String(html);
    var lateSupport;
    next = normalizeCoreCallout(next, index, lang);
    next = removeDuplicateReferenceSections(next, lessonNo);
    next = removeOldPracticeKit(next);
    lateSupport = extractLateSupportSections(next);
    next = lateSupport.html;
    next = removeExistingQuickReview(next, lessonNo);
    next = removeExistingUnderstandingCheck(next, lessonNo);
    next = removeExistingIntermediateSupportCards(next, lessonNo);
    next = removeLegacyQuizSections(next);
    next = removeLegacyIntermediateSupportBlocks(next);
    next = insertBeforeCompleteRow(
      next,
      renderUnderstandingCheck(index, lang)
        + renderIntermediateSupportCards(index, lang)
        + renderQuickReview(index, lang)
        + renderPracticalResources(index, lang)
    );
    return next;
  }

  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__intermediateSupportCleanupWrapped) return;
    var wrapped = function(index){
      return cleanupIntermediateLessonHtml(previous.apply(this, arguments) || '', index);
    };
    wrapped.__intermediateSupportCleanupWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(error){}
  }

  function refreshIntermediatePanels(){
    if(typeof document === 'undefined' || typeof window.renderLesson !== 'function') return;
    for(var i = START_INDEX; i <= END_INDEX; i++){
      var panel = document.getElementById('lesson' + i);
      if(panel) panel.innerHTML = window.renderLesson(i);
    }
    forceCompactQuickReviews(document);
  }

  function wrapAfter(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__intermediateSupportCleanupAfterWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      setTimeout(function(){
        patchRenderLesson();
        refreshIntermediatePanels();
        scheduleCompactQuickReviews();
      }, 0);
      return result;
    };
    wrapped.__intermediateSupportCleanupAfterWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'setLang') setLang = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'showLesson') showLesson = wrapped;
    }catch(error){}
  }

  function installStyles(){
    if(typeof document === 'undefined' || document.getElementById('intermediateLessonSupportCleanup20260526Styles')) return;
    var style = document.createElement('style');
    style.id = 'intermediateLessonSupportCleanup20260526Styles';
    style.textContent = [
      'section.intermediate-quick-review{clear:both;width:100%;max-width:100%;grid-column:1/-1;flex-basis:100%;margin:24px 0 0;padding:14px 16px;border:1px solid rgba(42,89,152,.12);border-radius:18px;background:linear-gradient(180deg,#fff,#f8fbff);box-shadow:0 8px 20px rgba(20,45,85,.045);word-break:keep-all;overflow-wrap:break-word}',
      '.intermediate-quick-review-head{display:grid;gap:4px;margin-bottom:10px}.intermediate-quick-review-head h2,.intermediate-quick-review-head h3{margin:0;color:#13294b;font-size:1rem;line-height:1.3}.intermediate-quick-review-head p{margin:0;color:#5a6b82;line-height:1.5;font-size:.86rem}',
      '.intermediate-quick-review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.intermediate-quick-review-card{min-width:0;display:grid;gap:7px;padding:16px;border:1px solid rgba(42,89,152,.1);border-radius:18px;background:#fff;box-shadow:0 6px 16px rgba(20,45,85,.04)}',
      '.quick-review-index{display:inline-flex;justify-self:start;border-radius:999px;padding:3px 8px;background:#eaf3ff;color:#2456a4;font-size:.68rem;font-weight:900;letter-spacing:.02em}.intermediate-quick-review-card h3,.intermediate-quick-review-card strong{margin:2px 0 0;color:#101f36;line-height:1.45;font-size:15px;word-break:keep-all;overflow-wrap:break-word}.intermediate-quick-review-card p{margin:0;color:#586b83;line-height:1.55;font-size:13px;word-break:keep-all;overflow-wrap:break-word}.intermediate-quick-review-card p span{display:inline;color:#2f5f91;font-weight:900;font-size:.72rem;margin-right:5px}',
      'section.lesson-quick-review-compact,section.intermediate-quick-review-fixed,section[data-lesson-quick-review]{clear:both!important;grid-column:1/-1!important;width:100%!important;max-width:100%!important;flex-basis:100%!important;margin:24px 0 0!important;padding:14px 16px!important;border-radius:16px!important;height:auto!important;align-self:stretch!important}',
      'section.lesson-quick-review-compact .quick-review-grid,section.intermediate-quick-review-fixed .quick-review-grid,section[data-lesson-quick-review] .quick-review-grid,section.lesson-quick-review-compact .intermediate-quick-review-grid,section.intermediate-quick-review-fixed .intermediate-quick-review-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;width:100%!important;max-width:100%!important}',
      'section.lesson-quick-review-compact .quick-review-card,section.intermediate-quick-review-fixed .quick-review-card,section[data-lesson-quick-review] .quick-review-card,section.lesson-quick-review-compact .intermediate-quick-review-card,section.intermediate-quick-review-fixed .intermediate-quick-review-card{min-width:0!important;width:auto!important;height:auto!important;max-width:100%!important;padding:14px 16px!important;border-radius:16px!important;gap:7px!important;align-content:start!important}',
      'section.lesson-quick-review-compact .quick-review-card h3,section.intermediate-quick-review-fixed .quick-review-card h3,section[data-lesson-quick-review] .quick-review-card h3,section.lesson-quick-review-compact .intermediate-quick-review-card h3,section.intermediate-quick-review-fixed .intermediate-quick-review-card h3{font-size:15px!important;line-height:1.45!important;margin:8px 0!important;word-break:keep-all!important;overflow-wrap:break-word!important}',
      'section.lesson-quick-review-compact .quick-review-card p,section.intermediate-quick-review-fixed .quick-review-card p,section[data-lesson-quick-review] .quick-review-card p,section.lesson-quick-review-compact .intermediate-quick-review-card p,section.intermediate-quick-review-fixed .intermediate-quick-review-card p{font-size:13px!important;line-height:1.55!important;margin:0!important;word-break:keep-all!important;overflow-wrap:break-word!important}',
      'section.lesson-quick-review-compact .quick-review-card p span,section.intermediate-quick-review-fixed .quick-review-card p span,section[data-lesson-quick-review] .quick-review-card p span{display:inline!important;margin:0 5px 0 0!important}',
      '.lesson-content.is-intermediate-lesson .lesson-body>section.lesson-quick-review,.lesson-content.is-intermediate-lesson .lesson-body>section.lesson-understanding-check,.lesson-content.is-intermediate-lesson .lesson-body>section.intermediate-support-block,.lesson-content.is-intermediate-lesson .lesson-body>section.intermediate-practical-resources,.lesson-content.is-intermediate-lesson .lesson-body>section.lesson-related-resources,.lesson-content.is-intermediate-lesson .lesson-body>section.lesson-system-related{clear:both!important;float:none!important;grid-column:1/-1!important;width:100%!important;max-width:100%!important;justify-self:stretch!important;align-self:stretch!important}',
      '.lesson-content.is-intermediate-lesson .intermediate-core-callout{display:grid;gap:6px;padding:16px 18px;border:1px solid rgba(42,89,152,.13);border-radius:18px;background:linear-gradient(180deg,#fff,#f7fbff);box-shadow:0 8px 20px rgba(20,45,85,.04);word-break:keep-all;overflow-wrap:break-word}.lesson-content.is-intermediate-lesson .intermediate-core-callout strong{color:#0f2946;font-size:.92rem}.lesson-content.is-intermediate-lesson .intermediate-core-callout span{color:#3d536d;line-height:1.6}',
      'section.lesson-understanding-check{clear:both;width:100%;max-width:100%;grid-column:1/-1;margin:18px 0 0;padding:14px 16px;border:1px solid rgba(42,89,152,.12);border-radius:16px;background:linear-gradient(180deg,#fff,#f8fbff);box-shadow:0 8px 20px rgba(20,45,85,.04);word-break:keep-all;overflow-wrap:break-word}',
      '.lesson-understanding-head{display:grid;gap:4px;margin-bottom:10px}.lesson-understanding-head h2{margin:0;color:#13294b;font-size:1rem;line-height:1.3}.lesson-understanding-head p{margin:0;color:#5a6b82;line-height:1.5;font-size:.86rem}.understanding-check-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px}.understanding-check-card{min-width:0;display:grid;gap:9px;padding:14px 16px;border:1px solid rgba(42,89,152,.1);border-radius:16px;background:#fff}.understanding-check-question{color:#101f36;font-size:15px;line-height:1.45;word-break:keep-all;overflow-wrap:break-word}.understanding-check-answer{margin:0;color:#586b83;font-size:13px;line-height:1.55;word-break:keep-all;overflow-wrap:break-word}.understanding-check-toggle{justify-self:start;min-height:34px;padding:7px 12px;font-size:12px}',
      '.intermediate-support-block,.intermediate-practical-resources{clear:both;width:100%;max-width:100%;grid-column:1/-1;flex-basis:100%;margin:22px 0 0;word-break:keep-all;overflow-wrap:break-word}.intermediate-support-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.intermediate-support-panel,.intermediate-practical-resources .lesson-guide-panel{min-width:0;padding:18px 20px;border:1px solid rgba(42,89,152,.14);border-radius:20px;background:linear-gradient(180deg,#fff,#f7fbff);box-shadow:0 10px 24px rgba(20,45,85,.045);position:relative;overflow:hidden}.intermediate-support-panel::after,.intermediate-practical-resources .lesson-guide-panel::after{content:"";position:absolute;right:18px;top:18px;width:58px;height:58px;background-image:linear-gradient(rgba(42,89,152,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(42,89,152,.045) 1px,transparent 1px);background-size:12px 12px;opacity:.7;pointer-events:none}.intermediate-support-head,.intermediate-practical-resources .lesson-guide-panel-head{position:relative;z-index:1;display:grid;gap:7px;margin-bottom:14px}.intermediate-support-head h2,.intermediate-practical-resources .lesson-guide-panel-head h3{margin:0;color:#10243f;font-size:1.02rem;line-height:1.35;letter-spacing:.01em}.intermediate-support-head p,.intermediate-practical-resources .intermediate-related-desc{margin:0;color:#53677f;font-size:.92rem;line-height:1.62;max-width:62ch}',
      '.intermediate-mistake-list{position:relative;z-index:1;display:grid;gap:10px}.intermediate-mistake-card{display:grid;gap:5px;padding:13px 14px;border:1px solid rgba(42,89,152,.12);border-radius:16px;background:rgba(255,255,255,.9)}.intermediate-mistake-card strong{color:#13233a;font-size:.94rem;line-height:1.4}.intermediate-mistake-card p{margin:0;color:#5a6b82;font-size:.86rem;line-height:1.55}.intermediate-check-list{position:relative;z-index:1;list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.intermediate-check-list li{display:flex;align-items:center;gap:9px;min-width:0;padding:12px 13px;border:1px solid rgba(42,89,152,.12);border-radius:15px;background:#fff;color:#10243f;font-size:.9rem;font-weight:750;line-height:1.45}.intermediate-check-list li span{flex:0 0 auto;width:13px;height:13px;border-radius:999px;background:#38a169;box-shadow:0 0 0 4px rgba(56,161,105,.12)}',
      '.intermediate-resource-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.intermediate-resource-card{min-width:0;display:grid;gap:8px;align-content:start;padding:15px 16px;border-radius:16px;background:#fff}.intermediate-resource-card .related-card-title{font-size:.95rem;line-height:1.38}.intermediate-resource-card .related-card-desc{font-size:.86rem;line-height:1.55}.intermediate-resource-card .related-card-link{margin-top:2px}',
      '.intermediate-related-desc{margin:4px 0 14px;color:#5a6b82;line-height:1.62;font-size:.93rem;word-break:keep-all;overflow-wrap:break-word}.intermediate-related-footer{margin-top:14px;display:flex;justify-content:flex-start}.intermediate-related-footer .nav-action{min-height:38px;display:inline-flex;align-items:center;justify-content:center}',
      '.lesson-related-resources{clear:both!important;float:none!important;grid-column:1/-1!important;width:100%!important;max-width:100%!important;margin:28px 0 0!important}.lesson-related-resources .lesson-related-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:14px}.lesson-related-resources .related-resource-card{min-width:0;display:grid;gap:8px;align-content:start}',
      '.lesson-system-related{clear:both;width:100%;max-width:100%;grid-column:1/-1;flex-basis:100%;margin:30px 0 0}.lesson-system-related .lesson-guide-panel{width:100%;max-width:100%;display:block}.lesson-system-related .source-library-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:14px}.lesson-system-related .related-resource-card{min-width:0;display:grid;gap:8px;align-content:start}',
      '.lesson-system-related [data-real-related-source],.lesson-system-related .external-source-card{display:none!important}',
      'html[dir="rtl"] section.intermediate-quick-review,html[dir="rtl"] .intermediate-related-desc{text-align:right}',
      '@media(max-width:900px){.intermediate-quick-review-grid{grid-template-columns:1fr}.intermediate-quick-review-card{padding:14px}}',
      '@media(max-width:900px){.intermediate-support-grid,.intermediate-resource-grid,.intermediate-check-list{grid-template-columns:1fr}.intermediate-support-panel,.intermediate-practical-resources .lesson-guide-panel{padding:16px;border-radius:18px}}',
      '@media(max-width:900px){section.lesson-quick-review-compact .quick-review-grid,section.intermediate-quick-review-fixed .quick-review-grid,section[data-lesson-quick-review] .quick-review-grid,section.lesson-quick-review-compact .intermediate-quick-review-grid,section.intermediate-quick-review-fixed .intermediate-quick-review-grid{grid-template-columns:1fr!important}section.lesson-quick-review-compact .quick-review-card,section.intermediate-quick-review-fixed .quick-review-card,section[data-lesson-quick-review] .quick-review-card{padding:14px!important}}',
      '@media(max-width:620px){section.intermediate-quick-review{padding:13px;border-radius:16px}.intermediate-quick-review-card h3,.intermediate-quick-review-card strong{font-size:14px}.intermediate-quick-review-card p{font-size:12.5px}}'
    ].join('');
    document.head.appendChild(style);
  }

  window.cleanupIntermediateLessonSupportHtml = cleanupIntermediateLessonHtml;
  window.debugIntermediateLessonSupportCleanup = function(){
    var result = { currentLocale:currentLocale(), lessons:{} };
    for(var i = START_INDEX; i <= END_INDEX; i++){
      var html = typeof window.renderLesson === 'function' ? window.renderLesson(i) : '';
      result.lessons[i + 1] = {
        earlyReferenceCount:(html.match(new RegExp('data-reference-source-early="' + (i + 1) + '"', 'g')) || []).length,
        bottomReferenceCount:(html.match(new RegExp('data-lesson-reference-sources="' + (i + 1) + '"', 'g')) || []).length,
        bottomExternalSourceCards:(html.match(/data-real-related-source=/g) || []).length,
        quickReview:(html.indexOf('data-intermediate-quick-review="' + (i + 1) + '"') !== -1),
        lessonQuickReview:(html.indexOf('data-lesson-quick-review="' + (i + 1) + '"') !== -1),
        legacyQuizCards:(html.match(/class="quiz-card"/g) || []).length,
        oldPracticeKit:(html.indexOf('data-lesson-practice-kit') !== -1 || html.indexOf('lesson-guide-stack-lower') !== -1),
        relatedDesc:(html.indexOf('data-intermediate-related-desc') !== -1)
      };
    }
    return result;
  };

  window.debugIntermediateLessonsRender = function(){
    var result = { currentLocale:currentLocale(), lessons:{} };
    for(var i = START_INDEX; i <= END_INDEX; i++){
      var lessonNo = i + 1;
      var html = typeof window.renderLesson === 'function' ? window.renderLesson(i) : '';
      var quickIndex = html.indexOf('data-intermediate-quick-review="' + lessonNo + '"');
      var relatedIndex = html.indexOf('lesson-system-related');
      var topRelatedCardFound = relatedIndex !== -1 && (quickIndex === -1 || relatedIndex < quickIndex);
      result.lessons[lessonNo] = {
        hasObjectObject:html.indexOf('[object Object]') !== -1,
        objectObjectCount:(html.match(/\[object Object\]/g) || []).length,
        quickReviewFound:quickIndex !== -1,
        quickReviewCardCount:(html.match(/<article\b[^>]*quick-review-card/g) || []).length,
        quickReviewBeforeRelated:quickIndex !== -1 && (relatedIndex === -1 || quickIndex < relatedIndex),
        topRelatedCardFound:topRelatedCardFound,
        referenceSourcesTopFound:html.indexOf('data-reference-source-early="' + lessonNo + '"') !== -1,
        bottomReferenceDuplicateFound:html.indexOf('data-lesson-reference-sources="' + lessonNo + '"') !== -1 || html.indexOf('data-real-related-source=') !== -1,
        relatedResourcesFound:relatedIndex !== -1,
        relatedDescFound:html.indexOf('data-intermediate-related-desc') !== -1
      };
    }
    return result;
  };

  window.debugQuickReviewLayout = function(){
    forceCompactQuickReviews(document);
    return Array.prototype.slice.call(document.querySelectorAll('.lesson-quick-review, [data-intermediate-quick-review], [data-lesson-quick-review]')).map(function(el){
      var parent = el.parentElement;
      var grand = parent && parent.parentElement;
      var grid = el.querySelector('.quick-review-grid, .intermediate-quick-review-grid');
      var cards = el.querySelectorAll('.quick-review-card, .intermediate-quick-review-card');
      return {
        tag:el.tagName,
        className:el.className,
        id:el.id,
        lesson:el.getAttribute('data-intermediate-quick-review') || el.getAttribute('data-lesson-quick-review') || '',
        parentClass:parent && parent.className,
        grandParentClass:grand && grand.className,
        gridClass:grid && grid.className,
        cardCount:cards.length,
        text:(el.textContent || '').slice(0, 220),
        width:el.getBoundingClientRect ? Math.round(el.getBoundingClientRect().width) : null
      };
    });
  };

  window.debugQuickReviewFixed = function(){
    forceCompactQuickReviews(document);
    var result = { currentLocale:currentLocale(), lessons:{} };
    for(var i = START_INDEX; i <= END_INDEX; i++){
      var lessonNo = i + 1;
      var section = document.querySelector('[data-intermediate-quick-review="' + lessonNo + '"], [data-lesson-quick-review="' + lessonNo + '"]');
      var cards = section ? section.querySelectorAll('.quick-review-card, .intermediate-quick-review-card') : [];
      result.lessons[lessonNo] = {
        found:!!section,
        sectionClass:section && section.className,
        parentClass:section && section.parentElement && section.parentElement.className,
        sectionWidth:section && section.getBoundingClientRect ? Math.round(section.getBoundingClientRect().width) : null,
        cardCount:cards.length,
        cardWidths:Array.prototype.slice.call(cards).map(function(card){
          return card.getBoundingClientRect ? Math.round(card.getBoundingClientRect().width) : null;
        }),
        compactClass:!!(section && section.classList && section.classList.contains('lesson-quick-review-compact')),
        fixedClass:!!(section && section.classList && section.classList.contains('intermediate-quick-review-fixed')),
        shortQuestion:!!(section && ((section.textContent || '').indexOf('거래소와 지갑의 차이는?') !== -1 || lessonNo !== 8)),
        oldLongQuestion:!!(section && (section.textContent || '').indexOf('거래소와 지갑의 가장 큰 차이는 무엇인가요?') !== -1)
      };
    }
    return result;
  };

  function pollutedClassesFor(node){
    if(!node || !node.classList) return [];
    return QUICK_REVIEW_CLASSES.filter(function(cls){ return node.classList.contains(cls); });
  }

  window.debugQuickReviewFixed = function(){
    forceCompactQuickReviews(document);
    var result = { currentLocale:currentLocale(), lessons:{} };
    for(var i = START_INDEX; i <= END_INDEX; i++){
      var lessonNo = i + 1;
      var section = document.querySelector('section[data-intermediate-quick-review="' + lessonNo + '"], section[data-lesson-quick-review="' + lessonNo + '"]');
      if(section && !isRealQuickReviewSection(section)) section = null;
      var lessonContent = document.getElementById('lesson' + i);
      if(!lessonContent && section && section.closest) lessonContent = section.closest('.lesson-content');
      var cards = section ? section.querySelectorAll('.quick-review-card, .intermediate-quick-review-card') : [];
      result.lessons[lessonNo] = {
        lessonNumber:lessonNo,
        found:!!section,
        sectionClass:section && section.className,
        parentClass:section && section.parentElement && section.parentElement.className,
        grandParentClass:section && section.parentElement && section.parentElement.parentElement && section.parentElement.parentElement.className,
        lessonContentClass:lessonContent && lessonContent.className,
        pollutedLessonContentClasses:pollutedClassesFor(lessonContent),
        sectionText:section && (section.textContent || '').slice(0, 500),
        cardCount:cards.length,
        cardTexts:Array.prototype.slice.call(cards).map(function(card){ return (card.textContent || '').replace(/\s+/g, ' ').trim(); }),
        sectionWidth:section && section.getBoundingClientRect ? Math.round(section.getBoundingClientRect().width) : null,
        cardWidths:Array.prototype.slice.call(cards).map(function(card){ return card.getBoundingClientRect ? Math.round(card.getBoundingClientRect().width) : null; })
      };
    }
    return result;
  };

  installStyles();
  patchRenderLesson();
  wrapAfter('renderAllLessons');
  wrapAfter('setLang');
  wrapAfter('showPage');
  wrapAfter('showLesson');
  wrapAfter('__CA_OPEN_INTERMEDIATE_LESSON');
  setTimeout(function(){
    patchRenderLesson();
    refreshIntermediatePanels();
    scheduleCompactQuickReviews();
  }, 0);
  if(typeof document !== 'undefined' && document.addEventListener){
    document.addEventListener('DOMContentLoaded', scheduleCompactQuickReviews);
  }
  if(typeof window !== 'undefined' && window.addEventListener){
    window.addEventListener('load', scheduleCompactQuickReviews);
  }
})();
