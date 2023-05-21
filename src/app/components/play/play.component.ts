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
  colourVisiblity: boolean = true;
  correctVisiblity: boolean = false;
  incorrectVisiblity: boolean = false;
  numberVisibility: boolean = false;
  suitVisibility: boolean = false;
  cards: Card[] = [];
  colourOfCard: string;
  firstCardVal: number | string;
  secondCardVal: number | string;
  winner: boolean = false;


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
        this.cards.push(card.cards[0]);
      })
    );
    console.log(this.cards);
    return $drawNewCard;
  }

  toggleColour(blackBtn: boolean) {

    this.drawNewCard().subscribe(card => {
      if (blackBtn && (this.cards[0].suit.localeCompare("SPADES") == 0 || this.cards[0].suit.localeCompare("CLUBS") == 0)) {
        this.colourVisiblity = !this.colourVisiblity;
        this.correctVisiblity = !this.correctVisiblity;
      }
      else if (!blackBtn && (this.cards[0].suit.localeCompare("HEARTS") == 0 || this.cards[0].suit.localeCompare("DIAMONDS") == 0)) {
        this.colourVisiblity = !this.colourVisiblity;
        this.correctVisiblity = !this.correctVisiblity;
      }
      else {
        this.colourVisiblity = !this.colourVisiblity;
        this.incorrectVisiblity = !this.incorrectVisiblity;
      }
    });
  }

  toggleContinue() {

    if (this.cards.length == 1) {
      this.numberVisibility = true;
      this.correctVisiblity = false;
    }
    else if (this.cards.length == 2) {
      this.suitVisibility = true;
      this.correctVisiblity = false;
    }

  }

  toggleNumber(num: number) {
    this.drawNewCard().subscribe(card => {

      if (this.cards[0].value.toString().localeCompare("ACE") == 0) {
        this.firstCardVal = 0;
      }
      else if (this.cards[0].value.toString().localeCompare("10") == 0) {
        this.firstCardVal = 10;
      }
      else if (this.cards[0].value.toString().localeCompare("JACK") == 0) {
        this.firstCardVal = 11;
      }
      else if (this.cards[0].value.toString().localeCompare("QUEEN") == 0) {
        this.firstCardVal = 12;
      }
      else if (this.cards[0].value.toString().localeCompare("KING") == 0) {
        this.firstCardVal = 13;
      }
      else {
        this.firstCardVal = this.cards[0].value;
      }

      if (this.cards[1].value.toString().localeCompare("ACE") == 0) {
        this.secondCardVal = 0;
      }
      else if (this.cards[1].value.toString().localeCompare("10") == 0) {
        this.secondCardVal = 10;
      }
      else if (this.cards[1].value.toString().localeCompare("JACK") == 0) {
        this.secondCardVal = 11;
      }
      else if (this.cards[1].value.toString().localeCompare("QUEEN") == 0) {
        this.secondCardVal = 12;
      }
      else if (this.cards[1].value.toString().localeCompare("KING") == 0) {
        this.secondCardVal = 13;
      }
      else {
        this.secondCardVal = this.cards[1].value;
      }

      console.log(num == -1);
      console.log(this.firstCardVal);
      console.log(this.secondCardVal);
      console.log(this.secondCardVal < this.firstCardVal);

      if (num == -1 && this.secondCardVal < this.firstCardVal) {
        this.correctVisiblity = true;
        this.numberVisibility = false;
        console.log("correct");
      }
      else if (num == 0 && this.secondCardVal == this.firstCardVal) {
        this.correctVisiblity = true;
        this.numberVisibility = false;
        console.log("correct");
      }
      else if (num == 1 && this.secondCardVal > this.firstCardVal) {
        this.correctVisiblity = true;
        this.numberVisibility = false;
        console.log("correct");
      }
      else {
        console.log("incorrect");
        this.incorrectVisiblity = true;
        this.numberVisibility = false;
      }
    });
  }

  toggleSuit(suit: string) {

    this.drawNewCard().subscribe(card => {

      console.log(suit);
      console.log(this.cards[2].suit);

      if (suit.localeCompare("SPADES") == 0 && this.cards[2].suit.localeCompare("SPADES") == 0) {
        console.log("suit correct");
        this.suitVisibility = false;
        this.winner = true;
      }
      else if (suit.localeCompare("CLUBS") == 0 && this.cards[2].suit.localeCompare("CLUBS") == 0) {
        console.log("suit correct");
        this.suitVisibility = false;
        this.winner = true;
      }
      else if (suit.localeCompare("HEARTS") == 0 && this.cards[2].suit.localeCompare("HEARTS") == 0) {
        console.log("suit correct");
        this.suitVisibility = false;
        this.winner = true;
      }
      else if (suit.localeCompare("SPADES") == 0 && this.cards[2].suit.localeCompare("DIAMONDS") == 0) {
        console.log("suit correct");
        this.suitVisibility = false;
        this.winner = true;
      }
      else {
        this.incorrectVisiblity = true;
        this.suitVisibility = false;
        console.log("suit incorrect");
      }
    });
  }

  toggleRestart() {
    this.cards = [];
  }

}
