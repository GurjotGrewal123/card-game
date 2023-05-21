import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-number-guess',
  templateUrl: './number-guess.component.html',
  styleUrls: ['./number-guess.component.css']
})
export class NumberGuessComponent {

  @Output() numberClick = new EventEmitter();


  onClickLower() {
    this.numberClick.emit(-1);
  }

  onClickEqual() {
    this.numberClick.emit(0);
  }

  onClickHigher() {
    this.numberClick.emit(1);
  }


}
