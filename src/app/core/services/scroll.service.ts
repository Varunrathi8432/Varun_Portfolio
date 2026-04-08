import { Injectable, signal } from '@angular/core';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollProgress = signal(0);
  isScrolled = signal(false);
  activeSection = signal('hero');

  constructor(private dataService: DataService) {}

  updateScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    this.isScrolled.set(scrollTop > 50);
    this.detectActiveSection();
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private detectActiveSection(): void {
    const sections = this.dataService.navLinks.map(l => l.sectionId);
    const offset = 200;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= offset) {
        this.activeSection.set(sections[i]);
        break;
      }
    }
  }
}
