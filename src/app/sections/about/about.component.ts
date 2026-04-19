import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { CountUpDirective } from '../../core/directives/count-up.directive';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InViewDirective, CountUpDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly isVisible = signal(false);
  readonly dataService = inject(DataService);

  onVisible(): void {
    this.isVisible.set(true);
  }
}
