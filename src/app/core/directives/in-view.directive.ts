import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  output,
} from '@angular/core';

/**
 * Emits `inView` when the host element intersects the viewport. Disconnects
 * after the first intersection when `inViewOnce` (default) is true, so
 * scroll-reveal elements don't keep observing forever.
 */
@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Input() inViewThreshold = 0.1;
  @Input() inViewOnce = true;

  inView = output<boolean>();

  private observer?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.emit(true);
          if (this.inViewOnce) {
            this.observer?.disconnect();
          }
        } else if (!this.inViewOnce) {
          this.inView.emit(false);
        }
      },
      { threshold: this.inViewThreshold },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
