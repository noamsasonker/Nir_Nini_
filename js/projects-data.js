/**
 * Nir Nini - Practical Architect (הנדסאי אדריכלות)
 * Official Projects and Studio Portfolio Data
 * Authentic verified projects & real client render files only.
 */

const portfolioData = {
  studio: {
    name: {
      he: "ניר ניני | הנדסאי אדריכלות",
      en: "Nir Nini | Architectural Engineer"
    },
    title: {
      he: "הנדסאי אדריכלות",
      en: "Architectural Engineer & Practical Architect"
    },
    tagline: {
      he: "תכנון אדריכלי מדויק, היתרי בנייה והדמיות תלת-ממד מתקדמות",
      en: "Precise architectural design, building permits, and advanced 3D visualization"
    },
    bio: {
      he: "ניר ניני, הנדסאי אדריכלות, מתמחה בתכנון וילות, בתים פרטיים, הדמיות תלת-ממד פוטוריאליסטיות, הפקת תוכניות עבודה הנדסיות והוצאת היתרי בנייה מול ועדות התכנון והבנייה. הסטודיו מעניק ליווי אישי, מקצועי ומדויק מהסקיצה הראשונית ועד לסיום הביצוע בשטח.",
      en: "Nir Nini is an Architectural Engineer specializing in private villas, residences, photorealistic 3D visualization, detailed construction blueprints, and municipal building permits. The studio provides hands-on, meticulous guidance from conceptual design through on-site realization."
    },
    contact: {
      phone: "050-729-9992",
      phoneRaw: "0507299992",
      phoneHref: "tel:0507299992",
      instagram: "https://www.instagram.com/nir_nini_architect?xtok=cHA1d3Y3anc0cGZt",
      tiktok: "https://www.tiktok.com/@nir_nini?_r=1&_t=ZS-9Aa8OF02VYv",
      whatsapp: "https://wa.me/972507299992"
    }
  },

  categories: [
    { id: "all", label: { he: "כל הפרויקטים (59 מבטים)", en: "All Projects (59 Views)" } },
    { id: "villas", label: { he: "וילות ובתים פרטיים (34)", en: "Villas & Private Homes (34)" } },
    { id: "interiors", label: { he: "עיצוב פנים אדריכלי (49)", en: "Interior Architecture (49)" } },
    { id: "commercial", label: { he: "מבנים מסחריים וחללי עבודה (6)", en: "Commercial & Workspaces (6)" } },
    { id: "renders", label: { he: "הדמיות תלת-ממד 3D (46)", en: "3D Visualization (46)" } }
  ],

  projects: [
    {
      id: "project-modern-villa",
      number: "01",
      title: { 
        he: "D20", 
        en: "D20" 
      },
      category: "villas",
      categories: ["villas", "interiors", "renders"],
      categoryName: { 
        he: "וילות ובתים פרטיים", 
        en: "Private Villas & Homes" 
      },
      year: "2026",
      heroImage: "assets/images/projects/villa-exterior.jpg",
      tagline: {
        he: "בית קרקע 220 מ״ר עם 5 חדרי שינה",
        en: "220 sqm ground-level home with 5 bedrooms"
      },
      description: {
        he: "תכנון בית קרקע מודרני בשטח של 220 מ״ר עם 5 חדרי שינה. תכנון מרווח ופרקטי הכולל חצר אירוח עם דק עץ, חיפוי אבן טבעית וסלון פתוח ומואר.",
        en: "Modern ground-level home planning: 220 sqm with 5 bedrooms, spacious living areas, natural stone accents, and outdoor entertaining deck."
      },
      materials: [
        { he: "חיפוי אבן טבעית מסותתת לקירות חוץ", en: "Chiseled Natural Stone Cladding" },
        { he: "קורות פלדה שחורות מרחפות ופרגולת עץ", en: "Cantilevered Steel Beam & Timber Pergola" },
        { he: "מפתחי אלומיניום וזכוכית מבודדת", en: "High-Performance Architectural Glazing" },
        { he: "מדרגות עץ מרחפות עם אדנית פנימית", en: "Floating Timber Stairs & Indoor Planter" }
      ],
      gallery: [
        {
          url: "assets/images/projects/villa-exterior.jpg",
          title: { he: "חזית ראשית ורחבת כניסה", en: "Main Facade & Entry Plaza" },
          caption: { he: "קורת פלדה מרחפת המצלה על רחבת הכניסה ודק עץ", en: "Cantilevered steel canopy and wood deck" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/villa-stone-facade.jpg",
          title: { he: "חזית מבנה בחיפוי אבן טבעית", en: "Natural Stone Cladding Facade" },
          caption: { he: "חיפוי אבן טבעית יוקרתי, פתחים אנכיים כהים ופיתוח גינה בחזית", en: "Natural stone elevation with sleek vertical dark window framing" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/villa-living-wide.jpg",
          title: { he: "סלון מרכזי רחב ידיים", en: "Spacious Open Living Salon" },
          caption: { he: "חלל אירוח פתוח עם ספת מעצבים, נישת טלוויזיה ומדרגות", en: "Open living space with designer seating and stairs" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/villa-aerial-balcony.jpg",
          title: { he: "מרפסת עליונה ומשרביית עץ", en: "Upper Balcony & Timber Slats" },
          caption: { he: "מבט עילי על מרפסת הקומה העליונה ופסי עץ להצללה", en: "Elevated perspective of upper terrace and louvers" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/villa-patio-pergola.jpg",
          title: { he: "חצר אירוח ופרגולת פלדה", en: "Entertaining Patio & Pergola" },
          caption: { he: "רחבת אירוח מוצלת עם פינת ישיבה, דק עץ וסביבה ירוקה", en: "Shaded terrace with lounge seating and greenery" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/villa-garden-path.jpg",
          title: { he: "שביל גינה ופיתוח נוף", en: "Garden Pathway & Landscaping" },
          caption: { he: "שביל אבן היקפי מוקף מדשאה, סלעי נוי וקיר ירוק", en: "Perimeter stone path with lawn and green wall" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/villa-living-sofa.jpg",
          title: { he: "פינת ישיבה אינטימית בסלון", en: "Curated Lounge Seating Area" },
          caption: { he: "ספה מודולרית ודלתות הזזה מזכוכית הנפתחות אל הדק", en: "Modular sofa with glass sliders opening to deck" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/villa-kitchen.jpg",
          title: { he: "מטבח מודרני ואי שיש", en: "Modern Kitchen & Marble Island" },
          caption: { he: "ארונות שחורים בקו אפס, אי שיש מרכזי וחלון לחצר", en: "Matte black cabinetry, marble island, and window" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/villa-hall-stairs.jpg",
          title: { he: "גרם מדרגות פנים ואדנית צמחייה", en: "Interior Stairs & Planted Garden" },
          caption: { he: "גרם מדרגות פנים קל מעל אדנית צמחייה מוארת ומעקה שחור", en: "Floating staircase above illuminated indoor planter with black balusters" },
          aspect: "compact"
        }
      ]
    },
    {
      id: "project-luxury-estate",
      number: "02",
      title: { 
        he: "Z10", 
        en: "Z10" 
      },
      category: "villas",
      categories: ["villas", "interiors", "renders"],
      categoryName: { 
        he: "וילות ובתים פרטיים", 
        en: "Private Villas & Homes" 
      },
      year: "2026",
      heroImage: "assets/images/projects/estate/estate-facade-main.jpg",
      tagline: {
        he: "וילה 550 מ״ר עם חללים כפולים הכוללת בריכת שחיה ובר חוץ",
        en: "550 sqm luxury villa with double-height spaces, swimming pool and outdoor bar"
      },
      description: {
        he: "תכנון וילה יוקרתית בשטח של 550 מ״ר עם חללים כפולים, הכוללת בריכת שחייה, בר חוץ מרווח לאירוח, קירות זכוכית גבוהים וסלון אירוח רחב ידיים.",
        en: "550 sqm luxury villa design featuring dramatic double-height spaces, private swimming pool, outdoor bar pavilion, expansive glass walls, and spacious living salon."
      },
      materials: [
        { he: "קירות מסך מזוגגים בגובה כפול", en: "Two-Story Architectural Curtain Wall" },
        { he: "חיפוי אבן טבעית מסותתת בגוון חם", en: "Warm Chiseled Natural Limestone" },
        { he: "ריצוף פנים בפרקט פישבון יוקרתי", en: "Bespoke Herringbone Hardwood Flooring" },
        { he: "בריכת שחייה בחיפוי פסיפס תכול", en: "Aquamarine Mosaic Tile Swimming Pool" }
      ],
      gallery: [
        {
          url: "assets/images/projects/estate/estate-facade-main.jpg",
          title: { he: "חזית כניסה מונומנטלית בחלל כפול", en: "Monumental Double-Height Facade" },
          caption: { he: "קיר מסך מזוגג בגובה שתי קומות, חיפוי אבן טבעית ועצי דקל", en: "Two-story glass curtain wall with chiseled stone and palms" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/estate/estate-living-piano.jpg",
          title: { he: "חזית הוילה, רחבת חניה ורכבי יוקרה", en: "Residence Facade & Luxury Driveway" },
          caption: { he: "מבט חוץ על חזית הוילה המודרנית, קיר מסך כפול ורחבת חניה ייצוגית", en: "Exterior perspective of the contemporary residence, double-height curtain wall and front driveway" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/estate/estate-glass-curtain.jpg",
          title: { he: "שולחן אוכל שיש וחלל מטבח פתוח", en: "Open Kitchen & Black Marble Dining Suite" },
          caption: { he: "פינת אוכל מרווחת עם שולחן שיש שחור, גופי תאורה מעוצבים וחיבור ישיר למטבח", en: "Spacious dining area with black marble table, designer pendant lights and open kitchen connection" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/estate/estate-pool-mosaic.jpg",
          title: { he: "מדרגות מרחפות מעל גינה פנימית מוארת", en: "Floating Stairs over Illuminated Indoor Garden" },
          caption: { he: "גרם מדרגות קל ומרחף עם מוטות פלדה לבנים ואדנית צמחייה מוארת בחלל הפנים", en: "Floating staircase suspended by white steel rods over an integrated, illuminated indoor planter" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/estate/estate-kitchen-dining.jpg",
          title: { he: "אי שיש מרכזי ומערך ארונות מטבח גבוהים", en: "Marble Prep Island & Integrated Cabinetry" },
          caption: { he: "אי מטבח יוקרתי משיש עם ברז זהב, ארונות גבוהים עם תנורים אינטגרליים ופתיחה לחצר", en: "Luxury marble prep island with brass tap, integrated tall oven tower and opening to patio" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/estate/estate-floating-stairs.jpg",
          title: { he: "קיר כוח אדריכלי וויטרינת תצוגה מוארת", en: "Architectural Feature Wall & Lit Showcase" },
          caption: { he: "קיר כוח בגימור טיח אדריכלי עם נישת תצוגה מזוגגת מוארת לפריטי אמנות", en: "Textured architectural accent wall featuring an illuminated glazed showcase niche for art" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-pool-elevation.jpg",
          title: { he: "גרם מדרגות מרחף עם תאורת קיר שקועה", en: "Floating Staircase with Recessed Handrail Channel" },
          caption: { he: "מבט ישיר אל גרם המדרגות המרחף, תעלת תאורה שקועה במעקה וצמחייה טבעית בבסיס", en: "Direct view of floating steps, recessed wall lighting line and integrated lush indoor planter" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-bbq-pavilion.jpg",
          title: { he: "מבט פינתי על חזית הזכוכית והחיפוי היוקרתי", en: "Corner Villa Facade & Double-Height Glazing" },
          caption: { he: "שילוב אלגנטי של זכוכית כפולה, חיפוי אבן טבעית ורחבת חוץ מרוצפת", en: "Elegant combination of two-story glass facade, natural stone cladding and paved driveway" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-deck-lounge.jpg",
          title: { he: "בריכת שחייה פרטית ורחבת אירוח חיצונית", en: "Private Swimming Pool & Outdoor Terrace" },
          caption: { he: "בריכת שחייה מרוצפת פסיפס, ביתן אירוח ומטבח חוץ עם משרבייה דקורטיבית", en: "Mosaic-tiled private swimming pool, poolside pavilion and decorative stone mashrabiya" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-aerial-massing.jpg",
          title: { he: "סלון אירוח בחלל כפול עם שנדליר קריסטל", en: "Double-Height Salon & Grand Chandelier" },
          caption: { he: "חלל מגורים מפואר בגובה כפול עם וילונות ענק, שנדליר יוקרתי וריהוט מוקפד", en: "Magnificent double-height living room with grand chandelier, full-height drapes and custom furniture" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-exterior-corner.jpg",
          title: { he: "רחבת דק עץ ופינת לאונג' חיצונית", en: "Outdoor Deck Lounge & Hanging Swing Chair" },
          caption: { he: "דק עץ יוקרתי עם ספת לאונג' מעוגלת, כורסה תלויה וצמחייה טרופית סביב הבריכה", en: "Wood deck terrace with curved lounge sofa, hanging swing chair and tropical landscaping" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-poolside-patio.jpg",
          title: { he: "משטח עבודה, כיריים וקולט אדים מחורץ", en: "Kitchen Cooktop Counter & Fluted Hood" },
          caption: { he: "משטח שיש רחב עם כיריים אינטגרליות, חיפוי קיר תואם וקולט אדים מחורץ בתאורת לד", en: "Marble cooktop counter, integrated hob, matching splashback and fluted hood with LED lighting" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-facade-detail.jpg",
          title: { he: "מבט צידי ואחורי על נפחי הוילה והבריכה", en: "Side & Rear Elevation with Rooftop Structure" },
          caption: { he: "קומפוזיציה אדריכלית המשלבת מסגרת פרגולה בגג, גינה ירוקה ובריכת שחייה צלולה", en: "Architectural composition showing rooftop pergola frame, manicured lawn and swimming pool" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-gate-driveway.jpg",
          title: { he: "שולחן אירוח מואר בתאורת לד מעוצבת", en: "Modern Dining Table with Integrated LED Line" },
          caption: { he: "שולחן אוכל שחור עם פס תאורת לד היקפי בבסיסו, לצד אי המטבח המרכזי", en: "Black dining table with integrated LED accent line at the base, alongside central kitchen island" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-garden-pathway.jpg",
          title: { he: "מטבח חוץ מאובזר ופרגולת אירוח", en: "Outdoor Kitchen Pavilion & Concrete Pergola" },
          caption: { he: "ביתן אירוח חיצוני עם מטבח חוץ מלא, משטח עבודה, כיור ופרגולת בטון מוצלת", en: "Fully equipped outdoor kitchen with sink, prep counter, and shaded concrete pergola" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-kitchen-island.jpg",
          title: { he: "סלון ייצוגי ופסנתר כנף בחלל המגורים", en: "Grand Piano Salon & Living Lounge" },
          caption: { he: "פינת אירוח יוקרתית עם פסנתר כנף שחור, תמונת אמנות ענקית וריהוט מעוצב", en: "Prestigious living area featuring a black grand piano, monumental artwork and designer seating" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-kitchen-prep.jpg",
          title: { he: "אי שיש מרכזי וברז פליז מוזהב", en: "Marble Island & Brass Gooseneck Tap" },
          caption: { he: "אי עבודה משיש איכותי עם כיור שקוע, ברז צוואר ברבור מוזהב ומבט למשטח הכיריים", en: "Fine marble island with undermount sink, brushed brass gooseneck tap and cooktop background" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-kitchen-bar.jpg",
          title: { he: "בריכת שחייה בפסיפס תכול ומיטות שיזוף", en: "Mosaic Tiled Pool & Sun Loungers" },
          caption: { he: "רחבת שיזוף עם מיטות שכיבה על שפת בריכת שחייה מרוצפת פסיפס יוקרתי ועצי דקל", en: "Tanning terrace with luxury sun loungers alongside azure mosaic-tiled pool and palms" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-kitchen-corridor.jpg",
          title: { he: "שביל דק עץ היקפי וצמחייה טרופית", en: "Perimeter Deck Pathway & Tropical Greenery" },
          caption: { he: "שביל הליכה מרוצף דק עץ לאורך חזית האבן, עם עצי דקל ותאורת גן שקועה", en: "Wood deck walkway along the natural stone facade, flanked by palm trees and recessed lighting" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-dining-stairs.jpg",
          title: { he: "שולחן אוכל שיש ואי עבודה מרכזי", en: "Marble Dining Suite & Island Counter" },
          caption: { he: "מבט חזיתי על שולחן האוכל השחור, אי השיש עם ברז הפליז ומדרגות הריחוף ברקע", en: "Direct view of black marble dining table, marble island with brass tap and stairs in background" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-living-foyer.jpg",
          title: { he: "זרימה מרחבית בין המטבח לפינת האוכל", en: "Kitchen to Dining Open Circulation" },
          caption: { he: "מבט אורכי לאורך אי העבודה ומערך הנגרות הגבוהה המובילים אל פינת האוכל", en: "Longitudinal perspective past kitchen island and tall cabinetry towards the dining area" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-stairs-perspective.jpg",
          title: { he: "מבואת כניסה ראשית ומדרגות מוארות", en: "Main Entrance Portal & Illuminated Steps" },
          caption: { he: "כניסה ראשית מרשימה עם מדרגות מרחפות ומוארות, דלת ביטחון מעוצבת ופרגולת בטון", en: "Striking main entryway with floating illuminated steps, designer door and concrete canopy" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-foyer-display.jpg",
          title: { he: "קיר אמנות, פסנתר כנף ופסל אריה", en: "Feature Art Wall, Piano & Lion Sculpture" },
          caption: { he: "קיר כוח ייצוגי המשלב פסנתר שחור, פסל אריה אדריכלי ויצירת אמנות מונומנטלית", en: "Focal art wall featuring black grand piano, architectural lion sculpture and monumental canvas" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/estate/estate-salon-art.jpg",
          title: { he: "מבט ממימי הבריכה לחזית האבן הכפולה", en: "Water-Level View of Double-Height Stone Facade" },
          caption: { he: "השתקפות חזית האבן המרשימה ולוחות המשרבייה במימי בריכת השחייה הצלולה", en: "Reflection of the monumental stone facade and mashrabiya screens across the clear pool" },
          aspect: "compact"
        }
      ]
    },
    {
      id: "project-b10",
      number: "03",
      title: { 
        he: "B10", 
        en: "B10" 
      },
      category: "villas",
      categories: ["villas", "renders"],
      categoryName: { 
        he: "וילות ובתים פרטיים", 
        en: "Private Villas & Homes" 
      },
      year: "2026",
      heroImage: "assets/images/projects/b10-facade.jpg",
      tagline: {
        he: "בית קרקע 210 מ״ר 4 חדרי שינה כולל גראז׳ ובריכה פרטית",
        en: "210 sqm ground-level home, 4 bedrooms with garage and private pool"
      },
      description: {
        he: "תכנון בית קרקע מודרני בשטח של 210 מ״ר עם 4 חדרי שינה, גראז' סגור ובריכת שחייה פרטית. תכנון מואר ופרקטי עם קורות הצללה, חיפוי אבן טבעית וחצר מטופחת.",
        en: "Modern 210 sqm ground-level residence: 4 bedrooms, garage, and private swimming pool. Sunlit open layout with architectural louvers and natural stone facade."
      },
      materials: [
        { he: "קורות הצללה ופרגולה עליונה מבטון אדריכלי", en: "Architectural Concrete Pergola Louvers" },
        { he: "חיפוי אבן טבעית מסותתת בחזית הכניסה", en: "Chiseled Natural Stone Facade Cladding" },
        { he: "גידור עץ מודרני ושער כניסה אינטגרלי", en: "Contemporary Horizontal Timber Fencing & Gate" },
        { he: "בריכת שחייה פרטית מרוצפת עם רחבת שיזוף", en: "Private In-Ground Swimming Pool & Sun Terrace" }
      ],
      gallery: [
        {
          url: "assets/images/projects/b10-facade.jpg",
          title: { he: "חזית ראשית ופיתוח שטח – B10", en: "Main Facade & Landscape – B10" },
          caption: { he: "מבט פנורמי על וילת B10, קורות ההצללה, שער הכניסה והבריכה", en: "Front architectural perspective of Villa B10 with pergola and pool" },
          aspect: "hero"
        }
      ]
    },
    {
      id: "project-commercial-office",
      number: "04",
      title: { 
        he: "אדריכלות פנים מסחרית וחללי עבודה", 
        en: "Commercial & Corporate Office Architecture" 
      },
      category: "commercial",
      categories: ["commercial", "interiors"],
      categoryName: { 
        he: "מבנים מסחריים וחללי עבודה", 
        en: "Commercial & Workspaces" 
      },
      year: "2026",
      heroImage: "assets/images/projects/commercial/commercial-breakroom-table.jpg",
      tagline: {
        he: "תכנון חללי משרדים, אזורי התרעננות לעובדים, מטבחונים ארגונומיים ופינות קפה יוקרתיות",
        en: "Corporate breakroom planning, ergonomic office kitchenettes, and executive coffee lounges"
      },
      description: {
        he: "תכנון אדריכלי ועיצוב פנים לסביבות עבודה מודרניות ומבנים מסחריים. הפרויקט שם דגש על שילוב הרמוני בין פרקטיקה עסקית לתחושת חמימות ונוחות: אזור התרעננות מרכזי (Breakroom) עם שולחן עץ רחב ותקרת תאורה אקוסטית, מטבחון שירות משרדי ארגונומי עם תאי מיקרוגל פתוחים, ועמדות קפה ייצוגיות בחיפוי סרגלי עץ אקוסטיים.",
        en: "Interior architectural planning for corporate offices and commercial facilities. Focuses on balancing workspace ergonomics with warm hospitality: collaborative employee breakrooms, full dining tables with acoustic ceiling grids, modular office kitchenettes, and executive coffee lounges with acoustic timber slat paneling."
      },
      materials: [
        { he: "שולחן אירוח מסיבי מעץ אלון", en: "Solid Oak Communal Dining Table" },
        { he: "תקרת תאורה אקוסטית מודולרית", en: "Modular Acoustic Ceiling & LED Grid" },
        { he: "חיפוי קיר סרגלי עץ אקוסטיים", en: "Acoustic Vertical Wood Slat Paneling" },
        { he: "נגרות פורמייקה בגימור אפור מט", en: "Matte Gray Commercial-Grade Millwork" }
      ],
      gallery: [
        {
          url: "assets/images/projects/commercial/commercial-breakroom-table.jpg",
          title: { he: "חלל אירוח והתרעננות משרדי", en: "Office Breakroom & Communal Table" },
          caption: { he: "שולחן עץ אלון רחב, כסאות מעוצבים, תקרת לדים ומטבחון מלא", en: "Oak communal table, acoustic drop ceiling, and full office kitchenette" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/commercial/commercial-slat-wall-coffee.jpg",
          title: { he: "עמדת קפה executive בחיפוי סרגלי עץ", en: "Executive Coffee Lounge & Slat Wall" },
          caption: { he: "קיר חיפוי סרגלי עץ אקוסטיים, משטח שיש ומקרר מובנה", en: "Acoustic wood slat feature wall with marble counter and bar fridge" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/commercial/commercial-kitchenette-gray.jpg",
          title: { he: "מטבחון שירות משרדי באפור בהיר", en: "Modular Office Pantry & Kitchenette" },
          caption: { he: "ארונות שירות עמידים, תאי מיקרוגל פתוחים ומשטח שיש לבן", en: "Durable gray cabinetry with open microwave cubbies and white counter" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/commercial/commercial-executive-coffee.jpg",
          title: { he: "עמדת אספרסו ומשקאות ייצוגית", en: "Beverage Station & Cherry Millwork" },
          caption: { he: "נגרות עץ עשירה, משטח גרניט ומכונת קפה לעובדים ואורחים", en: "Rich timber cabinetry with granite top and espresso equipment" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/commercial/commercial-coffee-counter.jpg",
          title: { he: "משטח עבודה ותחנת מים במטבחון", en: "Pantry Prep Counter & Filtration" },
          caption: { he: "תכנון ארגונומי של משטח ההכנה, מגירות אחסון ובר מים", en: "Ergonomic prep counter with storage drawers and water filtration" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/commercial/commercial-pantry-angle.jpg",
          title: { he: "מבט פינתי על נגרות המטבחון", en: "Corner View of Office Kitchenette" },
          caption: { he: "חלוקה אופטימלית של שטח המטבחון עם ארונות עליונים ותחתונים", en: "Optimized spatial layout with upper and lower cabinetry" },
          aspect: "compact"
        }
      ]
    },
    {
      id: "project-kitchen-graphite",
      number: "05",
      title: { 
        he: "עיצוב מטבח יוקרה באבן גרפיט ופליז", 
        en: "Graphite Stone & Brushed Brass Luxury Kitchen" 
      },
      category: "interiors",
      categories: ["interiors", "renders"],
      categoryName: { 
        he: "עיצוב פנים אדריכלי", 
        en: "Interior Architecture" 
      },
      year: "2026",
      heroImage: "assets/images/projects/kitchen-graphite/kitchen-graphite-curved-island.jpg",
      tagline: {
        he: "אי מעוגל בטקסטורת אבן צפחה, ידיות פליז זהב מוברש ומדפי עץ מרחפים בתאורה שקועה",
        en: "Curved graphite stone island, brushed brass hardware, and backlit floating oak shelves"
      },
      description: {
        he: "תכנון פנים אדריכלי למטבח יוקרה בעל אופי דרמטי ומודרני. הפרויקט מציג שילוב חומרים נועז: חזיתות בטקסטורת אבן גרפיט כהה, אי מרכזי בעל פינות מעוגלות ארגונומיות, ידיות משיכה מוזהבות בקו אנכי, ארונות ויטרינה שחורים ומדפי עץ אלון פתוחים עם תאורת LED חמה המעניקה עומק ורוגע לחלל.",
        en: "Bespoke architectural kitchen showcasing bold material harmony: dark textured graphite stone cabinetry, a central island with ergonomic rounded corners, vertical brushed brass pulls, black framed display vitrines, and floating oak shelves with warm recessed LED lighting."
      },
      materials: [
        { he: "חזיתות בטקסטורת אבן גרפיט כהה", en: "Textured Graphite Slate Cabinetry" },
        { he: "ידיות משיכה מוזהבות מפליז מוברש", en: "Brushed Brass Vertical Pull Hardware" },
        { he: "משטחי שיש קלקטה לבן בניגודיות", en: "Contrasting White Calacatta Countertops" },
        { he: "מדפי עץ אלון פתוחים עם תאורת לד", en: "Floating Oak Shelves with Integrated LED" }
      ],
      gallery: [
        {
          url: "assets/images/projects/kitchen-graphite/kitchen-graphite-curved-island.jpg",
          title: { he: "אי מרכזי מעוגל בטקסטורת אבן גרפיט", en: "Curved Slate Island & Oak Shelving" },
          caption: { he: "אי מרכזי עם פינות מעוגלות, כסאות בר ומדפי עץ מוארים", en: "Curved graphite island with barstools and illuminated oak shelves" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/kitchen-graphite/kitchen-graphite-sink-brass.jpg",
          title: { he: "משטח כיור משיש וברז פליז מוברש", en: "Marble Sink Area & Brass Hardware" },
          caption: { he: "משטח שיש לבן, ברז פליז זהב מוברש וארונות ויטרינה", en: "White marble prep area, brushed brass faucet, and black vitrines" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/kitchen-graphite/kitchen-graphite-front.jpg",
          title: { he: "חזית האי המעוגל וחלון עליון", en: "Front Elevation of Curved Island" },
          caption: { he: "מבט ישיר אל האי המעוגל, כסאות הבר והמפתח המואר", en: "Direct view of curved stone island, bar seating, and clerestory window" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/kitchen-graphite/kitchen-graphite-perspective.jpg",
          title: { he: "מבט פרספקטיבי מהכיור לחלל", en: "Perspective from Sink to Island" },
          caption: { he: "קשר עין פתוח בין עמדת השטיפה לאי המרכזי והסלון", en: "Visual continuity from sink work area to island and living room" },
          aspect: "compact"
        }
      ]
    },
    {
      id: "project-kitchen-contemporary",
      number: "06",
      title: { 
        he: "עיצוב מטבחי פרימיום ופרטי נגרות", 
        en: "Contemporary Kitchens & Custom Millwork Suite" 
      },
      category: "interiors",
      categories: ["interiors", "renders"],
      categoryName: { 
        he: "עיצוב פנים אדריכלי", 
        en: "Interior Architecture" 
      },
      year: "2026",
      heroImage: "assets/images/projects/kitchen-contemporary/kitchen-wine-cellar-island.jpg",
      tagline: {
        he: "מטבחי פרימיום מעוצבים: שילוב עץ אגוז ונירוסטה, קירות בטון אדריכלי ונגרות מותאמת אישית",
        en: "Premium contemporary kitchens: walnut and stainless steel, architectural concrete, and custom joinery"
      },
      description: {
        he: "סדרת תכנונים אדריכליים למטבחי פרימיום, חללי עבודה ופתרונות נגרות מותאמים. הפרויקט מדגים שילוב הרמוני של חומרים איכותיים: אי עבודה מעץ אגוז עם משטח נירוסטה, חלונות פנורמיים המכניסים תאורה טבעית, קירות בטון אדריכלי חשוף וסוויטות שירות פונקציונליות.",
        en: "Curated architectural kitchen and joinery designs. Showcases a refined synthesis of warm walnut wood island, sleek stainless steel surfaces, panoramic windows bathing the workspace in daylight, exposed concrete, and functional utility integration."
      },
      materials: [
        { he: "אי עבודה מרכזי בעץ אגוז עשיר", en: "Custom Walnut Island & Worktop" },
        { he: "חזיתות נירוסטה ומשטחי אבן עמידים", en: "Brushed Stainless & Honed Stone Counters" },
        { he: "קלפות עץ אגוז עם תאורת לד מוטמעת", en: "Walnut Wall Units with Integrated LED" },
        { he: "קירות בטון אדריכלי חשוף", en: "Exposed Architectural Concrete Surfaces" }
      ],
      gallery: [
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-wine-cellar-island.jpg",
          title: { he: "מעבר ארונות גבוהים ומקרר אינטגרלי", en: "Tall Cabinetry Corridor & Integrated Fridge" },
          caption: { he: "נגרות לבנה גבוהה בקו אפס עם מקרר שחור ותנור אינטגרליים", en: "Full-height flush white cabinetry with integrated black refrigerator and built-in oven" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-panoramic-taupe.jpg",
          title: { he: "עמדת כביסה, משטח קיפול וארונות אחסון", en: "Laundry Station, Folding Counter & Storage" },
          caption: { he: "תכנון חלל שירות פונקציונלי עם מכונת כביסה מתחת למשטח עבודה, חלון מואר וארונות עליונים", en: "Functional utility suite with under-counter washing machine, window and upper storage cabinetry" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-vitrine-display-wall.jpg",
          title: { he: "משטח עבודה רחב, חלון פנורמי ונגרות אגוז", en: "Expansive Counter, Panoramic Window & Walnut Accents" },
          caption: { he: "מערך שיש היקפי עם כיור שחור מתחת לחלון נוף, קלפות עץ אגוז בתאורת לד ואי מרכזי", en: "Perimeter stone counters with black sink under panoramic garden window, walnut upper units and island" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-walnut-island.jpg",
          title: { he: "חלל שירות וכביסה בנגרות לבנה מותאמת", en: "Custom White Utility & Laundry Suite" },
          caption: { he: "ניצול מקסימלי של חלל שירות עם מכונת כביסה שקועה, ארונות תקרה גבוהים ונישת מקרר", en: "Optimized utility room layout with recessed washing machine, overhead cabinets and fridge alcove" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-island-refrigerator.jpg",
          title: { he: "אי עץ אגוז וחיפוי נירוסטה מודרני", en: "Walnut Wood Island & Modern Stainless Steel Cabinets" },
          caption: { he: "שילוב יוקרתי של אי עבודה בעץ אגוז עם כיריים אינדוקציה, חזיתות נירוסטה ונגרות שחורה מוארת", en: "Luxury combination of walnut wood island with induction hob, metallic fronts and backlit upper units" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-timber-concrete-3d.jpg",
          title: { he: "מטבח כפרי-מודרני עם קיר בטון", en: "Modern Timber Kitchen & Raw Concrete" },
          caption: { he: "הדמיית מטבח המשלב עץ אלון כהה עם קיר בטון חשוף", en: "Kitchen render pairing dark oak wood with exposed architectural concrete" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-timber-dining-bar.jpg",
          title: { he: "דלפק ישיבה וגופי תאורה תלויים", en: "Dining Bar & Linear Suspension Light" },
          caption: { he: "דלפק אכילה מעץ עם כסאות בר וגוף תאורה ליניארי", en: "Wood dining counter with contemporary barstools and linear lighting" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/kitchen-contemporary/kitchen-timber-elevation.jpg",
          title: { he: "חזית ישרה של משטח העבודה", en: "Straight Elevation of Timber Kitchen" },
          caption: { he: "מבט ישר אל משטח השיש השחור, חלונות החוץ והתאורה", en: "Direct elevation of black stone counter, windows, and upper cabinets" },
          aspect: "compact"
        }
      ]
    },
    {
      id: "project-residential-apartments",
      number: "07",
      title: { 
        he: "תכנון מטבחי דירות וחדרי שירות", 
        en: "Residential Apartment Kitchens & Utility Suites" 
      },
      category: "interiors",
      categories: ["interiors"],
      categoryName: { 
        he: "עיצוב פנים אדריכלי", 
        en: "Interior Architecture" 
      },
      year: "2026",
      heroImage: "assets/images/projects/residential-apartments/apartment-kitchen-white-suite.jpg",
      tagline: {
        he: "מטבחי פרימיום עם מקררי יין מזוגגים, ויטרינות מוארות וסוויטות שירות וכביסה מותאמות",
        en: "Premium kitchens with glazed wine cellars, lit vitrines, and custom utility laundry suites"
      },
      description: {
        he: "תכנון אדריכלי ועיצוב פנים יוקרתי לדירות מגורים וסוויטות מודרניות. הפרויקט כולל מטבחי פרימיום עם אי שיש מסיבי ומקרר יין מזוגג מול נוף פתוח, ויטרינות זכוכית מעוצבות, וסוויטות כביסה ושירות מתקדמות בנגרות מותאמת אישית סביב מכשירי החשמל.",
        en: "Luxury architectural interior planning for modern residential apartments and suites. Features open-plan kitchens with waterfall islands and integrated glazed wine coolers against mountain vistas, lit display vitrines, and bespoke utility laundry rooms built seamlessly around appliances."
      },
      materials: [
        { he: "אי שיש מרכזי עם מקרר יין מזוגג", en: "Marble Waterfall Island with Glazed Wine Cooler" },
        { he: "ויטרינות זכוכית פינתיות בתאורת לד שקועה", en: "Corner Smoked-Glass Vitrines with Recessed LED" },
        { he: "ארונות בגימור גרייז' ולכה מט בקו אפס", en: "Flush Matte Greige & Lacquered Cabinetry" },
        { he: "מערך אחסון מודולרי למכשירי כביסה ומזווה", en: "Modular Laundry & Built-in Appliance Enclosures" }
      ],
      gallery: [
        {
          url: "assets/images/projects/residential-apartments/apartment-kitchen-white-suite.jpg",
          title: { he: "אי יוקרתי עם מקרר יין מזוגג ומבט לנוף פתוח", en: "Luxury Island with Glazed Wine Cooler & Open Vista" },
          caption: { he: "אי מרכזי רחב עם מקרר יין אינטגרלי, כסאות בר מעוצבים, חלון פנורמי להרים ונגרות מושלמת", en: "Spacious waterfall island with integrated glass wine cooler, bar seating and panoramic mountain views" },
          aspect: "hero"
        },
        {
          url: "assets/images/projects/residential-apartments/utility-pantry-wide.jpg",
          title: { he: "חלל שירות ומזווה מואר עם משטח עבודה", en: "Spacious Utility Pantry with Wood Counter" },
          caption: { he: "משטח עבודה רחב מעץ, ארונות עליונים ותחתונים, מקרר כפול וחלון מואר", en: "Generous timber worktop, full cabinetry storage, double fridge and natural daylight" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/residential-apartments/apartment-kitchen-compact-a.jpg",
          title: { he: "חדר כביסה ושירות בארונות גרייז' מעוצבים", en: "Modern Utility & Laundry Room in Taupe Joinery" },
          caption: { he: "חלל שירות וכביסה מודרני המשלב מכונת כביסה מתחת למשטח שיש, ארונות בגימור גרייז' ונישת מקרר", en: "Modern utility room featuring under-counter washer, taupe cabinetry with black handles, and fridge niche" },
          aspect: "medium"
        },
        {
          url: "assets/images/projects/residential-apartments/utility-laundry-storage-a.jpg",
          title: { he: "מטבח יוקרתי עם אי שיש, חלון גינה וויטרינת תצוגה", en: "Luxury Kitchen with Marble Island, Garden Window & Vitrine" },
          caption: { he: "אי שיש מרכזי עם כסאות בר, חלון רחב מול צמחייה ירוקה, קלפות עץ מוארות וויטרינת זכוכית מעוצבת", en: "Central marble island with barstools, panoramic garden window, illuminated wood units and glass showcase" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/residential-apartments/utility-laundry-storage-b.jpg",
          title: { he: "קיר ארונות מטבח גבוהים, נישת כיור וויטרינת פינה מוארת", en: "Tall Kitchen Cabinetry Wall, Sink Niche & Corner Vitrine" },
          caption: { he: "נגרות מטבח יוקרתית מקיר לקיר עם מגדל תנורים שחור, תאורת לד שקועה וויטרינת זכוכית פינתית", en: "Floor-to-ceiling kitchen joinery with integrated black ovens, warm recessed LED lighting and corner glass display" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/residential-apartments/apartment-kitchen-compact-b.jpg",
          title: { he: "ארונות אחסון גבוהים, נישת מקרר ומזווה עץ פתוח", en: "Tall Storage Cabinetry, Refrigerator Niche & Oak Pantry Shelves" },
          caption: { he: "מערך אחסון מודולרי מוקפד עם מקרר שחור, תנור בילט-אין, מדפי עץ פתוחים ומגירות אחסון", en: "Integrated utility storage unit with black refrigerator, built-in oven, open oak shelves and drawers" },
          aspect: "compact"
        },
        {
          url: "assets/images/projects/residential-apartments/apartment-kitchen-hall.jpg",
          title: { he: "מבואת חדר השירות, דלת כניסה וארונות אחסון גבוהים", en: "Utility Suite Entry, Tall Storage & Refrigerator Alcove" },
          caption: { he: "חיבור נקי בין דלת הכניסה, ארונות אחסון גבוהים עד התקרה ונישת מקרר מעוצבת", en: "Seamless transition from entry door to floor-to-ceiling storage units and recessed refrigerator" },
          aspect: "compact"
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
