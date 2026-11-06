import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TvShow {
  id: number;
  name: string;
  image: { medium: string; original: string } | null;
  summary: string | null;
  status: string | null;
  genres: string[];
  _embedded?: { episodes: TvEpisode[] };
}

export interface TvEpisode {
  id: number;
  name: string;
  season: number;
  number: number | null;
}

interface TvMazeSearchResult {
  score: number;
  show: TvShow;
}

@Injectable({ providedIn: 'root' })
export class Tvmaze {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.tvmaze.com';

  searchShows(query: string): Observable<TvMazeSearchResult[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<TvMazeSearchResult[]>(`${this.baseUrl}/search/shows`, { params });
  }

  getShow(id: number): Observable<TvShow> {
    const params = new HttpParams().set('embed', 'episodes');
    return this.http.get<TvShow>(`${this.baseUrl}/shows/${id}`, { params });
  }
}
