export interface Analytics {
  chart: AnalyticsChart[];
  average: number;
}

export interface AnalyticsChart {
  gain: number;
  order: number;
  label: string;
}
