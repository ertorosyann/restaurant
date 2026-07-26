/**
 * SITE COPY — ENGLISH
 * ====================
 * English site copy for Zentrum Café Restaurant. Must mirror the
 * structure of site.de.ts exactly (enforced via the SiteContent type).
 */

import type { SiteContent } from "./site";

export const siteContentEn: SiteContent = {
  meta: {
    siteDescription:
      "A welcoming café and restaurant in Ramsau am Dachstein offering flavourful food, quality coffee, homemade desserts and warm Alpine hospitality in the heart of the Dachstein region.",
    home: {
      title: "Zentrum Café Restaurant | Ramsau am Dachstein",
      description:
        "Discover Zentrum Café Restaurant in Ramsau am Dachstein. Enjoy welcoming Alpine hospitality, delicious dishes, quality coffee and homemade desserts in the heart of the Dachstein region.",
    },
    about: {
      title: "About Us | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Learn about Zentrum Café Restaurant in Ramsau am Dachstein: our concept, our love of Austrian cuisine, quality ingredients, homemade desserts and warm Alpine hospitality near the Dachstein.",
    },
    menu: {
      title: "Menu | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Browse the menu of Zentrum Café Restaurant in Ramsau am Dachstein: Austrian specialties, fresh salads, hearty main courses, homemade cakes and carefully prepared coffee near the Dachstein.",
    },
    contact: {
      title: "Contact | Zentrum Café Restaurant Ramsau am Dachstein",
      description:
        "Contact Zentrum Café Restaurant in Ramsau am Dachstein: telephone, email, address, opening hours and directions. We look forward to your visit in the Dachstein region.",
    },
    notFound: {
      title: "Page Not Found | Zentrum Café Restaurant",
      description:
        "The page you are looking for could not be found. Return to Zentrum Café Restaurant in Ramsau am Dachstein.",
    },
  },

  common: {
    skipToContent: "Skip to content",
    brandTagline: "Café · Restaurant",
    viewMenu: "View Menu",
    contactUs: "Contact Us",
    callNow: "Call Now",
    sendEmail: "Send Email",
    getDirections: "Get Directions",
    openingHours: "Opening Hours",
    followUs: "Follow Us",
    breadcrumbHome: "Home",
    placeholderNotice:
      "Photos shown are placeholders and do not depict the actual restaurant.",
  },

  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    contact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    menuLabel: "Navigation menu",
  },

  languageSwitcher: {
    label: "Language",
    ariaLabel: "Choose language",
  },

  floatingContact: {
    open: "Contact options",
    close: "Close contact options",
    title: "How can we help?",
    call: "Call Zentrum Café Restaurant",
    email: "Send Email",
    directions: "Get Directions",
  },

  footer: {
    navigationTitle: "Explore",
    contactTitle: "Contact",
    hoursTitle: "Opening Hours",
    socialNote: "Social media profiles coming soon.",
    copyright: "Zentrum Café Restaurant. All rights reserved.",
    placeholderImagesNote:
      "Some website photos are still placeholder images and will gradually be replaced with photos of the restaurant.",
  },

  home: {
    hero: {
      eyebrow: "Ramsau am Dachstein · Austria",
      headline:
        "Taste, warmth and Alpine hospitality in the heart of Ramsau am Dachstein.",
      description:
        "Welcome to Zentrum Café Restaurant — a welcoming place for flavourful dishes, quality coffee, homemade desserts and memorable moments surrounded by the beauty of the Dachstein region.",
      scrollHint: "Discover more",
    },
    intro: {
      eyebrow: "Welcome",
      title: "A place to arrive, unwind and enjoy",
      paragraphs: [
        "In the centre of Ramsau am Dachstein, our café and restaurant brings together honest Austrian cooking, carefully prepared coffee and the relaxed warmth of an Alpine living room.",
        "Whether you are stopping in for breakfast before a hike, meeting friends over cake in the afternoon, or settling in for a leisurely dinner — you are always welcome at Zentrum.",
      ],
    },
    featured: {
      eyebrow: "From Our Kitchen",
      title: "Dishes our guests love",
      description:
        "A small taste of what awaits you — from Alpine classics to seasonal creations. Explore the full menu for everything our kitchen prepares.",
      note: "Example dishes with placeholder photos — the full offering lives on our menu page.",
    },
    coffeeDessert: {
      eyebrow: "Coffee & Dessert",
      title: "Good coffee deserves good company",
      paragraphs: [
        "Our baristas prepare every cup with care — from a classic Wiener Melange to a velvety cappuccino. Alongside it: homemade cakes, strudel and sweet Austrian specialties, baked fresh with attention to detail.",
        "Take a seat, take your time. Afternoon coffee here is not a break from the day — it is one of its highlights.",
      ],
      imageCaption: "Freshly prepared coffee and homemade desserts, every day.",
    },
    gallery: {
      eyebrow: "Atmosphere",
      title: "Moments at Zentrum",
      description:
        "Warm wood, soft light and the quiet hum of good conversation — impressions of the atmosphere that awaits you.",
    },
    videoTour: {
      eyebrow: "A Look Inside",
      title: "Step inside the Zentrum",
      description:
        "Join us for a short tour of our café restaurant in Ramsau am Dachstein.",
      videoFallback: "Unfortunately, your browser cannot play this video.",
      musicCredit:
        "Music: “Bossa Antigua” by Kevin MacLeod (incompetech.com), licensed under CC BY 4.0.",
    },
    location: {
      eyebrow: "Our Home",
      title: "In the heart of the Dachstein region",
      paragraphs: [
        "Ramsau am Dachstein lies on a sunny plateau at around 1,100 metres, framed by the mighty south face of the Dachstein massif. It is a place of glacier views, alpine meadows and clear mountain air.",
        "Our café restaurant sits in the centre of the village — the natural meeting point after a day on the trails, the slopes or simply a stroll through Ramsau.",
      ],
      facts: [
        { label: "Village", value: "Ramsau am Dachstein" },
        { label: "Region", value: "Styria, Austria" },
        { label: "Landscape", value: "Dachstein massif & alpine plateau" },
      ],
    },
    philosophy: {
      eyebrow: "Our Philosophy",
      title: "Honest food, made with care",
      paragraphs: [
        "We believe good food does not need to be complicated — it needs good ingredients, time and respect for the craft. Our kitchen combines Austrian tradition with fresh, seasonal thinking.",
        "Wherever possible, we work with regional producers and let the quality of the ingredients speak for itself.",
      ],
      quote:
        "Hospitality means making people feel at home — even a thousand metres up.",
    },
    hours: {
      eyebrow: "When to Visit",
      title: "Opening hours",
      note: "Hours may vary on holidays and between seasons — please call ahead if you are making a special trip.",
    },
    cta: {
      title: "We look forward to welcoming you",
      description:
        "Reserve a table, ask about the menu of the day, or simply drop by — we are happy to help.",
    },
  },

  about: {
    header: {
      eyebrow: "About Us",
      title: "The story of a place where people gather",
      description:
        "A café, a restaurant, a meeting point in the heart of Ramsau am Dachstein.",
    },
    story: {
      eyebrow: "Our Story",
      title: "Rooted in the village, open to the world",
      /*
       * ⚠️ Placeholder story — no founding year, family history or names are
       * claimed. Replace with the real story of Zentrum Café Restaurant.
       */
      paragraphs: [
        "Every village has a place where paths cross — where neighbours catch up over coffee, hikers refuel after the trail, and visitors discover what Alpine hospitality really means. In Ramsau am Dachstein, Zentrum Café Restaurant is that kind of place.",
        "Our name says it simply: we are at the centre. At the centre of the village, and — we like to think — at the centre of many good days in the Dachstein region.",
        "[Add the real story of Zentrum Café Restaurant here — how it began, who stands behind it, and what it means to the village.]",
      ],
    },
    concept: {
      eyebrow: "Our Concept",
      title: "Café by day, restaurant at heart",
      paragraphs: [
        "Zentrum is two things at once. A café where mornings begin gently and afternoons stretch out over cake and conversation. And a restaurant where Austrian classics and seasonal dishes are cooked with genuine care.",
        "The atmosphere carries both: relaxed enough for muddy hiking boots, warm enough for a special evening.",
      ],
    },
    cuisine: {
      eyebrow: "Cuisine & Hospitality",
      title: "Austrian tradition, cooked with today in mind",
      paragraphs: [
        "Our kitchen is grounded in Austrian tradition — schnitzel, dumplings, strudel — prepared properly and without shortcuts. Around these classics, we cook with the seasons: lighter dishes, vegetarian ideas and international favourites.",
        "Just as important as what is on the plate is how you feel at the table. Service at Zentrum is friendly, attentive and unhurried.",
      ],
    },
    ingredients: {
      eyebrow: "Quality Ingredients",
      title: "Good cooking starts with good ingredients",
      paragraphs: [
        "Mountain cheese, fresh dairy, honest bread, seasonal vegetables — we choose ingredients we would serve our own families, and we work with regional suppliers wherever we can.",
      ],
      points: [
        {
          title: "Regional first",
          text: "We prioritise producers from Styria and the surrounding Alpine region.",
        },
        {
          title: "Seasonal thinking",
          text: "The menu follows the seasons — what is fresh shapes what we cook.",
        },
        {
          title: "Homemade desserts",
          text: "Cakes, strudel and sweets are made in our own kitchen.",
        },
      ],
    },
    coffee: {
      eyebrow: "Coffee & Dessert",
      title: "A proper café, in the Austrian sense",
      paragraphs: [
        "Coffee culture is taken seriously in Austria, and we honour that tradition. Quality beans, carefully steamed milk, and the patience to get every cup right — from a short espresso to a classic Einspänner under whipped cream.",
        "Paired with a slice of homemade cake or a warm Apfelstrudel, it becomes the small daily ritual our guests return for.",
      ],
    },
    team: {
      eyebrow: "The People Behind Zentrum",
      title: "A team that loves what it does",
      /*
       * ⚠️ Placeholder — introduce the real chef and team here with names,
       * photos and a few personal words once available.
       */
      paragraphs: [
        "Behind every good restaurant stands a team that cares — in the kitchen, behind the coffee machine and at your table.",
        "[Introduce the chef and team of Zentrum Café Restaurant here — their background, their passion, and a photo of the real people who make this place what it is.]",
      ],
    },
    gallery: {
      eyebrow: "Impressions",
      title: "Inside Zentrum",
      description:
        "Warm materials, welcoming corners and tables made for lingering.",
    },
    surroundings: {
      eyebrow: "Alpine Surroundings",
      title: "Where the Dachstein shapes every day",
      paragraphs: [
        "Step outside and the mountains are simply there — vast, calm and close. Ramsau am Dachstein is beloved by hikers, climbers and cross-country skiers, and cherished by anyone who loves unhurried Alpine life.",
        "After a day outdoors, a warm meal and a good coffee taste even better. That is exactly what we are here for.",
      ],
    },
    cta: {
      title: "Come and experience it yourself",
      description:
        "The best way to get to know Zentrum is at one of our tables. We look forward to your visit.",
    },
  },

  menu: {
    header: {
      eyebrow: "Our Menu",
      title: "Regional ingredients. Freshly prepared.",
      description:
        "From Austrian classics to seasonal dishes, homemade desserts and carefully prepared coffee — discover what our kitchen has to offer.",
    },
    exampleNotice:
      "Example menu for illustration — dishes and prices shown are placeholders and will be replaced with the restaurant's current offering.",
    dietaryLegendTitle: "Labels",
    categoriesAriaLabel: "Menu categories",
    cta: {
      title: "Questions about the menu?",
      description:
        "Allergies, dietary needs or the dish of the day — our team is happy to help. Just give us a call.",
    },
  },

  contact: {
    header: {
      eyebrow: "Contact",
      title: "We are here for you",
      description:
        "Reserve a table, plan a celebration or simply ask a question — reach us by phone, email or with the form below.",
    },
    detailsTitle: "Zentrum Café Restaurant",
    addressTitle: "Address",
    phoneTitle: "Telephone",
    emailTitle: "Email",
    hoursNote: "Hours may vary on holidays and between seasons.",
    map: {
      title: "Find us in Ramsau am Dachstein",
      description:
        "Right in the centre of the village, easy to reach on foot and by car.",
      loadButton: "Load interactive map",
      loadNote:
        "The map is loaded from Google Maps only after you choose to view it.",
      iframeTitle:
        "Map showing the location of Zentrum Café Restaurant in Ramsau am Dachstein",
    },
    form: {
      title: "Send us a message",
      description:
        "Use the form for reservations and general questions — we will get back to you as soon as possible.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+43 …",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      submitting: "Sending…",
      successTitle: "Thank you for your message!",
      successText:
        "This demo form does not send emails yet. Once an email service is connected, messages will reach the restaurant directly. For urgent requests, please call us.",
      errorRequired: "Please fill in this field.",
      errorEmail: "Please enter a valid email address.",
      demoNotice: "Demo form — not yet connected to an email service.",
    },
  },

  notFound: {
    eyebrow: "404",
    title: "This page seems to have wandered off the trail",
    description:
      "The page you are looking for does not exist or has been moved. Let us guide you back to somewhere delicious.",
    backHome: "Back to Home",
    viewMenu: "View Menu",
  },
};
