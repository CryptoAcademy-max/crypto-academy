(function(){
  if(typeof window === 'undefined' || window.__addressPoisoningSources20260418) return;
  window.__addressPoisoningSources20260418 = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "br" ? "pt" : value;
  }

  function getRelatedLabel(lang){
    var resolved = baseLang(lang);
    if(typeof lessons !== "undefined" && lessons){
      if(lessons[lang] && lessons[lang][6] && lessons[lang][6].title) return lessons[lang][6].title;
      if(lessons[resolved] && lessons[resolved][6] && lessons[resolved][6].title) return lessons[resolved][6].title;
    }
    if(typeof ui !== "undefined" && ui){
      if(ui[lang] && ui[lang]["nav.l7"]) return ui[lang]["nav.l7"];
      if(ui[resolved] && ui[resolved]["nav.l7"]) return ui[resolved]["nav.l7"];
    }
    return "Lesson 7";
  }

  function ensureSourceList(store, lang){
    if(!store) return null;
    var resolved = baseLang(lang);
    if(!Array.isArray(store[lang])){
      store[lang] = clone(store[resolved] || store.en || []);
    }
    return store[lang];
  }

  function ensureLessonSourceList(store, lang){
    if(!store) return null;
    var resolved = baseLang(lang);
    if(!Array.isArray(store[lang])){
      store[lang] = clone(store[resolved] || store.en || []);
    }
    if(!store[lang][6]) return null;
    if(!Array.isArray(store[lang][6].sources)){
      var fallback = store[resolved] && store[resolved][6] && Array.isArray(store[resolved][6].sources)
        ? clone(store[resolved][6].sources)
        : [];
      store[lang][6].sources = fallback;
    }
    return store[lang][6].sources;
  }

  function upsertLibrarySource(list, source, relatedLabel){
    if(!list.some(function(row){ return row && row[4] === source.url; })){
      list.push(["scams", source.publisher, source.title, source.desc, source.url, relatedLabel, source.why]);
    }
  }

  function upsertLessonSource(list, source){
    if(!list.some(function(row){ return row && row[2] === source.url; })){
      list.push([source.title, source.desc, source.url]);
    }
  }

  var LANGS = ["en","ko","th","id","pt","br","tr","es","ar","vi","ha"];
  var PACK = {
    en:[
      {
        publisher:"MetaMask",
        title:"MetaMask: Address poisoning scam warning",
        desc:"A reference that helps explain how lookalike wallet addresses can appear in transaction history and why copying from recent history can be risky.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Helpful for understanding why recent-history copying can lead to a wrong address."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: Address poisoning and wallet safety",
        desc:"A reference that helps explain why rechecking full wallet addresses and using trusted saved addresses can reduce address poisoning risk.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Good reminder to verify the full address and use saved trusted addresses."
      }
    ],
    ko:[
      {
        publisher:"MetaMask",
        title:"MetaMask: 주소 오염 공격 경고",
        desc:"비슷하게 보이는 지갑 주소가 거래 기록에 섞여 사용자가 잘못된 주소를 복사하게 되는 방식과, 왜 최근 거래 기록만 믿으면 위험한지 이해하는 데 도움이 되는 자료입니다.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"최근 거래 기록만 보고 복사할 때 왜 위험한지 빠르게 이해하는 데 도움이 됩니다."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: 주소 오염 공격과 지갑 안전",
        desc:"주소 오염 공격을 피하기 위해 전체 주소를 다시 확인하고, 저장된 신뢰 주소를 사용하는 습관이 왜 중요한지 이해하는 데 도움이 되는 자료입니다.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"전체 주소 재확인과 저장한 신뢰 주소 사용 습관의 중요성을 짧게 확인하기 좋습니다."
      }
    ],
    th:[
      {
        publisher:"MetaMask",
        title:"MetaMask: คำเตือนเรื่อง address poisoning",
        desc:"แหล่งอ้างอิงที่ช่วยอธิบายว่าที่อยู่กระเป๋าที่ดูคล้ายกันสามารถโผล่ในประวัติธุรกรรมได้อย่างไร และทำไมการคัดลอกจากประวัติล่าสุดจึงเสี่ยง",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"ช่วยให้ผู้เริ่มต้นเห็นความเสี่ยงของการคัดลอกจากประวัติธุรกรรมเร็วเกินไป"
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: address poisoning และความปลอดภัยของกระเป๋า",
        desc:"แหล่งอ้างอิงที่ช่วยอธิบายว่าการตรวจสอบที่อยู่เต็มอีกครั้งและการใช้ที่อยู่ที่บันทึกไว้อย่างเชื่อถือได้ช่วยลดความเสี่ยงจาก address poisoning ได้อย่างไร",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"เหมาะสำหรับทบทวนการเช็กที่อยู่เต็มและการใช้ที่อยู่ที่บันทึกไว้อย่างปลอดภัย"
      }
    ],
    id:[
      {
        publisher:"MetaMask",
        title:"MetaMask: peringatan scam peracunan alamat",
        desc:"Referensi yang membantu menjelaskan bagaimana alamat wallet yang mirip bisa muncul di riwayat transaksi dan mengapa menyalin dari riwayat terbaru bisa berisiko.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Membantu pemula memahami risiko menyalin alamat dari riwayat terlalu cepat."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: peracunan alamat dan keamanan wallet",
        desc:"Referensi yang membantu menjelaskan mengapa memeriksa ulang seluruh alamat wallet dan memakai alamat tepercaya yang sudah disimpan bisa mengurangi risiko peracunan alamat.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Pengingat yang jelas untuk mengecek alamat penuh dan memakai alamat tersimpan yang tepercaya."
      }
    ],
    pt:[
      {
        publisher:"MetaMask",
        title:"MetaMask: alerta de golpe de envenenamento de endereco",
        desc:"Uma referencia que ajuda a explicar como enderecos de carteira parecidos podem aparecer no historico de transacoes e por que copiar do historico recente pode ser arriscado.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Ajuda iniciantes a entender o risco de copiar um endereco do historico com pressa."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: envenenamento de endereco e seguranca da carteira",
        desc:"Uma referencia que ajuda a explicar por que conferir o endereco completo da carteira e usar enderecos confiaveis ja salvos pode reduzir o risco de envenenamento de endereco.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Bom lembrete para verificar o endereco inteiro e usar enderecos confiaveis salvos."
      }
    ],
    tr:[
      {
        publisher:"MetaMask",
        title:"MetaMask: adres zehirleme dolandiriciligi uyarisi",
        desc:"Benzer gorunen cuzdan adreslerinin islem gecmisinde nasil gorunebildigini ve son gecmisten kopyalamanin neden riskli oldugunu anlatan bir kaynak.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Islem gecmisinden hizli kopyalamanin neden tehlikeli olabildigini gostermeye yardimci olur."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: adres zehirleme ve cuzdan guvenligi",
        desc:"Tam cuzdan adresini yeniden kontrol etmenin ve kaydedilmis guvenilir adresleri kullanmanin adres zehirleme riskini nasil azaltabilecegini anlatan bir kaynak.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Tam adres kontrolu ve kaydedilmis guvenilir adres kullanimi icin iyi bir hatirlatmadir."
      }
    ],
    es:[
      {
        publisher:"MetaMask",
        title:"MetaMask: alerta sobre estafa de envenenamiento de direcciones",
        desc:"Un recurso que ayuda a explicar como direcciones de wallet parecidas pueden aparecer en el historial de transacciones y por que copiar desde el historial reciente puede ser riesgoso.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Ayuda a ver por que copiar una direccion del historial con prisa puede salir mal."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: envenenamiento de direcciones y seguridad de wallet",
        desc:"Un recurso que ayuda a explicar por que volver a revisar la direccion completa y usar direcciones confiables guardadas puede reducir el riesgo de envenenamiento de direcciones.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Buen recordatorio para revisar la direccion completa y usar direcciones guardadas de confianza."
      }
    ],
    ar:[
      {
        publisher:"MetaMask",
        title:"MetaMask: تحذير من احتيال تسميم العناوين",
        desc:"مرجع يساعد على شرح كيف يمكن أن تظهر عناوين محافظ متشابهة في سجل المعاملات ولماذا يكون النسخ من السجل الأخير فقط أمراً خطيراً.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"مفيد لفهم خطر نسخ العنوان بسرعة من سجل المعاملات الحديثة."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: تسميم العناوين وأمان المحفظة",
        desc:"مرجع يساعد على شرح لماذا تقلل إعادة فحص عنوان المحفظة كاملاً واستخدام العناوين الموثوقة المحفوظة من خطر تسميم العناوين.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"تذكير واضح بأهمية مراجعة العنوان كاملاً واستخدام العناوين المحفوظة الموثوقة."
      }
    ],
    vi:[
      {
        publisher:"MetaMask",
        title:"MetaMask: canh bao lua dao dau doc dia chi",
        desc:"Tai lieu giup giai thich cach cac dia chi vi giong nhau co the xuat hien trong lich su giao dich va vi sao sao chep tu lich su gan day co the nguy hiem.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Giup nguoi moi hieu vi sao sao chep dia chi tu lich su qua nhanh co the gay sai sot."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: dau doc dia chi va an toan vi",
        desc:"Tai lieu giup giai thich vi sao viec kiem tra lai toan bo dia chi vi va dung dia chi dang tin da luu co the giam rui ro dau doc dia chi.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Nhac ban kiem tra lai day du dia chi va uu tien dia chi tin cay da luu."
      }
    ],
    ha:[
      {
        publisher:"MetaMask",
        title:"MetaMask: gargadin damfarar gurbata adireshi",
        desc:"Wannan bayani yana taimakawa wajen fahimtar yadda adireshin walat masu kama da juna za su iya bayyana a tarihin muamala da kuma dalilin da ya sa kwafi daga tarihin baya-bayan nan kadai yake da hadari.",
        url:"https://support.metamask.io/stay-safe/protect-yourself/social-engineering/spoofing-scams/",
        why:"Yana taimaka wa mai farawa ya fahimci hadarin kwafi daga tarihin muamala cikin sauri."
      },
      {
        publisher:"Coinbase",
        title:"Coinbase: gurbata adireshi da tsaron walat",
        desc:"Wannan bayani yana taimakawa wajen fahimtar dalilin da ya sa sake duba cikakken adireshin walat da amfani da amintattun adireshin da aka adana zai iya rage hadarin gurbata adireshi.",
        url:"https://www.coinbase.com/learn/wallet/address-poisoning-scams",
        why:"Tuna wa mai amfani muhimmancin sake duba cikakken adireshi da amfani da adireshin da aka riga aka amince da su."
      }
    ]
  };
  PACK.br = clone(PACK.pt);

  LANGS.forEach(function(lang){
    var pack = PACK[baseLang(lang)] || PACK.en;
    var relatedLabel = getRelatedLabel(lang);

    var libraryList = ensureSourceList(typeof sourceLibrary !== "undefined" ? sourceLibrary : null, lang);
    if(libraryList){
      pack.forEach(function(entry){
        upsertLibrarySource(libraryList, entry, relatedLabel);
      });
    }

    var overrideList = ensureSourceList(typeof sourceOverrides !== "undefined" ? sourceOverrides : null, lang);
    if(overrideList){
      pack.forEach(function(entry){
        upsertLibrarySource(overrideList, entry, relatedLabel);
      });
    }

    var lessonList = ensureLessonSourceList(typeof lessons !== "undefined" ? lessons : null, lang);
    if(lessonList){
      pack.forEach(function(entry){
        upsertLessonSource(lessonList, entry);
      });
    }

    var lessonOverrideList = ensureLessonSourceList(typeof lessonOverrides !== "undefined" ? lessonOverrides : null, lang);
    if(lessonOverrideList){
      pack.forEach(function(entry){
        upsertLessonSource(lessonOverrideList, entry);
      });
    }
  });

  if(typeof document !== "undefined"){
    var lessonSevenPanel = document.getElementById("lesson6");
    if(lessonSevenPanel && typeof renderLesson === "function"){
      lessonSevenPanel.innerHTML = renderLesson(6);
    }
    var sourcesPanel = document.getElementById("sourcesPanel");
    if(sourcesPanel && typeof renderSources === "function"){
      sourcesPanel.innerHTML = renderSources();
    }
  }

  if(typeof currentPage !== "undefined" && currentPage === "sources" && typeof showPage === "function"){
    showPage("sources");
  }
  if(typeof currentPage !== "undefined" && /^lesson\\d+$/.test(currentPage) && typeof currentLesson === "number" && currentLesson === 6 && typeof showLesson === "function"){
    showLesson(6);
  }
})();