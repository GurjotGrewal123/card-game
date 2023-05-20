import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { DeckofcardsService } from '../services/deckofcards.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {

  colourVisiblity = true;
  correctVisiblity = false;

  constructor(private http: HttpClient, private cardService: DeckofcardsService) {
  }

  getDeck() {
    this.cardService.getNewDeck().subscribe(deck => {
      console.log(deck);
    })
  }

  toggleColour(blackBtn: boolean) {

    console.log(blackBtn);

    this.colourVisiblity = !this.colourVisiblity;
    this.correctVisiblity = !this.correctVisiblity;
  }

}
