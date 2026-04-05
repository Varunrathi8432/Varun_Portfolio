import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(
    public dataService: DataService,
    public scrollService: ScrollService,
  ) {}
}
