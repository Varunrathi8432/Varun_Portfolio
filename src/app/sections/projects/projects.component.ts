import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { DataService } from '../../core/services/data.service';

type ProjectFilter = 'all' | 'featured';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, RouterLink, InViewDirective, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly isVisible = signal(false);
  readonly activeFilter = signal<ProjectFilter>('all');
  readonly dataService = inject(DataService);

  // Memoized: only recomputes when the filter or project list changes.
  readonly filteredProjects = computed(() =>
    this.activeFilter() === 'featured'
      ? this.dataService.projects.filter((p) => p.featured)
      : this.dataService.projects,
  );

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }

  onVisible(): void {
    this.isVisible.set(true);
  }
}
