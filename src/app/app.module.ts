import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayComponent } from './components/play/play.component';
import { ColourGuessComponent } from './components/colour-guess/colour-guess.component';
import { CorrectGuessComponent } from './components/correct-guess/correct-guess.component';
import { IncorrectGuessComponent } from './components/incorrect-guess/incorrect-guess.component';
import { NumberGuessComponent } from './components/number-guess/number-guess.component';
import { SuitGuessComponent } from './components/suit-guess/suit-guess.component';
import { WinnerComponent } from './components/winner/winner.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


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
    IncorrectGuessComponent,
    NumberGuessComponent,
    SuitGuessComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
