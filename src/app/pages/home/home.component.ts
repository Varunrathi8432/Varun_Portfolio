import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { BlogPreviewComponent } from '../../sections/blog-preview/blog-preview.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    TestimonialsComponent,
    BlogPreviewComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
