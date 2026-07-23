import type { Locale } from "@/lib/site";

const EMAIL = "eino.developer@gmail.com";

type PrivacyPolicyContentProps = {
  locale: Locale;
};

export function PrivacyPolicyContent({ locale }: PrivacyPolicyContentProps) {
  if (locale === "fi") {
    return <PrivacyPolicyFi />;
  }

  return <PrivacyPolicyEn />;
}

function PrivacyPolicyFi() {
  return (
    <>
      <section className="space-y-4">
        <p className="text-sm text-white/50">
          Viimeksi päivitetty: 23.7.2026
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
          Rekisterinpitäjä on allekirjoittanut freelancer- ja
          ohjelmistokehityspalveluja tarjoava henkilö:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>
            <strong className="text-white/90">Nimi:</strong> Eino
          </li>
          <li>
            <strong className="text-white/90">Sähköposti:</strong>{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
            >
              {EMAIL}
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          2. Mitä tietoja kerätään
        </h2>
        <p>Kerään vain tiedot, jotka annat itse yhteystietolomakkeella:</p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>nimi</li>
          <li>sähköpostiosoite</li>
          <li>yrityksen tai projektin nimi (valinnainen)</li>
          <li>budjettiarvio (valinnainen)</li>
          <li>viestin / projektikuvauksen sisältö</li>
        </ul>
        <p>
          Lisäksi palveluntarjoaja voi kerätä teknisiä lokitietoja (esim.
          IP-osoite, selain, vierailuaika), kun sivustoa tai lomaketta
          käytetään. En käytä markkinointievästeitä tai analytiikkaa, ellei
          sitä erikseen mainita sivustolla.
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
            <strong className="text-white/90">
              Palvelun turvallisuus ja toimivuus
            </strong>{" "}
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
          yhteydenoton käsittelyyn ja mahdollisen asiakassuhteen hoitoon,
          yleensä enintään{" "}
          <strong className="text-white/90">24 kuukautta</strong> viimeisestä
          yhteydenotosta, ellei lainsäädäntö tai sopimus vaadi pidempää
          säilytystä.
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
          En myy henkilötietojasi. Luovutan tietoja vain palveluntarjoajille,
          jotka auttavat sivuston ja lomakkeen toiminnassa:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-white/40">
          <li>
            <strong className="text-white/90">Netlify, Inc.</strong> — sivuston
            hosting ja yhteystietolomakkeen käsittely (Netlify Forms). Tiedot
            voivat käsitellä palvelimia EU:n ulkopuolella; palveluntarjoaja
            noudattaa tietosuojaan liittyviä sopimusvelvoitteita.
          </li>
        </ul>
        <p>
          Lomakkeen lähetykset näkyvät Netlifyn hallintapaneelissa ja
          sähköposti-ilmoituksina, jos olen ottanut ne käyttöön.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          6. Tietojen siirrot EU/ETA-alueen ulkopuolelle
        </h2>
        <p>
          Jos henkilötietoja siirretään EU/ETA-alueen ulkopuolelle (esim.
          Yhdysvalloissa sijaitseville palvelimille), siirto perustuu
          palveluntarjoajan tarjoamiin suojatoimiin, kuten EU:n komission
          vakiosopimuslausekkeisiin tai muuhun lainmukaiseen mekanismiin.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">7. Oikeutesi</h2>
        <p>EU:n tietosuoja-asetuksen (GDPR) mukaisesti sinulla on oikeus:</p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>saada pääsy omiin tietoihisi</li>
          <li>pyytää tietojen oikaisua tai poistamista</li>
          <li>
            rajoittaa käsittelyä tai vastustaa käsittelyä tietyissä tilanteissa
          </li>
          <li>
            siirtää tiedot järjestelmästä toiseen, jos käsittely perustuu
            suostumukseen tai sopimukseen ja tapahtuu automaattisesti
          </li>
          <li>
            peruuttaa suostumus, jos käsittely perustuu suostumukseen
          </li>
          <li>tehdä valitus valvontaviranomaiselle</li>
        </ul>
        <p>
          Voit käyttää oikeuksiasi lähettämällä pyynnön sähköpostitse:{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
          >
            {EMAIL}
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
        <h2 className="text-xl font-semibold text-white">8. Tietoturva</h2>
        <p>
          Suojaan tietoja asianmukaisilla teknisillä ja organisatorisilla
          toimenpiteillä, kuten salatulla yhteydellä (HTTPS), pääsyn
          rajoituksella ja luotettavien palveluntarjoajien käytöllä. Mikään
          järjestelmä ei ole täysin riskitön.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          9. Muutokset tähän selosteeseen
        </h2>
        <p>
          Päivitän selostetta tarvittaessa (esim. uudet palvelut tai lomakkeet).
          Merkittävistä muutoksista voidaan ilmoittaa sivustolla. Suosittelen
          tarkistamaan selosteen aika ajoin.
        </p>
      </section>
    </>
  );
}

function PrivacyPolicyEn() {
  return (
    <>
      <section className="space-y-4">
        <p className="text-sm text-white/50">
          Last updated: 23 July 2026
        </p>
        <p>
          This notice describes how I process personal data when you visit my
          website or contact me via the contact form to request a project
          quote.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">1. Data controller</h2>
        <p>
          The data controller is the individual providing freelance and software
          development services:
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>
            <strong className="text-white/90">Name:</strong> Eino
          </li>
          <li>
            <strong className="text-white/90">Email:</strong>{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
            >
              {EMAIL}
            </a>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          2. What data is collected
        </h2>
        <p>I collect only the information you provide via the contact form:</p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>name</li>
          <li>email address</li>
          <li>company or project name (optional)</li>
          <li>budget estimate (optional)</li>
          <li>message / project description content</li>
        </ul>
        <p>
          In addition, the hosting provider may collect technical log data (e.g.
          IP address, browser, visit time) when the site or form is used. I do
          not use marketing cookies or analytics unless explicitly stated on the
          site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          3. Purposes and legal bases
        </h2>
        <p>I use the data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-white/40">
          <li>
            <strong className="text-white/90">Responding to enquiries</strong> —
            legal basis: legitimate interest (managing business contact) or
            contract preparation when you request a quote or consultation.
          </li>
          <li>
            <strong className="text-white/90">Managing client relationships</strong>{" "}
            — if collaboration proceeds, the legal basis may be contract or
            contract preparation.
          </li>
          <li>
            <strong className="text-white/90">Service security and reliability</strong>{" "}
            — technical logs; legal basis: legitimate interest.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">4. Data retention</h2>
        <p>
          I retain contact form data for as long as needed to handle the enquiry
          and any potential client relationship, generally for up to{" "}
          <strong className="text-white/90">24 months</strong> from the last
          contact, unless legislation or a contract requires longer retention.
        </p>
        <p>
          I delete data earlier upon request when there is no longer a basis for
          retention.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          5. Disclosure and processors
        </h2>
        <p>
          I do not sell your personal data. I disclose data only to service
          providers that help operate the site and contact form:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-white/40">
          <li>
            <strong className="text-white/90">Netlify, Inc.</strong> — site
            hosting and contact form processing (Netlify Forms). Data may be
            processed on servers outside the EU; the provider complies with
            data protection contractual obligations.
          </li>
        </ul>
        <p>
          Form submissions appear in the Netlify admin panel and as email
          notifications if I have enabled them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          6. Transfers outside the EU/EEA
        </h2>
        <p>
          If personal data is transferred outside the EU/EEA (e.g. to servers
          located in the United States), the transfer relies on safeguards
          provided by the service provider, such as the European Commission&apos;s
          standard contractual clauses or another lawful mechanism.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">7. Your rights</h2>
        <p>
          Under the EU General Data Protection Regulation (GDPR), you have the
          right to:
        </p>
        <ul className="list-disc pl-6 space-y-1 marker:text-white/40">
          <li>access your personal data</li>
          <li>request rectification or erasure</li>
          <li>restrict or object to processing in certain situations</li>
          <li>
            data portability where processing is based on consent or contract
            and carried out by automated means
          </li>
          <li>withdraw consent where processing is based on consent</li>
          <li>lodge a complaint with a supervisory authority</li>
        </ul>
        <p>
          You can exercise your rights by sending a request by email:{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
          >
            {EMAIL}
          </a>
          . I generally respond within one month.
        </p>
        <p>
          Supervisory authority in Finland:{" "}
          <a
            href="https://tietosuoja.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline-offset-2 hover:underline"
          >
            Office of the Data Protection Ombudsman (tietosuoja.fi)
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">8. Security</h2>
        <p>
          I protect data with appropriate technical and organisational measures,
          such as encrypted connections (HTTPS), access restrictions, and the
          use of trusted service providers. No system is completely risk-free.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">
          9. Changes to this notice
        </h2>
        <p>
          I update this notice when necessary (e.g. new services or forms).
          Significant changes may be announced on the site. I recommend checking
          this notice from time to time.
        </p>
      </section>
    </>
  );
}
