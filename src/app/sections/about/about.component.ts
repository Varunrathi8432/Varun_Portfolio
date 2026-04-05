import { Component, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { CountUpDirective } from '../../core/directives/count-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InViewDirective, CountUpDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  isVisible = signal(false);

  constructor(public dataService: DataService) {}

  onVisible(): void {
    this.isVisible.set(true);
  }
}
