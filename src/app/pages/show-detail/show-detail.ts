import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Favorites } from '../../services/favorites';
import { TvEpisode, Tvmaze, TvShow } from '../../services/tvmaze';

@Component({
  imports: [],
  selector: 'app-show-detail',
  styleUrl: './show-detail.css',
  templateUrl: './show-detail.html',
})
export class ShowDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly tvmaze = inject(Tvmaze);
  readonly favorites = inject(Favorites);
  readonly show = signal<TvShow | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id < 1) {
      this.error.set('Identifiant de série invalide.');
      this.loading.set(false);
      return;
    }

    this.tvmaze
      .getShow(id)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (show) => this.show.set(show),
        error: () => this.error.set('Impossible de charger cette série. Réessaie plus tard.'),
      });
  }

  episodes(): TvEpisode[] {
    return this.show()?._embedded?.episodes ?? [];
  }
}
