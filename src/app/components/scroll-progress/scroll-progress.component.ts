import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgressComponent {
  readonly scrollService = inject(ScrollService);
}
