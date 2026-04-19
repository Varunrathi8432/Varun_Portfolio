import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, .project-card, .filter-btn, .strength, .blog-card';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  templateUrl: './cursor-follower.component.html',
  styleUrls: ['./cursor-follower.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorFollowerComponent implements OnInit {
  readonly x = signal(0);
  readonly y = signal(0);
  readonly isPointer = signal(false);
  readonly isVisible = signal(false);
  readonly isTouchDevice = signal(false);

  ngOnInit(): void {
    this.isTouchDevice.set(
      'ontouchstart' in window || navigator.maxTouchPoints > 0,
    );
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.x.set(e.clientX);
    this.y.set(e.clientY);
    if (!this.isVisible()) this.isVisible.set(true);

    const target = e.target as HTMLElement;
    this.isPointer.set(!!target.closest(INTERACTIVE_SELECTOR));
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
