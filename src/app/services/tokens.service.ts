import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { componentData } from '../data/component-tokens';
import { IComponentTokenInfo } from '../models/component.model';
import { ITokenItem } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  componentData: IComponentTokenInfo[] = componentData;
  constructor() {}

  getComponentWithTokens(componentName: string): Observable<IComponentTokenInfo> {
    const component = this.componentData.find(
      (component: IComponentTokenInfo) => component.name === componentName
    );
    return !!component ? of(component) : of({});
  }

  getTokensForComponent(componentName: string): Observable<ITokenItem[]> {
    const component = this.componentData.find(
      (component: IComponentTokenInfo) => component.name === componentName
    );
    return component && !!component.tokens ? of(component.tokens) : of([]);
  }
}
