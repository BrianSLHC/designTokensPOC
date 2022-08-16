import { ICssRule } from './css-rule.model';
import { ITokenItem } from './token.model';

export interface IComponentTokenInfo {
  name?: string;
  tokens?: ITokenItem[];
  css?: ICssRule[];
}
