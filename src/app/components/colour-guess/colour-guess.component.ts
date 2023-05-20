import { Component, EventEmitter, Output } from '@angular/core';
import { PlayComponent } from '../play/play.component';
import { CorrectGuessComponent } from '../correct-guess/correct-guess.component';

@Component({
  selector: 'app-colour-guess',
  templateUrl: './colour-guess.component.html',
  styleUrls: ['./colour-guess.component.css']
})
export class ColourGuessComponent extends PlayComponent {

  @Output() btnClick = new EventEmitter();

  onClickBlack() {
    this.btnClick.emit(true);
  }

  onClickRed() {
    this.btnClick.emit(false);
  }

}
