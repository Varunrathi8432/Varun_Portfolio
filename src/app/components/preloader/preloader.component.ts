import { Component, signal, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PreloaderComponent implements OnInit {
  isLoading = signal(true);
  progress = signal(0);

  ngOnInit(): void {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 20 + 5;
      if (current >= 100) {
        current = 100;
        this.progress.set(100);
        clearInterval(interval);
        setTimeout(() => this.isLoading.set(false), 400);
      } else {
        this.progress.set(Math.round(current));
      }
    }, 150);
  }
}
