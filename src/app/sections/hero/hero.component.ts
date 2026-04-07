import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { fadeInUp, fadeInLeft, fadeIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  animations: [fadeInUp, fadeInLeft, fadeIn],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  isTyping = signal(true);

  particles = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: 60 + Math.random() * 40,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
  }));

  private roles = ['Frontend Developer', 'Frontend Engineer', 'TypeScript Developer', 'UI/UX Enthusiast'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  constructor(
    public dataService: DataService,
    public scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
  }

  private type(): void {
    const current = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.isTyping.set(true);
      this.charIndex--;
      this.displayText.set(current.substring(0, this.charIndex));
    } else {
      this.isTyping.set(true);
      this.charIndex++;
      this.displayText.set(current.substring(0, this.charIndex));
    }

    let speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isTyping.set(false);
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 300;
    }

    this.timerId = setTimeout(() => this.type(), speed);
  }
}
