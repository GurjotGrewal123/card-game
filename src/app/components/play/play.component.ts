import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {

  public cardDeck: any;

  constructor(private http: HttpClient) {
  }

  addCard() {
    this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe((data) => {
      this.cardDeck = data;
      console.log(this.cardDeck);
    });
  }

  colourVisiblity = true;
  correctVisiblity = false;

  toggleColour(blackBtn: boolean) {

    console.log(blackBtn);

    this.colourVisiblity = !this.colourVisiblity;
    this.correctVisiblity = !this.correctVisiblity;
  }

}
