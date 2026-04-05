import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [RouterLink, InViewDirective, TruncatePipe],
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss'],
})
export class BlogPreviewComponent {
  isVisible = signal(false);

  latestPosts = computed(() =>
    this.dataService.blogPosts.slice(0, 3),
  );

  constructor(public dataService: DataService) {}

  onVisible(): void {
    this.isVisible.set(true);
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
