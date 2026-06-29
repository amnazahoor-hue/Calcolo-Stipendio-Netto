export const IRPEF_FAQ_ITEMS = [
  {
    question: "Quali sono le aliquote fiscali IRPEF per il 2026?",
    answer:
      "Le aliquote IRPEF sono le aliquote dell'imposta sul reddito delle persone fisiche applicate ai redditi percepiti in Italia. Per il 2026, le aliquote IRPEF sono del 23% sui redditi fino a 28.000 euro, del 33% sui redditi compresi tra 28.001 e 50.000 euro e del 43% sui redditi superiori a 50.000 euro.",
  },
  {
    question: "Perché il secondo tasso è sceso dal 35% al 33% nel 2026?",
    answer:
      "Questo calo riduce sostanzialmente il carico fiscale sui redditi medi. Riducendo l'aliquota, il governo cerca di aumentare il reddito disponibile e di proseguire il processo di riforma dell'IRPEF.",
  },
  {
    question: "Come viene calcolato l'IRPEF per scaglioni?",
    answer:
      "Il calcolo si basa su un sistema di tassazione progressiva. Le aliquote fiscali vengono applicate in base agli scaglioni di reddito. Ad esempio, se il reddito imponibile è di 30.000 €, i primi 28.000 € sono tassati al 23%. I restanti 2.000 € sono tassati all'aliquota successiva applicabile.",
  },
  {
    question: "Qual è la zona esente da tasse di 8.500 €?",
    answer:
      "La zona di esenzione fiscale (€ 8.500 per i lavoratori dipendenti) è una soglia di reddito al di sotto della quale, dopo le detrazioni, è dovuta una quota minima o nulla dell'IRPEF. Questo beneficio è generalmente vantaggioso e dipende anche dal reddito individuale.",
  },
  {
    question: "Quali sono le detrazioni fiscali per i lavoratori dipendenti (Art. 13 TUIR)?",
    answer:
      "Secondo questo articolo, le detrazioni sono concepite per ridurre l'importo delle imposte da pagare sul reddito. All'aumentare del reddito, il valore della detrazione diminuisce.",
  },
  {
    question: "Come funziona il bonus di 100 € (trattamento integrativo)?",
    answer:
      "Il trattamento supplementare si tratta di un'agevolazione fiscale disponibile per i dipendenti che soddisfano determinati requisiti di reddito. Di solito viene erogata tramite trattenuta in busta paga e può arrivare fino a 100 euro al mese.",
  },
  {
    question: "Quali sono i supplementi IRPEF addizionale regionali per regione?",
    answer:
      "Si tratta di imposte aggiuntive imposte dalle regioni italiane. L'aliquota applicabile varia a seconda della regione. Poiché le aliquote fiscali sono diverse nelle varie regioni, anche i dipendenti con lo stesso reddito possono essere soggetti ad aliquote fiscali differenti.",
  },
  {
    question: "Posso recuperare il mio IRPEF con il modulo 730?",
    answer:
      "Sì, è possibile recuperarlo. I dipendenti possono richiedere detrazioni, crediti d'imposta e rimborsi ammissibili. Il rimborso viene generalmente pagato direttamente tramite busta paga se l'eccesso IRPEF è stato trattenuto durante l'anno.",
  },
  {
    question: "Quanto devo pagare di IRPEF su un reddito lordo di 30.000 €?",
    answer:
      "L'imposta dovuta su un reddito lordo di 30.000 euro dipende da diversi fattori, tra cui detrazioni, contributi previdenziali e maggiorazioni. L'imposta finale è ridotta dalle misure di sgravio. Su un reddito lordo di 30.000 €, circa 6.440 € + 700 € = 7.140 € nel fondo IRPEF prima delle detrazioni.",
  },
  {
    question: "Le detrazioni si applicano a tutti i lavoratori?",
    answer:
      "No. Alcune detrazioni sono disponibili solo per i dipendenti, mentre altre possono applicarsi anche ai pensionati o ai contribuenti con familiari a carico. Le detrazioni vengono applicate fondamentalmente in base alla residenza del dipendente, al ruolo e alla posizione lavorativa.",
  },
  {
    question: "Quali cambiamenti sono previsti dalla riforma IRPEF del 2024?",
    answer:
      "La riforma IRPEF del 2024 ha introdotto uno degli aggiornamenti più significativi al sistema italiano di imposta sul reddito delle persone fisiche. La modifica più importante è stata la riduzione del numero di scaglioni di reddito, con un sistema più strutturato. Ha anche aggiornamenti relativi alle detrazioni per lavoro dipendente.",
  },
  {
    question: "Quali saranno i risparmi dell'IRPEF nel 2026 rispetto al 2025?",
    answer:
      "I risparmi IRPEF nel 2026 dipendono da eventuali aggiornamenti delle detrazioni e delle misure fiscali. Si prevede che le persone a basso e medio reddito trarranno il maggior beneficio dalle misure volte a ridurre il carico fiscale.",
  },
] as const;

export type IrpefFAQItem = (typeof IRPEF_FAQ_ITEMS)[number];
