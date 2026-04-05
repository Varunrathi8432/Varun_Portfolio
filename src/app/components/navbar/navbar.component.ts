import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';
import { DataService } from '../../core/services/data.service';
import { slideInNav } from '../../shared/animations/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
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

  navigate(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollService.scrollTo(sectionId), 100);
      });
    } else {
      this.scrollService.scrollTo(sectionId);
    }
    this.mobileOpen.set(false);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
