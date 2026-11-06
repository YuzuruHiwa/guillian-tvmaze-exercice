import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Tvmaze, TvShow } from '../../services/tvmaze';
import { ShowCard } from '../../components/show-card/show-card';

@Component({
  imports: [FormsModule, ShowCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly tvmaze = inject(Tvmaze);
  private readonly route = inject(ActivatedRoute);

  query = '';
  readonly shows = signal<TvShow[]>([]);
  readonly loading = signal(false);
  readonly submitted = signal(false);
  readonly error = signal('');
  readonly accessRequired = this.route.snapshot.queryParamMap.has('access');

  search(): void {
    const query = this.query.trim();
    this.submitted.set(true);
    this.error.set('');
    this.shows.set([]);

    if (!query) return;

    this.loading.set(true);
    this.tvmaze
      .searchShows(query)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (results) => this.shows.set(results.map((result) => result.show)),
        error: () => this.error.set('La recherche a échoué. Vérifie ta connexion et réessaie.'),
      });
  }
}
