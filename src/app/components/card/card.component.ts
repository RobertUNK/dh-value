import { Component, Input, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: CardInterface;
  isCardContentActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  setCardContentState() {
    if (!this.card.disabled) {
      this.isCardContentActive = !this.isCardContentActive;
    }
  }

  closeCardContent() {
    this.isCardContentActive = false;
  }
}
