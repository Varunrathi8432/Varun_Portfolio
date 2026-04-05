import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../shared/models/portfolio.models';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, RouterLink, InViewDirective, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  isVisible = signal(false);
  activeFilter = signal<'all' | 'featured'>('all');

  constructor(public dataService: DataService) {}

  filteredProjects(): Project[] {
    if (this.activeFilter() === 'featured') {
      return this.dataService.projects.filter(p => p.featured);
    }
    return this.dataService.projects;
  }

  setFilter(filter: 'all' | 'featured'): void {
    this.activeFilter.set(filter);
  }

  onVisible(): void {
    this.isVisible.set(true);
  }
}
