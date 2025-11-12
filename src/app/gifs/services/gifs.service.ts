import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  constructor() {
    this.loadTrendingGifs();
    console.log('GifsService initialized');
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: '25',
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: '25',
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifsArray(items))
      );
    /*  .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);

        console.log({ search: gifs });
      }); */
  }
}
