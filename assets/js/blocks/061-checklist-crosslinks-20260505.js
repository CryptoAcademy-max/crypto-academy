(function(){
  if(window.__checklistCrosslinks20260505) return;
  window.__checklistCrosslinks20260505 = true;

  function normalizeLang(raw){
    var value = String(raw || "").toLowerCase().trim();
    if(!value) return "en";
    if(value === "br" || value.indexOf("pt-br") === 0) return "br";
    if(value.indexOf("pt") === 0) return "pt";
    if(value.indexOf("ko") === 0) return "ko";
    if(value.indexOf("th") === 0) return "th";
    if(value.indexOf("id") === 0) return "id";
    if(value.indexOf("tr") === 0) return "tr";
    if(value.indexOf("es") === 0) return "es";
    if(value.indexOf("ar") === 0) return "ar";
    if(value.indexOf("vi") === 0) return "vi";
    if(value.indexOf("ha") === 0) return "ha";
    return "en";
  }

  function contentLang(lang){
    return lang === "br" ? "pt" : lang;
  }

  function getCurrentLang(){
    if(typeof currentLang !== "undefined" && currentLang) return normalizeLang(currentLang);
    if(typeof document !== "undefined" && document.documentElement && document.documentElement.lang){
      return normalizeLang(document.documentElement.lang);
    }
    return "en";
  }

  function getBasePrefix(){
    if(typeof window !== "undefined" && window.__CA_BASE_PREFIX__) return window.__CA_BASE_PREFIX__;
    if(typeof document !== "undefined" && document.body && document.body.dataset && document.body.dataset.basePrefix){
      return document.body.dataset.basePrefix;
    }
    return "./";
  }

  function toIndexRoute(path){
    if(typeof window !== "undefined" && typeof window.__CA_TO_INDEX_ROUTE === "function"){
      return window.__CA_TO_INDEX_ROUTE(path);
    }
    var value = String(path || "");
    if(!value) return "index.html";
    if(/index\.html(?:[?#].*)?$/i.test(value)) return value;
    return /\/$/.test(value) ? (value + "index.html") : (value + "/index.html");
  }

  function escapeHtml(value){
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  var checklistLocale = {
    en: {
      open: "Open Checklist",
      lessonTransferTitle: "Quick Review",
      lessonTransferIntro: "If you want a quick review before sending, open the checklist.",
      lessonSafetyTitle: "Quick Safety Checklists",
      lessonSafetyIntro: "If you want a shorter review of scam and safety risks, use the checklists below.",
      safetyTitle: "Quick Review Checklists",
      safetyIntro: "Use these checklists if you want a short review of the most important safety basics.",
      glossaryTitle: "Quick safety checklists",
      glossaryIntro: "If you want a shorter review of key safety concepts, explore the checklist pages as well.",
      cards: {
        beforeSend: {
          title: "Before You Send Checklist",
          body: "A short checklist to review before sending."
        },
        seedPhrase: {
          title: "Seed Phrase Safety Check",
          body: "A short reminder for your most important wallet recovery rule."
        },
        fakeWebsite: {
          title: "Quick Fake Website Check",
          body: "A short review to help you spot suspicious sites before logging in."
        }
      }
    },
    ko: {
      open: "\uccb4\ud06c\ub9ac\uc2a4\ud2b8 \ubcf4\uae30",
      lessonTransferTitle: "\ube60\ub978 \ub2e4\uc2dc \ud655\uc778",
      lessonTransferIntro: "\uc804\uc1a1 \uc804\uc5d0 \ud575\uc2ec\ub9cc \ube60\ub974\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \uc5f4\uc5b4\ubcf4\uc138\uc694.",
      lessonSafetyTitle: "\ube60\ub974\uac8c \ub2e4\uc2dc \ubcf4\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",
      lessonSafetyIntro: "\uc0ac\uae30\uc640 \ubcf4\uc548 \ud750\ub984\uc744 \ub354 \uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ubcf4\uc138\uc694.",
      safetyTitle: "\ube60\ub974\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\ub294 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",
      safetyIntro: "\ubcf4\uc548 \uad00\ub828 \ud575\uc2ec\ub9cc \uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \uc544\ub798 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ud65c\uc6a9\ud574\ubcf4\uc138\uc694.",
      glossaryTitle: "\uc9e7\uac8c \ub2e4\uc2dc \ubcf4\ub294 \ubcf4\uc548 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",
      glossaryIntro: "\ud575\uc2ec \ubcf4\uc548 \uac1c\ub150\uc744 \uc9e7\uac8c \ub2e4\uc2dc \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 \uccb4\ud06c\ub9ac\uc2a4\ud2b8 \ud398\uc774\uc9c0\ub3c4 \ud568\uaed8 \ubcf4\uc138\uc694.",
      cards: {
        beforeSend: {
          title: "\uc804\uc1a1 \uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",
          body: "\uc804\uc1a1 \uc804\uc5d0 \ud575\uc2ec\ub9cc \ub2e4\uc2dc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
        },
        seedPhrase: {
          title: "\uc2dc\ub4dc \ubb38\uad6c \ubcf4\uc548 \uccb4\ud06c",
          body: "\uac00\uc7a5 \uc911\uc694\ud55c \ubcf5\uad6c \uc815\ubcf4 \ubcf4\ud638 \uc6d0\uce59\uc744 \uc9e7\uac8c \ub2e4\uc2dc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."
        },
        fakeWebsite: {
          title: "\uac00\uc9dc \uc0ac\uc774\ud2b8 \ube60\ub978 \ud655\uc778",
          body: "\ub85c\uadf8\uc778 \uc804\uc5d0 \uc758\uc2ec\uc2a4\ub7ec\uc6b4 \uc0ac\uc774\ud2b8\ub97c \ub2e4\uc2dc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."
        }
      }
    },
    th: {
      open: "\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c",
      lessonTransferTitle: "\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27",
      lessonTransferIntro: "\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19 \u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22",
      lessonSafetyTitle: "\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27",
      lessonSafetyIntro: "\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2b\u0e25\u0e2d\u0e01\u0e25\u0e27\u0e07\u0e41\u0e1a\u0e1a\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e43\u0e2b\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07",
      safetyTitle: "\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27",
      safetyIntro: "\u0e43\u0e0a\u0e49\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e41\u0e1a\u0e1a\u0e2a\u0e31\u0e49\u0e19 \u0e46",
      glossaryTitle: "\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e41\u0e1a\u0e1a\u0e22\u0e48\u0e2d",
      glossaryIntro: "\u0e16\u0e49\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e2b\u0e25\u0e31\u0e01\u0e41\u0e1a\u0e1a\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e25\u0e2d\u0e07\u0e14\u0e39\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e14\u0e49\u0e27\u0e22",
      cards: {
        beforeSend: {
          title: "\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19",
          body: "\u0e40\u0e0a\u0e47\u0e01\u0e25\u0e34\u0e2a\u0e15\u0e4c\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e42\u0e2d\u0e19"
        },
        seedPhrase: {
          title: "\u0e40\u0e0a\u0e47\u0e01\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e02\u0e2d\u0e07 Seed Phrase",
          body: "\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e01\u0e0e\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e01\u0e1b\u0e49\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e39\u0e49\u0e04\u0e37\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"
        },
        fakeWebsite: {
          title: "\u0e40\u0e0a\u0e47\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e1b\u0e25\u0e2d\u0e21\u0e41\u0e1a\u0e1a\u0e40\u0e23\u0e47\u0e27",
          body: "\u0e17\u0e1a\u0e17\u0e27\u0e19\u0e2a\u0e31\u0e49\u0e19 \u0e46 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e48\u0e27\u0e22\u0e14\u0e39\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e48\u0e32\u0e2a\u0e07\u0e2a\u0e31\u0e22\u0e01\u0e48\u0e2d\u0e19\u0e25\u0e47\u0e2d\u0e01\u0e2d\u0e34\u0e19"
        }
      }
    },
    id: {
      open: "Buka Checklist",
      lessonTransferTitle: "Ulasan Cepat",
      lessonTransferIntro: "Jika Anda ingin ulasan singkat sebelum mengirim, buka checklist ini.",
      lessonSafetyTitle: "Checklist Keamanan Cepat",
      lessonSafetyIntro: "Jika Anda ingin meninjau ulang risiko scam dan keamanan secara lebih singkat, gunakan checklist di bawah ini.",
      safetyTitle: "Checklist Tinjauan Cepat",
      safetyIntro: "Gunakan checklist ini jika Anda ingin meninjau ulang dasar keamanan terpenting secara singkat.",
      glossaryTitle: "Checklist keamanan singkat",
      glossaryIntro: "Jika Anda ingin ulasan singkat tentang konsep keamanan utama, lihat juga halaman checklist.",
      cards: {
        beforeSend: {
          title: "Checklist Sebelum Mengirim",
          body: "Checklist singkat untuk ditinjau sebelum mengirim."
        },
        seedPhrase: {
          title: "Cek Keamanan Seed Phrase",
          body: "Pengingat singkat untuk aturan perlindungan akses pemulihan Anda yang paling penting."
        },
        fakeWebsite: {
          title: "Cek Cepat Situs Palsu",
          body: "Ulasan singkat untuk membantu mengenali situs mencurigakan sebelum login."
        }
      }
    },
    pt: {
      open: "Abrir Checklist",
      lessonTransferTitle: "Revisao rapida",
      lessonTransferIntro: "Se voce quiser uma revisao rapida antes de enviar, abra o checklist.",
      lessonSafetyTitle: "Checklists rapidos de seguranca",
      lessonSafetyIntro: "Se voce quiser uma revisao mais curta dos riscos de golpe e seguranca, use os checklists abaixo.",
      safetyTitle: "Checklists de revisao rapida",
      safetyIntro: "Use estes checklists se voce quiser uma revisao curta dos pontos de seguranca mais importantes.",
      glossaryTitle: "Checklists rapidos de seguranca",
      glossaryIntro: "Se voce quiser uma revisao mais curta dos conceitos principais de seguranca, veja tambem as paginas de checklist.",
      cards: {
        beforeSend: {
          title: "Checklist Antes de Enviar",
          body: "Um checklist curto para revisar antes de enviar."
        },
        seedPhrase: {
          title: "Checklist de Seguranca da Seed Phrase",
          body: "Um lembrete curto da regra mais importante para proteger seu acesso de recuperacao."
        },
        fakeWebsite: {
          title: "Cheque Rapido de Site Falso",
          body: "Uma revisao curta para ajudar voce a identificar sites suspeitos antes do login."
        }
      }
    },
    tr: {
      open: "Kontrol Listesini Ac",
      lessonTransferTitle: "Hizli gozden gecirme",
      lessonTransferIntro: "Gondermeden once kisa bir kontrol yapmak istiyorsaniz bu kontrol listesini acin.",
      lessonSafetyTitle: "Hizli guvenlik kontrol listeleri",
      lessonSafetyIntro: "Dolandiricilik ve guvenlik risklerini daha kisa sekilde gozden gecirmek istiyorsaniz asagidaki kontrol listelerini kullanin.",
      safetyTitle: "Hizli gozden gecirme kontrol listeleri",
      safetyIntro: "En onemli guvenlik temellerini kisa sekilde gozden gecirmek istiyorsaniz bu kontrol listelerini kullanin.",
      glossaryTitle: "Kisa guvenlik kontrol listeleri",
      glossaryIntro: "Temel guvenlik kavramlarini daha kisa sekilde gozden gecirmek istiyorsaniz kontrol listesi sayfalarina da bakin.",
      cards: {
        beforeSend: {
          title: "Gondermeden Once Kontrol Listesi",
          body: "Gondermeden once gozden gecirmek icin kisa bir kontrol listesi."
        },
        seedPhrase: {
          title: "Seed Phrase Guvenlik Kontrolu",
          body: "Kurtarma erisiminizi korumaya yonelik en onemli kural icin kisa bir hatirlatma."
        },
        fakeWebsite: {
          title: "Sahte Site Icin Hizli Kontrol",
          body: "Giris yapmadan once supheli siteleri fark etmenize yardimci olacak kisa bir gozden gecirme."
        }
      }
    },
    es: {
      open: "Abrir Checklist",
      lessonTransferTitle: "Revision rapida",
      lessonTransferIntro: "Si quieres una revision rapida antes de enviar, abre el checklist.",
      lessonSafetyTitle: "Checklists rapidos de seguridad",
      lessonSafetyIntro: "Si quieres una revision mas corta de los riesgos de estafa y seguridad, usa los checklists de abajo.",
      safetyTitle: "Checklists de revision rapida",
      safetyIntro: "Usa estos checklists si quieres una revision corta de las bases de seguridad mas importantes.",
      glossaryTitle: "Checklists rapidos de seguridad",
      glossaryIntro: "Si quieres una revision mas corta de los conceptos clave de seguridad, explora tambien las paginas de checklist.",
      cards: {
        beforeSend: {
          title: "Checklist Antes de Enviar",
          body: "Un checklist corto para revisar antes de enviar."
        },
        seedPhrase: {
          title: "Chequeo de Seguridad de la Seed Phrase",
          body: "Un recordatorio corto de la regla mas importante para proteger tu acceso de recuperacion."
        },
        fakeWebsite: {
          title: "Revision Rapida de Sitio Falso",
          body: "Una revision corta para ayudarte a detectar sitios sospechosos antes de iniciar sesion."
        }
      }
    },
    vi: {
      open: "M\u1edf checklist",
      lessonTransferTitle: "Xem l\u1ea1i nhanh",
      lessonTransferIntro: "N\u1ebfu b\u1ea1n mu\u1ed1n xem l\u1ea1i nhanh tr\u01b0\u1edbc khi g\u1eedi, h\u00e3y m\u1edf checklist n\u00e0y.",
      lessonSafetyTitle: "Checklist an to\u00e0n nhanh",
      lessonSafetyIntro: "N\u1ebfu b\u1ea1n mu\u1ed1n xem l\u1ea1i ng\u1eafn g\u1ecdn c\u00e1c r\u1ee7i ro l\u1eeba \u0111\u1ea3o v\u00e0 an to\u00e0n, h\u00e3y d\u00f9ng c\u00e1c checklist d\u01b0\u1edbi \u0111\u00e2y.",
      safetyTitle: "Checklist xem l\u1ea1i nhanh",
      safetyIntro: "H\u00e3y d\u00f9ng c\u00e1c checklist n\u00e0y n\u1ebfu b\u1ea1n mu\u1ed1n xem l\u1ea1i ng\u1eafn g\u1ecdn nh\u1eefng nguy\u00ean t\u1eafc an to\u00e0n quan tr\u1ecdng nh\u1ea5t.",
      glossaryTitle: "Checklist an to\u00e0n ng\u1eafn g\u1ecdn",
      glossaryIntro: "N\u1ebfu b\u1ea1n mu\u1ed1n xem l\u1ea1i ng\u1eafn g\u1ecdn c\u00e1c kh\u00e1i ni\u1ec7m an to\u00e0n ch\u00ednh, h\u00e3y xem th\u00eam c\u00e1c trang checklist.",
      cards: {
        beforeSend: {
          title: "Checklist Tr\u01b0\u1edbc Khi G\u1eedi",
          body: "Checklist ng\u1eafn \u0111\u1ec3 xem l\u1ea1i tr\u01b0\u1edbc khi g\u1eedi."
        },
        seedPhrase: {
          title: "Ki\u1ec3m Tra An To\u00e0n Seed Phrase",
          body: "Nh\u1eafc l\u1ea1i ng\u1eafn g\u1ecdn quy t\u1eafc quan tr\u1ecdng nh\u1ea5t \u0111\u1ec3 b\u1ea3o v\u1ec7 quy\u1ec1n kh\u00f4i ph\u1ee5c c\u1ee7a b\u1ea1n."
        },
        fakeWebsite: {
          title: "Ki\u1ec3m Tra Nhanh Trang Web Gi\u1ea3",
          body: "Xem l\u1ea1i ng\u1eafn g\u1ecdn \u0111\u1ec3 nh\u1eadn ra trang web \u0111\u00e1ng ng\u1edd tr\u01b0\u1edbc khi \u0111\u0103ng nh\u1eadp."
        }
      }
    },
    ha: {
      open: "Bude Checklist",
      lessonTransferTitle: "Saurin dubawa",
      lessonTransferIntro: "Idan kana son gajeren dubawa kafin tura kudi, bude checklist din.",
      lessonSafetyTitle: "Checklist na tsaro cikin sauri",
      lessonSafetyIntro: "Idan kana son gajeren bitar hadarin damfara da tsaro, yi amfani da checklist da ke kasa.",
      safetyTitle: "Checklist na gajeren dubawa",
      safetyIntro: "Yi amfani da wadannan checklist idan kana son gajeren bitar muhimman ka'idojin tsaro.",
      glossaryTitle: "Checklist na gajeren tsaro",
      glossaryIntro: "Idan kana son gajeren bita na muhimman ka'idojin tsaro, duba shafukan checklist ma.",
      cards: {
        beforeSend: {
          title: "Checklist Kafin Tura Kudi",
          body: "Takaitaccen checklist da za a duba kafin tura kudi."
        },
        seedPhrase: {
          title: "Duban Tsaron Seed Phrase",
          body: "Takaitaccen tunatarwa game da dokar kare bayanan farfadowa mafi muhimmanci."
        },
        fakeWebsite: {
          title: "Saurin Duba Shafin Bogi",
          body: "Takaitaccen bita don taimaka maka gano shafukan da ake zargi kafin shiga."
        }
      }
    }
  };
  checklistLocale.br = checklistLocale.pt;

  var routeMap = {
    beforeSend: "checklists/before-send/",
    seedPhrase: "checklists/seed-phrase-safety/",
    fakeWebsite: "checklists/fake-website-check/"
  };

  function getChecklistHref(key){
    var lang = getCurrentLang();
    var route = routeMap[key] || "";
    return toIndexRoute(getBasePrefix() + route) + "?lang=" + encodeURIComponent(lang);
  }

  function getLocale(){
    var lang = getCurrentLang();
    return checklistLocale[lang] || checklistLocale[contentLang(lang)] || checklistLocale.en;
  }

  function buildCardHtml(card, href, buttonText){
    return '<div class="source-card checklist-link-card">'
      + '<div class="source-label">' + escapeHtml(card.title) + "</div>"
      + '<div class="source-body">' + escapeHtml(card.body) + "</div>"
      + '<a class="nav-action checklist-link-button" href="' + escapeHtml(href) + '">' + escapeHtml(buttonText) + "</a>"
      + "</div>";
  }

  function ensureStyles(){
    if(document.getElementById("checklist-crosslinks-20260505-style")) return;
    var style = document.createElement("style");
    style.id = "checklist-crosslinks-20260505-style";
    style.textContent = ""
      + ".checklist-link-shell{margin:20px 0 22px}"
      + ".checklist-link-shell .checklist-link-intro{display:block;margin:4px 0 12px}"
      + ".checklist-link-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}"
      + ".checklist-link-card{height:100%;display:flex;flex-direction:column}"
      + ".checklist-link-card .source-label{color:var(--navy)}"
      + ".checklist-link-button{margin-top:10px;align-self:flex-start;text-decoration:none}"
      + ".checklist-link-inline{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px}"
      + ".checklist-link-inline .nav-action{padding:8px 12px;font-size:.8rem;text-decoration:none}"
      + ".checklist-glossary-note{margin-top:18px}"
      + "@media(max-width:680px){.checklist-link-grid{grid-template-columns:1fr}}";
    document.head.appendChild(style);
  }

  function upsertBefore(target, hook, html, beforeNode){
    if(!target) return;
    var existing = target.querySelector('[data-checklist-hook="' + hook + '"]');
    if(existing) existing.remove();
    var host = document.createElement("div");
    host.innerHTML = html;
    var node = host.firstElementChild;
    if(!node) return;
    if(beforeNode && beforeNode.parentNode === target){
      target.insertBefore(node, beforeNode);
    }else{
      target.appendChild(node);
    }
  }

  function injectTransferLesson(){
    var locale = getLocale();
    var panel = document.getElementById("lesson2");
    if(!panel) return;
    var body = panel.querySelector(".lesson-body");
    if(!body) return;
    var beforeNode = body.querySelector(".complete-row") || body.querySelector(".lesson-nav-bar");
    var html = '<div class="checklist-link-shell" data-checklist-hook="lesson-transfer-checklist">'
      + "<h3>" + escapeHtml(locale.lessonTransferTitle) + "</h3>"
      + '<div class="helper-note checklist-link-intro">' + escapeHtml(locale.lessonTransferIntro) + "</div>"
      + '<div class="checklist-link-grid">'
      + buildCardHtml(locale.cards.beforeSend, getChecklistHref("beforeSend"), locale.open)
      + "</div></div>";
    upsertBefore(body, "lesson-transfer-checklist", html, beforeNode);
  }

  function injectScamsLesson(){
    var locale = getLocale();
    var panel = document.getElementById("lesson6");
    if(!panel) return;
    var body = panel.querySelector(".lesson-body");
    if(!body) return;
    var beforeNode = body.querySelector(".complete-row") || body.querySelector(".lesson-nav-bar");
    var html = '<div class="checklist-link-shell" data-checklist-hook="lesson-scams-checklists">'
      + "<h3>" + escapeHtml(locale.lessonSafetyTitle) + "</h3>"
      + '<div class="helper-note checklist-link-intro">' + escapeHtml(locale.lessonSafetyIntro) + "</div>"
      + '<div class="checklist-link-grid">'
      + buildCardHtml(locale.cards.seedPhrase, getChecklistHref("seedPhrase"), locale.open)
      + buildCardHtml(locale.cards.fakeWebsite, getChecklistHref("fakeWebsite"), locale.open)
      + "</div></div>";
    upsertBefore(body, "lesson-scams-checklists", html, beforeNode);
  }

  function injectSafetyPage(){
    var locale = getLocale();
    var panel = document.getElementById("safetyPanel");
    if(!panel) return;
    var body = panel.querySelector(".lesson-body");
    if(!body) return;
    var beforeNode = body.firstElementChild || null;
    var html = '<div class="checklist-link-shell" data-checklist-hook="safety-checklists">'
      + "<h2>" + escapeHtml(locale.safetyTitle) + "</h2>"
      + '<p class="checklist-link-intro">' + escapeHtml(locale.safetyIntro) + "</p>"
      + '<div class="checklist-link-grid">'
      + buildCardHtml(locale.cards.beforeSend, getChecklistHref("beforeSend"), locale.open)
      + buildCardHtml(locale.cards.seedPhrase, getChecklistHref("seedPhrase"), locale.open)
      + buildCardHtml(locale.cards.fakeWebsite, getChecklistHref("fakeWebsite"), locale.open)
      + "</div></div>";
    upsertBefore(body, "safety-checklists", html, beforeNode);
  }

  function injectGlossaryNote(){
    var locale = getLocale();
    var panel = document.getElementById("glossaryPanel");
    if(!panel) return;
    var grid = panel.querySelector(".glossary-grid");
    if(!grid || !grid.parentNode) return;
    var html = '<div class="callout info checklist-glossary-note" data-checklist-hook="glossary-checklists">'
      + "<strong>" + escapeHtml(locale.glossaryTitle) + ":</strong> " + escapeHtml(locale.glossaryIntro)
      + '<div class="checklist-link-inline">'
      + '<a class="nav-action" href="' + escapeHtml(getChecklistHref("seedPhrase")) + '">' + escapeHtml(locale.cards.seedPhrase.title) + "</a>"
      + '<a class="nav-action" href="' + escapeHtml(getChecklistHref("fakeWebsite")) + '">' + escapeHtml(locale.cards.fakeWebsite.title) + "</a>"
      + "</div></div>";
    upsertBefore(panel, "glossary-checklists", html, grid);
  }

  function applyChecklistCrosslinks(){
    if(typeof document === "undefined") return;
    ensureStyles();
    injectTransferLesson();
    injectScamsLesson();
    injectSafetyPage();
    injectGlossaryNote();
  }

  function assignGlobal(name, fn){
    try{
      if(name === "renderAllLessons") renderAllLessons = fn;
      if(name === "showPage") showPage = fn;
      if(name === "showLesson") showLesson = fn;
      if(name === "setLang") setLang = fn;
    }catch(err){}
  }

  function wrapAfter(name){
    var original = window[name];
    if(typeof original !== "function" || original.__checklistCrosslinksWrapped) return;
    var wrapped = function(){
      var result = original.apply(this, arguments);
      applyChecklistCrosslinks();
      return result;
    };
    wrapped.__checklistCrosslinksWrapped = true;
    wrapped.__checklistCrosslinksOriginal = original;
    window[name] = wrapped;
    assignGlobal(name, wrapped);
  }

  wrapAfter("renderAllLessons");
  wrapAfter("showPage");
  wrapAfter("showLesson");
  wrapAfter("setLang");

  applyChecklistCrosslinks();
  if(typeof requestAnimationFrame === "function"){
    requestAnimationFrame(applyChecklistCrosslinks);
  }else{
    setTimeout(applyChecklistCrosslinks, 0);
  }
})();
