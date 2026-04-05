import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { CursorFollowerComponent } from './components/cursor-follower/cursor-follower.component';
import { ThemeService } from './core/services/theme.service';
import { ScrollService } from './core/services/scroll.service';
import { routeAnimation } from './shared/animations/route-animations';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ScrollProgressComponent,
    FooterComponent,
    PreloaderComponent,
    BackToTopComponent,
    CursorFollowerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimation,
    trigger('pageLoad', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollService.updateScroll();
  }

  getRouteAnimationData(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.['animation'] ?? 'home';
  }
}
