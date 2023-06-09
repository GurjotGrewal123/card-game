import { Component, EventEmitter, Output } from '@angular/core';
import { PlayComponent } from '../play/play.component';

@Component({
  selector: 'app-correct-guess',
  templateUrl: './correct-guess.component.html',
  styleUrls: ['./correct-guess.component.css']
})

export class CorrectGuessComponent extends PlayComponent {

  @Output() continueClick = new EventEmitter();

  onClick() {
    this.continueClick.emit();
  }

}
