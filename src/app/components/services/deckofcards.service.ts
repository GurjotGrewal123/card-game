import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeckofcardsService {

    constructor(
        private http: HttpClient,
    ) { }

    getNewDeck() {
        const deck: Observable<any> = this.http.get<any>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        deck.subscribe(deck => localStorage.setItem('token', deck.deck_id));
        return deck;
    }

    drawCard() {
        return this.http.get<any>(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
    }

    get deckId() {
        return localStorage.getItem('token');
    }

}