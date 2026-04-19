import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * 3D-tilt hover effect with optional glare overlay. Setup DOM writes are
 * deferred to `ngAfterViewInit` so the host element exists in the DOM before
 * we mutate its inline styles.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements AfterViewInit, OnDestroy {
  @Input() tiltMaxAngle = 8;
  @Input() tiltScale = 1.02;
  @Input() tiltGlare = true;

  private glareEl?: HTMLElement;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    host.style.transition = 'transform 0.15s ease-out';
    host.style.transformStyle = 'preserve-3d';

    if (this.tiltGlare) {
      this.createGlare();
    }
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.el.nativeElement.style.transition = 'none';
  }

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.tiltMaxAngle;
    const rotateY = ((x - centerX) / centerX) * this.tiltMaxAngle;

    this.el.nativeElement.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
      `scale3d(${this.tiltScale}, ${this.tiltScale}, ${this.tiltScale})`;

    if (this.glareEl) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      this.glareEl.style.background =
        `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  }

  @HostListener('mouseleave')
  onLeave(): void {
    const host = this.el.nativeElement;
    host.style.transition = 'transform 0.5s ease-out';
    host.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    if (this.glareEl) {
      this.glareEl.style.background = 'transparent';
    }
  }

  ngOnDestroy(): void {
    this.glareEl?.remove();
  }

  private createGlare(): void {
    this.glareEl = document.createElement('div');
    this.glareEl.style.cssText =
      'position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:1;';
    const host = this.el.nativeElement;
    host.style.position = 'relative';
    host.style.overflow = 'hidden';
    host.appendChild(this.glareEl);
  }
}
