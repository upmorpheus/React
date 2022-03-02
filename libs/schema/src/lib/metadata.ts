export type CustomCSS = {
  value: string;
  visible: boolean;
};

export type Theme = {
  text: string;
  background: string;
  primary: string;
};

export type TypeCategory = 'heading' | 'body';
export type TypeProperty = 'family' | 'size';

export type Typography = {
  family: Record<TypeCategory, string>;
  size: Record<TypeCategory, number>;
};

export type DateConfig = {
  format: string;
};

export type Metadata = {
  css: CustomCSS;
  theme: Theme;
  layout: string[][][]; // page.column.section
  template: string;
  typography: Typography;
  date: DateConfig;
  language: string;
};
