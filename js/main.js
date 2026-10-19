/**
 * Nir Nini - Practical Architect (הנדסאי אדריכלות)
 * Main Application Logic
 * Permanent Light Mode (Exclusive black architectural contact section)
 */

const translations = {
  he: {
    navHome: "ראשי",
    navProjects: "פרויקטים",
    navServices: "שירותי תכנון",
    navPhilosophy: "עקרונות התכנון",
    navFaq: "שאלות נפוצות",
    navContact: "יצירת קשר",
    btnCall: "050-729-9992",
    btnInquire: "שיחת ייעוץ",
    brandSubtitle: "הנדסאי אדריכלות",
    heroBadge: "ניר ניני הנדסאי אדריכלות",
    heroHeadlinePart1: "תכנון אדריכלי מדויק ",
    heroHeadlineAccent: "משלב הרעיון ועד לביצוע",
    heroDescription: "תכנון וילות יוקרה, בתים פרטיים, הדמיות תלת-ממד מתקדמות והוצאת היתרי בנייה. יצירה אדריכלית המשלבת פונקציונליות, אסתטיקה וליווי אישי מוקפד.",
    btnExploreProjects: "צפייה בפרויקטים",
    btnConsultation: "שיחת ייעוץ: 050-729-9992",
    btnFullGallery: "לגלריה מלאה",
    backHome: "חזרה לדף הבית",
    feature1Title: "תכנון וילות ובתים פרטיים",
    feature1Sub: "תכנון מותאם אישית לצרכי המשפחה",
    feature2Title: "היתרי בנייה ורישוי",
    feature2Sub: "ניהול מקצועי מול ועדות התכנון",
    feature3Title: "הדמיות 3D וסיור וירטואלי",
    feature3Sub: "מודלים פוטוריאליסטיים ברזולוציה גבוהה",
    feature4Title: "תוכניות עבודה ופיקוח עליון",
    feature4Sub: "ליווי הנדסי אישי עד למסירת המפתח",
    portfolioTitle: "גלריית פרויקטים נבחרים",
    portfolioSubtitle: "תכנון אדריכלי, וילות יוקרה והדמיות תלת-ממד מתקדמות – מבטי חוץ, פיתוח שטח, בריכות וחללי פנים ברמת דיוק עילאית",
    servicesTitle: "שירותי תכנון ומעטפת מקצועית",
    servicesSubtitle: "ליווי אישי והנדסי מקיף מהסקיצה הרעיונית ועד למסירת המפתח. תהליך תכנון שלם ומדויק הנבנה שלב אחר שלב לצד שלבי העבודה המקצועיים.",
    step1Title: "הבנת הצרכים והחזון של הלקוח",
    step1Desc: "פגישת פרוגרמה מעמיקה להגדרת צרכי המשפחה, בחינת המגרש והטופוגרפיה, ניתוח זכויות בנייה ותיאום ציפיות תקציביות.",
    step2Title: "גיבוש קונספט תכנוני",
    step2Desc: "פיתוח סקיצות רעיוניות, העמדת המבנה במגרש ביחס לכיווני שמש ורוח, וזרימה הרמונית בין חללי האירוח לחצר ולגינה.",
    step3Title: "פיתוח התכנון והחלוקה האדריכלית",
    step3Desc: "העמקת תוכניות המפלסים, מיקום חללים כפולים, מדרגות מרחפות, קירות מסך מזוגגים וחיפויי אבן טבעית מוקפדים.",
    step4Title: "הכנת תוכניות והדמיות בהתאם לשירות שסופק",
    step4Desc: "מודל תלת-ממדי פוטוריאליסטי מלא, בחינת תאורת יום ולילה, בחירת חומרי גמר מדויקת וסיור אדריכלי וירטואלי טרם הבנייה.",
    step5Title: "קידום התכנון והמשך התהליך מול הגורמים הרלוונטיים",
    step5Desc: "הפקת תוכניות עבודה הנדסיות מפורטות לקבלנים, קידום הבקשה להיתר מול ועדות התכנון, ופיקוח עליון בשטח עד למסירת המפתח.",
    btnServicesConsult: "תיאום שיחת ייעוץ אדריכלית",
    servicesCtaNote: "תכנון מותאם אישית • ללא התחייבות",
    philTitle: "עקרונות היצירה האדריכלית",
    philSubtitle: "אנו מאמינים בתכנון מוקפד המעניק איכות חיים אמיתית, משתלב בסביבתו ויוצר בית שלם, הרמוני ועל-זמני.",
    phil1Num: "עקרון 01",
    phil1Title: "פונקציונליות והנדסה מדויקת",
    phil1Desc: "כל קו בתכנית נולד מתוך חשיבה על חוויית המגורים היומיומית של דיירי הבית. חללים פרקטיים, מרווחים ומתוכננים בהתאמה מדויקת להרגלי החיים.",
    phil2Num: "עקרון 02",
    phil2Title: "קשר הרמוני בין פנים לחוץ",
    phil2Desc: "מפתחי אור רחבים, ויטרינות זכוכית ופרגולות הצללה המטשטשות את הגבול בין הסלון לגינה, ומאפשרות כניסת אור טבעי נעים ואוורור מקסימלי.",
    phil3Num: "עקרון 03",
    phil3Title: "ליווי אישי ומחויבות לתוצאה",
    phil3Desc: "בניית בית היא אחד הפרויקטים המשמעותיים ביותר בחיים. ניר ניני מלווה באופן אישי וישיר בכל צומת החלטה, מהסקיצה ועד לסיום הבנייה.",
    contactTitle: "בואו נתכנן את הבית שלכם",
    contactSubtitle: "מתכננים לבנות וילה או בית פרטי? מעוניינים לבחון את זכויות הבנייה במגרש שלכם? השאירו פרטים לשיחת ייעוץ מקצועית עם ניר ניני, הנדסאי אדריכלות.",
    phoneDirectLabel: "טלפון ישיר לסטודיו",
    waChatTitle: "צ'אט ישיר בוואטסאפ",
    waChatSub: "מענה מהיר לשאלות ראשוניות ותיאום פגישה",
    btnSendMsg: "שליחת הודעה",
    socialIg: "אינסטגרם",
    socialTt: "טיקטוק",
    socialFb: "פייסבוק",
    socialFbName: "ניר ניני אדריכלות",
    midragLabel: "מוניטין ושקיפות מקצועית",
    midragLink: "ניתן למצוא אותנו גם בפלטפורמת מדרג",
    formTitle: "השאירו פרטים לשיחת ייעוץ",
    formSubtitle: "מלאו את הפרטים ונחזור אליכם לבחינת הפרויקט, התב\"ע וזכויות הבנייה",
    formName: "שם מלא",
    formNamePlaceholder: "הזינו שם מלא",
    formPhone: "מספר טלפון",
    formPhonePlaceholder: "05X-XXXXXXX",
    formEmail: "כתובת אימייל",
    formEmailPlaceholder: "name@domain.com",
    formType: "סוג הפרויקט המבוקש",
    optVilla: "תכנון וילה / בית פרטי צמוד קרקע והוצאת היתר בניה ורישוי מול הוועדה",
    optExtension: "שיפוץ מקיף והרחבת מבנה קיים",
    optInteriors: "עיצוב פנים במבנה קיים",
    formMsgLabel: "פרטים אודות הפרויקט או המגרש",
    formMsg: "ספרו בקצרה על הפרויקט, מיקום המגרש או הצרכים שלכם...",
    legalConsentText: "קראתי ואני מסכים/ה לתנאי השימוש ומדיניות ההחזרים ולמדיניות הפרטיות והעוגיות של הסטודיו.",
    formSubmit: "שליחת פנייה לניר ניני",
    toastSuccess: "תודה! פנייתכם מועברת לוואטסאפ של ניר ניני. נחזור אליכם בהקדם.",
    toastPhoneError: "נא להזין מספר טלפון תקין (9-10 ספרות).",
    galleryTitle: "גלריית הפרויקטים המלאה",
    gallerySubtitle: "תיק עבודות אדריכלי מקיף: וילות יוקרה צמודות קרקע, הדמיות תלת-ממד פוטוריאליסטיות, אדריכלות פנים מסחרית, מטבחי פרימיום ופרטי נגרות מותאמים אישית – תכנון ניר ניני, הנדסאי אדריכלות",
    filterAll: "כל הפרויקטים (59)",
    filterVillas: "וילות ובתים פרטיים (34)",
    filterInteriors: "עיצוב פנים אדריכלי (49)",
    filterCommercial: "מבנים מסחריים וחללי עבודה (6)",
    filterRenders: "הדמיות 3D וסיור וירטואלי (46)",
    footerColQuick: "ניווט מהיר",
    footerColSpecialties: "שירותים מרכזיים",
    footerSpec1: "תכנון וילות ובתים פרטיים",
    footerSpec2: "היתרי בנייה ורישוי",
    footerSpec3: "הדמיות 3D וסיור וירטואלי",
    footerSpec4: "תוכניות עבודה הנדסיות",
    footerSpec5: "פיקוח עליון באתר",
    footerColLegal: "משפטי ונגישות",
    footerLegalTerms: "תנאי שימוש ומדיניות החזרים",
    footerLegalPrivacy: "מדיניות פרטיות ועוגיות",
    footerLegalAccess: "הצהרת נגישות (ת״י 5568)",
    footerLegalCopyright: "זכויות יוצרים וקניין רוחני",
    footerLegalAuthenticity: "התחייבות לאמינות התוכן",
    footerColContact: "יצירת קשר ישירה",
    footerPhoneDirect: "טלפון ישיר: ",
    footerWhatsAppDirect: "וואטסאפ: ",
    footerCopyright: "© 2026 ניר ניני – הנדסאי אדריכלות. כל הזכויות שמורות. תכנון והדמיות מקוריות בלבד.",
    footerBackToTop: "חזרה לראש העמוד",
    backToTopGallery: "חזרה לראש הגלריה",
    footerSignature: "תכנון אדריכלי, היתרי בנייה והדמיות 3D ברמה עילאית",
    builderCreditPrefix: "נבנה על ידי ",
    builderCreditName: "נועם ששונקר",
    modalTabOverview: "סקירה אדריכלית",
    modalTabGallery: "גלריית מבטים",
    modalTabMaterials: "חומרים ומפרט",
    modalSpecType: "סוג הפרויקט",
    modalSpecArchitect: "מתכנן אחראי",
    modalSpecArchitectVal: "ניר ניני – הנדסאי אדריכלות",
    modalPrev: "→ המבט הקודם",
    modalNext: "המבט הבא ←",
    modalViewFullGallery: "מעבר לפרויקט בגלריה המלאה",
    faqArchitectTag: "מענה אישי ומקצועי",
    faqArchitectName: "ניר ניני",
    faqArchitectTitle: "הנדסאי אדריכלות | תכנון וילות, היתרים והדמיות 3D"
  },
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navServices: "Services",
    navPhilosophy: "Design Philosophy",
    navFaq: "FAQ",
    navContact: "Contact",
    btnCall: "050-729-9992",
    btnInquire: "Call Now",
    brandSubtitle: "Architectural Engineer",
    heroBadge: "Nir Nini Architectural Engineer",
    heroHeadlinePart1: "Precise Architectural Design ",
    heroHeadlineAccent: "From Concept to Reality",
    heroDescription: "Specializing in private luxury villas, photorealistic 3D visualization, construction blueprints, and municipal building permits with dedicated personal guidance.",
    btnExploreProjects: "Explore Works",
    btnConsultation: "Consultation: 050-729-9992",
    btnFullGallery: "To Full Gallery",
    backHome: "Back to Home",
    feature1Title: "Villas & Private Residences",
    feature1Sub: "Bespoke Architecture Tailored to Your Needs",
    feature2Title: "Building Permits & Licensing",
    feature2Sub: "Professional Municipal Permitting Management",
    feature3Title: "3D Visualization & Virtual Tours",
    feature3Sub: "High-Resolution Photorealistic 3D Renders",
    feature4Title: "Blueprints & Construction Oversight",
    feature4Sub: "Personal Engineering Guidance Until Turnkey",
    portfolioTitle: "Featured Projects Gallery",
    portfolioSubtitle: "Architectural design, luxury villas, and advanced 3D renders — exterior elevations, landscaping, pools, and interiors with supreme precision",
    servicesTitle: "Planning Services & Architectural Scope",
    servicesSubtitle: "Comprehensive personal and engineering guidance from concept sketches to turnkey delivery. A structured, meticulous architectural workflow built step by step.",
    step1Title: "Understanding Client Vision & Needs",
    step1Desc: "In-depth programming meeting to define family needs, examine site topography, analyze zoning rights, and align budget goals.",
    step2Title: "Architectural Concept Formulation",
    step2Desc: "Conceptual sketches, solar and wind orientation on the lot, and harmonious flow between living spaces and gardens.",
    step3Title: "Design Development & Spatial Layout",
    step3Desc: "Refining multi-level floorplans, double-height volumes, floating stairs, glass curtain walls, and natural stone facades.",
    step4Title: "Blueprints & Photorealistic 3D Renders",
    step4Desc: "Full photorealistic 3D model, day and night lighting analysis, precise material selection, and virtual walkthrough before construction.",
    step5Title: "Permitting, Working Blueprints & Delivery",
    step5Desc: "Detailed construction blueprints for contractors, municipal permit submission and management, and top-tier on-site supervision until turnkey delivery.",
    btnServicesConsult: "Schedule Architectural Consultation",
    servicesCtaNote: "Tailored Planning • No Obligation",
    philTitle: "Core Architectural Principles",
    philSubtitle: "We believe in meticulous design that enriches everyday living, harmonizes with its surroundings, and creates a timeless home.",
    phil1Num: "Principle 01",
    phil1Title: "Functionality & Precision Engineering",
    phil1Desc: "Every line drawn reflects the practical daily living experience. Spacious, functional layouts tailored precisely to family lifestyle.",
    phil2Num: "Principle 02",
    phil2Title: "Seamless Indoor-Outdoor Synergy",
    phil2Desc: "Expansive glass vitrines and pergolas dissolve the boundary between salon and garden, inviting daylight and natural airflow.",
    phil3Num: "Principle 03",
    phil3Title: "Personal Guidance & Commitment",
    phil3Desc: "Building a home is one of life's most meaningful journeys. Nir Nini guides you personally through every milestone from sketch to turnkey completion.",
    contactTitle: "Let's Design Your Dream Home",
    contactSubtitle: "Planning to build a private villa or home? Want to verify zoning rights on your plot? Leave your details for a professional consultation with Nir Nini, Architectural Engineer.",
    phoneDirectLabel: "Direct Studio Line",
    waChatTitle: "Direct WhatsApp Chat",
    waChatSub: "Quick response for inquiries and consultations",
    btnSendMsg: "Send Message",
    socialIg: "Instagram",
    socialTt: "TikTok",
    socialFb: "Facebook",
    socialFbName: "Nir Nini Architecture",
    midragLabel: "Verified Reputation & Reviews",
    midragLink: "Find our verified ratings on Midrag",
    formTitle: "Schedule a Consultation",
    formSubtitle: "Leave your details and we'll reach out to review your project and zoning",
    formName: "Full Name",
    formNamePlaceholder: "Enter full name",
    formPhone: "Phone Number",
    formPhonePlaceholder: "05X-XXXXXXX",
    formEmail: "Email Address",
    formEmailPlaceholder: "name@domain.com",
    formType: "Project Typology",
    optVilla: "New Private Villa Planning & Municipal Permit Licensing",
    optExtension: "Major Home Renovation & Structural Extension",
    optInteriors: "Interior Architecture & Space Remodeling",
    formMsgLabel: "Project or Site Details",
    formMsg: "Tell us briefly about your project, plot location, or needs...",
    legalConsentText: "I have read and agree to the Terms of Service, Refund Policy, and Privacy & Cookie Policy.",
    formSubmit: "Send Studio Inquiry",
    toastSuccess: "Thank you! Your inquiry is being forwarded to Nir Nini's WhatsApp.",
    toastPhoneError: "Please enter a valid phone number (9-10 digits).",
    galleryTitle: "Complete Project Gallery",
    gallerySubtitle: "Comprehensive architectural portfolio: private luxury villas, photorealistic 3D visualization, commercial interiors, bespoke kitchens, and custom millwork",
    filterAll: "All Projects (59)",
    filterVillas: "Villas & Private Homes (34)",
    filterInteriors: "Interior Architecture (49)",
    filterCommercial: "Commercial & Workspaces (6)",
    filterRenders: "3D Visualization (46)",
    footerColQuick: "Quick Links",
    footerColSpecialties: "Core Services",
    footerSpec1: "Luxury Villas & Homes",
    footerSpec2: "Building Permits & Licensing",
    footerSpec3: "3D Visualization & Virtual Tours",
    footerSpec4: "Engineering Blueprints",
    footerSpec5: "On-Site Supervision",
    footerColLegal: "Legal & Accessibility",
    footerLegalTerms: "Terms of Use & Refunds",
    footerLegalPrivacy: "Privacy & Cookies Policy",
    footerLegalAccess: "Accessibility Statement (IS 5568)",
    footerLegalCopyright: "Copyright & Intellectual Property",
    footerLegalAuthenticity: "Content Authenticity Commitment",
    footerColContact: "Direct Contact",
    footerPhoneDirect: "Direct Phone: ",
    footerWhatsAppDirect: "WhatsApp: ",
    footerCopyright: "© 2026 Nir Nini – Architectural Engineer. All rights reserved. Authentic designs only.",
    footerBackToTop: "Back to Top",
    backToTopGallery: "Back to Top of Gallery",
    footerSignature: "Architectural design, building permits, and advanced 3D renders",
    builderCreditPrefix: "Built by ",
    builderCreditName: "Noam Shashonker",
    modalTabOverview: "Architectural Overview",
    modalTabGallery: "Gallery Views",
    modalTabMaterials: "Materials & Specs",
    modalSpecType: "Project Typology",
    modalSpecArchitect: "Lead Architect",
    modalSpecArchitectVal: "Nir Nini – Architectural Engineer",
    modalPrev: "→ Previous View",
    modalNext: "Next View ←",
    modalViewFullGallery: "View Project in Full Gallery",
    faqArchitectTag: "Direct Professional Guidance",
    faqArchitectName: "Nir Nini",
    faqArchitectTitle: "Architectural Engineer | Luxury Villas, Permits & 3D Visualization"
  }
};

let activeLang = 'he';

document.addEventListener('DOMContentLoaded', () => {
  // Enforce permanent Light Mode throughout the entire site
  document.documentElement.setAttribute('data-theme', 'light');
  try {
    localStorage.removeItem('nir_nini_theme');
  } catch (e) {}

  initLanguage();
  initHeaderScroll();
  initHeroVideo();
  initContactForm();
  initMobileDrawer();
  initScrollReveal();
  initCookieConsent();
  initFaqAccordion();
  initCinematicServicesProcess();
  initAccessibilityWidget();
  initProjectUrlParam();
});

/**
 * Language Initialization & Switching
 */
function initLanguage() {
  const savedLang = localStorage.getItem('nir_nini_lang') || 'he';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-switch-btn');
  const mobileLangBtn = document.getElementById('mobile-lang-btn');

  const handleToggle = (e) => {
    if (e) e.preventDefault();
    const nextLang = activeLang === 'he' ? 'en' : 'he';
    setLanguage(nextLang);
  };

  if (langBtn) langBtn.addEventListener('click', handleToggle);
  if (mobileLangBtn) mobileLangBtn.addEventListener('click', handleToggle);
}

function setLanguage(lang) {
  activeLang = lang;
  localStorage.setItem('nir_nini_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

  // Update UI text elements
  const dict = translations[lang] || translations.he;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update select options with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (dict[key]) {
      opt.textContent = dict[key];
    }
  });

  // Update Lang Button Labels
  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.textContent = lang === 'he' ? 'EN' : 'עברית';
  }
  const mobileLangBtn = document.getElementById('mobile-lang-btn');
  if (mobileLangBtn) {
    mobileLangBtn.textContent = lang === 'he' ? 'English' : 'עברית';
  }

  // Refresh gallery cards and modal texts if loaded
  if (typeof window.renderPortfolioGrid === 'function') {
    window.renderPortfolioGrid();
  }
}

/**
 * Header Scroll Appearance
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Hero Background Video Handler
 * Robust multi-stage immediate autoplay on all mobile WebKit and Android decoders,
 * eliminates mobile latency, prevents black freeze, and provides seamless continuous loop.
 */
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  if (!video) return;

  // 1. Programmatic mobile browser policy requirements (iOS Safari WebKit + Android Chrome)
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.loop = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', 'true');
  video.setAttribute('x5-playsinline', 'true');

  // 2. Multi-stage immediate autoplay trigger
  const tryAutoplay = () => {
    if (!video.paused) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.catch(() => {
        // Will be triggered by ready events or interaction unlock
      });
    }
  };

  // Immediate attempt
  tryAutoplay();

  // Listen to decoder readiness events to trigger as soon as first frame arrives
  ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing'].forEach(evt => {
    video.addEventListener(evt, tryAutoplay, { passive: true });
  });

  // Micro-retries at intervals to bypass mobile browser timing hiccups
  [50, 150, 300, 600, 1200, 2400].forEach(delay => {
    setTimeout(tryAutoplay, delay);
  });

  // 3. User interaction fallback (for strict iOS Low Power Mode / Data Saver)
  const unlockPlayback = () => {
    if (video.paused) {
      video.muted = true;
      video.play().catch(() => {});
    }
    ['touchstart', 'touchend', 'click', 'scroll'].forEach(evt => {
      document.removeEventListener(evt, unlockPlayback, { capture: true });
    });
  };
  ['touchstart', 'touchend', 'click', 'scroll'].forEach(evt => {
    document.addEventListener(evt, unlockPlayback, { capture: true, passive: true, once: true });
  });

  // 4. Seamless loop: seek to 0.08s before duration end to eliminate the mobile end-of-file freeze
  let isLooping = false;
  video.addEventListener('timeupdate', () => {
    if (video.duration && video.currentTime >= video.duration - 0.2) {
      if (!isLooping) {
        isLooping = true;
        video.currentTime = 0.08;
        if (video.paused) {
          video.play().catch(() => {});
        }
        setTimeout(() => {
          isLooping = false;
        }, 300);
      }
    }
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0.08;
    video.play().catch(() => {});
  });

  // 5. Visibility and tab focus recovery
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) {
      tryAutoplay();
    }
  });

  window.addEventListener('pageshow', () => {
    if (video.paused) {
      tryAutoplay();
    }
  });

  // 6. Intersection Observer
  if ('IntersectionObserver' in window) {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && video.paused) {
            tryAutoplay();
          }
        });
      }, { threshold: 0.1 });
      heroObserver.observe(heroSection);
    }
  }
}

/**
 * Mobile Drawer Menu
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const navLinks = document.querySelectorAll('.mobile-menu-link');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (drawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Close on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && drawer.classList.contains('active')) {
      closeDrawer();
    }
  }, { passive: true });
}

/**
 * Contact Inquiry Form Handling
 * Direct WhatsApp and phone contact with strict validation
 */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  const phoneInput = form.querySelector('input[name="phone"]');
  const nameInput = form.querySelector('input[name="name"]');

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.classList.remove('is-invalid');
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.classList.remove('is-invalid');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const consentCheck = form.querySelector('#legal-consent-check');
    if (consentCheck && !consentCheck.checked) {
      showToast(activeLang === 'en' ? 'Please agree to the terms and privacy policy to proceed.' : 'יש לאשר את תנאי השימוש ומדיניות הפרטיות להמשך.');
      consentCheck.focus();
      return;
    }

    const formData = new FormData(form);
    const name = (formData.get('name') || '').trim();
    const phone = (formData.get('phone') || '').trim();
    const email = (formData.get('email') || '').trim();
    const projectType = formData.get('projectType') || 'תכנון וילה / בית פרטי צמוד קרקע והוצאת היתר בניה ורישוי מול הוועדה';
    const notes = (formData.get('notes') || '').trim();

    // Validate phone number (minimum 9 digits, valid Israeli or international format)
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+972|0)[2-9]\d{7,8}$/;

    if (!cleanPhone || cleanPhone.length < 9 || !phoneRegex.test(cleanPhone)) {
      if (phoneInput) {
        phoneInput.classList.add('is-invalid');
        phoneInput.focus();
      }
      showToast(translations[activeLang]?.toastPhoneError || translations.he.toastPhoneError);
      return;
    }

    if (name.length < 2) {
      if (nameInput) {
        nameInput.classList.add('is-invalid');
        nameInput.focus();
      }
      showToast(activeLang === 'en' ? 'Please enter your full name.' : 'נא להזין שם מלא.');
      return;
    }

    // Direct WhatsApp message integration
    const message = `שלום ניר,\nשמי: ${name}\nטלפון: ${phone}${email ? `\nאימייל: ${email}` : ''}\nסוג פרויקט: ${projectType}${notes ? `\nפרטים: ${notes}` : ''}`;
    const whatsappUrl = `https://wa.me/972507299992?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    showToast(translations[activeLang]?.toastSuccess || translations.he.toastSuccess);
    form.reset();

    const badge = document.getElementById('form-project-badge');
    if (badge) badge.remove();
  });
}

/**
 * Handle Project Inquiry prefill and smooth scroll to contact form (DOM XSS Hardened)
 */
function prefillProjectInquiry(projectParam) {
  if (!projectParam || typeof projectParam !== 'string') return;

  // Strict sanitization: trim, limit length to 100 chars, strip potential HTML tags / control characters
  const cleanProject = projectParam
    .replace(/[<>'"`;]/g, '')
    .trim()
    .slice(0, 100);

  if (!cleanProject) return;

  const notesField = document.getElementById('form-notes-field');
  const inquiryForm = document.getElementById('inquiry-form');
  const contactSection = document.getElementById('contact');

  if (notesField) {
    const isEn = (document.documentElement.lang || activeLang) === 'en';
    notesField.value = isEn ? `Inquiry regarding: ${cleanProject}` : `התעניינות לגבי פרויקט: ${cleanProject}`;
  }

  if (inquiryForm) {
    let badge = document.getElementById('form-project-badge');
    const isEn = (document.documentElement.lang || activeLang) === 'en';
    if (!badge) {
      badge = document.createElement('div');
      badge.id = 'form-project-badge';
      badge.className = 'form-project-badge';
      inquiryForm.prepend(badge);
    }
    // Safely construct HTML template without interpolating untrusted input into innerHTML
    badge.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span>${isEn ? 'Inquiring regarding project:' : 'פנייה לגבי פרויקט:'} <strong class="badge-project-name"></strong></span>
      <button type="button" class="btn-clear-project-badge" aria-label="הסר סימון פרויקט">&times;</button>
    `;

    // Strictly assign text content to prevent DOM XSS
    const strongEl = badge.querySelector('.badge-project-name');
    if (strongEl) {
      strongEl.textContent = cleanProject;
    }

    badge.querySelector('.btn-clear-project-badge')?.addEventListener('click', () => {
      badge.remove();
      if (notesField && notesField.value.includes(cleanProject)) {
        notesField.value = '';
      }
    });
  }

  if (contactSection) {
    setTimeout(() => {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
}
window.prefillProjectInquiry = prefillProjectInquiry;

/**
 * Handle URL Parameter ?project=... to auto-prefill and scroll to contact form
 */
function initProjectUrlParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectParam = urlParams.get('project');
  if (projectParam) {
    prefillProjectInquiry(projectParam);
  }
}

/**
 * Lightweight Toast Notification
 */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4500);
}

/**
  * Subtle Scroll Reveal Observer
  */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
  if (!elements || elements.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px 0px 50px 0px',
    threshold: 0.01
  });

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add('is-revealed');
    } else {
      observer.observe(el);
    }
  });
}

// Make initScrollReveal globally accessible
window.initScrollReveal = initScrollReveal;

/**
 * Cookie Consent Banner
 * Compliant with privacy regulations and local storage persistence
 */
function initCookieConsent() {
  const CONSENT_KEY = 'nir_nini_cookie_consent';
  try {
    if (localStorage.getItem(CONSENT_KEY) === 'accepted') {
      return;
    }
  } catch (e) {}

  const banner = document.createElement('div');
  banner.className = 'cookie-consent-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'הודעת קובצי עוגיות');

  banner.innerHTML = `
    <div class="cookie-banner-content">
      <div class="cookie-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 0-2 19.8"></path>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></circle>
          <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"></circle>
          <circle cx="12" cy="14" r="1.5" fill="currentColor"></circle>
        </svg>
      </div>
      <div class="cookie-banner-text">
        <p>
          באתר זה מופעלים קובצי עוגיות (Cookies) חיוניים בלבד לצורך תפעול תקין של האתר, שיפור חוויית הגלישה ושמירת העדפות נגישות ושפה. איננו עושים שימוש בקובצי עוגיות לצורכי פרסום או מעקב צד שלישי. למידע נוסף, עיינו ב<a href="privacy.html#cookies">מדיניות העוגיות והפרטיות</a> שלנו.
        </p>
      </div>
    </div>
    <div class="cookie-banner-actions">
      <button type="button" class="btn-cookie-accept" id="btn-cookie-accept">אישור והבנתי</button>
      <a href="privacy.html#cookies" class="btn-cookie-settings">קרא עוד</a>
    </div>
  `;

  document.body.appendChild(banner);

  const acceptBtn = banner.querySelector('#btn-cookie-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      try {
        localStorage.setItem(CONSENT_KEY, 'accepted');
      } catch (e) {}
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(100%)';
      banner.style.transition = 'all 0.35s ease-out';
      setTimeout(() => {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 400);
    });
  }
}

/**
 * Floating Accessibility Toolbar & Widget (UserWay integration & built-in fallback)
 */
function initAccessibilityWidget() {
  // Check if UserWay Account ID is configured and valid
  const userwayId = window.USERWAY_ACCOUNT_ID || localStorage.getItem('userway_account_id');
  if (userwayId && userwayId !== 'YOUR_ACCOUNT_ID' && /^[a-zA-Z0-9_\-]{3,32}$/.test(userwayId)) {
    const s = document.createElement('script');
    s.setAttribute('data-account', userwayId);
    s.setAttribute('src', 'https://cdn.userway.org/widget.js');
    document.body.appendChild(s);
    return;
  }

  const STORAGE_KEY = 'nir_nini_a11y_settings';
  let settings = {
    textSize: 'normal',
    highContrast: false,
    readableFont: false,
    highlightLinks: false
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        if (['normal', 'large', 'xlarge'].includes(parsed.textSize)) {
          settings.textSize = parsed.textSize;
        }
        if (typeof parsed.highContrast === 'boolean') {
          settings.highContrast = parsed.highContrast;
        }
        if (typeof parsed.readableFont === 'boolean') {
          settings.readableFont = parsed.readableFont;
        }
        if (typeof parsed.highlightLinks === 'boolean') {
          settings.highlightLinks = parsed.highlightLinks;
        }
      }
    }
  } catch (e) {}

  const applySettings = () => {
    const root = document.documentElement;
    root.classList.remove('a11y-text-lg', 'a11y-text-xl');
    if (settings.textSize === 'large') root.classList.add('a11y-text-lg');
    if (settings.textSize === 'xlarge') root.classList.add('a11y-text-xl');

    root.classList.toggle('a11y-high-contrast', settings.highContrast);
    root.classList.toggle('a11y-readable-font', settings.readableFont);
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {}
  };

  // Apply on init
  applySettings();

  // Trigger button
  const trigger = document.createElement('button');
  trigger.className = 'a11y-widget-trigger';
  trigger.setAttribute('type', 'button');
  trigger.setAttribute('aria-label', 'פתיחת תפריט נגישות (תקן ישראלי 5568)');
  trigger.setAttribute('title', 'תפריט נגישות');
  trigger.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="4" r="2"/>
      <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.48-.23-1.04-.26-1.55-.09l-3.9 1.3c-.63.21-1.08.76-1.18 1.42l-.4 3.08 1.98.26.33-2.52 2.69-.9v4.16l-2.73 6.13 1.82.81 2.91-6.55h1.99l2.91 6.55 1.82-.81-2.73-6.13V13h2.18c.63 0 1.22-.38 1.48-.96.26-.58.12-1.27-.35-1.7-.1-.09-.21-.17-.33-.24z"/>
    </svg>
  `;

  // Panel
  const panel = document.createElement('div');
  panel.className = 'a11y-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'הגדרות נגישות האתר');
  panel.innerHTML = `
    <div class="a11y-panel-header">
      <div class="a11y-panel-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="4" r="2"/>
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.48-.23-1.04-.26-1.55-.09l-3.9 1.3c-.63.21-1.08.76-1.18 1.42l-.4 3.08 1.98.26.33-2.52 2.69-.9v4.16l-2.73 6.13 1.82.81 2.91-6.55h1.99l2.91 6.55 1.82-.81-2.73-6.13V13h2.18c.63 0 1.22-.38 1.48-.96.26-.58.12-1.27-.35-1.7-.1-.09-.21-.17-.33-.24z"/>
        </svg>
        <span>הגדרות נגישות (ת״י 5568)</span>
      </div>
      <button type="button" class="a11y-panel-close" id="a11y-close-btn" aria-label="סגור תפריט נגישות">&times;</button>
    </div>

    <div class="a11y-btn-grid">
      <button type="button" class="a11y-tool-btn" id="a11y-btn-text-inc" title="הגדל גודל גופן">
        <span class="a11y-icon-text">A+</span>
        <span>הגדל טקסט</span>
      </button>
      <button type="button" class="a11y-tool-btn" id="a11y-btn-text-dec" title="הקטן גודל גופן">
        <span class="a11y-icon-text">A-</span>
        <span>הקטן טקסט</span>
      </button>
      <button type="button" class="a11y-tool-btn" id="a11y-btn-contrast" title="החלף מצב ניגודיות">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"></path>
        </svg>
        <span>ניגודיות גבוהה</span>
      </button>
      <button type="button" class="a11y-tool-btn" id="a11y-btn-font" title="החלף לגופן מערכת קריא">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
        <span>גופן קריא</span>
      </button>
      <button type="button" class="a11y-tool-btn" id="a11y-btn-links" title="הדגש קישורים בעמוד">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        <span>הדגשת קישורים</span>
      </button>
      <button type="button" class="a11y-tool-btn" id="a11y-btn-reset" title="אפס את כל התאמות הנגישות">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="1 4 1 10 7 10"></polyline>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </svg>
        <span>איפוס הכל</span>
      </button>
    </div>

    <div class="a11y-panel-footer">
      <a href="accessibility.html" class="a11y-statement-link">הצהרת נגישות מלאה</a>
    </div>
  `;

  document.body.appendChild(trigger);
  document.body.appendChild(panel);

  const updateToolBtnStates = () => {
    panel.querySelector('#a11y-btn-contrast')?.classList.toggle('active', settings.highContrast);
    panel.querySelector('#a11y-btn-font')?.classList.toggle('active', settings.readableFont);
    panel.querySelector('#a11y-btn-links')?.classList.toggle('active', settings.highlightLinks);
    panel.querySelector('#a11y-btn-text-inc')?.classList.toggle('active', settings.textSize === 'large' || settings.textSize === 'xlarge');
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('active');
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-close-btn')?.addEventListener('click', () => {
    panel.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !trigger.contains(e.target) && panel.classList.contains('active')) {
      panel.classList.remove('active');
    }
  });

  // Action handlers
  panel.querySelector('#a11y-btn-text-inc')?.addEventListener('click', () => {
    if (settings.textSize === 'normal') settings.textSize = 'large';
    else if (settings.textSize === 'large') settings.textSize = 'xlarge';
    applySettings();
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-btn-text-dec')?.addEventListener('click', () => {
    if (settings.textSize === 'xlarge') settings.textSize = 'large';
    else settings.textSize = 'normal';
    applySettings();
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-btn-contrast')?.addEventListener('click', () => {
    settings.highContrast = !settings.highContrast;
    applySettings();
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-btn-font')?.addEventListener('click', () => {
    settings.readableFont = !settings.readableFont;
    applySettings();
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-btn-links')?.addEventListener('click', () => {
    settings.highlightLinks = !settings.highlightLinks;
    applySettings();
    updateToolBtnStates();
  });

  panel.querySelector('#a11y-btn-reset')?.addEventListener('click', () => {
    settings = {
      textSize: 'normal',
      highContrast: false,
      readableFont: false,
      highlightLinks: false
    };
    applySettings();
    updateToolBtnStates();
  });
}

/**
 * FAQ Accordion Interactivity
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems || faqItems.length === 0) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherTrigger = other.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Keyboard accessibility: Enter or Space
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

/**
 * ==========================================================================
 * Services & Architectural Construction Process Engine
 * Continuous, Uniform Smooth Reveal with Zero Clutter
 * ==========================================================================
 */
function initCinematicServicesProcess() {
  const section = document.getElementById('services');
  if (!section) return;

  const stepCards = section.querySelectorAll('.cinematic-step-card');
  const timelineNodes = section.querySelectorAll('.timeline-node');
  const timelineTrackFill = document.getElementById('timeline-track-fill');
  
  // Building Visual Elements
  const revealedLayer = document.getElementById('building-revealed-layer');
  const laserScanner = document.getElementById('building-laser-scanner');

  let hasStarted = false;
  let animationFrameId = null;
  let currentActiveStep = 1;

  // Total duration of continuous animation in milliseconds (~3.5 seconds: fluid, prompt, professional)
  const TOTAL_DURATION = 3500;

  function updateActiveStep(stepNum) {
    if (stepNum === currentActiveStep) return;
    currentActiveStep = stepNum;

    stepCards.forEach(card => {
      const s = parseInt(card.getAttribute('data-step'), 10);
      const isActive = s === stepNum;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-selected', String(isActive));
    });

    timelineNodes.forEach(node => {
      const s = parseInt(node.getAttribute('data-target-step'), 10);
      node.classList.toggle('active', s === stepNum);
    });
  }

  function applyProgress(progress) {
    // progress is clamped between 0 and 1
    const clamped = Math.max(0, Math.min(1, progress));
    const insetTopPct = (1 - clamped) * 100;

    // Smoothly reveal from bottom to top
    if (revealedLayer) {
      revealedLayer.style.clipPath = `inset(${insetTopPct.toFixed(2)}% 0 0 0)`;
    }

    // Laser scanline follows the reveal line exactly
    if (laserScanner) {
      if (clamped >= 1) {
        laserScanner.style.opacity = '0';
        laserScanner.style.pointerEvents = 'none';
      } else {
        laserScanner.style.opacity = '1';
        laserScanner.style.top = `${insetTopPct.toFixed(2)}%`;
      }
    }

    // Update bottom timeline fill proportionally
    if (timelineTrackFill) {
      timelineTrackFill.style.width = `${(clamped * 100).toFixed(1)}%`;
    }

    // Determine active stage (1 to 5) continuously across the timeline
    const stepNum = Math.min(5, Math.floor(clamped * 5) + 1);
    updateActiveStep(stepNum);
  }

  function finishAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    // Guarantee 100% clean final state: only pure, unobstructed house image
    if (revealedLayer) {
      revealedLayer.style.clipPath = 'inset(0% 0 0 0)';
    }
    if (laserScanner) {
      laserScanner.style.opacity = '0';
      laserScanner.style.pointerEvents = 'none';
    }
    if (timelineTrackFill) {
      timelineTrackFill.style.width = '100%';
    }
    updateActiveStep(5);
  }

  function startAutoSequence() {
    if (hasStarted) return;
    hasStarted = true;

    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishAnimation();
      return;
    }

    let startTime = null;

    function render(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / TOTAL_DURATION);

      applyProgress(progress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        finishAnimation();
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Interactive Click on Step Cards or Timeline Nodes
  function handleManualStepClick(stepNum) {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    hasStarted = true;

    // Direct proportional progress (1: 20%, 2: 40%, 3: 60%, 4: 80%, 5: 100%)
    const targetProgress = stepNum / 5;
    applyProgress(targetProgress);

    if (stepNum === 5) {
      finishAnimation();
    }
  }

  // Bind clicks and keyboard on step cards
  stepCards.forEach(card => {
    const stepNum = parseInt(card.getAttribute('data-step'), 10);
    card.addEventListener('click', () => handleManualStepClick(stepNum));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleManualStepClick(stepNum);
      }
    });
  });

  // Bind clicks on timeline nodes
  timelineNodes.forEach(node => {
    const stepNum = parseInt(node.getAttribute('data-target-step'), 10);
    node.addEventListener('click', () => handleManualStepClick(stepNum));
  });

  // Trigger automatically ONCE when entering viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          startAutoSequence();
          observer.disconnect(); // Runs strictly once per page load
        }
      });
    }, {
      threshold: 0.15 // Triggers as soon as top 15% of section enters viewport
    });

    observer.observe(section);
  } else {
    // Fallback
    startAutoSequence();
  }

  // Check if section is already in view on page load
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
    startAutoSequence();
  }
}


