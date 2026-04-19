import { Experience } from '../../shared/models/portfolio.models';

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Zapium',
    companyUrl: 'https://www.zapium.com',
    period: 'Jun 2025 - Present',
    description:
      'Leading frontend development with a focus on scalable Angular architecture and polished UI delivery. Building production-ready features with strong emphasis on performance and clean code.',
    achievements: [
      'Took full ownership of frontend features from design handoff to production deployment',
      'Developed and delivered multiple Angular features independently',
      'Improved component reusability by building shared UI modules',
      'Collaborated closely with designers to implement pixel-perfect responsive layouts',
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS', 'Git'],
  },
  {
    role: 'Junior Developer',
    company: 'Zapium',
    companyUrl: 'https://www.zapium.com',
    period: 'Dec 2024 - Jun 2025 · 6 months',
    description:
      'Began professional development journey, rapidly acquiring hands-on experience with Angular, TypeScript, and agile workflows while contributing to real-world production applications.',
    achievements: [
      'Built Angular components and pages for client-facing web applications',
      'Learned reactive forms, component lifecycle, and Angular routing in production',
      'Consumed REST APIs with HttpClient and handled responses using RxJS',
      'Followed Git branching strategy and participated in daily team standups',
    ],
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Git'],
  },
] as const;
