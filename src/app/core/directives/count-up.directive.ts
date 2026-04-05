import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

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

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.textContent = '0' + this.countSuffix;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate();
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
    const startValue = 0;
    const end = this.targetValue;

    const step = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / this.countDuration, 1);
      const eased = this.easeOutExpo(progress);
      const current = Math.round(startValue + (end - startValue) * eased);

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
