import { Component, Input } from '@angular/core';
import { GiftListItem } from './gift-list-item/gift-list-item';

@Component({
  selector: 'gift-list',
  imports: [GiftListItem],
  templateUrl: './gift-list.html',
})
export class GiftList {
  @Input() gifts: string[] = [];
}
