import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Favorites } from '../../services/favorites';
import { TvShow } from '../../services/tvmaze';

@Component({
  imports: [RouterLink],
  selector: 'app-show-card',
  styleUrl: './show-card.css',
  templateUrl: './show-card.html',
})
export class ShowCard {
  readonly show = input.required<TvShow>();
  readonly favorites = inject(Favorites);
}
