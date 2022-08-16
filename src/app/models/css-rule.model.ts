import { TokenType } from './token.model';

export interface ICssRule {
  selector: string;
  declarationBlock: ICssDeclaration[]
}

export interface ICssDeclaration {
  property: string;
  value: string;
  tokenType?: TokenType;
}
