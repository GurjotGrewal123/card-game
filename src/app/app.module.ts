import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayComponent } from './components/play/play.component';
import { ColourGuessComponent } from './components/colour-guess/colour-guess.component';
import { CorrectGuessComponent } from './components/correct-guess/correct-guess.component';

const appRoutes = [
  { path: '', component: HeaderComponent },
  { path: 'play', component: PlayComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayComponent,
    ColourGuessComponent,
    CorrectGuessComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
