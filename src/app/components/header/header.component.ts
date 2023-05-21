import { Component } from '@angular/core';
import { PlayComponent } from '../play/play.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Card Game";

  constructor(public play: PlayComponent) {


  }

}
