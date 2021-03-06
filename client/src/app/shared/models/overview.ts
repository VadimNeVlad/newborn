export interface Overview {
  gain: OverviewItem;
  orders: OverviewItem;
}

export interface OverviewItem {
  percent: number;
  compare: number;
  yesterday: number;
  isHigher: boolean;
}
