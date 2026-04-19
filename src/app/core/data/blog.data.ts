import { BlogPost } from '../../shared/models/portfolio.models';

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'angular-signals-guide',
    title: 'Understanding Angular Signals: A Practical Guide',
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
    date: '2025-10-15',
    readTime: 6,
    tags: ['Angular', 'Signals', 'State Management'],
    featured: true,
  },
  {
    slug: 'scss-architecture-angular',
    title: 'Scalable SCSS Architecture for Angular Projects',
    excerpt:
      'How to structure your SCSS files in Angular for maximum reusability, maintainability, and consistent theming across large applications.',
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
    date: '2025-09-20',
    readTime: 5,
    tags: ['SCSS', 'Angular', 'Architecture'],
    featured: true,
  },
  {
    slug: 'intersection-observer-angular',
    title: 'Building Scroll Animations with Intersection Observer in Angular',
    excerpt:
      'Create performant scroll-triggered animations using Intersection Observer API wrapped in a reusable Angular directive.',
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
    date: '2025-08-10',
    readTime: 4,
    tags: ['Angular', 'Performance', 'Animations'],
    featured: false,
  },
  {
    slug: 'standalone-components-migration',
    title: 'Migrating to Standalone Components in Angular 19',
    excerpt:
      'A step-by-step guide to migrating your Angular app from NgModules to standalone components for cleaner, more maintainable code.',
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
    date: '2025-07-05',
    readTime: 7,
    tags: ['Angular', 'Migration', 'Best Practices'],
    featured: false,
  },
] as const;
