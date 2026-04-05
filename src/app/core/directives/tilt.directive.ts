import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnDestroy {
  @Input() tiltMaxAngle = 8;
  @Input() tiltScale = 1.02;
  @Input() tiltGlare = true;

  private glareEl?: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.transition = 'transform 0.15s ease-out';
    this.el.nativeElement.style.transformStyle = 'preserve-3d';

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
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${this.tiltScale}, ${this.tiltScale}, ${this.tiltScale})`;

    if (this.glareEl) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      this.glareEl.style.background =
        `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.el.nativeElement.style.transition = 'transform 0.5s ease-out';
    this.el.nativeElement.style.transform =
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
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.appendChild(this.glareEl);
  }
}
