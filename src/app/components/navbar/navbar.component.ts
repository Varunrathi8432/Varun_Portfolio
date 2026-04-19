import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';
import { slideInNav } from '../../shared/animations/animations';
import { NavLink } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  animations: [slideInNav],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly mobileOpen = signal(false);
  readonly scrollService = inject(ScrollService);
  readonly themeService = inject(ThemeService);
  readonly dataService = inject(DataService);
  private readonly router = inject(Router);

  // Reactive URL driven by router navigation events, so OnPush re-renders the
  // active-link indicator after browser back/forward or external navigations.
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly isHomePage = computed(() => {
    const url = this.currentUrl();
    return url === '/' || url.startsWith('/#');
  });

  navigate(link: NavLink): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        // Give the home route a tick to render before scrolling to the section.
        setTimeout(() => this.scrollService.scrollTo(link.sectionId), 100);
      });
    } else {
      this.scrollService.scrollTo(link.sectionId);
    }
    this.mobileOpen.set(false);
  }

  navigateHome(): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      this.scrollService.scrollTo('hero');
    }
    this.mobileOpen.set(false);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.mobileOpen()) this.mobileOpen.set(false);
  }
}
