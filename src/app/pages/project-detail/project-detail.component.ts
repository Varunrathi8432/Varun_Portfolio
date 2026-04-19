import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent implements OnInit {
  readonly project = signal<Project | null>(null);
  readonly relatedProjects = signal<readonly Project[]>([]);

  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  private readonly location = inject(Location);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const slug = params['slug'];
      const found = this.dataService.getProjectBySlug(slug) ?? null;
      this.project.set(found);

      this.relatedProjects.set(
        found
          ? this.dataService.projects.filter((p) => p.slug !== slug).slice(0, 3)
          : [],
      );

      window.scrollTo({ top: 0 });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
