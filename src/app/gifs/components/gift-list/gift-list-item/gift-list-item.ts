import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListItem {
  @Input() imageUrl: string = '';
}
