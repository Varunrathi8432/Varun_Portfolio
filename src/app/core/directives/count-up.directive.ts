import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';

/**
 * Animates a number from 0 to `appCountUp` once the host element enters the
 * viewport. Runs the rAF loop outside NgZone — we're only writing to
 * `textContent`, so Angular doesn't need to re-check on every frame.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('appCountUp') targetValue = 0;
  @Input() countDuration = 2000;
  @Input() countSuffix = '';

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.textContent = '0' + this.countSuffix;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.zone.runOutsideAngular(() => this.animate());
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animate(): void {
    const start = performance.now();
    const end = this.targetValue;

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / this.countDuration, 1);
      const eased = this.easeOutExpo(progress);
      const current = Math.round(end * eased);

      this.el.nativeElement.textContent = current + this.countSuffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
}
