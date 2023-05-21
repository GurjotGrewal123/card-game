import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent {
  @Output() winnerClick = new EventEmitter();

  onClick() {
    this.winnerClick.emit();
  }
}
