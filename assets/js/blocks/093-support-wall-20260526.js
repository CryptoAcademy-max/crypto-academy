(function(){
  if(typeof window === 'undefined' || window.__coinProofPathSupportWall20260526) return;
  window.__coinProofPathSupportWall20260526 = true;

  var BRAND = 'Coin ProofPath';
  var SUPPORT_URL = 'https://buymeacoffee.com/beenetworkkorea';
  var STORAGE_KEY = 'coinProofPathSupportMessages';
  var COUNT_KEY = 'coinProofPathSupportCount';
  var MAX_STORED = 20;
  var MAX_VISIBLE = 10;
  var lastAddAt = 0;
  var memoryMessages = [];

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];
  var COPY = {
    en:{
      nav:'Support Wall', navSub:'Prepared support messages only', footer:'Support Wall',
      homeTitle:'See support messages', homeBody:'Choose a prepared message to support free crypto safety education.', homeCta:'Open Support Wall',
      aboutTitle:'Support the mission', aboutBody:'Share a prepared support message for safer crypto learning.', aboutCta:'View support messages',
      partnerTitle:'Community support messages', partnerBody:'See how learners and community members support free safety education.', partnerCta:'Open Support Wall',
      pitchTitle:'Community support messages', pitchBody:'A safe, prepared-message wall for individual supporters.', pitchCta:'View Support Wall',
      eyebrow:'Community support', title:'Support Wall', subtitle:'Choose a message to support free crypto safety education.',
      introTitle:'Prepared messages only', introBody:'To keep this space safe and focused, messages are selected from prepared options only. Free-text comments are not available.',
      chooseTitle:'Choose a support message', chooseBody:'Pick one message below. There is no custom comment box, name field, or email field.',
      addButton:'Add support', added:'Thanks for supporting Coin ProofPath.', recentTitle:'Recent support messages', recentEmpty:'No support messages yet. Choose one above to start the wall.',
      totalLabel:'Total support', browserNote:'Saved in this browser with localStorage.', noFreeText:'Free-text comments are disabled to keep the space safe and focused.',
      ctaTitle:'Support free crypto safety education', ctaText:'If you want to support the project further, you can also support us on Buy Me a Coffee.', ctaButton:'Support on Buy Me a Coffee',
      metaTitle:'Support Wall | Coin ProofPath', metaDesc:'Choose a prepared support message for Coin ProofPath. No free-text comments, no spam, and no investment discussion.',
      messages:[
        'This helped me learn crypto more safely.',
        'Keep building free crypto education.',
        'I support safer onboarding for beginners.',
        'This is useful for avoiding common mistakes.',
        'Thank you for making crypto easier to understand.',
        'Safety-first education matters.',
        'I want to see more multilingual crypto guides.',
        'Keep Coin ProofPath free and helpful.'
      ],
      searchKeywords:['support wall','support messages','community support','free crypto education','buy me a coffee']
    },
    ko:{
      nav:'응원 메시지', navSub:'준비된 문구만 선택', footer:'응원 메시지',
      homeTitle:'응원 메시지 보기', homeBody:'무료 크립토 안전 교육을 응원하는 준비된 문구를 선택해 주세요.', homeCta:'응원 메시지 보기',
      aboutTitle:'미션 응원하기', aboutBody:'안전한 크립토 학습을 위한 준비된 응원 메시지를 남길 수 있습니다.', aboutCta:'응원 메시지 보기',
      partnerTitle:'커뮤니티 응원 메시지', partnerBody:'학습자와 커뮤니티가 무료 안전 교육을 어떻게 응원하는지 확인하세요.', partnerCta:'응원 메시지 보기',
      pitchTitle:'커뮤니티 응원 메시지', pitchBody:'개인 후원자를 위한 안전한 선택형 응원 메시지 공간입니다.', pitchCta:'Support Wall 보기',
      eyebrow:'커뮤니티 응원', title:'응원 메시지', subtitle:'무료 크립토 안전 교육을 응원하는 문구를 선택해 주세요.',
      introTitle:'준비된 문구만 선택', introBody:'이 공간을 안전하고 학습 중심으로 유지하기 위해, 응원 메시지는 준비된 문구 중에서만 선택할 수 있습니다. 직접 입력 댓글은 제공하지 않습니다.',
      chooseTitle:'응원 문구 선택', chooseBody:'아래 문구 중 하나를 선택하세요. 자유 댓글창, 이름 입력, 이메일 입력은 제공하지 않습니다.',
      addButton:'응원 추가', added:'Coin ProofPath를 응원해 주셔서 감사합니다.', recentTitle:'최근 응원 메시지', recentEmpty:'아직 응원 메시지가 없습니다. 위 문구 중 하나를 선택해 보세요.',
      totalLabel:'총 응원 수', browserNote:'이 브라우저의 localStorage에 저장됩니다.', noFreeText:'안전하고 집중된 공간을 위해 자유 입력 댓글은 제공하지 않습니다.',
      ctaTitle:'무료 크립토 안전 교육 후원하기', ctaText:'프로젝트를 더 응원하고 싶다면 Buy Me a Coffee를 통해 후원할 수 있습니다.', ctaButton:'Buy Me a Coffee에서 후원하기',
      metaTitle:'응원 메시지 | Coin ProofPath', metaDesc:'직접 입력 없이 준비된 응원 문구만 선택하는 Coin ProofPath 응원 메시지 페이지입니다.',
      messages:[
        '크립토를 더 안전하게 배우는 데 도움이 됐어요.',
        '무료 크립토 교육을 계속 만들어 주세요.',
        '초보자를 위한 안전한 온보딩을 응원합니다.',
        '흔한 실수를 줄이는 데 도움이 되는 사이트예요.',
        '코인을 더 쉽게 이해할 수 있게 해줘서 감사합니다.',
        '안전을 먼저 알려주는 교육은 중요합니다.',
        '더 많은 다국어 크립토 가이드를 기대합니다.',
        'Coin ProofPath가 계속 무료로 운영되길 응원합니다.'
      ],
      searchKeywords:['응원 메시지','응원하기','커뮤니티 응원','무료 크립토 교육','후원하기']
    },
    th:{
      nav:'กำแพงสนับสนุน', navSub:'เลือกข้อความที่เตรียมไว้เท่านั้น', footer:'กำแพงสนับสนุน',
      homeTitle:'ดูข้อความสนับสนุน', homeBody:'เลือกข้อความที่เตรียมไว้เพื่อสนับสนุนการเรียน crypto อย่างปลอดภัยฟรี', homeCta:'เปิดกำแพงสนับสนุน',
      aboutTitle:'สนับสนุนพันธกิจ', aboutBody:'เลือกข้อความสนับสนุนเพื่อการเรียน crypto ที่ปลอดภัยขึ้น', aboutCta:'ดูข้อความสนับสนุน',
      partnerTitle:'ข้อความสนับสนุนจากชุมชน', partnerBody:'ดูการสนับสนุนจากผู้เรียนและชุมชน', partnerCta:'เปิดกำแพงสนับสนุน',
      pitchTitle:'ข้อความสนับสนุนจากชุมชน', pitchBody:'พื้นที่ข้อความที่เลือกไว้ล่วงหน้าสำหรับผู้สนับสนุนรายบุคคล', pitchCta:'ดู Support Wall',
      eyebrow:'การสนับสนุนจากชุมชน', title:'กำแพงสนับสนุน', subtitle:'เลือกข้อความเพื่อสนับสนุนการเรียน crypto อย่างปลอดภัยฟรี',
      introTitle:'ใช้ข้อความที่เตรียมไว้เท่านั้น', introBody:'เพื่อให้พื้นที่นี้ปลอดภัยและโฟกัส ข้อความสนับสนุนเลือกได้จากตัวเลือกที่เตรียมไว้เท่านั้น ไม่มีคอมเมนต์แบบพิมพ์เอง',
      chooseTitle:'เลือกข้อความสนับสนุน', chooseBody:'เลือกหนึ่งข้อความด้านล่าง ไม่มีช่องคอมเมนต์ ชื่อ หรืออีเมล',
      addButton:'เพิ่มการสนับสนุน', added:'ขอบคุณที่สนับสนุน Coin ProofPath', recentTitle:'ข้อความสนับสนุนล่าสุด', recentEmpty:'ยังไม่มีข้อความสนับสนุน เลือกหนึ่งข้อความด้านบนเพื่อเริ่ม',
      totalLabel:'จำนวนสนับสนุนทั้งหมด', browserNote:'บันทึกในเบราว์เซอร์นี้ด้วย localStorage', noFreeText:'ปิดคอมเมนต์แบบพิมพ์เองเพื่อความปลอดภัยและความโฟกัส',
      ctaTitle:'สนับสนุนการศึกษา crypto ด้านความปลอดภัยฟรี', ctaText:'หากต้องการสนับสนุนโครงการเพิ่มเติม คุณสามารถสนับสนุนผ่าน Buy Me a Coffee ได้', ctaButton:'สนับสนุนบน Buy Me a Coffee',
      metaTitle:'Support Wall | Coin ProofPath', metaDesc:'เลือกข้อความสนับสนุนที่เตรียมไว้สำหรับ Coin ProofPath โดยไม่มีคอมเมนต์แบบพิมพ์เอง',
      messages:[
        'สิ่งนี้ช่วยให้ฉันเรียน crypto ได้ปลอดภัยขึ้น',
        'ช่วยสร้างการศึกษา crypto ฟรีต่อไป',
        'ฉันสนับสนุน onboarding ที่ปลอดภัยสำหรับผู้เริ่มต้น',
        'มีประโยชน์ในการหลีกเลี่ยงข้อผิดพลาดทั่วไป',
        'ขอบคุณที่ทำให้ crypto เข้าใจง่ายขึ้น',
        'การศึกษาที่เน้นความปลอดภัยสำคัญมาก',
        'อยากเห็นคู่มือ crypto หลายภาษามากขึ้น',
        'ขอให้ Coin ProofPath ฟรีและมีประโยชน์ต่อไป'
      ],
      searchKeywords:['support wall','ข้อความสนับสนุน','สนับสนุน','crypto ฟรี']
    },
    id:{
      nav:'Dinding Dukungan', navSub:'Hanya pesan siap pilih', footer:'Dinding Dukungan',
      homeTitle:'Lihat pesan dukungan', homeBody:'Pilih pesan siap pakai untuk mendukung edukasi keamanan crypto gratis.', homeCta:'Buka Dinding Dukungan',
      aboutTitle:'Dukung misi', aboutBody:'Bagikan pesan dukungan siap pilih untuk belajar crypto lebih aman.', aboutCta:'Lihat pesan dukungan',
      partnerTitle:'Pesan dukungan komunitas', partnerBody:'Lihat dukungan pelajar dan komunitas untuk edukasi keamanan gratis.', partnerCta:'Buka Dinding Dukungan',
      pitchTitle:'Pesan dukungan komunitas', pitchBody:'Dinding pesan aman untuk pendukung individu.', pitchCta:'Lihat Support Wall',
      eyebrow:'Dukungan komunitas', title:'Dinding Dukungan', subtitle:'Pilih pesan untuk mendukung edukasi keamanan crypto gratis.',
      introTitle:'Hanya pesan siap pilih', introBody:'Agar ruang ini aman dan fokus, pesan dipilih hanya dari opsi yang disiapkan. Komentar bebas tidak tersedia.',
      chooseTitle:'Pilih pesan dukungan', chooseBody:'Pilih satu pesan di bawah. Tidak ada kotak komentar, nama, atau email.',
      addButton:'Tambah dukungan', added:'Terima kasih telah mendukung Coin ProofPath.', recentTitle:'Pesan dukungan terbaru', recentEmpty:'Belum ada pesan dukungan. Pilih satu di atas untuk memulai.',
      totalLabel:'Total dukungan', browserNote:'Disimpan di browser ini dengan localStorage.', noFreeText:'Komentar bebas dinonaktifkan agar ruang tetap aman dan fokus.',
      ctaTitle:'Dukung edukasi keamanan crypto gratis', ctaText:'Jika ingin mendukung proyek lebih lanjut, Anda juga dapat mendukung kami di Buy Me a Coffee.', ctaButton:'Dukung di Buy Me a Coffee',
      metaTitle:'Dinding Dukungan | Coin ProofPath', metaDesc:'Pilih pesan dukungan siap pakai untuk Coin ProofPath tanpa komentar bebas.',
      messages:[
        'Ini membantu saya belajar crypto dengan lebih aman.',
        'Terus bangun edukasi crypto gratis.',
        'Saya mendukung onboarding yang lebih aman untuk pemula.',
        'Ini berguna untuk menghindari kesalahan umum.',
        'Terima kasih telah membuat crypto lebih mudah dipahami.',
        'Edukasi yang mengutamakan keselamatan itu penting.',
        'Saya ingin melihat lebih banyak panduan crypto multibahasa.',
        'Semoga Coin ProofPath tetap gratis dan bermanfaat.'
      ],
      searchKeywords:['dinding dukungan','pesan dukungan','dukung','edukasi crypto gratis']
    },
    pt:{
      nav:'Mural de Apoio', navSub:'Só mensagens preparadas', footer:'Mural de Apoio',
      homeTitle:'Ver mensagens de apoio', homeBody:'Escolha uma mensagem preparada para apoiar educação cripto segura e gratuita.', homeCta:'Abrir Mural de Apoio',
      aboutTitle:'Apoiar a missão', aboutBody:'Partilhe uma mensagem preparada para uma aprendizagem cripto mais segura.', aboutCta:'Ver mensagens de apoio',
      partnerTitle:'Mensagens da comunidade', partnerBody:'Veja como alunos e comunidade apoiam a educação gratuita de segurança.', partnerCta:'Abrir Mural de Apoio',
      pitchTitle:'Mensagens da comunidade', pitchBody:'Um mural seguro com mensagens preparadas para apoiadores individuais.', pitchCta:'Ver Support Wall',
      eyebrow:'Apoio da comunidade', title:'Mural de Apoio', subtitle:'Escolha uma mensagem para apoiar educação cripto segura e gratuita.',
      introTitle:'Apenas mensagens preparadas', introBody:'Para manter este espaço seguro e focado, as mensagens são escolhidas apenas entre opções preparadas. Comentários livres não estão disponíveis.',
      chooseTitle:'Escolha uma mensagem de apoio', chooseBody:'Escolha uma mensagem abaixo. Não há caixa de comentário, nome ou email.',
      addButton:'Adicionar apoio', added:'Obrigado por apoiar o Coin ProofPath.', recentTitle:'Mensagens recentes de apoio', recentEmpty:'Ainda não há mensagens de apoio. Escolha uma acima para começar.',
      totalLabel:'Total de apoios', browserNote:'Guardado neste navegador com localStorage.', noFreeText:'Comentários livres estão desativados para manter o espaço seguro e focado.',
      ctaTitle:'Apoiar educação cripto segura gratuita', ctaText:'Se quiser apoiar mais o projeto, também pode apoiar-nos no Buy Me a Coffee.', ctaButton:'Apoiar no Buy Me a Coffee',
      metaTitle:'Mural de Apoio | Coin ProofPath', metaDesc:'Escolha uma mensagem preparada para apoiar o Coin ProofPath sem comentários livres.',
      messages:[
        'Isto ajudou-me a aprender cripto com mais segurança.',
        'Continuem a criar educação cripto gratuita.',
        'Apoio um onboarding mais seguro para iniciantes.',
        'Isto é útil para evitar erros comuns.',
        'Obrigado por tornar a cripto mais fácil de entender.',
        'Educação com segurança em primeiro lugar importa.',
        'Quero ver mais guias cripto multilingues.',
        'Que o Coin ProofPath continue gratuito e útil.'
      ],
      searchKeywords:['mural de apoio','mensagens de apoio','apoiar','educação cripto gratuita']
    },
    br:{
      nav:'Mural de Apoio', navSub:'Só mensagens prontas', footer:'Mural de Apoio',
      homeTitle:'Ver mensagens de apoio', homeBody:'Escolha uma mensagem pronta para apoiar educação cripto segura e gratuita.', homeCta:'Abrir Mural de Apoio',
      aboutTitle:'Apoiar a missão', aboutBody:'Compartilhe uma mensagem pronta para um aprendizado cripto mais seguro.', aboutCta:'Ver mensagens de apoio',
      partnerTitle:'Mensagens da comunidade', partnerBody:'Veja como alunos e comunidade apoiam educação gratuita de segurança.', partnerCta:'Abrir Mural de Apoio',
      pitchTitle:'Mensagens da comunidade', pitchBody:'Um mural seguro com mensagens prontas para apoiadores individuais.', pitchCta:'Ver Support Wall',
      eyebrow:'Apoio da comunidade', title:'Mural de Apoio', subtitle:'Escolha uma mensagem para apoiar educação cripto segura e gratuita.',
      introTitle:'Apenas mensagens prontas', introBody:'Para manter este espaço seguro e focado, as mensagens são escolhidas apenas entre opções prontas. Comentários livres não estão disponíveis.',
      chooseTitle:'Escolha uma mensagem de apoio', chooseBody:'Escolha uma mensagem abaixo. Não há caixa de comentário, nome ou email.',
      addButton:'Adicionar apoio', added:'Obrigado por apoiar o Coin ProofPath.', recentTitle:'Mensagens recentes de apoio', recentEmpty:'Ainda não há mensagens de apoio. Escolha uma acima para começar.',
      totalLabel:'Total de apoios', browserNote:'Salvo neste navegador com localStorage.', noFreeText:'Comentários livres estão desativados para manter o espaço seguro e focado.',
      ctaTitle:'Apoiar educação cripto segura gratuita', ctaText:'Se quiser apoiar mais o projeto, você também pode apoiar pelo Buy Me a Coffee.', ctaButton:'Apoiar no Buy Me a Coffee',
      metaTitle:'Mural de Apoio | Coin ProofPath', metaDesc:'Escolha uma mensagem pronta para apoiar o Coin ProofPath sem comentários livres.',
      messages:[
        'Isso me ajudou a aprender cripto com mais segurança.',
        'Continuem criando educação cripto gratuita.',
        'Eu apoio um onboarding mais seguro para iniciantes.',
        'Isso é útil para evitar erros comuns.',
        'Obrigado por tornar cripto mais fácil de entender.',
        'Educação com segurança em primeiro lugar importa.',
        'Quero ver mais guias cripto multilíngues.',
        'Que o Coin ProofPath continue gratuito e útil.'
      ],
      searchKeywords:['mural de apoio','mensagens de apoio','apoiar','educação cripto gratuita']
    },
    tr:{
      nav:'Destek Duvarı', navSub:'Yalnızca hazır mesajlar', footer:'Destek Duvarı',
      homeTitle:'Destek mesajlarını gör', homeBody:'Ücretsiz kripto güvenlik eğitimini desteklemek için hazır bir mesaj seçin.', homeCta:'Destek Duvarını aç',
      aboutTitle:'Misyonu destekle', aboutBody:'Daha güvenli kripto öğrenimi için hazır bir destek mesajı paylaşın.', aboutCta:'Destek mesajlarını gör',
      partnerTitle:'Topluluk destek mesajları', partnerBody:'Öğrenenlerin ve topluluğun ücretsiz güvenlik eğitimini nasıl desteklediğini görün.', partnerCta:'Destek Duvarını aç',
      pitchTitle:'Topluluk destek mesajları', pitchBody:'Bireysel destekçiler için güvenli ve hazır mesajlı bir alan.', pitchCta:'Support Wall’u gör',
      eyebrow:'Topluluk desteği', title:'Destek Duvarı', subtitle:'Ücretsiz kripto güvenlik eğitimini desteklemek için bir mesaj seçin.',
      introTitle:'Sadece hazır mesajlar', introBody:'Bu alanı güvenli ve odaklı tutmak için mesajlar yalnızca hazırlanmış seçeneklerden seçilir. Serbest yorum yoktur.',
      chooseTitle:'Bir destek mesajı seçin', chooseBody:'Aşağıdan bir mesaj seçin. Yorum kutusu, ad alanı veya e-posta alanı yoktur.',
      addButton:'Destek ekle', added:'Coin ProofPath’i desteklediğiniz için teşekkürler.', recentTitle:'Son destek mesajları', recentEmpty:'Henüz destek mesajı yok. Başlamak için yukarıdan birini seçin.',
      totalLabel:'Toplam destek', browserNote:'Bu tarayıcıda localStorage ile kaydedilir.', noFreeText:'Alanı güvenli ve odaklı tutmak için serbest yorumlar kapalıdır.',
      ctaTitle:'Ücretsiz kripto güvenlik eğitimini destekle', ctaText:'Projeyi daha fazla desteklemek isterseniz Buy Me a Coffee üzerinden de destek olabilirsiniz.', ctaButton:'Buy Me a Coffee ile destekle',
      metaTitle:'Destek Duvarı | Coin ProofPath', metaDesc:'Coin ProofPath için serbest yorum olmadan hazır bir destek mesajı seçin.',
      messages:[
        'Bu, kriptoyu daha güvenli öğrenmeme yardımcı oldu.',
        'Ücretsiz kripto eğitimini geliştirmeye devam edin.',
        'Yeni başlayanlar için daha güvenli onboarding’i destekliyorum.',
        'Yaygın hatalardan kaçınmak için faydalı.',
        'Kriptoyu daha anlaşılır yaptığınız için teşekkürler.',
        'Güvenlik öncelikli eğitim önemlidir.',
        'Daha fazla çok dilli kripto rehberi görmek istiyorum.',
        'Coin ProofPath ücretsiz ve faydalı kalmaya devam etsin.'
      ],
      searchKeywords:['destek duvarı','destek mesajları','destekle','ücretsiz kripto eğitimi']
    },
    es:{
      nav:'Muro de Apoyo', navSub:'Solo mensajes preparados', footer:'Muro de Apoyo',
      homeTitle:'Ver mensajes de apoyo', homeBody:'Elige un mensaje preparado para apoyar educación cripto segura y gratuita.', homeCta:'Abrir Muro de Apoyo',
      aboutTitle:'Apoyar la misión', aboutBody:'Comparte un mensaje preparado para aprender cripto con más seguridad.', aboutCta:'Ver mensajes de apoyo',
      partnerTitle:'Mensajes de la comunidad', partnerBody:'Mira cómo estudiantes y comunidad apoyan la educación gratuita de seguridad.', partnerCta:'Abrir Muro de Apoyo',
      pitchTitle:'Mensajes de la comunidad', pitchBody:'Un muro seguro con mensajes preparados para apoyos individuales.', pitchCta:'Ver Support Wall',
      eyebrow:'Apoyo de la comunidad', title:'Muro de Apoyo', subtitle:'Elige un mensaje para apoyar educación cripto segura y gratuita.',
      introTitle:'Solo mensajes preparados', introBody:'Para mantener este espacio seguro y enfocado, los mensajes se eligen solo entre opciones preparadas. No hay comentarios libres.',
      chooseTitle:'Elige un mensaje de apoyo', chooseBody:'Elige un mensaje abajo. No hay caja de comentarios, nombre ni email.',
      addButton:'Añadir apoyo', added:'Gracias por apoyar a Coin ProofPath.', recentTitle:'Mensajes recientes de apoyo', recentEmpty:'Aún no hay mensajes de apoyo. Elige uno arriba para empezar.',
      totalLabel:'Apoyo total', browserNote:'Guardado en este navegador con localStorage.', noFreeText:'Los comentarios libres están desactivados para mantener el espacio seguro y enfocado.',
      ctaTitle:'Apoya educación cripto segura gratuita', ctaText:'Si quieres apoyar más el proyecto, también puedes hacerlo en Buy Me a Coffee.', ctaButton:'Apoyar en Buy Me a Coffee',
      metaTitle:'Muro de Apoyo | Coin ProofPath', metaDesc:'Elige un mensaje preparado para apoyar Coin ProofPath sin comentarios libres.',
      messages:[
        'Esto me ayudó a aprender cripto con más seguridad.',
        'Sigan creando educación cripto gratuita.',
        'Apoyo un onboarding más seguro para principiantes.',
        'Esto ayuda a evitar errores comunes.',
        'Gracias por hacer que cripto sea más fácil de entender.',
        'La educación con seguridad primero importa.',
        'Quiero ver más guías cripto multilingües.',
        'Que Coin ProofPath siga siendo gratuito y útil.'
      ],
      searchKeywords:['muro de apoyo','mensajes de apoyo','apoyar','educación cripto gratis']
    },
    ar:{
      nav:'جدار الدعم', navSub:'رسائل جاهزة فقط', footer:'جدار الدعم',
      homeTitle:'عرض رسائل الدعم', homeBody:'اختر رسالة جاهزة لدعم تعليم أمان الكريبتو المجاني.', homeCta:'افتح جدار الدعم',
      aboutTitle:'ادعم المهمة', aboutBody:'شارك رسالة جاهزة من أجل تعلم كريبتو أكثر أمانا.', aboutCta:'عرض رسائل الدعم',
      partnerTitle:'رسائل دعم المجتمع', partnerBody:'شاهد كيف يدعم المتعلمون والمجتمع تعليم الأمان المجاني.', partnerCta:'افتح جدار الدعم',
      pitchTitle:'رسائل دعم المجتمع', pitchBody:'مساحة آمنة برسائل جاهزة للداعمين الأفراد.', pitchCta:'عرض Support Wall',
      eyebrow:'دعم المجتمع', title:'جدار الدعم', subtitle:'اختر رسالة لدعم تعليم أمان الكريبتو المجاني.',
      introTitle:'رسائل جاهزة فقط', introBody:'للحفاظ على هذه المساحة آمنة ومركزة، يتم اختيار الرسائل من خيارات جاهزة فقط. التعليقات الحرة غير متاحة.',
      chooseTitle:'اختر رسالة دعم', chooseBody:'اختر رسالة واحدة أدناه. لا يوجد مربع تعليق أو اسم أو بريد إلكتروني.',
      addButton:'إضافة دعم', added:'شكرا لدعمك Coin ProofPath.', recentTitle:'رسائل الدعم الأخيرة', recentEmpty:'لا توجد رسائل دعم بعد. اختر واحدة أعلاه للبدء.',
      totalLabel:'إجمالي الدعم', browserNote:'يتم الحفظ في هذا المتصفح باستخدام localStorage.', noFreeText:'تم تعطيل التعليقات الحرة للحفاظ على المساحة آمنة ومركزة.',
      ctaTitle:'ادعم تعليم أمان الكريبتو المجاني', ctaText:'إذا أردت دعم المشروع أكثر، يمكنك أيضا دعمنا عبر Buy Me a Coffee.', ctaButton:'ادعم عبر Buy Me a Coffee',
      metaTitle:'جدار الدعم | Coin ProofPath', metaDesc:'اختر رسالة دعم جاهزة لـ Coin ProofPath بدون تعليقات حرة.',
      messages:[
        'ساعدني هذا على تعلم الكريبتو بأمان أكبر.',
        'استمروا في بناء تعليم كريبتو مجاني.',
        'أدعم onboarding أكثر أمانا للمبتدئين.',
        'هذا مفيد لتجنب الأخطاء الشائعة.',
        'شكرا لجعل الكريبتو أسهل في الفهم.',
        'التعليم الذي يضع السلامة أولا مهم.',
        'أريد رؤية المزيد من أدلة الكريبتو متعددة اللغات.',
        'أتمنى أن يبقى Coin ProofPath مجانيا ومفيدا.'
      ],
      searchKeywords:['جدار الدعم','رسائل الدعم','ادعم','تعليم كريبتو مجاني']
    },
    vi:{
      nav:'Tường ủng hộ', navSub:'Chỉ chọn tin nhắn có sẵn', footer:'Tường ủng hộ',
      homeTitle:'Xem tin nhắn ủng hộ', homeBody:'Chọn một tin nhắn có sẵn để ủng hộ giáo dục an toàn crypto miễn phí.', homeCta:'Mở Tường ủng hộ',
      aboutTitle:'Ủng hộ sứ mệnh', aboutBody:'Chia sẻ một tin nhắn có sẵn cho việc học crypto an toàn hơn.', aboutCta:'Xem tin nhắn ủng hộ',
      partnerTitle:'Tin nhắn cộng đồng', partnerBody:'Xem người học và cộng đồng ủng hộ giáo dục an toàn miễn phí.', partnerCta:'Mở Tường ủng hộ',
      pitchTitle:'Tin nhắn cộng đồng', pitchBody:'Một tường tin nhắn an toàn cho người ủng hộ cá nhân.', pitchCta:'Xem Support Wall',
      eyebrow:'Ủng hộ cộng đồng', title:'Tường ủng hộ', subtitle:'Chọn một tin nhắn để ủng hộ giáo dục an toàn crypto miễn phí.',
      introTitle:'Chỉ dùng tin nhắn có sẵn', introBody:'Để giữ không gian an toàn và tập trung, tin nhắn chỉ được chọn từ các tùy chọn có sẵn. Không có bình luận tự do.',
      chooseTitle:'Chọn tin nhắn ủng hộ', chooseBody:'Chọn một tin nhắn bên dưới. Không có ô bình luận, tên hoặc email.',
      addButton:'Thêm ủng hộ', added:'Cảm ơn bạn đã ủng hộ Coin ProofPath.', recentTitle:'Tin nhắn ủng hộ gần đây', recentEmpty:'Chưa có tin nhắn ủng hộ. Hãy chọn một tin nhắn ở trên.',
      totalLabel:'Tổng lượt ủng hộ', browserNote:'Được lưu trong trình duyệt này bằng localStorage.', noFreeText:'Bình luận tự do bị tắt để giữ không gian an toàn và tập trung.',
      ctaTitle:'Ủng hộ giáo dục an toàn crypto miễn phí', ctaText:'Nếu muốn ủng hộ dự án nhiều hơn, bạn cũng có thể ủng hộ qua Buy Me a Coffee.', ctaButton:'Ủng hộ trên Buy Me a Coffee',
      metaTitle:'Tường ủng hộ | Coin ProofPath', metaDesc:'Chọn tin nhắn ủng hộ có sẵn cho Coin ProofPath, không có bình luận tự do.',
      messages:[
        'Điều này giúp tôi học crypto an toàn hơn.',
        'Hãy tiếp tục xây dựng giáo dục crypto miễn phí.',
        'Tôi ủng hộ onboarding an toàn hơn cho người mới.',
        'Điều này hữu ích để tránh lỗi thường gặp.',
        'Cảm ơn vì giúp crypto dễ hiểu hơn.',
        'Giáo dục đặt an toàn lên trước rất quan trọng.',
        'Tôi muốn thấy thêm hướng dẫn crypto đa ngôn ngữ.',
        'Mong Coin ProofPath luôn miễn phí và hữu ích.'
      ],
      searchKeywords:['tường ủng hộ','tin nhắn ủng hộ','ủng hộ','giáo dục crypto miễn phí']
    },
    ha:{
      nav:'Bangon Tallafi', navSub:'Sakonnin da aka shirya kawai', footer:'Bangon Tallafi',
      homeTitle:'Duba sakonnin tallafi', homeBody:'Zabi sakon da aka shirya don tallafa wa ilimin tsaron crypto kyauta.', homeCta:'Bude Bangon Tallafi',
      aboutTitle:'Tallafa manufa', aboutBody:'Raba sakon tallafi da aka shirya don koyon crypto cikin aminci.', aboutCta:'Duba sakonnin tallafi',
      partnerTitle:'Sakonnin tallafin al’umma', partnerBody:'Duba yadda masu koyo da al’umma ke tallafa wa ilimin tsaro kyauta.', partnerCta:'Bude Bangon Tallafi',
      pitchTitle:'Sakonnin tallafin al’umma', pitchBody:'Wuri mai aminci na sakonni da aka shirya ga masu tallafi.', pitchCta:'Duba Support Wall',
      eyebrow:'Tallafin al’umma', title:'Bangon Tallafi', subtitle:'Zabi sako don tallafa wa ilimin tsaron crypto kyauta.',
      introTitle:'Sakonnin da aka shirya kawai', introBody:'Don kiyaye wannan wuri cikin aminci da natsuwa, ana zabar sakonni ne daga zababbun zabuka kawai. Babu rubutun ra’ayi kai tsaye.',
      chooseTitle:'Zabi sakon tallafi', chooseBody:'Zabi sako daya a kasa. Babu akwatin rubutu, suna, ko email.',
      addButton:'Kara tallafi', added:'Mun gode da tallafa wa Coin ProofPath.', recentTitle:'Sabbin sakonnin tallafi', recentEmpty:'Babu sakon tallafi tukuna. Zabi daya a sama don farawa.',
      totalLabel:'Jimillar tallafi', browserNote:'An ajiye a wannan browser da localStorage.', noFreeText:'An kashe rubutun ra’ayi kai tsaye don kiyaye wuri lafiya da natsuwa.',
      ctaTitle:'Tallafa wa ilimin tsaron crypto kyauta', ctaText:'Idan kana son kara tallafa wa aikin, zaka iya tallafa mana ta Buy Me a Coffee.', ctaButton:'Tallafa a Buy Me a Coffee',
      metaTitle:'Bangon Tallafi | Coin ProofPath', metaDesc:'Zabi sakon tallafi da aka shirya ga Coin ProofPath ba tare da rubutu kai tsaye ba.',
      messages:[
        'Wannan ya taimaka min koyon crypto cikin aminci.',
        'Ku ci gaba da gina ilimin crypto kyauta.',
        'Ina goyon bayan onboarding mai aminci ga masu farawa.',
        'Wannan yana taimakawa wajen guje wa kurakurai na yau da kullum.',
        'Na gode da saukaka fahimtar crypto.',
        'Ilimin da ke fara da aminci yana da muhimmanci.',
        'Ina son ganin karin jagororin crypto cikin harsuna da yawa.',
        'Coin ProofPath ya ci gaba da zama kyauta kuma mai amfani.'
      ],
      searchKeywords:['bangon tallafi','sakonnin tallafi','tallafa','ilimin crypto kyauta']
    }
  };

  function esc(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }
  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLocale(){
    var lang = 'en';
    try{
      lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en';
    }catch(err){
      lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en';
    }
    return langKey(lang);
  }
  function copy(){ return COPY[currentLocale()] || COPY.en; }
  function basePrefix(){
    return document.body.dataset.basePrefix || window.__CA_BASE_PREFIX__ || './';
  }
  function routeToSupportWall(){
    return basePrefix() + '#support-wall';
  }
  function normalize(value){
    value = String(value || '').toLowerCase();
    try{ value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }catch(err){}
    return value.replace(/\s+/g, ' ').trim();
  }
  function readMessages(){
    try{
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter(function(item){ return item && typeof item.messageKey === 'string'; }) : [];
    }catch(err){
      return memoryMessages.slice();
    }
  }
  function writeMessages(items){
    var list = items.slice(0, MAX_STORED);
    memoryMessages = list.slice();
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }catch(err){}
  }
  function readCount(){
    var stored = 0;
    try{ stored = parseInt(localStorage.getItem(COUNT_KEY) || '0', 10) || 0; }catch(err){}
    return Math.max(stored, readMessages().length);
  }
  function writeCount(value){
    try{ localStorage.setItem(COUNT_KEY, String(Math.max(0, value || 0))); }catch(err){}
  }
  function messageIndex(messageKey){
    var index = parseInt(String(messageKey || '').replace('supportMessage', ''), 10) - 1;
    return isFinite(index) && index >= 0 && index < 8 ? index : 0;
  }
  function messageText(messageKey){
    var p = copy();
    return (p.messages && p.messages[messageIndex(messageKey)]) || COPY.en.messages[messageIndex(messageKey)];
  }

  function ensureStyles(){
    if(document.getElementById('coinProofPathSupportWallStyles')) return;
    var style = document.createElement('style');
    style.id = 'coinProofPathSupportWallStyles';
    style.textContent = [
      '.support-wall-page{display:grid;gap:22px;max-width:1120px;margin:0 auto;color:var(--text)}',
      '.support-wall-hero{position:relative;overflow:hidden;border:1px solid rgba(30,64,99,.12);border-radius:28px;background:linear-gradient(135deg,#f8fbff 0%,#eef7fb 45%,#fff8eb 100%);box-shadow:0 18px 44px rgba(20,38,64,.08);padding:clamp(22px,4vw,42px);display:grid;grid-template-columns:minmax(0,1.2fr) minmax(220px,.8fr);gap:22px;align-items:center}',
      '.support-wall-hero:before{content:"";position:absolute;right:-90px;top:-110px;width:260px;height:260px;border-radius:999px;background:rgba(47,95,145,.12)}',
      '.support-wall-hero>*{position:relative;z-index:1}.support-wall-kicker{display:inline-flex;align-items:center;gap:8px;width:max-content;border:1px solid rgba(47,95,145,.16);border-radius:999px;background:#fff;color:var(--navy);font-size:.78rem;font-weight:900;padding:7px 10px}',
      '.support-wall-hero h1{margin:12px 0 10px;font-size:clamp(2rem,4vw,3.6rem);line-height:1.03;letter-spacing:-.06em;word-break:keep-all;overflow-wrap:break-word}.support-wall-hero p{margin:0;color:var(--text-2);font-size:clamp(.98rem,1.6vw,1.12rem);line-height:1.72;word-break:keep-all;overflow-wrap:break-word}',
      '.support-wall-visual{border:1px solid rgba(30,64,99,.12);border-radius:24px;background:rgba(255,255,255,.8);box-shadow:0 14px 32px rgba(20,38,64,.08);padding:18px;display:grid;gap:12px}.support-wall-visual-row{display:flex;align-items:center;gap:10px}.support-wall-visual-icon{width:42px;height:42px;border-radius:16px;background:linear-gradient(135deg,#e7f2ff,#effaf3);display:inline-flex;align-items:center;justify-content:center;color:#2f5f91;font-weight:900}.support-wall-visual-line{height:10px;border-radius:999px;background:#d9e7f5;flex:1}.support-wall-visual-line:nth-child(2){max-width:80%}',
      '.support-wall-info{border:1px solid rgba(30,64,99,.12);border-radius:22px;background:#fff;padding:18px;box-shadow:0 10px 24px rgba(20,38,64,.05)}.support-wall-info h2,.support-wall-section h2,.support-wall-cta h2{margin:0;color:var(--text);font-size:clamp(1.18rem,2vw,1.55rem);line-height:1.22;letter-spacing:-.03em;word-break:keep-all}.support-wall-info p,.support-wall-section p,.support-wall-cta p{margin:8px 0 0;color:var(--text-2);line-height:1.65;font-size:.94rem;word-break:keep-all;overflow-wrap:break-word}',
      '.support-wall-section{border:1px solid rgba(30,64,99,.1);border-radius:24px;background:linear-gradient(180deg,#fff,#f8fbff);padding:clamp(18px,3vw,26px);box-shadow:0 12px 30px rgba(20,38,64,.055)}.support-wall-message-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:16px}.support-wall-message-card{border:1px solid rgba(30,64,99,.12);border-radius:18px;background:#fff;padding:16px;display:flex;flex-direction:column;gap:14px;min-height:156px;box-shadow:0 8px 20px rgba(20,38,64,.045)}',
      '.support-wall-message-card strong{color:var(--text);font-size:.96rem;line-height:1.55;word-break:keep-all;overflow-wrap:break-word}.support-wall-message-card button{appearance:none;margin-top:auto;border:1px solid rgba(47,95,145,.2);border-radius:999px;background:linear-gradient(180deg,#18304f,#24466f);color:#fff;font:inherit;font-size:.86rem;font-weight:900;padding:10px 13px;cursor:pointer;min-height:40px;box-shadow:0 8px 18px rgba(24,48,79,.15)}.support-wall-message-card button:focus-visible,.support-wall-cta a:focus-visible,.support-wall-link-card button:focus-visible{outline:3px solid rgba(47,95,145,.28);outline-offset:2px}',
      '.support-wall-stats{display:grid;grid-template-columns:minmax(160px,.32fr) minmax(0,1fr);gap:14px}.support-wall-total{border:1px solid rgba(30,64,99,.1);border-radius:22px;background:linear-gradient(135deg,#18304f,#2f5f91);color:#fff;padding:18px;display:flex;flex-direction:column;justify-content:center;gap:8px;min-height:150px}.support-wall-total span{font-size:.76rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em;opacity:.78}.support-wall-total strong{font-size:clamp(2rem,4vw,3rem);line-height:1}.support-wall-total small{color:rgba(255,255,255,.78);line-height:1.45}',
      '.support-wall-recent{border:1px solid rgba(30,64,99,.1);border-radius:22px;background:#fff;padding:18px}.support-wall-recent h2{margin-bottom:12px}.support-wall-recent-list{list-style:none;margin:0;padding:0;display:grid;gap:9px}.support-wall-recent-list li{border:1px solid rgba(30,64,99,.08);border-radius:14px;background:#f8fbff;padding:11px 12px;color:var(--text);font-size:.9rem;font-weight:800;line-height:1.48;word-break:keep-all;overflow-wrap:break-word}.support-wall-empty{color:var(--text-2);font-size:.92rem;line-height:1.6}',
      '.support-wall-live{min-height:22px;color:#2f5f91;font-weight:900;font-size:.9rem;margin-top:12px}.support-wall-cta{border:1px solid rgba(30,64,99,.1);border-radius:24px;background:linear-gradient(135deg,#fff,#fff7e8);padding:clamp(18px,3vw,26px);display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center}.support-wall-cta a{display:inline-flex;align-items:center;justify-content:center;min-height:42px;border-radius:999px;background:#fff;border:1px solid rgba(30,64,99,.16);color:var(--navy);font-weight:900;text-decoration:none;padding:0 16px;box-shadow:0 8px 18px rgba(20,38,64,.07);text-align:center}',
      '.support-wall-home-entry,.support-wall-link-card{margin-top:18px;border:1px solid var(--line);border-radius:20px;background:linear-gradient(135deg,#fff,#f4fbf8);padding:18px;display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;box-shadow:0 10px 26px rgba(20,38,64,.06)}.support-wall-home-entry h3,.support-wall-link-card h3{margin:0;color:var(--text);font-size:1.02rem;line-height:1.25;letter-spacing:-.02em;word-break:keep-all}.support-wall-home-entry p,.support-wall-link-card p{margin:5px 0 0;color:var(--text-2);font-size:.86rem;line-height:1.55;word-break:keep-all}.support-wall-home-entry button,.support-wall-link-card button{appearance:none;border:1px solid var(--line);border-radius:999px;background:#fff;color:var(--navy);font-weight:900;padding:10px 14px;cursor:pointer;min-height:38px}',
      '.support-wall-sidebar-links{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:8px}.support-wall-sidebar-links button{appearance:none;border:1px solid rgba(30,64,99,.12);border-radius:999px;background:#fff;color:var(--text-2);font:inherit;font-size:.68rem;font-weight:800;padding:6px 8px;cursor:pointer}.support-wall-sidebar-nav .nav-num{background:#eefaf3;color:#2f5f91}',
      'html[lang="ar"] .support-wall-page{text-align:right}',
      '@media (max-width:860px){.support-wall-hero,.support-wall-stats,.support-wall-cta{grid-template-columns:1fr}.support-wall-message-grid{grid-template-columns:1fr}.support-wall-visual{max-width:420px}.support-wall-cta a{width:100%}}',
      '@media (max-width:620px){.support-wall-hero,.support-wall-section,.support-wall-info,.support-wall-cta{border-radius:18px;padding:18px}.support-wall-home-entry,.support-wall-link-card{grid-template-columns:1fr}.support-wall-home-entry button,.support-wall-link-card button{width:100%}.support-wall-message-card{min-height:auto}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function renderMessageCards(){
    var p = copy();
    return p.messages.map(function(message, index){
      var key = 'supportMessage' + (index + 1);
      return '<article class="support-wall-message-card" data-support-message-card="' + esc(key) + '">'
        + '<strong>' + esc(message) + '</strong>'
        + '<button type="button" data-support-message="' + esc(key) + '" aria-label="' + esc(p.addButton + ': ' + message) + '">' + esc(p.addButton) + '</button>'
        + '</article>';
    }).join('');
  }
  function renderRecentList(){
    var p = copy();
    var items = readMessages().slice(0, MAX_VISIBLE);
    if(!items.length) return '<p class="support-wall-empty">' + esc(p.recentEmpty) + '</p>';
    return '<ul class="support-wall-recent-list">' + items.map(function(item){
      return '<li>' + esc(messageText(item.messageKey)) + '</li>';
    }).join('') + '</ul>';
  }
  function renderPage(){
    var p = copy();
    var count = readCount();
    return '<div class="support-wall-page">'
      + '<section class="support-wall-hero">'
      + '<div><span class="support-wall-kicker">♡ ' + esc(p.eyebrow) + '</span><h1>' + esc(p.title) + '</h1><p>' + esc(p.subtitle) + '</p></div>'
      + '<div class="support-wall-visual" aria-hidden="true"><div class="support-wall-visual-row"><span class="support-wall-visual-icon">✓</span><span class="support-wall-visual-line"></span></div><div class="support-wall-visual-row"><span class="support-wall-visual-icon">♡</span><span class="support-wall-visual-line"></span></div><div class="support-wall-visual-row"><span class="support-wall-visual-icon">◎</span><span class="support-wall-visual-line"></span></div></div>'
      + '</section>'
      + '<section class="support-wall-info"><h2>' + esc(p.introTitle) + '</h2><p>' + esc(p.introBody) + '</p><p><strong>' + esc(p.noFreeText) + '</strong></p></section>'
      + '<section class="support-wall-section"><h2>' + esc(p.chooseTitle) + '</h2><p>' + esc(p.chooseBody) + '</p><div class="support-wall-message-grid">' + renderMessageCards() + '</div><div class="support-wall-live" aria-live="polite" data-support-wall-live></div></section>'
      + '<section class="support-wall-stats">'
      + '<div class="support-wall-total" data-support-wall-total><span>' + esc(p.totalLabel) + '</span><strong>' + esc(count) + '</strong><small>' + esc(p.browserNote) + '</small></div>'
      + '<div class="support-wall-recent" data-support-wall-recent><h2>' + esc(p.recentTitle) + '</h2>' + renderRecentList() + '</div>'
      + '</section>'
      + '<section class="support-wall-cta"><div><h2>' + esc(p.ctaTitle) + '</h2><p>' + esc(p.ctaText) + '</p></div><a href="' + esc(SUPPORT_URL) + '" target="_blank" rel="noopener noreferrer">' + esc(p.ctaButton) + '</a></section>'
      + '</div>';
  }
  function ensurePanel(){
    var panel = document.getElementById('supportWallPanel');
    if(panel) return panel;
    panel = document.createElement('section');
    panel.className = 'page-content';
    panel.id = 'supportWallPanel';
    var anchor = document.getElementById('pitchPanel') || document.getElementById('partnerPanel') || document.getElementById('aboutPanel') || document.getElementById('updatesPanel') || document.getElementById('homePanel');
    if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(panel, anchor.nextSibling);
    return panel;
  }
  function updateDynamicParts(panel, success){
    if(!panel) panel = document.getElementById('supportWallPanel');
    if(!panel) return;
    var p = copy();
    var total = panel.querySelector('[data-support-wall-total]');
    if(total) total.innerHTML = '<span>' + esc(p.totalLabel) + '</span><strong>' + esc(readCount()) + '</strong><small>' + esc(p.browserNote) + '</small>';
    var recent = panel.querySelector('[data-support-wall-recent]');
    if(recent) recent.innerHTML = '<h2>' + esc(p.recentTitle) + '</h2>' + renderRecentList();
    var live = panel.querySelector('[data-support-wall-live]');
    if(live && success) live.textContent = p.added;
  }
  function addSupport(messageKey){
    var now = Date.now();
    if(now - lastAddAt < 2000) return;
    lastAddAt = now;
    var currentCount = readCount();
    var list = readMessages();
    list.unshift({
      id:'support-' + now,
      messageKey:messageKey,
      locale:currentLocale(),
      timestamp:now
    });
    writeMessages(list);
    writeCount(currentCount + 1);
    updateDynamicParts(null, true);
  }
  function bindPage(panel){
    if(!panel) return;
    Array.prototype.forEach.call(panel.querySelectorAll('[data-support-message]'), function(button){
      if(button.__supportWallBound) return;
      button.__supportWallBound = true;
      button.addEventListener('click', function(event){
        event.preventDefault();
        addSupport(button.getAttribute('data-support-message'));
      });
    });
  }
  function updateMeta(active){
    if(!active) return;
    var p = copy();
    try{ document.title = p.metaTitle; }catch(err){}
    var desc = document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content', p.metaDesc);
  }
  function showSupportWallPage(){
    ensureStyles();
    var panel = ensurePanel();
    if(!panel) return;
    panel.innerHTML = renderPage();
    bindPage(panel);
    document.querySelectorAll('.lesson-content, .page-content').forEach(function(el){ el.classList.remove('active'); });
    panel.classList.add('active');
    try{ currentPage = 'support-wall'; }catch(err){}
    try{ setBreadcrumb(copy().nav); }catch(err){}
    try{ activateSidebar('support-wall', null); }catch(err){}
    try{ updateProgress(); }catch(err){}
    var sidebar = document.getElementById('sidebar');
    if(sidebar) sidebar.classList.remove('open');
    try{ document.body.dataset.page = 'support-wall'; }catch(err){}
    updateMeta(true);
    if(window.location && window.location.hash !== '#support-wall'){
      try{ window.history.replaceState(null, '', '#support-wall'); }catch(err){}
    }
    window.scrollTo({top:0, behavior:'smooth'});
  }
  function renderHomeEntry(){
    var p = copy();
    return '<section class="support-wall-home-entry" data-support-wall-home-entry><div><h3>' + esc(p.homeTitle) + '</h3><p>' + esc(p.homeBody) + '</p></div><button type="button" data-support-wall-open>' + esc(p.homeCta) + '</button></section>';
  }
  function bindOpenButton(node){
    if(!node || node.__supportWallOpenBound) return;
    node.__supportWallOpenBound = true;
    node.addEventListener('click', function(event){
      event.preventDefault();
      showSupportWallPage();
    });
  }
  function syncHomeEntry(){
    ensureStyles();
    var home = document.getElementById('homePanel');
    if(!home) return;
    var old = home.querySelector('[data-support-wall-home-entry]');
    if(old) old.remove();
    var support = home.querySelector('[data-cpp-support]');
    var partner = home.querySelector('[data-partner-entry]');
    var wrapper = document.createElement('div');
    wrapper.innerHTML = renderHomeEntry();
    var entry = wrapper.firstChild;
    if(support && support.parentNode) support.parentNode.insertBefore(entry, support.nextSibling);
    else if(partner && partner.parentNode) partner.parentNode.insertBefore(entry, partner.nextSibling);
    else home.appendChild(entry);
    bindOpenButton(entry.querySelector('[data-support-wall-open]'));
  }
  function syncSidebarEntry(){
    ensureStyles();
    var p = copy();
    var sidebar = document.getElementById('sidebar');
    if(!sidebar) return;
    var nav = sidebar.querySelector('[data-page="support-wall"]');
    if(!nav){
      var partner = sidebar.querySelector('.lesson-nav-item[data-page="partner"]');
      var about = sidebar.querySelector('.lesson-nav-item[data-page="about"]');
      var updates = sidebar.querySelector('.lesson-nav-item[data-page="updates"]');
      nav = document.createElement('a');
      nav.className = 'lesson-nav-item support-wall-sidebar-nav';
      nav.setAttribute('data-page', 'support-wall');
      nav.setAttribute('href', routeToSupportWall());
      nav.innerHTML = '<div class="nav-num">♡</div><div><div class="nav-title"></div><div class="nav-sub"></div></div>';
      var anchor = partner || about || updates;
      if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(nav, anchor.nextSibling);
      else sidebar.appendChild(nav);
    }
    nav.querySelector('.nav-title').textContent = p.nav;
    nav.querySelector('.nav-sub').textContent = p.navSub;
    bindOpenButton(nav);
    var footer = sidebar.querySelector('.sidebar-footer');
    if(!footer) return;
    var links = footer.querySelector('[data-support-wall-footer-links]');
    if(!links){
      links = document.createElement('div');
      links.className = 'support-wall-sidebar-links';
      links.setAttribute('data-support-wall-footer-links', 'true');
      links.innerHTML = '<button type="button" data-support-wall-footer-open></button>';
      footer.appendChild(links);
    }
    var btn = links.querySelector('[data-support-wall-footer-open]');
    if(btn) btn.textContent = p.footer;
    bindOpenButton(btn);
  }
  function renderContextLink(kind){
    var p = copy();
    var title = p.partnerTitle;
    var body = p.partnerBody;
    var cta = p.partnerCta;
    if(kind === 'about'){ title = p.aboutTitle; body = p.aboutBody; cta = p.aboutCta; }
    if(kind === 'pitch'){ title = p.pitchTitle; body = p.pitchBody; cta = p.pitchCta; }
    return '<section class="support-wall-link-card" data-support-wall-context="' + esc(kind) + '"><div><h3>' + esc(title) + '</h3><p>' + esc(body) + '</p></div><button type="button" data-support-wall-open>' + esc(cta) + '</button></section>';
  }
  function syncContextLink(panelId, kind){
    var panel = document.getElementById(panelId);
    if(!panel || !panel.innerHTML) return;
    var old = panel.querySelector('[data-support-wall-context]');
    if(old) old.remove();
    var support = panel.querySelector('[data-cpp-support]');
    var contact = panel.querySelector('.partner-contact,.pitch-contact,.about-contact');
    var wrapper = document.createElement('div');
    wrapper.innerHTML = renderContextLink(kind);
    var entry = wrapper.firstChild;
    if(support && support.parentNode) support.parentNode.insertBefore(entry, support.nextSibling);
    else if(contact && contact.parentNode) contact.parentNode.insertBefore(entry, contact);
    else panel.appendChild(entry);
    bindOpenButton(entry.querySelector('[data-support-wall-open]'));
  }
  function syncContextLinks(){
    syncContextLink('aboutPanel', 'about');
    syncContextLink('partnerPanel', 'partner');
    syncContextLink('pitchPanel', 'pitch');
  }
  function syncSupportWall(){
    ensureStyles();
    ensurePanel();
    syncSidebarEntry();
    syncHomeEntry();
    syncContextLinks();
    var panel = document.getElementById('supportWallPanel');
    var active = false;
    try{
      active = (panel && panel.classList.contains('active')) || document.body.dataset.page === 'support-wall' || (window.location && (window.location.hash === '#support-wall' || window.location.hash === '#support'));
    }catch(err){}
    if(active && panel){
      panel.innerHTML = renderPage();
      bindPage(panel);
      updateMeta(true);
    }
  }
  function queueSync(){
    syncSupportWall();
    window.setTimeout(syncSupportWall, 120);
    window.setTimeout(syncSupportWall, 700);
  }
  function wrapShowPage(){
    var original = window.showPage || (typeof showPage === 'function' ? showPage : null);
    if(typeof original !== 'function' || original.__supportWallShowPageWrapped) return;
    var wrapped = function(page){
      if(page === 'support-wall' || page === 'support'){
        showSupportWallPage();
        return;
      }
      var result = original.apply(this, arguments);
      queueSync();
      return result;
    };
    wrapped.__supportWallShowPageWrapped = true;
    window.showPage = wrapped;
    try{ showPage = wrapped; }catch(err){}
  }
  function wrapSetLang(){
    var original = window.setLang || (typeof setLang === 'function' ? setLang : null);
    if(typeof original !== 'function' || original.__supportWallLangWrapped) return;
    var wrapped = function(lang){
      var wasSupportWall = false;
      try{
        var panel = document.getElementById('supportWallPanel');
        wasSupportWall = (panel && panel.classList.contains('active')) || document.body.dataset.page === 'support-wall';
      }catch(err){}
      var result = original.apply(this, arguments);
      queueSync();
      if(wasSupportWall) showSupportWallPage();
      return result;
    };
    wrapped.__supportWallLangWrapped = true;
    window.setLang = wrapped;
    try{ setLang = wrapped; }catch(err){}
  }
  function wrapFunction(name){
    var original = window[name];
    if(typeof original !== 'function' || original.__supportWallWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      queueSync();
      return result;
    };
    wrapped.__supportWallWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'showAboutMissionPage') showAboutMissionPage = wrapped;
      if(name === 'showPartnerPage') showPartnerPage = wrapped;
      if(name === 'showPitchDeckPage') showPitchDeckPage = wrapped;
    }catch(err){}
  }
  function wrapPageRoute(){
    var previous = window.__CA_GET_PAGE_ROUTE;
    window.__CA_GET_PAGE_ROUTE = function(page){
      if(page === 'support-wall' || page === 'support') return routeToSupportWall();
      if(typeof previous === 'function') return previous(page);
      return basePrefix();
    };
  }
  function shouldShowSearchResult(query){
    var q = normalize(query);
    if(!q) return false;
    var p = copy();
    var words = ['support wall','support message','community support','support','buy me a coffee'].concat(p.searchKeywords || []);
    return words.some(function(word){
      var w = normalize(word);
      return w && (q.indexOf(w) !== -1 || w.indexOf(q) !== -1);
    });
  }
  function enhanceSearchResults(query){
    var box = document.getElementById('searchResults');
    if(!box || !shouldShowSearchResult(query) || box.querySelector('[data-support-wall-search-result]')) return;
    var p = copy();
    var html = '<button type="button" class="search-result-item search-result-button" data-support-wall-search-result>'
      + '<span class="search-result-badge support-wall">♡</span>'
      + '<span class="search-result-body"><span class="search-result-title">' + esc(p.title) + '</span>'
      + '<span class="search-result-meta">' + esc(p.eyebrow) + '</span>'
      + '<span class="search-result-desc">' + esc(p.navSub) + '</span></span></button>';
    box.insertAdjacentHTML('afterbegin', html);
    bindOpenButton(box.querySelector('[data-support-wall-search-result]'));
  }
  function wrapSearch(){
    var original = window.renderSearchAutocompleteFinal || window.renderPatchedSearchResults;
    if(typeof original !== 'function' || original.__supportWallSearchWrapped) return;
    var wrapped = function(query){
      var result = original.apply(this, arguments);
      enhanceSearchResults(query);
      return result;
    };
    wrapped.__supportWallSearchWrapped = true;
    window.renderSearchAutocompleteFinal = wrapped;
    window.renderPatchedSearchResults = wrapped;
    try{ renderSearchAutocompleteFinal = wrapped; }catch(err){}
    try{ renderPatchedSearchResults = wrapped; }catch(err){}
  }
  function maybeOpenHash(){
    if(!window.location) return;
    if(window.location.hash === '#support-wall' || window.location.hash === '#support') showSupportWallPage();
  }
  function init(){
    ensureStyles();
    wrapPageRoute();
    wrapShowPage();
    wrapSetLang();
    wrapFunction('showAboutMissionPage');
    wrapFunction('showPartnerPage');
    wrapFunction('showPitchDeckPage');
    wrapSearch();
    queueSync();
    maybeOpenHash();
  }

  window.renderSupportWallPage = renderPage;
  window.showSupportWallPage = showSupportWallPage;
  window.__COIN_PROOFPATH_SUPPORT_WALL = {
    show:showSupportWallPage,
    refresh:queueSync,
    readMessages:readMessages,
    count:readCount,
    route:routeToSupportWall,
    storageKeys:[STORAGE_KEY, COUNT_KEY]
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  if(typeof window.addEventListener === 'function'){
    window.addEventListener('hashchange', maybeOpenHash);
    window.addEventListener('load', function(){
      init();
      window.setTimeout(init, 0);
    });
  }
})();
