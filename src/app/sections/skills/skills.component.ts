import { Component, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  isVisible = signal(false);

  constructor(public dataService: DataService) {}

  onVisible(): void {
    this.isVisible.set(true);
  }
}
