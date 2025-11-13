import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GiftList } from "../../components/gift-list/gift-list";

@Component({
  selector: 'app-gif-history',
  imports: [GiftList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  GifsService = inject(GifsService);
  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  gifsByKey = computed(() => this.GifsService.getHistoryGifs(this.query()));
}
