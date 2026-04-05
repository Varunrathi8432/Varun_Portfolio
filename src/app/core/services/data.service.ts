import { Injectable } from "@angular/core";
import {
  NavLink,
  SocialLink,
  SkillCategory,
  Project,
  Experience,
  Strength,
  Testimonial,
  BlogPost,
  Stat,
} from "../../shared/models/portfolio.models";

@Injectable({ providedIn: "root" })
export class DataService {
  readonly navLinks: NavLink[] = [
    { label: "Home", sectionId: "hero", icon: "home" },
    { label: "About", sectionId: "about", icon: "user" },
    { label: "Skills", sectionId: "skills", icon: "code" },
    { label: "Projects", sectionId: "projects", icon: "layers" },
    { label: "Experience", sectionId: "experience", icon: "briefcase" },
    { label: "Testimonials", sectionId: "testimonials", icon: "star" },
    { label: "Contact", sectionId: "contact", icon: "mail" },
  ];

  readonly socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
  ];

  readonly stats: Stat[] = [
    { value: 1, suffix: "+", label: "Year Experience" },
    { value: 6, suffix: "+", label: "Projects Built" },
    { value: 4, suffix: "+", label: "Blog Articles" },
  ];

  readonly strengths: Strength[] = [
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Quick Learner",
      description:
        "Passionate about absorbing new technologies fast. Went from zero to building Angular apps in under a year.",
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Responsive Design",
      description:
        "Building pixel-perfect, mobile-first UIs that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      title: "Clean Code",
      description:
        "Writing readable, well-structured code following Angular best practices and component-driven architecture.",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Detail Oriented",
      description:
        "Focused on delivering smooth UI interactions, consistent styling, and great user experiences.",
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: "Frontend Core",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      skills: [
        { name: "HTML5", level: 90, icon: "html" },
        { name: "CSS3", level: 85, icon: "css" },
        { name: "JavaScript", level: 80, icon: "javascript" },
        { name: "TypeScript", level: 85, icon: "typescript" },
        { name: "SCSS/Sass", level: 85, icon: "sass" },
        { name: "Bootstrap", level: 75, icon: "bootstrap" },
      ],
    },
    {
      title: "Angular Ecosystem",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      skills: [
        { name: "Angular", level: 90, icon: "angular" },
        { name: "RxJS", level: 75, icon: "rxjs" },
        { name: "Angular Material", level: 65, icon: "material" },
        { name: "Angular Forms", level: 85, icon: "forms" },
        { name: "Angular Router", level: 90, icon: "router" },
        { name: "NgRx (Learning)", level: 65, icon: "ngrx" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      skills: [
        { name: "Git & GitHub", level: 80, icon: "git" },
        { name: "Angular CLI", level: 85, icon: "cli" },
        { name: "VS Code", level: 85, icon: "vscode" },
        { name: "Chrome DevTools", level: 80, icon: "devtools" },
        { name: "Figma (Basic)", level: 55, icon: "figma" },
        { name: "npm / yarn", level: 75, icon: "npm" },
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      slug: "developer-portfolio",
      title: "Developer Portfolio",
      description:
        "This portfolio website itself — built with Angular 19, standalone components, SCSS animations, dark/light mode, scroll-reveal effects, and fully responsive layout.",
      longDescription:
        "A modern developer portfolio built entirely with Angular 19 using standalone components architecture. Features include a custom theming system with dark/light mode persistence, intersection observer-based scroll animations, CSS glassmorphism effects, a typing animation hero section, reactive contact form with validation, and fully responsive design across all breakpoints. The project demonstrates clean component architecture, signal-based state management, and SCSS custom properties for theming.",
      image: "",
      tags: ["Angular", "TypeScript", "SCSS", "Angular Animations"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      highlights: [
        "Custom dark/light theme system with localStorage persistence",
        "Signal-based reactive state management",
        "Intersection Observer scroll-reveal animations",
        "Glassmorphism UI with CSS backdrop-filter",
        "Fully responsive mobile-first design",
        "Route-based architecture with lazy loading",
      ],
    },
    {
      slug: "task-manager-app",
      title: "Task Manager App",
      description:
        "A clean to-do and task management app with Angular reactive forms, task categories, priority flags, and local storage persistence.",
      longDescription:
        "A full-featured task management application built with Angular reactive forms. Users can create, edit, and organize tasks with categories, priority levels, and due dates. The app features drag-and-drop reordering, bulk actions, search/filter functionality, and persistent storage using localStorage. Built with a focus on clean architecture and reusable form components.",
      image: "",
      tags: ["Angular", "TypeScript", "Angular Forms", "LocalStorage"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      highlights: [
        "Reactive forms with dynamic validation",
        "Drag-and-drop task reordering",
        "Category and priority-based filtering",
        "LocalStorage persistence layer",
        "Bulk selection and actions",
        "Responsive dashboard layout",
      ],
    },
    {
      slug: "weather-forecast-app",
      title: "Weather Forecast App",
      description:
        "Location-based weather app consuming the OpenWeather API. Features current weather, 5-day forecast, and dynamic background themes.",
      longDescription:
        "A weather application that uses the OpenWeather API to display current conditions and a 5-day forecast. Features include geolocation-based weather detection, city search with autocomplete, dynamic background themes that change based on weather conditions, temperature unit switching, and detailed weather metrics. Built with RxJS for efficient API handling and error management.",
      image: "",
      tags: ["Angular", "OpenWeather API", "RxJS", "SCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      highlights: [
        "OpenWeather API integration with RxJS",
        "Geolocation-based weather detection",
        "Dynamic theming based on conditions",
        "5-day forecast with hourly breakdown",
        "Temperature unit conversion",
        "Graceful error handling and loading states",
      ],
    },
    {
      slug: "movie-search-app",
      title: "Movie Search App",
      description:
        "Browse and search movies using the TMDB API with infinite scroll, filtering by genre, and a detail view with ratings and cast.",
      longDescription:
        "A movie discovery application powered by the TMDB API. Features infinite scroll pagination, genre-based filtering, movie detail views with cast and crew information, user ratings, trailers, and a watchlist feature. The app demonstrates advanced RxJS patterns for debounced search, pagination handling, and concurrent API requests.",
      image: "",
      tags: ["Angular", "TMDB API", "RxJS", "Angular Router"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      highlights: [
        "TMDB API integration with pagination",
        "Infinite scroll with intersection observer",
        "Debounced search with RxJS",
        "Genre filtering and sorting",
        "Movie detail view with router params",
        "Watchlist with localStorage",
      ],
    },
    {
      slug: "quiz-app",
      title: "Quiz App",
      description:
        "Interactive multiple-choice quiz with timer, score tracking, category selection, and a results summary screen.",
      longDescription:
        "An interactive quiz application with multiple categories, difficulty levels, and timed questions. Features include score tracking across sessions, a leaderboard, question randomization, progress indicators, and detailed result breakdowns. The UI features smooth transitions between questions and animated score reveals.",
      image: "",
      tags: ["Angular", "TypeScript", "Angular Material", "SCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      highlights: [
        "Multiple quiz categories and difficulties",
        "Countdown timer with visual indicator",
        "Score tracking and leaderboard",
        "Animated question transitions",
        "Result breakdown with statistics",
        "Responsive Material Design UI",
      ],
    },
    {
      slug: "expense-tracker",
      title: "Expense Tracker",
      description:
        "Personal finance tracker to log income and expenses with category-wise pie chart visualization and monthly summaries.",
      longDescription:
        "A personal finance management application that helps track income and expenses. Features include category-based transaction logging, interactive pie and bar chart visualizations using Chart.js, monthly and yearly summaries, budget goal setting, and CSV export functionality. The dashboard provides a clear overview of spending patterns.",
      image: "",
      tags: ["Angular", "Chart.js", "Angular Forms", "LocalStorage"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      highlights: [
        "Chart.js pie and bar chart visualizations",
        "Category-based transaction management",
        "Monthly and yearly summaries",
        "Budget goal tracking",
        "CSV export functionality",
        "Interactive dashboard overview",
      ],
    },
  ];

  readonly experiences: Experience[] = [
    {
      role: "Angular Developer",
      company: "Zapium",
      companyUrl: "https://www.zapium.com",
      period: "Jun 2025 - Present",
      description:
        "Promoted to Angular Developer after demonstrating growth and consistent delivery. Taking on more ownership of features and UI development.",
      achievements: [
        "Promoted from Junior Developer within 6 months based on performance",
        "Developed and delivered multiple Angular features independently",
        "Improved component reusability by building shared UI modules",
        "Collaborated closely with designers to implement pixel-perfect responsive layouts",
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "RxJS",
        "Angular Material",
        "SCSS",
        "Git",
      ],
    },
    {
      role: "Junior Developer",
      company: "Zapium",
      companyUrl: "https://www.zapium.com",
      period: "Dec 2024 - Jun 2025 · 6 months",
      description:
        "Started my professional career as a Junior Developer, learning the development workflow and building Angular components as part of a team.",
      achievements: [
        "Built Angular components and pages for client-facing web applications",
        "Learned reactive forms, component lifecycle, and Angular routing in production",
        "Consumed REST APIs with HttpClient and handled responses using RxJS",
        "Followed Git branching strategy and participated in daily team standups",
      ],
      technologies: ["Angular", "TypeScript", "HTML", "SCSS", "Git"],
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      role: "Senior Developer",
      company: "Zapium",
      avatar: "RS",
      text: "Varun picks up new concepts incredibly fast. Within months he was building production features independently. His attention to UI detail and clean code practices are impressive for someone at his experience level.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      company: "Zapium",
      avatar: "PP",
      text: "Working with Varun is a pleasure. He translates designs into pixel-perfect implementations and always suggests improvements for better user experience. He truly cares about the end product.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Team Lead",
      company: "Zapium",
      avatar: "AK",
      text: "Varun's growth trajectory has been remarkable. He went from learning Angular basics to delivering complex features with minimal guidance. His promotion was well-deserved and the team values his contributions.",
      rating: 5,
    },
  ];

  readonly blogPosts: BlogPost[] = [
    {
      slug: "angular-signals-guide",
      title: "Understanding Angular Signals: A Practical Guide",
      excerpt:
        "Signals are Angular's new reactive primitive. Learn how they simplify state management and improve performance compared to traditional change detection.",
      content: `Angular Signals represent a fundamental shift in how we handle reactivity in Angular applications. Unlike the zone-based change detection we've relied on for years, signals provide fine-grained reactivity that only updates what actually changed.

## What Are Signals?

A signal is a wrapper around a value that notifies interested consumers when that value changes. Think of it as a reactive variable — when the value changes, anything that depends on it automatically updates.

\`\`\`typescript
import { signal, computed } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);

count.set(5);
console.log(doubled()); // 10
\`\`\`

## Why Signals Matter

1. **Fine-grained reactivity** — Only components that actually read a signal get updated
2. **No zone.js dependency** — Signals work without zone.js, enabling better performance
3. **Explicit dependencies** — The dependency graph is clear and traceable
4. **Simpler mental model** — No more worrying about change detection strategies

## Signal vs BehaviorSubject

If you're coming from RxJS, signals might feel familiar. The key difference is that signals are synchronous and simpler for template bindings, while BehaviorSubject is better for async streams.

## Practical Usage

Use signals for component state, computed values for derived state, and effects for side-effects. Keep your templates reactive by reading signals directly.`,
      date: "2025-10-15",
      readTime: 6,
      tags: ["Angular", "Signals", "State Management"],
      featured: true,
    },
    {
      slug: "scss-architecture-angular",
      title: "Scalable SCSS Architecture for Angular Projects",
      excerpt:
        "How to structure your SCSS files in Angular for maximum reusability, maintainability, and consistent theming across large applications.",
      content: `Organizing SCSS in Angular projects is crucial for maintaining consistency as your application grows. Here's the architecture I use in production.

## The 7-1 Pattern (Adapted for Angular)

The classic 7-1 pattern works well with Angular's component-scoped styles. The key is separating global concerns from component-specific styles.

\`\`\`
styles/
  _variables.scss    // CSS custom properties & SCSS variables
  _mixins.scss       // Reusable mixins
  _typography.scss   // Font definitions & text styles
  _animations.scss   // Shared keyframes
  _utilities.scss    // Utility classes
  styles.scss        // Main entry point
\`\`\`

## CSS Custom Properties for Theming

The most powerful pattern is using CSS custom properties for your design tokens. This enables runtime theme switching without recompiling SCSS.

\`\`\`scss
:root {
  --bg-primary: #0a0a0f;
  --text-primary: #f0f0f5;
  --accent: #6c63ff;
}

[data-theme='light'] {
  --bg-primary: #f8f9fc;
  --text-primary: #1a1a2e;
}
\`\`\`

## Component-Level Best Practices

- Use \`:host\` for component-level layout
- Leverage \`::ng-deep\` sparingly and only when necessary
- Keep component SCSS focused on that component's concerns
- Use BEM naming for predictable class structures`,
      date: "2025-09-20",
      readTime: 5,
      tags: ["SCSS", "Angular", "Architecture"],
      featured: true,
    },
    {
      slug: "intersection-observer-angular",
      title: "Building Scroll Animations with Intersection Observer in Angular",
      excerpt:
        "Create performant scroll-triggered animations using Intersection Observer API wrapped in a reusable Angular directive.",
      content: `Scroll-triggered animations are everywhere in modern web design. Instead of listening to scroll events (which fire constantly), the Intersection Observer API provides a performant way to detect when elements enter the viewport.

## The Problem with Scroll Events

\`\`\`typescript
// Don't do this — fires on every pixel scrolled
window.addEventListener('scroll', () => {
  checkVisibility(element);
});
\`\`\`

## Enter Intersection Observer

The Intersection Observer asynchronously observes changes in the intersection of a target element with the viewport. No scroll event listeners needed.

## Creating a Reusable Directive

\`\`\`typescript
@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  inView = output<boolean>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.emit(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }
}
\`\`\`

This directive can be applied to any element, making scroll-reveal animations reusable across your entire application.`,
      date: "2025-08-10",
      readTime: 4,
      tags: ["Angular", "Performance", "Animations"],
      featured: false,
    },
    {
      slug: "standalone-components-migration",
      title: "Migrating to Standalone Components in Angular 19",
      excerpt:
        "A step-by-step guide to migrating your Angular app from NgModules to standalone components for cleaner, more maintainable code.",
      content: `Angular 19 makes standalone components the default. If you're still using NgModules, here's how to migrate smoothly.

## Why Standalone?

- Simpler mental model — no NgModule boilerplate
- Better tree-shaking — only import what you use
- Easier lazy loading — any component can be lazy loaded
- Cleaner dependency management

## Migration Steps

1. Start with leaf components (no children)
2. Add \`standalone: true\` to the component decorator
3. Move imports from NgModule to the component's \`imports\` array
4. Remove the component from NgModule declarations
5. Work your way up to parent components

## Common Gotchas

- Remember to import \`CommonModule\` directives individually (\`NgIf\`, \`NgFor\`) or use the new control flow
- Pipes need to be imported in each component that uses them
- Services with \`providedIn: 'root'\` work the same way
- Route configuration uses \`loadComponent\` for lazy loading`,
      date: "2025-07-05",
      readTime: 7,
      tags: ["Angular", "Migration", "Best Practices"],
      featured: false,
    },
  ];

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find((p) => p.slug === slug);
  }
}
