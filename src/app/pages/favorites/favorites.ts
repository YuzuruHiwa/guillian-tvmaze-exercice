import { Component, inject } from '@angular/core';
import { ShowCard } from '../../components/show-card/show-card';
import { Favorites as FavoritesService } from '../../services/favorites';

@Component({
  imports: [ShowCard],
  selector: 'app-favorites',
  styleUrl: './favorites.css',
  templateUrl: './favorites.html',
})
export class Favorites {
  readonly favorites = inject(FavoritesService);
}
