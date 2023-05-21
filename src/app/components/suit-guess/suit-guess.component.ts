import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-suit-guess',
  templateUrl: './suit-guess.component.html',
  styleUrls: ['./suit-guess.component.css']
})
export class SuitGuessComponent {

  @Output() suitClick = new EventEmitter();

  onClickSpades() {
    this.suitClick.emit("SPADES");
  }

  onClickClubs() {
    this.suitClick.emit("CLUBS");
  }

  onClickDiamonds() {
    this.suitClick.emit("DIAMONDS");
  }

  onClickHearts() {
    this.suitClick.emit("HEARTS");
  }

}
