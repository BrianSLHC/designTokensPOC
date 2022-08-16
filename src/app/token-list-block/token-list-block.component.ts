import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { ITokenBlock, TokenType } from '../models/token.model';

@Component({
  selector: 'app-token-list-block',
  templateUrl: './token-list-block.component.html',
  styleUrls: ['./token-list-block.component.scss'],
})
export class TokenListBlockComponent implements OnInit {
  @HostBinding('class') get BlockClassForType() {
    return `token-list-block_type_${this.blockType.toLowerCase()}`
  }
  @Input() tokenListBlock: ITokenBlock;
  blockName: string;
  blockType: string;

  constructor() {}

  ngOnInit(): void {
    this.blockName = this.tokenListBlock.name;
    this.blockType = this.tokenListBlock.type;
  }
}
