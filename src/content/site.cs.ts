/**
 * SITE COPY — CZECH / TEXTY WEBU — ČEŠTINA
 * =========================================
 * Czech site copy for Zentrum Café Restaurant. Must mirror the
 * structure of site.de.ts exactly (enforced via the SiteContent type).
 */

import type { SiteContent } from "./site";

export const siteContentCs: SiteContent = {
  meta: {
    siteDescription:
      "Příjemná kavárna a restaurace v Ramsau am Dachstein: výtečné pokrmy, dobrá káva, domácí moučníky a srdečná alpská pohostinnost v srdci regionu Dachstein.",
    home: {
      title: "Zentrum Café Restaurant | Ramsau am Dachstein",
      description:
        "Objevte Zentrum Café Restaurant v Ramsau am Dachstein: srdečnou alpskou pohostinnost, výtečné pokrmy, dobrou kávu a domácí moučníky v srdci regionu Dachstein.",
    },
    about: {
      title: "O nás | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Poznejte Zentrum Café Restaurant v Ramsau am Dachstein: náš koncept, naši lásku k rakouské kuchyni, nejlepší suroviny, domácí moučníky a srdečnou pohostinnost pod Dachsteinem.",
    },
    menu: {
      title: "Jídelní lístek | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Jídelní lístek Zentrum Café Restaurant v Ramsau am Dachstein: rakouské speciality, čerstvé saláty, vydatné hlavní chody, domácí koláče a pečlivě připravovaná káva.",
    },
    contact: {
      title: "Kontakt | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Kontakt na Zentrum Café Restaurant v Ramsau am Dachstein: telefon, e-mail, adresa, otevírací doba a jak se k nám dostanete. Těšíme se na vaši návštěvu v regionu Dachstein.",
    },
    notFound: {
      title: "Stránka nenalezena | Zentrum Café Restaurant",
      description:
        "Hledaná stránka nebyla nalezena. Vraťte se do Zentrum Café Restaurant v Ramsau am Dachstein.",
    },
  },

  common: {
    skipToContent: "Přeskočit na obsah",
    brandTagline: "Café · Restaurant",
    viewMenu: "Prohlédnout jídelní lístek",
    contactUs: "Kontakt",
    callNow: "Zavolat",
    sendEmail: "Napsat e-mail",
    getDirections: "Naplánovat trasu",
    openingHours: "Otevírací doba",
    followUs: "Sledujte nás",
    breadcrumbHome: "Úvod",
    placeholderNotice:
      "Zobrazené fotografie jsou pouze ilustrační a nezachycují skutečnou podobu restaurace.",
  },

  nav: {
    home: "Úvod",
    about: "O nás",
    menu: "Jídelní lístek",
    contact: "Kontakt",
    openMenu: "Otevřít navigační nabídku",
    closeMenu: "Zavřít navigační nabídku",
    menuLabel: "Navigační nabídka",
  },

  languageSwitcher: {
    label: "Jazyk",
    ariaLabel: "Vybrat jazyk",
  },

  floatingContact: {
    open: "Možnosti kontaktu",
    close: "Zavřít možnosti kontaktu",
    title: "Jak vám můžeme pomoci?",
    call: "Zavolat do Zentrum Café Restaurant",
    email: "Napsat e-mail",
    directions: "Naplánovat trasu",
  },

  footer: {
    navigationTitle: "Objevujte",
    contactTitle: "Kontakt",
    hoursTitle: "Otevírací doba",
    socialNote: "Profily na sociálních sítích již brzy.",
    copyright: "Zentrum Café Restaurant. Všechna práva vyhrazena.",
  },

  home: {
    hero: {
      eyebrow: "Ramsau am Dachstein · Rakousko",
      headline:
        "Požitek, vřelost a alpská pohostinnost v srdci Ramsau am Dachstein.",
      description:
        "Vítejte v Zentrum Café Restaurant – srdečném místě plném výtečných pokrmů, dobré kávy, domácích moučníků a nezapomenutelných chvil uprostřed krás regionu Dachstein.",
      scrollHint: "Objevte více",
    },
    intro: {
      eyebrow: "Srdečně vás vítáme",
      title: "Místo, kde se můžete zastavit, vydechnout a užívat si",
      paragraphs: [
        "V centru Ramsau am Dachstein spojuje naše kavárna a restaurace poctivou rakouskou kuchyni, pečlivě připravovanou kávu a uvolněnou vřelost alpské světnice.",
        "Ať už k nám zavítáte na snídani před túrou, na odpolední koláč s přáteli, nebo na poklidnou večeři – v Zentrum jste vždy srdečně vítáni.",
      ],
    },
    featured: {
      eyebrow: "Z naší kuchyně",
      title: "Pokrmy, které naši hosté milují",
      description:
        "Malá ochutnávka toho, co vás u nás čeká – od alpských klasik po sezonní kreace. Celou nabídku najdete na našem jídelním lístku.",
      note: "Ukázkové pokrmy s ilustračními fotografiemi – kompletní nabídku najdete na jídelním lístku.",
    },
    coffeeDessert: {
      eyebrow: "Káva a moučníky",
      title: "Dobrá káva si zaslouží dobrou společnost",
      paragraphs: [
        "Naši baristé připravují každý šálek s péčí – od klasické Wiener Melange až po sametové cappuccino. K tomu domácí koláče, štrúdly a sladké rakouské speciality, každý den čerstvě upečené a s láskou k detailu.",
        "Posaďte se a dopřejte si čas. Odpolední káva u nás není přestávkou v běhu dne – je jedním z jeho vrcholů.",
      ],
      imageCaption: "Čerstvě připravovaná káva a domácí moučníky – každý den.",
    },
    gallery: {
      eyebrow: "Atmosféra",
      title: "Okamžiky v Zentrum",
      description:
        "Teplé dřevo, měkké světlo a tichý šum dobrých rozhovorů – nahlédněte do atmosféry, která vás u nás čeká.",
    },
    videoTour: {
      eyebrow: "Prohlídka",
      title: "Nahlédněte k nám",
      description:
        "Vydejte se s námi na krátkou prohlídku naší kavárny a restaurace v Ramsau am Dachstein.",
      videoFallback: "Váš prohlížeč bohužel nedokáže toto video přehrát.",
      musicCredit:
        "Hudba: „Bossa Antigua“ – Kevin MacLeod (incompetech.com), licence CC BY 4.0.",
    },
    location: {
      eyebrow: "Náš domov",
      title: "V srdci regionu Dachstein",
      paragraphs: [
        "Ramsau am Dachstein leží na slunné náhorní plošině v nadmořské výšce kolem 1 100 metrů, orámované mohutnou jižní stěnou masivu Dachstein. Je to místo s výhledem na ledovec, alpskými loukami a průzračným horským vzduchem.",
        "Naše kavárna a restaurace se nachází přímo v centru obce – je přirozeným místem setkání po dni na turistických stezkách, na sjezdovce nebo jen tak po procházce obcí.",
      ],
      facts: [
        { label: "Obec", value: "Ramsau am Dachstein" },
        { label: "Region", value: "Štýrsko, Rakousko" },
        { label: "Krajina", value: "Masiv Dachstein & náhorní plošina" },
      ],
    },
    philosophy: {
      eyebrow: "Naše filozofie",
      title: "Poctivá kuchyně, připravovaná s péčí",
      paragraphs: [
        "Věříme, že dobré jídlo nemusí být složité – potřebuje dobré suroviny, čas a úctu k řemeslu. Naše kuchyně spojuje rakouskou tradici s čerstvými sezonními nápady.",
        "Kdykoli je to možné, spolupracujeme s regionálními producenty a necháváme kvalitu surovin promlouvat samu za sebe.",
      ],
      quote:
        "Pohostinnost znamená, aby se lidé cítili jako doma – i tisíc metrů nad mořem.",
    },
    hours: {
      eyebrow: "Navštivte nás",
      title: "Otevírací doba",
      note: "O svátcích a v mezisezoně se otevírací doba může lišit – plánujete-li k nám zvláštní cestu, zavolejte nám prosím předem.",
    },
    cta: {
      title: "Těšíme se na vaši návštěvu",
      description:
        "Zarezervujte si stůl, zeptejte se na denní nabídku nebo se prostě zastavte – rádi se o vás postaráme.",
    },
  },

  about: {
    header: {
      eyebrow: "O nás",
      title: "Příběh místa, kde se lidé setkávají",
      description:
        "Kavárna, restaurace a místo setkávání v srdci Ramsau am Dachstein.",
    },
    story: {
      eyebrow: "Náš příběh",
      title: "Zakořenění v obci, otevření světu",
      /*
       * ⚠️ Zástupný příběh — neuvádí se žádný rok založení, rodinná
       * historie ani jména. Před spuštěním webu nahraďte skutečným
       * příběhem Zentrum Café Restaurant.
       */
      paragraphs: [
        "Každá vesnice má místo, kde se protínají cesty – kde si sousedé povídají u kávy, turisté po túře doplňují síly a hosté objevují, co alpská pohostinnost doopravdy znamená. V Ramsau am Dachstein je takovým místem Zentrum Café Restaurant.",
        "Náš název to říká jednoduše: jsme v centru. V centru obce – a rádi věříme, že i v centru mnoha krásných dní strávených v regionu Dachstein.",
        "[Zde doplňte skutečný příběh Zentrum Café Restaurant – jak vše začalo, kdo za podnikem stojí a co znamená pro obec.]",
      ],
    },
    concept: {
      eyebrow: "Náš koncept",
      title: "Přes den kavárna, srdcem restaurace",
      paragraphs: [
        "Zentrum je obojí zároveň: kavárna, ve které ráno začíná pozvolna a odpoledne se příjemně protáhne u koláče a povídání. A restaurace, kde se rakouská klasika i sezonní pokrmy vaří s opravdovou láskou.",
        "Atmosféra unese obojí: je dost uvolněná pro zaprášené pohorky a dost hřejivá pro výjimečný večer.",
      ],
    },
    cuisine: {
      eyebrow: "Kuchyně a pohostinnost",
      title: "Rakouská tradice v současném podání",
      paragraphs: [
        "Naše kuchyně stojí na rakouské tradici – řízek, knedlíky, štrúdl – poctivě připravené a bez zkratek. Kolem těchto klasik vaříme podle ročních období: lehčí pokrmy, vegetariánské nápady i oblíbená mezinárodní jídla.",
        "Stejně důležité jako to, co leží na talíři, je i to, jak se u stolu cítíte. Obsluha v Zentrum je přátelská, pozorná a nikam nespěchá.",
      ],
    },
    ingredients: {
      eyebrow: "Nejlepší suroviny",
      title: "Dobrá kuchyně začíná u dobrých surovin",
      paragraphs: [
        "Horský sýr, čerstvé mléčné výrobky, poctivý chléb, sezonní zelenina – vybíráme suroviny, které bychom s klidem servírovali i vlastním rodinám, a kdykoli je to možné, spolupracujeme s regionálními dodavateli.",
      ],
      points: [
        {
          title: "Především z regionu",
          text: "Dáváme přednost producentům ze Štýrska a okolních alpských oblastí.",
        },
        {
          title: "V rytmu sezony",
          text: "Jídelní lístek se řídí ročními obdobími – co je čerstvé, určuje, co vaříme.",
        },
        {
          title: "Domácí moučníky",
          text: "Koláče, štrúdly i sladké dobroty vznikají v naší vlastní kuchyni.",
        },
      ],
    },
    coffee: {
      eyebrow: "Káva a moučníky",
      title: "Opravdová kavárna v rakouském duchu",
      paragraphs: [
        "Kávová kultura se v Rakousku bere vážně a my tuto tradici ctíme: kvalitní zrna, pečlivě našlehané mléko a trpělivost připravit každý šálek tak, jak má být – od krátkého espressa po klasický Einspänner s čepicí ze šlehačky.",
        "Spolu s kouskem domácího koláče nebo teplým Apfelstrudelem se z toho stává malý každodenní rituál, kvůli kterému se k nám hosté vracejí.",
      ],
    },
    team: {
      eyebrow: "Oslavy a události",
      title: "Prostor pro akce až pro 250 hostů",
      paragraphs: [
        "Od komorní rodinné oslavy po velkou svatbu – Zentrum Café Restaurant nabízí prostor pro akce až pro 250 hostů, ideální pro svatby a výjimečné příležitosti.",
        "Ať už jde o svatbu, narozeniny, křtiny nebo firemní večírek, náš tým s vámi naplánuje každý detail – od menu po výzdobu stolů – abyste si svůj výjimečný den mohli naplno užít.",
      ],
    },
    gallery: {
      eyebrow: "Nahlédněte k nám",
      title: "Uvnitř Zentrum",
      description:
        "Teplé materiály, útulná zákoutí a stoly, u kterých se chce zůstat.",
    },
    surroundings: {
      eyebrow: "Alpské okolí",
      title: "Kde Dachstein utváří každý den",
      paragraphs: [
        "Stačí vyjít ze dveří – a hory jsou prostě tady: mohutné, klidné a na dosah. Ramsau am Dachstein milují turisté, horolezci i běžkaři a oceňují ho všichni, kdo mají rádi poklidný život v Alpách.",
        "Po dni stráveném venku chutná teplé jídlo a dobrá káva ještě lépe. A přesně proto tu jsme.",
      ],
    },
    cta: {
      title: "Přijďte a přesvědčte se sami",
      description:
        "Zentrum poznáte nejlépe u jednoho z našich stolů. Těšíme se na vaši návštěvu.",
    },
  },

  menu: {
    header: {
      eyebrow: "Náš jídelní lístek",
      title: "Regionální suroviny. Čerstvě připravené.",
      description:
        "Od rakouské klasiky přes sezonní pokrmy až po domácí moučníky a pečlivě připravovanou kávu – objevte, co naše kuchyně nabízí.",
    },
    dietaryLegendTitle: "Vysvětlivky",
    categoriesAriaLabel: "Kategorie jídelního lístku",
    cta: {
      title: "Máte otázky k jídelnímu lístku?",
      description:
        "Alergie, zvláštní stravovací požadavky nebo denní nabídka – náš tým vám rád poradí. Stačí nám zavolat.",
    },
  },

  contact: {
    header: {
      eyebrow: "Kontakt",
      title: "Jsme tu pro vás",
      description:
        "Rezervace stolu, plánování oslavy nebo jen dotaz – zastihnete nás telefonicky, e-mailem nebo přes formulář níže.",
    },
    detailsTitle: "Zentrum Café Restaurant",
    addressTitle: "Adresa",
    phoneTitle: "Telefon",
    emailTitle: "E-mail",
    hoursNote: "O svátcích a v mezisezoně se otevírací doba může lišit.",
    map: {
      title: "Jak nás najdete v Ramsau am Dachstein",
      description:
        "Přímo v centru obce – snadno dostupné pěšky i autem.",
      loadButton: "Načíst interaktivní mapu",
      loadNote:
        "Mapa se z Google Maps načte teprve tehdy, když si ji budete chtít zobrazit.",
      iframeTitle:
        "Mapa s polohou Zentrum Café Restaurant v Ramsau am Dachstein",
    },
    form: {
      title: "Napište nám",
      description:
        "Formulář využijte pro rezervace i obecné dotazy – ozveme se vám co nejdříve.",
      nameLabel: "Jméno",
      namePlaceholder: "Vaše jméno",
      emailLabel: "E-mail",
      emailPlaceholder: "vas@email.cz",
      phoneLabel: "Telefon (nepovinné)",
      phonePlaceholder: "+43 …",
      messageLabel: "Zpráva",
      messagePlaceholder: "Jak vám můžeme pomoci?",
      submit: "Odeslat zprávu",
      submitting: "Odesílá se…",
      successTitle: "Děkujeme za vaši zprávu!",
      successText:
        "Tento ukázkový formulář zatím e-maily neodesílá. Jakmile bude připojena e-mailová služba, budou zprávy doručovány přímo restauraci. V naléhavých případech nám prosím zavolejte.",
      errorRequired: "Vyplňte prosím toto pole.",
      errorEmail: "Zadejte prosím platnou e-mailovou adresu.",
      demoNotice: "Ukázkový formulář – zatím není propojen s e-mailovou službou.",
    },
  },

  notFound: {
    eyebrow: "404",
    title: "Zdá se, že tato stránka sešla ze stezky",
    description:
      "Hledaná stránka neexistuje nebo byla přesunuta. Dovolte nám odvést vás zpátky k něčemu dobrému.",
    backHome: "Zpět na úvodní stránku",
    viewMenu: "Prohlédnout jídelní lístek",
  },
};
