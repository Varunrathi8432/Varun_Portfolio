import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  output,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Input() inViewThreshold = 0.1;
  @Input() inViewOnce = true;

  inView = output<boolean>();

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

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
