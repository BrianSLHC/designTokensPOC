import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenListBlockComponent } from './token-list-block/token-list-block.component';
import { InputTextComponent } from './shv-input-text/shv-input-text.component';
import { FormFieldComponent } from './shv-form-field/shv-form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TokenListBlockComponent,
    InputTextComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
