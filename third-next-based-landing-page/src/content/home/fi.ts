import type { HomeContent } from "./types";

export const fiHomeContent: HomeContent = {
  hero: {
    titleLine1: "Tuotantovalmiit verkkosovellukset",
    titleLine2: "ja räätälöidyt alustat.",
    badge: "Ilmainen demo ensin — täysin riskitöntä",
    subtitle:
      "Senior-tason ohjelmistokehitystä SaaS-MVP:ille ja vaativille sisäisille työkaluille—yksi insinööri, koko full stack.",
    description:
      "Rakennan ilmaisen demon ennen sopimusta. Näet lähestymistavan, testaat sopivuuden ja voit kieltäytyä jatkosta—ilman kustannuksia ja sitoumuksia.",
    primaryCta: "Pyydä ilmainen demo",
    secondaryCta: "Katso referenssit",
  },
  techStack: {
    eyebrow: "Teknologiat, joilla rakennan",
    title: "Moderni, tyypitetty ja tuotantokäytössä koeteltu",
    items: ["React", "Next.js", "Angular", "Vue", "Node.js", "FastAPI"],
  },
  fullStackCard: {
    title: "Full-stack-osaaminen",
    description:
      "Hoidan full stackin—käyttöliittymä, API, tietokanta ja julkaisu.",
    badges: ["React", "Node.js", "FastAPI"],
    bullets: [
      "SaaS-MVP:t, jotka on tehty julkaistaviksi—ei pelkkiä demoja",
      "Räätälöidyt sisäiset työkalut ja monimutkaiset workflow-alustat",
      "Tyypitetyt API:t ja selkeä, skaalautuva backend-arkkitehtuuri",
    ],
  },
  devOpsCard: {
    title: "DevOps ja CI/CD",
    description: "Automatisoitu julkaisu ja CI/CD-prosessit",
    pipelineLabels: {
      gitCommit: "Git-commit",
      docker: "Docker",
      production: "Tuotanto",
    },
  },
  testingCard: {
    title: "Testaus ja luotettavuus",
    description: "Kattava automaattinen testaus",
    items: [
      "Vitest-yksikkötestit",
      "Cypress E2E -testit",
      "TypeScript-tyypitys",
    ],
  },
  performanceCard: {
    title: "Suorituskyky",
    description: "Optimoitu nopeuteen ja skaalautuvuuteen",
    loadTimeLabel: "Latausaika",
    loadTimeValue: "< 1 s",
    lighthouseLabel: "Lighthouse-pisteet",
    lighthouseValue: "98+",
    footerNote: "Code splitting ja lazy loading",
  },
  recentWork: {
    title: "Viimeisimmät projektit",
    subtitle:
      "Valikoima vaativia toteutuksia ja avoimen lähdekoodin projekteja. Tarkemmat case studyt tulossa pian.",
    previewLabel: "Esikatselu tulossa",
    caseStudies: [
      {
        tag: "SaaS-MVP",
        title: "Projekti tulossa pian",
        description:
          "Tuore kokonaistoteutus—autentikoinnista ja laskutuksesta taustajärjestelmiin. Yksityiskohtainen esittely tulossa pian.",
        stack: ["Next.js", "FastAPI", "Postgres"],
      },
      {
        tag: "Sisäinen työkalu",
        title: "Projekti tulossa pian",
        description:
          "Räätälöity sisäinen alusta, joka korvasi Excel- ja sähköpostiketjut. Case study mittareineen tulossa.",
        stack: ["React", "Vue", "Celery"],
      },
      {
        tag: "Avoin lähdekoodi",
        title: "Projekti tulossa pian",
        description:
          "Valitut avoimen lähdekoodin panokset ja ylläpitämäni työkalut. Repolinkit ja kooste tulossa pian.",
        stack: ["TypeScript", "Node.js"],
      },
    ],
  },
  whyUs: {
    title: "Miksi valita minut?",
    subtitle:
      "Keskittynyt senior-vaihtoehto toimistoille—ilmainen demo etukäteen, jotta voit arvioida sopivuuden ennen investointia.",
    reasons: [
      {
        title: "Työskentelet suoraan kanssani",
        description:
          "Ei account managereita eikä juniorien välitystä. Sama senior-insinööri suunnittelee arkkitehtuurin, kirjoittaa koodin ja hoitaa julkaisut alusta loppuun.",
      },
      {
        title: "Aloita ilmaisella demolla",
        description:
          "Ei epämääräisiä tarjouksia eikä ennakkositoumuksia—rakennan ensin toimivan demon ydintoiminnallisuudesta. Sopii? Sovimme jatkosta. Ei sopiva? Voit kieltäytyä veloituksetta.",
      },
      {
        title: "Testattu, tyypitetty ja ylläpidettävä",
        description:
          "TypeScript, Vitest ja Playwright ovat vakioita. Saat koodipohjan, jota on turvallista muuttaa, helppo laajentaa ja valmis luovutettavaksi tulevalle tiimillesi.",
      },
      {
        title: "Selkeä ja rehellinen viestintä",
        description:
          "Tarkat rajaukset, realistiset aikataulut ja viikoittaiset kirjalliset päivitykset. Ei turhia statuspalavereita—näet edistymisen konkreettisesti.",
      },
    ],
  },
  pricing: {
    title: "Yhteistyömallit",
    subtitle:
      "Kaikki alkaa ilmaisesta demosta. Siirry maksulliseen toteutukseen vasta, kun olet varma valinnasta.",
    featuredBadge: "Aloita tästä",
    plans: [
      {
        name: "Ilmainen demo",
        description:
          "Kohdennettu, toimiva demo ideastasi—rakennettu ennen sopimusta tai laskutusta.",
        price: "0 €",
        features: [
          "Rajattu ydinkäyttötapaukseesi",
          "Klikattava prototyyppi arviointiin",
          "Rehellinen arvio sopivuudesta",
          "Voit kieltäytyä milloin tahansa—ei sitoumuksia",
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
          "4 viikon tuki julkaisun jälkeen",
        ],
        cta: "Keskustele koko toteutuksesta",
      },
      {
        name: "Räätälöity alusta",
        description:
          "Vaativampi ohjelmistokehitys demon jälkeen: monimutkaiset tuotteet, sisäiset työkalut ja migraatiot.",
        price: "Sopimuksen mukaan",
        features: [
          "Monimutkaiset workflowt",
          "Sisäiset työkalut",
          "Legacy-koodin refaktorointi",
          "Headless-kauppamigraatiot",
        ],
        cta: "Keskustele laajuudesta",
      },
      {
        name: "Kuukausittainen retainer",
        description:
          "Senior-insinööri jatkuvasti käytössä—ilman kokopäiväistä palkkausta.",
        price: "1 500 €/kk",
        features: [
          "Taattu saatavuus asynkroniseen yhteistyöhön",
          "Tietoturvapäivitykset",
          "Suorituskyvyn seuranta",
          "Jatkuva kehitys ja parannukset",
        ],
        cta: "Kysy saatavuutta",
        note: "Enintään 3 jatkuvaa asiakkuutta.",
      },
    ],
  },
  about: {
    eyebrow: "Tietoa minusta",
    introBeforeName: "Hei, olen",
    name: "Eino",
    bioAfterName:
      ", senior-insinööri, joka jätti toimistomaailman rakentaakseen suorituskykyistä ohjelmistoa suoraan perustajille. Aloitan ilmaisella demolla, jotta näet työn laadun ennen sitoutumista—hoidan arkkitehtuurin, toteutuksen ja julkaisut.",
  },
  contact: {
    eyebrow: "Yhteystiedot",
    heading: "Pyydä ilmainen demo",
    description:
      "Kerro mitä olet rakentamassa. Jos projekti sopii, teen ilmaisen demon—ei sopimusta eikä kustannuksia. Jos en ole oikea valinta, kerron sen suoraan.",
  },
  footer: {
    navLinks: [
      { label: "Palvelut", href: "#" },
      { label: "Referenssit", href: "#work" },
      { label: "Hinnoittelu", href: "#pricing" },
      { label: "Tietoa", href: "#about" },
      { label: "Yhteystiedot", href: "#contact" },
    ],
    tagline: "SaaS-MVP:t, räätälöidyt alustat ja jatkuva ohjelmistokehitys",
    privacyLabel: "Tietosuoja",
    copyrightRole: "Senior full-stack -insinööri",
  },
};
