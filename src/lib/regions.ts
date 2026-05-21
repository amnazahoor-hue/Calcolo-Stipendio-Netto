export interface Region {
  id: string;
  name: string;
  regionalRate: number;
}

export const REGIONS: Region[] = [
  { id: "abruzzo", name: "Abruzzo", regionalRate: 0.0173 },
  { id: "basilicata", name: "Basilicata", regionalRate: 0.0123 },
  { id: "bolzano", name: "Bolzano (Autonomous Province)", regionalRate: 0.0123 },
  { id: "calabria", name: "Calabria", regionalRate: 0.0203 },
  { id: "campania", name: "Campania", regionalRate: 0.0203 },
  { id: "emilia-romagna", name: "Emilia-Romagna", regionalRate: 0.0193 },
  { id: "friuli", name: "Friuli Venezia Giulia", regionalRate: 0.0123 },
  { id: "lazio", name: "Lazio", regionalRate: 0.0173 },
  { id: "liguria", name: "Liguria", regionalRate: 0.0173 },
  { id: "lombardia", name: "Lombardia", regionalRate: 0.0173 },
  { id: "marche", name: "Marche", regionalRate: 0.0173 },
  { id: "molise", name: "Molise", regionalRate: 0.0203 },
  { id: "piemonte", name: "Piemonte", regionalRate: 0.0123 },
  { id: "puglia", name: "Puglia", regionalRate: 0.0123 },
  { id: "sardegna", name: "Sardegna", regionalRate: 0.0123 },
  { id: "sicilia", name: "Sicilia", regionalRate: 0.0173 },
  { id: "toscana", name: "Toscana", regionalRate: 0.0203 },
  { id: "trentino", name: "Trentino Alto Adige", regionalRate: 0.0123 },
  { id: "umbria", name: "Umbria", regionalRate: 0.0173 },
  { id: "valle-aosta", name: "Valle d'Aosta", regionalRate: 0.0123 },
  { id: "veneto", name: "Veneto", regionalRate: 0.0123 },
];

export function getRegionById(id: string): Region | undefined {
  return REGIONS.find((r) => r.id === id);
}
