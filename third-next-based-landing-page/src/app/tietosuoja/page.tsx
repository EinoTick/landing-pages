import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Tietosuojaseloste",
  description:
    "Tietosuojaseloste: miten yhteystietolomakkeen tiedot käsitellään ja mitä oikeuksia sinulla on.",
  robots: { index: true, follow: true },
};

export default function TietosuojaPage() {
  return (
    <LegalPageLayout title="Tietosuojaseloste">
      <section className="space-y-4">
        <p className="text-sm text-white/50">
          Viimeksi päivitetty: {new Date().toLocaleDateString("fi-FI")}
        </p>
        <p>
          Tämä seloste kuvaa, miten käsittelen henkilötietoja, kun vierailet
          verkkosivustollani tai otat yhteyttä projektitarjousta varten
          yhteystietolomakkeen kautta.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          1. Rekisterinpitäjä
        </h2>
        <p>
          Rekisterinpitäjä on allekirjoittanut freelancer- ja ohjelmistokehityspalveluja
          tarjoava henkilö:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>
            <strong className="text-white/90">Nimi:</strong> Eino
          </li>
          <li>
            <strong className="text-white/90">Sähköposti:</strong>{" "}
            <a
              href="mailto:eino.developer@gmail.com"
              className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
            >
              eino.developer@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          2. Mitä tietoja kerätään
        </h2>
        <p>
          Kerään vain tiedot, jotka annat itse yhteystietolomakkeella:
        </p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>nimi</li>
          <li>sähköpostiosoite</li>
          <li>yrityksen tai projektin nimi (valinnainen)</li>
          <li>budjettiarvio (valinnainen)</li>
          <li>viestin / projektikuvauksen sisältö</li>
        </ul>
        <p>
          Lisäksi palveluntarjoaja voi kerätä teknisiä lokitietoja (esim. IP-osoite,
          selain, vierailuaika), kun sivustoa tai lomaketta käytetään. En käytä
          markkinointievästeitä tai analytiikkaa, ellei sitä erikseen mainita
          sivustolla.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          3. Käyttötarkoitukset ja oikeusperusteet
        </h2>
        <p>Käytän tietoja seuraaviin tarkoituksiin:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-white/40">
          <li>
            <strong className="text-white/90">Yhteydenottoihin vastaaminen</strong>{" "}
            — oikeusperuste: oikeutettu etu (liiketoimintayhteyden hoitaminen) tai
            sopimuksen valmistelu, kun pyydät tarjousta tai konsultaatiota.
          </li>
          <li>
            <strong className="text-white/90">Asiakassuhteen hoito</strong> — jos
            yhteistyö etenee, oikeusperuste voi olla sopimus tai sopimuksen
            valmistelu.
          </li>
          <li>
            <strong className="text-white/90">Palvelun turvallisuus ja toimivuus</strong>{" "}
            — tekniset lokit; oikeusperuste: oikeutettu etu.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          4. Tietojen säilytys
        </h2>
        <p>
          Säilytän yhteydenottoviestien tiedot niin kauan kuin on tarpeen
          yhteydenoton käsittelyyn ja mahdollisen asiakassuhteen hoitoon, yleensä
          enintään <strong className="text-white/90">24 kuukautta</strong> viimeisestä
          yhteydenotosta, ellei lainsäädäntö tai sopimus vaadi pidempää säilytystä.
        </p>
        <p>
          Poistan tiedot aikaisemmin pyynnöstä, jos säilytykselle ei ole enää
          perustetta.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          5. Tietojen luovutus ja käsittelijät
        </h2>
        <p>
          En myy henkilötietojasi. Luovutan tietoja vain palveluntarjoajille, jotka
          auttavat sivuston ja lomakkeen toiminnassa:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-white/40">
          <li>
            <strong className="text-white/90">Netlify, Inc.</strong> — sivuston
            hosting ja yhteystietolomakkeen käsittely (Netlify Forms). Tiedot voivat
            käsitellä palvelimia EU:n ulkopuolella; palveluntarjoaja noudattaa
            tietosuojaan liittyviä sopimusvelvoitteita.
          </li>
        </ul>
        <p>
          Lomakkeen lähetykset näkyvät Netlifyn hallintapaneelissa ja sähköposti-ilmoituksina,
          jos olen ottanut ne käyttöön.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          6. Tietojen siirrot EU/ETA-alueen ulkopuolelle
        </h2>
        <p>
          Jos henkilötietoja siirretään EU/ETA-alueen ulkopuolelle (esim. Yhdysvalloissa
          sijaitseville palvelimille), siirto perustuu palveluntarjoajan tarjoamiin
          suojatoimiin, kuten EU:n komission vakiosopimuslausekkeisiin tai muuhun
          lainmukaiseen mekanismiin.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          7. Oikeutesi
        </h2>
        <p>EU:n tietosuoja-asetuksen (GDPR) mukaisesti sinulla on oikeus:</p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>saada pääsy omiin tietoihisi</li>
          <li>pyytää tietojen oikaisua tai poistamista</li>
          <li>rajoittaa käsittelyä tai vastustaa käsittelyä tietyissä tilanteissa</li>
          <li>siirtää tiedot järjestelmästä toiseen, jos käsittely perustuu suostumukseen tai sopimukseen ja tapahtuu automaattisesti</li>
          <li>peruuttaa suostumus, jos käsittely perustuu suostumukseen</li>
          <li>tehdä valitus valvontaviranomaiselle</li>
        </ul>
        <p>
          Voit käyttää oikeuksiasi lähettämällä pyynnön sähköpostitse:{" "}
          <a
            href="mailto:eino.developer@gmail.com"
            className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
          >
            eino.developer@gmail.com
          </a>
          . Vastaan pyyntöihin yleensä kuukauden kuluessa.
        </p>
        <p>
          Valitusviranomainen Suomessa:{" "}
          <a
            href="https://tietosuoja.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
          >
            Tietosuojavaltuutetun toimisto (tietosuoja.fi)
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          8. Tietoturva
        </h2>
        <p>
          Suojaan tietoja asianmukaisilla teknisillä ja organisatorisilla toimenpiteillä,
          kuten salatulla yhteydellä (HTTPS), pääsyn rajoituksella ja luotettavien
          palveluntarjoajien käytöllä. Mikään järjestelmä ei ole täysin riskitön.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          9. Muutokset tähän selosteeseen
        </h2>
        <p>
          Päivitän selostetta tarvittaessa (esim. uudet palvelut tai lomakkeet).
          Merkittävistä muutoksista voidaan ilmoittaa sivustolla. Suosittelen tarkistamaan
          selosteen aika ajoin.
        </p>
      </section>
    </LegalPageLayout>
  );
}
