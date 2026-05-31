(function(){
  if(typeof window === 'undefined' || window.__referenceSourceVisibilitySearchSync20260526) return;
  window.__referenceSourceVisibilitySearchSync20260526 = true;

  var LANGS = ['en','ko','th','id','pt','br','tr','es','ar','vi','ha'];

  var SEARCH_COPY = {
    en:{placeholder:'Type to search', shortPlaceholder:'Type to search', ariaLabel:'Type to search', buttonLabel:'Search', openLabel:'Open search', closeLabel:'Close search', noResults:'No results found', tryAnother:'Try another keyword', startTyping:'Type to search', suggestedResults:'Suggested results', clearSearch:'Clear search', results:'Search results'},
    ko:{placeholder:'검색어를 입력하세요', shortPlaceholder:'검색어를 입력하세요', ariaLabel:'검색어를 입력하세요', buttonLabel:'검색', openLabel:'검색 열기', closeLabel:'검색 닫기', noResults:'검색 결과가 없습니다', tryAnother:'다른 검색어를 입력해 보세요', startTyping:'검색어를 입력하세요', suggestedResults:'추천 결과', clearSearch:'검색 지우기', results:'검색 결과'},
    th:{placeholder:'ค้นหา Coin ProofPath', shortPlaceholder:'พิมพ์เพื่อค้นหา', ariaLabel:'ค้นหา Coin ProofPath', buttonLabel:'ค้นหา', openLabel:'เปิดการค้นหา', closeLabel:'ปิดการค้นหา', noResults:'ไม่พบผลลัพธ์', tryAnother:'ลองใช้คำค้นอื่น', startTyping:'พิมพ์เพื่อค้นหา', suggestedResults:'ผลลัพธ์แนะนำ', clearSearch:'ล้างการค้นหา', results:'ผลการค้นหา'},
    id:{placeholder:'Cari Coin ProofPath', shortPlaceholder:'Ketik untuk mencari', ariaLabel:'Cari Coin ProofPath', buttonLabel:'Cari', openLabel:'Buka pencarian', closeLabel:'Tutup pencarian', noResults:'Tidak ada hasil', tryAnother:'Coba kata kunci lain', startTyping:'Ketik untuk mencari', suggestedResults:'Hasil disarankan', clearSearch:'Hapus pencarian', results:'Hasil pencarian'},
    pt:{placeholder:'Pesquisar Coin ProofPath', shortPlaceholder:'Digite para pesquisar', ariaLabel:'Pesquisar Coin ProofPath', buttonLabel:'Pesquisar', openLabel:'Abrir pesquisa', closeLabel:'Fechar pesquisa', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave', startTyping:'Digite para pesquisar', suggestedResults:'Resultados sugeridos', clearSearch:'Limpar pesquisa', results:'Resultados da pesquisa'},
    br:{placeholder:'Pesquisar no Coin ProofPath', shortPlaceholder:'Digite para pesquisar', ariaLabel:'Pesquisar no Coin ProofPath', buttonLabel:'Pesquisar', openLabel:'Abrir busca', closeLabel:'Fechar busca', noResults:'Nenhum resultado encontrado', tryAnother:'Tente outra palavra-chave', startTyping:'Digite para pesquisar', suggestedResults:'Resultados sugeridos', clearSearch:'Limpar busca', results:'Resultados da busca'},
    tr:{placeholder:'Coin ProofPath’ta ara', shortPlaceholder:'Aramak için yazın', ariaLabel:'Coin ProofPath’ta ara', buttonLabel:'Ara', openLabel:'Aramayı aç', closeLabel:'Aramayı kapat', noResults:'Sonuç bulunamadı', tryAnother:'Başka bir anahtar kelime deneyin', startTyping:'Aramak için yazın', suggestedResults:'Önerilen sonuçlar', clearSearch:'Aramayı temizle', results:'Arama sonuçları'},
    es:{placeholder:'Buscar en Coin ProofPath', shortPlaceholder:'Escribe para buscar', ariaLabel:'Buscar en Coin ProofPath', buttonLabel:'Buscar', openLabel:'Abrir búsqueda', closeLabel:'Cerrar búsqueda', noResults:'No se encontraron resultados', tryAnother:'Prueba otra palabra clave', startTyping:'Escribe para buscar', suggestedResults:'Resultados sugeridos', clearSearch:'Borrar búsqueda', results:'Resultados de búsqueda'},
    ar:{placeholder:'ابحث في Coin ProofPath', shortPlaceholder:'اكتب للبحث', ariaLabel:'ابحث في Coin ProofPath', buttonLabel:'بحث', openLabel:'فتح البحث', closeLabel:'إغلاق البحث', noResults:'لا توجد نتائج', tryAnother:'جرّب كلمة أخرى', startTyping:'اكتب للبحث', suggestedResults:'نتائج مقترحة', clearSearch:'مسح البحث', results:'نتائج البحث'},
    vi:{placeholder:'Tìm kiếm Coin ProofPath', shortPlaceholder:'Nhập để tìm kiếm', ariaLabel:'Tìm kiếm Coin ProofPath', buttonLabel:'Tìm kiếm', openLabel:'Mở tìm kiếm', closeLabel:'Đóng tìm kiếm', noResults:'Không tìm thấy kết quả', tryAnother:'Thử từ khóa khác', startTyping:'Nhập để tìm kiếm', suggestedResults:'Kết quả gợi ý', clearSearch:'Xóa tìm kiếm', results:'Kết quả tìm kiếm'},
    ha:{placeholder:'Bincika Coin ProofPath', shortPlaceholder:'Rubuta don bincike', ariaLabel:'Bincika Coin ProofPath', buttonLabel:'Bincika', openLabel:'Bude bincike', closeLabel:'Rufe bincike', noResults:'Babu sakamako', tryAnother:'Gwada wata kalma', startTyping:'Rubuta don bincike', suggestedResults:'Shawarar sakamako', clearSearch:'Share bincike', results:'Sakamakon bincike'}
  };

  var SOURCE_UI = {
    en:{lessonTitle:'Reference Sources for This Lesson', lessonDesc:'Official documents and trusted learning resources for this lesson.', libraryTitle:'Intermediate Reference Sources', libraryDesc:'Official docs, education articles, transparency pages, tools, and security analysis connected to Lessons 8-14.', open:'Open source', external:'External source', note:'External sources are provided for learning and verification. Coin ProofPath does not endorse investment decisions or specific services.', lesson:'Lesson', officialDocs:'Official docs', officialSource:'Official source', article:'Education article', supportDocs:'Support docs', toolDocs:'Tool guide', securityAnalysis:'Security analysis', securityGuide:'Security guide'},
    ko:{lessonTitle:'이 강의의 참고 출처', lessonDesc:'이 강의 내용을 더 깊게 확인할 수 있는 공식 문서와 신뢰 가능한 학습 자료입니다.', libraryTitle:'중급자 참고 출처', libraryDesc:'8~14강과 연결된 공식 문서, 교육 자료, 투명성 페이지, 도구, 보안 분석 자료입니다.', open:'출처 열기', external:'외부 출처', note:'외부 출처는 학습과 검증을 돕기 위해 제공됩니다. Coin ProofPath는 투자 결정이나 특정 서비스 이용을 권유하지 않습니다.', lesson:'강', officialDocs:'공식 문서', officialSource:'공식 출처', article:'교육 자료', supportDocs:'지원 문서', toolDocs:'도구 가이드', securityAnalysis:'보안 분석', securityGuide:'보안 가이드'},
    th:{lessonTitle:'แหล่งอ้างอิงสำหรับบทนี้', lessonDesc:'เอกสารทางการและแหล่งเรียนรู้ที่เชื่อถือได้สำหรับบทนี้', libraryTitle:'แหล่งอ้างอิงระดับกลาง', libraryDesc:'เอกสารทางการ บทความการศึกษา หน้าโปร่งใส เครื่องมือ และบทวิเคราะห์ความปลอดภัยสำหรับบทเรียน 8-14', open:'เปิดแหล่งอ้างอิง', external:'แหล่งภายนอก', note:'แหล่งภายนอกมีไว้เพื่อการเรียนรู้และตรวจสอบ Coin ProofPath ไม่ได้แนะนำการลงทุนหรือบริการใดโดยเฉพาะ', lesson:'บทเรียน', officialDocs:'เอกสารทางการ', officialSource:'แหล่งทางการ', article:'บทความการศึกษา', supportDocs:'เอกสารช่วยเหลือ', toolDocs:'คู่มือเครื่องมือ', securityAnalysis:'บทวิเคราะห์ความปลอดภัย', securityGuide:'คู่มือความปลอดภัย'},
    id:{lessonTitle:'Sumber rujukan pelajaran ini', lessonDesc:'Dokumen resmi dan sumber belajar tepercaya untuk pelajaran ini.', libraryTitle:'Sumber rujukan menengah', libraryDesc:'Dokumen resmi, artikel edukasi, halaman transparansi, alat, dan analisis keamanan untuk Pelajaran 8-14.', open:'Buka sumber', external:'Sumber eksternal', note:'Sumber eksternal disediakan untuk belajar dan verifikasi. Coin ProofPath tidak menganjurkan keputusan investasi atau layanan tertentu.', lesson:'Pelajaran', officialDocs:'Dokumen resmi', officialSource:'Sumber resmi', article:'Artikel edukasi', supportDocs:'Dokumen dukungan', toolDocs:'Panduan alat', securityAnalysis:'Analisis keamanan', securityGuide:'Panduan keamanan'},
    pt:{lessonTitle:'Fontes de referência desta lição', lessonDesc:'Documentos oficiais e recursos confiáveis para aprofundar esta lição.', libraryTitle:'Fontes de referência intermediárias', libraryDesc:'Documentos oficiais, artigos educativos, páginas de transparência, ferramentas e análises de segurança das lições 8-14.', open:'Abrir fonte', external:'Fonte externa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.', lesson:'Lição', officialDocs:'Documentos oficiais', officialSource:'Fonte oficial', article:'Artigo educativo', supportDocs:'Documentos de suporte', toolDocs:'Guia de ferramenta', securityAnalysis:'Análise de segurança', securityGuide:'Guia de segurança'},
    br:{lessonTitle:'Fontes de referência desta aula', lessonDesc:'Documentos oficiais e recursos confiáveis para aprofundar esta aula.', libraryTitle:'Fontes de referência intermediárias', libraryDesc:'Documentos oficiais, artigos educativos, páginas de transparência, ferramentas e análises de segurança das aulas 8-14.', open:'Abrir fonte', external:'Fonte externa', note:'Fontes externas são fornecidas para aprendizado e verificação. Coin ProofPath não recomenda decisões de investimento nem serviços específicos.', lesson:'Aula', officialDocs:'Documentos oficiais', officialSource:'Fonte oficial', article:'Artigo educativo', supportDocs:'Documentos de suporte', toolDocs:'Guia de ferramenta', securityAnalysis:'Análise de segurança', securityGuide:'Guia de segurança'},
    tr:{lessonTitle:'Bu dersin referans kaynakları', lessonDesc:'Bu dersi daha derin incelemek için resmi belgeler ve güvenilir öğrenme kaynakları.', libraryTitle:'Orta seviye referans kaynakları', libraryDesc:'Ders 8-14 için resmi belgeler, eğitim yazıları, şeffaflık sayfaları, araçlar ve güvenlik analizleri.', open:'Kaynağı aç', external:'Dış kaynak', note:'Dış kaynaklar öğrenme ve doğrulama için verilir. Coin ProofPath yatırım kararlarını veya belirli hizmetleri önermez.', lesson:'Ders', officialDocs:'Resmi belgeler', officialSource:'Resmi kaynak', article:'Eğitim yazısı', supportDocs:'Destek belgesi', toolDocs:'Araç rehberi', securityAnalysis:'Güvenlik analizi', securityGuide:'Güvenlik rehberi'},
    es:{lessonTitle:'Fuentes de referencia de esta lección', lessonDesc:'Documentos oficiales y recursos confiables para profundizar en esta lección.', libraryTitle:'Fuentes de referencia intermedias', libraryDesc:'Documentos oficiales, artículos educativos, páginas de transparencia, herramientas y análisis de seguridad de las lecciones 8-14.', open:'Abrir fuente', external:'Fuente externa', note:'Las fuentes externas se ofrecen para aprendizaje y verificación. Coin ProofPath no recomienda inversiones ni servicios específicos.', lesson:'Lección', officialDocs:'Documentos oficiales', officialSource:'Fuente oficial', article:'Artículo educativo', supportDocs:'Documentos de soporte', toolDocs:'Guía de herramienta', securityAnalysis:'Análisis de seguridad', securityGuide:'Guía de seguridad'},
    ar:{lessonTitle:'مصادر مرجعية لهذا الدرس', lessonDesc:'وثائق رسمية وموارد تعلم موثوقة للتعمق في هذا الدرس.', libraryTitle:'مصادر مرجعية للمستوى المتوسط', libraryDesc:'وثائق رسمية ومقالات تعليمية وصفحات شفافية وأدوات وتحليلات أمنية للدروس 8-14.', open:'افتح المصدر', external:'مصدر خارجي', note:'تُقدّم المصادر الخارجية للتعلم والتحقق. لا تقدم Coin ProofPath نصائح استثمارية أو توصيات لخدمات محددة.', lesson:'درس', officialDocs:'وثائق رسمية', officialSource:'مصدر رسمي', article:'مقال تعليمي', supportDocs:'وثائق دعم', toolDocs:'دليل أداة', securityAnalysis:'تحليل أمني', securityGuide:'دليل أمني'},
    vi:{lessonTitle:'Nguồn tham khảo cho bài học này', lessonDesc:'Tài liệu chính thức và nguồn học đáng tin cậy để kiểm tra sâu hơn bài học này.', libraryTitle:'Nguồn tham khảo trung cấp', libraryDesc:'Tài liệu chính thức, bài viết giáo dục, trang minh bạch, công cụ và phân tích bảo mật cho Bài 8-14.', open:'Mở nguồn', external:'Nguồn bên ngoài', note:'Nguồn bên ngoài được cung cấp để học và xác minh. Coin ProofPath không khuyến nghị đầu tư hoặc dịch vụ cụ thể.', lesson:'Bài học', officialDocs:'Tài liệu chính thức', officialSource:'Nguồn chính thức', article:'Bài viết giáo dục', supportDocs:'Tài liệu hỗ trợ', toolDocs:'Hướng dẫn công cụ', securityAnalysis:'Phân tích bảo mật', securityGuide:'Hướng dẫn bảo mật'},
    ha:{lessonTitle:'Tushen bayanai na wannan darasi', lessonDesc:'Takardu na hukuma da amintattun kayan koyo don fahimtar wannan darasi sosai.', libraryTitle:'Tushen bayanai na matsakaici', libraryDesc:'Takardu na hukuma, makalolin ilimi, shafukan gaskiya, kayan aiki, da binciken tsaro don Darasi 8-14.', open:'Bude tushe', external:'Tushe na waje', note:'Ana bayar da tushe na waje don koyo da tabbatarwa. Coin ProofPath ba ya ba da shawarar zuba jari ko wani takamaiman sabis.', lesson:'Darasi', officialDocs:'Takardu na hukuma', officialSource:'Tushe na hukuma', article:'Makala ta ilimi', supportDocs:'Takardun tallafi', toolDocs:'Jagorar kayan aiki', securityAnalysis:'Binciken tsaro', securityGuide:'Jagorar tsaro'}
  };

  var TOPIC_DESCS = {
    wallet:{en:'Explains wallet types, custody models, private keys, seed phrases, and responsibility.', ko:'지갑 유형, 보관 방식, 개인키, 시드 문구, 책임 범위를 이해하는 데 도움이 됩니다.', th:'อธิบายประเภทวอลเล็ต รูปแบบ custody คีย์ส่วนตัว seed phrase และความรับผิดชอบ', id:'Menjelaskan jenis wallet, model custody, private key, seed phrase, dan tanggung jawab.', pt:'Explica tipos de carteira, modelos de custódia, chaves privadas, seed phrase e responsabilidade.', br:'Explica tipos de carteira, modelos de custódia, chaves privadas, seed phrase e responsabilidade.', tr:'Cüzdan türleri, saklama modeli, özel anahtar, seed phrase ve sorumluluğu açıklar.', es:'Explica tipos de billetera, modelos de custodia, claves privadas, seed phrase y responsabilidad.', ar:'يشرح أنواع المحافظ ونماذج الحفظ والمفاتيح الخاصة وعبارة الاسترداد والمسؤولية.', vi:'Giải thích loại ví, mô hình lưu ký, khóa riêng, seed phrase và trách nhiệm.', ha:'Yana bayyana nauikan wallet, custody, private key, seed phrase, da alhaki.'},
    fees:{en:'Explains gas, transaction fees, and why blockchain activity requires network costs.', ko:'가스와 거래 수수료, 네트워크 사용 비용이 생기는 이유를 설명합니다.', th:'อธิบาย gas ค่าธรรมเนียมธุรกรรม และต้นทุนเครือข่าย', id:'Menjelaskan gas, biaya transaksi, dan alasan biaya jaringan muncul.', pt:'Explica gas, taxas de transação e por que há custos de rede.', br:'Explica gas, taxas de transação e por que há custos de rede.', tr:'Gas, işlem ücretleri ve ağ maliyetlerinin neden oluştuğunu açıklar.', es:'Explica gas, comisiones y por qué existen costos de red.', ar:'يشرح الغاز ورسوم المعاملات وسبب تكاليف الشبكة.', vi:'Giải thích gas, phí giao dịch và lý do có chi phí mạng.', ha:'Yana bayyana gas, kudin muamala, da dalilin kudin hanyar sadarwa.'},
    stable:{en:'Helps compare stablecoin reserves, issuance models, transparency, and depeg risk.', ko:'스테이블코인의 준비금, 발행 구조, 투명성, 디페그 위험을 비교하는 데 도움이 됩니다.', th:'ช่วยเปรียบเทียบเงินสำรอง การออกเหรียญ ความโปร่งใส และความเสี่ยง depeg', id:'Membantu membandingkan cadangan, penerbitan, transparansi, dan risiko depeg stablecoin.', pt:'Ajuda a comparar reservas, emissão, transparência e risco de depeg em stablecoins.', br:'Ajuda a comparar reservas, emissão, transparência e risco de depeg em stablecoins.', tr:'Stablecoin rezervleri, ihraç modeli, şeffaflık ve depeg riskini karşılaştırmaya yardım eder.', es:'Ayuda a comparar reservas, emisión, transparencia y riesgo de depeg.', ar:'يساعد على مقارنة الاحتياطيات ونماذج الإصدار والشفافية ومخاطر فك الارتباط.', vi:'Giúp so sánh dự trữ, phát hành, minh bạch và rủi ro depeg của stablecoin.', ha:'Yana taimakawa kwatanta ajiyar stablecoin, fitarwa, gaskiya, da hadarin depeg.'},
    defi:{en:'Explains token approvals, signatures, wallet drainers, and how revoking approvals can reduce risk.', ko:'토큰 승인, 서명, 지갑 드레이너, 승인 해제가 위험을 줄이는 이유를 설명합니다.', th:'อธิบาย token approval ลายเซ็น wallet drainer และการ revoke เพื่อลดความเสี่ยง', id:'Menjelaskan approval token, signature, wallet drainer, dan revoke approval.', pt:'Explica aprovações de token, assinaturas, wallet drainers e revogação.', br:'Explica aprovações de token, assinaturas, wallet drainers e revogação.', tr:'Token onayları, imzalar, wallet drainer riskleri ve onay iptalini açıklar.', es:'Explica aprobaciones de token, firmas, wallet drainers y revocación.', ar:'يشرح موافقات التوكن والتوقيعات ومخاطر سحب المحافظ وإلغاء الموافقات.', vi:'Giải thích phê duyệt token, chữ ký, wallet drainer và thu hồi phê duyệt.', ha:'Yana bayyana token approval, sa hannu, wallet drainer, da revoke approval.'},
    project:{en:'Explains tokenomics, supply, distribution, incentives, and project evaluation signals.', ko:'토크노믹스, 공급량, 분배, 인센티브, 프로젝트 검토 신호를 설명합니다.', th:'อธิบาย tokenomics อุปทาน การกระจาย แรงจูงใจ และสัญญาณประเมินโปรเจกต์', id:'Menjelaskan tokenomics, suplai, distribusi, insentif, dan sinyal evaluasi proyek.', pt:'Explica tokenomics, oferta, distribuição, incentivos e sinais de avaliação.', br:'Explica tokenomics, oferta, distribuição, incentivos e sinais de avaliação.', tr:'Tokenomics, arz, dağıtım, teşvikler ve proje değerlendirme sinyallerini açıklar.', es:'Explica tokenomics, oferta, distribución, incentivos y señales de evaluación.', ar:'يشرح اقتصاديات التوكن والعرض والتوزيع والحوافز وإشارات تقييم المشروع.', vi:'Giải thích tokenomics, nguồn cung, phân bổ, khuyến khích và tín hiệu đánh giá dự án.', ha:'Yana bayyana tokenomics, arziki, rabawa, kwadaitarwa, da alamun tantance aikin.'},
    bridge:{en:'Explains bridge concepts, cross-chain movement, and risks when assets move between chains.', ko:'브리지 개념, 크로스체인 이동, 체인 간 자산 이동 위험을 설명합니다.', th:'อธิบาย bridge การย้ายข้ามเชน และความเสี่ยงของสินทรัพย์ข้ามเชน', id:'Menjelaskan bridge, perpindahan lintas chain, dan risikonya.', pt:'Explica bridges, movimentação cross-chain e riscos entre chains.', br:'Explica bridges, movimentação cross-chain e riscos entre chains.', tr:'Bridge kavramı, cross-chain hareket ve zincirler arası riskleri açıklar.', es:'Explica bridges, movimiento cross-chain y riesgos entre cadenas.', ar:'يشرح الجسور والحركة بين السلاسل ومخاطر نقل الأصول.', vi:'Giải thích bridge, chuyển cross-chain và rủi ro khi tài sản đi giữa các chain.', ha:'Yana bayyana bridge, cross-chain transfer, da hadarin motsa kadara tsakanin chain.'},
    scam:{en:'Explains scam patterns, address poisoning, impersonation, and verification habits.', ko:'사기 패턴, 주소 오염, 사칭, 검증 습관을 이해하는 데 도움이 됩니다.', th:'อธิบายรูปแบบสแกม address poisoning การแอบอ้าง และนิสัยการตรวจสอบ', id:'Menjelaskan pola scam, address poisoning, impersonasi, dan kebiasaan verifikasi.', pt:'Explica padrões de golpe, address poisoning, impersonação e hábitos de verificação.', br:'Explica padrões de golpe, address poisoning, impersonação e hábitos de verificação.', tr:'Dolandırıcılık kalıpları, address poisoning, taklit ve doğrulama alışkanlıklarını açıklar.', es:'Explica estafas, address poisoning, suplantación y hábitos de verificación.', ar:'يشرح أنماط الاحتيال وتسميم العناوين والانتحال وعادات التحقق.', vi:'Giải thích mẫu scam, address poisoning, giả mạo và thói quen xác minh.', ha:'Yana bayyana tsarin scam, address poisoning, kwaikwayo, da aladar tabbatarwa.'}
  };

  var ROWS = [
    {id:'source-binance-crypto-wallet-types', lesson:8, type:'article', topic:'wallet', publisher:'Binance Academy', titleEn:'Binance Academy - Crypto Wallet Types Explained', titleKo:'Binance Academy - 크립토 지갑 유형 설명', url:'https://www.binance.com/en/academy/articles/crypto-wallet-types-explained'},
    {id:'source-binance-custodial-vs-noncustodial', lesson:8, type:'article', topic:'wallet', publisher:'Binance Academy', titleEn:'Binance Academy - Custodial vs Non-Custodial Wallets', titleKo:'Binance Academy - 수탁형 지갑과 비수탁형 지갑', url:'https://www.binance.com/en/academy/articles/custodial-vs-non-custodial-wallets-what-s-the-difference'},
    {id:'source-ethereum-gas-docs', lesson:9, type:'officialDocs', topic:'fees', publisher:'Ethereum.org', titleEn:'Ethereum.org - Gas and Fees', titleKo:'Ethereum.org - 가스와 수수료', url:'https://ethereum.org/developers/docs/gas/'},
    {id:'source-coinbase-gas-fees', lesson:9, type:'article', topic:'fees', publisher:'Coinbase Learn', titleEn:'Coinbase Learn - What Are Gas Fees?', titleKo:'Coinbase Learn - 가스 수수료란 무엇인가?', url:'https://www.coinbase.com/learn/crypto-basics/what-are-gas-fees'},
    {id:'source-tether-transparency', lesson:10, type:'officialSource', topic:'stable', publisher:'Tether', titleEn:'Tether - Transparency', titleKo:'Tether - 투명성 페이지', url:'https://tether.to/en/transparency/?tab=usdt'},
    {id:'source-circle-usdc', lesson:10, type:'officialSource', topic:'stable', publisher:'Circle', titleEn:'Circle - USDC', titleKo:'Circle - USDC 공식 자료', url:'https://www.usdc.com/'},
    {id:'source-makerdao-dai', lesson:10, type:'officialSource', topic:'stable', publisher:'MakerDAO', titleEn:'MakerDAO - Dai and Maker Protocol', titleKo:'MakerDAO - DAI와 Maker Protocol', url:'https://makerdao.com/'},
    {id:'source-ledger-token-approvals', lesson:11, type:'supportDocs', topic:'defi', publisher:'Ledger Support', titleEn:'Ledger Support - Ethereum Token Approvals Explained', titleKo:'Ledger Support - 이더리움 토큰 승인 설명', url:'https://support.ledger.com/de/article/Ethereum-Token-Approvals-Explained'},
    {id:'source-revoke-cash', lesson:11, type:'toolDocs', topic:'defi', publisher:'Revoke.cash', titleEn:'Revoke.cash - Token Approval Management', titleKo:'Revoke.cash - 토큰 승인 관리', url:'https://revoke.cash/'},
    {id:'source-trustwallet-token-approvals', lesson:11, type:'article', topic:'defi', publisher:'Trust Wallet', titleEn:'Trust Wallet - Token Approvals and Wallet Drainers', titleKo:'Trust Wallet - 토큰 승인과 지갑 드레이너', url:'https://trustwallet.com/blog/security/token-approvals-and-wallet-drainers-how-to-keep-your-assets-safe'},
    {id:'source-binance-tokenomics', lesson:12, type:'article', topic:'project', publisher:'Binance Academy', titleEn:'Binance Academy - What Is Tokenomics?', titleKo:'Binance Academy - 토크노믹스란 무엇인가?', url:'https://www.binance.com/en/academy/articles/what-is-tokenomics-and-why-does-it-matter'},
    {id:'source-ethereum-bridges', lesson:13, type:'officialDocs', topic:'bridge', publisher:'Ethereum.org', titleEn:'Ethereum.org - Bridges', titleKo:'Ethereum.org - 브리지', url:'https://ethereum.org/developers/docs/bridges/'},
    {id:'source-chainalysis-address-poisoning', lesson:14, type:'securityAnalysis', topic:'scam', publisher:'Chainalysis', titleEn:'Chainalysis - Anatomy of an Address Poisoning Scam', titleKo:'Chainalysis - 주소 오염 사기 분석', url:'https://www.chainalysis.com/blog/address-poisoning-scam/'},
    {id:'source-chainalysis-crypto-scam-glossary', lesson:14, type:'securityGuide', topic:'scam', publisher:'Chainalysis', titleEn:'Chainalysis - What Is a Crypto Scam?', titleKo:'Chainalysis - 크립토 사기란 무엇인가?', url:'https://www.chainalysis.com/glossary/crypto-scam/'},
    {id:'source-chainalysis-impersonation-scams', lesson:14, type:'securityGuide', topic:'scam', publisher:'Chainalysis', titleEn:'Chainalysis - Preventing Chainalysis Impersonation Scams', titleKo:'Chainalysis - 사칭 사기 예방 안내', url:'https://www.chainalysis.com/scams/'}
  ];

  function esc(value){
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }
  function re(value){ return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function normalize(value){
    return String(value || '').toLowerCase().replace(/https?:\/\//g,'').replace(/\/$/,'').replace(/\s+/g,' ').trim();
  }
  function langKey(value){
    var lang = String(value || '').toLowerCase();
    if(lang === 'pt-br' || lang.indexOf('br') === 0) return 'br';
    if(lang.indexOf('pt') === 0) return 'pt';
    return LANGS.indexOf(lang) !== -1 ? lang : 'en';
  }
  function currentLocale(){
    var lang = 'en';
    try{ lang = localStorage.getItem('cryptoAcademyLang') || (typeof currentLang === 'string' && currentLang) || document.documentElement.lang || 'en'; }
    catch(error){ lang = (typeof currentLang === 'string' && currentLang) ? currentLang : 'en'; }
    return langKey(lang);
  }
  function ui(lang){ return SOURCE_UI[langKey(lang)] || SOURCE_UI.en; }
  function searchUi(lang){ return SEARCH_COPY[langKey(lang)] || SEARCH_COPY.en; }
  function topicDesc(topic, lang){
    var pack = TOPIC_DESCS[topic] || TOPIC_DESCS.wallet;
    return pack[langKey(lang)] || pack.en || '';
  }
  function typeLabel(row, lang){
    var pack = ui(lang);
    return pack[row.type] || pack.external || SOURCE_UI.en.external;
  }
  function titleFallback(row, lang){
    return langKey(lang) === 'ko' ? (row.titleKo || row.titleEn) : row.titleEn;
  }
  function sourceItemsFor(lang){
    try{
      if(typeof getSourceItems === 'function'){
        var items = getSourceItems() || [];
        if(items && items.length) return items;
      }
    }catch(error){}
    try{
      if(typeof sourceLibrary !== 'undefined'){
        return sourceLibrary[langKey(lang)] || sourceLibrary.en || [];
      }
    }catch(error){}
    return [];
  }
  function sourceFromStore(row, lang){
    var targetUrl = normalize(row.url);
    var targetTitle = normalize(row.titleEn);
    var items = sourceItemsFor(lang);
    for(var i = 0; i < items.length; i++){
      var item = items[i] || [];
      var url = item[4] || item.url || '';
      var title = item[2] || item.title || item[1] || '';
      if((url && normalize(url) === targetUrl) || (title && normalize(title) === targetTitle)){
        return {
          id:row.id,
          lesson:row.lesson,
          type:typeLabel(row, lang),
          publisher:item[1] || row.publisher,
          title:title || titleFallback(row, lang),
          desc:item[3] || item.description || topicDesc(row.topic, lang),
          url:row.url
        };
      }
    }
    return null;
  }
  function sourceFor(row, lang){
    return sourceFromStore(row, lang) || {
      id:row.id,
      lesson:row.lesson,
      type:typeLabel(row, lang),
      publisher:row.publisher,
      title:titleFallback(row, lang),
      desc:topicDesc(row.topic, lang),
      url:row.url
    };
  }
  function rowsForLesson(lessonNo){
    return ROWS.filter(function(row){ return row.lesson === lessonNo; });
  }
  function lessonLabel(lessonNo, lang){
    return langKey(lang) === 'ko' ? String(lessonNo) + ui(lang).lesson : ui(lang).lesson + ' ' + lessonNo;
  }
  function referenceCard(source, lang){
    return '<article class="lesson-reference-card lesson-source-card" data-reference-source-id="' + esc(source.id) + '">'
      + '<span class="reference-label source-label">' + esc(source.type) + '</span>'
      + '<strong class="reference-title source-title">' + esc(source.title) + '</strong>'
      + '<p class="reference-description source-description">' + esc(source.desc) + '</p>'
      + '<a class="reference-link lesson-source-link" href="' + esc(source.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ui(lang).open) + '</a>'
      + '</article>';
  }
  function referenceSectionHtml(lessonNo, lang){
    var sources = rowsForLesson(lessonNo).map(function(row){ return sourceFor(row, lang); }).filter(function(source){ return source && source.url; });
    if(!sources.length) return '';
    return '<section class="lesson-reference-sources lesson-reference-sources-early" data-reference-source-early="' + esc(lessonNo) + '">'
      + '<div class="lesson-reference-head">'
      + '<span class="lesson-guide-kicker">' + esc(ui(lang).external) + '</span>'
      + '<h2>' + esc(ui(lang).lessonTitle) + '</h2>'
      + '<p>' + esc(ui(lang).lessonDesc) + '</p>'
      + '</div>'
      + '<div class="lesson-reference-grid">' + sources.map(function(source){ return referenceCard(source, lang); }).join('') + '</div>'
      + '<p class="lesson-reference-note">' + esc(ui(lang).note) + '</p>'
      + '</section>';
  }
  function insertAfterSectionWithAttr(html, attr, section){
    var start = html.indexOf(attr);
    if(start === -1) return null;
    var end = html.indexOf('</section>', start);
    if(end === -1) return null;
    end += '</section>'.length;
    return html.slice(0, end) + section + html.slice(end);
  }
  function insertAfterFirstBlock(html, selectorText, section){
    var start = html.indexOf(selectorText);
    if(start === -1) return null;
    var end = html.indexOf('</div>', start);
    if(end === -1) return null;
    end += '</div>'.length;
    return html.slice(0, end) + section + html.slice(end);
  }
  function patchLessonHtml(html, index){
    var lessonNo = Number(index) + 1;
    if(!html || lessonNo < 8 || lessonNo > 14 || html.indexOf('data-reference-source-early="' + lessonNo + '"') !== -1) return html;
    var section = referenceSectionHtml(lessonNo, currentLocale());
    if(!section) return html;
    var patched = insertAfterSectionWithAttr(html, 'data-lesson-key-terms="' + lessonNo + '"', section);
    if(patched) return patched;
    patched = insertAfterFirstBlock(html, 'class="callout info"', section);
    if(patched) return patched;
    var lessonBody = html.indexOf('<div class="lesson-body"');
    if(lessonBody !== -1){
      var bodyEnd = html.indexOf('>', lessonBody);
      if(bodyEnd !== -1) return html.slice(0, bodyEnd + 1) + section + html.slice(bodyEnd + 1);
    }
    return section + html;
  }
  function patchRenderLesson(){
    var previous = window.renderLesson || (typeof renderLesson === 'function' ? renderLesson : null);
    if(typeof previous !== 'function' || previous.__referenceSourceVisibilityWrapped) return;
    var wrapped = function(index){
      return patchLessonHtml(previous.apply(this, arguments) || '', index);
    };
    wrapped.__referenceSourceVisibilityWrapped = true;
    window.renderLesson = wrapped;
    try{ renderLesson = wrapped; }catch(error){}
  }

  function libraryCard(row, lang){
    var source = sourceFor(row, lang);
    return '<article class="source-library-card source-external" data-reference-library-source-id="' + esc(source.id) + '">'
      + '<span class="source-card-label">' + esc(source.type) + '</span>'
      + '<strong class="source-card-title">' + esc(source.title) + '</strong>'
      + '<p class="source-card-description">' + esc(source.desc) + '</p>'
      + '<div class="source-card-meta"><span>' + esc(lessonLabel(source.lesson, lang)) + '</span><span>' + esc(ui(lang).external) + '</span></div>'
      + '<a class="source-card-link" href="' + esc(source.url) + '" target="_blank" rel="noopener noreferrer">' + esc(ui(lang).open) + '</a>'
      + '</article>';
  }
  function sourceLibrarySectionHtml(lang){
    return '<section class="src-section-block reference-source-library-section" data-reference-source-library-visibility>'
      + '<div class="src-section-heading">' + esc(ui(lang).libraryTitle) + '<span class="src-section-count">' + ROWS.length + '</span></div>'
      + '<p class="src-group-desc">' + esc(ui(lang).libraryDesc) + '</p>'
      + '<div class="source-library-grid reference-source-library-grid">' + ROWS.map(function(row){ return libraryCard(row, lang); }).join('') + '</div>'
      + '<p class="src-group-desc real-source-note">' + esc(ui(lang).note) + '</p>'
      + '</section>';
  }
  function stripOldReferenceSections(html){
    return String(html || '')
      .replace(/<section\b[^>]*data-reference-source-library-visibility[\s\S]*?<\/section>/g, '')
      .replace(/<section\b[^>]*data-real-intermediate-sources[\s\S]*?<\/section>/g, '');
  }
  function insertSourceLibrarySection(html){
    var lang = currentLocale();
    var section = sourceLibrarySectionHtml(lang);
    var clean = stripOldReferenceSections(html);
    var firstSection = clean.indexOf('<div class="src-section-block"');
    if(firstSection !== -1) return clean.slice(0, firstSection) + section + clean.slice(firstSection);
    return clean + section;
  }
  function patchRenderSources(){
    var previous = window.renderSources || (typeof renderSources === 'function' ? renderSources : null);
    if(typeof previous !== 'function' || previous.__referenceSourceVisibilityWrapped) return;
    var wrapped = function(){
      return insertSourceLibrarySection(previous.apply(this, arguments) || '');
    };
    wrapped.__referenceSourceVisibilityWrapped = true;
    window.renderSources = wrapped;
    try{ renderSources = wrapped; }catch(error){}
  }
  function syncSourceLibrarySection(){
    if(typeof document === 'undefined') return;
    var panel = document.getElementById('sourcesPanel');
    if(!panel) return;
    Array.prototype.forEach.call(panel.querySelectorAll('[data-reference-source-library-visibility],[data-real-intermediate-sources]'), function(node){
      if(node && node.parentNode) node.parentNode.removeChild(node);
    });
    var sectionHtml = sourceLibrarySectionHtml(currentLocale());
    var cats = panel.querySelector('.source-cats');
    if(cats) cats.insertAdjacentHTML('afterend', sectionHtml);
    else panel.insertAdjacentHTML('afterbegin', sectionHtml);
  }

  function ensureRowsInSourceData(){
    if(typeof sourceLibrary === 'undefined') return;
    LANGS.forEach(function(lang){
      if(!sourceLibrary[lang]) sourceLibrary[lang] = sourceLibrary.en ? JSON.parse(JSON.stringify(sourceLibrary.en)) : [];
      ROWS.forEach(function(row){
        var item = ['intermediate-sources', row.publisher, titleFallback(row, lang), topicDesc(row.topic, lang), row.url, lessonLabel(row.lesson, lang), ui(lang).external];
        var exists = sourceLibrary[lang].some(function(existing){
          return existing && (normalize(existing[4] || '') === normalize(row.url) || normalize(existing[2] || '') === normalize(item[2]));
        });
        if(!exists) sourceLibrary[lang].push(item);
      });
    });
    if(typeof sourceLibraryCats !== 'undefined'){
      LANGS.forEach(function(lang){
        if(!sourceLibraryCats[lang]) sourceLibraryCats[lang] = sourceLibraryCats.en ? JSON.parse(JSON.stringify(sourceLibraryCats.en)) : [];
        var exists = sourceLibraryCats[lang].some(function(cat){ return cat && cat.key === 'intermediate-sources'; });
        if(!exists) sourceLibraryCats[lang].push({key:'intermediate-sources', label:ui(lang).libraryTitle});
      });
    }
  }

  function exactSearchMap(copy){
    var map = {
      'Search':copy.buttonLabel,
      'Search lessons':copy.ariaLabel,
      'Search glossary':copy.ariaLabel,
      'Search by keyword':copy.shortPlaceholder,
      'Search by coin, lesson, glossary, or source':copy.ariaLabel,
      'Type to search':copy.startTyping,
      'Type to search...':copy.startTyping,
      'Start typing to search':copy.startTyping,
      'No results':copy.noResults,
      'No results found':copy.noResults,
      'Try another keyword':copy.tryAnother,
      'Suggested results':copy.suggestedResults,
      'Recent searches':copy.suggestedResults,
      'Clear search':copy.clearSearch,
      'Open search':copy.openLabel,
      'Close search':copy.closeLabel,
      'Search results':copy.results,
      'Results':copy.results
    };
    return map;
  }
  function norm(value){ return String(value || '').replace(/\s+/g,' ').trim(); }
  function hasSearchMeta(node){
    if(!node) return false;
    var meta = [
      node.id,
      typeof node.className === 'string' ? node.className : '',
      node.getAttribute && node.getAttribute('type'),
      node.getAttribute && node.getAttribute('name'),
      node.getAttribute && node.getAttribute('role'),
      node.getAttribute && node.getAttribute('placeholder'),
      node.getAttribute && node.getAttribute('aria-label'),
      node.getAttribute && node.getAttribute('title'),
      node.getAttribute && node.getAttribute('onclick'),
      node.textContent
    ].join(' ').toLowerCase();
    return /search|검색|찾기|ค้นหา|cari|pesquisar|buscar|ara|بحث|tìm|bincika/.test(meta);
  }
  function isSearchInput(input){
    return input && (String(input.getAttribute && input.getAttribute('type') || '').toLowerCase() === 'search' || hasSearchMeta(input));
  }
  function searchInputs(){
    if(typeof document === 'undefined') return [];
    return Array.prototype.filter.call(document.querySelectorAll('input'), isSearchInput);
  }
  function searchControls(){
    if(typeof document === 'undefined') return [];
    return Array.prototype.filter.call(document.querySelectorAll('button,a,[role="button"]'), function(node){
      return hasSearchMeta(node) || /search-close|search-open|search-trigger/.test(String(node.className || '').toLowerCase());
    });
  }
  function setAttr(node, attr, value){
    if(!node || !node.setAttribute) return;
    value = String(value == null ? '' : value);
    if(String(node.getAttribute && node.getAttribute(attr) || '') !== value) node.setAttribute(attr, value);
  }
  function isCloseControl(node){
    var meta = [node.id, node.className, node.getAttribute && node.getAttribute('onclick'), node.getAttribute && node.getAttribute('aria-label'), node.getAttribute && node.getAttribute('title')].join(' ').toLowerCase();
    return /close|닫기|ปิด|tutup|fechar|kapat|cerrar|إغلاق|đóng|rufe|esc|search-close/.test(meta);
  }
  function patchTextAndAttributes(root, copy){
    if(!root || !root.querySelectorAll) return;
    var map = exactSearchMap(copy);
    Array.prototype.forEach.call(root.querySelectorAll('[placeholder],[aria-label],[title],[data-empty]'), function(node){
      ['placeholder','aria-label','title','data-empty'].forEach(function(attr){
        var value = norm(node.getAttribute && node.getAttribute(attr));
        if(map[value]) setAttr(node, attr, map[value]);
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('.search-result-empty,.search-section-divider,.search-helper,.search-hint,.visually-hidden,.sr-only,[data-search-empty]'), function(node){
      var text = norm(node.textContent);
      if(map[text]) node.textContent = map[text];
    });
  }
  var syncPending = false;
  function syncSearchLocale(){
    if(typeof document === 'undefined') return;
    var copy = searchUi(currentLocale());
    searchInputs().forEach(function(input){
      var modalInput = !!(input.id === 'searchInput' || (input.closest && input.closest('#searchOverlay,.search-overlay,.search-modal,.search-dialog,.search-panel')));
      var inputText = modalInput ? copy.shortPlaceholder : copy.placeholder;
      setAttr(input, 'placeholder', inputText);
      setAttr(input, 'aria-label', inputText);
      setAttr(input, 'title', inputText);
      setAttr(input, 'data-search-locale-synced', currentLocale());
    });
    searchControls().forEach(function(control){
      var close = isCloseControl(control);
      setAttr(control, 'aria-label', close ? copy.closeLabel : copy.openLabel);
      setAttr(control, 'title', close ? copy.closeLabel : copy.openLabel);
      setAttr(control, 'data-search-locale-synced', currentLocale());
      var text = norm(control.textContent);
      if(text === 'Search' || text === 'Open search') control.textContent = copy.buttonLabel;
      if(text === 'Close search') control.textContent = copy.closeLabel;
    });
    var results = document.getElementById('searchResults');
    if(results){
      setAttr(results, 'data-empty', copy.startTyping);
      setAttr(results, 'aria-label', copy.results);
      patchTextAndAttributes(results, copy);
    }
    var overlay = document.getElementById('searchOverlay');
    if(overlay){
      setAttr(overlay, 'aria-label', copy.results);
      patchTextAndAttributes(overlay, copy);
    }
    patchTextAndAttributes(document.body, copy);
    window.getSearchEmptyText = function(){ return searchUi(currentLocale()).startTyping; };
    window.getSearchNoResultsText = function(){ return searchUi(currentLocale()).noResults; };
  }
  function scheduleSearchSync(){
    if(syncPending) return;
    syncPending = true;
    setTimeout(function(){ syncPending = false; syncSearchLocale(); }, 0);
  }
  function wrapAfter(name, after){
    var original = window[name];
    if(typeof original !== 'function' || original.__referenceVisibilityAfterWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      after();
      setTimeout(after, 0);
      return result;
    };
    wrapped.__referenceVisibilityAfterWrapped = true;
    window[name] = wrapped;
    try{
      if(name === 'setLang') setLang = wrapped;
      if(name === 'showPage') showPage = wrapped;
      if(name === 'renderAllLessons') renderAllLessons = wrapped;
      if(name === 'openSearch') openSearch = wrapped;
      if(name === 'closeSearch') closeSearch = wrapped;
      if(name === 'renderSearchAutocompleteFinal') renderSearchAutocompleteFinal = wrapped;
      if(name === 'renderPatchedSearchResults') renderPatchedSearchResults = wrapped;
    }catch(error){}
  }
  function installStyles(){
    if(typeof document === 'undefined' || document.getElementById('referenceSourceVisibilitySearchSyncStyles20260526')) return;
    var style = document.createElement('style');
    style.id = 'referenceSourceVisibilitySearchSyncStyles20260526';
    style.textContent = ''
      + '.lesson-reference-sources-early{margin:18px 0 22px;}'
      + '.lesson-reference-sources-early .lesson-reference-head h2{margin:0;color:#13294b;font-size:1.16rem;line-height:1.35;}'
      + '.lesson-reference-card,.source-library-card.source-external{word-break:keep-all;overflow-wrap:break-word;}'
      + '.reference-source-library-section{border:1px solid rgba(43,92,170,.13);background:linear-gradient(135deg,rgba(246,250,255,.95),rgba(255,255,255,.98));border-radius:22px;padding:18px;margin:18px 0 22px;box-shadow:0 16px 36px rgba(20,45,85,.07);}'
      + '.source-library-card.source-external{display:grid;gap:9px;padding:16px;border:1px solid rgba(63,109,196,.14);border-radius:18px;background:#fff;box-shadow:0 10px 24px rgba(29,60,105,.07);}'
      + '.source-card-label{display:inline-flex;justify-self:start;border-radius:999px;padding:4px 9px;background:#eaf3ff;color:#2456a4;font-weight:800;font-size:.74rem;}'
      + '.source-card-title{display:block;color:#101f36;font-size:1rem;line-height:1.45;}'
      + '.source-card-description{margin:0;color:#586b83;line-height:1.58;font-size:.9rem;}'
      + '.source-card-meta{display:flex;flex-wrap:wrap;gap:6px;color:#6a7c91;font-size:.8rem;}'
      + '.source-card-meta span{border-radius:999px;background:#f1f6ff;padding:3px 8px;}'
      + '.source-card-link{display:inline-flex;justify-self:start;color:#174ea6;font-weight:800;text-decoration:none;}'
      + '.source-card-link:hover{text-decoration:underline;}'
      + 'html[dir="rtl"] .reference-source-library-section{text-align:right;}'
      + '@media(max-width:640px){.reference-source-library-section{padding:15px;border-radius:18px}.reference-source-library-grid{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  }
  function suspectedEnglishSearch(copy){
    if(currentLocale() === 'en') return [];
    var text = [];
    searchInputs().forEach(function(input){
      text.push(input.getAttribute('placeholder') || '', input.getAttribute('aria-label') || '', input.getAttribute('title') || '');
    });
    searchControls().forEach(function(control){
      text.push(control.textContent || '', control.getAttribute('aria-label') || '', control.getAttribute('title') || '');
    });
    var results = document.getElementById('searchResults');
    if(results) text.push(results.getAttribute('data-empty') || '', results.textContent || '');
    var joined = text.join(' ');
    return Object.keys(exactSearchMap(SEARCH_COPY.en)).filter(function(term){
      return term !== 'Results' && term !== 'Search' && joined.indexOf(term) !== -1;
    });
  }
  function installDebugHelpers(){
    window.debugLessonReferenceSources = function(){
      var lang = currentLocale();
      var result = {currentLocale:lang, sourceLibraryDataReused:true, lessons:{}};
      for(var lessonNo = 8; lessonNo <= 14; lessonNo++){
        var html = typeof renderLesson === 'function' ? renderLesson(lessonNo - 1) : '';
        var titles = rowsForLesson(lessonNo).map(function(row){ return sourceFor(row, lang).title; });
        result.lessons[lessonNo] = {
          expectedTitles:titles,
          earlySectionFound:String(html).indexOf('data-reference-source-early="' + lessonNo + '"') !== -1,
          rawUrlTextDetected:false,
          externalLinkSecurityOk:String(html).indexOf('target="_blank" rel="noopener noreferrer"') !== -1,
          renderedTitles:titles.filter(function(title){ return String(html).indexOf(title) !== -1; })
        };
      }
      return result;
    };
    window.debugReferenceSourceLibrary = function(){
      var lang = currentLocale();
      var html = sourceLibrarySectionHtml(lang);
      return {
        currentLocale:lang,
        renderedCount:(html.match(/data-reference-library-source-id=/g) || []).length,
        renderedTitles:ROWS.map(function(row){ return sourceFor(row, lang).title; }),
        rawUrlTextDetected:/>https?:\/\//.test(html),
        linkSecurityOk:(html.match(/target="_blank" rel="noopener noreferrer"/g) || []).length === ROWS.length
      };
    };
    window.debugSearchInputsLocale = function(){
      syncSearchLocale();
      var copy = searchUi(currentLocale());
      return {
        currentLocale:currentLocale(),
        expectedPlaceholder:copy.placeholder,
        searchInputCount:searchInputs().length,
        inputs:searchInputs().map(function(input, index){
          return {index:index, id:input.id || '', className:typeof input.className === 'string' ? input.className : '', placeholder:input.getAttribute('placeholder') || '', ariaLabel:input.getAttribute('aria-label') || '', title:input.getAttribute('title') || ''};
        }),
        searchButtonCount:searchControls().length,
        suspectedEnglish:suspectedEnglishSearch(copy)
      };
    };
    window.__REFERENCE_SOURCE_VISIBILITY_SEARCH_FIX_DATA = {rows:ROWS.slice(), searchCopy:SEARCH_COPY, sourceUi:SOURCE_UI};
  }

  ensureRowsInSourceData();
  installStyles();
  patchRenderLesson();
  patchRenderSources();
  wrapAfter('setLang', function(){ ensureRowsInSourceData(); syncSourceLibrarySection(); syncSearchLocale(); });
  wrapAfter('showPage', function(){ syncSourceLibrarySection(); syncSearchLocale(); });
  wrapAfter('renderAllLessons', function(){ syncSearchLocale(); });
  wrapAfter('openSearch', syncSearchLocale);
  wrapAfter('closeSearch', syncSearchLocale);
  wrapAfter('renderSearchAutocompleteFinal', syncSearchLocale);
  wrapAfter('renderPatchedSearchResults', syncSearchLocale);
  installDebugHelpers();
  syncSearchLocale();
  if(typeof document !== 'undefined'){
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', function(){ ensureRowsInSourceData(); syncSourceLibrarySection(); syncSearchLocale(); }, {once:true});
    } else {
      setTimeout(function(){ ensureRowsInSourceData(); syncSourceLibrarySection(); syncSearchLocale(); }, 0);
    }
    if(typeof MutationObserver !== 'undefined' && document.body && !document.body.__referenceSearchSyncObserver){
      var observer = new MutationObserver(scheduleSearchSync);
      observer.observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['placeholder','aria-label','title','data-empty']});
      document.body.__referenceSearchSyncObserver = observer;
    }
  }
})();
