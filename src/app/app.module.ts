import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RezervuaroSkaiciuokleComponent } from './components/rezervuaro-skaiciuokle/rezervuaro-skaiciuokle.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervuaroSkaiciuokleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
