import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';
import { DataService } from '../../core/services/data.service';
import { NavLink } from '../../shared/models/portfolio.models';
import { slideInNav } from '../../shared/animations/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  animations: [slideInNav],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  mobileOpen = signal(false);

  constructor(
    public scrollService: ScrollService,
    public themeService: ThemeService,
    public dataService: DataService,
    private router: Router,
  ) {}

  navigate(link: NavLink): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
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
    this.mobileOpen.update(v => !v);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.mobileOpen()) {
      this.mobileOpen.set(false);
    }
  }

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
