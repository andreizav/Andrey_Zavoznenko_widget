import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillageComponent } from './village/village.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { FilterWidgetPipe } from './filter-widget.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VillageComponent,
    TemperaturComponent,
    TeddyBearComponent,
    FilterWidgetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
