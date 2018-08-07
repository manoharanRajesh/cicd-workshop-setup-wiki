import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcToolbarModule,
  MdcCardModule,
  MdcElevationModule,
  MdcRippleModule,
  MdcListModule,
    MdcIconButtonModule,
    MdcIconToggleModule,
    MdcTextFieldModule,
    MdcThemeModule,
    MdcTypographyModule,
    MdcShapeModule,
    MdcCheckboxModule,
} from '@angular-mdc/web';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdcCheckboxModule,
    MdcListModule,
    MdcShapeModule,
    MdcCardModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcIconToggleModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcThemeModule,
    MdcTypographyModule,
    MdcListModule,
    MdcRippleModule,
    MdcElevationModule,
    MdcCardModule,
    MdcIconModule,
    MdcToolbarModule,
   MdcButtonModule,
   MdcFabModule,
   MdcIconModule,
   BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
