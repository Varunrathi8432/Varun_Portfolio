import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeOut', [
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class PreloaderComponent implements OnInit {
  readonly isLoading = signal(true);
  readonly progress = signal(0);

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 20 + 5;
      if (current >= 100) {
        this.progress.set(100);
        clearInterval(interval);
        setTimeout(() => this.isLoading.set(false), 400);
      } else {
        this.progress.set(Math.round(current));
      }
    }, 150);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }
}
