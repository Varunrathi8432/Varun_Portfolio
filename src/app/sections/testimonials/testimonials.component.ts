import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly isVisible = signal(false);
  readonly activeIndex = signal(0);
  readonly dataService = inject(DataService);

  onVisible(): void {
    this.isVisible.set(true);
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }

  next(): void {
    this.activeIndex.update(
      (i) => (i + 1) % this.dataService.testimonials.length,
    );
  }

  prev(): void {
    this.activeIndex.update((i) =>
      i === 0 ? this.dataService.testimonials.length - 1 : i - 1,
    );
  }
}
