import { Injectable, signal } from '@angular/core';
import { TvShow } from './tvmaze';

const FAVORITES_KEY = 'tvmaze-favorites';

function isTvShow(value: unknown): value is TvShow {
  if (typeof value !== 'object' || value === null) return false;
  if (!('id' in value) || typeof value.id !== 'number') return false;
  if (!('name' in value) || typeof value.name !== 'string') return false;
  if (!('genres' in value) || !Array.isArray(value.genres)) return false;
  return value.genres.every((genre: unknown) => typeof genre === 'string');
}

@Injectable({ providedIn: 'root' })
export class Favorites {
  private readonly _shows = signal<TvShow[]>(this.loadShows());
  readonly shows = this._shows.asReadonly();

  isFavorite(showId: number): boolean {
    return this._shows().some((show) => show.id === showId);
  }

  toggle(show: TvShow): void {
    this._shows.update((shows) =>
      shows.some((favorite) => favorite.id === show.id)
        ? shows.filter((favorite) => favorite.id !== show.id)
        : [...shows, show],
    );
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(this._shows()));
  }

  private loadShows(): TvShow[] {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (!saved) return [];

    try {
      const shows: unknown = JSON.parse(saved);
      if (Array.isArray(shows)) return shows.filter(isTvShow);
      console.warn('Le contenu des favoris TVMaze est invalide.');
    } catch (error) {
      console.warn('Impossible de lire les favoris TVMaze.', error);
    }

    return [];
  }
}
