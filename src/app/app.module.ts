import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import {EssentialSelectModule} from 'angular-essential-select';
import {WebEssentialSelectComponent} from './web-essential-select/web-essential-select.component';

@NgModule({
  imports: [
    BrowserModule,
    EssentialSelectModule
  ],
  declarations: [
    WebEssentialSelectComponent],
  entryComponents: [
    WebEssentialSelectComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(WebEssentialSelectComponent, { injector }) as any;
    customElements.define('web-essential-select', customElement);
  }

  ngDoBootstrap() { }
}
