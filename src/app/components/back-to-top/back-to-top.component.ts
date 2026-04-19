import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.5)' })),
      ]),
    ]),
  ],
})
export class BackToTopComponent {
  readonly scrollService = inject(ScrollService);

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
