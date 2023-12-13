export interface Broker {
  id: number;
  title: string;
  subtitle: string;
  level: string;
  cours: Cours[];
  price_month: number;
  price_year: number;
}

export interface Cours {
  title: string;
  percentage: string;
}
