import { SkillCategory } from '../../shared/models/portfolio.models';

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Frontend Core',
    icon: 'terminal',
    skills: [
      { name: 'HTML5', level: 90, icon: 'html' },
      { name: 'CSS3', level: 85, icon: 'css' },
      { name: 'JavaScript', level: 80, icon: 'javascript' },
      { name: 'TypeScript', level: 85, icon: 'typescript' },
      { name: 'SCSS/Sass', level: 85, icon: 'sass' },
      { name: 'Bootstrap', level: 75, icon: 'bootstrap' },
    ],
  },
  {
    title: 'Angular Ecosystem',
    icon: 'package',
    skills: [
      { name: 'Angular', level: 90, icon: 'angular' },
      { name: 'RxJS', level: 75, icon: 'rxjs' },
      { name: 'Angular Material', level: 65, icon: 'material' },
      { name: 'Angular Forms', level: 85, icon: 'forms' },
      { name: 'Angular Router', level: 90, icon: 'router' },
      { name: 'NgRx (Learning)', level: 65, icon: 'ngrx' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'settings',
    skills: [
      { name: 'Git & GitHub', level: 80, icon: 'git' },
      { name: 'Angular CLI', level: 85, icon: 'cli' },
      { name: 'VS Code', level: 85, icon: 'vscode' },
      { name: 'Chrome DevTools', level: 80, icon: 'devtools' },
      { name: 'Figma (Basic)', level: 55, icon: 'figma' },
      { name: 'npm / yarn', level: 75, icon: 'npm' },
    ],
  },
] as const;
