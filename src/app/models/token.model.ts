export enum TokenType {
  CONTENT = "content",
  BORDERSSHADOWS = 'borders & shadows',
  SPACING = "spacing",
  NONE = "none"
}

export interface ITokenItem {
  number: number;
  name: string;
  value: string;
  type: TokenType;
}

export interface ITokenBlock {
  name: string;
  type: string;
  tokens: ITokenItem[]
}
