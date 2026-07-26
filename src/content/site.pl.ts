/**
 * SITE COPY — POLISH
 * ===================
 * Polish site copy for Zentrum Café Restaurant. Must mirror the
 * structure of site.de.ts exactly (enforced via the SiteContent type).
 */

import type { SiteContent } from "./site";

export const siteContentPl: SiteContent = {
  meta: {
    siteDescription:
      "Przytulna kawiarnio-restauracja w Ramsau am Dachstein: wyśmienite dania, dobra kawa, domowe wypieki i serdeczna alpejska gościnność w sercu regionu Dachstein.",
    home: {
      title: "Zentrum Café Restaurant | Ramsau am Dachstein",
      description:
        "Zentrum Café Restaurant w Ramsau am Dachstein zaprasza: serdeczna alpejska gościnność, wyśmienite dania, dobra kawa i domowe wypieki w sercu regionu Dachstein.",
    },
    about: {
      title: "O nas | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Poznaj Zentrum Café Restaurant w Ramsau am Dachstein: nasza koncepcja, miłość do kuchni austriackiej, najlepsze składniki, domowe wypieki i serdeczna gościnność u stóp Dachsteinu.",
    },
    menu: {
      title: "Menu | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Menu Zentrum Café Restaurant w Ramsau am Dachstein: austriackie specjały, świeże sałatki, sycące dania główne, domowe ciasta i starannie przygotowywana kawa.",
    },
    contact: {
      title: "Kontakt | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Kontakt z Zentrum Café Restaurant w Ramsau am Dachstein: telefon, e-mail, adres, godziny otwarcia i dojazd. Cieszymy się na Państwa wizytę w regionie Dachstein.",
    },
    notFound: {
      title: "Nie znaleziono strony | Zentrum Café Restaurant",
      description:
        "Szukana strona nie została znaleziona. Wróć do Zentrum Café Restaurant w Ramsau am Dachstein.",
    },
  },

  common: {
    skipToContent: "Przejdź do treści",
    brandTagline: "Café · Restaurant",
    viewMenu: "Zobacz menu",
    contactUs: "Kontakt",
    callNow: "Zadzwoń teraz",
    sendEmail: "Napisz e-mail",
    getDirections: "Wyznacz trasę",
    openingHours: "Godziny otwarcia",
    followUs: "Obserwuj nas",
    breadcrumbHome: "Strona główna",
    placeholderNotice:
      "Prezentowane zdjęcia mają charakter poglądowy i nie przedstawiają rzeczywistej restauracji.",
  },

  nav: {
    home: "Strona główna",
    about: "O nas",
    menu: "Menu",
    contact: "Kontakt",
    openMenu: "Otwórz menu nawigacji",
    closeMenu: "Zamknij menu nawigacji",
    menuLabel: "Menu nawigacji",
  },

  languageSwitcher: {
    label: "Język",
    ariaLabel: "Wybierz język",
  },

  floatingContact: {
    open: "Opcje kontaktu",
    close: "Zamknij opcje kontaktu",
    title: "Jak możemy pomóc?",
    call: "Zadzwoń do Zentrum Café Restaurant",
    email: "Napisz e-mail",
    directions: "Wyznacz trasę",
  },

  footer: {
    navigationTitle: "Odkrywaj",
    contactTitle: "Kontakt",
    hoursTitle: "Godziny otwarcia",
    socialNote: "Profile w mediach społecznościowych już wkrótce.",
    copyright: "Zentrum Café Restaurant. Wszelkie prawa zastrzeżone.",
    placeholderImagesNote:
      "Część zdjęć na tej stronie ma jeszcze charakter poglądowy – stopniowo zastąpimy je fotografiami restauracji.",
  },

  home: {
    hero: {
      eyebrow: "Ramsau am Dachstein · Austria",
      headline:
        "Smak, ciepło i alpejska gościnność w sercu Ramsau am Dachstein.",
      description:
        "Witamy w Zentrum Café Restaurant – serdecznym miejscu, w którym czekają na Państwa wyśmienite dania, dobra kawa, domowe wypieki i niezapomniane chwile pośród piękna regionu Dachstein.",
      scrollHint: "Odkryj więcej",
    },
    intro: {
      eyebrow: "Serdecznie witamy",
      title: "Miejsce, by się zatrzymać, odetchnąć i cieszyć chwilą",
      paragraphs: [
        "W samym centrum Ramsau am Dachstein nasza kawiarnio-restauracja łączy szczerą kuchnię austriacką, starannie przygotowywaną kawę i swobodne ciepło alpejskiej izby.",
        "Śniadanie przed wyprawą w góry, popołudniowe ciasto w gronie przyjaciół czy spokojna kolacja – w Zentrum zawsze są Państwo mile widziani.",
      ],
    },
    featured: {
      eyebrow: "Z naszej kuchni",
      title: "Dania, które pokochali nasi goście",
      description:
        "Mała zapowiedź tego, co na Państwa czeka – od alpejskich klasyków po sezonowe kompozycje. Pełną ofertę znajdą Państwo w naszym menu.",
      note: "Przykładowe dania ze zdjęciami poglądowymi – pełna oferta znajduje się w menu.",
    },
    coffeeDessert: {
      eyebrow: "Kawa i desery",
      title: "Dobra kawa zasługuje na dobre towarzystwo",
      paragraphs: [
        "Nasi bariści przygotowują każdą filiżankę z najwyższą starannością – od klasycznej Wiener Melange po aksamitne cappuccino. Do tego domowe ciasta, strudle i słodkie austriackie specjały – wypiekane codziennie, z dbałością o każdy szczegół.",
        "Prosimy usiąść wygodnie i nigdzie się nie spieszyć. Popołudniowa kawa nie jest u nas przerwą w ciągu dnia – jest jednym z jego najpiękniejszych momentów.",
      ],
      imageCaption: "Świeżo parzona kawa i domowe wypieki – każdego dnia.",
    },
    gallery: {
      eyebrow: "Atmosfera",
      title: "Chwile w Zentrum",
      description:
        "Ciepłe drewno, miękkie światło i cichy gwar dobrych rozmów – tak wygląda atmosfera, która na Państwa czeka.",
    },
    videoTour: {
      eyebrow: "Wirtualny spacer",
      title: "Zajrzyj do Zentrum",
      description:
        "Zapraszamy na krótki spacer po naszej kawiarni i restauracji w Ramsau am Dachstein.",
      videoFallback: "Twoja przeglądarka nie może odtworzyć tego wideo.",
      musicCredit:
        "Muzyka: „Bossa Antigua” – Kevin MacLeod (incompetech.com), licencja CC BY 4.0.",
    },
    location: {
      eyebrow: "Nasz dom",
      title: "W sercu regionu Dachstein",
      paragraphs: [
        "Ramsau am Dachstein leży na słonecznym płaskowyżu na wysokości około 1100 metrów, u stóp potężnej południowej ściany masywu Dachstein. To miejsce z widokiem na lodowiec, alpejskimi halami i krystalicznie czystym górskim powietrzem.",
        "Nasza kawiarnio-restauracja znajduje się w samym centrum miejscowości – to naturalne miejsce spotkań po dniu na szlaku, na stoku albo po prostu po spacerze przez Ramsau.",
      ],
      facts: [
        { label: "Miejscowość", value: "Ramsau am Dachstein" },
        { label: "Region", value: "Styria, Austria" },
        { label: "Krajobraz", value: "Masyw Dachstein i wysoki płaskowyż" },
      ],
    },
    philosophy: {
      eyebrow: "Nasza filozofia",
      title: "Szczera kuchnia, przygotowywana z dbałością",
      paragraphs: [
        "Wierzymy, że dobre jedzenie nie musi być skomplikowane – potrzebuje dobrych składników, czasu i szacunku do rzemiosła. Nasza kuchnia łączy austriacką tradycję ze świeżymi, sezonowymi pomysłami.",
        "Gdzie tylko to możliwe, współpracujemy z regionalnymi producentami i pozwalamy, by jakość składników mówiła sama za siebie.",
      ],
      quote:
        "Gościnność to sprawianie, by ludzie czuli się jak w domu – nawet na wysokości tysiąca metrów.",
    },
    hours: {
      eyebrow: "Zapraszamy",
      title: "Godziny otwarcia",
      note: "W święta i poza sezonem godziny otwarcia mogą się różnić – jeśli planują Państwo specjalny przyjazd, prosimy o wcześniejszy telefon.",
    },
    cta: {
      title: "Cieszymy się na Państwa wizytę",
      description:
        "Zapraszamy do rezerwacji stolika, pytań o danie dnia albo po prostu do wpadnięcia bez zapowiedzi – jesteśmy tu dla Państwa.",
    },
  },

  about: {
    header: {
      eyebrow: "O nas",
      title: "Historia miejsca, w którym ludzie się spotykają",
      description:
        "Kawiarnia, restauracja i miejsce spotkań w sercu Ramsau am Dachstein.",
    },
    story: {
      eyebrow: "Nasza historia",
      title: "Zakorzenieni w miejscowości, otwarci na świat",
      /*
       * ⚠️ Tekst zastępczy — nie podajemy roku założenia, historii rodziny
       * ani nazwisk. Przed startem strony należy go zastąpić prawdziwą
       * historią Zentrum Café Restaurant.
       */
      paragraphs: [
        "Każda miejscowość ma miejsce, w którym krzyżują się drogi – gdzie sąsiedzi rozmawiają przy kawie, wędrowcy nabierają sił po górskiej trasie, a goście przekonują się, co naprawdę znaczy alpejska gościnność. W Ramsau am Dachstein takim miejscem jest właśnie Zentrum Café Restaurant.",
        "Nasza nazwa mówi wszystko: jesteśmy w centrum. W centrum miejscowości – i, jak lubimy wierzyć, w centrum wielu udanych dni w regionie Dachstein.",
        "[Tutaj należy wstawić prawdziwą historię Zentrum Café Restaurant – jak wszystko się zaczęło, kto za nim stoi i co znaczy dla miejscowości.]",
      ],
    },
    concept: {
      eyebrow: "Nasza koncepcja",
      title: "Za dnia kawiarnia, w sercu restauracja",
      paragraphs: [
        "Zentrum to dwa miejsca w jednym: kawiarnia, w której poranek zaczyna się łagodnie, a popołudnie leniwie płynie przy cieście i rozmowach, oraz restauracja, w której austriackie klasyki i sezonowe dania powstają z prawdziwym oddaniem.",
        "Atmosfera łączy jedno i drugie: jest na tyle swobodna, by pasowały do niej zakurzone buty trekkingowe, i na tyle ciepła, by uświetnić wyjątkowy wieczór.",
      ],
    },
    cuisine: {
      eyebrow: "Kuchnia i gościnność",
      title: "Austriacka tradycja we współczesnym wydaniu",
      paragraphs: [
        "Nasza kuchnia opiera się na austriackiej tradycji – sznycel, knedle, strudel – przygotowywanej rzetelnie i bez dróg na skróty. Wokół tych klasyków gotujemy w rytmie pór roku: lżejsze dania, propozycje wegetariańskie i międzynarodowe przysmaki.",
        "Równie ważne jak to, co na talerzu, jest to, jak czują się Państwo przy stole. Obsługa w Zentrum jest przyjazna, uważna i nikogo nie pogania.",
      ],
    },
    ingredients: {
      eyebrow: "Najlepsze składniki",
      title: "Dobra kuchnia zaczyna się od dobrych składników",
      paragraphs: [
        "Górskie sery, świeży nabiał, uczciwy chleb, sezonowe warzywa – wybieramy składniki, które podalibyśmy własnym rodzinom, i gdzie tylko to możliwe współpracujemy z regionalnymi dostawcami.",
      ],
      points: [
        {
          title: "Przede wszystkim regionalnie",
          text: "Stawiamy na producentów ze Styrii i okolicznych regionów alpejskich.",
        },
        {
          title: "W rytmie pór roku",
          text: "Menu podąża za porami roku – to, co świeże, decyduje o tym, co gotujemy.",
        },
        {
          title: "Domowe wypieki",
          text: "Ciasta, strudle i słodkości powstają w naszej własnej kuchni.",
        },
      ],
    },
    coffee: {
      eyebrow: "Kawa i desery",
      title: "Prawdziwa kawiarnia w austriackim stylu",
      paragraphs: [
        "W Austrii kultura picia kawy traktowana jest z powagą, a my pielęgnujemy tę tradycję: wysokiej jakości ziarna, starannie spienione mleko i cierpliwość, by każdą filiżankę przygotować jak należy – od krótkiego espresso po klasyczny Einspänner pod czapą bitej śmietany.",
        "W połączeniu z kawałkiem domowego ciasta lub jeszcze ciepłym Apfelstrudlem staje się to małym codziennym rytuałem, po który nasi goście do nas wracają.",
      ],
    },
    team: {
      eyebrow: "Ludzie tworzący Zentrum",
      title: "Zespół, który kocha to, co robi",
      /*
       * ⚠️ Tekst zastępczy — docelowo należy tu przedstawić szefa kuchni
       * i zespół: nazwiska, zdjęcia i kilka osobistych słów.
       */
      paragraphs: [
        "Za każdą dobrą restauracją stoi zespół, któremu naprawdę zależy – w kuchni, za ekspresem do kawy i przy Państwa stole.",
        "[Tutaj należy przedstawić szefa kuchni i zespół Zentrum Café Restaurant – ich drogę zawodową, pasję oraz zdjęcie prawdziwych ludzi, którzy tworzą to miejsce.]",
      ],
    },
    gallery: {
      eyebrow: "Wnętrza",
      title: "Wewnątrz Zentrum",
      description:
        "Ciepłe materiały, przytulne kąciki i stoły, przy których chce się zostać dłużej.",
    },
    surroundings: {
      eyebrow: "Alpejskie otoczenie",
      title: "Tam, gdzie Dachstein nadaje rytm każdemu dniu",
      paragraphs: [
        "Wystarczy wyjść za próg – a góry po prostu są: potężne, spokojne i na wyciągnięcie ręki. Ramsau am Dachstein kochają piechurzy, wspinacze i biegacze narciarscy, a doceniają wszyscy, którym bliskie jest niespieszne alpejskie życie.",
        "Po dniu spędzonym na świeżym powietrzu ciepły posiłek i dobra kawa smakują jeszcze lepiej. Właśnie po to tu jesteśmy.",
      ],
    },
    cta: {
      title: "Zapraszamy – przekonajcie się Państwo sami",
      description:
        "Zentrum najlepiej poznaje się przy jednym z naszych stolików. Cieszymy się na Państwa wizytę.",
    },
  },

  menu: {
    header: {
      eyebrow: "Nasze menu",
      title: "Regionalne składniki. Świeżo przygotowane.",
      description:
        "Od austriackich klasyków przez dania sezonowe po domowe wypieki i starannie przygotowywaną kawę – zapraszamy do odkrycia tego, co oferuje nasza kuchnia.",
    },
    exampleNotice:
      "Przykładowe menu w celach poglądowych – prezentowane dania i ceny są treścią zastępczą i zostaną zastąpione aktualną ofertą restauracji.",
    dietaryLegendTitle: "Oznaczenia",
    categoriesAriaLabel: "Kategorie menu",
    cta: {
      title: "Pytania dotyczące menu?",
      description:
        "Alergie, szczególne potrzeby żywieniowe czy danie dnia – nasz zespół chętnie pomoże. Wystarczy do nas zadzwonić.",
    },
  },

  contact: {
    header: {
      eyebrow: "Kontakt",
      title: "Jesteśmy do Państwa dyspozycji",
      description:
        "Rezerwacja stolika, organizacja uroczystości czy po prostu pytanie – mogą się Państwo z nami skontaktować telefonicznie, e-mailem lub przez poniższy formularz.",
    },
    detailsTitle: "Zentrum Café Restaurant",
    addressTitle: "Adres",
    phoneTitle: "Telefon",
    emailTitle: "E-mail",
    hoursNote: "W święta i poza sezonem godziny otwarcia mogą się różnić.",
    map: {
      title: "Jak nas znaleźć w Ramsau am Dachstein",
      description:
        "W samym centrum miejscowości – łatwo do nas dotrzeć pieszo i samochodem.",
      loadButton: "Załaduj interaktywną mapę",
      loadNote:
        "Mapa zostanie pobrana z Google Maps dopiero wtedy, gdy zechcą ją Państwo wyświetlić.",
      iframeTitle:
        "Mapa z lokalizacją Zentrum Café Restaurant w Ramsau am Dachstein",
    },
    form: {
      title: "Napisz do nas",
      description:
        "Formularz służy do rezerwacji i pytań ogólnych – odpowiemy tak szybko, jak to możliwe.",
      nameLabel: "Imię i nazwisko",
      namePlaceholder: "Państwa imię i nazwisko",
      emailLabel: "E-mail",
      emailPlaceholder: "ty@przyklad.pl",
      phoneLabel: "Telefon (opcjonalnie)",
      phonePlaceholder: "+43 …",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Jak możemy Państwu pomóc?",
      submit: "Wyślij wiadomość",
      submitting: "Wysyłanie…",
      successTitle: "Dziękujemy za wiadomość!",
      successText:
        "Ten formularz demonstracyjny nie wysyła jeszcze e-maili. Gdy tylko zostanie podłączona usługa pocztowa, wiadomości będą trafiać bezpośrednio do restauracji. W pilnych sprawach prosimy o telefon.",
      errorRequired: "Prosimy wypełnić to pole.",
      errorEmail: "Prosimy podać prawidłowy adres e-mail.",
      demoNotice: "Formularz demonstracyjny – jeszcze niepołączony z usługą pocztową.",
    },
  },

  notFound: {
    eyebrow: "404",
    title: "Ta strona chyba zeszła ze szlaku",
    description:
      "Strona, której Państwo szukają, nie istnieje lub została przeniesiona. Chętnie wskażemy drogę powrotną do czegoś pysznego.",
    backHome: "Wróć na stronę główną",
    viewMenu: "Zobacz menu",
  },
};
