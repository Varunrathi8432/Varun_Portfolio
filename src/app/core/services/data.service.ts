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
    { label: "Blog", sectionId: "blog", icon: "book" },
    { label: "Contact", sectionId: "contact", icon: "mail" },
  ];

  readonly socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/Varunrathi8432",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/varun-rathi-1b7467280",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://x.com/varunrathi8432", icon: "twitter" },
  ];

  readonly stats: Stat[] = [
    { value: 1, suffix: "+", label: "Year Experience" },
    { value: 6, suffix: "+", label: "Projects Built" },
    { value: 4, suffix: "+", label: "Blog Articles" },
  ];

  readonly strengths: Strength[] = [
    {
      icon: "lightbulb",
      title: "Quick Learner",
      description:
        "Passionate about absorbing new technologies fast. Went from zero to building Angular apps in under a year.",
    },
    {
      icon: "smartphone",
      title: "Responsive Design",
      description:
        "Building pixel-perfect, mobile-first UIs that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: "layout",
      title: "Clean Code",
      description:
        "Writing readable, well-structured code following Angular best practices and component-driven architecture.",
    },
    {
      icon: "zap",
      title: "Detail Oriented",
      description:
        "Focused on delivering smooth UI interactions, consistent styling, and great user experiences.",
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: "Frontend Core",
      icon: "terminal",
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
      icon: "package",
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
      icon: "settings",
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
      image: "assets/projects/portfolio-thumb.svg",
      overviewImage: "assets/projects/portfolio-overview.svg",
      tags: ["Angular", "TypeScript", "SCSS", "Angular Animations"],
      githubUrl: "https://github.com/Varunrathi8432/Varun_Portfolio",
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
      role: "Frontend Developer",
      company: "Zapium",
      companyUrl: "https://www.zapium.com",
      period: "Jun 2025 - Present",
      description:
        "Leading frontend development with a focus on scalable Angular architecture and polished UI delivery. Building production-ready features with strong emphasis on performance and clean code.",
      achievements: [
        "Took full ownership of frontend features from design handoff to production deployment",
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
        "Began professional development journey, rapidly acquiring hands-on experience with Angular, TypeScript, and agile workflows while contributing to real-world production applications.",
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
      company: "X Company",
      avatar: "RS",
      text: "Varun picks up new concepts incredibly fast. Within months he was building production features independently. His attention to UI detail and clean code practices are impressive for someone at his experience level.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer",
      company: "Y Company",
      avatar: "PP",
      text: "Working with Varun is a pleasure. He translates designs into pixel-perfect implementations and always suggests improvements for better user experience. He truly cares about the end product.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Team Lead",
      company: "Z Company",
      avatar: "AK",
      text: "Varun's growth trajectory has been remarkable. He went from learning Angular basics to delivering complex features with minimal guidance. His dedication and consistency make him a valuable asset to any team.",
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
