export type SelectorProps = {
  type: 'cryptocurrency' | 'fiat';
};

export type BuildLabel = (symbol: string, name: string) => string;
