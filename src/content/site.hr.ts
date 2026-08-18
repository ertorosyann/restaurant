/**
 * SITE COPY — CROATIAN / TEKSTOVI STRANICE — HRVATSKI
 * ====================================================
 * Croatian site copy for Zentrum Café Restaurant. Must mirror the
 * structure of site.de.ts exactly (enforced via the SiteContent type).
 */

import type { SiteContent } from "./site";

export const siteContentHr: SiteContent = {
  meta: {
    siteDescription:
      "Ugodan kafić i restoran u Ramsau am Dachsteinu: ukusna jela, dobra kava, domaći kolači i srdačno alpsko gostoprimstvo u srcu regije Dachstein.",
    home: {
      title: "Zentrum Café Restaurant | Ramsau am Dachstein",
      description:
        "Otkrijte Zentrum Café Restaurant u Ramsau am Dachsteinu: srdačno alpsko gostoprimstvo, ukusna jela, dobru kavu i domaće kolače u srcu regije Dachstein.",
    },
    about: {
      title: "O nama | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Upoznajte Zentrum Café Restaurant u Ramsau am Dachsteinu: naš koncept, ljubav prema austrijskoj kuhinji, najbolje namirnice, domaće kolače i srdačno gostoprimstvo podno Dachsteina.",
    },
    menu: {
      title: "Jelovnik | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Jelovnik restorana Zentrum Café u Ramsau am Dachsteinu: austrijski specijaliteti, svježe salate, obilna glavna jela, domaći kolači i pažljivo pripremljena kava.",
    },
    contact: {
      title: "Kontakt | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Kontaktirajte Zentrum Café Restaurant u Ramsau am Dachsteinu: telefon, e-mail, adresa, radno vrijeme i upute za dolazak. Radujemo se vašem posjetu u regiji Dachstein.",
    },
    notFound: {
      title: "Stranica nije pronađena | Zentrum Café Restaurant",
      description:
        "Tražena stranica nije pronađena. Vratite se u Zentrum Café Restaurant u Ramsau am Dachsteinu.",
    },
  },

  common: {
    skipToContent: "Preskoči na sadržaj",
    brandTagline: "Café · Restaurant",
    viewMenu: "Pogledajte jelovnik",
    contactUs: "Kontakt",
    callNow: "Nazovite nas",
    getDirections: "Upute za dolazak",
    openingHours: "Radno vrijeme",
    followUs: "Pratite nas",
    breadcrumbHome: "Početna",
    placeholderNotice:
      "Prikazane fotografije samo su ilustrativne i ne prikazuju stvarni restoran.",
  },

  nav: {
    home: "Početna",
    about: "O nama",
    menu: "Jelovnik",
    contact: "Kontakt",
    openMenu: "Otvori navigacijski izbornik",
    closeMenu: "Zatvori navigacijski izbornik",
    menuLabel: "Navigacijski izbornik",
  },

  languageSwitcher: {
    label: "Jezik",
    ariaLabel: "Odaberite jezik",
  },

  floatingContact: {
    open: "Mogućnosti kontakta",
    close: "Zatvori mogućnosti kontakta",
    call: "Nazovite Zentrum Café Restaurant",
    email: "Pošaljite e-mail",
    directions: "Upute za dolazak",
  },

  footer: {
    navigationTitle: "Istražite",
    contactTitle: "Kontakt",
    hoursTitle: "Radno vrijeme",
    socialNote: "Profili na društvenim mrežama uskoro.",
    copyright: "Zentrum Café Restaurant. Sva prava pridržana.",
  },

  home: {
    hero: {
      eyebrow: "Ramsau am Dachstein · Austrija",
      headline:
        "Okusi, toplina i alpsko gostoprimstvo u srcu Ramsau am Dachsteina.",
      description:
        "Dobro došli u Zentrum Café Restaurant — srdačno mjesto s ukusnim jelima, dobrom kavom, domaćim kolačima i nezaboravnim trenucima okruženo ljepotom regije Dachstein.",
      scrollHint: "Otkrijte više",
    },
    intro: {
      eyebrow: "Srdačno dobro došli",
      title: "Mjesto gdje možete stati, odahnuti i uživati",
      paragraphs: [
        "U središtu Ramsau am Dachsteina naš kafić i restoran spaja poštenu austrijsku kuhinju, pažljivo pripremljenu kavu i opuštenu toplinu alpske sobe.",
        "Bilo da svratite na doručak prije planinarenja, na poslijepodnevni kolač s prijateljima ili na mirnu večeru — u Zentrumu ste uvijek srdačno dobrodošli.",
      ],
    },
    featured: {
      eyebrow: "Iz naše kuhinje",
      title: "Jela koja naši gosti vole",
      description:
        "Mali predokus onoga što vas očekuje — od alpskih klasika do sezonskih kreacija. Cijelu ponudu pronaći ćete na našem jelovniku.",
      note: "Primjeri jela s ilustrativnim fotografijama — potpuna ponuda nalazi se na jelovniku.",
    },
    coffeeDessert: {
      eyebrow: "Kava i kolači",
      title: "Dobra kava zaslužuje dobro društvo",
      paragraphs: [
        "Naši baristi pripremaju svaku šalicu s pažnjom — od klasične bečke melange do baršunastog cappuccina. Uz to: domaći kolači, štrudle i slatki austrijski specijaliteti, svježe pečeni svaki dan s ljubavlju prema detaljima.",
        "Sjednite i uzmite si vremena. Poslijepodnevna kava kod nas nije stanka u danu — ona je jedan od njegovih vrhunaca.",
      ],
      imageCaption: "Svježe pripremljena kava i domaći kolači — svaki dan.",
    },
    gallery: {
      eyebrow: "Atmosfera",
      title: "Trenuci u Zentrumu",
      description:
        "Toplo drvo, meko svjetlo i tihi žamor dobrih razgovora — dojmovi atmosfere koja vas očekuje.",
    },
    videoTour: {
      eyebrow: "Obilazak",
      title: "Zavirite u Zentrum",
      description:
        "Pridružite nam se u kratkom obilasku našeg kafića i restorana u Ramsau am Dachsteinu.",
      videoFallback: "Vaš preglednik nažalost ne može reproducirati ovaj video.",
      musicCredit:
        "Glazba: „Bossa Antigua” — Kevin MacLeod (incompetech.com), licenca CC BY 4.0.",
    },
    location: {
      eyebrow: "Naš dom",
      title: "U srcu regije Dachstein",
      paragraphs: [
        "Ramsau am Dachstein leži na sunčanoj visoravni na oko 1.100 metara, uokviren moćnom južnom stijenom masiva Dachstein. Mjesto s pogledom na ledenjak, alpskim livadama i kristalno čistim planinskim zrakom.",
        "Naš kafić i restoran nalazi se u samom središtu mjesta — prirodno okupljalište nakon dana na planinarskim stazama, skijaškim padinama ili jednostavno nakon šetnje Ramsauom.",
      ],
      facts: [
        { label: "Mjesto", value: "Ramsau am Dachstein" },
        { label: "Regija", value: "Štajerska, Austrija" },
        { label: "Krajolik", value: "Masiv Dachstein i visoravan" },
      ],
    },
    philosophy: {
      eyebrow: "Naša filozofija",
      title: "Poštena kuhinja, pripremljena s pažnjom",
      paragraphs: [
        "Vjerujemo da dobra hrana ne mora biti komplicirana — treba joj dobre namirnice, vrijeme i poštovanje prema zanatu. Naša kuhinja spaja austrijsku tradiciju sa svježim, sezonskim idejama.",
        "Gdje god je moguće surađujemo s regionalnim proizvođačima i puštamo da kvaliteta namirnica govori sama za sebe.",
      ],
      quote:
        "Gostoprimstvo znači da se ljudi osjećaju kao kod kuće — i na tisuću metara visine.",
    },
    hours: {
      eyebrow: "Posjetite nas",
      title: "Radno vrijeme",
      note: "Za blagdane i između sezona radno vrijeme može se razlikovati — ako planirate poseban dolazak, molimo nazovite nas unaprijed.",
    },
    cta: {
      title: "Radujemo se vašem posjetu",
      description:
        "Rezervirajte stol, raspitajte se o jelu dana ili jednostavno svratite — rado ćemo vam pomoći.",
    },
  },

  about: {
    header: {
      eyebrow: "O nama",
      title: "Priča o mjestu gdje se ljudi okupljaju",
      description:
        "Kafić, restoran i mjesto susreta u srcu Ramsau am Dachsteina.",
    },
    story: {
      eyebrow: "Naša priča",
      title: "Ukorijenjeni u mjestu, otvoreni svijetu",
      paragraphs: [
        "Svako selo ima mjesto gdje se putevi križaju — gdje susjedi razgovaraju uz kavu, planinari skupljaju novu snagu nakon staze, a gosti otkrivaju što alpsko gostoprimstvo doista znači. U Ramsau am Dachsteinu, Zentrum Café Restaurant upravo je takvo mjesto.",
        "Naše ime kaže jednostavno: mi smo u centru. U središtu mjesta — i, kako rado vjerujemo, u središtu mnogih lijepih dana u regiji Dachstein.",
        "[Ovdje dodajte stvarnu priču restorana Zentrum Café — kako je sve počelo, tko stoji iza njega i što znači za mjesto.]",
      ],
    },
    concept: {
      eyebrow: "Naš koncept",
      title: "Danju kafić, u srcu restoran",
      paragraphs: [
        "Zentrum je oboje istovremeno: kafić u kojem jutro počinje polako, a poslijepodne se ugodno proteže uz kolač i razgovor. I restoran u kojem se austrijski klasici i sezonska jela kuhaju s istinskom predanošću.",
        "Atmosfera nosi oboje: dovoljno opuštena za prašnjave planinarske cipele, dovoljno topla za posebnu večer.",
      ],
    },
    cuisine: {
      eyebrow: "Kuhinja i gostoprimstvo",
      title: "Austrijska tradicija, suvremeno pripremljena",
      paragraphs: [
        "Naša kuhinja počiva na austrijskoj tradiciji — šnicle, knedle, štrudle — pošteno pripremljeni i bez prečaca. Oko tih klasika kuhamo s godišnjim dobima: laganija jela, vegetarijanske ideje i međunarodni favoriti.",
        "Jednako važno kao ono što je na tanjuru jest kako se osjećate za stolom. Usluga u Zentrumu je ljubazna, pažljiva i bez žurbe.",
      ],
    },
    ingredients: {
      eyebrow: "Najbolje namirnice",
      title: "Dobra kuhinja počinje dobrim namirnicama",
      paragraphs: [
        "Planinski sir, svježi mliječni proizvodi, pošten kruh, sezonsko povrće — biramo namirnice koje bismo poslužili i vlastitim obiteljima i gdje god je moguće surađujemo s regionalnim dobavljačima.",
      ],
      points: [
        {
          title: "Najprije regionalno",
          text: "Prednost dajemo proizvođačima iz Štajerske i okolne alpske regije.",
        },
        {
          title: "Sezonsko razmišljanje",
          text: "Jelovnik prati godišnja doba — ono što je svježe određuje što kuhamo.",
        },
        {
          title: "Domaći kolači",
          text: "Kolači, štrudle i slastice nastaju u našoj vlastitoj kuhinji.",
        },
      ],
    },
    coffee: {
      eyebrow: "Kava i kolači",
      title: "Pravi kafić, u austrijskom smislu",
      paragraphs: [
        "U Austriji se kultura kave shvaća ozbiljno, a mi njegujemo tu tradiciju: kvalitetna zrna, pažljivo zapjenjeno mlijeko i strpljenje da svaka šalica bude pripremljena kako treba — od kratkog espressa do klasičnog Einspännera pod šlagom.",
        "Uz komad domaćeg kolača ili topli štrudl od jabuka nastaje mali dnevni ritual zbog kojeg se naši gosti vraćaju.",
      ],
    },
    team: {
      eyebrow: "Proslave i događanja",
      title: "Prostor za događanja do 250 gostiju",
      paragraphs: [
        "Od intimnih obiteljskih okupljanja do velikih vjenčanja — Zentrum Café Restaurant nudi prostor za događanja s mjestom za do 250 gostiju, savršen za vjenčanja i posebne prigode.",
        "Bilo da je riječ o vjenčanju, rođendanu, krštenju ili poslovnoj proslavi: naš tim zajedno s vama planira svaki detalj — od menija do dekoracije stolova — kako biste svoj poseban dan mogli jednostavno uživati.",
      ],
    },
    gallery: {
      eyebrow: "Dojmovi",
      title: "U Zentrumu",
      description:
        "Topli materijali, ugodni kutci i stolovi stvoreni za dugo zadržavanje.",
    },
    surroundings: {
      eyebrow: "Alpsko okruženje",
      title: "Gdje Dachstein oblikuje svaki dan",
      paragraphs: [
        "Korak pred vrata — i planine su jednostavno tu: veličanstvene, mirne i sasvim blizu. Ramsau am Dachstein vole planinari, penjači i skijaši trkači, a cijene ga svi koji vole miran alpski život.",
        "Nakon dana na otvorenom, toplo jelo i dobra kava imaju još bolji okus. Upravo zato smo tu.",
      ],
    },
    cta: {
      title: "Svratite i uvjerite se sami",
      description:
        "Zentrum se najbolje upoznaje za jednim od naših stolova. Radujemo se vašem posjetu.",
    },
  },

  menu: {
    header: {
      eyebrow: "Naš jelovnik",
      title: "Regionalne namirnice. Svježe pripremljeno.",
      description:
        "Od austrijskih klasika preko sezonskih jela do domaćih kolača i pažljivo pripremljene kave — otkrijte što naša kuhinja nudi.",
    },
    dietaryLegendTitle: "Oznake",
    categoriesAriaLabel: "Kategorije jelovnika",
    cta: {
      title: "Pitanja o jelovniku?",
      description:
        "Alergije, posebne prehrambene želje ili jelo dana — naš tim rado će pomoći. Jednostavno nas nazovite.",
    },
  },

  contact: {
    header: {
      eyebrow: "Kontakt",
      title: "Tu smo za vas",
      description:
        "Rezervirajte stol, isplanirajte proslavu ili jednostavno postavite pitanje — dostupni smo telefonom, e-mailom ili putem obrasca u nastavku.",
    },
    detailsTitle: "Zentrum Café Restaurant",
    addressTitle: "Adresa",
    phoneTitle: "Telefon",
    emailTitle: "E-mail",
    hoursNote: "Za blagdane i između sezona radno vrijeme može se razlikovati.",
    map: {
      title: "Pronađite nas u Ramsau am Dachsteinu",
      description:
        "U samom središtu mjesta — lako dostupno pješice i automobilom.",
      loadButton: "Učitaj interaktivnu kartu",
      loadNote:
        "Karta se učitava s Google Mapsa tek kada je odlučite pogledati.",
      iframeTitle:
        "Karta s lokacijom restorana Zentrum Café u Ramsau am Dachsteinu",
    },
  },

  notFound: {
    eyebrow: "404",
    title: "Čini se da je ova stranica skrenula s puta",
    description:
      "Tražena stranica ne postoji ili je premještena. Dopustite da vas vratimo do nečeg ukusnog.",
    backHome: "Na početnu",
    viewMenu: "Pogledajte jelovnik",
  },
};
