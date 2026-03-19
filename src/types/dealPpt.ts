export type ChartType =
  | 'pie'
  | 'bar'
  | 'donut'
  | 'semi_donut'
  | 'density'
  | 'line'
  | 'area'
  | 'stacked_bar'
  | 'graph'
  | 'geo_map';

export interface ChartDataPoint {
  label: string;
  value: number;
  fromLabel?: string;
  toLabel?: string;
  lat?: number;
  lng?: number;
}

export interface ChartDefinition {
  id: string;
  title: string;
  type: ChartType;
  data: ChartDataPoint[];
  currency?: string;
  unit?: string;
  notes?: string;
}

export interface TableCell {
  text: string;
}

export interface TableRow {
  cells: TableCell[];
}

export interface TableDefinition {
  id: string;
  title: string;
  headers: string[];
  rows: TableRow[];
}

export interface ImageDefinition {
  id: string;
  title?: string;
  assetKey?: string;
  url?: string;
}

export interface SlideContent {
  title: string;
  summary: string;
  bulletPoints: string[];
  charts?: ChartDefinition[];
  tables?: TableDefinition[];
  images?: ImageDefinition[];
  meta?: Record<string, any>;
}

export interface DealPptPayload {
  dealId: string;
  dealName: string;
  createdAt: string;
  sponsorName: string;
  fundName: string;
  logoAssetKey?: string;
  slides: SlideContent[];
}

