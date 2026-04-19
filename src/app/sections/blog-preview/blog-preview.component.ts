import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { InViewDirective } from '../../core/directives/in-view.directive';
import { DataService } from '../../core/services/data.service';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [RouterLink, InViewDirective, TruncatePipe],
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPreviewComponent {
  readonly isVisible = signal(false);
  readonly dataService = inject(DataService);

  readonly latestPosts = computed(() => this.dataService.blogPosts.slice(0, 3));

  onVisible(): void {
    this.isVisible.set(true);
  }

  formatDate(dateStr: string): string {
    return DATE_FORMATTER.format(new Date(dateStr));
  }
}
