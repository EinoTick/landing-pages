import type { HomeContent } from "./types";

export const fiHomeContent: HomeContent = {
  hero: {
    titleLine1: "Tuotantovalmiit verkkosovellukset",
    titleLine2: "ja räätälöidyt alustat.",
    badge: "Ilmainen demo ensin — täysin riskitön",
    subtitle:
      "Senior-tason kehitystä SaaS-MVP:ille ja monimutkaisille sisäisille työkaluille—koko pinon haltuun ottava yksi insinööri.",
    description:
      "Rakennan sinulle ilmaisen demon ennen sopimusta. Näe lähestymistapa, testaa sopivuus ja poistu jos ei tunnu oikealta—nolla kustannuksia, nolla painetta.",
    primaryCta: "Pyydä ilmainen demo",
    secondaryCta: "Katso viimeisimmät työt",
  },
  techStack: {
    eyebrow: "Pinon, jolla toimitan",
    title: "Moderni, tyypitetty ja todistettu tuotannossa",
    items: ["React", "Next.js", "Angular", "Vue", "Node.js", "FastAPI"],
  },
  fullStackCard: {
    title: "Full-stack-osaaminen",
    description:
      "Hoidan koko pinon—frontend, API, tietokanta ja julkaisu.",
    badges: ["React", "Node.js", "FastAPI"],
    bullets: [
      "SaaS-MVP:t, jotka on rakennettu julkaistavaksi—ei esittelyä varten",
      "Räätälöidyt sisäiset työkalut ja monimutkaiset työnkulkualustat",
      "Tyypitetyt API:t ja selkeä, skaalautuva backend-arkkitehtuuri",
    ],
  },
  devOpsCard: {
    title: "DevOps ja putket",
    description: "Automatisoidut CI/CD-työnkulut",
    pipelineLabels: {
      gitCommit: "Git-commit",
      docker: "Docker",
      production: "Tuotanto",
    },
  },
  testingCard: {
    title: "Testaus ja luotettavuus",
    description: "Kattava testikattavuus",
    items: [
      "Vitest-yksikkötestit",
      "Cypress E2E -testit",
      "Tyyppiturva TypeScriptillä",
    ],
  },
  performanceCard: {
    title: "Suorituskyky",
    description: "Optimoitu nopeudelle ja skaalalle",
    loadTimeLabel: "Latausaika",
    loadTimeValue: "< 1 s",
    lighthouseLabel: "Lighthouse-pisteet",
    lighthouseValue: "98+",
    footerNote: "Koodin pilkkominen ja laiska lataus",
  },
  recentWork: {
    title: "Viimeisimmät työt",
    subtitle:
      "Valikoima monimutkaisia projekteja ja avoimen lähdekoodin panoksia. Täydet case studyt tulossa pian.",
    previewLabel: "Esikatselu tulossa pian",
    caseStudies: [
      {
        tag: "SaaS-MVP",
        title: "Projekti tulossa pian",
        description:
          "Tuore kokonaisvaltainen toteutus—autentikoinnista ja laskutuksesta taustatyöhön. Yksityiskohtainen kuvaus tulossa pian.",
        stack: ["Next.js", "FastAPI", "Postgres"],
      },
      {
        tag: "Sisäinen työkalu",
        title: "Projekti tulossa pian",
        description:
          "Räätälöity sisäinen alusta, joka korvasi taulukkolaskentasotkun. Case study mittareineen tulossa.",
        stack: ["React", "Vue", "Celery"],
      },
      {
        tag: "Avoin lähdekoodi",
        title: "Projekti tulossa pian",
        description:
          "Valitut avoimen lähdekoodin panokset ja ylläpitämäni työkalut. Repolinkit ja kohokohdat tulossa pian.",
        stack: ["TypeScript", "Node.js"],
      },
    ],
  },
  whyUs: {
    title: "Miksi työskennellä kanssani",
    subtitle:
      "Keskittynyt, senior-tason vaihtoehto toimistoille—ilmainen demo etukäteen, jotta voit arvioida sopivuuden ennen kuin käytät rahaa.",
    reasons: [
      {
        title: "Työskentelet suoraan kanssani",
        description:
          "Ei asiakasvastaavia, ei juniorien välitystä. Saat senior-insinöörin, joka kirjoittaa arkkitehtuurin, koodin ja julkaisuskriptit—sama henkilö alusta loppuun.",
      },
      {
        title: "Aloita ilmaisella demolla",
        description:
          "Ei epämääräisiä tarjouksia tai suuria ennakkomaksuja—rakennan ensin oikean demon ydideoistasi. Tykkäät? Sovimme koko toteutuksen. Et? Voit lähteä veloituksetta.",
      },
      {
        title: "Testattu, tyypitetty, ylläpidettävä",
        description:
          "TypeScript, Vitest ja Playwright ovat vakioita. Saat koodipohjan, jota on turvallista muuttaa, helppo laajentaa ja valmis luovutettavaksi tulevalle tiimillesi.",
      },
      {
        title: "Rehellinen, asynkroninen viestintä",
        description:
          "Selkeät rajaukset, realistiset aikataulut ja viikoittaiset kirjalliset päivitykset. Ei statuspalavereita, ei epämääräisiä arvioita—vain näkyvää, tasaista edistymistä.",
      },
    ],
  },
  pricing: {
    title: "Yhteistyömallit",
    subtitle:
      "Jokainen yhteistyö alkaa ilmaisesta demosta. Siirry maksulliseen toteutukseen vain kun olet varma, että se on oikea valinta.",
    featuredBadge: "Aloita tästä",
    plans: [
      {
        name: "Ilmainen demo",
        description:
          "Kohdennettu, toimiva demo ideastasi—rakennettu ennen sopimusta tai laskua.",
        price: "0 €",
        features: [
          "Rajattu ydinkäyttötapaukseesi",
          "Klikattava prototyyppi arvioitavaksi",
          "Rehellinen sopivuusarvio jälkeenpäin",
          "Voit poistua milloin tahansa — ei sitoumuksia",
        ],
        cta: "Pyydä ilmainen demo",
        featured: true,
      },
      {
        name: "SaaS-MVP-toteutus",
        description:
          "Onnistuneen demon jälkeen: vie tuotteesi määrittelystä julkaistuun, maksavia asiakkaita palvelevaan SaaS:iin 6–10 viikossa.",
        price: "8 000 €+",
        features: [
          "Arkkitehtuurisuunnittelu",
          "Tietokantasuunnittelu",
          "Autentikointi",
          "API-integraatiot",
          "4 viikon julkaisun jälkeinen bugikorjaus",
        ],
        cta: "Keskustele koko toteutuksesta",
      },
      {
        name: "Räätälöity alusta",
        description:
          "Raskaampaa engineering-työtä lähestymistavan todistamisen jälkeen: monimutkaiset tuotteet, sisäiset työkalut ja migraatiot.",
        price: "Räätälöity",
        features: [
          "Monimutkaiset työnkulut",
          "Sisäiset työkalut",
          "Vanhan koodipohjan refaktorointi",
          "Headless-kauppamigraatiot",
        ],
        cta: "Keskustele laajuudesta",
      },
      {
        name: "Kuukausittainen ylläpito ja retainer",
        description:
          "Aina käytettävissä oleva senior-insinööri tiimissäsi—ilman kokopäiväistä palkkausta.",
        price: "1 500 €/kk",
        features: [
          "Taattu asynkroninen saatavuus",
          "Tietoturvapäivitykset",
          "Suorituskyvyn seuranta",
          "Jatkuva ominaisuuskehitys",
        ],
        cta: "Tarkista saatavuus",
        note: "Rajoitettu 3 jatkuvaan asiakkaaseen.",
      },
    ],
  },
  about: {
    eyebrow: "Tietoa",
    introBeforeName: "Hei, olen",
    name: "Eino",
    bioAfterName:
      ". Olen senior-insinööri, joka jätti toimistomaailman rakentaakseen suorituskykyistä ohjelmistoa suoraan perustajille. Aloitan ilmaisella demolla, jotta näet työni ennen sitoutumista—hoidan arkkitehtuurin, koodin ja julkaisut.",
  },
  contact: {
    eyebrow: "Yhteystiedot",
    heading: "Pyydä ilmainen demo",
    description:
      "Kerro mitä olet rakentamassa. Jos se sopii hyvin, teen ilmaisen demon—ei sopimusta eikä kustannuksia. Ei oikea match? Kerron sen suoraan.",
  },
  footer: {
    navLinks: [
      { label: "Palvelut", href: "#" },
      { label: "Työt", href: "#work" },
      { label: "Hinnoittelu", href: "#pricing" },
      { label: "Tietoa", href: "#about" },
      { label: "Yhteystiedot", href: "#contact" },
    ],
    tagline: "SaaS-MVP:t, räätälöidyt alustat ja jatkuva engineering",
    privacyLabel: "Tietosuoja",
    copyrightRole: "Senior full-stack -insinööri",
  },
};
