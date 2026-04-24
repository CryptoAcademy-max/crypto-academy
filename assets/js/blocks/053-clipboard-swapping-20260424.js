(function(){
  if(typeof window === "undefined" || window.__clipboardSwapping20260424) return;
  window.__clipboardSwapping20260424 = true;

  function clone(value){
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function baseLang(lang){
    var value = lang || (typeof currentLang === "string" && currentLang ? currentLang : "en");
    return value === "br" ? "pt" : value;
  }

  function normalize(value){
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function ensurePageLang(lang){
    if(typeof polishedSectionContent === "undefined" || !polishedSectionContent) return null;
    var resolved = baseLang(lang);
    if(!polishedSectionContent[lang]){
      polishedSectionContent[lang] = clone(polishedSectionContent[resolved] || polishedSectionContent.en || {});
    }
    polishedSectionContent[lang].faqItems = polishedSectionContent[lang].faqItems || [];
    polishedSectionContent[lang].safetyItems = polishedSectionContent[lang].safetyItems || [];
    return polishedSectionContent[lang];
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

  function ensureLessonSections(store, lang){
    if(!store) return null;
    var resolved = baseLang(lang);
    if(!Array.isArray(store[lang])){
      store[lang] = clone(store[resolved] || store.en || []);
    }
    if(!store[lang][6]) return null;
    if(!Array.isArray(store[lang][6].sections)){
      var fallback = store[resolved] && store[resolved][6] && Array.isArray(store[resolved][6].sections)
        ? clone(store[resolved][6].sections)
        : [];
      store[lang][6].sections = fallback;
    }
    return store[lang][6].sections;
  }

  function getVisibleGlossaryList(store, lang){
    var resolved = baseLang(lang);
    if(!store) return [];
    if(Array.isArray(store[lang])) return clone(store[lang]);
    if(Array.isArray(store[resolved])) return clone(store[resolved]);
    if(Array.isArray(store.en)) return clone(store.en);
    return [];
  }

  function getGlossarySearchStore(lang){
    var resolved = baseLang(lang);
    if(window.__repGlossaryEntries && window.__repGlossaryEntries[lang]) return clone(window.__repGlossaryEntries[lang]);
    if(window.__repGlossaryEntries && window.__repGlossaryEntries[resolved]) return clone(window.__repGlossaryEntries[resolved]);
    if(typeof glossaryEntries !== "undefined" && glossaryEntries[lang]) return clone(glossaryEntries[lang]);
    if(typeof glossaryEntries !== "undefined" && glossaryEntries[resolved]) return clone(glossaryEntries[resolved]);
    return {};
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

  var KEY = "clipboardSwappingAttack";
  var LANGS = ["en","ko","th","id","pt","br","tr","es","ar","vi","ha"];
  var SOURCE_URLS = {
    metamask:"https://support.metamask.io/stay-safe/protect-yourself/wallet-and-hardware/clipboard-hacking/",
    microsoft:"https://www.microsoft.com/security/blog/2022/05/17/in-hot-pursuit-of-cryware-defending-hot-wallets-from-attacks/"
  };
  var ALIASES = [
    "Clipboard Swapping Attack",
    "clipboard swapping attack",
    "clipboard attack",
    "clipboard hijacking",
    "clipboard malware",
    "copied address changed",
    "pasted address changed",
    "wallet address replaced",
    "클립보드 바꿔치기 공격",
    "클립보드 공격",
    "복사한 주소 변경",
    "붙여넣기 주소 변경",
    "지갑 주소 바꿔치기",
    "클립보드 악성코드"
  ];
  var PACK = {
    en:{
      glossary:{
        term:"Clipboard Swapping Attack",
        desc:"An attack in which malware secretly replaces a copied wallet address with a different one before you paste it. If you do not recheck the address before sending, you may transfer assets to the wrong destination."
      },
      faq:{
        q:"How can I avoid a clipboard swapping attack?",
        a:"Recheck the wallet address after pasting, not just the first and last characters. If a copied address changed or the pasted address looks replaced, stop. Use trusted saved addresses for important transfers, avoid suspicious software that could act like clipboard malware or clipboard hijacking, and consider a small test transaction before sending a large amount."
      },
      safety:{
        title:"Recheck pasted wallet addresses",
        body:"Clipboard malware can secretly replace a copied wallet address before you paste it. If a copied address changed or the pasted address looks different, treat it as a warning sign, verify the full address again, use trusted saved addresses for important transfers, and test with a small amount first."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: Clipboard hacking",
          desc:"A reference that helps explain how malware can replace a copied wallet address before you paste it and why checking the final address before sending matters.",
          url:SOURCE_URLS.metamask,
          why:"Helpful reminder to verify pasted addresses before every transfer."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: Cryware and clipboard replacement",
          desc:"A reference that helps explain how wallet-targeting malware can replace copied addresses and why malware hygiene matters for safe transfers.",
          url:SOURCE_URLS.microsoft,
          why:"Useful for understanding clipboard malware risk beyond phishing links."
        }
      ],
      lessonNote:"A clipboard swapping attack or clipboard hijacking can replace a copied wallet address before you paste it, so check the full pasted address again and use trusted saved addresses for important transfers."
    },
    ko:{
      glossary:{
        term:"클립보드 바꿔치기 공격",
        desc:"사용자가 복사한 지갑 주소를 악성 프로그램이 다른 주소로 몰래 바꿔 붙여넣게 만드는 공격입니다. 전송 전에 주소를 다시 확인하지 않으면 잘못된 주소로 자산을 보낼 수 있습니다."
      },
      faq:{
        q:"클립보드 바꿔치기 공격은 어떻게 피하나요?",
        a:"주소를 붙여넣은 뒤 앞자리와 뒷자리만 보지 말고 가능하면 전체 주소를 다시 확인하세요. 복사한 주소 변경, 붙여넣기 주소 변경, 지갑 주소 바꿔치기처럼 보이면 즉시 멈추고, 중요한 전송은 저장된 신뢰 주소를 사용하고, 의심스러운 프로그램 설치를 피하고, 큰 금액 전에는 소액 테스트를 먼저 해 보세요."
      },
      safety:{
        title:"붙여넣은 주소를 다시 확인하세요",
        body:"클립보드 악성코드나 클립보드 공격은 복사한 지갑 주소를 다른 주소로 바꿔 붙여넣게 만들 수 있습니다. 복사한 주소 변경이나 붙여넣기 주소 변경이 보이면 지갑 주소 바꿔치기를 의심하고, 전송 직전 전체 주소를 다시 확인하고, 중요한 주소는 저장된 신뢰 주소를 사용하고, 큰 금액 전송 전에는 소액 테스트를 먼저 해 보세요."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: 클립보드 해킹 안내",
          desc:"복사한 지갑 주소가 붙여넣기 전에 악성 프로그램으로 바뀔 수 있다는 점과, 전송 직전 최종 주소 재확인이 왜 중요한지 이해하는 데 도움이 되는 자료입니다.",
          url:SOURCE_URLS.metamask,
          why:"붙여넣은 주소를 매번 다시 확인해야 하는 이유를 초보자 관점에서 보여 줍니다."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: 지갑 악성코드와 클립보드 바꿔치기",
          desc:"지갑을 노리는 악성코드가 복사한 주소를 바꿔치기할 수 있다는 점과, 안전한 전송을 위해 기기 보안이 왜 중요한지 이해하는 데 도움이 되는 자료입니다.",
          url:SOURCE_URLS.microsoft,
          why:"피싱 링크뿐 아니라 클립보드 악성코드 위험도 함께 이해하는 데 유용합니다."
        }
      ],
      lessonNote:"클립보드 바꿔치기 공격이 있으면 복사한 주소가 붙여넣기 전에 바뀔 수 있으니, 주소 오염 공격처럼 최근 기록만 믿지 말고 전송 직전 전체 주소를 다시 확인하세요."
    },
    th:{
      glossary:{
        term:"การโจมตีสลับคลิปบอร์ด",
        desc:"เป็นการโจมตีที่มัลแวร์แอบเปลี่ยนที่อยู่กระเป๋าเงินที่คุณคัดลอกไว้ให้เป็นอีกที่อยู่หนึ่งก่อนวาง หากไม่ตรวจสอบที่อยู่อีกครั้งก่อนส่ง คุณอาจโอนสินทรัพย์ไปยังปลายทางที่ผิดได้"
      },
      faq:{
        q:"จะหลีกเลี่ยงการโจมตีสลับคลิปบอร์ดได้อย่างไร?",
        a:"หลังวางที่อยู่แล้วให้ตรวจสอบอีกครั้ง ไม่ใช่ดูแค่ตัวหน้าและตัวท้าย ใช้ที่อยู่ที่บันทึกไว้และเชื่อถือได้สำหรับการโอนสำคัญ ระวังโปรแกรมที่น่าสงสัย และลองโอนจำนวนน้อยก่อนหากเป็นยอดใหญ่"
      },
      safety:{
        title:"ตรวจสอบที่อยู่หลังวางอีกครั้ง",
        body:"มัลแวร์คลิปบอร์ดอาจแอบเปลี่ยนที่อยู่กระเป๋าเงินที่คุณคัดลอกไว้ก่อนที่คุณจะวางได้ ตรวจสอบที่อยู่ทั้งหมดอีกครั้ง ใช้ที่อยู่ที่บันทึกไว้อย่างน่าเชื่อถือสำหรับการโอนสำคัญ และลองโอนจำนวนน้อยก่อนเสมอ"
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: การแฮ็กคลิปบอร์ด",
          desc:"แหล่งอ้างอิงที่ช่วยอธิบายว่ามัลแวร์สามารถเปลี่ยนที่อยู่กระเป๋าเงินที่คัดลอกไว้ก่อนวางได้อย่างไร และทำไมการตรวจสอบที่อยู่สุดท้ายก่อนส่งจึงสำคัญ",
          url:SOURCE_URLS.metamask,
          why:"ช่วยเตือนให้ตรวจสอบที่อยู่ที่วางแล้วทุกครั้งก่อนโอน"
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: มัลแวร์กระเป๋าเงินและการสลับคลิปบอร์ด",
          desc:"แหล่งอ้างอิงที่ช่วยอธิบายว่ามัลแวร์ที่มุ่งโจมตีกระเป๋าเงินสามารถเปลี่ยนข้อมูลที่คัดลอกไว้ได้อย่างไร และทำไมสุขอนามัยด้านอุปกรณ์จึงสำคัญต่อการโอนอย่างปลอดภัย",
          url:SOURCE_URLS.microsoft,
          why:"ช่วยให้เข้าใจความเสี่ยงจากมัลแวร์คลิปบอร์ดนอกเหนือจากลิงก์ฟิชชิง"
        }
      ],
      lessonNote:"หากมีมัลแวร์คลิปบอร์ด ที่อยู่ที่คัดลอกไว้อาจถูกสลับก่อนวางได้ จึงควรตรวจสอบที่อยู่ทั้งหมดอีกครั้งและใช้ที่อยู่ที่บันทึกไว้อย่างน่าเชื่อถือสำหรับการโอนสำคัญ"
    },
    id:{
      glossary:{
        term:"Serangan pertukaran clipboard",
        desc:"Serangan ini terjadi ketika malware diam-diam mengganti alamat wallet yang sudah Anda salin dengan alamat lain sebelum ditempel. Jika Anda tidak memeriksa ulang alamat sebelum mengirim, aset bisa terkirim ke tujuan yang salah."
      },
      faq:{
        q:"Bagaimana cara menghindari serangan pertukaran clipboard?",
        a:"Periksa lagi alamat wallet setelah ditempel, jangan hanya melihat karakter awal dan akhir. Gunakan alamat tepercaya yang sudah disimpan untuk transfer penting, hindari software mencurigakan, dan pertimbangkan tes kecil sebelum mengirim jumlah besar."
      },
      safety:{
        title:"Periksa ulang alamat yang ditempel",
        body:"Malware clipboard bisa diam-diam mengganti alamat wallet yang Anda salin sebelum ditempel. Periksa ulang seluruh alamat, gunakan alamat tepercaya yang sudah disimpan untuk transfer penting, dan lakukan tes kecil terlebih dahulu."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: peretasan clipboard",
          desc:"Referensi yang membantu menjelaskan bagaimana malware dapat mengganti alamat wallet yang sudah disalin sebelum ditempel dan mengapa pemeriksaan alamat akhir sebelum mengirim itu penting.",
          url:SOURCE_URLS.metamask,
          why:"Pengingat berguna untuk memeriksa alamat hasil tempel sebelum setiap transfer."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: malware wallet dan penggantian clipboard",
          desc:"Referensi yang membantu menjelaskan bagaimana malware yang menargetkan wallet dapat mengganti alamat yang disalin dan mengapa kebersihan perangkat penting untuk transfer aman.",
          url:SOURCE_URLS.microsoft,
          why:"Membantu memahami risiko malware clipboard di luar tautan phishing."
        }
      ],
      lessonNote:"Jika malware clipboard aktif, alamat yang Anda salin bisa berubah sebelum ditempel. Karena itu, periksa lagi seluruh alamat yang ditempel dan gunakan alamat tepercaya yang sudah disimpan untuk transfer penting."
    },
    pt:{
      glossary:{
        term:"Ataque de troca da área de transferência",
        desc:"É um ataque em que um malware troca em segredo o endereço de carteira que você copiou por outro antes de você colar. Se você não conferir o endereço novamente antes de enviar, pode transferir ativos para o destino errado."
      },
      faq:{
        q:"Como posso evitar um ataque de troca da área de transferência?",
        a:"Confira o endereço da carteira depois de colar, não apenas os primeiros e últimos caracteres. Use endereços confiáveis já salvos para transferências importantes, evite programas suspeitos e considere um pequeno teste antes de enviar um valor alto."
      },
      safety:{
        title:"Confira novamente o endereço colado",
        body:"Malware de área de transferência pode trocar em segredo o endereço de carteira copiado antes de você colar. Revise o endereço completo, use endereços confiáveis já salvos para transferências importantes e faça um pequeno teste primeiro."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: ataque à área de transferência",
          desc:"Uma referência que ajuda a explicar como um malware pode trocar o endereço de carteira copiado antes de você colar e por que conferir o endereço final antes do envio é importante.",
          url:SOURCE_URLS.metamask,
          why:"Lembrete útil para verificar o endereço colado antes de cada transferência."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: malware de carteira e troca da área de transferência",
          desc:"Uma referência que ajuda a explicar como malwares que visam carteiras podem trocar endereços copiados e por que a higiene do dispositivo importa para transferências seguras.",
          url:SOURCE_URLS.microsoft,
          why:"Ajuda a entender o risco de malware de área de transferência além de links de phishing."
        }
      ],
      lessonNote:"Se houver malware de área de transferência no dispositivo, o endereço copiado pode mudar antes da colagem. Por isso, confira novamente o endereço completo colado e use endereços confiáveis já salvos nas transferências importantes."
    },
    tr:{
      glossary:{
        term:"Pano değiştirme saldırısı",
        desc:"Bu saldırıda kötü amaçlı yazılım, kopyaladığınız cüzdan adresini siz yapıştırmadan önce gizlice başka bir adresle değiştirir. Göndermeden önce adresi yeniden kontrol etmezseniz varlıklarınızı yanlış adrese gönderebilirsiniz."
      },
      faq:{
        q:"Pano değiştirme saldırısından nasıl kaçınabilirim?",
        a:"Yapıştırdıktan sonra cüzdan adresini yeniden kontrol edin; yalnızca ilk ve son karakterlere bakmayın. Önemli transferlerde kaydedilmiş güvenilir adresleri kullanın, şüpheli yazılımlardan kaçının ve büyük miktar göndermeden önce küçük bir test düşünün."
      },
      safety:{
        title:"Yapıştırılan adresi tekrar kontrol edin",
        body:"Pano kötü amaçlı yazılımı, kopyaladığınız cüzdan adresini siz yapıştırmadan önce gizlice değiştirebilir. Tam adresi yeniden kontrol edin, önemli transferlerde kaydedilmiş güvenilir adresleri kullanın ve önce küçük bir test yapın."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: pano korsanlığı",
          desc:"Kötü amaçlı yazılımın kopyalanmış cüzdan adresini yapıştırmadan önce nasıl değiştirebildiğini ve göndermeden önce son adresi kontrol etmenin neden önemli olduğunu açıklayan bir kaynak.",
          url:SOURCE_URLS.metamask,
          why:"Her transferden önce yapıştırılan adresi doğrulamayı hatırlatır."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: cüzdan zararlıları ve pano değiştirme",
          desc:"Cüzdanları hedefleyen zararlıların kopyalanmış adresleri nasıl değiştirebildiğini ve cihaz hijyeninin güvenli transferler için neden önemli olduğunu açıklayan bir kaynak.",
          url:SOURCE_URLS.microsoft,
          why:"Phishing bağlantılarının ötesinde pano zararlısı riskini anlamaya yardımcı olur."
        }
      ],
      lessonNote:"Pano değiştirme saldırısında kopyaladığınız adres, yapıştırmadan önce değişebilir. Bu yüzden yapıştırılan tam adresi yeniden kontrol edin ve önemli transferlerde kaydedilmiş güvenilir adresleri kullanın."
    },
    es:{
      glossary:{
        term:"Ataque de sustitución del portapapeles",
        desc:"Es un ataque en el que un malware reemplaza en secreto la dirección de wallet que copiaste por otra antes de que la pegues. Si no vuelves a revisar la dirección antes de enviar, puedes transferir activos al destino equivocado."
      },
      faq:{
        q:"¿Cómo puedo evitar un ataque de sustitución del portapapeles?",
        a:"Revisa la dirección de la wallet después de pegarla, no solo los primeros y últimos caracteres. Usa direcciones confiables ya guardadas para transferencias importantes, evita software sospechoso y considera una pequeña prueba antes de enviar una cantidad grande."
      },
      safety:{
        title:"Vuelve a revisar la dirección pegada",
        body:"El malware del portapapeles puede reemplazar en secreto la dirección de wallet copiada antes de que la pegues. Revisa la dirección completa otra vez, usa direcciones confiables guardadas para transferencias importantes y haz primero una pequeña prueba."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: hackeo del portapapeles",
          desc:"Un recurso que ayuda a explicar cómo el malware puede sustituir una dirección de wallet copiada antes de pegarla y por qué es importante comprobar la dirección final antes de enviar.",
          url:SOURCE_URLS.metamask,
          why:"Buen recordatorio para verificar la dirección pegada antes de cada transferencia."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: malware de wallet y sustitución del portapapeles",
          desc:"Un recurso que ayuda a explicar cómo el malware que apunta a wallets puede reemplazar direcciones copiadas y por qué la higiene del dispositivo importa para transferencias seguras.",
          url:SOURCE_URLS.microsoft,
          why:"Ayuda a entender el riesgo del malware de portapapeles más allá de los enlaces de phishing."
        }
      ],
      lessonNote:"En un ataque de sustitución del portapapeles, la dirección copiada puede cambiar antes de pegarla. Por eso conviene revisar de nuevo la dirección completa pegada y usar direcciones confiables ya guardadas para envíos importantes."
    },
    ar:{
      glossary:{
        term:"هجوم تبديل الحافظة",
        desc:"هو هجوم يستبدل فيه برنامج خبيث عنوان المحفظة الذي نسخته بعنوان آخر بشكل سري قبل أن تلصقه. إذا لم تراجع العنوان مرة أخرى قبل الإرسال فقد تنقل الأصول إلى وجهة خاطئة."
      },
      faq:{
        q:"كيف يمكنني تجنب هجوم تبديل الحافظة؟",
        a:"راجع عنوان المحفظة بعد اللصق، ولا تكتف ببداية العنوان ونهايته فقط. استخدم العناوين الموثوقة المحفوظة للتحويلات المهمة، وتجنب البرامج المشبوهة، وفكر في معاملة اختبار صغيرة قبل إرسال مبلغ كبير."
      },
      safety:{
        title:"راجع العنوان بعد اللصق",
        body:"قد يستبدل برنامج خبيث في الحافظة عنوان المحفظة الذي نسخته قبل أن تلصقه. راجع العنوان الكامل مرة أخرى، واستخدم العناوين الموثوقة المحفوظة للتحويلات المهمة، وابدأ بمعاملة اختبار صغيرة."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: اختراق الحافظة",
          desc:"مرجع يساعد على شرح كيف يمكن للبرامج الخبيثة أن تستبدل عنوان المحفظة المنسوخ قبل اللصق ولماذا تعد مراجعة العنوان النهائي قبل الإرسال خطوة مهمة.",
          url:SOURCE_URLS.metamask,
          why:"تذكير مفيد بضرورة التحقق من العنوان الملصق قبل كل تحويل."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: برمجيات المحافظ الخبيثة وتبديل الحافظة",
          desc:"مرجع يساعد على شرح كيف يمكن للبرامج الخبيثة التي تستهدف المحافظ أن تستبدل العناوين المنسوخة ولماذا تهم نظافة الجهاز في التحويلات الآمنة.",
          url:SOURCE_URLS.microsoft,
          why:"يساعد على فهم خطر برمجيات الحافظة الخبيثة إلى جانب روابط التصيد."
        }
      ],
      lessonNote:"في هجوم تبديل الحافظة قد يتغير العنوان الذي نسخته قبل أن تلصقه. لذلك راجع العنوان الكامل بعد اللصق مرة أخرى واستخدم العناوين الموثوقة المحفوظة في التحويلات المهمة."
    },
    vi:{
      glossary:{
        term:"Tấn công tráo clipboard",
        desc:"Đây là kiểu tấn công mà phần mềm độc hại bí mật thay địa chỉ ví bạn đã sao chép bằng một địa chỉ khác trước khi bạn dán. Nếu không kiểm tra lại địa chỉ trước khi gửi, bạn có thể chuyển tài sản đến sai nơi."
      },
      faq:{
        q:"Làm sao để tránh tấn công tráo clipboard?",
        a:"Hãy kiểm tra lại địa chỉ ví sau khi dán, không chỉ nhìn vài ký tự đầu và cuối. Dùng địa chỉ đáng tin đã lưu cho các lần chuyển quan trọng, tránh phần mềm đáng ngờ và cân nhắc một giao dịch thử nhỏ trước khi gửi số tiền lớn."
      },
      safety:{
        title:"Kiểm tra lại địa chỉ sau khi dán",
        body:"Phần mềm độc hại trên clipboard có thể bí mật thay địa chỉ ví bạn đã sao chép trước khi dán. Hãy kiểm tra lại toàn bộ địa chỉ, ưu tiên địa chỉ đáng tin đã lưu và thử một giao dịch nhỏ trước."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: tấn công clipboard",
          desc:"Tài liệu giúp giải thích cách phần mềm độc hại có thể thay địa chỉ ví đã sao chép trước khi bạn dán và vì sao việc kiểm tra địa chỉ cuối cùng trước khi gửi lại quan trọng.",
          url:SOURCE_URLS.metamask,
          why:"Nhắc bạn xác minh lại địa chỉ đã dán trước mỗi lần chuyển."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: mã độc ví và tráo clipboard",
          desc:"Tài liệu giúp giải thích cách mã độc nhắm vào ví có thể thay các địa chỉ đã sao chép và vì sao việc giữ thiết bị an toàn lại quan trọng với các lần chuyển tiền.",
          url:SOURCE_URLS.microsoft,
          why:"Hữu ích để hiểu rủi ro mã độc clipboard ngoài các liên kết phishing."
        }
      ],
      lessonNote:"Nếu mã độc clipboard đang hoạt động, địa chỉ bạn vừa sao chép có thể bị đổi trước khi dán. Vì vậy hãy kiểm tra lại toàn bộ địa chỉ đã dán và dùng địa chỉ đáng tin đã lưu cho các lần chuyển quan trọng."
    },
    ha:{
      glossary:{
        term:"Harin canja adireshi a allon kwafi",
        desc:"Hari ne da muguwar manhaja ke canja adireshin walat da ka kwafa da wani adireshi daban a boye kafin ka manna shi. Idan ba ka sake duba adireshin kafin aikawa ba, kana iya tura kadarori zuwa wurin da ba daidai ba."
      },
      faq:{
        q:"Ta yaya zan guji harin canja adireshi a allon kwafi?",
        a:"Ka sake duba adireshin walat bayan manna shi, ba wai ka kalli farkonsa da karshensa kawai ba. Ka yi amfani da amintattun adireshin da ka adana domin muhimman aikawa, ka guji shirye-shiryen da ke da shakku, sannan ka yi karamin gwaji kafin ka aika babban adadi."
      },
      safety:{
        title:"Ka sake duba adireshin da ka manna",
        body:"Muguwar manhajar clipboard na iya canja adireshin walat da ka kwafa kafin ka manna shi. Ka sake duba cikakken adireshin, ka yi amfani da amintattun adireshin da ka adana domin muhimman aikawa, sannan ka fara da karamin gwaji."
      },
      sources:[
        {
          publisher:"MetaMask",
          title:"MetaMask: satar clipboard",
          desc:"Wannan madogara tana taimakawa wajen fahimtar yadda muguwar manhaja za ta iya maye gurbin adireshin walat da aka kwafa kafin a manna shi da kuma dalilin da ya sa sake duba adireshin karshe kafin aikawa yake da muhimmanci.",
          url:SOURCE_URLS.metamask,
          why:"Tunatarwa ce mai amfani domin a tabbatar da adireshin da aka manna kafin kowace aikawa."
        },
        {
          publisher:"Microsoft",
          title:"Microsoft: muguwar manhajar walat da canjin clipboard",
          desc:"Wannan madogara tana taimakawa wajen fahimtar yadda muguwar manhajar da ke kai hari ga walat za ta iya canja adireshin da aka kwafa da kuma dalilin da ya sa tsaron na'ura yake da muhimmanci ga aikawa mai lafiya.",
          url:SOURCE_URLS.microsoft,
          why:"Yana taimaka wa mai amfani ya fahimci hadarin muguwar manhajar clipboard bayan batun phishing kawai."
        }
      ],
      lessonNote:"Idan muguwar manhajar clipboard tana aiki, adireshin da ka kwafa na iya canjawa kafin ka manna shi. Saboda haka ka sake duba cikakken adireshin da aka manna kuma ka yi amfani da amintattun adireshin da ka adana domin muhimman aikawa."
    }
  };
  PACK.br = clone(PACK.pt);

  function matchesGlossaryAlias(term){
    var normalized = normalize(term);
    for(var i = 0; i < ALIASES.length; i++){
      if(normalized === normalize(ALIASES[i])) return true;
    }
    return false;
  }

  function upsertGlossaryEntry(list, entry){
    var index = -1;
    for(var i = 0; i < list.length; i++){
      if(matchesGlossaryAlias(list[i] && list[i][0])){
        index = i;
        break;
      }
    }
    var row = [entry.term, entry.desc];
    if(index === -1) list.push(row);
    else list[index] = row;
  }

  function dedupeGlossary(list){
    var seen = {};
    return (list || []).filter(function(row){
      var key = normalize(row && row[0]);
      if(!key) return false;
      if(matchesGlossaryAlias(row && row[0])) key = KEY;
      if(seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function upsertFaq(list, entry){
    if(!list.some(function(row){ return normalize(row && row[0]) === normalize(entry.q); })){
      list.push([entry.q, entry.a]);
    }
  }

  function upsertSafety(list, entry){
    var index = -1;
    for(var i = 0; i < list.length; i++){
      if(normalize(list[i] && list[i][0]) === normalize(entry.title)){
        index = i;
        break;
      }
    }
    var row = [entry.title, entry.body];
    if(index === -1) list.push(row);
    else list[index] = row;
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

  function appendLessonNote(sections, note){
    if(!Array.isArray(sections) || !sections.length || !note) return;
    var target = sections[sections.length - 1];
    if(!target) return;
    target.ps = Array.isArray(target.ps) ? target.ps : [];
    if(!target.ps.some(function(line){ return normalize(line) === normalize(note); })){
      target.ps.push(note);
    }
  }

  var glossaryDataRef = typeof glossaryData !== "undefined" ? glossaryData : null;
  var glossaryOverridesRef = typeof glossaryOverrides !== "undefined" ? glossaryOverrides : null;

  LANGS.forEach(function(lang){
    var pack = PACK[baseLang(lang)] || PACK.en;

    var visibleList = getVisibleGlossaryList(glossaryOverridesRef, lang);
    if(!visibleList.length) visibleList = getVisibleGlossaryList(glossaryDataRef, lang);
    upsertGlossaryEntry(visibleList, pack.glossary);
    visibleList = dedupeGlossary(visibleList);
    if(glossaryOverridesRef) glossaryOverridesRef[lang] = clone(visibleList);
    if(glossaryDataRef) glossaryDataRef[lang] = clone(visibleList);

    var searchStore = getGlossarySearchStore(lang);
    searchStore[KEY] = { title: pack.glossary.term, body: pack.glossary.desc };
    if(typeof glossaryEntries !== "undefined") glossaryEntries[lang] = clone(searchStore);
    window.__repGlossaryEntries = window.__repGlossaryEntries || {};
    window.__repGlossaryEntries[lang] = clone(searchStore);

    var page = ensurePageLang(lang);
    if(page){
      upsertFaq(page.faqItems, pack.faq);
      upsertSafety(page.safetyItems, pack.safety);
    }

    var relatedLabel = getRelatedLabel(lang);
    var libraryList = ensureSourceList(typeof sourceLibrary !== "undefined" ? sourceLibrary : null, lang);
    if(libraryList){
      pack.sources.forEach(function(entry){
        upsertLibrarySource(libraryList, entry, relatedLabel);
      });
    }

    var libraryOverrideList = ensureSourceList(typeof sourceOverrides !== "undefined" ? sourceOverrides : null, lang);
    if(libraryOverrideList){
      pack.sources.forEach(function(entry){
        upsertLibrarySource(libraryOverrideList, entry, relatedLabel);
      });
    }

    var lessonSourceList = ensureLessonSourceList(typeof lessons !== "undefined" ? lessons : null, lang);
    if(lessonSourceList){
      pack.sources.forEach(function(entry){
        upsertLessonSource(lessonSourceList, entry);
      });
    }

    var lessonOverrideSourceList = ensureLessonSourceList(typeof lessonOverrides !== "undefined" ? lessonOverrides : null, lang);
    if(lessonOverrideSourceList){
      pack.sources.forEach(function(entry){
        upsertLessonSource(lessonOverrideSourceList, entry);
      });
    }

    appendLessonNote(ensureLessonSections(typeof lessons !== "undefined" ? lessons : null, lang), pack.lessonNote);
    appendLessonNote(ensureLessonSections(typeof lessonOverrides !== "undefined" ? lessonOverrides : null, lang), pack.lessonNote);
  });

  if(typeof document !== "undefined"){
    var glossaryPanel = document.getElementById("glossaryPanel");
    if(glossaryPanel && typeof renderGlossary === "function"){
      glossaryPanel.innerHTML = renderGlossary();
    }

    var faqPanel = document.getElementById("faqPanel");
    if(faqPanel && typeof renderFAQPage === "function"){
      faqPanel.innerHTML = renderFAQPage();
    }

    var safetyPanel = document.getElementById("safetyPanel");
    if(safetyPanel && typeof renderSafetyPage === "function"){
      safetyPanel.innerHTML = renderSafetyPage();
    }

    var sourcesPanel = document.getElementById("sourcesPanel");
    if(sourcesPanel && typeof renderSources === "function"){
      sourcesPanel.innerHTML = renderSources();
    }

    var lessonSevenPanel = document.getElementById("lesson6");
    if(lessonSevenPanel && typeof renderLesson === "function"){
      lessonSevenPanel.innerHTML = renderLesson(6);
    }
  }

  if(typeof currentPage !== "undefined" && typeof showPage === "function"){
    if(currentPage === "glossary" || currentPage === "faq" || currentPage === "safety" || currentPage === "sources"){
      showPage(currentPage);
    }
  }

  if(typeof currentPage !== "undefined" && /^lesson\d+$/.test(currentPage) && typeof currentLesson === "number" && currentLesson === 6 && typeof showLesson === "function"){
    showLesson(6);
  }
})();
