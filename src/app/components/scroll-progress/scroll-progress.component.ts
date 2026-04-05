import { Component } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss'],
})
export class ScrollProgressComponent {
  constructor(public scrollService: ScrollService) {}
}
