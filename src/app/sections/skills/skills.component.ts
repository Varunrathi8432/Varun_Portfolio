import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly isVisible = signal(false);
  readonly dataService = inject(DataService);

  onVisible(): void {
    this.isVisible.set(true);
  }
}
