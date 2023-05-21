import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incorrect-guess',
  templateUrl: './incorrect-guess.component.html',
  styleUrls: ['./incorrect-guess.component.css']
})
export class IncorrectGuessComponent {
  @Output() incorrectClick = new EventEmitter();

  onClick() {
    this.incorrectClick.emit();
  }

}
