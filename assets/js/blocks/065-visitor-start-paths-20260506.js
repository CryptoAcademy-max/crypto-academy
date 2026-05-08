(function(){
  if(typeof window === 'undefined' || window.__visitorStartPaths20260506) return;
  window.__visitorStartPaths20260506 = true;

  var HOME_SECTION_IDS = {
    visitorPaths: 'home-visitor-start-paths-section',
    quickActions: 'home-30-second-cards-section',
    shareSummary: 'home-share-summary-section',
    quickChecklists: 'home-quick-checklists-section',
    freePdf: 'home-free-pdf-value-section',
    ebook: 'home-crypto-ebook-section',
    sourceChecklists: 'source-checklists-section',
    sourceSummaries: 'source-quick-summaries-section'
  };

  var PATH_DEFS = {
    beginners: { primary:'glossary', secondary:'lesson0', optional:'ebook' },
    'first-buy': { primary:'lesson5', secondary:'beforeSend', optional:'freePdf' },
    safety: { primary:'safety', secondary:'seedPhrase', optional:'fakeWebsite' },
    'quick-checks': { primary:'homeChecklists', secondary:'shareSummary', optional:'freePdf' }
  };

  function normalizeLang(value){
    var lang = String(value || '').toLowerCase().trim();
    if(!lang) return 'en';
    if(lang === 'br' || lang.indexOf('pt-br') === 0) return 'pt';
    if(lang.indexOf('ko') === 0) return 'ko';
    if(lang.indexOf('th') === 0) return 'th';
    if(lang.indexOf('id') === 0) return 'id';
    if(lang.indexOf('pt') === 0) return 'pt';
    if(lang.indexOf('tr') === 0) return 'tr';
    if(lang.indexOf('es') === 0) return 'es';
    if(lang.indexOf('ar') === 0) return 'ar';
    if(lang.indexOf('vi') === 0) return 'vi';
    if(lang.indexOf('ha') === 0) return 'ha';
    return 'en';
  }

  function getCurrentLang(){
    if(typeof currentLang === 'string' && currentLang) return normalizeLang(currentLang);
    if(document.documentElement && document.documentElement.lang){
      return normalizeLang(document.documentElement.lang);
    }
    return 'en';
  }

  function getStartLocalePack(){
    var lang = getCurrentLang();
    var packs = {
      en:{
        explore:{
          title:'More ways to explore',
          body:'Open lessons, glossary, safety, FAQ, or the source library when you want a wider route.'
        },
        homeTitle:'Choose Your Best Starting Path',
        homeBody:'Pick the path that fits you best.',
        homeButton:'Start Here',
        primaryButton:'Start Now',
        secondaryButton:'Quick Check',
        optionalButton:'Go Deeper',
        cards:{
          beginners:{
            title:'Start Here for Complete Beginners',
            body:'Start with terms, blockchain, and wallets.',
            intro:'If you are completely new, start with the glossary and wallet basics first.'
          },
          'first-buy':{
            title:'Before Your First Buy',
            body:'Review the buy flow and send checks first.',
            intro:'Before your first buy, focus on the buying flow and the key checks before sending.'
          },
          safety:{
            title:'Start with Safety',
            body:'Start with seed phrase and fake website risks.',
            intro:'If safety is your biggest concern, start with seed phrase and fake website risks first.'
          },
          'quick-checks':{
            title:'Quick Checks Only',
            body:'Go straight to checklists and summary cards.',
            intro:'If you need quick answers instead of long explanations, start with the checklists.'
          }
        },
        labels:{
          beforeSend:'Before You Send Checklist',
          seedPhrase:'Seed Phrase Safety Check',
          fakeWebsite:'Quick Fake Website Check',
          quickActions:'30-Second Action Cards',
          shareSummary:'Quick Summaries',
          homeChecklists:'Quick Checklists',
          freePdf:'Free PDFs Worth Saving',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Quickly review the crypto terms beginners confuse most often.',
          lesson0:'Start with blockchain basics and how crypto records work.',
          lesson1:'Understand wallets, access, and what actually controls your assets.',
          lesson5:'Review the key checks before your first buy.',
          lesson6:'Learn the most important scam and safety signals first.',
          safety:'Open the main safety page for scam prevention basics.',
          beforeSend:'Use a short checklist before a real transfer.',
          seedPhrase:'Review the most important seed phrase safety rules.',
          fakeWebsite:'Check fake site warning signs before login.',
          quickActions:'Jump to short action cards for immediate checks.',
          shareSummary:'Open the short summary cards saved in the library.',
          homeChecklists:'Open the checklist section for quick practical review.',
          freePdf:'Open the free PDF section for saved review material.',
          ebook:'Continue into the structured eBook flow.'
        }
      },
      ko:{
        explore:{
          title:'더 넓게 찾아보기',
          body:'lesson, glossary, safety, FAQ, source library를 더 넓게 보고 싶다면 아래 메뉴를 열어보세요.'
        },
        homeTitle:'내 상황에 맞는 시작 경로',
        homeBody:'내 상황에 맞는 가장 짧은 시작 경로를 골라 보세요.',
        homeButton:'시작하기',
        primaryButton:'지금 시작하기',
        secondaryButton:'빠르게 확인하기',
        optionalButton:'더 정리해서 보기',
        cards:{
          beginners:{
            title:'완전 초보자용 시작 페이지',
            body:'용어, 블록체인, 지갑부터 천천히 시작합니다.',
            intro:'암호화폐가 처음이라면 용어와 지갑부터 이해하는 것이 가장 좋습니다.'
          },
          'first-buy':{
            title:'첫 구매 전 빠른 확인',
            body:'구매 흐름과 전송 전 확인부터 먼저 잡습니다.',
            intro:'처음 사기 전이라면 구매 흐름과 전송 전 확인만 먼저 잡아도 충분합니다.'
          },
          safety:{
            title:'사기와 보안부터 확인하기',
            body:'시드 문구와 가짜 사이트 위험부터 먼저 확인합니다.',
            intro:'사기가 걱정된다면 시드 문구와 가짜 사이트부터 먼저 확인하는 것이 좋습니다.'
          },
          'quick-checks':{
            title:'짧게 확인하고 바로 보기',
            body:'체크리스트와 요약 카드부터 바로 봅니다.',
            intro:'긴 설명보다 짧은 확인이 필요하다면 체크리스트부터 보는 것이 가장 빠릅니다.'
          }
        },
        labels:{
          beforeSend:'전송 전 체크리스트',
          seedPhrase:'시드 문구 보안 체크',
          fakeWebsite:'가짜 사이트 빠른 확인',
          quickActions:'30초 해결 카드',
          shareSummary:'핵심 요약',
          homeChecklists:'빠른 체크리스트',
          freePdf:'저장해두면 좋은 무료 PDF',
          ebook:'크립토 아카데미 전자책'
        },
        itemBodies:{
          glossary:'초보자가 가장 자주 헷갈리는 용어를 빠르게 정리합니다.',
          lesson0:'블록체인과 기록 구조의 기초를 먼저 이해합니다.',
          lesson1:'지갑, 접근 방식, 자산 통제 흐름을 이해합니다.',
          lesson5:'첫 구매 전에 확인해야 할 핵심 흐름을 빠르게 봅니다.',
          lesson6:'가장 중요한 사기 경고와 보안 신호를 먼저 확인합니다.',
          safety:'사기 예방의 기본을 safety 페이지에서 확인합니다.',
          beforeSend:'실제 전송 전에 짧게 다시 보는 체크리스트입니다.',
          seedPhrase:'시드 문구 관련 핵심 보안 원칙만 짧게 확인합니다.',
          fakeWebsite:'로그인 전 가짜 사이트 위험 신호를 다시 봅니다.',
          quickActions:'지금 바로 확인할 핵심 행동 카드로 이동합니다.',
          shareSummary:'자료 라이브러리의 짧은 핵심 요약 카드로 이동합니다.',
          homeChecklists:'빠르게 다시 보는 체크리스트 묶음을 엽니다.',
          freePdf:'저장해두고 다시 보기 좋은 무료 PDF 흐름을 엽니다.',
          ebook:'더 정리된 전자책 복습 흐름으로 이어집니다.'
        }
      },
      th:{
        explore:{
          title:'สำรวจเพิ่มเติม',
          body:'ถ้าคุณอยากดู lessons, glossary, safety, FAQ และ source library เพิ่มเติม ให้เปิดเมนูด้านล่าง'
        },
        homeTitle:'เลือกเส้นทางเริ่มต้นที่เหมาะกับคุณ',
        homeBody:'เลือกทางเข้าที่ตรงกับสถานการณ์ของคุณที่สุด',
        homeButton:'เริ่มที่นี่',
        primaryButton:'เริ่มเลย',
        secondaryButton:'เช็กด่วน',
        optionalButton:'ดูแบบลึกขึ้น',
        cards:{
          beginners:{
            title:'เริ่มตรงนี้สำหรับมือใหม่มาก',
            body:'เริ่มจากคำศัพท์ บล็อกเชน และกระเป๋าเงิน',
            intro:'ถ้าคุณเพิ่งเริ่มจริง ๆ ให้เริ่มจาก glossary และพื้นฐานกระเป๋าเงินก่อน'
          },
          'first-buy':{
            title:'ก่อนซื้อครั้งแรก',
            body:'ดูขั้นตอนการซื้อและการเช็กก่อนโอนก่อน',
            intro:'ก่อนซื้อครั้งแรก ให้โฟกัสกับขั้นตอนการซื้อและจุดที่ต้องเช็กก่อนโอนก่อน'
          },
          safety:{
            title:'เริ่มจากความปลอดภัย',
            body:'เริ่มจาก seed phrase และความเสี่ยงเว็บไซต์ปลอม',
            intro:'ถ้าความปลอดภัยคือสิ่งที่คุณกังวลที่สุด ให้เริ่มจาก seed phrase และเว็บไซต์ปลอมก่อน'
          },
          'quick-checks':{
            title:'ดูแบบสั้นอย่างเดียว',
            body:'ไปตรงสู่ checklist และ summary card',
            intro:'ถ้าคุณต้องการคำตอบเร็วกว่าอ่านยาว ๆ ให้เริ่มจาก checklist'
          }
        },
        labels:{
          beforeSend:'เช็กลิสต์ก่อนโอน',
          seedPhrase:'เช็กความปลอดภัยของ Seed Phrase',
          fakeWebsite:'เช็กเว็บไซต์ปลอมแบบเร็ว',
          quickActions:'การ์ดเช็กด่วน 30 วินาที',
          shareSummary:'สรุปสั้น',
          homeChecklists:'เช็กลิสต์ด่วน',
          freePdf:'PDF ฟรีที่ควรเก็บไว้',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'ทบทวนคำศัพท์คริปโตที่มือใหม่มักสับสนได้อย่างรวดเร็ว',
          lesson0:'เริ่มจากพื้นฐานบล็อกเชนและการทำงานของบันทึกธุรกรรม',
          lesson1:'เข้าใจกระเป๋าเงิน การเข้าถึง และการควบคุมสินทรัพย์',
          lesson5:'ทบทวนจุดสำคัญก่อนซื้อครั้งแรก',
          lesson6:'เรียนรู้สัญญาณอันตรายด้านสแกมและความปลอดภัยที่สำคัญก่อน',
          safety:'เปิดหน้า safety หลักเพื่อทบทวนพื้นฐานการป้องกันการหลอกลวง',
          beforeSend:'ใช้เช็กลิสต์สั้น ๆ ก่อนโอนเงินจริง',
          seedPhrase:'ทบทวนกฎสำคัญที่สุดของการปกป้อง seed phrase',
          fakeWebsite:'เช็กสัญญาณเว็บไซต์ปลอมก่อนล็อกอิน',
          quickActions:'ไปยังการ์ดเช็กด่วนสำหรับสิ่งที่ต้องดูทันที',
          shareSummary:'เปิดการ์ดสรุปสั้นที่เก็บไว้ในไลบรารี',
          homeChecklists:'เปิดส่วน checklist เพื่อทบทวนแบบเร็ว',
          freePdf:'เปิดส่วน PDF ฟรีสำหรับการกลับมาทบทวน',
          ebook:'ไปต่อสู่ eBook แบบเรียงลำดับมากขึ้น'
        }
      },
      id:{
        explore:{
          title:'Jelajahi Lebih Banyak',
          body:'Buka lessons, glossary, safety, FAQ, atau source library jika Anda ingin rute yang lebih luas.'
        },
        homeTitle:'Pilih Jalur Awal yang Paling Cocok',
        homeBody:'Pilih jalur yang paling sesuai dengan situasi Anda.',
        homeButton:'Mulai Di Sini',
        primaryButton:'Mulai Sekarang',
        secondaryButton:'Cek Cepat',
        optionalButton:'Lihat Lebih Dalam',
        cards:{
          beginners:{
            title:'Mulai Di Sini untuk Pemula Total',
            body:'Mulai dari istilah, blockchain, dan wallet.',
            intro:'Jika Anda benar-benar baru, mulai dari glossary dan dasar wallet terlebih dahulu.'
          },
          'first-buy':{
            title:'Sebelum Pembelian Pertama',
            body:'Tinjau alur beli dan cek sebelum kirim lebih dulu.',
            intro:'Sebelum pembelian pertama, fokus dulu pada alur beli dan pengecekan sebelum mengirim.'
          },
          safety:{
            title:'Mulai dari Keamanan',
            body:'Mulai dari risiko seed phrase dan situs palsu.',
            intro:'Jika keamanan adalah kekhawatiran terbesar Anda, mulai dari seed phrase dan situs palsu terlebih dahulu.'
          },
          'quick-checks':{
            title:'Cek Cepat Saja',
            body:'Langsung ke checklist dan kartu ringkas.',
            intro:'Jika Anda butuh jawaban cepat, mulai dari checklist.'
          }
        },
        labels:{
          beforeSend:'Checklist Sebelum Mengirim',
          seedPhrase:'Cek Keamanan Seed Phrase',
          fakeWebsite:'Cek Cepat Situs Palsu',
          quickActions:'Kartu Aksi 30 Detik',
          shareSummary:'Ringkasan Cepat',
          homeChecklists:'Checklist Cepat',
          freePdf:'PDF Gratis yang Layak Disimpan',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Tinjau cepat istilah crypto yang paling sering membingungkan pemula.',
          lesson0:'Mulai dari dasar blockchain dan cara catatan crypto bekerja.',
          lesson1:'Pahami wallet, akses, dan apa yang benar-benar mengontrol aset Anda.',
          lesson5:'Tinjau langkah penting sebelum pembelian pertama Anda.',
          lesson6:'Pelajari tanda scam dan keamanan yang paling penting lebih dulu.',
          safety:'Buka halaman safety utama untuk dasar pencegahan scam.',
          beforeSend:'Gunakan checklist singkat sebelum transfer nyata.',
          seedPhrase:'Tinjau aturan keamanan seed phrase yang paling penting.',
          fakeWebsite:'Cek tanda peringatan situs palsu sebelum login.',
          quickActions:'Masuk ke kartu aksi singkat untuk pemeriksaan cepat.',
          shareSummary:'Buka kartu ringkasan singkat yang tersimpan di library.',
          homeChecklists:'Buka bagian checklist untuk tinjauan praktis yang cepat.',
          freePdf:'Buka bagian PDF gratis untuk bahan review tersimpan.',
          ebook:'Lanjut ke alur eBook yang lebih terstruktur.'
        }
      },
      pt:{
        explore:{
          title:'Explorar Mais',
          body:'Abra lessons, glossary, safety, FAQ ou a source library se quiser um caminho mais amplo.'
        },
        homeTitle:'Escolha o Melhor Caminho para Comecar',
        homeBody:'Escolha o caminho que mais combina com a sua situacao.',
        homeButton:'Comece Aqui',
        primaryButton:'Comecar Agora',
        secondaryButton:'Cheque Rapido',
        optionalButton:'Ver com Mais Profundidade',
        cards:{
          beginners:{
            title:'Comece Aqui se Voce e Totalmente Iniciante',
            body:'Comece por termos, blockchain e wallets.',
            intro:'Se voce esta comecando do zero, comece primeiro pelo glossary e pelos conceitos basicos de wallet.'
          },
          'first-buy':{
            title:'Antes da Sua Primeira Compra',
            body:'Revise primeiro o fluxo de compra e os checks antes de enviar.',
            intro:'Antes da primeira compra, foque primeiro no fluxo de compra e nos checks antes do envio.'
          },
          safety:{
            title:'Comece pela Seguranca',
            body:'Comece pelos riscos de seed phrase e sites falsos.',
            intro:'Se a seguranca e a sua maior preocupacao, comece primeiro por seed phrase e sites falsos.'
          },
          'quick-checks':{
            title:'So Checks Rapidos',
            body:'Va direto para checklists e cartoes de resumo.',
            intro:'Se voce precisa de respostas rapidas em vez de explicacoes longas, comece pelos checklists.'
          }
        },
        labels:{
          beforeSend:'Checklist Antes de Enviar',
          seedPhrase:'Checklist de Seguranca da Seed Phrase',
          fakeWebsite:'Cheque Rapido de Site Falso',
          quickActions:'Cartoes de Acao em 30 Segundos',
          shareSummary:'Resumos Rapidos',
          homeChecklists:'Checklists Rapidos',
          freePdf:'PDFs Gratuitos que Valem Guardar',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Revise rapidamente os termos de crypto que mais confundem iniciantes.',
          lesson0:'Comece pelos basicos de blockchain e por como os registros funcionam.',
          lesson1:'Entenda wallets, acesso e o que realmente controla seus ativos.',
          lesson5:'Revise os pontos principais antes da sua primeira compra.',
          lesson6:'Aprenda primeiro os sinais mais importantes de golpe e seguranca.',
          safety:'Abra a pagina principal de safety para ver o basico de prevencao de golpes.',
          beforeSend:'Use um checklist curto antes de uma transferencia real.',
          seedPhrase:'Revise as regras mais importantes de seguranca da seed phrase.',
          fakeWebsite:'Confira sinais de site falso antes do login.',
          quickActions:'Vá para os cartoes curtos de acao para checks imediatos.',
          shareSummary:'Abra os cartoes de resumo curto salvos na biblioteca.',
          homeChecklists:'Abra a secao de checklist para uma revisao pratica e rapida.',
          freePdf:'Abra a secao de PDF gratuito para material salvo de revisao.',
          ebook:'Continue para o fluxo estruturado do eBook.'
        }
      },
      tr:{
        explore:{
          title:'Daha Fazla Kesfet',
          body:'Daha genis bir rota istiyorsaniz lessons, glossary, safety, FAQ veya source libraryi acin.'
        },
        homeTitle:'Sizin Icin En Iyi Baslangic Yolunu Secin',
        homeBody:'Size en uygun yolu secin.',
        homeButton:'Buradan Basla',
        primaryButton:'Simdi Basla',
        secondaryButton:'Hizli Kontrol',
        optionalButton:'Daha Derine Git',
        cards:{
          beginners:{
            title:'Tam Yeni Baslayanlar Icin Baslangic',
            body:'Terimler, blockchain ve wallet ile baslayin.',
            intro:'Tamamen yeniyseniz once glossary ve wallet temelleriyle baslayin.'
          },
          'first-buy':{
            title:'Ilk Alimdan Once',
            body:'Ilk olarak alim akisini ve gonderim oncesi kontrolleri gozden gecirin.',
            intro:'Ilk aliminizdan once alim akisina ve gonderimden once yapilacak kontrollere odaklanin.'
          },
          safety:{
            title:'Once Guvenlik',
            body:'Seed phrase ve sahte site riskleriyle baslayin.',
            intro:'En buyuk kayginiz guvenlikse once seed phrase ve sahte site riskleriyle baslayin.'
          },
          'quick-checks':{
            title:'Sadece Hizli Kontroller',
            body:'Dogrudan checklistlere ve ozet kartlara gidin.',
            intro:'Uzun aciklamalar yerine hizli cevaplara ihtiyaciniz varsa checklistlerle baslayin.'
          }
        },
        labels:{
          beforeSend:'Gondermeden Once Kontrol Listesi',
          seedPhrase:'Seed Phrase Guvenlik Kontrolu',
          fakeWebsite:'Sahte Site Icin Hizli Kontrol',
          quickActions:'30 Saniyelik Aksiyon Kartlari',
          shareSummary:'Hizli Ozetler',
          homeChecklists:'Hizli Checklistler',
          freePdf:'Kaydetmeye Deger Ucretsiz PDFler',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Yeni baslayanlarin en cok karistirdigi kripto terimlerini hizlica gozden gecirin.',
          lesson0:'Blockchain temelleri ve kayitlarin nasil calistigi ile baslayin.',
          lesson1:'Walletleri, erisimi ve varliklarinizi neyin kontrol ettigini anlayin.',
          lesson5:'Ilk aliminizdan once temel kontrolleri gozden gecirin.',
          lesson6:'En onemli dolandiricilik ve guvenlik sinyallerini once ogrenin.',
          safety:'Dolandiricilik onleme temelleri icin ana safety sayfasini acin.',
          beforeSend:'Gercek bir transferden once kisa bir checklist kullanin.',
          seedPhrase:'En onemli seed phrase guvenlik kurallarini yeniden gozden gecirin.',
          fakeWebsite:'Giris yapmadan once sahte site uyari isaretlerini kontrol edin.',
          quickActions:'Aninda kontrol icin kisa aksiyon kartlarina gidin.',
          shareSummary:'Kutuphane icindeki kisa ozet kartlarini acin.',
          homeChecklists:'Hizli pratik tekrar icin checklist bolumunu acin.',
          freePdf:'Kaydedilmis tekrar materyali icin ucretsiz PDF bolumunu acin.',
          ebook:'Daha duzenli eBook akisina devam edin.'
        }
      },
      es:{
        explore:{
          title:'Explora Mas',
          body:'Abre lessons, glossary, safety, FAQ o la source library si quieres una ruta mas amplia.'
        },
        homeTitle:'Elige el Mejor Camino para Empezar',
        homeBody:'Elige la ruta que mejor encaja con tu situacion.',
        homeButton:'Empieza Aqui',
        primaryButton:'Empezar Ahora',
        secondaryButton:'Chequeo Rapido',
        optionalButton:'Ir Mas a Fondo',
        cards:{
          beginners:{
            title:'Empieza Aqui si Eres Totalmente Nuevo',
            body:'Empieza por terminos, blockchain y wallets.',
            intro:'Si empiezas desde cero, comienza primero por el glossary y las bases de wallet.'
          },
          'first-buy':{
            title:'Antes de Tu Primera Compra',
            body:'Revisa primero el flujo de compra y los checks antes de enviar.',
            intro:'Antes de tu primera compra, enfocate primero en el flujo de compra y en los checks antes del envio.'
          },
          safety:{
            title:'Empieza por la Seguridad',
            body:'Empieza por los riesgos de seed phrase y sitios falsos.',
            intro:'Si la seguridad es tu mayor preocupacion, empieza primero por seed phrase y sitios falsos.'
          },
          'quick-checks':{
            title:'Solo Chequeos Rapidos',
            body:'Ve directo a los checklists y a las tarjetas de resumen.',
            intro:'Si necesitas respuestas rapidas en lugar de explicaciones largas, empieza por los checklists.'
          }
        },
        labels:{
          beforeSend:'Checklist Antes de Enviar',
          seedPhrase:'Chequeo de Seguridad de la Seed Phrase',
          fakeWebsite:'Revision Rapida de Sitio Falso',
          quickActions:'Tarjetas de Accion de 30 Segundos',
          shareSummary:'Resumenes Rapidos',
          homeChecklists:'Checklists Rapidos',
          freePdf:'PDF Gratis que Vale la Pena Guardar',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Revisa rapido los terminos de crypto que mas confunden a los principiantes.',
          lesson0:'Empieza por lo basico de blockchain y por como funcionan los registros.',
          lesson1:'Entiende wallets, acceso y que es lo que realmente controla tus activos.',
          lesson5:'Revisa los puntos clave antes de tu primera compra.',
          lesson6:'Aprende primero las senales de estafa y seguridad mas importantes.',
          safety:'Abre la pagina principal de safety para ver las bases de prevencion de estafas.',
          beforeSend:'Usa un checklist corto antes de una transferencia real.',
          seedPhrase:'Revisa las reglas de seguridad mas importantes de la seed phrase.',
          fakeWebsite:'Comprueba las senales de sitio falso antes de iniciar sesion.',
          quickActions:'Ve a las tarjetas cortas de accion para checks inmediatos.',
          shareSummary:'Abre las tarjetas de resumen breve guardadas en la biblioteca.',
          homeChecklists:'Abre la seccion de checklist para una revision practica y rapida.',
          freePdf:'Abre la seccion de PDF gratis para material guardado de revision.',
          ebook:'Continua hacia el flujo estructurado del eBook.'
        }
      },
      ar:{
        explore:{
          title:'استكشف المزيد',
          body:'افتح lessons وglossary وsafety وFAQ وsource library اذا اردت مسارا اوسع.'
        },
        homeTitle:'اختر افضل مسار لبدايتك',
        homeBody:'اختر المسار الذي يناسب وضعك اكثر.',
        homeButton:'ابدأ من هنا',
        primaryButton:'ابدأ الآن',
        secondaryButton:'فحص سريع',
        optionalButton:'تعلم بعمق اكبر',
        cards:{
          beginners:{
            title:'ابدأ من هنا اذا كنت مبتدئا تماما',
            body:'ابدأ بالمصطلحات وblockchain وwallet.',
            intro:'اذا كنت جديدا تماما فابدأ اولا من glossary واساسيات wallet.'
          },
          'first-buy':{
            title:'قبل اول شراء',
            body:'راجع اولا مسار الشراء ونقاط الفحص قبل الارسال.',
            intro:'قبل اول شراء ركز اولا على مسار الشراء وعلى الفحوصات المهمة قبل الارسال.'
          },
          safety:{
            title:'ابدأ بالسلامة',
            body:'ابدأ بمخاطر seed phrase والمواقع المزيفة.',
            intro:'اذا كان الامان هو اكبر قلق لديك فابدأ اولا بseed phrase والمواقع المزيفة.'
          },
          'quick-checks':{
            title:'فحوصات سريعة فقط',
            body:'اذهب مباشرة الى القوائم المختصرة وبطاقات الملخص.',
            intro:'اذا كنت تريد اجابات سريعة بدلا من الشرح الطويل فابدأ بالقوائم المختصرة.'
          }
        },
        labels:{
          beforeSend:'قائمة قبل الارسال',
          seedPhrase:'فحص امان Seed Phrase',
          fakeWebsite:'فحص سريع للموقع المزيف',
          quickActions:'بطاقات 30 ثانية',
          shareSummary:'ملخصات سريعة',
          homeChecklists:'قوائم سريعة',
          freePdf:'ملفات PDF مجانية تستحق الحفظ',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'راجع بسرعة مصطلحات الكريبتو التي تربك المبتدئين غالبا.',
          lesson0:'ابدأ باساسيات blockchain وكيف تعمل السجلات.',
          lesson1:'افهم wallet والوصول وما الذي يسيطر فعلا على اصولك.',
          lesson5:'راجع النقاط المهمة قبل اول شراء لك.',
          lesson6:'تعلم اولا اهم اشارات الاحتيال والسلامة.',
          safety:'افتح صفحة safety الرئيسية لمراجعة اساسيات منع الاحتيال.',
          beforeSend:'استخدم قائمة قصيرة قبل اي تحويل حقيقي.',
          seedPhrase:'راجع اهم قواعد امان seed phrase.',
          fakeWebsite:'تحقق من علامات الموقع المزيف قبل تسجيل الدخول.',
          quickActions:'اذهب الى بطاقات الاجراء السريعة للفحص الفوري.',
          shareSummary:'افتح بطاقات الملخص القصير المحفوظة في المكتبة.',
          homeChecklists:'افتح قسم القوائم للمراجعة العملية السريعة.',
          freePdf:'افتح قسم PDF المجاني لمواد المراجعة المحفوظة.',
          ebook:'انتقل الى مسار eBook الاكثر تنظيما.'
        }
      },
      vi:{
        explore:{
          title:'Kham Pha Them',
          body:'Mo lessons, glossary, safety, FAQ, hoac source library neu ban muon mot huong di rong hon.'
        },
        homeTitle:'Chon Duong Bat Dau Phu Hop Nhat',
        homeBody:'Chon lo trinh phu hop nhat voi tinh huong cua ban.',
        homeButton:'Bat Dau Tai Day',
        primaryButton:'Bat Dau Ngay',
        secondaryButton:'Kiem Tra Nhanh',
        optionalButton:'Xem Sau Hon',
        cards:{
          beginners:{
            title:'Bat Dau Tai Day Neu Ban Hoan Toan Moi',
            body:'Bat dau voi thuat ngu, blockchain, va wallet.',
            intro:'Neu ban hoan toan moi, hay bat dau truoc voi glossary va cac nen tang wallet.'
          },
          'first-buy':{
            title:'Truoc Lan Mua Dau Tien',
            body:'Xem truoc quy trinh mua va cac buoc kiem tra truoc khi gui.',
            intro:'Truoc lan mua dau tien, hay tap trung truoc vao quy trinh mua va cac buoc can kiem tra truoc khi gui.'
          },
          safety:{
            title:'Bat Dau Tu An Toan',
            body:'Bat dau voi seed phrase va rui ro trang web gia.',
            intro:'Neu an toan la dieu ban lo nhat, hay bat dau truoc voi seed phrase va trang web gia.'
          },
          'quick-checks':{
            title:'Chi Can Kiem Tra Nhanh',
            body:'Di thang toi checklist va cac the tom tat.',
            intro:'Neu ban can cau tra loi nhanh thay vi giai thich dai, hay bat dau tu checklist.'
          }
        },
        labels:{
          beforeSend:'Checklist Truoc Khi Gui',
          seedPhrase:'Kiem Tra An Toan Seed Phrase',
          fakeWebsite:'Kiem Tra Nhanh Trang Web Gia',
          quickActions:'The Hanh Dong 30 Giay',
          shareSummary:'Tom Tat Nhanh',
          homeChecklists:'Checklist Nhanh',
          freePdf:'PDF Mien Phi Dang De Luu Lai',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Xem nhanh cac thuat ngu crypto ma nguoi moi thuong hay nham lan.',
          lesson0:'Bat dau voi nen tang blockchain va cach ban ghi hoat dong.',
          lesson1:'Hieu wallet, quyen truy cap, va dieu gi thuc su kiem soat tai san cua ban.',
          lesson5:'Xem lai cac diem quan trong truoc lan mua dau tien.',
          lesson6:'Hoc truoc cac dau hieu scam va an toan quan trong nhat.',
          safety:'Mo trang safety chinh de xem lai cac nen tang tranh lua dao.',
          beforeSend:'Dung checklist ngan truoc mot lan chuyen tien thuc te.',
          seedPhrase:'Xem lai cac quy tac an toan seed phrase quan trong nhat.',
          fakeWebsite:'Kiem tra dau hieu trang web gia truoc khi dang nhap.',
          quickActions:'Di den cac the hanh dong ngan de kiem tra ngay.',
          shareSummary:'Mo cac the tom tat ngan da luu trong thu vien.',
          homeChecklists:'Mo muc checklist de xem lai thuc hanh nhanh.',
          freePdf:'Mo muc PDF mien phi de xem lai tai lieu da luu.',
          ebook:'Tiep tuc sang luong eBook co cau truc hon.'
        }
      },
      ha:{
        explore:{
          title:'Kara Bincike',
          body:'Bude lessons, glossary, safety, FAQ, ko source library idan kana son wata hanya mai fadi.'
        },
        homeTitle:'Zabi Hanyar Farko Mafi Dacewa',
        homeBody:'Zabi hanyar da ta fi dacewa da halin da kake ciki.',
        homeButton:'Fara Daga Nan',
        primaryButton:'Fara Yanzu',
        secondaryButton:'Duba Da Sauri',
        optionalButton:'Kara Zurfi',
        cards:{
          beginners:{
            title:'Fara Daga Nan Idan Kai Sabon Gaske Ne',
            body:'Fara da kalmomi, blockchain, da wallet.',
            intro:'Idan kai sabo ne kwarai, ka fara da glossary da tushen wallet tukuna.'
          },
          'first-buy':{
            title:'Kafin Sayenka na Farko',
            body:'Ka fara duba tsarin saye da checks kafin tura kudi.',
            intro:'Kafin sayenka na farko, ka fi mayar da hankali ga tsarin saye da checks kafin tura kudi.'
          },
          safety:{
            title:'Fara da Tsaro',
            body:'Fara da hadarin seed phrase da shafukan bogi.',
            intro:'Idan tsaro shi ne babban damuwarka, ka fara da seed phrase da shafukan bogi.'
          },
          'quick-checks':{
            title:'Saurin Dubawa Kawai',
            body:'Je kai tsaye zuwa checklist da katunan takaitawa.',
            intro:'Idan kana son amsoshi masu sauri maimakon dogon bayani, ka fara da checklist.'
          }
        },
        labels:{
          beforeSend:'Jerin Dubawa Kafin Tura Kudi',
          seedPhrase:'Duban Tsaron Seed Phrase',
          fakeWebsite:'Duban Gaggawa na Shafin Bogi',
          quickActions:'Katunan Aiki na Dakika 30',
          shareSummary:'Takaitattun Bayani',
          homeChecklists:'Checklist na Sauri',
          freePdf:'PDF na Kyauta da Ya Kamata a Ajiye',
          ebook:'Crypto Academy eBook'
        },
        itemBodies:{
          glossary:'Ka sake duba kalmomin crypto da suka fi rikitar da masu farawa da sauri.',
          lesson0:'Fara da tushen blockchain da yadda bayanai ke aiki.',
          lesson1:'Fahimci wallet, hanyoyin shiga, da abin da ke sarrafa kadarorinka.',
          lesson5:'Ka sake duba muhimman abubuwa kafin sayenka na farko.',
          lesson6:'Ka fara koyon muhimman alamun damfara da tsaro.',
          safety:'Bude babban shafin safety domin tushen kariya daga damfara.',
          beforeSend:'Yi amfani da gajeren checklist kafin ainihin tura kudi.',
          seedPhrase:'Ka sake duba muhimman kaidojin tsaron seed phrase.',
          fakeWebsite:'Ka duba alamun shafin bogi kafin shiga.',
          quickActions:'Je zuwa gajerun katunan aiki domin dubawa nan take.',
          shareSummary:'Bude gajerun katunan takaitawa da aka ajiye a library.',
          homeChecklists:'Bude bangaren checklist domin bita mai sauri.',
          freePdf:'Bude bangaren PDF na kyauta domin kayan bita da aka ajiye.',
          ebook:'Ci gaba zuwa tsarin eBook mai kyau fiye da haka.'
        }
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getBasePrefix(){
    if(typeof window.__CA_BASE_PREFIX__ === 'string' && window.__CA_BASE_PREFIX__) return window.__CA_BASE_PREFIX__;
    if(document.body && document.body.dataset && document.body.dataset.basePrefix){
      return document.body.dataset.basePrefix;
    }
    return './';
  }

  function toIndexRoute(path){
    if(typeof window.__CA_TO_INDEX_ROUTE === 'function'){
      return window.__CA_TO_INDEX_ROUTE(path);
    }
    var value = String(path || '');
    if(!value) return 'index.html';
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + 'index.html') : (value + '/index.html');
  }

  function getPageRoute(page){
    if(typeof window.__CA_GET_PAGE_ROUTE === 'function'){
      var route = window.__CA_GET_PAGE_ROUTE(page);
      if(route) return route;
    }
    var base = getBasePrefix();
    if(page === 'home') return toIndexRoute(base);
    if(page === 'start') return toIndexRoute(base + 'start/beginners/');
    return toIndexRoute(base + String(page || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getLessonRoute(index){
    if(typeof window.__CA_GET_LESSON_ROUTE === 'function'){
      return window.__CA_GET_LESSON_ROUTE(index);
    }
    var slugs = ['blockchain','wallet','transfer','roles','real-world','first-buy','scams'];
    return toIndexRoute(getBasePrefix() + 'lesson/' + (slugs[index] || 'blockchain') + '/');
  }

  function getChecklistRoute(slug){
    return toIndexRoute(getBasePrefix() + 'checklists/' + String(slug || '').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getStartRoute(slug){
    return toIndexRoute(getBasePrefix() + 'start/' + String(slug || 'beginners').replace(/^\/+|\/+$/g, '') + '/');
  }

  function getHomeHashRoute(hash){
    return getPageRoute('home') + '#' + String(hash || '').replace(/^#/, '');
  }

  function getSourceHashRoute(hash){
    return getPageRoute('sources') + '#' + String(hash || '').replace(/^#/, '');
  }

  function getHomeConversionItems(){
    if(typeof window.getHomeConversionStats !== 'function') return [];
    try{
      var stats = window.getHomeConversionStats();
      return stats && Array.isArray(stats.list) ? stats.list : [];
    }catch(err){}
    return [];
  }

  function getHomeTrackedTotal(prefixes){
    var values = Array.isArray(prefixes) ? prefixes : [prefixes];
    var list = getHomeConversionItems();
    var total = 0;
    for(var i = 0; i < list.length; i++){
      var item = list[i] || {};
      var key = String(item.key || '');
      var count = Number(item.count || 0);
      if(!key || !count) continue;
      for(var j = 0; j < values.length; j++){
        var prefix = String(values[j] || '');
        if(prefix && key.indexOf(prefix) === 0){
          total += count;
          break;
        }
      }
    }
    return total;
  }

  function getHomeSectionPerformanceStats(){
    var sections = {
      top3:{ prefixes:['home.top3.'], fallback:420 },
      visitorPaths:{ prefixes:['home.visitor.','home.hero.primary.'], fallback:390 },
      quickActions:{ prefixes:['home.quickcards.','home.hero.secondary.quickcheck'], fallback:350 },
      trust:{ prefixes:['home.trust.','home.hero.side.sources'], fallback:230 },
      checklists:{ prefixes:['home.checklist.','home.hero.side.beforeSend'], fallback:340 },
      freePdf:{ prefixes:['home.pdf.library.','home.pdf.value.free'], fallback:310 },
      exploreMenu:{ prefixes:['home.menu.','home.hero.side.glossary'], fallback:150 },
      ebookFlow:{ prefixes:['home.flow.','home.pdf.value.ebook'], fallback:190 },
      ebook:{ prefixes:['home.ebook.'], fallback:170 },
      shareSummary:{ prefixes:['home.summary.'], fallback:90 },
      saveValue:{ prefixes:[], fallback:70 },
      premiumPdf:{ prefixes:['home.premiumpdf.'], fallback:60 },
      support:{ prefixes:['home.support.'], fallback:30 }
    };
    var names = Object.keys(sections);
    var totalClicks = 0;
    for(var i = 0; i < names.length; i++){
      var key = names[i];
      var config = sections[key];
      config.clicks = getHomeTrackedTotal(config.prefixes || []);
      config.score = config.fallback + config.clicks;
      totalClicks += config.clicks;
    }
    return {
      totalClicks: totalClicks,
      sections: sections
    };
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function tText(key, fallback){
    if(typeof t === 'function'){
      try{
        var value = t(key);
        if(typeof value === 'string' && value && value !== key) return value;
      }catch(err){}
    }
    return fallback;
  }

  function getStartPath(){
    var bodySlug = document.body && document.body.dataset ? document.body.dataset.startPath : '';
    var globalSlug = typeof window.__CA_START_PATH__ === 'string' ? window.__CA_START_PATH__ : '';
    var slug = String(globalSlug || bodySlug || '').toLowerCase().trim();
    return PATH_DEFS[slug] ? slug : '';
  }

  function getExplorePack(){
    var pack = getStartLocalePack();
    return pack.explore || { title:'More ways to explore', body:'Open lessons, glossary, safety, FAQ, or the source library when you want a wider route.' };
  }

  function getPack(){
    return getStartLocalePack();
  }

  function getItemConfig(key){
    var pack = getPack();
    var labels = pack.labels;
    var map = {
      glossary:{ title:tText('nav.glossary', 'Glossary'), body:pack.itemBodies.glossary, href:getPageRoute('glossary') },
      lesson0:{ title:tText('nav.l1', 'Lesson 1'), body:pack.itemBodies.lesson0, href:getLessonRoute(0) },
      lesson1:{ title:tText('nav.l2', 'Lesson 2'), body:pack.itemBodies.lesson1, href:getLessonRoute(1) },
      lesson5:{ title:tText('nav.l6', 'Lesson 6'), body:pack.itemBodies.lesson5, href:getLessonRoute(5) },
      lesson6:{ title:tText('nav.l7', 'Lesson 7'), body:pack.itemBodies.lesson6, href:getLessonRoute(6) },
      safety:{ title:tText('nav.safety', 'Safety'), body:pack.itemBodies.safety, href:getPageRoute('safety') },
      beforeSend:{ title:labels.beforeSend, body:pack.itemBodies.beforeSend, href:getChecklistRoute('before-send') },
      seedPhrase:{ title:labels.seedPhrase, body:pack.itemBodies.seedPhrase, href:getChecklistRoute('seed-phrase-safety') },
      fakeWebsite:{ title:labels.fakeWebsite, body:pack.itemBodies.fakeWebsite, href:getChecklistRoute('fake-website-check') },
      quickActions:{ title:labels.quickActions, body:pack.itemBodies.quickActions, href:getHomeHashRoute(HOME_SECTION_IDS.quickActions) },
      shareSummary:{ title:labels.shareSummary, body:pack.itemBodies.shareSummary, href:getSourceHashRoute(HOME_SECTION_IDS.sourceSummaries) },
      homeChecklists:{ title:labels.homeChecklists, body:pack.itemBodies.homeChecklists, href:getHomeHashRoute(HOME_SECTION_IDS.quickChecklists) },
      freePdf:{ title:labels.freePdf, body:pack.itemBodies.freePdf, href:getHomeHashRoute(HOME_SECTION_IDS.freePdf) },
      ebook:{ title:labels.ebook, body:pack.itemBodies.ebook, href:getHomeHashRoute(HOME_SECTION_IDS.ebook) }
    };
    return map[key] || null;
  }

  function buildHomeVisitorPathsHtml(){
    var pack = getPack();
    var slugs = ['beginners','first-buy','safety','quick-checks'];
    var trackLabels = {
      beginners:'Visitor path beginners',
      'first-buy':'Visitor path first buy',
      safety:'Visitor path safety',
      'quick-checks':'Visitor path quick checks'
    };
    return ''
      + '<section id="' + HOME_SECTION_IDS.visitorPaths + '" class="home-visitor-paths-block home-situation-block">'
      +   '<div class="home-situation-title">' + escapeHtml(pack.homeTitle) + '</div>'
      +   '<div class="home-situation-body">' + escapeHtml(pack.homeBody) + '</div>'
      +   '<div class="home-visitor-paths-grid">'
      +     slugs.map(function(slug){
              var card = pack.cards[slug];
              return ''
                + '<a class="home-visitor-path-card" data-home-track="home.visitor.' + escapeHtml(slug.replace(/-/g, '')) + '" data-home-track-label="' + escapeHtml(trackLabels[slug] || ('Visitor path ' + slug)) + '" href="' + escapeHtml(getStartRoute(slug)) + '">'
                +   '<div class="home-visitor-path-title">' + escapeHtml(card.title) + '</div>'
                +   '<div class="home-visitor-path-body">' + escapeHtml(card.body) + '</div>'
                +   '<span class="home-visitor-path-cta">' + escapeHtml(pack.homeButton) + '</span>'
                + '</a>';
            }).join('')
      +   '</div>'
      + '</section>';
  }

  function buildStartCardHtml(key, type){
    var item = getItemConfig(key);
    var pack = getPack();
    if(!item) return '';
    var label = pack.primaryButton;
    var cardClass = 'start-path-card';
    if(type === 'primary'){
      cardClass += ' is-primary';
    } else if(type === 'secondary'){
      label = pack.secondaryButton;
      cardClass += ' is-secondary';
    }
    return ''
      + '<a class="' + cardClass + '" href="' + escapeHtml(item.href) + '">'
      +   '<div class="start-path-card-title">' + escapeHtml(item.title) + '</div>'
      +   '<div class="start-path-card-body">' + escapeHtml(item.body) + '</div>'
      +   '<span class="start-path-card-link">' + escapeHtml(label) + '</span>'
      + '</a>';
  }

  function buildOptionalActionHtml(key){
    var item = getItemConfig(key);
    var pack = getPack();
    if(!item) return '';
    return ''
      + '<div class="start-path-optional">'
      +   '<div class="start-path-optional-label">' + escapeHtml(pack.optionalButton) + '</div>'
      +   '<a class="start-path-optional-link" href="' + escapeHtml(item.href) + '">'
      +     '<span class="start-path-optional-title">' + escapeHtml(item.title) + '</span>'
      +     '<span class="start-path-optional-body">' + escapeHtml(item.body) + '</span>'
      +   '</a>'
      + '</div>';
  }

  function buildStartPathHtml(slug){
    var pack = getPack();
    var pathCard = pack.cards[slug];
    var pathDef = PATH_DEFS[slug];
    if(!pathCard || !pathDef) return null;
    return ''
      + '<div class="lc-header start-path-header">'
      +   '<div class="lc-meta"><span class="meta-pill">' + escapeHtml(tText('nav.start', 'Start Here')) + '</span><span class="meta-cat">' + escapeHtml(pathCard.title) + '</span></div>'
      +   '<h1 class="lc-title">' + escapeHtml(pathCard.title) + '</h1>'
      +   '<p class="lc-intro">' + escapeHtml(pathCard.intro) + '</p>'
      + '</div>'
      + '<div class="lesson-body start-path-body">'
      +   buildStartCardHtml(pathDef.primary, 'primary')
      +   buildStartCardHtml(pathDef.secondary, 'secondary')
      +   buildOptionalActionHtml(pathDef.optional)
      + '</div>';
  }

  function createNodeFromHtml(html){
    var host = document.createElement('div');
    host.innerHTML = html;
    return host.firstElementChild;
  }

  function ensureHomeVisitorPathsSection(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    var next = createNodeFromHtml(buildHomeVisitorPathsHtml());
    if(!next) return;
    var current = hero.querySelector('.home-visitor-paths-block');
    if(current){
      current.replaceWith(next);
      return;
    }
    var anchor = hero.querySelector('.home-start-three-block')
      || hero.querySelector('.home-situation-block')
      || hero.querySelector('.home-desc');
    if(anchor){
      anchor.insertAdjacentElement('afterend', next);
    } else {
      hero.insertAdjacentElement('beforeend', next);
    }
  }

  function removeLegacyHomeGrids(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    Array.prototype.slice.call(hero.querySelectorAll('.home-grid, .home-mini-grid')).forEach(function(node){
      node.remove();
    });
  }

  function moveFinderBelowHero(panel){
    var hero = panel.querySelector('.home-hero');
    var finder = panel.querySelector('.start-finder');
    if(!hero || !finder || finder.parentNode === panel) return;
    hero.insertAdjacentElement('afterend', finder);
  }

  function reorderHeroIntroSections(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    var performance = getHomeSectionPerformanceStats().sections;
    var anchor = hero.querySelector('.home-hero-showcase-block')
      || hero.querySelector('.home-desc')
      || hero.querySelector('.home-title');
    if(!anchor) return;
    var items = [
      { key:'top3', order:0, node:hero.querySelector('.home-start-three-block') },
      { key:'visitorPaths', order:1, node:hero.querySelector('.home-visitor-paths-block') },
      { key:'quickActions', order:2, node:hero.querySelector('.home-action-cards-block') },
      { key:'trust', order:3, node:hero.querySelector('.home-identity-block') }
    ].sort(function(a, b){
      var scoreA = performance[a.key] ? performance[a.key].score : 0;
      var scoreB = performance[b.key] ? performance[b.key].score : 0;
      if(scoreA !== scoreB) return scoreB - scoreA;
      return a.order - b.order;
    });
    var top3Index = -1;
    var trustIndex = -1;
    for(var i = 0; i < items.length; i++){
      if(items[i].key === 'top3') top3Index = i;
      if(items[i].key === 'trust') trustIndex = i;
    }
    if(top3Index !== -1 && trustIndex !== -1 && trustIndex !== top3Index + 1){
      var trustItem = items.splice(trustIndex, 1)[0];
      var insertIndex = Math.min(top3Index + 1, items.length);
      items.splice(insertIndex, 0, trustItem);
    }
    items.forEach(function(item){
      var node = item.node;
      if(!node || node === anchor) return;
      anchor.insertAdjacentElement('afterend', node);
      anchor = node;
    });
  }

  function tuneFinderExploreCopy(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    var pack = getExplorePack();
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    if(title) title.textContent = pack.title;
    if(desc) desc.textContent = pack.body;
  }

  function setHomeSecondaryState(node, enabled){
    if(!node || !node.classList || !/^(SECTION|ARTICLE|A)$/i.test(node.tagName || '')) return;
    node.classList.toggle('is-home-secondary-block', !!enabled);
    if(enabled){
      node.setAttribute('data-home-priority', 'secondary');
    } else {
      node.removeAttribute('data-home-priority');
    }
  }

  function reorderFinderSections(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    var performance = getHomeSectionPerformanceStats().sections;
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    var grid = finder.querySelector('.start-finder-grid');
    var checklist = finder.querySelector('.home-checklist-entry-block');
    var shareSummary = finder.querySelector('.home-share-summary-block');
    var pdf = finder.querySelector('.home-pdf-block');
    var freePdfValue = finder.querySelector('.home-free-pdf-value-block');
    var ebookFlow = finder.querySelector('.home-free-ebook-flow-block');
    var ebook = finder.querySelector('.home-available-premium-guides');
    var saveValue = finder.querySelector('.home-save-value-block');
    var premiumPdf = finder.querySelector('.home-premium-pdf-block');
    var support = finder.querySelector('.home-support-block');
    var groups = [
      { key:'checklists', order:0, nodes:[checklist], secondary:false },
      { key:'freePdf', order:1, nodes:[pdf, freePdfValue], secondary:false },
      { key:'ebookFlow', order:2, nodes:[ebookFlow, ebook], secondary:false },
      { key:'exploreMenu', order:3, nodes:[title, desc, grid], secondary:false },
      { key:'shareSummary', order:4, nodes:[shareSummary], secondary:true },
      { key:'saveValue', order:5, nodes:[saveValue], secondary:true },
      { key:'premiumPdf', order:6, nodes:[premiumPdf], secondary:true },
      { key:'support', order:7, nodes:[support], secondary:true }
    ];
    groups.sort(function(a, b){
      var scoreA = performance[a.key] ? performance[a.key].score : 0;
      var scoreB = performance[b.key] ? performance[b.key].score : 0;
      if(scoreA !== scoreB) return scoreB - scoreA;
      return a.order - b.order;
    }).forEach(function(group){
      var nodes = group.nodes || [];
      for(var i = 0; i < nodes.length; i++){
        var node = nodes[i];
        if(node && node.parentNode === finder) finder.appendChild(node);
        setHomeSecondaryState(node, group.secondary);
      }
    });
  }

  function ensureFinalHomeComposition(){
    var panel = document.getElementById('homePanel');
    if(!panel) return;
    removeLegacyHomeGrids(panel);
    moveFinderBelowHero(panel);
    reorderHeroIntroSections(panel);
    tuneFinderExploreCopy(panel);
    reorderFinderSections(panel);
  }

  function ensureSectionAnchors(){
    var homePanel = document.getElementById('homePanel');
    if(homePanel){
      var quickActions = homePanel.querySelector('.home-action-cards-block:not(.home-checklist-entry-block)');
      if(quickActions) quickActions.id = HOME_SECTION_IDS.quickActions;
      var shareSummary = homePanel.querySelector('.home-share-summary-block');
      if(shareSummary) shareSummary.id = HOME_SECTION_IDS.shareSummary;
      var quickChecklists = homePanel.querySelector('.home-checklist-entry-block');
      if(quickChecklists) quickChecklists.id = HOME_SECTION_IDS.quickChecklists;
      var freePdf = homePanel.querySelector('.home-free-pdf-value-block');
      if(freePdf) freePdf.id = HOME_SECTION_IDS.freePdf;
      var ebook = homePanel.querySelector('.home-available-premium-guides');
      if(ebook) ebook.id = HOME_SECTION_IDS.ebook;
    }
    var sourcesPanel = document.getElementById('sourcesPanel');
    if(sourcesPanel){
      var sourceChecklists = sourcesPanel.querySelector('.src-section-block[data-source-section="checklists"]');
      if(sourceChecklists) sourceChecklists.id = HOME_SECTION_IDS.sourceChecklists;
      var sourceSummaries = sourcesPanel.querySelector('.src-section-block[data-source-section="summaries"]');
      if(sourceSummaries) sourceSummaries.id = HOME_SECTION_IDS.sourceSummaries;
    }
  }

  function restoreHashFocus(){
    var hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '';
    if(!hash) return;
    var supported = [
      HOME_SECTION_IDS.quickActions,
      HOME_SECTION_IDS.shareSummary,
      HOME_SECTION_IDS.quickChecklists,
      HOME_SECTION_IDS.freePdf,
      HOME_SECTION_IDS.ebook,
      HOME_SECTION_IDS.sourceChecklists,
      HOME_SECTION_IDS.sourceSummaries
    ];
    if(supported.indexOf(hash) === -1) return;
    var target = document.getElementById(hash);
    if(!target) return;
    var focusKey = (window.location.pathname || '') + '#' + hash + '|' + String(currentPage || window.__CA_INITIAL_PAGE__ || '');
    if(restoreHashFocus.__lastKey === focusKey) return;
    restoreHashFocus.__lastKey = focusKey;
    if(typeof target.scrollIntoView === 'function'){
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
    target.classList.add('is-start-path-spotlight');
    setTimeout(function(){
      target.classList.remove('is-start-path-spotlight');
    }, 2200);
  }

  function syncVisitorStartPaths(){
    ensureHomeVisitorPathsSection();
    ensureFinalHomeComposition();
    ensureSectionAnchors();
    if(typeof requestAnimationFrame === 'function'){
      requestAnimationFrame(restoreHashFocus);
    } else {
      setTimeout(restoreHashFocus, 40);
    }
  }

  window.getHomeSectionPerformanceStats = getHomeSectionPerformanceStats;

  function wrapRenderStartHere(){
    var original = window.renderStartHere;
    if(typeof original !== 'function' || original.__visitorStartPathsWrapped) return;
    var wrapped = function(){
      var slug = getStartPath();
      if(!slug) return original.apply(this, arguments);
      var html = buildStartPathHtml(slug);
      return html || original.apply(this, arguments);
    };
    wrapped.__visitorStartPathsWrapped = true;
    wrapped.__visitorStartPathsOriginal = original;
    window.renderStartHere = wrapped;
    try{ renderStartHere = wrapped; }catch(err){}
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapAndSync(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__visitorStartPathsSyncWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      wrapRenderStartHere();
      syncVisitorStartPaths();
      return result;
    };
    wrapped.__visitorStartPathsSyncWrapped = true;
    wrapped.__visitorStartPathsSyncOriginal = original;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapRenderStartHere();
  wrapAndSync('renderHome');
  wrapAndSync('renderAllLessons');
  wrapAndSync('showPage');
  wrapAndSync('setLang');

  if(typeof window.addEventListener === 'function'){
    window.addEventListener('load', syncVisitorStartPaths);
  }

  syncVisitorStartPaths();
})();
