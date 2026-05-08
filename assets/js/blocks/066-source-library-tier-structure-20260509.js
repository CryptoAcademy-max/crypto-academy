(function(){
  if(typeof window === 'undefined' || window.__sourceLibraryTierStructure20260509) return;
  window.__sourceLibraryTierStructure20260509 = true;

  var TIER_ORDER = ['quick', 'save', 'deep'];
  var TIER_SECTION_ORDER = {
    quick:['checklists','summaries','scams'],
    save:['freepdf','basics','wallet'],
    deep:['cryptoebook','premium','reg']
  };

  var TIER_PACKS = {
    en:{
      intro:'If you started quickly from the home page, the Source Library helps you continue in a more organized flow: quick review, worth saving, and go deeper.',
      guideTitle:'Choose the path that fits you',
      guideBody:'If you are not sure where to start, choose the path that best matches what you need right now.',
      tiers:{
        quick:{ chip:'Quick', title:'Quick Review', desc:'For short practical checks when you want the essentials right away.' },
        save:{ chip:'Save', title:'Worth Saving', desc:'Free resources and review material worth saving for later.' },
        deep:{ chip:'Deep', title:'Go Deeper', desc:'For more structured follow-up, deeper reference material, and eBooks.' }
      },
      paths:{
        newcomer:{
          tag:'Start',
          title:'If You Are New Here',
          body:'Start with the glossary, beginner lessons, and the most important safety basics.',
          primary:'Open the Glossary',
          links:{ basics:'Beginner Basics', safety:'Safety Basics' }
        },
        revisit:{
          tag:'Review',
          title:'If You Are Coming Back',
          body:'Start with the checklists, free PDFs, and the resources most useful for review.',
          primary:'Open Checklists',
          links:{ freepdf:'Free PDFs', summaries:'Quick Summaries' }
        },
        deeper:{
          tag:'Deep',
          title:'If You Want to Go Deeper',
          body:'Continue with the eBooks, official references, and deeper structured material.',
          primary:'Open the eBooks',
          links:{ reg:'Official References', premium:'Premium Guides' }
        }
      },
      summary:{ menu:'Quick Summaries', title:'Quick Summaries', body:'Short summary cards for moments when you want the fast version instead of a long explanation.', button:'Open Summary' },
      roleTags:{ quick:'Quick', save:'Save', deep:'Deep' }
    },
    ko:{
      intro:'홈에서 빠르게 시작했다면, 자료 라이브러리에서는 자료를 빠르게 보기, 저장용, 심화용 흐름으로 더 정리해 탐색할 수 있습니다.',
      guideTitle:'내 상황에 맞는 탐색 경로',
      guideBody:'어떻게 찾을지 모르겠다면, 지금 내 상황에 맞는 탐색 경로부터 선택해보세요.',
      tiers:{
        quick:{ chip:'빠르게', title:'빠르게 보기', desc:'짧게 다시 확인하거나, 지금 바로 핵심만 보고 싶을 때 보는 자료입니다.' },
        save:{ chip:'저장용', title:'저장용', desc:'나중에 다시 보기 위해 저장해두기 좋은 무료 자료와 복습용 정리본입니다.' },
        deep:{ chip:'심화용', title:'심화용', desc:'더 정리된 흐름과 참고자료로 깊이 있게 보고 싶을 때 보는 자료입니다.' }
      },
      paths:{
        newcomer:{
          tag:'시작',
          title:'처음 보는 사람이라면',
          body:'용어, 기초 lesson, 핵심 보안 자료부터 보는 것이 좋습니다.',
          primary:'용어부터 보기',
          links:{ basics:'기초 자료', safety:'핵심 보안 자료' }
        },
        revisit:{
          tag:'복습',
          title:'다시 찾는 사람이라면',
          body:'체크리스트, 무료 PDF, 자주 다시 보는 자료부터 확인하는 것이 좋습니다.',
          primary:'체크리스트 보기',
          links:{ freepdf:'무료 PDF', summaries:'핵심 요약' }
        },
        deeper:{
          tag:'심화',
          title:'더 깊게 보고 싶다면',
          body:'전자책, 공식 참고자료, 정리된 심화 자료부터 이어서 보는 것이 좋습니다.',
          primary:'전자책 보기',
          links:{ reg:'공식 참고자료', premium:'프리미엄 가이드' }
        }
      },
      summary:{ menu:'핵심 요약', title:'핵심 요약', body:'긴 설명보다 빠른 버전이 필요할 때 먼저 보기 좋은 짧은 요약 카드입니다.', button:'요약 보기' },
      roleTags:{ quick:'빠르게', save:'저장용', deep:'심화용' }
    },
    th:{
      intro:'หากคุณเริ่มต้นอย่างรวดเร็วจากหน้าแรก Source Library จะช่วยให้คุณสำรวจต่อได้เป็นระบบมากขึ้น: ทบทวนด่วน เก็บไว้อ่าน และอ่านเชิงลึก',
      guideTitle:'เลือกเส้นทางที่เหมาะกับคุณ',
      guideBody:'หากยังไม่แน่ใจว่าจะเริ่มตรงไหน ให้เลือกเส้นทางที่ตรงกับสิ่งที่คุณต้องการตอนนี้มากที่สุด',
      tiers:{
        quick:{ chip:'ด่วน', title:'ทบทวนด่วน', desc:'สำหรับช่วงที่คุณอยากดูเฉพาะแก่นสำคัญแบบสั้นและใช้งานได้ทันที' },
        save:{ chip:'เก็บไว้', title:'เก็บไว้อ่าน', desc:'สื่อฟรีและเอกสารทบทวนที่เหมาะกับการบันทึกไว้กลับมาอ่านอีกครั้ง' },
        deep:{ chip:'ลึกขึ้น', title:'อ่านเชิงลึก', desc:'สำหรับการทบทวนที่เป็นระบบมากขึ้น เอกสารอ้างอิงเชิงลึก และ eBook' }
      },
      paths:{
        newcomer:{
          tag:'เริ่ม',
          title:'ถ้าคุณเพิ่งเห็นที่นี่ครั้งแรก',
          body:'เริ่มจาก glossary บทเรียนพื้นฐาน และข้อมูลความปลอดภัยที่สำคัญที่สุดก่อน',
          primary:'เปิด Glossary',
          links:{ basics:'พื้นฐาน', safety:'ความปลอดภัย' }
        },
        revisit:{
          tag:'ทบทวน',
          title:'ถ้าคุณกลับมาดูอีกครั้ง',
          body:'เริ่มจากเช็กลิสต์ PDF ฟรี และแหล่งข้อมูลที่เหมาะกับการทบทวน',
          primary:'เปิดเช็กลิสต์',
          links:{ freepdf:'PDF ฟรี', summaries:'สรุปแบบเร็ว' }
        },
        deeper:{
          tag:'ลึกขึ้น',
          title:'ถ้าคุณอยากศึกษาลึกขึ้น',
          body:'ต่อด้วย eBook แหล่งอ้างอิงทางการ และเนื้อหาเชิงลึกที่จัดระบบไว้แล้ว',
          primary:'เปิด eBook',
          links:{ reg:'อ้างอิงทางการ', premium:'คู่มือพรีเมียม' }
        }
      },
      summary:{ menu:'สรุปแบบเร็ว', title:'สรุปแบบเร็ว', body:'การ์ดสรุปสั้นสำหรับช่วงที่คุณอยากได้เวอร์ชันเร็วแทนคำอธิบายยาว', button:'เปิดสรุป' },
      roleTags:{ quick:'ด่วน', save:'เก็บไว้', deep:'ลึกขึ้น' }
    },
    id:{
      intro:'Jika Anda memulai dengan cepat dari beranda, Source Library membantu Anda melanjutkan dengan alur yang lebih rapi: tinjau cepat, layak disimpan, dan pelajari lebih dalam.',
      guideTitle:'Pilih jalur yang paling cocok untuk Anda',
      guideBody:'Jika Anda belum yakin harus mulai dari mana, pilih jalur yang paling sesuai dengan kebutuhan Anda sekarang.',
      tiers:{
        quick:{ chip:'Cepat', title:'Tinjau Cepat', desc:'Untuk pemeriksaan praktis singkat saat Anda ingin langsung melihat poin terpenting.' },
        save:{ chip:'Simpan', title:'Layak Disimpan', desc:'Sumber gratis dan materi ulasan yang layak disimpan untuk nanti.' },
        deep:{ chip:'Dalami', title:'Pelajari Lebih Dalam', desc:'Untuk tindak lanjut yang lebih terstruktur, referensi yang lebih dalam, dan eBook.' }
      },
      paths:{
        newcomer:{
          tag:'Mulai',
          title:'Jika Anda baru di sini',
          body:'Mulailah dari glossary, pelajaran dasar, dan dasar keamanan yang paling penting.',
          primary:'Buka Glossary',
          links:{ basics:'Dasar Pemula', safety:'Dasar Keamanan' }
        },
        revisit:{
          tag:'Ulangi',
          title:'Jika Anda datang kembali',
          body:'Mulailah dari checklist, PDF gratis, dan sumber yang paling berguna untuk review.',
          primary:'Buka Checklist',
          links:{ freepdf:'PDF Gratis', summaries:'Ringkasan Cepat' }
        },
        deeper:{
          tag:'Dalami',
          title:'Jika Anda ingin lebih dalam',
          body:'Lanjutkan dengan eBook, referensi resmi, dan materi terstruktur yang lebih mendalam.',
          primary:'Buka eBook',
          links:{ reg:'Referensi Resmi', premium:'Panduan Premium' }
        }
      },
      summary:{ menu:'Ringkasan Cepat', title:'Ringkasan Cepat', body:'Kartu ringkas untuk saat Anda ingin versi cepat tanpa penjelasan panjang.', button:'Buka Ringkasan' },
      roleTags:{ quick:'Cepat', save:'Simpan', deep:'Dalami' }
    },
    pt:{
      intro:'Se voce comecou rapido pela home, a Source Library ajuda voce a continuar em um fluxo mais organizado: revisao rapida, vale salvar e aprofundar depois.',
      guideTitle:'Escolha o caminho que combina com voce',
      guideBody:'Se voce nao sabe por onde comecar, escolha o caminho que melhor combina com o que voce precisa agora.',
      tiers:{
        quick:{ chip:'Rapido', title:'Revisao Rapida', desc:'Para checagens praticas e curtas quando voce quer ir direto ao essencial.' },
        save:{ chip:'Salvar', title:'Vale Salvar', desc:'Recursos gratuitos e materiais de revisao que valem ser guardados para depois.' },
        deep:{ chip:'Profundo', title:'Aprofunde', desc:'Para uma revisao mais estruturada, referencias mais profundas e eBooks.' }
      },
      paths:{
        newcomer:{
          tag:'Inicio',
          title:'Se voce esta vendo isso pela primeira vez',
          body:'Comece pelo glossario, pelas licoes basicas e pelos pontos de seguranca mais importantes.',
          primary:'Abrir Glossario',
          links:{ basics:'Base Inicial', safety:'Seguranca' }
        },
        revisit:{
          tag:'Rever',
          title:'Se voce voltou para revisar',
          body:'Comece pelos checklists, pelos PDFs gratuitos e pelos materiais mais uteis para revisao.',
          primary:'Abrir Checklists',
          links:{ freepdf:'PDFs Gratis', summaries:'Resumos Rapidos' }
        },
        deeper:{
          tag:'Profundo',
          title:'Se voce quer ir mais fundo',
          body:'Continue com os eBooks, as referencias oficiais e os materiais mais estruturados.',
          primary:'Abrir eBook',
          links:{ reg:'Referencias Oficiais', premium:'Guias Premium' }
        }
      },
      summary:{ menu:'Resumos Rapidos', title:'Resumos Rapidos', body:'Cartoes curtos para quando voce quer uma versao rapida em vez de uma explicacao longa.', button:'Abrir Resumo' },
      roleTags:{ quick:'Rapido', save:'Salvar', deep:'Profundo' }
    },
    br:null,
    tr:{
      intro:'Ana sayfadan hizli basladiysaniz, Kaynak Kutuphanesi size daha duzenli bir akista devam etme imkani verir: hizli gozden gecirme, kaydetmeye deger ve daha derine in.',
      guideTitle:'Size en uygun yolu secin',
      guideBody:'Nereden baslayacaginizdan emin degilseniz, su anda ihtiyaciniza en cok uyan yolu secin.',
      tiers:{
        quick:{ chip:'Hizli', title:'Hizli Gozden Gecirme', desc:'Dogrudan ozeti gormek istediginiz anlar icin kisa ve pratik kontroller.' },
        save:{ chip:'Kaydet', title:'Kaydetmeye Deger', desc:'Daha sonra geri donmek icin saklamaya deger ucretsiz kaynaklar ve tekrar materyalleri.' },
        deep:{ chip:'Derin', title:'Daha Derine In', desc:'Daha duzenli takip, daha derin referanslar ve eBookler icin.' }
      },
      paths:{
        newcomer:{
          tag:'Basla',
          title:'Burada yeniyseniz',
          body:'Glossary, temel dersler ve en onemli guvenlik basliklariyla baslayin.',
          primary:'Glossary Ac',
          links:{ basics:'Temel Baslangic', safety:'Guvenlik Temeli' }
        },
        revisit:{
          tag:'Tekrar',
          title:'Geri donduyseniz',
          body:'Checklistler, ucretsiz PDFler ve tekrar bakmak icin en faydali kaynaklarla baslayin.',
          primary:'Checklistleri Ac',
          links:{ freepdf:'Ucretsiz PDFler', summaries:'Hizli Ozetler' }
        },
        deeper:{
          tag:'Derin',
          title:'Daha derine inmek istiyorsaniz',
          body:'eBookler, resmi kaynaklar ve daha derli toplu derin materyallerle devam edin.',
          primary:'eBook Ac',
          links:{ reg:'Resmi Kaynaklar', premium:'Premium Rehberler' }
        }
      },
      summary:{ menu:'Hizli Ozetler', title:'Hizli Ozetler', body:'Uzun bir aciklama yerine hizli versiyonu istediginiz anlar icin kisa ozet kartlari.', button:'Ozeti Ac' },
      roleTags:{ quick:'Hizli', save:'Kaydet', deep:'Derin' }
    },
    es:{
      intro:'Si empezaste rapido desde la home, la Source Library te ayuda a continuar con un flujo mas ordenado: revision rapida, vale guardarlo y profundizar despues.',
      guideTitle:'Elige el camino que mejor encaja contigo',
      guideBody:'Si no estas seguro de por donde empezar, elige el camino que mejor coincide con lo que necesitas ahora.',
      tiers:{
        quick:{ chip:'Rapido', title:'Revision Rapida', desc:'Para revisiones practicas y cortas cuando quieres ir directo a lo esencial.' },
        save:{ chip:'Guardar', title:'Vale Guardarlo', desc:'Recursos gratis y material de repaso que vale la pena guardar para despues.' },
        deep:{ chip:'Profundo', title:'Profundiza', desc:'Para una continuacion mas estructurada, referencias mas profundas y eBooks.' }
      },
      paths:{
        newcomer:{
          tag:'Inicio',
          title:'Si eres nuevo aqui',
          body:'Empieza por el glosario, las lecciones basicas y los puntos de seguridad mas importantes.',
          primary:'Abrir Glosario',
          links:{ basics:'Base Inicial', safety:'Seguridad Basica' }
        },
        revisit:{
          tag:'Volver',
          title:'Si vienes de vuelta',
          body:'Empieza por los checklists, los PDF gratis y los recursos mas utiles para repasar.',
          primary:'Abrir Checklists',
          links:{ freepdf:'PDF Gratis', summaries:'Resumenes Rapidos' }
        },
        deeper:{
          tag:'Profundo',
          title:'Si quieres profundizar',
          body:'Sigue con los eBooks, las referencias oficiales y el material mas estructurado.',
          primary:'Abrir eBook',
          links:{ reg:'Referencias Oficiales', premium:'Guias Premium' }
        }
      },
      summary:{ menu:'Resumenes Rapidos', title:'Resumenes Rapidos', body:'Tarjetas breves para cuando quieres una version rapida en lugar de una explicacion larga.', button:'Abrir Resumen' },
      roleTags:{ quick:'Rapido', save:'Guardar', deep:'Profundo' }
    },
    ar:{
      intro:'إذا بدأت بسرعة من الصفحة الرئيسية، فإن مكتبة المصادر تساعدك على المتابعة بشكل أكثر تنظيماً: مراجعة سريعة، مواد تستحق الحفظ، ثم تعمق أكثر.',
      guideTitle:'اختر المسار الأنسب لك',
      guideBody:'إذا لم تكن متأكداً من أين تبدأ، فاختر المسار الذي يناسب ما تحتاجه الآن.',
      tiers:{
        quick:{ chip:'سريع', title:'مراجعة سريعة', desc:'للمراجعات العملية القصيرة عندما تريد الأساسيات مباشرة.' },
        save:{ chip:'احفظه', title:'يستحق الحفظ', desc:'موارد مجانية ومواد مراجعة تستحق أن تحتفظ بها للعودة إليها لاحقاً.' },
        deep:{ chip:'تعمق', title:'تعمق أكثر', desc:'للمتابعة الأكثر تنظيماً، والمراجع الأعمق، والكتب الإلكترونية.' }
      },
      paths:{
        newcomer:{
          tag:'ابدأ',
          title:'إذا كنت هنا لأول مرة',
          body:'ابدأ من القاموس والدروس الأساسية وأهم أساسيات الأمان.',
          primary:'افتح القاموس',
          links:{ basics:'الأساسيات', safety:'أساسيات الأمان' }
        },
        revisit:{
          tag:'راجع',
          title:'إذا كنت تعود للمراجعة',
          body:'ابدأ من القوائم السريعة وملفات PDF المجانية والموارد الأنسب للمراجعة.',
          primary:'افتح القوائم',
          links:{ freepdf:'PDF مجاني', summaries:'ملخصات سريعة' }
        },
        deeper:{
          tag:'تعمق',
          title:'إذا كنت تريد التعمق أكثر',
          body:'واصل مع الكتب الإلكترونية والمراجع الرسمية والمواد الأعمق تنظيماً.',
          primary:'افتح الكتب الإلكترونية',
          links:{ reg:'مراجع رسمية', premium:'أدلة مميزة' }
        }
      },
      summary:{ menu:'ملخصات سريعة', title:'ملخصات سريعة', body:'بطاقات ملخصة قصيرة للحظات التي تريد فيها النسخة السريعة بدلاً من الشرح الطويل.', button:'افتح الملخص' },
      roleTags:{ quick:'سريع', save:'احفظه', deep:'تعمق' }
    },
    vi:{
      intro:'Neu ban bat dau nhanh tu trang chu, Source Library se giup ban tiep tuc theo mot luong ro rang hon: xem nhanh, nen luu lai, va dao sau hon.',
      guideTitle:'Chon luong phu hop voi ban',
      guideBody:'Neu ban chua chac nen bat dau tu dau, hay chon luong phu hop nhat voi dieu ban can ngay luc nay.',
      tiers:{
        quick:{ chip:'Nhanh', title:'Xem Nhanh', desc:'Danh cho luc ban muon xem ngay nhung diem cot loi mot cach ngan gon va thuc te.' },
        save:{ chip:'Luu lai', title:'Nen Luu Lai', desc:'Tai lieu mien phi va noi dung on tap nen luu lai de quay ve sau nay.' },
        deep:{ chip:'Dao sau', title:'Tim Hieu Sau Hon', desc:'Danh cho viec on tap co cau truc hon, tai lieu tham khao sau hon, va eBook.' }
      },
      paths:{
        newcomer:{
          tag:'Bat dau',
          title:'Neu ban moi den day',
          body:'Hay bat dau voi glossary, bai hoc co ban, va nhung diem an toan quan trong nhat.',
          primary:'Mo Glossary',
          links:{ basics:'Nen Tang Co Ban', safety:'An Toan Co Ban' }
        },
        revisit:{
          tag:'On lai',
          title:'Neu ban quay lai de xem lai',
          body:'Hay bat dau voi checklist, PDF mien phi, va nhung tai lieu huu ich nhat de on lai.',
          primary:'Mo Checklist',
          links:{ freepdf:'PDF Mien Phi', summaries:'Tom Tat Nhanh' }
        },
        deeper:{
          tag:'Sau hon',
          title:'Neu ban muon tim hieu sau hon',
          body:'Tiep tuc voi eBook, tai lieu chinh thuc, va noi dung co cau truc sau hon.',
          primary:'Mo eBook',
          links:{ reg:'Tai Lieu Chinh Thuc', premium:'Huong Dan Premium' }
        }
      },
      summary:{ menu:'Tom Tat Nhanh', title:'Tom Tat Nhanh', body:'The tom tat ngan cho luc ban muon ban nhanh thay vi doc giai thich dai.', button:'Mo Tom Tat' },
      roleTags:{ quick:'Nhanh', save:'Luu lai', deep:'Dao sau' }
    },
    ha:{
      intro:'Idan ka fara da sauri daga shafin gida, Source Library zai taimaka maka ka ci gaba cikin tsari mafi kyau: bita cikin sauri, abin da ya cancanci ajiya, da zurfafa daga baya.',
      guideTitle:'Zabi hanyar da ta fi dacewa da kai',
      guideBody:'Idan ba ka da tabbacin inda za ka fara, ka zabi hanyar da ta fi dacewa da abin da kake bukata yanzu.',
      tiers:{
        quick:{ chip:'Sauri', title:'Bita Cikin Sauri', desc:'Don gajerun dubawa masu amfani idan kana son muhimman bayanai nan take.' },
        save:{ chip:'Ajiya', title:'Ya Cancanci Ajiya', desc:'Kayan kyauta da bayanan bita da ya dace ka ajiye domin komawa gare su daga baya.' },
        deep:{ chip:'Zurfafa', title:'Kara Zurfafa', desc:'Don karin tsari, karin bayanan tushe masu zurfi, da eBooks.' }
      },
      paths:{
        newcomer:{
          tag:'Fara',
          title:'Idan kana nan a karon farko',
          body:'Ka fara da glossary, darussan asali, da muhimman ka\'idojin tsaro.',
          primary:'Bude Glossary',
          links:{ basics:'Asalin Fara', safety:'Tsaron Asali' }
        },
        revisit:{
          tag:'Dawo',
          title:'Idan ka dawo don sake dubawa',
          body:'Ka fara da checklist, PDF na kyauta, da kayan da suka fi amfani wajen tunatarwa.',
          primary:'Bude Checklists',
          links:{ freepdf:'PDF na Kyauta', summaries:'Takaitattun Bayanai' }
        },
        deeper:{
          tag:'Zurfafa',
          title:'Idan kana son kara zurfafa',
          body:'Ci gaba da eBooks, madogarorin hukuma, da kayan da suka fi tsari sosai.',
          primary:'Bude eBook',
          links:{ reg:'Madogarorin Hukuma', premium:'Jagororin Premium' }
        }
      },
      summary:{ menu:'Takaitattun Bayanai', title:'Takaitattun Bayanai', body:'Takaitattun katuna don lokacin da kake son sigar sauri maimakon dogon bayani.', button:'Bude Takaitawa' },
      roleTags:{ quick:'Sauri', save:'Ajiya', deep:'Zurfafa' }
    }
  };
  TIER_PACKS.br = TIER_PACKS.pt;

  function normalizeLang(value){
    var raw = String(value || 'en').toLowerCase();
    if(raw === 'br' || raw === 'pt-br') return 'br';
    if(raw.indexOf('pt') === 0) return 'pt';
    if(raw.indexOf('ko') === 0) return 'ko';
    if(raw.indexOf('th') === 0) return 'th';
    if(raw.indexOf('id') === 0) return 'id';
    if(raw.indexOf('tr') === 0) return 'tr';
    if(raw.indexOf('es') === 0) return 'es';
    if(raw.indexOf('ar') === 0) return 'ar';
    if(raw.indexOf('vi') === 0) return 'vi';
    if(raw.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function currentTierLang(){
    if(typeof currentLang === 'string' && currentLang) return normalizeLang(currentLang);
    if(typeof document !== 'undefined' && document.documentElement && document.documentElement.lang){
      return normalizeLang(document.documentElement.lang);
    }
    return 'en';
  }

  function getPack(){
    return TIER_PACKS[currentTierLang()] || TIER_PACKS.en;
  }

  function getRawLang(){
    if(typeof currentLang === 'string' && currentLang) return String(currentLang).toLowerCase();
    if(typeof document !== 'undefined' && document.documentElement && document.documentElement.lang){
      return String(document.documentElement.lang).toLowerCase();
    }
    return 'en';
  }

  function getBasePrefix(){
    if(typeof window !== 'undefined' && typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__){
      return window.__CA_BASE_PREFIX__;
    }
    if(typeof document !== 'undefined' && document.body && document.body.dataset && document.body.dataset.basePrefix){
      return document.body.dataset.basePrefix;
    }
    return './';
  }

  function toIndexRoute(path){
    if(typeof window !== 'undefined' && typeof window.__CA_TO_INDEX_ROUTE === 'function'){
      return window.__CA_TO_INDEX_ROUTE(path);
    }
    return path;
  }

  function withLang(route){
    var lang = getRawLang();
    if(!lang) return route;
    return route + (route.indexOf('?') === -1 ? '?lang=' : '&lang=') + encodeURIComponent(lang);
  }

  function getPageRoute(page){
    var base = getBasePrefix();
    if(page === 'home') return withLang(toIndexRoute(base));
    return withLang(toIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g, '') + '/'));
  }

  function normalizeKey(value){
    return String(value || '').replace(/[\s/_-]+/g, '').toLowerCase();
  }

  function resolveTierFromSection(section){
    var sectionKey = normalizeKey(section && section.dataset ? section.dataset.sourceSection : '');
    var groupKey = normalizeKey(section && section.dataset ? section.dataset.sourceGroup : '');
    if(sectionKey === 'checklists' || groupKey === 'checklists' || sectionKey === 'summaries' || groupKey === 'summaries' || sectionKey === 'scams' || groupKey === 'safety') return 'quick';
    if(sectionKey === 'freepdf' || groupKey === 'freepdf' || sectionKey === 'basics' || groupKey === 'beginner' || sectionKey === 'wallet' || groupKey === 'wallet') return 'save';
    if(sectionKey === 'cryptoebook' || groupKey === 'cryptoebook' || sectionKey === 'premium' || groupKey === 'premium' || sectionKey === 'reg' || groupKey === 'official') return 'deep';
    return 'save';
  }

  function resolveTierFromTarget(target){
    var key = normalizeKey(target);
    if(key === 'checklists' || key === 'summaries' || key === 'scams' || key === 'safety') return 'quick';
    if(key === 'freepdf' || key === 'freepdfguides' || key === 'basics' || key === 'beginner' || key === 'wallet') return 'save';
    if(key === 'cryptoebook' || key === 'ebook' || key === 'premium' || key === 'reg' || key === 'official') return 'deep';
    return 'save';
  }

  function getSectionSortScore(section){
    var tier = resolveTierFromSection(section);
    var keys = TIER_SECTION_ORDER[tier] || [];
    var sectionKey = normalizeKey(section && section.dataset ? section.dataset.sourceSection : '');
    var groupKey = normalizeKey(section && section.dataset ? section.dataset.sourceGroup : '');
    var match = sectionKey || groupKey;
    var index = keys.indexOf(match);
    if(index === -1 && match === 'safety') index = keys.indexOf('scams');
    if(index === -1 && match === 'beginner') index = keys.indexOf('basics');
    if(index === -1 && match === 'official') index = keys.indexOf('reg');
    return index === -1 ? 99 : index;
  }

  function createNode(tag, className, text){
    var node = document.createElement(tag);
    if(className) node.className = className;
    if(typeof text === 'string') node.textContent = text;
    return node;
  }

  function updateChipLabel(chip, label){
    if(!chip) return;
    var count = chip.querySelector('span');
    var countClone = count ? count.cloneNode(true) : null;
    chip.textContent = '';
    chip.appendChild(document.createTextNode(label));
    if(countClone){
      chip.appendChild(document.createTextNode(' '));
      chip.appendChild(countClone);
    }
  }

  function normalizeSectionHeading(section, titleText){
    var heading = section ? section.querySelector('.src-section-heading') : null;
    if(!heading || !titleText) return;
    var count = heading.querySelector('.src-section-count');
    heading.textContent = '';
    heading.appendChild(createNode('span', 'src-section-title-text', titleText));
    if(count) heading.appendChild(count);
  }

  function ensureSummaryLabels(panel, pack){
    var chip = panel.querySelector('.source-cat[data-source-group="summaries"]');
    if(chip) updateChipLabel(chip, pack.summary.menu);
    var section = panel.querySelector('.src-section-block[data-source-section="summaries"]');
    if(!section) return;
    normalizeSectionHeading(section, pack.summary.title);
    var desc = section.querySelector('.src-group-desc');
    if(desc) desc.textContent = pack.summary.body;
    section.querySelectorAll('.source-library-meta').forEach(function(meta){
      meta.textContent = pack.summary.menu;
    });
    section.querySelectorAll('.src-action-btn').forEach(function(btn){
      btn.textContent = pack.summary.button;
    });
  }

  function ensureRoleTags(section, tierKey, pack){
    var label = pack.roleTags[tierKey];
    if(!label) return;
    section.querySelectorAll('.source-library-item').forEach(function(card){
      var tagRow = card.querySelector('.src-card-tags');
      if(!tagRow){
        tagRow = createNode('div', 'src-card-tags');
        var meta = card.querySelector('.source-library-meta');
        if(meta && meta.nextSibling){
          meta.parentNode.insertBefore(tagRow, meta.nextSibling);
        }else if(meta){
          meta.parentNode.appendChild(tagRow);
        }else{
          card.insertBefore(tagRow, card.firstChild);
        }
      }
      var roleTag = tagRow.querySelector('.src-card-tag[data-tier-role="true"]');
      if(!roleTag){
        roleTag = createNode('span', 'src-card-tag is-tier-' + tierKey, label);
        roleTag.setAttribute('data-tier-role', 'true');
        tagRow.insertBefore(roleTag, tagRow.firstChild);
      }else{
        roleTag.className = 'src-card-tag is-tier-' + tierKey;
        roleTag.textContent = label;
      }
    });
  }

  function buildTierNav(panel, pack, counts){
    var oldNav = panel.querySelector('.src-tier-cats');
    if(oldNav) oldNav.remove();
    var sourceCats = panel.querySelector('.source-cats');
    if(!sourceCats) return null;
    var nav = createNode('div', 'src-tier-cats');
    TIER_ORDER.forEach(function(tierKey){
      var item = createNode('button', 'source-cat src-tier-chip', null);
      item.type = 'button';
      item.setAttribute('data-source-tier', tierKey);
      item.appendChild(document.createTextNode(pack.tiers[tierKey].title));
      var count = createNode('span', '', String(counts[tierKey] || 0));
      count.style.fontSize = '.65rem';
      count.style.opacity = '.6';
      count.style.marginLeft = '3px';
      item.appendChild(document.createTextNode(' '));
      item.appendChild(count);
      nav.appendChild(item);
    });
    sourceCats.insertAdjacentElement('beforebegin', nav);
    return nav;
  }

  function buildPathGuideCard(pathKey, pathPack){
    var card = createNode('article', 'src-path-guide-card is-' + pathKey);
    card.appendChild(createNode('span', 'src-path-guide-tag', pathPack.tag));
    card.appendChild(createNode('h3', 'src-path-guide-card-title', pathPack.title));
    card.appendChild(createNode('p', 'src-path-guide-card-body', pathPack.body));

    var actions = createNode('div', 'src-path-guide-actions');
    var primary = createNode('a', 'src-action-btn src-path-guide-primary', pathPack.primary);
    if(pathKey === 'newcomer'){
      primary.href = getPageRoute('glossary');
    }else if(pathKey === 'revisit'){
      primary.href = '#';
      primary.setAttribute('data-source-scroll', 'checklists');
    }else{
      primary.href = '#';
      primary.setAttribute('data-source-scroll', 'cryptoEbook');
    }
    actions.appendChild(primary);

    var links = createNode('div', 'src-path-guide-links');
    if(pathKey === 'newcomer'){
      var basics = createNode('a', 'src-path-guide-link', pathPack.links.basics);
      basics.href = '#';
      basics.setAttribute('data-source-scroll', 'basics');
      links.appendChild(basics);
      var safety = createNode('a', 'src-path-guide-link', pathPack.links.safety);
      safety.href = '#';
      safety.setAttribute('data-source-scroll', 'scams');
      links.appendChild(safety);
    }else if(pathKey === 'revisit'){
      var freepdf = createNode('a', 'src-path-guide-link', pathPack.links.freepdf);
      freepdf.href = '#';
      freepdf.setAttribute('data-source-scroll', 'freePdf');
      links.appendChild(freepdf);
      var summaries = createNode('a', 'src-path-guide-link', pathPack.links.summaries);
      summaries.href = '#';
      summaries.setAttribute('data-source-scroll', 'summaries');
      links.appendChild(summaries);
    }else{
      var reg = createNode('a', 'src-path-guide-link', pathPack.links.reg);
      reg.href = '#';
      reg.setAttribute('data-source-scroll', 'reg');
      links.appendChild(reg);
      var premium = createNode('a', 'src-path-guide-link', pathPack.links.premium);
      premium.href = '#';
      premium.setAttribute('data-source-scroll', 'premium');
      links.appendChild(premium);
    }
    actions.appendChild(links);
    card.appendChild(actions);
    return card;
  }

  function buildPathGuide(panel, pack){
    var oldGuide = panel.querySelector('.src-path-guide');
    if(oldGuide) oldGuide.remove();
    var sourceCats = panel.querySelector('.source-cats');
    if(!sourceCats) return null;

    var guide = createNode('section', 'src-path-guide');
    var head = createNode('div', 'src-path-guide-head');
    head.appendChild(createNode('h2', 'src-path-guide-title', pack.guideTitle));
    head.appendChild(createNode('p', 'src-path-guide-body', pack.guideBody));
    guide.appendChild(head);

    var grid = createNode('div', 'src-path-guide-grid');
    grid.appendChild(buildPathGuideCard('newcomer', pack.paths.newcomer));
    grid.appendChild(buildPathGuideCard('revisit', pack.paths.revisit));
    grid.appendChild(buildPathGuideCard('deeper', pack.paths.deeper));
    guide.appendChild(grid);

    sourceCats.insertAdjacentElement('beforebegin', guide);
    return guide;
  }

  function buildTierZone(pack, tierKey, count){
    var zone = createNode('section', 'src-tier-zone is-' + tierKey);
    zone.id = 'sources-tier-' + tierKey;
    zone.setAttribute('data-source-tier-section', tierKey);

    var heading = createNode('div', 'src-tier-heading');
    var titleRow = createNode('div', 'src-tier-title-row');
    titleRow.appendChild(createNode('span', 'src-tier-pill is-' + tierKey, pack.tiers[tierKey].chip));
    titleRow.appendChild(createNode('h2', 'src-tier-title', pack.tiers[tierKey].title));
    titleRow.appendChild(createNode('span', 'src-tier-count', String(count || 0)));
    heading.appendChild(titleRow);
    heading.appendChild(createNode('p', 'src-tier-desc', pack.tiers[tierKey].desc));
    zone.appendChild(heading);
    zone.appendChild(createNode('div', 'src-tier-sections'));
    return zone;
  }

  function setActiveTierChip(panel, tierKey){
    panel.querySelectorAll('.src-tier-chip[data-source-tier]').forEach(function(chip){
      chip.classList.toggle('is-active', chip.getAttribute('data-source-tier') === tierKey);
    });
  }

  function scrollToTier(panel, tierKey){
    var zone = panel.querySelector('.src-tier-zone[data-source-tier-section="' + tierKey + '"]');
    if(!zone) return;
    setActiveTierChip(panel, tierKey);
    if(typeof scrollRepresentativeTargetIntoView === 'function'){
      scrollRepresentativeTargetIntoView(zone, 'start');
    }else{
      zone.scrollIntoView({ behavior:'smooth', block:'start' });
    }
    if(typeof highlightRepresentativeTarget === 'function'){
      highlightRepresentativeTarget(zone);
    }
  }

  function ensureSourceTierLayout(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    var sourceCats = panel.querySelector('.source-cats');
    if(!sourceCats) return;

    var pack = getPack();
    var intro = panel.querySelector('.lc-intro');
    if(intro) intro.textContent = pack.intro;

    ensureSummaryLabels(panel, pack);
    buildPathGuide(panel, pack);

    var sections = Array.prototype.slice.call(panel.querySelectorAll('.src-section-block'));
    if(!sections.length) return;

    sections.forEach(function(section){
      section.setAttribute('data-source-tier', resolveTierFromSection(section));
    });
    sections.sort(function(a, b){
      var tierA = resolveTierFromSection(a);
      var tierB = resolveTierFromSection(b);
      if(tierA !== tierB) return TIER_ORDER.indexOf(tierA) - TIER_ORDER.indexOf(tierB);
      return getSectionSortScore(a) - getSectionSortScore(b);
    });

    var counts = { quick:0, save:0, deep:0 };
    sections.forEach(function(section){
      counts[resolveTierFromSection(section)] += 1;
    });

    buildTierNav(panel, pack, counts);

    var oldLayout = panel.querySelector('.src-tier-layout');
    if(oldLayout) oldLayout.remove();

    var layout = createNode('div', 'src-tier-layout');
    TIER_ORDER.forEach(function(tierKey){
      var zone = buildTierZone(pack, tierKey, counts[tierKey]);
      var body = zone.querySelector('.src-tier-sections');
      sections.filter(function(section){
        return resolveTierFromSection(section) === tierKey;
      }).forEach(function(section){
        ensureRoleTags(section, tierKey, pack);
        body.appendChild(section);
      });
      layout.appendChild(zone);
    });

    sourceCats.insertAdjacentElement('afterend', layout);
    setActiveTierChip(panel, 'quick');
  }

  var syncTimer = null;
  function scheduleTierSync(){
    if(syncTimer) window.clearTimeout(syncTimer);
    if(typeof window.requestAnimationFrame === 'function'){
      window.requestAnimationFrame(ensureSourceTierLayout);
    }else{
      ensureSourceTierLayout();
    }
    syncTimer = window.setTimeout(ensureSourceTierLayout, 120);
  }

  function wrapRenderSources(){
    var original = window.renderSources;
    if(typeof original !== 'function' || original.__sourceTierWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      scheduleTierSync();
      return result;
    };
    wrapped.__sourceTierWrapped = true;
    wrapped.__sourceTierOriginal = original;
    window.renderSources = wrapped;
    try{ renderSources = wrapped; }catch(error){}
  }

  if(typeof document !== 'undefined'){
    document.addEventListener('click', function(event){
      var pathLink = event.target && event.target.closest ? event.target.closest('#sourcesPanel [data-source-scroll]') : null;
      if(pathLink){
        event.preventDefault();
        var panel = document.getElementById('sourcesPanel');
        var targetKey = pathLink.getAttribute('data-source-scroll');
        if(targetKey){
          setActiveTierChip(panel, resolveTierFromTarget(targetKey));
          if(typeof scrollToSourceSection === 'function'){
            scrollToSourceSection(targetKey);
          }else{
            scheduleTierSync();
            scrollToTier(panel, resolveTierFromTarget(targetKey));
          }
        }
        return;
      }
      var tierChip = event.target && event.target.closest ? event.target.closest('#sourcesPanel .src-tier-chip[data-source-tier]') : null;
      if(tierChip){
        event.preventDefault();
        scheduleTierSync();
        scrollToTier(document.getElementById('sourcesPanel'), tierChip.getAttribute('data-source-tier'));
        return;
      }
      var sourceChip = event.target && event.target.closest ? event.target.closest('#sourcesPanel .source-cat[data-source-cat], #sourcesPanel [data-source-top-menu]') : null;
      if(!sourceChip) return;
      var targetKey = sourceChip.dataset.sourceTopMenu || sourceChip.dataset.sourceCat || sourceChip.dataset.sourceGroup || '';
      if(targetKey){
        setActiveTierChip(document.getElementById('sourcesPanel'), resolveTierFromTarget(targetKey));
      }
    });
  }

  wrapRenderSources();
  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', scheduleTierSync);
  }
  scheduleTierSync();
})();
