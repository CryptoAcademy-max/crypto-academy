(function(){
  function clone(v){ return JSON.parse(JSON.stringify(v)); }
  function replaceDeep(value, map){
    if (typeof value === 'string') {
      let s = value;
      for (const [from, to] of map) s = s.split(from).join(to);
      return s;
    }
    if (Array.isArray(value)) return value.map(v => replaceDeep(v, map));
    if (value && typeof value === 'object') {
      const out = {};
      for (const [k,v] of Object.entries(value)) out[k] = replaceDeep(v, map);
      return out;
    }
    return value;
  }
  function patchLessonLang(lang, replacers){
    if (lessons && lessons[lang]) lessons[lang] = replaceDeep(lessons[lang], replacers);
    if (lessonOverrides && lessonOverrides[lang]) lessonOverrides[lang] = replaceDeep(lessonOverrides[lang], replacers);
  }
  function patchSourcesLang(lang, replacers){
    if (sourceLibrary && sourceLibrary[lang]) sourceLibrary[lang] = replaceDeep(sourceLibrary[lang], replacers);
    if (sourceOverrides && sourceOverrides[lang]) sourceOverrides[lang] = replaceDeep(sourceOverrides[lang], replacers);
  }

  Object.assign(ui.ko, {
    "nav.start":"시작 가이드",
    "nav.startsub":"입문 순서 안내",
    "nav.faqPage":"자주 묻는 질문",
    "nav.faqsub":"핵심 질문 정리",
    "nav.safety":"안전 / 사기 예방",
    "nav.safetysub":"실전 보안 습관",
    "nav.sources":"자료 라이브러리",
    "nav.sourcesub":"기사와 공식 참고자료",
    "home.desc":"이 페이지를 시작점으로 사용하세요. 강의 1~5로 바로 이동할 수 있고, 용어사전에서 핵심 용어를 확인하거나 자료 라이브러리에서 실제 기사와 공식 자료를 읽을 수 있습니다.",
    "home.startCardTitle":"시작 가이드",
    "home.startCardDesc":"처음 온 사람이 어디부터 봐야 하는지 바로 알 수 있게 도와줍니다.",
    "home.openStart":"시작 가이드 열기",
    "home.faqCardTitle":"자주 묻는 질문",
    "home.faqCardDesc":"초보자가 가장 많이 헷갈리는 질문을 한 번에 볼 수 있습니다.",
    "home.openFaq":"자주 묻는 질문 열기",
    "home.safetyCardTitle":"안전 / 사기 예방",
    "home.safetyCardDesc":"실제로 도움이 되는 사기 예방과 지갑 보안 습관을 배울 수 있습니다.",
    "home.openSafety":"안전 가이드 열기",
    "sources.pageTitle":"자료 라이브러리",
    "sources.pageDesc":"실제 기사와 공식 자료를 모아둔 읽기 목록입니다. 강의 내용과 현실 사례를 연결해서 볼 수 있습니다.",
    "sources.catWallet":"지갑 보안"
  });
  Object.assign(extraUi.ko, {
    "v.networkDesc":"보내기 전에 네트워크를 다시 확인하세요.",
    "v.addressDesc":"주소 앞부분과 뒷부분을 직접 확인하세요.",
    "v.testDesc":"가능하면 먼저 소액을 보내 확인하세요.",
    "v.txidDesc":"TxID로 실제 기록 상태를 확인하세요."
  });
  Object.assign(polishedSectionContent.ko, {
    startTitle:"시작 가이드",
    faqTitle:"자주 묻는 질문",
    safetyTitle:"안전 / 사기 예방",
    startTip:"처음이라면 1 → 2 → 용어사전 → 3 → 4 → 안전 가이드 → 자료 라이브러리 순서가 가장 좋습니다."
  });
  patchSourcesLang('ko', [
    ['Source Library','자료 라이브러리']
  ]);

  Object.assign(ui.th, {
    "nav.start":"เริ่มตรงนี้",
    "nav.startsub":"เส้นทางสำหรับผู้เริ่มต้น",
    "nav.faqPage":"คำถามพบบ่อย",
    "nav.faqsub":"คำถามที่พบบ่อย",
    "nav.safety":"ความปลอดภัย / ป้องกันการหลอกลวง",
    "nav.safetysub":"นิสัยป้องกันความเสี่ยง",
    "nav.sources":"คลังแหล่งข้อมูล",
    "nav.sourcesub":"บทความและเอกสารทางการ",
    "home.desc":"ใช้หน้านี้เป็นจุดเริ่มต้น คุณสามารถเปิดบทเรียน 1–5 ไปยังอภิธานศัพท์ หรืออ่านบทความจริงและเอกสารทางการในคลังแหล่งข้อมูลได้ทันที",
    "home.startCardTitle":"เริ่มตรงนี้",
    "home.startCardDesc":"ช่วยให้ผู้มาใหม่รู้ชัดว่าควรเริ่มจากตรงไหนก่อน",
    "home.openStart":"เปิดคู่มือเริ่มต้น",
    "home.safetyCardTitle":"ความปลอดภัย / ป้องกันการหลอกลวง",
    "home.safetyCardDesc":"เรียนรู้นิสัยง่าย ๆ ที่ช่วยลดความผิดพลาดและการถูกหลอกลวง",
    "home.openSafety":"เปิดคู่มือความปลอดภัย",
    "sources.pageTitle":"คลังแหล่งข้อมูล",
    "sources.pageDesc":"รายการบทความจริงและแหล่งอ้างอิงอย่างเป็นทางการ ใช้เพื่อเชื่อมบทเรียนกับเหตุการณ์ในโลกจริง",
    "sources.catExchanges":"ตลาดแลกเปลี่ยน",
    "sources.catStable":"สเตเบิลคอยน์",
    "sources.catWallet":"ความปลอดภัยของวอลเล็ต"
  });
  Object.assign(extraUi.th, {
    "v.address":"ที่อยู่",
    "v.private":"คีย์ส่วนตัว",
    "v.seed":"วลีสำรอง",
    "v.utility":"โทเคนยูทิลิตี้",
    "v.governance":"การกำกับดูแล",
    "v.stablecoin":"สกุลเงินคงมูลค่า",
    "v.custody":"การดูแลสินทรัพย์",
    "v.designrisk":"ความเสี่ยงด้านการออกแบบ",
    "v.networkDesc":"ตรวจสอบเครือข่ายให้ตรงก่อนส่ง",
    "v.addressDesc":"ตรวจดูต้นและท้ายที่อยู่ด้วยสายตา",
    "v.testDesc":"เริ่มด้วยการโอนทดลองจำนวนเล็กน้อย",
    "v.txidDesc":"ใช้ TxID เพื่อตรวจสอบบันทึกจริง"
  });
  Object.assign(polishedSectionContent.th, {
    startTitle:"เริ่มตรงนี้",
    faqTitle:"คำถามพบบ่อย",
    safetyTitle:"ความปลอดภัย / ป้องกันการหลอกลวง",
    startTip:"เส้นทางที่เหมาะกับผู้เริ่มต้นคือ 1 → 2 → อภิธานศัพท์ → 3 → 4 → ความปลอดภัย → คลังแหล่งข้อมูล"
  });
  patchSourcesLang('th', [
    ['exchange','ตลาดแลกเปลี่ยน'],
    ['custody','การดูแลสินทรัพย์'],
    ['stablecoin','สเตเบิลคอยน์'],
    ['Source Library','คลังแหล่งข้อมูล']
  ]);
  patchLessonLang('th', [
    ['Address, private key และ seed phrase','ที่อยู่กระเป๋า คีย์ส่วนตัว และวลีสำรอง'],
    ['Address','ที่อยู่กระเป๋า'],
    ['private key','คีย์ส่วนตัว'],
    ['seed phrase','วลีสำรอง'],
    ['Custodial กับ self-custody','การดูแลแบบมีผู้ดูแลกับการถือคีย์เอง'],
    ['custodial','แบบมีผู้ดูแล'],
    ['self-custody','การถือคีย์เอง'],
    ['network','เครือข่าย'],
    ['address','ที่อยู่'],
    ['test transfer','การโอนทดลอง'],
    ['transaction ID','รหัสธุรกรรม'],
    ['exchange','ตลาดแลกเปลี่ยน'],
    ['stablecoin','สเตเบิลคอยน์'],
    ['stable','คงมูลค่า']
  ]);

  Object.assign(ui.id, {
    "nav.l2":"Dompet",
    "nav.start":"Mulai di sini",
    "nav.startsub":"Jalur pemula",
    "nav.safety":"Keamanan / Pencegahan penipuan",
    "nav.safetysub":"Kebiasaan perlindungan praktis",
    "nav.sources":"Perpustakaan Sumber",
    "nav.sourcesub":"Artikel dan referensi resmi",
    "topic.wallet":"Apa itu dompet?",
    "home.desc":"Gunakan halaman ini sebagai titik awal. Anda bisa langsung membuka Pelajaran 1–5, membaca Glosarium, atau membuka Perpustakaan Sumber untuk artikel nyata dan referensi resmi.",
    "home.startCardTitle":"Mulai di sini",
    "home.startCardDesc":"Membantu pengunjung baru tahu persis dari mana harus memulai.",
    "home.openStart":"Buka panduan awal",
    "home.safetyCardTitle":"Keamanan / Pencegahan penipuan",
    "home.safetyCardDesc":"Pelajari kebiasaan praktis untuk mencegah penipuan dan melindungi dompet.",
    "home.openSafety":"Buka panduan keamanan",
    "sources.pageTitle":"Perpustakaan Sumber",
    "sources.pageDesc":"Daftar artikel nyata dan referensi resmi. Gunakan untuk menghubungkan pelajaran dengan kasus di dunia nyata.",
    "sources.catExchanges":"Bursa",
    "sources.catWallet":"Keamanan dompet"
  });
  Object.assign(extraUi.id, {
    "v.wallet":"Dompet",
    "v.utility":"Token utilitas",
    "v.governance":"Tata kelola",
    "v.stablecoin":"Koin stabil",
    "v.networkDesc":"Pastikan jaringannya sesuai sebelum mengirim.",
    "v.addressDesc":"Periksa awal dan akhir alamat dengan teliti.",
    "v.testDesc":"Mulailah dengan transfer uji bernilai kecil.",
    "v.txidDesc":"Gunakan TxID untuk memeriksa catatan transaksi sebenarnya."
  });
  Object.assign(polishedSectionContent.id, {
    startTitle:"Mulai di sini",
    faqTitle:"FAQ",
    safetyTitle:"Keamanan / Pencegahan penipuan",
    startTip:"Urutan yang paling disarankan untuk pemula adalah 1 → 2 → Glosarium → 3 → 4 → Keamanan → Perpustakaan Sumber."
  });
  patchSourcesLang('id', [
    ['Source Library','Perpustakaan Sumber'],
    ['Exchange','Bursa'],
    ['exchange','bursa'],
    ['custody','kustodi'],
    ['wallet','dompet'],
    ['Stablecoin','Koin stabil'],
    ['stablecoin','koin stabil']
  ]);
  patchLessonLang('id', [
    ['Wallet','Dompet'],
    ['Address, private key, dan seed phrase','Alamat dompet, kunci privat, dan frasa pemulihan'],
    ['Address','Alamat dompet'],
    ['private key','kunci privat'],
    ['seed phrase','frasa pemulihan'],
    ['Custodial vs self-custody','Kustodi vs kendali mandiri'],
    ['custodial','kustodi'],
    ['self-custody','kendali mandiri'],
    ['network','jaringan'],
    ['address','alamat'],
    ['test transfer','transfer uji'],
    ['exchange','bursa'],
    ['stablecoin','koin stabil'],
    ['stable','stabil']
  ]);

  Object.assign(ui.pt, {
    "nav.start":"Comece aqui",
    "nav.startsub":"Caminho para iniciantes",
    "nav.safety":"Segurança / Prevenção de golpes",
    "nav.safetysub":"Hábitos práticos de proteção",
    "nav.sources":"Biblioteca de Fontes",
    "nav.sourcesub":"Artigos e referências oficiais",
    "home.desc":"Use esta página como ponto de partida. Você pode abrir as Lições 1–5, consultar o Glossário ou visitar a Biblioteca de Fontes para ler artigos reais e materiais oficiais.",
    "home.startCardTitle":"Comece aqui",
    "home.startCardDesc":"Ajuda quem chegou agora a saber exatamente por onde começar.",
    "home.openStart":"Abrir guia inicial",
    "home.safetyCardTitle":"Segurança / Prevenção de golpes",
    "home.safetyCardDesc":"Aprenda hábitos práticos para evitar golpes e proteger a carteira.",
    "home.openSafety":"Abrir guia de segurança",
    "sources.pageTitle":"Biblioteca de Fontes",
    "sources.pageDesc":"Lista de artigos reais e referências oficiais. Use esta seção para conectar as lições com casos do mundo real.",
    "sources.catWallet":"Segurança da carteira"
  });
  Object.assign(extraUi.pt, {
    "v.utility":"Utilidade",
    "v.governance":"Governança",
    "v.stablecoin":"Moeda estável",
    "v.custody":"Custódia",
    "v.designrisk":"Risco de projeto",
    "v.networkDesc":"Confirme a rede correta antes de enviar.",
    "v.addressDesc":"Confira o início e o final do endereço.",
    "v.testDesc":"Envie primeiro um pequeno valor de teste.",
    "v.txidDesc":"Use o TxID para verificar o registro real."
  });
  Object.assign(polishedSectionContent.pt, {
    startTitle:"Comece aqui",
    faqTitle:"FAQ",
    safetyTitle:"Segurança / Prevenção de golpes",
    startTip:"Um bom caminho para iniciantes é: 1 → 2 → Glossário → 3 → 4 → Segurança → Biblioteca de Fontes."
  });
  patchSourcesLang('pt', [
    ['Source Library','Biblioteca de Fontes'],
    ['exchange','corretora'],
    ['Exchange','Corretora'],
    ['stablecoin','moeda estável'],
    ['wallet','carteira']
  ]);
  patchLessonLang('pt', [
    ['Address, private key e seed phrase','Endereço, chave privada e frase de recuperação'],
    ['Address','Endereço'],
    ['private key','chave privada'],
    ['seed phrase','frase de recuperação'],
    ['Custodial vs self-custody','Custódia vs autocustódia'],
    ['custodial','custodial'],
    ['self-custody','autocustódia'],
    ['network','rede'],
    ['address','endereço'],
    ['test transfer','transferência de teste'],
    ['exchange','corretora'],
    ['stablecoin','moeda estável'],
    ['stable','estável']
  ]);

  Object.assign(ui.br, {
    "nav.sources":"Biblioteca de Fontes",
    "nav.sourcesub":"Artigos e referências oficiais",
    "sources.pageTitle":"Biblioteca de Fontes",
    "sources.pageDesc":"Coleção de artigos reais e referências oficiais. Use esta seção para ligar as lições a casos do mundo real.",
    "sources.catWallet":"Segurança da carteira"
  });
  Object.assign(extraUi.br, {
    "v.utility":"Utilidade",
    "v.governance":"Governança",
    "v.stablecoin":"Moeda estável",
    "v.custody":"Custódia",
    "v.designrisk":"Risco de projeto"
  });
  Object.assign(polishedSectionContent.br, {
    faqTitle:"FAQ"
  });
  patchSourcesLang('br', [
    ['Source Library','Biblioteca de Fontes'],
    ['exchange','corretora'],
    ['Exchange','Corretora'],
    ['stablecoin','moeda estável']
  ]);
  patchLessonLang('br', [
    ['Address, private key e seed phrase','Endereço, chave privada e frase de recuperação'],
    ['Address','Endereço'],
    ['private key','chave privada'],
    ['seed phrase','frase de recuperação'],
    ['Custodial vs self-custody','Custódia vs autocustódia'],
    ['self-custody','autocustódia'],
    ['network','rede'],
    ['address','endereço'],
    ['test transfer','transferência de teste'],
    ['exchange','corretora'],
    ['stablecoin','moeda estável'],
    ['stable','estável']
  ]);

  Object.assign(ui.tr, {
    "sources.catStable":"Stabil coinler",
    "sources.catWallet":"Cüzdan güvenliği"
  });
  Object.assign(extraUi.tr, {
    "v.stablecoin":"Stabil coin",
    "v.utility":"Yardımcı kullanım",
    "v.custody":"Saklama"
  });
  patchSourcesLang('tr', [
    ['stablecoin','stabil coin'],
    ['Stablecoin','Stabil coin'],
    ['custody','saklama']
  ]);

  Object.assign(ui.es, {
    "nav.start":"Empieza aquí",
    "nav.startsub":"Ruta recomendada para principiantes",
    "nav.safety":"Seguridad / Prevención de estafas",
    "nav.safetysub":"Hábitos prácticos de protección",
    "nav.sources":"Biblioteca de Fuentes",
    "nav.sourcesub":"Artículos y referencias oficiales",
    "home.desc":"Empieza por lo básico y luego sigue con billeteras, transferencias seguras, roles de los tokens y lecciones del mundo real. También puedes abrir el Glosario y la Biblioteca de Fuentes en cualquier momento.",
    "home.startCardTitle":"Empieza aquí",
    "home.startCardDesc":"Muestra claramente por dónde debería comenzar alguien que llega por primera vez.",
    "home.openStart":"Abrir guía inicial",
    "home.safetyCardTitle":"Seguridad / Prevención de estafas",
    "home.safetyCardDesc":"Aprende hábitos prácticos para evitar estafas y proteger la billetera.",
    "home.openSafety":"Abrir guía de seguridad",
    "sources.pageTitle":"Biblioteca de Fuentes",
    "sources.pageDesc":"Lista de artículos reales y referencias oficiales. Úsala para conectar las lecciones con casos del mundo real.",
    "sources.catWallet":"Seguridad de la billetera"
  });
  Object.assign(extraUi.es, {
    "v.utility":"Utilidad",
    "v.governance":"Gobernanza",
    "v.stablecoin":"Moneda estable",
    "v.designrisk":"Riesgo de diseño",
    "v.networkDesc":"Confirma la red correcta antes de enviar.",
    "v.addressDesc":"Revisa el inicio y el final de la dirección.",
    "v.testDesc":"Haz primero una transferencia de prueba pequeña.",
    "v.txidDesc":"Usa el TxID para verificar el registro real."
  });
  Object.assign(polishedSectionContent.es, {
    startTitle:"Empieza aquí",
    faqTitle:"Preguntas frecuentes",
    safetyTitle:"Seguridad / Prevención de estafas",
    startTip:"Una buena ruta para principiantes es: 1 → 2 → Glosario → 3 → 4 → Seguridad → Biblioteca de Fuentes."
  });
  patchSourcesLang('es', [
    ['Source Library','Biblioteca de Fuentes'],
    ['exchange','plataforma de intercambio'],
    ['Exchange','Plataforma de intercambio'],
    ['stablecoin','moneda estable'],
    ['wallet','billetera']
  ]);
  patchLessonLang('es', [
    ['Address, private key y seed phrase','Dirección, clave privada y frase semilla'],
    ['Address','Dirección'],
    ['private key','clave privada'],
    ['seed phrase','frase semilla'],
    ['Custodial vs self-custody','Custodia vs autocustodia'],
    ['self-custody','autocustodia'],
    ['network','red'],
    ['address','dirección'],
    ['test transfer','transferencia de prueba'],
    ['exchange','plataforma de intercambio'],
    ['stablecoin','moneda estable'],
    ['stable','estable']
  ]);


  Object.assign(ui.ko, {
    "home.sourceTitle":"자료 라이브러리",
    "home.sourceDesc":"사기, 거래소, 스테이블코인, 지갑 보안처럼 실제 사례와 연결되는 기사와 공식 자료를 주제별로 볼 수 있습니다.",
    "home.openSources":"자료 라이브러리 열기"
  });
  Object.assign(extraUi.ko, {
    "v.txid":"거래 ID",
    "v.txidDesc":"거래 ID로 실제 기록 상태를 확인하세요."
  });
  patchLessonLang('ko', [["TxID","거래 ID"]]);
  patchSourcesLang('ko', [["Source Library","자료 라이브러리"],["Glossary","용어사전"]]);

  Object.assign(ui.th, {
    "home.faqCardTitle":"คำถามที่พบบ่อย",
    "home.faqCardDesc":"อ่านคำตอบสั้น ๆ สำหรับคำถามที่ผู้เริ่มต้นสงสัยบ่อยที่สุด",
    "home.openFaq":"เปิดคำถามที่พบบ่อย",
    "home.sourceTitle":"คลังแหล่งข้อมูล",
    "home.sourceDesc":"อ่านบทความจริงและแหล่งอ้างอิงทางการ แยกตามหัวข้อ เช่น การหลอกลวง ตลาดแลกเปลี่ยน สเตเบิลคอยน์ และความปลอดภัยของวอลเล็ต",
    "home.openSources":"เปิดคลังแหล่งข้อมูล"
  });
  Object.assign(extraUi.th, {
    "v.txid":"รหัสธุรกรรม",
    "v.txidDesc":"ใช้รหัสธุรกรรมเพื่อตรวจสอบบันทึกจริง"
  });
  patchLessonLang('th', [["TxID","รหัสธุรกรรม"]]);

  Object.assign(ui.id, {
    "nav.faqPage":"Pertanyaan Umum",
    "home.faqCardTitle":"Pertanyaan Umum",
    "home.openFaq":"Buka pertanyaan umum",
    "home.sourceTitle":"Perpustakaan Sumber",
    "home.sourceDesc":"Baca artikel nyata dan referensi resmi berdasarkan topik seperti penipuan, bursa, koin stabil, dan keamanan dompet.",
    "home.openSources":"Buka perpustakaan sumber"
  });
  Object.assign(extraUi.id, {
    "v.txid":"ID transaksi",
    "v.txidDesc":"Gunakan ID transaksi untuk memeriksa catatan transaksi sebenarnya."
  });
  Object.assign(polishedSectionContent.id, { faqTitle:"Pertanyaan Umum" });
  patchLessonLang('id', [["TxID","ID transaksi"]]);
  patchSourcesLang('id', [["Source Library","Perpustakaan Sumber"],["Glossary","Glosarium"],["FAQ","Pertanyaan Umum"]]);

  Object.assign(ui.pt, {
    "nav.faqPage":"Perguntas frequentes",
    "home.faqCardTitle":"Perguntas frequentes",
    "home.openFaq":"Abrir perguntas frequentes",
    "home.sourceTitle":"Biblioteca de Fontes",
    "home.sourceDesc":"Leia artigos reais e referências oficiais separados por tema, como golpes, corretoras, moedas estáveis e segurança da carteira.",
    "home.openSources":"Abrir biblioteca de fontes"
  });
  Object.assign(extraUi.pt, {
    "v.txid":"ID da transação",
    "v.txidDesc":"Use o ID da transação para verificar o registro real."
  });
  Object.assign(polishedSectionContent.pt, { faqTitle:"Perguntas frequentes" });
  patchLessonLang('pt', [["TxID","ID da transação"]]);
  patchSourcesLang('pt', [["Source Library","Biblioteca de Fontes"],["Glossary","Glossário"],["FAQ","Perguntas frequentes"]]);

  Object.assign(ui.br, {
    "nav.faqPage":"Perguntas frequentes",
    "home.faqCardTitle":"Perguntas frequentes",
    "home.openFaq":"Abrir perguntas frequentes",
    "home.sourceTitle":"Biblioteca de Fontes",
    "home.sourceDesc":"Leia artigos reais e referências oficiais separados por tema, como golpes, corretoras, moedas estáveis e segurança da carteira.",
    "home.openSources":"Abrir biblioteca de fontes"
  });
  Object.assign(extraUi.br, {
    "v.txid":"ID da transação",
    "v.txidDesc":"Use o ID da transação para verificar o registro real."
  });
  Object.assign(polishedSectionContent.br, { faqTitle:"Perguntas frequentes" });
  patchLessonLang('br', [["TxID","ID da transação"]]);
  patchSourcesLang('br', [["Source Library","Biblioteca de Fontes"],["Glossary","Glossário"],["FAQ","Perguntas frequentes"]]);

  Object.assign(ui.tr, {
    "glossary.title":"Sözlük",
    "glossary.desc":"En önemli kripto terimlerinin basit açıklamaları. Bir kavram tanıdık gelmiyorsa önce burayı okuyun.",
    "sources.pageTitle":"Kaynak Kütüphanesi",
    "sources.pageDesc":"Derslerdeki fikirleri gerçek dünyadaki örneklerle bağlayan makale ve resmî kaynak listesi.",
    "home.sourceTitle":"Kaynak Kütüphanesi",
    "home.sourceDesc":"Dolandırıcılıklar, borsalar, stabil coin'ler ve cüzdan güvenliği gibi başlıklarda gerçek makaleleri ve resmî kaynakları okuyun.",
    "home.openSources":"Kaynak kütüphanesini aç"
  });
  Object.assign(extraUi.tr, {
    "v.txid":"İşlem Kimliği",
    "v.txidDesc":"Gerçek kayıt durumunu işlem kimliği ile doğrulayın."
  });
  patchLessonLang('tr', [["TxID","İşlem Kimliği"],["Glossary","Sözlük"],["Source Library","Kaynak Kütüphanesi"]]);
  patchSourcesLang('tr', [["Source Library","Kaynak Kütüphanesi"],["Glossary","Sözlük"],["FAQ","SSS"]]);

  Object.assign(ui.es, {
    "nav.faqPage":"Preguntas frecuentes",
    "home.faqCardTitle":"Preguntas frecuentes",
    "home.openFaq":"Abrir preguntas frecuentes",
    "home.sourceTitle":"Biblioteca de Fuentes",
    "home.sourceDesc":"Lee artículos reales y referencias oficiales organizados por temas como estafas, plataformas de intercambio, monedas estables y seguridad de la billetera.",
    "home.openSources":"Abrir biblioteca de fuentes"
  });
  Object.assign(extraUi.es, {
    "v.txid":"ID de transacción",
    "v.txidDesc":"Usa el ID de transacción para verificar el registro real."
  });
  patchLessonLang('es', [["TxID","ID de transacción"]]);
  patchSourcesLang('es', [["Source Library","Biblioteca de Fuentes"],["Glossary","Glosario"],["FAQ","Preguntas frecuentes"]]);


  Object.assign(extraUi.ko, {
    "glossary.title":"용어사전",
    "glossary.desc":"핵심 암호화폐 용어를 쉬운 말로 정리했습니다. 강의가 낯설게 느껴질 때 먼저 읽어보세요.",
    "sources.pageTitle":"자료 라이브러리",
    "sources.pageDesc":"실제 기사와 공식 자료를 모아둔 읽기 목록입니다. 강의 내용과 현실 사례를 연결해서 볼 수 있습니다."
  });
  if (polishedSectionContent.ko) polishedSectionContent.ko = replaceDeep(polishedSectionContent.ko, [["TxID","거래 ID"]]);

  Object.assign(extraUi.th, {
    "glossary.title":"อภิธานศัพท์",
    "glossary.desc":"ความหมายง่าย ๆ ของคำสำคัญในโลกคริปโต ถ้าคำไหนไม่คุ้น ให้เปิดหน้านี้ก่อน",
    "sources.pageTitle":"คลังแหล่งข้อมูล",
    "sources.pageDesc":"รวมบทความจริงและเอกสารอ้างอิงทางการ เพื่อเชื่อมโยงบทเรียนกับเหตุการณ์จริง"
  });
  if (polishedSectionContent.th) polishedSectionContent.th = replaceDeep(polishedSectionContent.th, [["TxID","รหัสธุรกรรม"]]);

  Object.assign(extraUi.id, {
    "glossary.title":"Glosarium",
    "glossary.desc":"Arti sederhana untuk istilah penting di dunia kripto. Baca bagian ini terlebih dahulu jika pelajaran terasa asing.",
    "sources.pageTitle":"Perpustakaan Sumber",
    "sources.pageDesc":"Daftar artikel nyata dan referensi resmi. Gunakan untuk menghubungkan pelajaran dengan kasus di dunia nyata."
  });
  if (polishedSectionContent.id) polishedSectionContent.id = replaceDeep(polishedSectionContent.id, [["TxID","ID transaksi"],["Wallet","Dompet"],["Blockchain","Blockchain"]]);

  Object.assign(extraUi.pt, {
    "glossary.title":"Glossário",
    "glossary.desc":"Significados simples para palavras importantes do universo cripto. Se algum termo parecer estranho, veja esta página primeiro.",
    "sources.pageTitle":"Biblioteca de Fontes",
    "sources.pageDesc":"Lista de artigos reais e referências oficiais. Use esta seção para conectar as lições com casos do mundo real."
  });
  if (polishedSectionContent.pt) polishedSectionContent.pt = replaceDeep(polishedSectionContent.pt, [["TxID","ID da transação"]]);

  Object.assign(extraUi.br, {
    "glossary.title":"Glossário",
    "glossary.desc":"Significados simples para palavras importantes do universo cripto. Se algum termo parecer estranho, veja esta página primeiro.",
    "sources.pageTitle":"Biblioteca de Fontes",
    "sources.pageDesc":"Coleção de artigos reais e referências oficiais. Use esta seção para ligar as lições a casos do mundo real."
  });
  if (polishedSectionContent.br) polishedSectionContent.br = replaceDeep(polishedSectionContent.br, [["TxID","ID da transação"]]);

  Object.assign(extraUi.tr, {
    "glossary.title":"Sözlük",
    "glossary.desc":"En önemli kripto terimlerinin basit açıklamaları. Bir kavram tanıdık gelmiyorsa önce burayı okuyun.",
    "sources.pageTitle":"Kaynak Kütüphanesi",
    "sources.pageDesc":"Derslerdeki fikirleri gerçek dünyadaki örneklerle bağlayan makale ve resmî kaynak listesi."
  });
  if (polishedSectionContent.tr) polishedSectionContent.tr = replaceDeep(polishedSectionContent.tr, [["TxID","İşlem Kimliği"]]);

  Object.assign(extraUi.es, {
    "glossary.title":"Glosario",
    "glossary.desc":"Significados simples de palabras clave del mundo cripto. Si alguna te resulta extraña, mira esta página primero.",
    "sources.pageTitle":"Biblioteca de Fuentes",
    "sources.pageDesc":"Lista de artículos reales y referencias oficiales. Úsala para conectar las lecciones con casos del mundo real."
  });
  if (polishedSectionContent.es) polishedSectionContent.es = replaceDeep(polishedSectionContent.es, [["TxID","ID de transacción"]]);

  currentPage = 'home';
  currentLesson = 0;
  document.documentElement.lang = currentLang === 'br' ? 'pt-BR' : currentLang;
  if (typeof applyUI === 'function') applyUI();
  if (typeof renderAllLessons === 'function') renderAllLessons();
  showPage('home');
})();