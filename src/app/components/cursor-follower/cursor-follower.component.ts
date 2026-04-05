import { Component, HostListener, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  templateUrl: './cursor-follower.component.html',
  styleUrls: ['./cursor-follower.component.scss'],
})
export class CursorFollowerComponent implements OnInit {
  x = signal(0);
  y = signal(0);
  isPointer = signal(false);
  isVisible = signal(false);
  isTouchDevice = signal(false);

  ngOnInit(): void {
    this.isTouchDevice.set('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.x.set(e.clientX);
    this.y.set(e.clientY);
    if (!this.isVisible()) this.isVisible.set(true);

    const target = e.target as HTMLElement;
    const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .project-card, .filter-btn, .strength, .blog-card');
    this.isPointer.set(!!isInteractive);
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.isVisible.set(false);
  }

  @HostListener('document:mouseenter')
  onMouseEnter(): void {
    this.isVisible.set(true);
  }
}
