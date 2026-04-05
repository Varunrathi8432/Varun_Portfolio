import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../shared/models/portfolio.models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project = signal<Project | null>(null);
  relatedProjects = signal<Project[]>([]);

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const found = this.dataService.getProjectBySlug(slug);
      this.project.set(found ?? null);

      if (found) {
        this.relatedProjects.set(
          this.dataService.projects
            .filter(p => p.slug !== slug)
            .slice(0, 3),
        );
      }

      window.scrollTo({ top: 0 });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
