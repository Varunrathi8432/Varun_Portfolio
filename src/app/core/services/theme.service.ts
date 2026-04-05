import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  initTheme(): void {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      this.isDark.set(saved === 'dark');
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark.update(v => !v);
    this.applyTheme();
    localStorage.setItem('portfolio-theme', this.isDark() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }
}
