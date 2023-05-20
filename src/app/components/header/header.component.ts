import { Component } from '@angular/core';
import { PlayComponent } from '../play/play.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Card Game";

  constructor(public play: PlayComponent) {

  }

}
