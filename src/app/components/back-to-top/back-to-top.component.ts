import { Component } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
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
  constructor(public scrollService: ScrollService) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
