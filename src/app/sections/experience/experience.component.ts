import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly isVisible = signal(false);
  readonly dataService = inject(DataService);

  onVisible(): void {
    this.isVisible.set(true);
  }
}
