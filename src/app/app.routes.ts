import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { animation: 'home' },
  },
  {
    path: 'project/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail.component').then(
        m => m.ProjectDetailComponent,
      ),
    data: { animation: 'project' },
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    data: { animation: 'blog' },
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent),
    data: { animation: 'blogPost' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
