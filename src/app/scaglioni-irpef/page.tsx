import type { Metadata } from "next";
import Link from "next/link";
import { ArticlePageBody, ArticlePageLayout } from "@/components/layout/ArticlePageLayout";
import { IrpefFAQ } from "@/components/sections/IrpefFAQ";
import { IrpefPageHero } from "@/components/sections/IrpefPageHero";
import {
  HOME_SLUG,
  IRPEF_PAGE_FOCUS_KEYWORD,
  IRPEF_PAGE_META_DESCRIPTION,
  IRPEF_PAGE_META_TITLE,
  IRPEF_PAGE_SLUG,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const canonicalUrl = `${SITE_URL}${IRPEF_PAGE_SLUG}`;

export const metadata: Metadata = {
  title: {
    absolute: IRPEF_PAGE_META_TITLE,
  },
  description: IRPEF_PAGE_META_DESCRIPTION,
  keywords: [
    IRPEF_PAGE_FOCUS_KEYWORD,
    "aliquote IRPEF 2026",
    "scaglioni IRPEF 2025",
    "imposta sul reddito",
    "detrazioni IRPEF",
    "calcolo IRPEF",
    "riforma fiscale Italia",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    url: canonicalUrl,
    siteName: SITE_NAME,
    title: IRPEF_PAGE_META_TITLE,
    description: IRPEF_PAGE_META_DESCRIPTION,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: IRPEF_PAGE_META_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: IRPEF_PAGE_META_TITLE,
    description: IRPEF_PAGE_META_DESCRIPTION,
    images: ["/og-image.svg"],
  },
};

const BRACKET_ROWS = [
  { range: "Fino a 28.000 euro", rate: "23%" },
  { range: "Da 28.001 a 50.000 euro", rate: "33%" },
  { range: "Oltre 50.000 euro", rate: "43%" },
] as const;

const BRACKET_ROWS_2025 = [
  { range: "Fino a 28.000 euro", rate: "23%" },
  { range: "Da 28.001 a 50.000 euro", rate: "35%" },
  { range: "Oltre 50.000 euro", rate: "43%" },
] as const;

const BRACKET_ROWS_2024 = [
  { range: "Fino a 28.000 euro", rate: "23%" },
  { range: "Da 28.001 a 50.000 euro", rate: "35%" },
  { range: "Oltre 50.000 euro", rate: "43%" },
] as const;

const PROGRESSIVE_ROWS_2025 = [
  {
    band: "Fino a 28.000 euro",
    rate: "23%",
    income: "28.000 euro",
    taxCalc: "6.440 €",
    effectiveRate: "23,00%",
  },
  {
    band: "Da €28.001 a €50.000 (compresa la prima fascia)",
    rate: "35%",
    income: "€50.000",
    taxCalc: "€6.440 + €7.700 = €14.140",
    effectiveRate: "28,28%",
  },
  {
    band: "Oltre 50.000 euro",
    rate: "43%",
    income: "Oltre 50.000 euro",
    taxCalc: "6.440 € + 7.700 € + 43% × (Reddito − 50.000 €)",
    effectiveRate: "Variabile",
  },
] as const;

const BRACKET_ROWS_2022_FIVE = [
  { range: "Fino a 15.000 euro", rate: "23%" },
  { range: "Da 15.001 a 28.000 euro", rate: "27%" },
  { range: "Da 28.001 a 55.000 euro", rate: "38%" },
  { range: "Da 55.001 a 75.000 euro", rate: "41%" },
  { range: "Oltre 75.000 euro", rate: "43%" },
] as const;

const BRACKET_ROWS_2022_FOUR = [
  { range: "Fino a 15.000 euro", rate: "23%" },
  { range: "Da 15.001 a 28.000 euro", rate: "25%" },
  { range: "Da 28.001 a 50.000 euro", rate: "35%" },
  { range: "Oltre 50.000 euro", rate: "43%" },
] as const;

const BRACKET_ROWS_2023 = [
  { range: "Fino a 15.000 euro", rate: "23%" },
  { range: "Da 15.001 a 28.000 euro", rate: "25%" },
  { range: "Da 28.001 a 50.000 euro", rate: "35%" },
  { range: "Oltre 50.000 euro", rate: "43%" },
] as const;

function IrpefBracketTable({
  rows,
  incomeHeader = "Reddito imponibile annuo",
  rateHeader = "Aliquota fiscale",
}: {
  rows: readonly { range: string; rate: string }[];
  incomeHeader?: string;
  rateHeader?: string;
}) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>
            <th>{incomeHeader}</th>
            <th>{rateHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.range}>
              <td>{row.range}</td>
              <td>
                <strong>{row.rate}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ScaglioniIrpefPage() {
  return (
    <ArticlePageLayout>
      <IrpefPageHero />
      <ArticlePageBody>
        <h2>Tassazione Delle Persone Fisiche Residenti</h2>
        <p>
          Nel quadro del sistema imponibile fiscale italiano, le persone fisiche residenti ai
          fini fiscali sono generalmente soggette all&apos;Imposta sul reddito personale sul loro
          reddito mondiale. Ciò significa che il reddito guadagnato sia in Italia che
          all&apos;estero può essere tassabile in Italia, indipendentemente da dove sia stato
          generato.
        </p>
        <p>
          I dipendenti coperti da un CCNL (ccnl commercio) possono avere componenti salariali e
          indennità definite dal loro contratto collettivo, ma l&apos;IRPEF viene sempre calcolato
          sulla base del reddito imponibile secondo la normativa fiscale italiana. Una persona
          fisica è generalmente considerata residente fiscale in Italia se soddisfa almeno una
          delle seguenti condizioni per più di 183 giorni durante l&apos;anno fiscale (184 giorni
          negli anni bisestili):
        </p>
        <ul>
          <li>Sono iscritti nell&apos;anagrafe della popolazione italiana.</li>
          <li>La loro residenza abituale si trova in Italia.</li>
          <li>
            Il centro dei loro interessi vitali, dei loro legami personali o delle loro
            connessioni economiche si trova in Italia.
          </li>
          <li>
            Il loro domicilio, secondo la definizione del diritto civile, è stabilito in Italia.
          </li>
        </ul>
        <p>
          Per persone fisiche residenti ai fini fiscali l&apos;ambito di applicazione della
          tassazione si estende a varie categorie di reddito, tra cui:
        </p>
        <ul>
          <li>reddito da lavoro dipendente</li>
          <li>reddito da lavoro autonomo</li>
          <li>reddito d&apos;impresa</li>
          <li>reddito da investimenti</li>
          <li>reddito da locazione</li>
          <li>reddito di fonte estera</li>
          <li>guadagni di capitale</li>
          <li>reddito pensionistico</li>
        </ul>
        <p>
          Poiché l&apos;Italia utilizza un regime fiscale progressivo, i residenti sono tassati
          secondo gli scaglioni IRPEF applicabili. Oltre all&apos;imposta IRPEF nazionale, i
          residenti possono anche essere ritenuti responsabili per sovrattasse addizionale
          regionali e addizionale comunale, che variano a seconda della regione.
        </p>

        <h2>
          Chi è Considerato Non Residente Ai Fini Fiscali? Criteri e Obblighi Fiscali 2026
        </h2>
        <p>
          Si tratta di individui che non risiedono in Italia ma hanno flussi di reddito in Italia
          e generano reddito attraverso di essi. In questo modo, diventano responsabili del
          pagamento delle tasse. Una persona che non soddisfa i criteri di residenza fiscale
          italiana durante l&apos;anno fiscale è considerata non residente ai fini fiscali
          italiani. Ecco alcuni esempi di redditi di fonte italiana tassabili per queste persone:
        </p>
        <ul>
          <li>Reddito da lavoro dipendente percepito per attività svolta in Italia</li>
          <li>Reddito derivante dal settore immobiliare italiano</li>
          <li>Reddito d&apos;impresa generato da fonti in Italia</li>
          <li>Reddito generato da terreni situati in territorio italiano</li>
          <li>Plusvalenze soggette alle norme fiscali italiane</li>
        </ul>
        <p>
          Solo i redditi generati in Italia sono soggetti a tassazione, mentre quelli percepiti
          al di fuori dell&apos;Italia non lo sono. La tassazione si limita infatti alla parte di
          reddito connessa all&apos;Italia.
        </p>

        <h2>Aliquote Fiscali e Fasce Di Reddito IRPEF 2026</h2>
        <p>
          Nel 2026, il sistema fiscale italiano sul reddito delle persone fisiche continua ad
          operare secondo un modello di tassazione progressiva, il che significa che i redditi più
          elevati sono tassati con aliquote maggiori.
        </p>
        <p>
          Per il 2026, il governo italiano continua ad applicare una struttura a tre livelli per
          scaglioni IRPEF, che è stata introdotta nell&apos;ambito degli sforzi di riforma fiscale
          in corso nel paese. L&apos;obiettivo è semplificare il sistema fiscale italiano
          riducendo al contempo il carico tributario per i contribuenti a basso e medio reddito.
          Questi scaglioni di tassazione italiana determinano quanta imposta viene pagata su
          ciascuna parte del reddito imponibile anziché applicare un&apos;unica aliquota al totale
          dei guadagni.
        </p>

        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Reddito imponibile annuo</th>
                <th>Aliquota fiscale</th>
              </tr>
            </thead>
            <tbody>
              {BRACKET_ROWS.map((row) => (
                <tr key={row.range}>
                  <td>{row.range}</td>
                  <td>
                    <strong>{row.rate}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Le aliquote fiscali IRPEF in Italia per l&apos;anno 2026 sono pari al 23% fino a 28.000
          euro, il 33% da 28.001 a 50.000 euro e il 43% oltre i 50.000 euro.
        </p>

        <h2>Tariffe e Fasce Di Reddito Dell&apos;IRPEF a Partire Dal 2025</h2>
        <p>
          Gli scaglioni IRPEF 2025 hanno introdotto cambiamenti significativi all&apos;aliquota
          dell&apos;imposta sul reddito italiana attraverso recenti riforme fiscali. La riforma è
          stata concepita per fornire maggiori sgravi fiscali a dipendenti e pensionati.
        </p>
        <p>Gli scaglioni IRPEF applicabili nel 2025 sono i seguenti:</p>

        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Reddito imponibile annuo</th>
                <th>Aliquota IRPEF</th>
              </tr>
            </thead>
            <tbody>
              {BRACKET_ROWS_2025.map((row) => (
                <tr key={row.range}>
                  <td>{row.range}</td>
                  <td>
                    <strong>{row.rate}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Questo aggiustamento ha ridotto l&apos;effettivo onere dell&apos;imposta sul reddito
          personale per molti contribuenti a reddito medio in Italia.
        </p>

        <h3>Calcolo Progressivo Dell&apos;imposta Sul Reddito</h3>
        <p>Per l&apos;anno 2025, si applicano i seguenti tassi di progressione:</p>

        <div className="legal-table-wrap">
          <table className="legal-table legal-table--wide">
            <thead>
              <tr>
                <th>Fascia di reddito</th>
                <th>Aliquota fiscale (%)</th>
                <th>Reddito (€)</th>
                <th>Calcolo delle imposte (€)</th>
                <th>Aliquota fiscale effettiva (%)</th>
              </tr>
            </thead>
            <tbody>
              {PROGRESSIVE_ROWS_2025.map((row) => (
                <tr key={row.band}>
                  <td>{row.band}</td>
                  <td>
                    <strong>{row.rate}</strong>
                  </td>
                  <td>{row.income}</td>
                  <td>{row.taxCalc}</td>
                  <td>{row.effectiveRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Il &ldquo;trattamento integrativo&rdquo; per i redditi fino alla somma di 15.000 euro è
          stato preso in considerazione e richiesto anche per il 2025.
        </p>

        <h2>Tariffe e Fasce Di Reddito IRPEF per il 2024</h2>
        <p>
          Nell&apos;anno 2024, il governo ha attuato riforme secondo il decreto legge n. 216,
          progettato per ridurre la complessità e creare una struttura più raffinata per
          l&apos;imponibile fiscale in Italia.
        </p>
        <p>Le aliquote IRPEF 2024 erano le seguenti:</p>

        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Reddito imponibile annuo</th>
                <th>Aliquota fiscale</th>
              </tr>
            </thead>
            <tbody>
              {BRACKET_ROWS_2024.map((row) => (
                <tr key={row.range}>
                  <td>{row.range}</td>
                  <td>
                    <strong>{row.rate}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Rispetto agli anni precedenti, la modifica ha ridotto il numero di fasce di imposta e
          ampliato l&apos;ambito della fascia di imposta più bassa. Di conseguenza, molti
          contribuenti hanno sperimentato un&apos;aliquota effettiva inferiore. Aliquote fiscali in
          Italia, in particolare quelle appartenenti alla fascia di reddito media.
        </p>

        <h2>Tassi Storici Di IRPEF in Italia</h2>
        <p>
          Comprendere l&apos;evoluzione di aliquote fiscali fornisce una preziosa panoramica di
          come le aliquote fiscali italiane si sono sviluppate nel tempo.
        </p>

        <h3>Fino all&apos;anno 2022, 5 scaglioni di imposta</h3>
        <p>Per l&apos;anno 2022, i dettagli relativi alle aliquote fiscali sono i seguenti:</p>
        <IrpefBracketTable
          rows={BRACKET_ROWS_2022_FIVE}
          incomeHeader="Reddito annuo (€)"
          rateHeader="Aliquota fiscale (%)"
        />

        <h3>Scaglioni Di Imposta a Partire Dal 1° Gennaio 2022 (4 scaglioni)</h3>
        <IrpefBracketTable
          rows={BRACKET_ROWS_2022_FOUR}
          incomeHeader="Reddito annuo (€)"
          rateHeader="Aliquota fiscale (%)"
        />

        <h3>Fasce di Tassazione Per il 2023</h3>
        <p>Di seguito i dettagli relativi alle fasce di tassazione per l&apos;anno 2023:</p>
        <IrpefBracketTable
          rows={BRACKET_ROWS_2023}
          incomeHeader="Reddito annuo (€)"
          rateHeader="Aliquota fiscale (%)"
        />

        <h2>Come Calcolare Il Reddito Imponibile IRPEF</h2>
        <p>Per calcolare il tuo reddito imponibile, segui questi passaggi.</p>
        <ol>
          <li>Determinare il reddito lordo totale</li>
          <li>Sottrarre le spese deducibili</li>
          <li>Applicare detrazioni e agevolazioni fiscali</li>
          <li>Calcola le imposte utilizzando le fasce di reddito IRPEF</li>
        </ol>
        <p>
          Utilizza il nostro{" "}
          <Link href={HOME_SLUG}>calcolatore IRPEF</Link> per calcolare l&apos;IRPEF in base al
          tuo livello di reddito.
        </p>

        <h2>Detrazioni Per Familiari a Carico (2025)</h2>
        <p>Nel caso dei familiari, esistono due tipi di detrazioni:</p>

        <h3>Detrazioni Per Figli a Carico</h3>
        <p>
          Esistono regole definite per tutte le fasce d&apos;età. Per i figli di età inferiore ai
          18 anni, i genitori possono ricevere un assegno familiare mensile (Assegno Unico) dallo
          Stato in sostituzione di una detrazione fiscale. Per i figli di età compresa tra i 21 e
          i 30 anni, è prevista una detrazione fiscale fino a 950 euro all&apos;anno. Questa
          tariffa è applicabile anche se il tuo reddito minimo è di 2.840 € all&apos;anno.
        </p>

        <h3>Altri Familiari a Carico</h3>
        <p>
          Se i tuoi genitori o i tuoi nonni vivono con te e hai un reddito molto basso, hai
          diritto a una detrazione fiscale di 750 euro all&apos;anno. Prima del 2025, questo
          sconto si estendeva anche ad altri parenti. Ora, invece, vengono conteggiati solo
          genitori e nonni.
        </p>

        <h2>Tipologie Di Tasse in Italia</h2>
        <p>
          In Italia, le imposte si applicano a persone fisiche, imprenditori e investitori. Le
          principali tipologie di imposte in Italia sono le seguenti:
        </p>

        <h3>Imposta Addizionale Regionale IRPEF Sul Reddito</h3>
        <p>
          L&apos;imposta addizionale regionale IRPEF sul reddito è un&apos;imposta aggiuntiva
          applicata dalle regioni italiane in aggiunta all&apos;imposta nazionale sul reddito
          personale. L&apos;aliquota applicabile varia a seconda della regione di residenza del
          contribuente e viene generalmente calcolata come percentuale del reddito imponibile.
        </p>

        <h3>Imposta Sul Reddito Addizionale Comunale IRPEF</h3>
        <p>
          I comuni devono annunciare le tariffe per il nuovo anno; altrimenti, restano in vigore
          le tariffe dell&apos;anno precedente. Dovrebbero inoltre applicarsi fino a 0,8%
          dell&apos;imposta sul reddito. Viene riscosso il supplemento comunale e vengono
          effettuate undici rate per l&apos;anno successivo. Tra marzo e novembre viene riscosso
          anche un anticipo del 30%. Similmente all&apos;imposta sul reddito addizionale
          regionale IRPEF, viene calcolata in aggiunta alle nazionali aliquote dell&apos;imposta
          sul reddito personale e varia a seconda del comune di residenza.
        </p>

        <h3>Aliquote Dell&apos;imposta Sul Reddito Personale</h3>
        <p>
          Le aliquote fiscali in Italia sono governate dal sistema fiscale IRPEF, che applica
          aliquote fiscali progressive al reddito individuale. Il sistema nazionale imposta sul
          reddito personale in Italia è una delle imposte più significative pagate dai residenti
          e da alcuni non residenti che percepiscono redditi di fonte italiana.
        </p>

        <h3>Imposta Sul Valore Aggiunto (IVA)</h3>
        <p>
          L&apos;IVA, nota in Italia come imposta sui consumi, è un&apos;imposta applicata alla
          maggior parte dei beni e servizi. L&apos;IVA viene riscossa dalle imprese per conto
          dello Stato ed è inclusa nel prezzo pagato dal consumatore finale.
        </p>

        <h3>Imposta Sul Patrimonio Netto</h3>
        <p>
          In Italia non è prevista un&apos;imposta generale sul patrimonio netto. Tuttavia, i
          residenti che detengono beni all&apos;estero possono essere soggetti all&apos;IVAFE
          (imposta sui beni finanziari) o all&apos;IVIE (imposta sugli immobili all&apos;estero).
          Queste imposte sono concepite per garantire che i contribuenti paghino le tasse se
          possiedono un patrimonio superiore alla media o se il loro reddito supera una
          determinata soglia.
        </p>

        <h3>Imposta Di Successione e Imposta Sulle Donazioni</h3>
        <p>
          Queste imposte di successione e donazione sono dovute quando i beni vengono trasferiti
          da una persona deceduta a un suo parente di sangue. L&apos;importo di imposta di
          successione in Italia dipende dal rapporto tra il beneficiario e il defunto, nonché dal
          valore dei beni ereditati. Simile all&apos;imposta di successione, si applica
          l&apos;imposta sulle donazioni. Il tasso dipende dal rapporto tra donatore e
          ricevente.
        </p>

        <h2>Detrazioni e agevolazioni</h2>
        <p>
          L&apos;IRPEF lorda calcolata sugli scaglioni può essere ridotta dalle{" "}
          <strong>detrazioni per lavoro dipendente</strong> (art. 13 TUIR), dal{" "}
          <strong>cuneo fiscale</strong> e da altre agevolazioni previste per il 2026. Queste
          detrazioni abbassano l&apos;imposta effettiva da versare e incidono direttamente sullo
          stipendio netto accreditato in busta paga.
        </p>

        <h2>Addizionali regionali e comunali</h2>
        <p>
          Oltre agli scaglioni IRPEF nazionali, i dipendenti possono pagare l&apos;
          <strong>addizionale regionale</strong> e l&apos;<strong>addizionale comunale</strong>,
          calcolate sullo stesso reddito imponibile. Le aliquote variano in base al luogo di
          residenza e possono modificare sensibilmente l&apos;importo netto finale.
        </p>

        <h2>Ultime riforme fiscali</h2>
        <p>
          Con la Legge di Bilancio 2026, la seconda aliquota IRPEF è scesa dal 35% al 33% per
          redditi tra € 28.001 e € 50.000. Sono inoltre state confermate misure come il cuneo
          fiscale strutturale e il bonus IRPEF da € 100 per i redditi entro determinate soglie,
          con impatto diretto sul calcolo dello stipendio netto.
        </p>

        <h2>Calcola il tuo stipendio netto</h2>
        <p>
          Vuoi vedere come gli scaglioni IRPEF incidono sul tuo caso concreto? Usa il nostro{" "}
          <Link href={HOME_SLUG}>calcolatore stipendio netto</Link> per stimare la retribuzione
          netta a partire dalla tua RAL, con tutte le detrazioni e i contributi del 2026.
        </p>
      </ArticlePageBody>
      <IrpefFAQ />
    </ArticlePageLayout>
  );
}
