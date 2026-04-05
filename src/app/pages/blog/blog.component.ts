import { Component, signal, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { BlogPost } from '../../shared/models/portfolio.models';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, TruncatePipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  activeTag = signal<string | null>(null);
  selectedPost = signal<BlogPost | null>(null);

  allTags = computed(() => {
    const tags = new Set<string>();
    this.dataService.blogPosts.forEach(post =>
      post.tags.forEach(tag => tags.add(tag)),
    );
    return Array.from(tags);
  });

  filteredPosts = computed(() => {
    const tag = this.activeTag();
    if (!tag) return this.dataService.blogPosts;
    return this.dataService.blogPosts.filter(p => p.tags.includes(tag));
  });

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        const post = this.dataService.getBlogPostBySlug(slug);
        this.selectedPost.set(post ?? null);
      } else {
        this.selectedPost.set(null);
      }
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
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
