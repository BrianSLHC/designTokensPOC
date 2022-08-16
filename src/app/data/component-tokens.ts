import { IComponentTokenInfo } from '../models/component.model';
import { TokenType } from '../models/token.model';

export const componentData: IComponentTokenInfo[] = [
  {
    name: 'shv-input-text',
    tokens: [
      {
        number: 1,
        name: 'vds-font-family-normal',
        value: 'Calibre-Regular, Arial, sans-serif;',
        type: TokenType.CONTENT
      },
      {
        number: 2,
        name: 'vds-font-weight-semibold',
        value: '600;',
        type: TokenType.CONTENT,
      },
      {
        number: 3,
        name: 'vds-brand-color-precise-red',
        value: 'rgb(243,72,66);',
        type: TokenType.CONTENT,
      },
      {
        number: 4,
        name: 'vds-color-white',
        value: 'rgb(255,255,255);',
        type: TokenType.CONTENT,
      },
      {
        number: 5,
        name: 'vds-radius-soft',
        value: '0.4rem;',
        type: TokenType.BORDERSSHADOWS,
      },
      {
        number: 6,
        name: 'vds-surface-shadow-dark-on-light',
        value: '0 0 0.4rem 0 rgba(0, 0, 0, 0.5);',
        type: TokenType.BORDERSSHADOWS,
      },
      {
        number: 7,
        name: 'vds-space-quarter-x',
        value: '0.6rem;',
        type: TokenType.SPACING,
      },
      {
        number: 8,
        name: 'vds-space-third-x',
        value: '0.8rem;',
        type: TokenType.SPACING,
      },
    ],
    css: [
      {
        selector: 'form-field',
        declarationBlock: [
          {
            property: 'display',
            value: 'flex',
          },
          {
            property: 'height',
            value: 'var(--vds-space-input)',
            tokenType: TokenType.SPACING,
          },
        ],
      },
      {
        selector: 'form-field__label',
        declarationBlock: [
          {
            property: 'display',
            value: 'inline-block',
          },
          {
            property: 'font-weight',
            value: 'var (--vds-font-weight-semibold)',
            tokenType: TokenType.CONTENT,
          },
          {
            property: 'margin-bottom',
            value: 'var(--vds-space-third-x)',
            tokenType: TokenType.SPACING,
          },
        ],
      },
      {
        selector: 'form-field__label_clarifier',
        declarationBlock: [],
      },

      {
        selector: 'form-field__label_error',
        declarationBlock: [],
      },

      {
        selector: 'form-field__input',
        declarationBlock: [],
      },

      {
        selector: 'input-text',
        declarationBlock: [],
      },

      {
        selector: 'input-text__input',
        declarationBlock: [],
      },
    ],
  },
];

