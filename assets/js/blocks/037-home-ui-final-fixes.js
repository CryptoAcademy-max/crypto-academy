(function(){
  if(typeof window === 'undefined' || typeof document === 'undefined') return;
  if(window.__homeUiFinalFixes) return;
  window.__homeUiFinalFixes = true;

  function homeFixLang(){
    var lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    return lang === 'br' ? 'pt' : lang;
  }

  function getHomeUiLocalePack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        fix:{
          finderTitle:'More ways to explore',
          finderDesc:'Open lessons, glossary, safety, FAQ, or the source library when you want a wider route.',
          safetySub:'Scam prevention and safer habits',
          faqSub:'Quick beginner questions',
          startSub:'Recommended first route for brand-new learners',
          supportTitle:'Support Crypto Academy',
          supportBody:'Crypto Academy stays free to use. If it helped you, you can support future updates here.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Search',Lessons:'Lessons',Languages:'Languages',Updates:'Updates',Safety:'Safety',Home:'Home'}
        },
        hero:{
          title:'Beginner crypto, made practical',
          desc:'Lessons, safety basics, glossary, and quick checklists for people starting from zero.'
        },
        pdf:{
          title:'Free PDF Library',
          body:'Useful free PDFs to reopen before a transfer, a first buy, or a safety check.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Choose the edition that fits you when you want a more structured review.',
          card1Title:'Crypto Academy eBook (English Edition)',
          card2Title:'Crypto Academy eBook (Korean Edition)',
          card1Body:'Crypto Academy eBook in English',
          card2Body:'Crypto Academy eBook in Korean',
          button:'View eBook',
          previewTitle:'Crypto Academy eBook Preview',
          previewBody:'A structured eBook for reviewing the concepts and practical flows beginners usually struggle with first.',
          previewPoints:[
            'Understand core concepts in a clearer order',
            'Review first-buy and transfer flows in one place',
            'Reduce wallet, address, and network mistakes'
          ]
        },
        trust:{
          title:'Why This Site Is Worth Using',
          body:'Whether you are just starting, preparing for your first buy, or trying to avoid common risks, this site helps you find the right starting point quickly.',
          cards:[
            { label:'BEGINNER FLOW', body:'A beginner-friendly flow that connects glossary, lessons, safety basics, checklists, and PDFs.' },
            { label:'PRACTICAL TOOLS', body:'Checklists and free PDFs you can reopen before a transfer, a first buy, or a safety check.' },
            { label:'DEEPER REVIEW', body:'Start with the free content, then move to the eBook when you want a more structured review.' }
          ],
          problemsTitle:'Problems this site helps solve',
          problems:[
            'The terms feel confusing',
            'You do not know what to review before your first buy',
            'You are worried about scams and safety',
            'You want quick checks instead of long reading'
          ],
          guide:'If you want something short, start with the checklists. If you want fuller explanations, use the lessons. If you want something to save and revisit, use the free PDFs. If you want a more structured review, continue with the eBook.',
          ctas:{ start:'Start Now', quick:'Quick Check', checklists:'View Checklists' }
        },
        actions:{
          title:'30-Second Action Cards',
          body:'Short practical checks for the moments when you need quick answers.',
          button:'Quick Check',
          cards:[
            {
              tag:'SEND',
              title:'5-Second Check Before Sending',
              points:['Recheck the wallet address','Recheck the network','Use a small test first if possible']
            },
            {
              tag:'SEED',
              title:'Seed Phrase Never-Do List',
              points:['Never share it with anyone','Never send it in a DM','Be suspicious if a site asks for it']
            },
            {
              tag:'SITE',
              title:'Quick Fake Website Check',
              points:['Check the domain in the address bar','Use bookmarked official links first','Do not open ad or DM links right away']
            },
            {
              tag:'BUY',
              title:'Final Check Before Your First Buy',
              points:['Confirm the platform first','Check the fees before buying','Think about where you will store it']
            }
          ]
        }
      },
      ko:{
        fix:{
          finderTitle:'더 넓게 찾아보기',
          finderDesc:'lesson, glossary, safety, FAQ, source library를 더 넓게 보고 싶다면 아래 메뉴를 열어보세요.',
          safetySub:'사기 예방과 더 안전한 습관',
          faqSub:'초보자용 빠른 질문 모음',
          startSub:'완전 초보자를 위한 추천 시작 경로',
          supportTitle:'Crypto Academy 후원하기',
          supportBody:'Crypto Academy는 무료로 열려 있습니다. 도움이 되었다면 다음 업데이트를 후원으로 응원할 수 있습니다.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'검색',Lessons:'강의',Languages:'언어',Updates:'업데이트',Safety:'보안',Home:'홈'}
        },
        hero:{
          title:'초보자를 위한 실전 암호화폐 학습',
          desc:'기초 lesson, 보안 흐름, glossary, 빠른 체크리스트를 한곳에서 짧고 선명하게 확인할 수 있습니다.'
        },
        pdf:{
          title:'무료 PDF 모음',
          body:'전송 전, 첫 구매 전, 보안 확인 전에 다시 보기 좋은 무료 PDF입니다.'
        },
        ebook:{
          title:'크립토 아카데미 전자책',
          body:'더 정리된 흐름으로 복습하고 싶을 때 맞는 언어판 전자책을 골라보세요.',
          card1Title:'영문 크립토 아카데미 전자책',
          card2Title:'한글 크립토 아카데미 전자책',
          card1Body:'영어로 읽는 크립토 아카데미 전자책',
          card2Body:'한국어로 읽는 크립토 아카데미 전자책',
          button:'전자책 보기',
          previewTitle:'크립토 아카데미 전자책 미리보기',
          previewBody:'초보자가 자주 막히는 개념과 실제 사용 흐름을 더 체계적으로 복습하는 전자책입니다.',
          previewPoints:[
            '핵심 개념을 더 차분하게 정리할 수 있습니다',
            '첫 구매와 전송 흐름을 한 번에 다시 볼 수 있습니다',
            '지갑, 주소, 네트워크 실수를 줄이는 기준을 익힐 수 있습니다'
          ]
        },
        trust:{
          title:'왜 이 사이트가 도움이 되는지 먼저 확인해보세요',
          body:'암호화폐를 처음 배우는 사람도, 첫 구매를 앞둔 사람도, 보안이 걱정되는 사람도 필요한 입구를 빠르게 찾을 수 있도록 구성했습니다.',
          cards:[
            { label:'초보 흐름', body:'용어, lesson, safety, checklist, PDF까지 초보자 기준으로 이어지는 흐름을 제공합니다.' },
            { label:'실전 도구', body:'전송 전, 첫 구매 전, 보안 확인 전에 다시 볼 수 있는 체크리스트와 무료 PDF를 함께 제공합니다.' },
            { label:'심화 복습', body:'무료 콘텐츠로 먼저 이해하고, 전자책으로 더 정리된 흐름을 이어서 볼 수 있습니다.' }
          ],
          problemsTitle:'이 사이트에서 자주 해결하는 문제',
          problems:[
            '용어가 너무 어렵다',
            '첫 구매 전에 무엇을 봐야 할지 모르겠다',
            '사기와 보안이 걱정된다',
            '길게 읽기보다 짧게 다시 확인하고 싶다'
          ],
          guide:'짧게 확인하고 싶다면 체크리스트, 차분히 배우고 싶다면 lesson, 저장해두고 다시 보고 싶다면 무료 PDF, 더 정리된 흐름으로 보고 싶다면 전자책으로 이어질 수 있습니다.',
          ctas:{ start:'지금 시작하기', quick:'빠르게 확인하기', checklists:'체크리스트 보기' }
        },
        actions:{
          title:'30초 해결 카드',
          body:'급하게 확인해야 할 핵심만 짧게 정리했습니다.',
          button:'빠른 확인',
          cards:[
            { tag:'SEND', title:'전송 전 5초 체크', points:['주소 다시 확인','네트워크 다시 확인','가능하면 소액 테스트 먼저'] },
            { tag:'SEED', title:'시드 문구 절대 금지', points:['공유하지 않기','DM으로 보내지 않기','입력 요구 사이트 의심하기'] },
            { tag:'SITE', title:'가짜 사이트 빠른 확인', points:['주소창 도메인 확인','북마크한 공식 링크 우선','광고나 DM 링크 바로 누르지 않기'] },
            { tag:'BUY', title:'첫 구매 전 마지막 확인', points:['플랫폼 확인','수수료 확인','보관 방식 생각하기'] }
          ]
        }
      },
      th:{
        fix:{
          finderTitle:'สำรวจเพิ่มเติม',
          finderDesc:'ถ้าคุณอยากดู lesson, glossary, safety, FAQ และ source library เพิ่มเติม ให้เปิดเมนูด้านล่าง',
          safetySub:'การป้องกันสแกมและนิสัยที่ปลอดภัยกว่า',
          faqSub:'คำถามด่วนสำหรับมือใหม่',
          startSub:'เส้นทางเริ่มต้นที่แนะนำสำหรับมือใหม่มาก',
          supportTitle:'สนับสนุน Crypto Academy',
          supportBody:'Crypto Academy เปิดให้ใช้งานฟรี หากเว็บไซต์นี้ช่วยคุณได้ คุณสามารถสนับสนุนการอัปเดตต่อไปได้ที่นี่',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'ค้นหา',Lessons:'บทเรียน',Languages:'ภาษา',Updates:'อัปเดต',Safety:'ความปลอดภัย',Home:'หน้าหลัก'}
        },
        hero:{
          title:'การเรียนคริปโตแบบใช้งานจริงสำหรับมือใหม่',
          desc:'รวมบทเรียนพื้นฐาน ความปลอดภัย glossary และ checklist แบบสั้นไว้ในที่เดียว'
        },
        pdf:{
          title:'คลัง PDF ฟรี',
          body:'PDF ฟรีที่เหมาะกับการกลับมาเปิดอีกครั้งก่อนโอน ก่อนซื้อครั้งแรก หรือก่อนเช็กความปลอดภัย'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'เลือกเวอร์ชันที่เหมาะกับคุณเมื่ออยากทบทวนแบบเป็นระบบมากขึ้น',
          card1Title:'Crypto Academy eBook (ฉบับภาษาอังกฤษ)',
          card2Title:'Crypto Academy eBook (ฉบับภาษาเกาหลี)',
          card1Body:'eBook ของ Crypto Academy ภาษาอังกฤษ',
          card2Body:'eBook ของ Crypto Academy ภาษาเกาหลี',
          button:'ดู eBook',
          previewTitle:'ตัวอย่าง Crypto Academy eBook',
          previewBody:'eBook ที่จัดลำดับแนวคิดและขั้นตอนใช้งานจริงสำหรับมือใหม่ให้ชัดขึ้น',
          previewPoints:[
            'เข้าใจแนวคิดหลักได้เป็นระบบมากขึ้น',
            'ทบทวนการซื้อครั้งแรกและการโอนในที่เดียว',
            'ลดความผิดพลาดเรื่อง wallet ที่อยู่ และ network'
          ]
        },
        trust:{
          title:'ดูสั้น ๆ ก่อนว่าทำไมเว็บไซต์นี้ถึงมีประโยชน์',
          body:'ไม่ว่าคุณจะเพิ่งเริ่ม เตรียมซื้อครั้งแรก หรือกังวลเรื่องความปลอดภัย เว็บไซต์นี้ถูกจัดไว้ให้หาจุดเริ่มต้นที่เหมาะได้เร็ว',
          cards:[
            { label:'เส้นทางมือใหม่', body:'เชื่อม glossary, lessons, พื้นฐานความปลอดภัย, checklist และ PDF เข้าด้วยกันสำหรับมือใหม่' },
            { label:'เครื่องมือใช้งานจริง', body:'มี checklist และ PDF ฟรีให้กลับมาเปิดก่อนโอน ก่อนซื้อ หรือก่อนเช็กความปลอดภัย' },
            { label:'ทบทวนลึกขึ้น', body:'เริ่มจากเนื้อหาฟรี แล้วค่อยไปต่อกับ eBook เมื่ออยากทบทวนแบบเป็นระบบมากขึ้น' }
          ],
          problemsTitle:'ปัญหาที่เว็บไซต์นี้ช่วยแก้ได้บ่อย',
          problems:[
            'คำศัพท์ยังสับสน',
            'ไม่รู้ว่าก่อนซื้อครั้งแรกควรดูอะไร',
            'กังวลเรื่องสแกมและความปลอดภัย',
            'อยากเช็กเร็วแทนการอ่านยาว'
          ],
          guide:'ถ้าต้องการอะไรสั้น ๆ ให้เริ่มจาก checklist ถ้าอยากเรียนแบบค่อย ๆ ให้ใช้ lesson ถ้าอยากเก็บไว้กลับมาดูให้ใช้ PDF ฟรี และถ้าอยากทบทวนแบบเป็นระบบมากขึ้นให้ไปต่อกับ eBook',
          ctas:{ start:'เริ่มเลย', quick:'เช็กด่วน', checklists:'ดูเช็กลิสต์' }
        },
        actions:{
          title:'การ์ดเช็กด่วน 30 วินาที',
          body:'รวมสิ่งสำคัญที่ต้องเช็กอย่างรวดเร็วไว้แบบสั้น',
          button:'เช็กด่วน',
          cards:[
            { tag:'SEND', title:'เช็ก 5 วินาทีก่อนโอน', points:['เช็กที่อยู่อีกครั้ง','เช็ก network อีกครั้ง','ถ้าได้ให้โอนทดสอบจำนวนน้อยก่อน'] },
            { tag:'SEED', title:'สิ่งที่ห้ามทำกับ Seed Phrase', points:['อย่าแชร์ให้ใคร','อย่าส่งทาง DM','ถ้าเว็บขอให้กรอกต้องสงสัยไว้ก่อน'] },
            { tag:'SITE', title:'เช็กเว็บไซต์ปลอมแบบเร็ว', points:['ดูโดเมนในแถบที่อยู่','ใช้ลิงก์ทางการที่บันทึกไว้ก่อน','อย่ากดลิงก์โฆษณาหรือ DM ทันที'] },
            { tag:'BUY', title:'เช็กสุดท้ายก่อนซื้อครั้งแรก', points:['ยืนยันแพลตฟอร์มก่อน','เช็กค่าธรรมเนียมก่อนซื้อ','คิดเรื่องการเก็บรักษาไว้ก่อน'] }
          ]
        }
      },
      id:{
        fix:{
          finderTitle:'Jelajahi Lebih Banyak',
          finderDesc:'Buka lesson, glossary, safety, FAQ, atau source library jika Anda ingin rute yang lebih luas.',
          safetySub:'Pencegahan scam dan kebiasaan yang lebih aman',
          faqSub:'Pertanyaan cepat untuk pemula',
          startSub:'Rute awal yang disarankan untuk pemula total',
          supportTitle:'Dukung Crypto Academy',
          supportBody:'Crypto Academy tetap gratis digunakan. Jika situs ini membantu, Anda bisa mendukung pembaruan berikutnya di sini.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Cari',Lessons:'Pelajaran',Languages:'Bahasa',Updates:'Pembaruan',Safety:'Keamanan',Home:'Beranda'}
        },
        hero:{
          title:'Belajar crypto praktis untuk pemula',
          desc:'Pelajaran dasar, keamanan, glossary, dan checklist cepat dalam satu tempat.'
        },
        pdf:{
          title:'Perpustakaan PDF Gratis',
          body:'PDF gratis yang berguna untuk dibuka lagi sebelum transfer, pembelian pertama, atau cek keamanan.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Pilih edisi yang cocok untuk Anda saat ingin meninjau materi dengan alur yang lebih rapi.',
          card1Title:'Crypto Academy eBook (Edisi Inggris)',
          card2Title:'Crypto Academy eBook (Edisi Korea)',
          card1Body:'Crypto Academy eBook dalam bahasa Inggris',
          card2Body:'Crypto Academy eBook dalam bahasa Korea',
          button:'Lihat eBook',
          previewTitle:'Pratinjau Crypto Academy eBook',
          previewBody:'eBook terstruktur untuk meninjau konsep dan alur praktis yang paling sering membuat pemula bingung.',
          previewPoints:[
            'Memahami konsep inti dengan urutan yang lebih jelas',
            'Meninjau alur pembelian pertama dan transfer di satu tempat',
            'Mengurangi kesalahan wallet, alamat, dan network'
          ]
        },
        trust:{
          title:'Lihat dulu mengapa situs ini layak dipakai',
          body:'Baik Anda baru mulai, bersiap membeli untuk pertama kali, atau ingin menghindari risiko umum, situs ini membantu Anda menemukan titik awal yang tepat dengan cepat.',
          cards:[
            { label:'ALUR PEMULA', body:'Alur ramah pemula yang menghubungkan glossary, lessons, dasar safety, checklist, dan PDF.' },
            { label:'ALAT PRAKTIS', body:'Checklist dan PDF gratis yang bisa Anda buka lagi sebelum transfer, pembelian pertama, atau cek keamanan.' },
            { label:'TINJAUAN LANJUT', body:'Mulai dari konten gratis, lalu lanjut ke eBook saat Anda ingin review yang lebih terstruktur.' }
          ],
          problemsTitle:'Masalah yang sering dibantu situs ini',
          problems:[
            'Istilah terasa membingungkan',
            'Tidak tahu apa yang harus ditinjau sebelum pembelian pertama',
            'Khawatir tentang scam dan keamanan',
            'Ingin cek cepat tanpa membaca panjang'
          ],
          guide:'Jika ingin sesuatu yang singkat, mulai dari checklist. Jika ingin penjelasan yang lebih tenang, gunakan lessons. Jika ingin sesuatu yang bisa disimpan dan dibuka lagi, gunakan PDF gratis. Jika ingin review yang lebih terstruktur, lanjutkan ke eBook.',
          ctas:{ start:'Mulai Sekarang', quick:'Cek Cepat', checklists:'Lihat Checklist' }
        },
        actions:{
          title:'Kartu Aksi 30 Detik',
          body:'Pemeriksaan singkat untuk saat Anda butuh jawaban cepat.',
          button:'Cek Cepat',
          cards:[
            { tag:'SEND', title:'Cek 5 Detik Sebelum Mengirim', points:['Periksa lagi alamat wallet','Periksa lagi network','Kirim test kecil dulu jika memungkinkan'] },
            { tag:'SEED', title:'Daftar Larangan Seed Phrase', points:['Jangan bagikan ke siapa pun','Jangan kirim lewat DM','Curigai situs yang memintanya'] },
            { tag:'SITE', title:'Cek Cepat Situs Palsu', points:['Periksa domain di address bar','Gunakan link resmi yang disimpan','Jangan langsung buka link iklan atau DM'] },
            { tag:'BUY', title:'Cek Terakhir Sebelum Pembelian Pertama', points:['Pastikan platformnya dulu','Periksa biaya sebelum membeli','Pikirkan tempat penyimpanannya'] }
          ]
        }
      },
      pt:{
        fix:{
          finderTitle:'Explorar Mais',
          finderDesc:'Abra lesson, glossary, safety, FAQ ou a source library se quiser um caminho mais amplo.',
          safetySub:'Prevencao de golpes e habitos mais seguros',
          faqSub:'Perguntas rapidas para iniciantes',
          startSub:'Primeira rota recomendada para quem esta comecando do zero',
          supportTitle:'Apoie a Crypto Academy',
          supportBody:'A Crypto Academy continua gratuita. Se ela ajudou voce, e possivel apoiar as proximas atualizacoes aqui.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Busca',Lessons:'Licoes',Languages:'Idiomas',Updates:'Atualizacoes',Safety:'Seguranca',Home:'Inicio'}
        },
        hero:{
          title:'Aprendizado pratico de cripto para iniciantes',
          desc:'Licoes basicas, seguranca, glossary e checklists rapidos em um so lugar.'
        },
        pdf:{
          title:'Biblioteca de PDF Gratis',
          body:'PDFs gratuitos para reabrir antes de uma transferencia, da primeira compra ou de uma checagem de seguranca.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Escolha a edicao que combina com voce quando quiser uma revisao mais organizada.',
          card1Title:'Crypto Academy eBook (Edicao em Ingles)',
          card2Title:'Crypto Academy eBook (Edicao em Coreano)',
          card1Body:'Crypto Academy eBook em ingles',
          card2Body:'Crypto Academy eBook em coreano',
          button:'Ver eBook',
          previewTitle:'Preview do Crypto Academy eBook',
          previewBody:'Um eBook estruturado para revisar os conceitos e fluxos praticos que mais travam iniciantes.',
          previewPoints:[
            'Entender os conceitos centrais em uma ordem mais clara',
            'Revisar primeira compra e transferencia em um so lugar',
            'Reduzir erros de wallet, endereco e network'
          ]
        },
        trust:{
          title:'Veja primeiro por que este site vale a pena',
          body:'Se voce esta comecando, se preparando para a primeira compra ou tentando evitar riscos comuns, este site ajuda voce a encontrar o ponto de partida certo rapidamente.',
          cards:[
            { label:'FLUXO INICIANTE', body:'Um fluxo para iniciantes que conecta glossary, lessons, bases de safety, checklists e PDFs.' },
            { label:'FERRAMENTAS PRATICAS', body:'Checklists e PDFs gratuitos para reabrir antes de transferir, comprar pela primeira vez ou checar seguranca.' },
            { label:'REVISAO MAIS FUNDA', body:'Comece pelo conteudo gratuito e depois avance para o eBook quando quiser uma revisao mais estruturada.' }
          ],
          problemsTitle:'Problemas que este site ajuda a resolver',
          problems:[
            'Os termos parecem confusos',
            'Voce nao sabe o que revisar antes da primeira compra',
            'Voce esta preocupado com golpes e seguranca',
            'Voce quer checks rapidos em vez de leitura longa'
          ],
          guide:'Se quiser algo curto, comece pelos checklists. Se quiser aprender com mais calma, use as lessons. Se quiser algo para salvar e rever, use os PDFs gratuitos. Se quiser uma revisao mais estruturada, siga para o eBook.',
          ctas:{ start:'Comecar Agora', quick:'Cheque Rapido', checklists:'Ver Checklists' }
        },
        actions:{
          title:'Cartoes de Acao em 30 Segundos',
          body:'Checks praticos e curtos para quando voce precisa de uma resposta rapida.',
          button:'Cheque Rapido',
          cards:[
            { tag:'SEND', title:'Check de 5 Segundos Antes de Enviar', points:['Revise o endereco da wallet','Revise a network','Use um pequeno teste antes, se possivel'] },
            { tag:'SEED', title:'O Que Nunca Fazer com a Seed Phrase', points:['Nao compartilhe com ninguem','Nao envie por DM','Desconfie de sites que a pedem'] },
            { tag:'SITE', title:'Check Rapido de Site Falso', points:['Confira o dominio na barra de endereco','Use primeiro links oficiais salvos','Nao abra links de anuncio ou DM de imediato'] },
            { tag:'BUY', title:'Check Final Antes da Primeira Compra', points:['Confirme a plataforma','Cheque as taxas antes de comprar','Pense em como vai guardar'] }
          ]
        }
      },
      tr:{
        fix:{
          finderTitle:'Daha Fazla Kesfet',
          finderDesc:'Daha genis bir rota istiyorsaniz lesson, glossary, safety, FAQ veya source libraryi acin.',
          safetySub:'Dolandiricilik onleme ve daha guvenli aliskanliklar',
          faqSub:'Yeni baslayanlar icin hizli sorular',
          startSub:'Tam yeni baslayanlar icin onerilen ilk rota',
          supportTitle:'Crypto Academyye Destek Ol',
          supportBody:'Crypto Academy ucretsiz kalir. Yardimci olduysa sonraki guncellemeleri burada destekleyebilirsiniz.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Arama',Lessons:'Dersler',Languages:'Diller',Updates:'Guncellemeler',Safety:'Guvenlik',Home:'Ana Sayfa'}
        },
        hero:{
          title:'Yeni baslayanlar icin pratik kripto ogrenimi',
          desc:'Temel lessons, guvenlik, glossary ve hizli checklistler tek yerde.'
        },
        pdf:{
          title:'Ucretsiz PDF Kutuphanesi',
          body:'Transferden, ilk alimdan veya guvenlik kontrolunden once yeniden acilabilecek ucretsiz PDFler.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Daha duzenli bir tekrar istediginizde size uyan surumu secin.',
          card1Title:'Crypto Academy eBook (Ingilizce Surum)',
          card2Title:'Crypto Academy eBook (Korece Surum)',
          card1Body:'Ingilizce Crypto Academy eBook',
          card2Body:'Korece Crypto Academy eBook',
          button:'eBooku Ac',
          previewTitle:'Crypto Academy eBook On Izleme',
          previewBody:'Yeni baslayanlarin en cok zorlandigi kavramlari ve pratik akisları daha duzenli tekrar etmeye yardim eden eBook.',
          previewPoints:[
            'Temel kavramlari daha acik bir sirayla anlamak',
            'Ilk alim ve transfer akislarini tek yerde tekrar etmek',
            'Wallet, adres ve network hatalarini azaltmak'
          ]
        },
        trust:{
          title:'Bu sitenin neden faydali oldugunu once gorun',
          body:'Ister yeni basliyor olun, ister ilk alima hazirlaniyor olun, ister yaygin risklerden kacmak isteyin, bu site dogru baslangic noktasini hizla bulmaniza yardim eder.',
          cards:[
            { label:'YENI BASLANGIC AKISI', body:'Glossary, lessons, guvenlik temelleri, checklistler ve PDFleri birbirine baglayan yeni baslayan dostu bir akis sunar.' },
            { label:'PRAKTIK ARACLAR', body:'Transferden, ilk alimdan veya guvenlik kontrolunden once yeniden acabileceginiz checklistler ve ucretsiz PDFler sunar.' },
            { label:'DAHA DERIN TEKRAR', body:'Ucretsiz icerikle baslayin, daha duzenli bir tekrar istediginizde eBooke gecin.' }
          ],
          problemsTitle:'Bu sitenin cozmeye yardim ettigi sorunlar',
          problems:[
            'Terimler karisik geliyor',
            'Ilk alimdan once neye bakilacagini bilmiyorsunuz',
            'Dolandiricilik ve guvenlik konusunda endiselisiniz',
            'Uzun okuma yerine hizli kontrol istiyorsunuz'
          ],
          guide:'Kisa bir sey istiyorsaniz checklistlerle baslayin. Daha sakin ogrenmek istiyorsaniz lessons kullanin. Kaydedip geri donmek istiyorsaniz ucretsiz PDFleri kullanin. Daha duzenli bir tekrar istiyorsaniz eBooke devam edin.',
          ctas:{ start:'Simdi Basla', quick:'Hizli Kontrol', checklists:'Checklistleri Gor' }
        },
        actions:{
          title:'30 Saniyelik Aksiyon Kartlari',
          body:'Hizli cevaplara ihtiyac duydugunuz anlar icin kisa pratik kontroller.',
          button:'Hizli Kontrol',
          cards:[
            { tag:'SEND', title:'Gondermeden Once 5 Saniyelik Kontrol', points:['Wallet adresini yeniden kontrol edin','Networku yeniden kontrol edin','Mumkunse once kucuk bir test yapin'] },
            { tag:'SEED', title:'Seed Phrase Icin Asla Yapma Listesi', points:['Kimseyle paylasmayin','DM ile gondermeyin','Bir site isterse suphelenin'] },
            { tag:'SITE', title:'Sahte Site Icin Hizli Kontrol', points:['Adres cubugundaki domaine bakin','Kayitli resmi linkleri once kullanin','Reklam veya DM linklerini hemen acmayin'] },
            { tag:'BUY', title:'Ilk Alimdan Once Son Kontrol', points:['Platformu once dogrulayin','Alimdan once ucretleri kontrol edin','Nerede saklayacaginizi dusunun'] }
          ]
        }
      },
      es:{
        fix:{
          finderTitle:'Explora Mas',
          finderDesc:'Abre lesson, glossary, safety, FAQ o la source library si quieres una ruta mas amplia.',
          safetySub:'Prevencion de estafas y habitos mas seguros',
          faqSub:'Preguntas rapidas para principiantes',
          startSub:'Primera ruta recomendada para quien empieza desde cero',
          supportTitle:'Apoya a Crypto Academy',
          supportBody:'Crypto Academy sigue siendo gratis. Si te ayudo, puedes apoyar las proximas actualizaciones aqui.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Buscar',Lessons:'Lecciones',Languages:'Idiomas',Updates:'Actualizaciones',Safety:'Seguridad',Home:'Inicio'}
        },
        hero:{
          title:'Aprendizaje practico de crypto para principiantes',
          desc:'Lecciones basicas, seguridad, glossary y checklists rapidos en un solo lugar.'
        },
        pdf:{
          title:'Biblioteca de PDF Gratis',
          body:'PDF gratis para volver a abrir antes de una transferencia, de la primera compra o de una revision de seguridad.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Elige la edicion que te encaja mejor cuando quieras un repaso mas ordenado.',
          card1Title:'Crypto Academy eBook (Edicion en Ingles)',
          card2Title:'Crypto Academy eBook (Edicion en Coreano)',
          card1Body:'Crypto Academy eBook en ingles',
          card2Body:'Crypto Academy eBook en coreano',
          button:'Ver eBook',
          previewTitle:'Vista Previa del Crypto Academy eBook',
          previewBody:'Un eBook estructurado para repasar los conceptos y flujos practicos que mas suelen costar a los principiantes.',
          previewPoints:[
            'Entender los conceptos clave en un orden mas claro',
            'Repasar primera compra y transferencias en un solo lugar',
            'Reducir errores de wallet, direccion y network'
          ]
        },
        trust:{
          title:'Mira primero por que este sitio vale la pena',
          body:'Tanto si estas empezando como si preparas tu primera compra o intentas evitar riesgos comunes, este sitio te ayuda a encontrar rapido el punto de partida correcto.',
          cards:[
            { label:'FLUJO PARA PRINCIPIANTES', body:'Un flujo pensado para principiantes que conecta glossary, lessons, bases de safety, checklists y PDF.' },
            { label:'HERRAMIENTAS PRACTICAS', body:'Checklists y PDF gratis que puedes volver a abrir antes de transferir, comprar por primera vez o revisar seguridad.' },
            { label:'REPASO MAS PROFUNDO', body:'Empieza por el contenido gratis y luego sigue con el eBook cuando quieras un repaso mas estructurado.' }
          ],
          problemsTitle:'Problemas que este sitio ayuda a resolver',
          problems:[
            'Los terminos se sienten confusos',
            'No sabes que revisar antes de tu primera compra',
            'Te preocupan las estafas y la seguridad',
            'Quieres checks rapidos en lugar de lectura larga'
          ],
          guide:'Si quieres algo corto, empieza por los checklists. Si quieres aprender con mas calma, usa las lessons. Si quieres algo para guardar y revisar despues, usa los PDF gratis. Si quieres un repaso mas estructurado, sigue con el eBook.',
          ctas:{ start:'Empezar Ahora', quick:'Chequeo Rapido', checklists:'Ver Checklists' }
        },
        actions:{
          title:'Tarjetas de Accion de 30 Segundos',
          body:'Checks practicos y cortos para cuando necesitas respuestas rapidas.',
          button:'Chequeo Rapido',
          cards:[
            { tag:'SEND', title:'Check de 5 Segundos Antes de Enviar', points:['Vuelve a revisar la direccion de la wallet','Vuelve a revisar la network','Haz primero una prueba pequena si es posible'] },
            { tag:'SEED', title:'Lista de Lo Que Nunca Hacer con la Seed Phrase', points:['No la compartas con nadie','No la envies por DM','Sospecha si un sitio la pide'] },
            { tag:'SITE', title:'Revision Rapida de Sitio Falso', points:['Comprueba el dominio en la barra','Usa primero enlaces oficiales guardados','No abras enseguida enlaces de anuncios o DM'] },
            { tag:'BUY', title:'Revision Final Antes de Tu Primera Compra', points:['Confirma primero la plataforma','Revisa las comisiones antes de comprar','Piensa donde lo vas a guardar'] }
          ]
        }
      },
      ar:{
        fix:{
          finderTitle:'استكشف المزيد',
          finderDesc:'افتح lesson وglossary وsafety وFAQ وsource library اذا اردت مسارا اوسع.',
          safetySub:'منع الاحتيال وعادات اكثر امانا',
          faqSub:'اسئلة سريعة للمبتدئين',
          startSub:'اول مسار مقترح لمن يبدأ من الصفر',
          supportTitle:'ادعم Crypto Academy',
          supportBody:'تبقى Crypto Academy مجانية. اذا افادتك، يمكنك دعم التحديثات القادمة من هنا.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'بحث',Lessons:'دروس',Languages:'اللغات',Updates:'تحديثات',Safety:'الامان',Home:'الرئيسية'}
        },
        hero:{
          title:'تعلم عملي للعملات الرقمية للمبتدئين',
          desc:'دروس اساسية وامان وglossary وقوائم سريعة في مكان واحد.'
        },
        pdf:{
          title:'مكتبة PDF مجانية',
          body:'ملفات PDF مجانية للعودة اليها قبل التحويل او قبل اول شراء او قبل فحص الامان.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'اختر النسخة التي تناسبك عندما تريد مراجعة اكثر ترتيبا.',
          card1Title:'Crypto Academy eBook (النسخة الانجليزية)',
          card2Title:'Crypto Academy eBook (النسخة الكورية)',
          card1Body:'Crypto Academy eBook باللغة الانجليزية',
          card2Body:'Crypto Academy eBook باللغة الكورية',
          button:'عرض eBook',
          previewTitle:'معاينة Crypto Academy eBook',
          previewBody:'كتاب منظم لمراجعة المفاهيم والمسارات العملية التي يتعثر فيها المبتدئون غالبا.',
          previewPoints:[
            'فهم المفاهيم الاساسية بترتيب اوضح',
            'مراجعة الشراء الاول والتحويل في مكان واحد',
            'تقليل اخطاء wallet والعنوان وnetwork'
          ]
        },
        trust:{
          title:'راجع اولا لماذا يفيدك هذا الموقع',
          body:'سواء كنت تبدأ الان او تستعد لاول شراء او تحاول تجنب المخاطر الشائعة، فهذا الموقع يساعدك على ايجاد نقطة البداية المناسبة بسرعة.',
          cards:[
            { label:'مسار المبتدئ', body:'مسار مناسب للمبتدئين يربط glossary وlessons واساسيات safety والقوائم وملفات PDF.' },
            { label:'ادوات عملية', body:'قوائم وملفات PDF مجانية يمكنك العودة اليها قبل التحويل او قبل اول شراء او قبل فحص الامان.' },
            { label:'مراجعة اعمق', body:'ابدأ بالمحتوى المجاني ثم انتقل الى eBook عندما تريد مراجعة اكثر ترتيبا.' }
          ],
          problemsTitle:'مشكلات يساعد هذا الموقع على حلها',
          problems:[
            'المصطلحات تبدو مربكة',
            'لا تعرف ماذا تراجع قبل اول شراء',
            'انت قلق من الاحتيال والامان',
            'تريد فحوصات سريعة بدلا من القراءة الطويلة'
          ],
          guide:'اذا كنت تريد شيئا قصيرا فابدأ بالقوائم. اذا كنت تريد تعلما اهدأ فاستخدم lessons. اذا كنت تريد شيئا تحفظه وتعود اليه فاستخدم ملفات PDF المجانية. واذا كنت تريد مراجعة اكثر ترتيبا فانتقل الى eBook.',
          ctas:{ start:'ابدأ الآن', quick:'فحص سريع', checklists:'عرض القوائم' }
        },
        actions:{
          title:'بطاقات اجراء في 30 ثانية',
          body:'فحوصات عملية قصيرة للحظات التي تحتاج فيها الى اجابة سريعة.',
          button:'فحص سريع',
          cards:[
            { tag:'SEND', title:'فحص 5 ثوان قبل الارسال', points:['راجع عنوان wallet مرة اخرى','راجع network مرة اخرى','ارسل مبلغا صغيرا للتجربة اذا امكن'] },
            { tag:'SEED', title:'ما لا يجب فعله مع Seed Phrase', points:['لا تشاركها مع احد','لا ترسلها في DM','اشك في اي موقع يطلبها'] },
            { tag:'SITE', title:'فحص سريع للموقع المزيف', points:['تحقق من الدومين في شريط العنوان','استخدم الروابط الرسمية المحفوظة اولا','لا تفتح روابط الاعلان او DM مباشرة'] },
            { tag:'BUY', title:'الفحص الاخير قبل اول شراء', points:['اكد المنصة اولا','راجع الرسوم قبل الشراء','فكر اين ستحتفظ بها'] }
          ]
        }
      },
      vi:{
        fix:{
          finderTitle:'Kham Pha Them',
          finderDesc:'Mo lesson, glossary, safety, FAQ, hoac source library neu ban muon mot lo trinh rong hon.',
          safetySub:'Phong tranh scam va thoi quen an toan hon',
          faqSub:'Cau hoi nhanh cho nguoi moi',
          startSub:'Lo trinh dau tien duoc goi y cho nguoi moi hoan toan',
          supportTitle:'Ung Ho Crypto Academy',
          supportBody:'Crypto Academy van mien phi. Neu no huu ich cho ban, ban co the ung ho cac cap nhat tiep theo tai day.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Tim Kiem',Lessons:'Bai Hoc',Languages:'Ngon Ngu',Updates:'Cap Nhat',Safety:'An Toan',Home:'Trang Chu'}
        },
        hero:{
          title:'Hoc crypto thuc te cho nguoi moi',
          desc:'Bai hoc co ban, an toan, glossary, va checklist nhanh trong cung mot noi.'
        },
        pdf:{
          title:'Thu Vien PDF Mien Phi',
          body:'PDF mien phi de mo lai truoc khi chuyen tien, truoc lan mua dau tien, hoac truoc khi kiem tra an toan.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Chon phien ban phu hop khi ban muon on tap theo mot luong ro rang hon.',
          card1Title:'Crypto Academy eBook (Ban Tieng Anh)',
          card2Title:'Crypto Academy eBook (Ban Tieng Han)',
          card1Body:'Crypto Academy eBook bang tieng Anh',
          card2Body:'Crypto Academy eBook bang tieng Han',
          button:'Xem eBook',
          previewTitle:'Xem Truoc Crypto Academy eBook',
          previewBody:'eBook co cau truc giup on lai cac khai niem va luong thuc te ma nguoi moi thuong gap kho.',
          previewPoints:[
            'Hieu cac khai niem cot loi theo trinh tu ro hon',
            'On lai lan mua dau tien va luong chuyen tien trong mot noi',
            'Giam loi lien quan den wallet, dia chi, va network'
          ]
        },
        trust:{
          title:'Xem nhanh vi sao trang nay dang de dung',
          body:'Du ban moi bat dau, dang chuan bi mua lan dau, hay dang muon tranh cac rui ro pho bien, trang nay giup ban tim diem bat dau phu hop mot cach nhanh hon.',
          cards:[
            { label:'LUONG CHO NGUOI MOI', body:'Mot luong hoc than thien voi nguoi moi noi glossary, lessons, safety, checklist, va PDF lai voi nhau.' },
            { label:'CONG CU THUC TE', body:'Checklist va PDF mien phi de ban mo lai truoc khi chuyen tien, mua lan dau, hoac kiem tra an toan.' },
            { label:'ON TAP SAU HON', body:'Bat dau voi noi dung mien phi, sau do chuyen sang eBook khi ban muon on tap co cau truc hon.' }
          ],
          problemsTitle:'Nhung van de trang nay thuong giup giai quyet',
          problems:[
            'Thuat ngu thay kho hieu',
            'Khong biet can xem gi truoc lan mua dau tien',
            'Lo scam va an toan',
            'Muon kiem tra nhanh hon la doc dai'
          ],
          guide:'Neu ban muon cai gi ngan gon, hay bat dau tu checklist. Neu ban muon hoc cham hon, hay dung lessons. Neu ban muon co tai lieu de luu va xem lai, hay dung PDF mien phi. Neu ban muon mot cach on tap co cau truc hon, hay tiep tuc voi eBook.',
          ctas:{ start:'Bat Dau Ngay', quick:'Kiem Tra Nhanh', checklists:'Xem Checklist' }
        },
        actions:{
          title:'The Hanh Dong 30 Giay',
          body:'Nhung buoc kiem tra ngan gon cho luc ban can cau tra loi nhanh.',
          button:'Kiem Tra Nhanh',
          cards:[
            { tag:'SEND', title:'Kiem Tra 5 Giay Truoc Khi Gui', points:['Kiem tra lai dia chi wallet','Kiem tra lai network','Neu co the hay gui mot khoan test nho truoc'] },
            { tag:'SEED', title:'Nhung Dieu Tuyet Doi Khong Lam Voi Seed Phrase', points:['Khong chia se cho ai','Khong gui qua DM','Hay nghi ngo neu co website yeu cau'] },
            { tag:'SITE', title:'Kiem Tra Nhanh Trang Web Gia', points:['Kiem tra domain tren thanh dia chi','Dung lien ket chinh thuc da luu truoc','Khong mo ngay link quang cao hoac DM'] },
            { tag:'BUY', title:'Kiem Tra Cuoi Cung Truoc Lan Mua Dau', points:['Xac nhan platform truoc','Kiem tra phi truoc khi mua','Nghi truoc ve cach luu tru'] }
          ]
        }
      },
      ha:{
        fix:{
          finderTitle:'Kara Bincike',
          finderDesc:'Bude lesson, glossary, safety, FAQ, ko source library idan kana son wata hanya mai fadi.',
          safetySub:'Kariyar damfara da halaye masu aminci',
          faqSub:'Tambayoyi masu sauri ga masu farawa',
          startSub:'Hanyar farko da aka fi ba da shawara ga sabon mai koyo',
          supportTitle:'Tallafa wa Crypto Academy',
          supportBody:'Crypto Academy tana nan kyauta. Idan ta taimaka maka, za ka iya tallafa wa sabbin sabuntawa daga nan.',
          supportButton:'Buy Me a Coffee',
          updateLabels:{Search:'Bincike',Lessons:'Darussa',Languages:'Harsuna',Updates:'Sabuntawa',Safety:'Tsaro',Home:'Gida'}
        },
        hero:{
          title:'Koyon crypto mai amfani ga masu farawa',
          desc:'Darussa na asali, tsaro, glossary, da checklist masu sauri a wuri guda.'
        },
        pdf:{
          title:'Library na PDF na Kyauta',
          body:'PDF na kyauta da za ka iya bude su kafin tura kudi, kafin sayen farko, ko kafin duba tsaro.'
        },
        ebook:{
          title:'Crypto Academy eBook',
          body:'Zabi sigar da ta dace da kai idan kana son bita mai tsari fiye da haka.',
          card1Title:'Crypto Academy eBook (Sigar Turanci)',
          card2Title:'Crypto Academy eBook (Sigar Koriya)',
          card1Body:'Crypto Academy eBook a Turanci',
          card2Body:'Crypto Academy eBook a Koriya',
          button:'Duba eBook',
          previewTitle:'Gabatarwar Crypto Academy eBook',
          previewBody:'eBook mai tsari da ke taimaka wa masu farawa su sake duba kaidoji da hanyoyin amfani na zahiri.',
          previewPoints:[
            'Fahimtar muhimman kaidoji cikin tsari mafi bayyani',
            'Sake duba sayen farko da tura kudi a wuri guda',
            'Rage kurakuran wallet, adireshi, da network'
          ]
        },
        trust:{
          title:'Duba da sauri dalilin da ya sa wannan shafi yake da amfani',
          body:'Ko kana farawa ne, ko kana shirin sayenka na farko, ko kana kokarin guje wa hadurran da suka saba, wannan shafi yana taimaka maka ka gano madaidaicin wurin farawa da sauri.',
          cards:[
            { label:'HANYAR MAI FARAWA', body:'Hanya mai sauki da ke hada glossary, lessons, safety, checklist, da PDF domin masu farawa.' },
            { label:'KAYAN AIKI', body:'Checklist da PDF na kyauta da za ka iya komawa gare su kafin tura kudi, kafin sayen farko, ko kafin duba tsaro.' },
            { label:'BITA MAI ZURFI', body:'Fara da abubuwan kyauta sannan ka wuce zuwa eBook idan kana son bita mai tsari fiye da haka.' }
          ],
          problemsTitle:'Matsalolin da wannan shafi ke yawan taimakawa warwarewa',
          problems:[
            'Kalmomin suna rikitarwa',
            'Ba ka san abin da za ka duba kafin sayenka na farko ba',
            'Kana damuwa da damfara da tsaro',
            'Kana son dubawa mai sauri maimakon dogon karatu'
          ],
          guide:'Idan kana son abu gajere, fara da checklist. Idan kana son koyo cikin nutsuwa, yi amfani da lessons. Idan kana son abin da za ka ajiye ka dawo ka duba, yi amfani da PDF na kyauta. Idan kana son bita mai tsari fiye da haka, ka ci gaba da eBook.',
          ctas:{ start:'Fara Yanzu', quick:'Duba Da Sauri', checklists:'Duba Checklist' }
        },
        actions:{
          title:'Katunan Aiki na Dakika 30',
          body:'Takaitattun dubawa masu amfani idan kana bukatar amsa mai sauri.',
          button:'Duba Da Sauri',
          cards:[
            { tag:'SEND', title:'Dubawar Sakan 5 Kafin Tura Kudi', points:['Sake duba adireshin wallet','Sake duba network','Idan zai yiwu fara da karamin test'] },
            { tag:'SEED', title:'Abin da Kada a Yi da Seed Phrase', points:['Kada ka raba shi da kowa','Kada ka tura ta DM','Ka yi zargi idan wani site ya nema'] },
            { tag:'SITE', title:'Duban Gaggawa na Shafin Bogi', points:['Duba domain a address bar','Yi amfani da official links da ka ajiye','Kada ka bude link na talla ko DM nan take'] },
            { tag:'BUY', title:'Dubawa Ta Karshe Kafin Sayen Farko', points:['Tabbatar da platform da farko','Duba kudin caji kafin saye','Ka yi tunanin yadda za ka ajiye shi'] }
          ]
        }
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeFixPack(){
    return getHomeUiLocalePack().fix || {};
  }

  function getHomeHeroCompactPack(){
    return getHomeUiLocalePack().hero || {};
  }

  function getHomePdfPack(){
    return getHomeUiLocalePack().pdf || {};
  }

  function getHomePremiumPdfPack(){
    var lang = homeFixLang();
    var packs = {
      en:{
        title:'Premium PDF Guide',
        body:'If you want something more detailed than a quick checklist, open the extended beginner PDF guide.',
        extra:'It organizes first buying, transfers, storage, and scam awareness in one clearer flow.',
        buttonEn:'View English Edition',
        buttonKo:'View Korean Edition'
      },
      ko:{
        title:'\uc720\ub8cc PDF \uac00\uc774\ub4dc',
        body:'\uc9e7\uc740 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ubcf4\ub2e4 \ub354 \uc790\uc138\ud55c \uc548\ub0b4\uac00 \ud544\uc694\ud558\ub2e4\uba74 \ud655\uc7a5\ud615 \ucd08\ubcf4\uc790 PDF\ub97c \uc5f4\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
        extra:'\uccab \uad6c\ub9e4, \uc804\uc1a1, \ubcf4\uad00, \uc0ac\uae30 \uc608\ubc29 \uae30\ucd08\ub97c \ud55c \ud750\ub984\uc73c\ub85c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.',
        buttonEn:'\uc601\ubb38\ud310 \ubcf4\uae30',
        buttonKo:'\ud55c\uae00\ud310 \ubcf4\uae30'
      },
      th:{
        title:'คู่มือ PDF แบบละเอียด',
        body:'ถ้าคุณต้องการคำอธิบายที่ละเอียดกว่าชุดเช็กลิสต์แบบสั้น ให้เปิดคู่มือ PDF สำหรับผู้เริ่มต้นฉบับเต็ม',
        extra:'รวมเรื่องการซื้อครั้งแรก การโอน การเก็บรักษา และความเสี่ยงจากสแกมไว้ในลำดับที่ชัดเจนกว่า',
        buttonEn:'ดูฉบับภาษาอังกฤษ',
        buttonKo:'ดูฉบับภาษาเกาหลี'
      },
      id:{
        title:'Panduan PDF Premium',
        body:'Jika Anda membutuhkan panduan yang lebih rinci daripada checklist singkat, buka panduan PDF pemula versi lengkap.',
        extra:'Panduan ini merangkum pembelian pertama, transfer, penyimpanan, dan kewaspadaan scam dalam alur yang lebih rapi.',
        buttonEn:'Lihat Edisi Inggris',
        buttonKo:'Lihat Edisi Korea'
      },
      pt:{
        title:'Guia PDF Premium',
        body:'Se voce quer algo mais detalhado do que um checklist curto, abra o guia PDF estendido para iniciantes.',
        extra:'Ele organiza primeira compra, transferencias, armazenamento e alertas de golpe em um fluxo mais claro.',
        buttonEn:'Ver Edicao em Ingles',
        buttonKo:'Ver Edicao em Coreano'
      },
      tr:{
        title:'Premium PDF Rehberi',
        body:'Kisa bir kontrol listesinden daha ayrintili bir rehber istiyorsaniz, genisletilmis baslangic PDF rehberini acin.',
        extra:'Ilk alim, transfer, saklama ve dolandiricilik farkindaligini daha duzenli bir akista toplar.',
        buttonEn:'Ingilizce Surumu Gor',
        buttonKo:'Korece Surumu Gor'
      },
      es:{
        title:'Guia PDF Premium',
        body:'Si quieres algo mas detallado que una lista rapida, abre la guia PDF ampliada para principiantes.',
        extra:'Resume primera compra, transferencias, almacenamiento y alertas de fraude en un flujo mas ordenado.',
        buttonEn:'Ver Edicion en Ingles',
        buttonKo:'Ver Edicion en Coreano'
      },
      ar:{
        title:'دليل PDF مفصل',
        body:'إذا كنت تريد شرحا أكثر تفصيلا من قائمة مراجعة قصيرة، فافتح دليل PDF الموسع للمبتدئين.',
        extra:'ينظم الشراء الاول والتحويل والحفظ والتنبيه من الاحتيال في مسار اوضح.',
        buttonEn:'عرض النسخة الإنجليزية',
        buttonKo:'عرض النسخة الكورية'
      },
      vi:{
        title:'Huong Dan PDF Chuyen Sau',
        body:'Neu ban can noi dung chi tiet hon mot checklist ngan, hay mo bo huong dan PDF day du danh cho nguoi moi bat dau.',
        extra:'Tai lieu nay sap xep viec mua lan dau, chuyen tien, luu tru va canh bao lua dao theo mot luong ro rang hon.',
        buttonEn:'Xem Ban Tieng Anh',
        buttonKo:'Xem Ban Tieng Han'
      },
      ha:{
        title:'Jagorar PDF Mai Zurfi',
        body:'Idan kana son bayani mafi zurfi fiye da gajeren checklist, bude cikakken jagorar PDF na masu farawa.',
        extra:'Yana tsara saye na farko, tura kudi, adanawa, da gargadin damfara cikin hanya mafi tsari.',
        buttonEn:'Duba Sigar Turanci',
        buttonKo:'Duba Sigar Koriya'
      }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeAvailablePremiumGuidesPack(){
    return getHomeUiLocalePack().ebook || {};
  }

  function getHomeTrustValuePack(){
    return getHomeUiLocalePack().trust || {};
  }

  function getHomeActionCardsPack(){
    var pack = getHomeUiLocalePack().actions || {};
    var cards = Array.isArray(pack.cards) ? pack.cards.slice(0) : [];
    var hrefs = [
      (window.__CA_BASE_PREFIX__ || './') + 'lesson/transfer/index.html',
      (window.__CA_BASE_PREFIX__ || './') + 'lesson/scams/index.html',
      (window.__CA_BASE_PREFIX__ || './') + 'safety/index.html',
      (window.__CA_BASE_PREFIX__ || './') + 'lesson/first-buy/index.html'
    ];
    for(var i = 0; i < cards.length; i++){
      cards[i] = Object.assign({}, cards[i], { href:hrefs[i] || '#' });
    }
    return {
      title:pack.title || '',
      body:pack.body || '',
      button:pack.button || '',
      cards:cards
    };
  }

  var homePdfFiles = [
    {code:'en', label:'EN PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-en.pdf'},
    {code:'ko', label:'KO PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ko.pdf'},
    {code:'th', label:'TH PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-th.pdf'},
    {code:'id', label:'ID PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-id.pdf'},
    {code:'pt', label:'PT PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-pt.pdf'},
    {code:'br', label:'PT-BR PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-br.pdf'},
    {code:'tr', label:'TR PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-tr.pdf'},
    {code:'es', label:'ES PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-es.pdf'},
    {code:'ar', label:'AR PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ar.pdf'},
    {code:'vi', label:'VI PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-vi.pdf'},
    {code:'ha', label:'HA PDF', href:(window.__CA_BASE_PREFIX__ || './') + 'pdf/crypto-safety-guide-ha.pdf'}
  ];

  function getHomeUpdateLabelKeys(date){
    var byDate = {
      '2026-04-12':['Search','Safety','Updates'],
      '2026-04-11':['Home','Lessons','Updates'],
      '2026-04-10':['Search','Lessons','Safety'],
      '2026-04-09':['Languages','Search','Updates']
    };
    return byDate[date] || ['Updates'];
  }

  function buildHomeUpdateMetaHtml(date){
    var pack = getHomeFixPack();
    var keys = getHomeUpdateLabelKeys(date);
    var html = '<div class="home-recent-update-meta">';
    for(var i = 0; i < keys.length; i++){
      var key = keys[i];
      var text = (pack.updateLabels && pack.updateLabels[key]) || key;
      html += '<span class="home-recent-update-tag">' + text + '</span>';
    }
    html += '</div>';
    return html;
  }

  function buildHomeTrustValueHtml(){
    var pack = getHomeTrustValuePack();
    var cards = Array.isArray(pack.cards) ? pack.cards : [];
    var problems = Array.isArray(pack.problems) ? pack.problems : [];
    var base = window.__CA_BASE_PREFIX__ || './';
    return ''
      + '<section class="home-identity-block">'
      +   '<div class="home-identity-title">' + (pack.title || 'Why This Site Is Worth Using') + '</div>'
      +   '<div class="home-situation-body">' + (pack.body || '') + '</div>'
      +   '<div class="home-identity-grid">' + cards.map(function(card){
            return ''
              + '<div class="home-identity-item">'
              +   '<span class="home-identity-label">' + (card.label || 'VALUE') + '</span>'
              +   '<div class="home-identity-copy">' + (card.body || '') + '</div>'
              + '</div>';
          }).join('') + '</div>'
      +   '<div class="home-identity-footer">'
      +     '<div class="home-identity-problems">'
      +       '<div class="home-identity-problems-title">' + (pack.problemsTitle || '') + '</div>'
      +       '<ul class="home-identity-list">' + problems.map(function(item){
                return '<li>' + item + '</li>';
              }).join('') + '</ul>'
      +     '</div>'
      +     '<div class="home-identity-guide">' + (pack.guide || '') + '</div>'
      +     '<div class="home-identity-cta-row">'
      +       '<a class="home-identity-cta" data-home-track="home.trust.start" data-home-track-label="Trust section start" href="' + base + 'start/beginners/index.html">' + ((pack.ctas && pack.ctas.start) || 'Start Now') + '</a>'
      +       '<a class="home-identity-cta" data-home-track="home.trust.quickcheck" data-home-track-label="Trust section quick check" href="' + base + 'index.html#home-30-second-cards-section">' + ((pack.ctas && pack.ctas.quick) || 'Quick Check') + '</a>'
      +       '<a class="home-identity-cta" data-home-track="home.trust.checklists" data-home-track-label="Trust section checklists" href="' + base + 'index.html#home-quick-checklists-section">' + ((pack.ctas && pack.ctas.checklists) || 'View Checklists') + '</a>'
      +     '</div>'
      +   '</div>'
      + '</section>';
  }

  var HOME_CONVERSION_STORAGE_KEY = 'cryptoAcademyHomeConversionStats';

  function readHomeConversionState(){
    try{
      var raw = localStorage.getItem(HOME_CONVERSION_STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      if(parsed && typeof parsed === 'object') return parsed;
    }catch(err){}
    return { counts:{}, labels:{}, lastClickedKey:'', lastClickedAt:'' };
  }

  function writeHomeConversionState(state){
    try{
      localStorage.setItem(HOME_CONVERSION_STORAGE_KEY, JSON.stringify(state || { counts:{}, labels:{} }));
    }catch(err){}
  }

  function trackHomeConversionClick(key, label){
    if(!key) return 0;
    var state = readHomeConversionState();
    if(!state.counts || typeof state.counts !== 'object') state.counts = {};
    if(!state.labels || typeof state.labels !== 'object') state.labels = {};
    state.counts[key] = Number(state.counts[key] || 0) + 1;
    if(label) state.labels[key] = label;
    state.lastClickedKey = key;
    state.lastClickedAt = new Date().toISOString();
    writeHomeConversionState(state);
    return state.counts[key];
  }

  function getHomeConversionStats(){
    var state = readHomeConversionState();
    var counts = state.counts || {};
    var labels = state.labels || {};
    var keys = Object.keys(counts).sort(function(a, b){
      return Number(counts[b] || 0) - Number(counts[a] || 0);
    });
    var list = [];
    var summary = {};
    for(var i = 0; i < keys.length; i++){
      var key = keys[i];
      var item = {
        key:key,
        label:labels[key] || key,
        count:Number(counts[key] || 0)
      };
      list.push(item);
      summary[item.label] = item.count;
    }
    return {
      counts:counts,
      labels:labels,
      lastClickedKey:state.lastClickedKey || '',
      lastClickedAt:state.lastClickedAt || '',
      list:list,
      summary:summary
    };
  }

  function resetHomeConversionStats(){
    writeHomeConversionState({ counts:{}, labels:{}, lastClickedKey:'', lastClickedAt:'' });
  }

  function ensureHomeConversionTracking(panel){
    if(!panel || panel.__homeConversionTrackingBound) return;
    panel.addEventListener('click', function(event){
      var target = event.target && event.target.closest ? event.target.closest('[data-home-track]') : null;
      if(!target || !panel.contains(target)) return;
      trackHomeConversionClick(
        target.getAttribute('data-home-track'),
        target.getAttribute('data-home-track-label') || target.getAttribute('data-home-track')
      );
    }, true);
    panel.__homeConversionTrackingBound = true;
  }

  window.trackHomeConversionClick = trackHomeConversionClick;
  window.getHomeConversionStats = getHomeConversionStats;
  window.resetHomeConversionStats = resetHomeConversionStats;

  function getCompletedSetFinal(){
    try{
      return JSON.parse(localStorage.getItem('cryptoAcademyCompleted') || '[]');
    }catch(err){
      return [];
    }
  }

  function hasCompletedLessonFinal(list, index){
    if(!list || !list.length) return false;
    for(var i = 0; i < list.length; i++){
      if(Number(list[i]) === Number(index)) return true;
    }
    return false;
  }

  function getLastVisitFinal(){
    try{
      return JSON.parse(localStorage.getItem('cryptoAcademyLastVisit') || 'null');
    }catch(err){
      return null;
    }
  }

  function getNextIncompleteLessonAfterFinal(startIndex, completedList, total){
    for(var i = Math.max(0, startIndex + 1); i < total; i++){
      if(!hasCompletedLessonFinal(completedList, i)) return i;
    }
    return -1;
  }

  function getFirstIncompleteLessonFinal(completedList, total){
    for(var i = 0; i < total; i++){
      if(!hasCompletedLessonFinal(completedList, i)) return i;
    }
    return -1;
  }

  function getContinueLessonIndexFinal(){
    var total = (typeof getTotalLessons === 'function') ? getTotalLessons() : 7;
    var completedList = getCompletedSetFinal();
    var lastVisit = getLastVisitFinal();
    if(lastVisit && lastVisit.type === 'lesson' && typeof lastVisit.index === 'number' && lastVisit.index >= 0 && lastVisit.index < total){
      if(!hasCompletedLessonFinal(completedList, lastVisit.index)) return lastVisit.index;
      var afterLast = getNextIncompleteLessonAfterFinal(lastVisit.index, completedList, total);
      if(afterLast !== -1) return afterLast;
      return lastVisit.index;
    }
    var firstIncomplete = getFirstIncompleteLessonFinal(completedList, total);
    if(firstIncomplete !== -1) return firstIncomplete;
    return 0;
  }

  function getLessonEntryFromPoolFinal(pool, index){
    return (pool && pool[index]) ? pool[index] : null;
  }

  function getTranslatedNavLessonTitleFinal(index){
    if(typeof t !== 'function') return '';
    var key = 'nav.l' + (index + 1);
    var value = t(key);
    if(!value || value === key) return '';
    return String(value).trim();
  }

  function getLessonTitleFinal(index){
    var lang = homeFixLang();
    var localizedLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons[lang] : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides[lang] : null, index);
    var englishLesson =
      getLessonEntryFromPoolFinal(typeof lessons !== 'undefined' && lessons ? lessons.en : null, index) ||
      getLessonEntryFromPoolFinal(typeof lessonOverrides !== 'undefined' && lessonOverrides ? lessonOverrides.en : null, index);
    var localizedTitle = localizedLesson && localizedLesson.title ? String(localizedLesson.title).trim() : '';
    var englishTitle = englishLesson && englishLesson.title ? String(englishLesson.title).trim() : '';
    var navTitle = getTranslatedNavLessonTitleFinal(index);

    if(localizedTitle){
      if(lang !== 'en' && englishTitle && localizedTitle === englishTitle && navTitle && navTitle !== englishTitle){
        return navTitle;
      }
      return localizedTitle;
    }
    if(navTitle) return navTitle;
    if(englishTitle) return englishTitle;
    return 'Lesson ' + (index + 1);
  }

  window.getLessonTitleFinal = getLessonTitleFinal;

  window.openContinueLessonFinal = function(){
    var index = getContinueLessonIndexFinal();
    if(typeof showLesson === 'function') showLesson(index);
  };

  function getLessonSevenRoadmapIconHtml(){
    return '<span class="lesson7-roadmap-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z"></path><path d="M12 8v5"></path><path d="M12 16h.01"></path></svg></span>';
  }

  function getHomeMenuItemsFinal(){
    var pack = getHomeFixPack();
    var items = [];
    for(var i = 0; i < 7; i++){
      items.push({
        type:(i === 6 ? 'scams' : 'lesson'),
        badge:'L' + (i + 1),
        title:typeof t === 'function' ? t('nav.l' + (i + 1)) : ('Lesson ' + (i + 1)),
        desc:typeof t === 'function' ? (t('nav.l' + (i + 1) + 'sub') || '') : '',
        trackKey:'home.menu.lesson.' + (i + 1),
        trackLabel:'Menu lesson ' + (i + 1),
        action:(function(idx){ return function(){ if(typeof showLesson === 'function') showLesson(idx); }; })(i)
      });
    }
    items.push({
      type:'page',
      badge:'G',
      title:typeof t === 'function' ? t('nav.glossary') : 'Glossary',
      desc:typeof t === 'function' ? (t('nav.glossarysub') || '') : '',
      trackKey:'home.menu.glossary',
      trackLabel:'Menu glossary',
      action:function(){ if(typeof showPage === 'function') showPage('glossary'); }
    });
    items.push({
      type:'safety',
      badge:'S',
      title:typeof t === 'function' ? t('nav.safety') : 'Safety',
      desc:pack.safetySub,
      trackKey:'home.menu.safety',
      trackLabel:'Menu safety',
      action:function(){ if(typeof showPage === 'function') showPage('safety'); }
    });
    items.push({
      type:'page',
      badge:'SRC',
      title:typeof t === 'function' ? t('nav.sources') : 'Source Library',
      desc:typeof t === 'function' ? (t('nav.sourcesub') || '') : '',
      trackKey:'home.menu.sources',
      trackLabel:'Menu sources',
      action:function(){ if(typeof showPage === 'function') showPage('sources'); }
    });
    items.push({
      type:'page',
      badge:'FAQ',
      title:typeof t === 'function' ? t('nav.faqPage') : 'FAQ',
      desc:pack.faqSub,
      trackKey:'home.menu.faq',
      trackLabel:'Menu faq',
      action:function(){ if(typeof showPage === 'function') showPage('faq'); }
    });
    return items;
  }

  function buildHomeSupportBlockHtml(){
    var pack = getHomeFixPack();
    return ''
      + '<section class="home-support-block">'
      +   '<div class="home-support-copy">'
      +     '<div class="home-support-title">' + (pack.supportTitle || 'Support Crypto Academy') + '</div>'
      +     '<div class="home-support-body">' + (pack.supportBody || 'Crypto Academy stays free to use. If it helped you, you can support future updates here.') + '</div>'
      +   '</div>'
      +   '<a class="home-support-btn" data-home-track="home.support.buymeacoffee" data-home-track-label="Support Buy Me a Coffee" href="https://buymeacoffee.com/beenetworkkorea" target="_blank" rel="noopener noreferrer">' + (pack.supportButton || 'Buy Me a Coffee') + '</a>'
      + '</section>';
  }

  function buildSourceSupportBlockHtml(){
    var pack = getHomeFixPack();
    return ''
      + '<div class="src-section-block src-support-carryover-block" data-source-section="supportNote" data-source-group="supportNote">'
      +   '<div class="src-section-heading">' + (pack.supportTitle || 'Support Crypto Academy') + '</div>'
      +   '<p class="src-group-desc">' + (pack.supportBody || 'Crypto Academy stays free to use. If it helped you, you can support future updates here.') + '</p>'
      +   '<div class="src-actions"><a class="src-action-btn" href="https://buymeacoffee.com/beenetworkkorea" target="_blank" rel="noopener noreferrer">' + (pack.supportButton || 'Buy Me a Coffee') + '</a></div>'
      + '</div>';
  }

  function buildHomePdfGuidesHtml(){
    var pack = getHomePdfPack();
    var linksHtml = '';
    for(var i = 0; i < homePdfFiles.length; i++){
      var item = homePdfFiles[i];
      linksHtml += '<a class="home-pdf-link" data-home-track="home.pdf.library.' + item.code + '" data-home-track-label="Free PDF ' + item.code.toUpperCase() + '" href="' + item.href + '" target="_blank" rel="noopener noreferrer"><span>' + item.label + '</span><span class="home-pdf-link-tag">PDF</span></a>';
    }
    return ''
      + '<section class="home-pdf-block">'
      +   '<div class="home-pdf-title">' + (pack.title || 'Free PDF Guides') + '</div>'
      +   '<div class="home-pdf-body">' + (pack.body || 'Open the free checklist PDFs when you want a quick review.') + '</div>'
      +   '<div class="home-pdf-grid">' + linksHtml + '</div>'
      + '</section>';
  }

  function buildHomePremiumPdfHtml(){
    var pack = getHomePremiumPdfPack();
    return ''
      + '<section class="home-premium-pdf-block">'
      +   '<div class="home-premium-pdf-title">' + (pack.title || 'Premium PDF Guide') + '</div>'
      +   '<div class="home-premium-pdf-body">' + (pack.body || 'If you want something more detailed than a quick checklist, you can explore the extended beginner guidebook in PDF format.') + '</div>'
      +   '<div class="home-premium-pdf-extra">' + (pack.extra || 'It covers first buying, transfers, storage, and scam awareness in a more structured way.') + '</div>'
      +   '<div class="home-premium-pdf-actions">'
      +     '<a class="home-premium-pdf-btn" data-home-track="home.premiumpdf.english" data-home-track-label="Premium PDF English" href="https://buymeacoffee.com/beenetworkkorea/e/528650" target="_blank" rel="noopener noreferrer">' + (pack.buttonEn || 'View English Edition') + '</a>'
      +     '<a class="home-premium-pdf-btn" data-home-track="home.premiumpdf.korean" data-home-track-label="Premium PDF Korean" href="https://buymeacoffee.com/beenetworkkorea/e/528662" target="_blank" rel="noopener noreferrer">' + (pack.buttonKo || 'View Korean Edition') + '</a>'
      +   '</div>'
      + '</section>';
  }

  function buildHomeAvailablePremiumGuidesHtml(){
    var pack = getHomeAvailablePremiumGuidesPack();
    var previewHtml = '<div class="home-ebook-preview-box">'
      + '<div class="home-ebook-preview-title">' + (pack.previewTitle || 'Crypto Academy eBook Preview') + '</div>'
      + '<div class="home-ebook-preview-body">' + (pack.previewBody || '') + '</div>';
    if(pack.previewPoints && pack.previewPoints.length){
      previewHtml += '<ul class="home-ebook-preview-list">';
      for(var i = 0; i < pack.previewPoints.length; i++){
        previewHtml += '<li>' + pack.previewPoints[i] + '</li>';
      }
      previewHtml += '</ul>';
    }
    previewHtml += '</div>';
    return ''
      + '<section class="home-available-premium-guides" id="home-crypto-ebook-section">'
      +   '<div class="home-available-premium-guides-title">' + (pack.title || 'Crypto Academy eBook') + '</div>'
      +   '<div class="home-available-premium-guides-body">' + (pack.body || '') + '</div>'
      +   previewHtml
      +   '<div class="home-available-premium-guides-grid">'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card1Title || '') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card1Body || '') + '</div>'
      +       '<a class="home-premium-pdf-btn" data-home-track="home.ebook.english" data-home-track-label="eBook English edition" href="https://buymeacoffee.com/BeeNetworkKorea/e/532817" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View eBook') + '</a>'
      +     '</article>'
      +     '<article class="home-available-premium-guide-card">'
      +       '<div class="home-available-premium-guide-card-title">' + (pack.card2Title || '') + '</div>'
      +       '<div class="home-available-premium-guide-card-body">' + (pack.card2Body || '') + '</div>'
      +       '<a class="home-premium-pdf-btn" data-home-track="home.ebook.korean" data-home-track-label="eBook Korean edition" href="https://buymeacoffee.com/BeeNetworkKorea/e/532815" target="_blank" rel="noopener noreferrer">' + (pack.button || 'View eBook') + '</a>'
      +     '</article>'
      +   '</div>'
      + '</section>';
  }

  function getHomeActionCardVisualKey(index, card){
    var tag = String(card && card.tag || '').toUpperCase();
    if(tag === 'SEND') return 'send';
    if(tag === 'SEED') return 'seed';
    if(tag === 'SITE') return 'site';
    if(tag === 'BUY') return 'buy';
    return ['send','seed','site','buy'][index] || 'send';
  }

  function getHomeActionBadgePack(){
    var lang = homeFixLang();
    var packs = {
      en:{ send:'Must Review', seed:'Seed Safety', site:'Site Check', buy:'First Buy' },
      ko:{ send:'꼭 확인', seed:'시드 보안', site:'사이트 확인', buy:'첫 구매' },
      th:{ send:'ต้องดู', seed:'ความปลอดภัย Seed', site:'เช็กเว็บไซต์', buy:'ซื้อครั้งแรก' },
      id:{ send:'Wajib Cek', seed:'Keamanan Seed', site:'Cek Situs', buy:'Beli Pertama' },
      pt:{ send:'Revisao', seed:'Seguranca Seed', site:'Verificar Site', buy:'Primeira Compra' },
      tr:{ send:'Gerekli Kontrol', seed:'Seed Guvenligi', site:'Site Kontrolu', buy:'Ilk Alim' },
      es:{ send:'Revision Clave', seed:'Seguridad Seed', site:'Revisar Sitio', buy:'Primera Compra' },
      ar:{ send:'مراجعة مهمة', seed:'أمان العبارة', site:'فحص الموقع', buy:'الشراء الأول' },
      vi:{ send:'Can Xem Lai', seed:'Bao Ve Seed', site:'Kiem Tra Web', buy:'Lan Mua Dau' },
      ha:{ send:'A Duba', seed:'Tsaron Seed', site:'Duba Shafi', buy:'Sayan Farko' }
    };
    packs.br = packs.pt;
    return packs[lang] || packs.en;
  }

  function getHomeActionStatePack(){
    if(typeof window.__CA_HOME_CARD_STATE_PACK__ === 'function'){
      return window.__CA_HOME_CARD_STATE_PACK__();
    }
    var lang = homeFixLang();
    var packs = {
      en:{
        labels:{
          recommended:'Recommended',
          quickStart:'Quick Start',
          goodToday:'Good for Today',
          revisitedOften:'Revisited Often',
          checklistLinked:'Checklist Linked',
          pdfAvailable:'PDF Available',
          ebookConnected:'eBook Connected',
          safetyEssential:'Safety Essential'
        },
        hints:{
          actionSend:'Can be reviewed again with a free PDF.',
          actionSeed:'Leads into a stronger safety checklist.',
          actionSite:'Useful before opening a login page.',
          actionBuy:'Pairs well with a deeper eBook review.'
        }
      },
      ko:{
        labels:{
          recommended:'\ucd94\ucc9c',
          quickStart:'\ube60\ub978 \uc2dc\uc791',
          goodToday:'\uc624\ub298 \ubcf4\uae30 \uc88b\uc74c',
          revisitedOften:'\uc790\uc8fc \ub2e4\uc2dc \ubd04',
          checklistLinked:'\uccb4\ud06c\ub9ac\uc2a4\ud2b8 \uc5f0\uacb0',
          pdfAvailable:'PDF \uc788\uc74c',
          ebookConnected:'\uc804\uc790\ucc45 \uc5f0\uacc4',
          safetyEssential:'\ubcf4\uc548 \ud544\uc218'
        },
        hints:{
          actionSend:'\ubb34\ub8cc PDF\ub85c \ub2e4\uc2dc \ubcf5\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
          actionSeed:'\ub354 \uac15\ud55c \ubcf4\uc548 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub85c \uc774\uc5b4\uc9d1\ub2c8\ub2e4.',
          actionSite:'\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub97c \uc5f4\uae30 \uc804\uc5d0 \ubcf4\uae30 \uc88b\uc2b5\ub2c8\ub2e4.',
          actionBuy:'\uc804\uc790\ucc45 \uc2ec\ud654 \ubcf5\uc2b5\uacfc \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc5f0\uacb0\ub429\ub2c8\ub2e4.'
        }
      }
    };
    return packs[lang] || packs.en;
  }

  function buildHomeActionStatusRow(keys){
    var pack = getHomeActionStatePack();
    var labels = pack.labels || {};
    var list = Array.isArray(keys) ? keys : [];
    if(!list.length) return '';
    return '<div class="home-card-status-row">' + list.map(function(key){
      return '<span class="home-card-status-chip" data-status-key="' + escapeHtml(key) + '">' + escapeHtml(labels[key] || key) + '</span>';
    }).join('') + '</div>';
  }

  function buildHomeActionHint(text){
    if(!text) return '';
    return '<div class="home-card-hint">' + escapeHtml(text) + '</div>';
  }

  function getHomeActionStateMeta(key){
    if(typeof window.__CA_HOME_QUICK_ACTION_STATE_META__ === 'function'){
      return window.__CA_HOME_QUICK_ACTION_STATE_META__(key);
    }
    var hints = getHomeActionStatePack().hints || {};
    var map = {
      send:{ states:['revisitedOften','pdfAvailable'], hint:hints.actionSend || '' },
      seed:{ states:['safetyEssential','checklistLinked'], hint:hints.actionSeed || '' },
      site:{ states:['safetyEssential','goodToday'], hint:hints.actionSite || '' },
      buy:{ states:['goodToday','ebookConnected'], hint:hints.actionBuy || '' }
    };
    return map[key] || { states:[], hint:'' };
  }

  function getHomeActionIconSvg(key){
    if(key === 'send'){
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h12"></path><path d="M12 6l6 6-6 6"></path><path d="M6 6v12"></path></svg>';
    }
    if(key === 'seed'){
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="2"></rect><path d="M9 11V8a3 3 0 0 1 6 0v3"></path><path d="M12 15v2"></path></svg>';
    }
    if(key === 'site'){
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 9h18"></path><path d="M8 14l2 2 5-5"></path></svg>';
    }
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M9.5 12.5l1.8 1.8 3.7-4"></path></svg>';
  }

  function buildHomeActionCardsHtml(){
    var pack = getHomeActionCardsPack();
    var badgePack = getHomeActionBadgePack();
    var cards = pack.cards || [];
    var trackKeys = ['home.quickcards.transfer','home.quickcards.seedphrase','home.quickcards.fakewebsite','home.quickcards.firstbuy'];
    var trackLabels = ['30-second transfer','30-second seed phrase','30-second fake website','30-second first buy'];
    var html = ''
      + '<section id="home-30-second-cards-section" class="home-fast-actions-block home-action-cards-block">'
      +   '<div class="home-action-cards-title">' + (pack.title || '30-Second Action Cards') + '</div>'
      +   '<div class="home-action-cards-body">' + (pack.body || '') + '</div>'
      +   '<div class="home-share-summary-grid">';
    for(var i = 0; i < cards.length; i++){
      var card = cards[i];
      var visualKey = getHomeActionCardVisualKey(i, card);
      var badge = badgePack[visualKey] || badgePack.send || 'Must Review';
      var stateMeta = getHomeActionStateMeta(visualKey);
      html += ''
        + '<a class="home-share-summary-card home-action-card" data-card-tone="' + visualKey + '" data-home-track="' + (trackKeys[i] || ('home.quickcards.' + i)) + '" data-home-track-label="' + (trackLabels[i] || ('30-second card ' + i)) + '" href="' + (card.href || '#') + '">'
        +   '<div class="home-card-visual-row">'
        +     '<span class="home-card-icon" aria-hidden="true">' + getHomeActionIconSvg(visualKey) + '</span>'
        +     '<span class="home-situation-tag">' + escapeHtml(card.tag || 'GO') + '</span>'
        +     '<span class="home-card-badge">' + escapeHtml(badge) + '</span>'
        +   '</div>'
        +   '<div class="home-card-copy">'
        +     '<div class="home-share-summary-title home-action-card-title">' + escapeHtml(card.title || '') + '</div>'
        +     buildHomeActionStatusRow(stateMeta.states)
        +     '<ul class="home-action-card-list">';
      var points = card.points || [];
      for(var j = 0; j < points.length; j++){
        html += '<li>' + escapeHtml(points[j]) + '</li>';
      }
      html += ''
        +     '</ul>'
        +     buildHomeActionHint(stateMeta.hint)
        +   '</div>'
        +   '<div class="home-card-footer">'
        +     '<span class="home-visitor-path-cta home-card-footer-cta">' + escapeHtml(pack.button || 'Quick Check') + '</span>'
        +   '</div>'
        + '</a>';
    }
    html += ''
      +   '</div>'
      + '</section>';
    return html;
  }

  window.buildHomeActionCardsHtmlFinal = buildHomeActionCardsHtml;

  function queryAllWithin(root, selector){
    if(!root || !root.querySelectorAll) return [];
    var found = root.querySelectorAll(selector);
    var list = [];
    for(var i = 0; i < found.length; i++) list.push(found[i]);
    return list;
  }

  function removeNodes(nodes, parent){
    for(var i = 0; i < nodes.length; i++){
      var node = nodes[i];
      if(!parent || node.parentNode === parent) node.remove();
    }
  }

  function replaceOrInsert(parent, selector, html, insertFn){
    if(!parent) return null;
    var current = parent.querySelector(selector);
    if(!current){
      var host = document.createElement('div');
      host.innerHTML = html;
      var fresh = host.firstElementChild;
      if(!fresh) return null;
      insertFn(fresh);
      return fresh;
    }
    var swap = document.createElement('div');
    swap.innerHTML = html;
    var next = swap.firstElementChild;
    if(!next) return current;
    current.replaceWith(next);
    return next;
  }

  function applyHomeHeroCompactCopy(panel){
    var hero = panel && panel.querySelector ? panel.querySelector('.home-hero') : null;
    if(!hero) return;
    var pack = getHomeHeroCompactPack();
    var title = hero.querySelector('.home-title');
    var desc = hero.querySelector('.home-desc');
    if(title && pack.title) title.textContent = pack.title;
    if(desc && pack.desc) desc.textContent = pack.desc;
  }

  function enhanceHomeRecentUpdatesFinal(panel){
    var items = queryAllWithin(panel, '.home-recent-update-item');
    for(var i = 0; i < items.length; i++){
      var item = items[i];
      var dateEl = item.querySelector('.home-recent-update-date');
      if(!dateEl) continue;
      var date = (dateEl.textContent || '').trim();
      var oldMeta = item.querySelector('.home-recent-update-meta');
      if(oldMeta) oldMeta.remove();
      dateEl.insertAdjacentHTML('afterend', buildHomeUpdateMetaHtml(date));
    }
  }

  function syncContinueCardFinal(panel){
    var card = panel.querySelector('.continue-card');
    if(!card) return;
    var targetIndex = getContinueLessonIndexFinal();
    card.removeAttribute('onclick');
    card.onclick = function(event){
      if(event){
        event.preventDefault();
        event.stopPropagation();
      }
      window.openContinueLessonFinal();
      return false;
    };
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.onkeydown = function(event){
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        window.openContinueLessonFinal();
      }
    };
    var sub = card.querySelector('.continue-sub');
    if(sub){
      var baseText = sub.textContent || '';
      var prefix = baseText;
      var splitAt = prefix.indexOf(' - ');
      if(splitAt === -1) splitAt = prefix.indexOf(' -> ');
      if(splitAt === -1) splitAt = prefix.indexOf(' \u2192 ');
      if(splitAt !== -1) prefix = prefix.slice(0, splitAt);
      prefix = prefix.trim();
      if(!prefix) prefix = baseText.trim();
      sub.textContent = prefix + ' - ' + getLessonTitleFinal(targetIndex);
    }
  }

  function ensureRoadmapLessonSevenIconFinal(panel){
    var cards = queryAllWithin(panel, '.roadmap-card');
    if(cards.length < 7) return;
    var card = cards[6];
    if(card && !card.querySelector('.lesson7-roadmap-icon')){
      var day = card.querySelector('.roadmap-day');
      if(day) day.insertAdjacentHTML('beforebegin', getLessonSevenRoadmapIconHtml());
    }
  }

  function ensureHomeActionCardsBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    removeNodes(queryAllWithin(panel, '.home-fast-actions-block'), hero);
    replaceOrInsert(hero, '.home-fast-actions-block', buildHomeActionCardsHtml(), function(node){
      node.id = 'home-30-second-cards-section';
      var anchor = hero.querySelector('.home-visitor-paths-block')
        || hero.querySelector('.home-learning-spin-block')
        || hero.querySelector('.home-start-three-block')
        || hero.querySelector('.home-desc');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        hero.appendChild(node);
      }
    });
  }

  function ensureHomeTrustValueBlockFinal(panel){
    var hero = panel.querySelector('.home-hero');
    if(!hero) return;
    removeNodes(queryAllWithin(panel, '.home-identity-block'), hero);
    replaceOrInsert(hero, '.home-identity-block', buildHomeTrustValueHtml(), function(node){
      var anchor = hero.querySelector('.home-hero-showcase-block')
        || hero.querySelector('.home-desc');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        hero.insertAdjacentElement('afterbegin', node);
      }
    });
  }

  function expandStartFinderFinal(panel){
    var pack = getHomeFixPack();
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    finder.classList.add('is-expanded-home-menu');
    var title = finder.querySelector('.start-finder-title');
    var desc = finder.querySelector('.start-finder-desc');
    if(title) title.textContent = pack.finderTitle;
    if(desc) desc.textContent = pack.finderDesc;
    var grid = finder.querySelector('.start-finder-grid');
    if(!grid) return;
    grid.innerHTML = '';
    var items = getHomeMenuItemsFinal();
    for(var i = 0; i < items.length; i++){
      var item = items[i];
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'start-finder-btn is-rich-item is-' + item.type + '-item';
      if(item.trackKey) button.setAttribute('data-home-track', item.trackKey);
      if(item.trackLabel) button.setAttribute('data-home-track-label', item.trackLabel);
      button.innerHTML = '<div class="sf-icon">' + item.badge + '</div><div class="start-finder-copy"><div class="start-finder-name">' + item.title + '</div><div class="start-finder-subline">' + (item.desc || '') + '</div></div>';
      button.addEventListener('click', item.action);
      grid.appendChild(button);
    }
  }

  function ensureHomeSupportBlockFinal(panel){
    if(!panel) return;
    removeNodes(queryAllWithin(panel, '.home-support-block'));
  }

  function ensureSourceSupportBlockFinal(){
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    replaceOrInsert(panel, '.src-support-carryover-block', buildSourceSupportBlockHtml(), function(node){
      var anchor = panel.querySelector('.src-section-block[data-source-group="cryptoebook"]')
        || panel.querySelector('.src-section-block[data-source-section="cryptoEbook"]')
        || panel.querySelector('.src-section-block[data-source-group="premium"]');
      if(anchor){
        anchor.insertAdjacentElement('afterend', node);
      } else {
        panel.insertAdjacentElement('beforeend', node);
      }
    });
  }

  function ensureHomePdfBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-pdf-block'), finder);
    replaceOrInsert(finder, '.home-pdf-block', buildHomePdfGuidesHtml(), function(node){
      finder.appendChild(node);
    });
  }

  function ensureHomePremiumPdfBlockFinal(panel){
    if(!panel) return;
    removeNodes(queryAllWithin(panel, '.home-premium-pdf-block'));
  }

  function ensureHomeAvailablePremiumGuidesBlockFinal(panel){
    var finder = panel.querySelector('.start-finder');
    if(!finder) return;
    removeNodes(queryAllWithin(panel, '.home-available-premium-guides'), finder);
    replaceOrInsert(finder, '.home-available-premium-guides', buildHomeAvailablePremiumGuidesHtml(), function(node){
      var premiumBlock = finder.querySelector('.home-premium-pdf-block');
      if(premiumBlock){
        premiumBlock.insertAdjacentElement('afterend', node);
      } else {
        finder.appendChild(node);
      }
    });
  }

  function syncHomeUiFinal(){
    var panel = document.getElementById('homePanel');
    if(panel){
      removeNodes(queryAllWithin(panel, '.home-all-guides'));
      removeNodes(queryAllWithin(panel, '.home-grid, .home-mini-grid'));
      applyHomeHeroCompactCopy(panel);
      ensureHomeTrustValueBlockFinal(panel);
      enhanceHomeRecentUpdatesFinal(panel);
      syncContinueCardFinal(panel);
      ensureRoadmapLessonSevenIconFinal(panel);
      ensureHomeActionCardsBlockFinal(panel);
      expandStartFinderFinal(panel);
      ensureHomePdfBlockFinal(panel);
      ensureHomePremiumPdfBlockFinal(panel);
      ensureHomeAvailablePremiumGuidesBlockFinal(panel);
      ensureHomeSupportBlockFinal(panel);
      ensureHomeConversionTracking(panel);
    }
    ensureSourceSupportBlockFinal();
  }

  function rebindGlobal(name, wrapped){
    try{
      if(name === 'renderHome') renderHome = wrapped;
      if(name === 'renderSources') renderSources = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'setLang') setLang = wrapped;
    }catch(err){}
  }

  function wrapHomeUiFinal(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__homeUiFinalWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      syncHomeUiFinal();
      return result;
    };
    wrapped.__homeUiFinalWrapped = true;
    window[name] = wrapped;
    rebindGlobal(name, wrapped);
  }

  wrapHomeUiFinal('renderHome');
  wrapHomeUiFinal('renderSources');
  wrapHomeUiFinal('renderAllLessons');
  wrapHomeUiFinal('showPage');
  wrapHomeUiFinal('setLang');

  syncHomeUiFinal();
})();

