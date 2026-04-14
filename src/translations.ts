export type Language = 'NL' | 'EN' | 'FR' | 'DE';

export const translations = {
  NL: {
    nav: {
      addons: 'Add-ons',
      portfolio: 'Portfolio',
      pricing: 'Investering',
      contact: 'Contact',
      cta: 'Maximaliseer je Waarde'
    },
    hero: {
      tag: 'Exclusief Voor Atleten',
      titlePrimary: 'Maximaliseer je marktwaarde',
      titleSecondary: 'trek sponsors aan.',
      desc: 'Wij leveren 100% custom webdesign, volledig ontworpen passend bij jouw unieke identiteit. Maak indruk met een premium platform dat jouw professionele waarde direct verhoogt.',
      ctaPrimary: 'Start Jouw Project',
      ctaSecondary: 'Bekijk Portfolio'
    },
    marqueeItems: [
      "100% Custom Webdesign",
      "Sponsor Integratie Modules",
      "Interactieve Match Records",
      "Pro SEO & GEO Dominance",
      "Top-Snelheid Performance",
      "Unieke Atleet Identiteit"
    ],
    expertise: {
      tag: 'Premium Add-Ons',
      titleTop: 'Investeringen voor directe impact',
      titleBottom: 'op sponsordeals.',
      scrollHint: 'Scroll om te ontdekken',
      cards: [
        { title: "100% Custom Webdesign", desc: "Elk profiel wordt volledig op maat gebouwd. Passend bij jouw unieke identiteit, stijl en brand. Geen templates, enkel premium design.", list: ["Unieke Identiteit", "Snelle Performance", "Premium Uitstraling"] },
        { title: "Pro SEO & GEO Dominance", desc: "Vergroot je marktwaarde lokaal én internationaal met ijzersterk SEO-fundament. Word bovenaan gevonden door fans en sponsors.", list: ["Lokale Dominantie", "Internationale Zichtbaarheid", "Verhoogde Traffic"] },
        { title: "Sponsor Integratie Modules", desc: "Maximaliseer je ROI voor partners met prominente dynamische ad-spaces. Trek direct grotere en professionelere sponsordeals aan.", list: ["Dynamische Banners", "Call-To-Actions", "Directe ROI"] },
        { title: "Interactieve Match Records", desc: "Laat je overwinningen en statistieken spreken via indrukwekkende, dynamische archieven in plaats van statische lijstjes.", list: ["Visuele Data", "Carrière Tijdlijn", "Live Updates"] }
      ]
    },
    work: {
      tag: 'Vlaggenschip Referentie',
      titlePrimary: 'Ons Vlaggenschip:',
      titleSecondary: 'Internationaal BJJ Platform',
      desc: 'Als officiële website-partner hebben wij een high-end platform ontwikkeld dat internationale atleten, sponsors en fans verbindt. Razendsnel, SEO-geoptimaliseerd en gebouwd voor maximale conversie.',
      cta: 'Bekijk de Live Casus'
    },
    stats: {
      projects: 'Projecten Voltooid',
      satisfaction: 'Tevredenheid',
      experience: 'Jaren Ervaring'
    },
    team: {
      tag: 'Gedreven door Expertise',
      title: 'Geleid door professionals.',
    },
    testimonials: {
      tag: 'Wat Atleten Zeggen',
      title: 'Ervaringen',
      desc: 'Lees hoe we de professionele carrières van atleten naar een hoger niveau tillen.',
      row1: [
        { text: "Mijn online merk was gedateerd. LVmedia voegde direct waarde toe. Sponsor aanvragen zijn sinds de lancering verdubbeld.", name: "Alex V.", role: "BJJ ZWARTE BAND", initial: "A" },
        { text: "Ongekende kwaliteit en design. Ze begrepen exact hoe mijn unieke vechtersprofiel vertaald moest worden naar het web.", name: "Marcos S.", role: "PROFESSIONAL FIGHTER", initial: "M" },
        { text: "Het platform is snel, professioneel en trekt de juiste aandacht. Mijn marktwaarde is aanzienlijk toegenomen.", name: "Damian de J.", role: "GRAPPLING KAMPIOEN", initial: "D" }
      ],
      row2: [
        { text: "De sponsor integratie modules hebben mijn inkomsten direct vergroot. Dit is geen website, het is een investering.", name: "Sarah K.", role: "MMA FIGHTER", initial: "S" },
        { text: "Wat een game-changer. Eindelijk een website die de professionaliteit weerspiegelt die ik op de mat laat zien.", name: "Jordy H.", role: "KICKBOKSER", initial: "J" },
        { text: "Absolute top-tier strategie en uitvoering. Ze luisteren naar wie je bent als atleet en ontwerpen dit tot in perfectie.", name: "Esther R.", role: "BJJ COMPETITOR", initial: "E" }
      ]
    },
    pricing: {
      tag: 'Transparant Model',
      title: 'Investering in je Carrière.',
      cards: [
        { 
          title: "Foundation", 
          subtitle: "De perfecte basis voor professionele atleten.", 
          price: "€500", 
          period: "+ €50 /mnd",
          features: ["Premium Custom Design", "Top-snelheid Performance", "Standaard SEO", "Veilig Onderhoud & Hosting"],
          cta: "Start Foundation"
        },
        { 
          badge: "Meest Gekozen",
          title: "Pro Athlete", 
          subtitle: "Inclusief Upsells",
          price: "Maatwerk",
          period: "/ op aanvraag",
          features: ["Foundation Inbegrepen", "Pro SEO & GEO Dominance", "Sponsor Integratie Modules", "Priority Support & Updates"],
          cta: "Maximaliseer Zichtbaarheid"
        },
        { 
          title: "Champion", 
          subtitle: "Voor de absolute top in de sport.",
          price: "Maatwerk",
          period: "/ op aanvraag",
          features: ["Alles in Pro Athlete", "Interactieve Match Records", "Volledig Maatwerk Platform", "Dedicated Account Manager"],
          cta: "Word een Champion"
        }
      ]
    },
    faq: {
      tag: 'Kennisbank',
      title: 'Veelgestelde Vragen.',
      items: [
        { q: "Waarom een maandelijks bedrag voor de Foundation?", a: "Dit is voor veilige hosting op premium servers, dagelijkse backups, technische updates en doorlopende support zodat jouw website altijd bereikbaar, veilig en enorm snel is." },
        { q: "Is het 80s Synthwave thema jullie enige stijl?", a: "Absoluut niet. De 80s Synthwave aesthetic is slechts het thema van ons huidige event. Wij ontwerpen 100% custom, volledig afgestemd op de unieke identiteit van de atleet. Of je nu minimalistisch, modern, robuust of extreem creatief zoekt: we build it." },
        { q: "Hoe snel is mijn profiel online?", a: "Het Foundation concept duurt gemiddeld 2 tot 4 weken. Profielen met complexe add-ons (zoals dynamische match records of sponsor modules) nemen 4 tot 6 weken in beslag." },
        { q: "Helpen de integraties echt bij het aantrekken van sponsors?", a: "Ja. Grote merken en (potentiële) sponsors zoeken naar atleten met een exceptionele, professionele online aanwezigheid en meetbare ROI. Met onze premium integraties positioneer je jezelf als een buitengewoon veilige en lucratieve investering." }
      ]
    },
    contact: {
      tag: 'Connect',
      title: 'Klaar om je marktwaarde te maximaliseren?',
      title1: 'Klaar om je',
      title2: 'marktwaarde',
      title3: 'te maximaliseren?',
      desc: 'Neem contact op en ontdek direct wat een premium digitaal profiel voor jouw (verdere) professionele carrièrekansen en sponsordeals kan betekenen.',
      form: {
        firstName: 'Voornaam',
        lastName: 'Achternaam',
        email: 'E-mailadres',
        goals: 'Jouw Doelen / Carrière Informatie',
        goalsPlaceholder: 'Vertel ons over jezelf en wat je wilt bereiken...',
        cta: 'Verstuur Aanvraag'
      }
    },
    footer: {
      desc: 'Wij creëren premium digitale visitekaartjes voor topsporters. Maximaliseer je marktwaarde en trek moeiteloos grote sponsoren aan.',
      expertise: 'Expertise',
      expertiseLinks: ['Custom Webdesign', 'Sponsor Integraties', 'SEO & Dominantie', 'Interactieve Records'],
      company: 'Bedrijf',
      companyLinks: ['Over Ons', 'Portfolio', 'Investering', 'Contact'],
      legal: 'Legal',
      legalLinks: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    },
    seo: {
      title: 'LV Media | Premium Webdesign & Digitale Strategie',
      desc: 'LV Media bouwt digitale ervaringen die presteren. Versterk uw merk met high-end webdesign, applicatie-ontwikkeling en resultaatgerichte SEO-strategieën.'
    }
  },
  EN: {
    nav: {
      addons: 'Add-ons',
      portfolio: 'Portfolio',
      pricing: 'Investment',
      contact: 'Contact',
      cta: 'Maximize Your Value'
    },
    hero: {
      tag: 'Exclusive For Athletes',
      titlePrimary: 'Maximize your market value',
      titleSecondary: 'attract sponsors.',
      desc: 'We deliver 100% custom web design, beautifully crafted to match your unique identity. Impress with a premium platform that directly increases your professional value.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'View Portfolio'
    },
    marqueeItems: [
      "100% Custom Web Design",
      "Sponsor Integration Modules",
      "Interactive Match Records",
      "Pro SEO & GEO Dominance",
      "Top-Speed Performance",
      "Unique Athlete Identity"
    ],
    expertise: {
      tag: 'Premium Add-Ons',
      titleTop: 'Investments for direct impact',
      titleBottom: 'on sponsorship deals.',
      scrollHint: 'Scroll to discover',
      cards: [
        { title: "100% Custom Web Design", desc: "Every profile is entirely custom built. Tailored to your unique identity, style, and brand. No templates, only premium design.", list: ["Unique Identity", "Fast Performance", "Premium Look"] },
        { title: "Pro SEO & GEO Dominance", desc: "Increase your market value locally and internationally with a rock-solid SEO foundation. Get found at the top by fans and sponsors.", list: ["Local Dominance", "International Visibility", "Increased Traffic"] },
        { title: "Sponsor Integration Modules", desc: "Maximize your ROI for partners with prominent dynamic ad-spaces. Immediately attract larger and more professional sponsorship deals.", list: ["Dynamic Banners", "Call-To-Actions", "Direct ROI"] },
        { title: "Interactive Match Records", desc: "Let your victories and statistics speak through impressive, dynamic archives instead of static lists.", list: ["Visual Data", "Career Timeline", "Live Updates"] }
      ]
    },
    work: {
      tag: 'Flagship Reference',
      titlePrimary: 'Our Flagship:',
      titleSecondary: 'International BJJ Platform',
      desc: 'As the official website partner, we have developed a high-end platform that connects international athletes, sponsors, and fans. Lightning fast, SEO-optimized, and built for maximum conversion.',
      cta: 'View Live Case'
    },
    stats: {
      projects: 'Projects Completed',
      satisfaction: 'Satisfaction',
      experience: 'Years Experience'
    },
    team: {
      tag: 'Driven by Expertise',
      title: 'Led by professionals.',
    },
    testimonials: {
      tag: 'What Athletes Say',
      title: 'Experiences',
      desc: 'Read how we elevate the professional careers of athletes to the next level.',
      row1: [
        { text: "My online brand was outdated. LVmedia added direct value. Sponsorship requests have doubled since launch.", name: "Alex V.", role: "BJJ BLACK BELT", initial: "A" },
        { text: "Unprecedented quality and design. They understood exactly how my unique fighter profile needed to be translated to the web.", name: "Marcos S.", role: "PROFESSIONAL FIGHTER", initial: "M" },
        { text: "The platform is fast, professional, and draws the right attention. My market value has increased significantly.", name: "Damian de J.", role: "GRAPPLING CHAMPION", initial: "D" }
      ],
      row2: [
        { text: "The sponsor integration modules immediately increased my income. This is not a website, it is an investment.", name: "Sarah K.", role: "MMA FIGHTER", initial: "S" },
        { text: "What a game-changer. Finally a website that reflects the professionalism I show on the mat.", name: "Jordy H.", role: "KICKBOXER", initial: "J" },
        { text: "Absolute top-tier strategy and execution. They listen to who you are as an athlete and design it to perfection.", name: "Esther R.", role: "BJJ COMPETITOR", initial: "E" }
      ]
    },
    pricing: {
      tag: 'Transparent Model',
      title: 'Investment in your Career.',
      cards: [
        { 
          title: "Foundation", 
          subtitle: "The perfect foundation for professional athletes.", 
          price: "€500", 
          period: "+ €50 /mo",
          features: ["Premium Custom Design", "Top-speed Performance", "Standard SEO", "Secure Maintenance & Hosting"],
          cta: "Start Foundation"
        },
        { 
          badge: "Most Chosen",
          title: "Pro Athlete", 
          subtitle: "Includes Upsells",
          price: "Custom",
          period: "/ on request",
          features: ["Foundation Included", "Pro SEO & GEO Dominance", "Sponsor Integration Modules", "Priority Support & Updates"],
          cta: "Maximize Visibility"
        },
        { 
          title: "Champion", 
          subtitle: "For the absolute top in sports.",
          price: "Custom",
          period: "/ on request",
          features: ["Everything in Pro Athlete", "Interactive Match Records", "Fully Custom Platform", "Dedicated Account Manager"],
          cta: "Become a Champion"
        }
      ]
    },
    faq: {
      tag: 'Knowledge Base',
      title: 'Frequently Asked Questions.',
      items: [
        { q: "Why a monthly fee for the Foundation?", a: "This is for secure hosting on premium servers, daily backups, technical updates, and continuous support so your website is always accessible, secure, and incredibly fast." },
        { q: "Is the 80s Synthwave theme your only style?", a: "Absolutely not. The 80s Synthwave aesthetic is just the theme of our current event. We design 100% custom, fully tailored to the unique identity of the athlete. Whether you want minimalist, modern, robust, or extremely creative: we build it." },
        { q: "How fast will my profile be online?", a: "The Foundation concept takes an average of 2 to 4 weeks. Profiles with complex add-ons (like dynamic match records or sponsor modules) take 4 to 6 weeks." },
        { q: "Do the integrations really help attract sponsors?", a: "Yes. Major brands and (potential) sponsors look for athletes with an exceptional, professional online presence and measurable ROI. With our premium integrations, you position yourself as an uncommonly safe and lucrative investment." }
      ]
    },
    contact: {
      tag: 'Connect',
      title: 'Ready to maximize your market value?',
      title1: 'Ready to',
      title2: 'maximize your',
      title3: 'market value?',
      desc: 'Get in touch and immediately discover what a premium digital profile can do for your (future) professional career opportunities and sponsorship deals.',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        goals: 'Your Goals / Career Information',
        goalsPlaceholder: 'Tell us about yourself and what you want to achieve...',
        cta: 'Send Request'
      }
    },
    footer: {
      desc: 'We create premium digital business cards for top athletes. Maximize your market value and attract major sponsors outbox.',
      expertise: 'Expertise',
      expertiseLinks: ['Custom Web Design', 'Sponsor Integrations', 'SEO & Dominance', 'Interactive Records'],
      company: 'Company',
      companyLinks: ['About Us', 'Portfolio', 'Investment', 'Contact'],
      legal: 'Legal',
      legalLinks: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    },
    seo: {
      title: 'LV Media | Premium Web Design & Digital Strategy',
      desc: 'LV Media builds digital experiences that perform. Strengthen your brand with high-end web design, application development, and results-driven SEO strategies.'
    }
  },
  FR: {
    nav: {
      addons: 'Extensions',
      portfolio: 'Portfolio',
      pricing: 'Investissement',
      contact: 'Contact',
      cta: 'Maximisez Votre Valeur'
    },
    hero: {
      tag: 'Exclusif Pour Athlètes',
      titlePrimary: 'Maximisez votre valeur',
      titleSecondary: 'attirez des sponsors.',
      desc: 'Nous fournissons un web design 100% sur mesure, magnifiquement conçu pour correspondre à votre identité unique. Impressionnez avec une plateforme premium qui augmente directement votre valeur professionnelle.',
      ctaPrimary: 'Démarrez Votre Projet',
      ctaSecondary: 'Voir le Portfolio'
    },
    marqueeItems: [
      "Web Design 100% Sur Mesure",
      "Modules d'Intégration Sponsor",
      "Archives de Match Interactives",
      "Domination Pro SEO & GEO",
      "Performance Ultra-Rapide",
      "Identité d'Athlète Unique"
    ],
    expertise: {
      tag: 'Extensions Premium',
      titleTop: 'Investissements pour un impact',
      titleBottom: 'direct sur les sponsors.',
      scrollHint: 'Défilez pour découvrir',
      cards: [
        { title: "Web Design 100% Sur Mesure", desc: "Chaque profil est entièrement construit sur mesure. Adapté à votre identité, style et marque uniques. Zéro template, uniquement du design premium.", list: ["Identité Unique", "Performance Rapide", "Allure Premium"] },
        { title: "Domination Pro SEO & GEO", desc: "Augmentez votre valeur sur le marché local et international avec une stratégie SEO en béton. Soyez trouvé en tête par les fans et les sponsors.", list: ["Domination Locale", "Visibilité Internationale", "Trafic Accru"] },
        { title: "Modules d'Intégration Sponsor", desc: "Maximisez le ROI pour vos partenaires avec des espaces publicitaires dynamiques bien en vue. Attirez directement des contrats de sponsoring plus importants.", list: ["Bannières Dynamiques", "Appels à l'Action", "ROI Direct"] },
        { title: "Archives de Match Interactives", desc: "Laissez vos victoires et statistiques s'exprimer via des archives dynamiques et impressionnantes plutôt que de simples listes statiques.", list: ["Données Visuelles", "Chronologie de Carrière", "Mises à Jour en Direct"] }
      ]
    },
    work: {
      tag: 'Référence Phare',
      titlePrimary: 'Notre Fleuron :',
      titleSecondary: 'Plateforme BJJ Internationale',
      desc: 'En tant que partenaire site web officiel, nous avons développé une plateforme haut de gamme qui connecte les athlètes internationaux, les sponsors et les fans. Ultra-rapide, optimisée SEO et conçue pour une conversion maximale.',
      cta: 'Voir le Cas en Direct'
    },
    stats: {
      projects: 'Projets Terminés',
      satisfaction: 'Satisfaction',
      experience: 'Années d\'Expérience'
    },
    team: {
      tag: 'Poussé par l\'Expertise',
      title: 'Dirigé par des professionnels.',
    },
    testimonials: {
      tag: 'Ce Que Disent Les Athlètes',
      title: 'Expériences',
      desc: 'Lisez comment nous propulsons les carrières professionnelles des athlètes au niveau supérieur.',
      row1: [
        { text: "Ma marque en ligne était dépassée. LVmedia a directement ajouté de la valeur. Les demandes de sponsoring ont doublé depuis le lancement.", name: "Alex V.", role: "CEINTURE NOIRE BJJ", initial: "A" },
        { text: "Une qualité et un design sans précédent. Ils ont compris exactement comment mon profil de combattant unique devait être traduit sur le web.", name: "Marcos S.", role: "COMBATTANT PROFESSIONNEL", initial: "M" },
        { text: "La plateforme est rapide, professionnelle et attire la bonne attention. Ma valeur sur le marché a considérablement augmenté.", name: "Damian de J.", role: "CHAMPION DE GRAPPLING", initial: "D" }
      ],
      row2: [
        { text: "Les modules d'intégration de sponsors ont immédiatement augmenté mes revenus. Ce n'est pas un site web, c'est un investissement.", name: "Sarah K.", role: "COMBATTANTE MMA", initial: "S" },
        { text: "Un véritable tournant. Enfin un site web qui reflète le professionnalisme que je montre sur le tatami.", name: "Jordy H.", role: "KICKBOXEUR", initial: "J" },
        { text: "Stratégie et exécution de très haut niveau. Ils écoutent qui vous êtes en tant qu'athlète et le conçoivent à la perfection.", name: "Esther R.", role: "COMPÉTITRICE BJJ", initial: "E" }
      ]
    },
    pricing: {
      tag: 'Modèle Transparent',
      title: 'Investissement dans votre Carrière.',
      cards: [
        { 
          title: "Foundation", 
          subtitle: "La base parfaite pour les athlètes professionnels.", 
          price: "500 €", 
          period: "+ 50 € /mois",
          features: ["Design Custom Premium", "Performance Ultra-rapide", "SEO Standard", "Maintenance & Hébergement Sécurisés"],
          cta: "Démarrer Foundation"
        },
        { 
          badge: "Le Plus Choisi",
          title: "Pro Athlete", 
          subtitle: "Options Incluses",
          price: "Sur Mesure",
          period: "/ sur demande",
          features: ["Foundation Inclus", "Domination Pro SEO & GEO", "Modules Intégration Sponsor", "Support Prioritaire & Mises à Jour"],
          cta: "Maximiser la Visibilité"
        },
        { 
          title: "Champion", 
          subtitle: "Pour le sommet absolu du sport.",
          price: "Sur Mesure",
          period: "/ sur demande",
          features: ["Tout dans Pro Athlete", "Records de Match Interactifs", "Plateforme 100% Sur Mesure", "Gestionnaire de Compte Dédié"],
          cta: "Devenir un Champion"
        }
      ]
    },
    faq: {
      tag: 'Base de Connaissances',
      title: 'Questions Fréquentes.',
      items: [
        { q: "Pourquoi un forfait mensuel pour Foundation ?", a: "C'est pour un hébergement sécurisé sur des serveurs premium, des sauvegardes quotidiennes, des mises à jour techniques et un support continu afin que votre site web soit toujours accessible, sécurisé et incroyablement rapide." },
        { q: "Le thème 80s Synthwave est-il votre seul style ?", a: "Absolument pas. L'esthétique 80s Synthwave est simplement le thème de notre événement actuel. Nous créons du 100% sur mesure, parfaitement adapté à l'identité unique de l'athlète. Que vous recherchiez quelque chose de minimaliste, moderne, robuste ou extrêmement créatif : nous le construisons." },
        { q: "À quelle vitesse mon profil sera-t-il en ligne ?", a: "Le concept Foundation prend en moyenne 2 à 4 semaines. Les profils avec des modules complexes (comme les archives de matchs dynamiques ou les modules sponsors) prennent 4 à 6 semaines." },
        { q: "Les intégrations aident-elles vraiment à attirer des sponsors ?", a: "Oui. Les grandes marques et sponsors (potentiels) recherchent des athlètes avec une présence en ligne exceptionnelle et un ROI mesurable. Avec nos intégrations premium, vous vous positionnez comme un investissement extrêmement sûr et lucratif." }
      ]
    },
    contact: {
      tag: 'Connecter',
      title: 'Prêt à maximiser votre valeur sur le marché ?',
      title1: 'Prêt à',
      title2: 'maximiser votre',
      title3: 'valeur ?',
      desc: 'Prenez contact et découvrez immédiatement ce qu\'un profil digital premium peut faire pour vos opportunités de carrière professionnelle et vos contrats de sponsoring.',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse E-mail',
        goals: 'Vos Objectifs / Informations de Carrière',
        goalsPlaceholder: 'Parlez-nous de vous et de ce que vous souhaitez accomplir...',
        cta: 'Envoyer la Demande'
      }
    },
    footer: {
      desc: 'Nous créons des cartes de visite numériques premium pour les athlètes de haut niveau. Maximisez votre valeur sur le marché et attirez de grands sponsors.',
      expertise: 'Expertise',
      expertiseLinks: ['Web Design Custom', 'Intégrations Sponsor', 'SEO & Domination', 'Archives Interactives'],
      company: 'Entreprise',
      companyLinks: ['À Propos', 'Portfolio', 'Investissement', 'Contact'],
      legal: 'Légal',
      legalLinks: ['Politique de Confidentialité', 'Conditions d\'Utilisation', 'Politique des Cookies']
    },
    seo: {
      title: 'LV Media | Web Design Premium & Stratégie Digitale',
      desc: 'LV Media crée des expériences numériques performantes. Renforcez votre marque avec un web design haut de gamme, le développement d\'applications et des stratégies SEO axées sur les résultats.'
    }
  },
  DE: {
    nav: {
      addons: 'Zusatzmodule',
      portfolio: 'Portfolio',
      pricing: 'Investition',
      contact: 'Kontakt',
      cta: 'Wert Maximieren'
    },
    hero: {
      tag: 'Exklusiv Für Athleten',
      titlePrimary: 'Maximiere deinen Marktwert',
      titleSecondary: 'ziehe Sponsoren an.',
      desc: 'Wir liefern 100% maßgeschneidertes Webdesign, das perfekt zu deiner einzigartigen Identität passt. Beeindrucke mit einer Premium-Plattform, die deinen professionellen Wert direkt steigert.',
      ctaPrimary: 'Projekt Starten',
      ctaSecondary: 'Portfolio Ansehen'
    },
    marqueeItems: [
      "100% Custom Webdesign",
      "Sponsor-Integrationsmodule",
      "Interaktive Kampfbilanzen",
      "Pro SEO & GEO Dominanz",
      "Top-Speed Performance",
      "Einzigartige Athleten-Identität"
    ],
    expertise: {
      tag: 'Premium Zusatzmodule',
      titleTop: 'Investitionen für direkten Einfluss',
      titleBottom: 'auf Sponsorenverträge.',
      scrollHint: 'Scrollen zum Entdecken',
      cards: [
        { title: "100% Custom Webdesign", desc: "Jedes Profil wird komplett maßgeschneidert. Abgestimmt auf deine einzigartige Identität, deinen Stil und deine Marke. Keine Templates, nur Premium-Design.", list: ["Einzigartige Identität", "Schnelle Performance", "Premium Look"] },
        { title: "Pro SEO & GEO Dominanz", desc: "Steigere deinen Marktwert lokal und international mit einem soliden SEO-Fundament. Werde von Fans und Sponsoren an der Spitze gefunden.", list: ["Lokale Dominanz", "Internationale Sichtbarkeit", "Mehr Traffic"] },
        { title: "Sponsor-Integrationsmodule", desc: "Maximiere deinen ROI für Partner mit prominenten, dynamischen Werbeflächen. Ziehe sofort größere und professionellere Sponsorenverträge an.", list: ["Dynamische Banner", "Call-To-Actions", "Direkter ROI"] },
        { title: "Interaktive Kampfbilanzen", desc: "Lass deine Siege und Statistiken durch beeindruckende, dynamische Archive sprechen, anstatt durch statische Listen.", list: ["Visuelle Daten", "Karriere-Zeitstrahl", "Live-Updates"] }
      ]
    },
    work: {
      tag: 'Flaggschiff-Referenz',
      titlePrimary: 'Unser Flaggschiff:',
      titleSecondary: 'Internationale BJJ Plattform',
      desc: 'Als offizieller Website-Partner haben wir eine High-End-Plattform entwickelt, die internationale Athleten, Sponsoren und Fans verbindet. Blitzschnell, SEO-optimiert und auf maximale Konversion ausgelegt.',
      cta: 'Live Case Ansehen'
    },
    stats: {
      projects: 'Abgeschlossene Projekte',
      satisfaction: 'Zufriedenheit',
      experience: 'Jahre Erfahrung'
    },
    team: {
      tag: 'Getrieben von Expertise',
      title: 'Gehührt von Profis.',
    },
    testimonials: {
      tag: 'Was Athleten Sagen',
      title: 'Erfahrungen',
      desc: 'Lies, wie wir die professionellen Karrieren von Athleten auf das nächste Level heben.',
      row1: [
        { text: "Meine Online-Marke war veraltet. LVmedia hat sofortigen Wert geschaffen. Sponsorenanfragen haben sich seit dem Start verdoppelt.", name: "Alex V.", role: "BJJ SCHWARZGURT", initial: "A" },
        { text: "Beispiellose Qualität und Design. Sie verstanden genau, wie mein einzigartiges Kämpferprofil ins Web übertragen werden musste.", name: "Marcos S.", role: "PROFESSIONELLER KÄMPFER", initial: "M" },
        { text: "Die Plattform ist schnell, professionell und zieht die richtige Aufmerksamkeit auf sich. Mein Marktwert ist erheblich gestiegen.", name: "Damian de J.", role: "GRAPPLING CHAMPION", initial: "D" }
      ],
      row2: [
        { text: "Die Sponsoren-Integrationsmodule haben mein Einkommen sofort gesteigert. Dies ist keine Website, es ist eine Investition.", name: "Sarah K.", role: "MMA KÄMPFERIN", initial: "S" },
        { text: "Ein echter Game-Changer. Endlich eine Website, die die Professionalität widerspiegelt, die ich auf der Matte zeige.", name: "Jordy H.", role: "KICKBOXER", initial: "J" },
        { text: "Absolute Top-Tier-Strategie und Umsetzung. Sie hören zu, wer du als Athlet bist, und gestalten dies in Perfektion.", name: "Esther R.", role: "BJJ WETTKÄMPFERIN", initial: "E" }
      ]
    },
    pricing: {
      tag: 'Transparents Modell',
      title: 'Investition in deine Karriere.',
      cards: [
        { 
          title: "Foundation", 
          subtitle: "Die perfekte Basis für professionelle Athleten.", 
          price: "500 €", 
          period: "+ 50 € /mtl",
          features: ["Premium Custom Design", "Top-Speed Performance", "Standard SEO", "Sichere Wartung & Hosting"],
          cta: "Foundation Starten"
        },
        { 
          badge: "Am Meisten Gewählt",
          title: "Pro Athlete", 
          subtitle: "Inklusive Upsells",
          price: "Maßarbeit",
          period: "/ auf Anfrage",
          features: ["Foundation Inklusive", "Pro SEO & GEO Dominanz", "Sponsor Integrationsmodule", "Priority Support & Updates"],
          cta: "Sichtbarkeit Maximieren"
        },
        { 
          title: "Champion", 
          subtitle: "Für die absolute Spitze im Sport.",
          price: "Maßarbeit",
          period: "/ auf Anfrage",
          features: ["Alles aus Pro Athlete", "Interaktive Kampfbilanzen", "Komplett Individuelle Plattform", "Dedizierter Account Manager"],
          cta: "Werde ein Champion"
        }
      ]
    },
    faq: {
      tag: 'Wissensdatenbank',
      title: 'Häufig Gestellte Fragen.',
      items: [
        { q: "Warum eine monatliche Gebühr für die Foundation?", a: "Dies ist für sicheres Hosting auf Premium-Servern, tägliche Backups, technische Updates und kontinuierlichen Support, damit deine Website immer erreichbar, sicher und extrem schnell ist." },
        { q: "Ist das 80er Synthwave-Thema euer einziger Stil?", a: "Absolut nicht. Die 80er Synthwave-Ästhetik ist lediglich das Thema unseres aktuellen Events. Wir designen 100% individuell, komplett auf die einzigartige Identität des Athleten abgestimmt. Ob du es minimalistisch, modern, robust oder extrem kreativ suchst: wir bauen es." },
        { q: "Wie schnell ist mein Profil online?", a: "Das Foundation-Konzept dauert im Durchschnitt 2 bis 4 Wochen. Profile mit komplexen Zusatzmodulen (wie dynamische Kampfbilanzen oder Sponsorenmodule) benötigen 4 bis 6 Wochen." },
        { q: "Helfen die Integrationen wirklich, Sponsoren anzuziehen?", a: "Ja. Große Marken und (potenzielle) Sponsoren suchen nach Athleten mit einer außergewöhnlichen, professionellen Online-Präsenz und messbarem ROI. Mit unseren Premium-Integrationen positionierst du dich als eine äußerst sichere und lukrative Investition." }
      ]
    },
    contact: {
      tag: 'Verbinden',
      title: 'Bereit, deinen Marktwert zu maximieren?',
      title1: 'Bereit, deinen',
      title2: 'Marktwert zu',
      title3: 'maximieren?',
      desc: 'Nimm Kontakt auf und entdecke sofort, was ein Premium-Digitalprofil für deine (weiteren) professionellen Karrierechancen und Sponsorenverträge bedeuten kann.',
      form: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        goals: 'Deine Ziele / Karriere-Informationen',
        goalsPlaceholder: 'Erzähle uns von dir und was du erreichen möchtest...',
        cta: 'Anfrage Senden'
      }
    },
    footer: {
      desc: 'Wir erstellen Premium-Digital-Visitenkarten für Spitzenathleten. Maximiere deinen Marktwert und ziehe mühelos große Sponsoren an.',
      expertise: 'Expertise',
      expertiseLinks: ['Custom Webdesign', 'Sponsoren-Integrationen', 'SEO & Dominanz', 'Interaktive Bilanzen'],
      company: 'Unternehmen',
      companyLinks: ['Über Uns', 'Portfolio', 'Investition', 'Kontakt'],
      legal: 'Rechtliches',
      legalLinks: ['Datenschutzerklärung', 'Nutzungsbedingungen', 'Cookie-Richtlinie']
    },
    seo: {
      title: 'LV Media | Premium Webdesign & Digitale Strategie',
      desc: 'LV Media baut digitale Erlebnisse, die konvertieren. Stärke deine Marke mit High-End-Webdesign, Anwendungsentwicklung und ergebnisorientierten SEO-Strategien.'
    }
  }
};
