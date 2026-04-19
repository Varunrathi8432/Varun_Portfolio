import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';

/**
 * Applies and persists the dark/light theme via the `data-theme` attribute on
 * `<html>`. Component CSS reads theme-specific tokens from CSS custom properties.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal(true);

  initTheme(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.isDark.set(saved === 'dark');
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark.update((v) => !v);
    this.applyTheme();
    localStorage.setItem(STORAGE_KEY, this.isDark() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light',
    );
  }
}
