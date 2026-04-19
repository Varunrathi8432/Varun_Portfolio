import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  NgZone,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { fadeIn, fadeInLeft, fadeInUp } from '../../shared/animations/animations';

const ROLES = [
  'Frontend Developer',
  'Frontend Engineer',
  'TypeScript Developer',
  'UI/UX Enthusiast',
];

@Component({
  selector: 'app-hero',
  standalone: true,
  animations: [fadeInUp, fadeInLeft, fadeIn],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  readonly displayText = signal('');
  readonly isTyping = signal(true);

  readonly particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: 60 + Math.random() * 40,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
  }));

  readonly dataService = inject(DataService);
  readonly scrollService = inject(ScrollService);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    // Run the typing loop outside the zone — signal writes still trigger OnPush
    // checks, but we avoid re-running change detection for the setTimeout itself.
    this.zone.runOutsideAngular(() => this.type());
    this.destroyRef.onDestroy(() => {
      if (this.timerId !== null) clearTimeout(this.timerId);
    });
  }

  private type(): void {
    const current = ROLES[this.roleIndex];
    this.charIndex += this.isDeleting ? -1 : 1;
    this.displayText.set(current.substring(0, this.charIndex));
    this.isTyping.set(true);

    let speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isTyping.set(false);
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % ROLES.length;
      speed = 300;
    }

    this.timerId = setTimeout(() => this.type(), speed);
  }
}
