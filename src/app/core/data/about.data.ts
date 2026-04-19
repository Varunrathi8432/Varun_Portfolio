import { Stat, Strength } from '../../shared/models/portfolio.models';

export const STATS: readonly Stat[] = [
  { value: 1, suffix: '+', label: 'Year Experience' },
  { value: 6, suffix: '+', label: 'Projects Built' },
  { value: 4, suffix: '+', label: 'Blog Articles' },
] as const;

export const STRENGTHS: readonly Strength[] = [
  {
    icon: 'lightbulb',
    title: 'Quick Learner',
    description:
      'Passionate about absorbing new technologies fast. Went from zero to building Angular apps in under a year.',
  },
  {
    icon: 'smartphone',
    title: 'Responsive Design',
    description:
      'Building pixel-perfect, mobile-first UIs that work seamlessly across all devices and screen sizes.',
  },
  {
    icon: 'layout',
    title: 'Clean Code',
    description:
      'Writing readable, well-structured code following Angular best practices and component-driven architecture.',
  },
  {
    icon: 'zap',
    title: 'Detail Oriented',
    description:
      'Focused on delivering smooth UI interactions, consistent styling, and great user experiences.',
  },
] as const;
