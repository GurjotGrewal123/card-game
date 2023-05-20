import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() props: Card;

  suit: string;
  value: number;
  colour: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    if (this.props) {
      this.suit = this.props.suit;
      this.value = this.props.value;
      this.colour = this.props.colour;
      this.imageUrl = this.props.image;
    }
  }

}