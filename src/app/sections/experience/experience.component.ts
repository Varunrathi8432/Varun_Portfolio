import { Component, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  isVisible = signal(false);

  constructor(public dataService: DataService) {}

  onVisible(): void {
    this.isVisible.set(true);
  }
}
