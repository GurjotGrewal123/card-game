import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { DeckofcardsService } from '../services/deckofcards.service';
import { Card } from '../models/Card';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {

  token: string;
  colourVisiblity = true;
  correctVisiblity = false;
  incorrectVisiblity = false;
  numberVisibility = false;
  cards: Card[] = [];
  colourOfCard: string;

  constructor(private http: HttpClient, private cardService: DeckofcardsService) {
  }

  getDeck() {
    this.cardService.getNewDeck().subscribe(deck => {
      this.token = deck.deck_id;
      localStorage.setItem("token", deck.deck_id);
      console.log(deck);
    })
  }

  drawNewCard() {
    const $drawNewCard = this.cardService.drawCard(localStorage.getItem("token") as string).pipe(
      tap(card => {
        this.cards = this.cards.concat(card.cards);
      })
    );
    return $drawNewCard;
  }

  reset() {
    this.cards = [];
  }

  toggleColour(blackBtn: boolean) {

    this.drawNewCard().subscribe(card => {
      if (blackBtn && (this.cards[0].suit.localeCompare("SPADES") == 0 || this.cards[0].suit.localeCompare("CLUBS") == 0)) {
        this.colourVisiblity = !this.colourVisiblity;
        this.correctVisiblity = !this.correctVisiblity;
        console.log("correct");
      }
      else if (!blackBtn && (this.cards[0].suit.localeCompare("HEARTS") == 0 || this.cards[0].suit.localeCompare("DIAMONDS") == 0)) {
        this.colourVisiblity = !this.colourVisiblity;
        this.correctVisiblity = !this.correctVisiblity;
        console.log("correct");
      }
      else {
        console.log("incorrect");
        this.colourVisiblity = !this.colourVisiblity;
        this.incorrectVisiblity = !this.incorrectVisiblity;
      }
    });

  }

}
