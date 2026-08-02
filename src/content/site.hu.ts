/**
 * SITE COPY — HUNGARIAN / OLDALSZÖVEGEK — MAGYAR
 * ===============================================
 * Hungarian site copy for Zentrum Café Restaurant. Must mirror the
 * structure of site.de.ts exactly (enforced via the SiteContent type).
 */

import type { SiteContent } from "./site";

export const siteContentHu: SiteContent = {
  meta: {
    siteDescription:
      "Hangulatos kávézó-étterem Ramsau am Dachsteinben: ízletes ételek, jó kávé, házi sütemények és szívélyes alpesi vendégszeretet a Dachstein régió szívében.",
    home: {
      title: "Zentrum Café Restaurant | Ramsau am Dachstein",
      description:
        "Fedezze fel a Zentrum Café Restaurantot Ramsau am Dachsteinben: szívélyes alpesi vendégszeretet, ízletes ételek, jó kávé és házi sütemények a Dachstein régió szívében.",
    },
    about: {
      title: "Rólunk | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Ismerje meg a Zentrum Café Restaurantot Ramsau am Dachsteinben: koncepciónk, az osztrák konyha iránti szeretetünk, a legjobb alapanyagok, házi sütemények és szívélyes vendégszeretet a Dachstein lábánál.",
    },
    menu: {
      title: "Étlap | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "A Zentrum Café Restaurant étlapja Ramsau am Dachsteinben: osztrák specialitások, friss saláták, laktató főételek, házi sütemények és gondosan készített kávé.",
    },
    contact: {
      title: "Kapcsolat | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Kapcsolat a Zentrum Café Restauranttal Ramsau am Dachsteinben: telefon, e-mail, cím, nyitvatartás és megközelítés. Szeretettel várjuk a Dachstein régióban.",
    },
    notFound: {
      title: "Az oldal nem található | Zentrum Café Restaurant",
      description:
        "A keresett oldal nem található. Térjen vissza a Zentrum Café Restauranthoz Ramsau am Dachsteinben.",
    },
  },

  common: {
    skipToContent: "Ugrás a tartalomhoz",
    brandTagline: "Café · Restaurant",
    viewMenu: "Étlap megtekintése",
    contactUs: "Kapcsolat",
    callNow: "Hívjon most",
    sendEmail: "E-mail írása",
    getDirections: "Útvonaltervezés",
    openingHours: "Nyitvatartás",
    followUs: "Kövessen minket",
    breadcrumbHome: "Kezdőlap",
    placeholderNotice:
      "A bemutatott fotók illusztrációk, és nem a tényleges éttermet ábrázolják.",
  },

  nav: {
    home: "Kezdőlap",
    about: "Rólunk",
    menu: "Étlap",
    contact: "Kapcsolat",
    openMenu: "Navigációs menü megnyitása",
    closeMenu: "Navigációs menü bezárása",
    menuLabel: "Navigációs menü",
  },

  languageSwitcher: {
    label: "Nyelv",
    ariaLabel: "Nyelv kiválasztása",
  },

  floatingContact: {
    open: "Kapcsolatfelvételi lehetőségek",
    close: "Kapcsolatfelvételi lehetőségek bezárása",
    title: "Miben segíthetünk?",
    call: "A Zentrum Café Restaurant hívása",
    email: "E-mail írása",
    directions: "Útvonaltervezés",
  },

  footer: {
    navigationTitle: "Fedezze fel",
    contactTitle: "Kapcsolat",
    hoursTitle: "Nyitvatartás",
    socialNote: "Közösségimédia-profiljaink hamarosan elérhetők.",
    copyright: "Zentrum Café Restaurant. Minden jog fenntartva.",
  },

  home: {
    hero: {
      eyebrow: "Ramsau am Dachstein · Ausztria",
      headline:
        "Ízek, melegség és alpesi vendégszeretet Ramsau am Dachstein szívében.",
      description:
        "Üdvözöljük a Zentrum Café Restaurantban – egy szívélyes helyen, ahol ízletes ételek, jó kávé, házi sütemények és felejthetetlen pillanatok várják a Dachstein régió szépségei között.",
      scrollHint: "Fedezzen fel többet",
    },
    intro: {
      eyebrow: "Szeretettel köszöntjük",
      title: "Egy hely, ahol megérkezhet, fellélegezhet és élvezheti a pillanatot",
      paragraphs: [
        "Ramsau am Dachstein központjában kávézó-éttermünk az őszinte osztrák konyhát, a gondosan készített kávét és egy alpesi szoba oldott melegségét ötvözi.",
        "Legyen szó reggeliről a túra előtt, délutáni süteményről a barátokkal vagy egy kellemes vacsoráról – a Zentrumban mindig szeretettel várjuk.",
      ],
    },
    featured: {
      eyebrow: "Konyhánkból",
      title: "Ételek, amelyeket vendégeink szeretnek",
      description:
        "Egy kis ízelítő abból, ami Önre vár – az alpesi klasszikusoktól a szezonális kreációkig. A teljes kínálatot étlapunkon találja.",
      note: "Példaételek illusztrációs fotókkal – a teljes kínálatot az étlapon találja.",
    },
    coffeeDessert: {
      eyebrow: "Kávé és sütemények",
      title: "A jó kávé jó társaságot érdemel",
      paragraphs: [
        "Baristáink minden csészét gondosan készítenek el – a klasszikus bécsi melange-tól a bársonyos cappuccinóig. Mellé: házi sütemények, rétesek és édes osztrák specialitások, naponta frissen sütve, a részletek iránti szeretettel.",
        "Foglaljon helyet, és szánjon rá időt. A délutáni kávészünet nálunk nem a nap megszakítása – hanem az egyik fénypontja.",
      ],
      imageCaption: "Frissen készített kávé és házi sütemények – minden nap.",
    },
    gallery: {
      eyebrow: "Hangulat",
      title: "Pillanatok a Zentrumban",
      description:
        "Meleg fa, lágy fények és a jó beszélgetések halk zsongása – ízelítő a hangulatból, amely Önre vár.",
    },
    videoTour: {
      eyebrow: "Körséta",
      title: "Pillantson be a Zentrumba",
      description:
        "Tartson velünk egy rövid sétára kávézó-éttermünkben Ramsau am Dachsteinben.",
      videoFallback: "Böngészője sajnos nem tudja lejátszani ezt a videót.",
      musicCredit:
        "Zene: „Bossa Antigua” – Kevin MacLeod (incompetech.com), CC BY 4.0 licenc.",
    },
    location: {
      eyebrow: "Az otthonunk",
      title: "A Dachstein régió szívében",
      paragraphs: [
        "Ramsau am Dachstein egy napsütötte fennsíkon fekszik, körülbelül 1100 méter magasan, a Dachstein-hegység hatalmas déli fala alatt. Egy hely gleccserpanorámával, alpesi rétekkel és kristálytiszta hegyi levegővel.",
        "Kávézó-éttermünk a település központjában található – természetes találkozóhely egy túraösvényeken vagy sípályán töltött nap után, vagy egyszerűen egy ramsaui séta végén.",
      ],
      facts: [
        { label: "Település", value: "Ramsau am Dachstein" },
        { label: "Régió", value: "Stájerország, Ausztria" },
        { label: "Táj", value: "Dachstein-hegység és fennsík" },
      ],
    },
    philosophy: {
      eyebrow: "Filozófiánk",
      title: "Őszinte konyha, gondosan elkészítve",
      paragraphs: [
        "Hisszük, hogy a jó ételnek nem kell bonyolultnak lennie – jó alapanyagokra, időre és a mesterség iránti tiszteletre van szüksége. Konyhánk az osztrák hagyományt friss, szezonális ötletekkel ötvözi.",
        "Ahol csak lehet, regionális termelőkkel dolgozunk, és hagyjuk, hogy az alapanyagok minősége önmagáért beszéljen.",
      ],
      quote:
        "A vendégszeretet azt jelenti, hogy az emberek otthon érzik magukat – ezer méter magasan is.",
    },
    hours: {
      eyebrow: "Látogasson el hozzánk",
      title: "Nyitvatartás",
      note: "Ünnepnapokon és a szezonok között a nyitvatartás eltérhet – ha külön utazást tervez hozzánk, kérjük, hívjon minket előre.",
    },
    cta: {
      title: "Örömmel várjuk látogatását",
      description:
        "Foglaljon asztalt, érdeklődjön a napi ajánlatról, vagy egyszerűen ugorjon be – szeretettel állunk rendelkezésére.",
    },
  },

  about: {
    header: {
      eyebrow: "Rólunk",
      title: "Egy hely története, ahol az emberek találkoznak",
      description:
        "Kávézó, étterem és találkozóhely Ramsau am Dachstein szívében.",
    },
    story: {
      eyebrow: "Történetünk",
      title: "A településben gyökerezve, a világ felé nyitva",
      paragraphs: [
        "Minden falunak van egy pontja, ahol az utak keresztezik egymást – ahol a szomszédok kávé mellett beszélgetnek, a túrázók új erőt gyűjtenek, a vendégek pedig megtapasztalják, mit jelent igazán az alpesi vendégszeretet. Ramsau am Dachsteinben a Zentrum Café Restaurant pontosan ez a hely.",
        "A nevünk egyszerűen elmondja: a központban vagyunk. A település központjában – és, ahogy szívesen hisszük, sok szép nap középpontjában a Dachstein régióban.",
        "[Ide kerül a Zentrum Café Restaurant valódi története – hogyan kezdődött minden, kik állnak mögötte, és mit jelent a településnek.]",
      ],
    },
    concept: {
      eyebrow: "Koncepciónk",
      title: "Napközben kávézó, szívében étterem",
      paragraphs: [
        "A Zentrum mindkettő egyszerre: kávézó, ahol a reggel lágyan indul, a délután pedig sütemény és beszélgetések mellett kényelmesen elnyúlik. És étterem, ahol az osztrák klasszikusok és a szezonális ételek igazi odaadással készülnek.",
        "A hangulat mindkettőt hordozza: elég laza a poros túrabakancshoz, és elég meleg egy különleges estéhez.",
      ],
    },
    cuisine: {
      eyebrow: "Konyha és vendéglátás",
      title: "Osztrák hagyomány, korszerűen elkészítve",
      paragraphs: [
        "Konyhánk az osztrák hagyományra épül – schnitzel, knédli, rétes – tisztességesen elkészítve, rövidítések nélkül. E klasszikusok körül az évszakokkal főzünk: könnyedebb ételek, vegetáriánus ötletek és nemzetközi kedvencek.",
        "Ami a tányérra kerül, ugyanolyan fontos, mint az, hogyan érzi magát az asztalnál. A kiszolgálás a Zentrumban barátságos, figyelmes és sietség nélküli.",
      ],
    },
    ingredients: {
      eyebrow: "A legjobb alapanyagok",
      title: "A jó konyha a jó alapanyagoknál kezdődik",
      paragraphs: [
        "Hegyi sajt, friss tejtermékek, becsületes kenyér, szezonális zöldségek – olyan alapanyagokat választunk, amelyeket a saját családunknak is felszolgálnánk, és ahol csak lehet, regionális beszállítókkal dolgozunk.",
      ],
      points: [
        {
          title: "Először a régió",
          text: "Előnyben részesítjük a stájerországi és a környező alpesi régió termelőit.",
        },
        {
          title: "Szezonális gondolkodás",
          text: "Az étlap az évszakokat követi – ami friss, az határozza meg, mit főzünk.",
        },
        {
          title: "Házi sütemények",
          text: "A sütemények, rétesek és édességek saját konyhánkban készülnek.",
        },
      ],
    },
    coffee: {
      eyebrow: "Kávé és sütemények",
      title: "Igazi kávéház, osztrák értelemben",
      paragraphs: [
        "Ausztriában komolyan veszik a kávékultúrát, és mi ápoljuk ezt a hagyományt: minőségi kávébab, gondosan habosított tej és a türelem, hogy minden csésze megfelelően készüljön el – a rövid espressótól a klasszikus, tejszínhabos Einspännerig.",
        "Egy szelet házi süteménnyel vagy egy meleg almásrétessel együtt ebből születik az a kis napi rituálé, amiért vendégeink visszatérnek.",
      ],
    },
    team: {
      eyebrow: "Ünnepségek és rendezvények",
      title: "Rendezvényhelyszín akár 250 vendégnek",
      paragraphs: [
        "A meghitt családi összejöveteltől a nagy esküvőig – a Zentrum Café Restaurant akár 250 vendéget befogadó rendezvényhelyszínt kínál, amely tökéletes esküvőkhöz és különleges alkalmakhoz.",
        "Legyen szó esküvőről, születésnapról, keresztelőről vagy céges rendezvényről: csapatunk Önnel együtt tervez meg minden részletet – a menütől az asztaldekorációig –, hogy Ön egyszerűen élvezhesse a különleges napját.",
      ],
    },
    gallery: {
      eyebrow: "Betekintés",
      title: "A Zentrumban",
      description:
        "Meleg anyagok, hívogató sarkok és asztalok, amelyek hosszas időzésre készültek.",
    },
    surroundings: {
      eyebrow: "Alpesi környezet",
      title: "Ahol a Dachstein minden napot meghatároz",
      paragraphs: [
        "Egy lépés az ajtón kívülre – és a hegyek egyszerűen ott vannak: hatalmasan, nyugodtan és egészen közel. Ramsau am Dachsteint túrázók, hegymászók és sífutók szeretik, és mindenki nagyra értékeli, aki kedveli a nyugodt alpesi életet.",
        "Egy szabadban töltött nap után a meleg étel és a jó kávé még jobban esik. Pontosan ezért vagyunk itt.",
      ],
    },
    cta: {
      title: "Jöjjön el, és tapasztalja meg saját maga",
      description:
        "A Zentrumot a legjobban az asztalaink egyikénél lehet megismerni. Örömmel várjuk látogatását.",
    },
  },

  menu: {
    header: {
      eyebrow: "Étlapunk",
      title: "Regionális alapanyagok. Frissen elkészítve.",
      description:
        "Az osztrák klasszikusoktól a szezonális ételeken át a házi süteményekig és a gondosan készített kávéig – fedezze fel, mit kínál konyhánk.",
    },
    dietaryLegendTitle: "Jelölések",
    categoriesAriaLabel: "Étlap-kategóriák",
    cta: {
      title: "Kérdése van az étlappal kapcsolatban?",
      description:
        "Allergiák, különleges étrendi igények vagy a napi ajánlat – csapatunk szívesen segít. Egyszerűen hívjon minket.",
    },
  },

  contact: {
    header: {
      eyebrow: "Kapcsolat",
      title: "Állunk rendelkezésére",
      description:
        "Asztalfoglalás, rendezvény tervezése vagy csak egy kérdés – elérhet minket telefonon, e-mailben vagy az alábbi űrlapon.",
    },
    detailsTitle: "Zentrum Café Restaurant",
    addressTitle: "Cím",
    phoneTitle: "Telefon",
    emailTitle: "E-mail",
    hoursNote: "Ünnepnapokon és a szezonok között a nyitvatartás eltérhet.",
    map: {
      title: "Így talál meg minket Ramsau am Dachsteinben",
      description:
        "A település központjában – gyalog és autóval is könnyen elérhető.",
      loadButton: "Interaktív térkép betöltése",
      loadNote:
        "A térképet a Google Maps csak akkor tölti be, ha Ön meg szeretné tekinteni.",
      iframeTitle:
        "Térkép a Zentrum Café Restaurant helyével Ramsau am Dachsteinben",
    },
    form: {
      title: "Írjon nekünk",
      description:
        "Használja az űrlapot foglalásokhoz és általános kérdésekhez – a lehető leghamarabb jelentkezünk.",
      nameLabel: "Név",
      namePlaceholder: "Az Ön neve",
      emailLabel: "E-mail",
      emailPlaceholder: "on@pelda.hu",
      phoneLabel: "Telefon (nem kötelező)",
      phonePlaceholder: "+43 …",
      messageLabel: "Üzenet",
      messagePlaceholder: "Miben segíthetünk?",
      submit: "Üzenet küldése",
      submitting: "Küldés folyamatban…",
      successTitle: "Köszönjük az üzenetét!",
      successText:
        "Ez a demóűrlap még nem küld e-maileket. Amint csatlakoztatunk egy e-mail-szolgáltatást, az üzenetek közvetlenül az étteremhez érkeznek. Sürgős esetben kérjük, hívjon minket.",
      errorRequired: "Kérjük, töltse ki ezt a mezőt.",
      errorEmail: "Kérjük, adjon meg egy érvényes e-mail-címet.",
      demoNotice: "Demóűrlap – még nincs e-mail-szolgáltatáshoz csatlakoztatva.",
    },
  },

  notFound: {
    eyebrow: "404",
    title: "Úgy tűnik, ez az oldal letért az ösvényről",
    description:
      "A keresett oldal nem létezik, vagy áthelyezték. Engedje, hogy visszavezessük valami finomhoz.",
    backHome: "A kezdőlapra",
    viewMenu: "Étlap megtekintése",
  },
};
