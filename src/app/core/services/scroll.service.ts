import { Injectable, NgZone, signal } from '@angular/core';
import { DataService } from './data.service';

/**
 * Tracks scroll-derived state (progress, active section, scrolled flag).
 * Runs the heavy DOM reads outside NgZone and coalesces them to one per
 * animation frame so rapid scroll events don't stress change detection.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollProgress = signal(0);
  readonly isScrolled = signal(false);
  readonly activeSection = signal('hero');

  private rafId: number | null = null;

  constructor(
    private readonly dataService: DataService,
    private readonly zone: NgZone,
  ) {}

  /** Schedule a scroll read on the next animation frame. Safe to call repeatedly. */
  updateScroll(): void {
    if (this.rafId !== null) return;
    this.zone.runOutsideAngular(() => {
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        this.read();
      });
    });
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private read(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    const scrolled = scrollTop > 50;
    const active = this.detectActiveSection();

    // Signals re-enter Angular's reactive graph automatically; no need to re-enter the zone.
    this.scrollProgress.set(progress);
    this.isScrolled.set(scrolled);
    if (active) this.activeSection.set(active);
  }

  private detectActiveSection(): string | null {
    const offset = 200;
    const sections = this.dataService.navLinks;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].sectionId);
      if (el && el.getBoundingClientRect().top <= offset) {
        return sections[i].sectionId;
      }
    }
    return null;
  }
}
