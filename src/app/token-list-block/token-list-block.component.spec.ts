import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenListBlockComponent } from './token-list-block.component';

describe('TokenListBlockComponent', () => {
  let component: TokenListBlockComponent;
  let fixture: ComponentFixture<TokenListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenListBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
