import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IComponentTokenInfo } from './models/component.model';
import { ICssRule } from './models/css-rule.model';
import { ITokenBlock, TokenType } from './models/token.model';
import { TokensService } from './services/tokens.service';
import { FormFieldComponent } from './shv-form-field/shv-form-field.component';

export enum ComponentState {
  READWRITE = 'readwrite',
  READONLY = 'readonly',
  DISABLED = 'disabled',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('componentSelectCtrl', { static: true })
  componentSelectCtrl: ElementRef;

  @ViewChild('formField') formField: FormFieldComponent;

  selectedComponent: IComponentTokenInfo;
  tokenListBlocks: ITokenBlock[] = [];
  cssCode: string = '';
  markupCode: string = '';

  selectedComponentState: ComponentState = ComponentState.READWRITE;
  componentStateForm: FormGroup;

  constructor(private tokenService: TokensService) {}

  ngOnInit(): void {
    const selectedComponentName: string =
      this.componentSelectCtrl.nativeElement.value;
    this.componentStateForm = new FormGroup({
      componentState: new FormControl(this.selectedComponentState),
    });
    this.componentStateForm.valueChanges.subscribe((val: any) => {
      this.setComponentState(val.componentState)
    })
    this.tokenService
      .getComponentWithTokens(selectedComponentName)
      .subscribe((component: IComponentTokenInfo) => {
        this.selectedComponent = component;
        if (!!this.selectedComponent.tokens) {
          Object.values(TokenType).some((tokenType) => {
            const tokensOfType = this.selectedComponent.tokens?.filter(
              (token) => token.type === tokenType
            );
            if (!!tokensOfType) {
              const tokenValue: string = tokensOfType[0].type;
              const indexOfValue = Object.values(TokenType).indexOf(
                tokenValue as unknown as TokenType
              );
              const tokenType: string = Object.keys(TokenType)[indexOfValue];
              this.tokenListBlocks.push({
                name: tokenValue,
                type: tokenType,
                tokens: tokensOfType,
              });
            }
          });
        }
        if (!!this.selectedComponent.css) {
          this.selectedComponent.css.forEach((cssRule: ICssRule) => {
            // build this.cssCode
          });
          // for each type, iterate, grab each type from this.selectedComponent.tokens and group
        }
      });
      this.buildCssDisplay();
      this.buildMarkupDisplay(this.selectedComponentState);
  }

  ngAfterViewInit(): void {
    this.buildMarkupDisplay(this.selectedComponentState);
  }

  setComponentState(state: ComponentState) {
    this.selectedComponentState = state;
    this.buildMarkupDisplay(state);
  }
  buildCssDisplay(){
    this.cssCode = `<div class='taco'>{Hey} <span class='nacho'>There</span> Taco!</div>`;
  }
  buildMarkupDisplay(componentState: ComponentState){
    this.markupCode = `${this.formField}`;
    switch(componentState){
      case ComponentState.DISABLED:
        this.formField.setDisabled();
        break;
    }
  }
}
