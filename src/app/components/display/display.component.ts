import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { card } from 'src/app/mocks/card.mock';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  titleContainer: string = card.titleContainer;
  title: string = card.title;
  subtitle: string = card.subtitle;

  @Output() titleContainerChange = new EventEmitter<string>();
  @Output() titleChange = new EventEmitter<string>();
  @Output() subtitleChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onTitleContainerInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.titleContainer = input.value;
    this.titleContainerChange.emit(this.titleContainer);
  }
  onTitleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.title = input.value;
    this.titleChange.emit(this.title);
  }

  onSubtitleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.subtitle = input.value;
    this.subtitleChange.emit(this.subtitle);
  }
}
