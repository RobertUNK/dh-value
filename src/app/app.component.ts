import { Component } from '@angular/core';
import { CardInterface } from './interfaces/card.interface';
import { card } from './mocks/card.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-project';
  card: CardInterface = card;

  updateCardsTitleContainer(newTitleContainer: string): void {
    this.card.titleContainer = newTitleContainer;
  }
  updateCardsTitle(newTitle: string): void {
    this.card.title = newTitle;
  }

  updateCardsContent(newSubtitle: string): void {
    this.card.subtitle = newSubtitle;
  }
}
