import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { BlogPost } from '../../shared/models/portfolio.models';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, TruncatePipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly activeTag = signal<string | null>(null);
  readonly selectedPost = signal<BlogPost | null>(null);

  readonly dataService = inject(DataService);
  private readonly location = inject(Location);

  readonly allTags = computed(() => {
    const tags = new Set<string>();
    this.dataService.blogPosts.forEach((post) =>
      post.tags.forEach((tag) => tags.add(tag)),
    );
    return Array.from(tags);
  });

  readonly filteredPosts = computed(() => {
    const tag = this.activeTag();
    if (!tag) return this.dataService.blogPosts;
    return this.dataService.blogPosts.filter((p) => p.tags.includes(tag));
  });

  constructor() {
    const route = inject(ActivatedRoute);
    route.params
      .pipe(takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((params) => {
        const slug = params['slug'];
        this.selectedPost.set(
          slug ? this.dataService.getBlogPostBySlug(slug) ?? null : null,
        );
        window.scrollTo({ top: 0 });
      });
  }

  setTag(tag: string | null): void {
    this.activeTag.set(tag);
  }

  goBack(): void {
    this.location.back();
  }

  formatDate(dateStr: string): string {
    return DATE_FORMATTER.format(new Date(dateStr));
  }
}
