import { Project } from '../../shared/models/portfolio.models';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'developer-portfolio',
    title: 'Developer Portfolio',
    description:
      'This portfolio website itself — built with Angular 19, standalone components, SCSS animations, dark/light mode, scroll-reveal effects, and fully responsive layout.',
    longDescription:
      "A modern developer portfolio built entirely with Angular 19 using standalone components architecture. Features include a custom theming system with dark/light mode persistence, intersection observer-based scroll animations, CSS glassmorphism effects, a typing animation hero section, reactive contact form with validation, and fully responsive design across all breakpoints. The project demonstrates clean component architecture, signal-based state management, and SCSS custom properties for theming.",
    image: 'assets/projects/portfolio-thumb.svg',
    overviewImage: 'assets/projects/portfolio-overview.svg',
    tags: ['Angular', 'TypeScript', 'SCSS', 'Angular Animations'],
    githubUrl: 'https://github.com/Varunrathi8432/Varun_Portfolio',
    liveUrl: 'https://example.com',
    featured: true,
    highlights: [
      'Custom dark/light theme system with localStorage persistence',
      'Signal-based reactive state management',
      'Intersection Observer scroll-reveal animations',
      'Glassmorphism UI with CSS backdrop-filter',
      'Fully responsive mobile-first design',
      'Route-based architecture with lazy loading',
    ],
  },
  {
    slug: 'task-manager-app',
    title: 'Task Manager App',
    description:
      'A clean to-do and task management app with Angular reactive forms, task categories, priority flags, and local storage persistence.',
    longDescription:
      'A full-featured task management application built with Angular reactive forms. Users can create, edit, and organize tasks with categories, priority levels, and due dates. The app features drag-and-drop reordering, bulk actions, search/filter functionality, and persistent storage using localStorage. Built with a focus on clean architecture and reusable form components.',
    image: '',
    tags: ['Angular', 'TypeScript', 'Angular Forms', 'LocalStorage'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    highlights: [
      'Reactive forms with dynamic validation',
      'Drag-and-drop task reordering',
      'Category and priority-based filtering',
      'LocalStorage persistence layer',
      'Bulk selection and actions',
      'Responsive dashboard layout',
    ],
  },
  {
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description:
      'Location-based weather app consuming the OpenWeather API. Features current weather, 5-day forecast, and dynamic background themes.',
    longDescription:
      'A weather application that uses the OpenWeather API to display current conditions and a 5-day forecast. Features include geolocation-based weather detection, city search with autocomplete, dynamic background themes that change based on weather conditions, temperature unit switching, and detailed weather metrics. Built with RxJS for efficient API handling and error management.',
    image: '',
    tags: ['Angular', 'OpenWeather API', 'RxJS', 'SCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    highlights: [
      'OpenWeather API integration with RxJS',
      'Geolocation-based weather detection',
      'Dynamic theming based on conditions',
      '5-day forecast with hourly breakdown',
      'Temperature unit conversion',
      'Graceful error handling and loading states',
    ],
  },
  {
    slug: 'movie-search-app',
    title: 'Movie Search App',
    description:
      'Browse and search movies using the TMDB API with infinite scroll, filtering by genre, and a detail view with ratings and cast.',
    longDescription:
      'A movie discovery application powered by the TMDB API. Features infinite scroll pagination, genre-based filtering, movie detail views with cast and crew information, user ratings, trailers, and a watchlist feature. The app demonstrates advanced RxJS patterns for debounced search, pagination handling, and concurrent API requests.',
    image: '',
    tags: ['Angular', 'TMDB API', 'RxJS', 'Angular Router'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    highlights: [
      'TMDB API integration with pagination',
      'Infinite scroll with intersection observer',
      'Debounced search with RxJS',
      'Genre filtering and sorting',
      'Movie detail view with router params',
      'Watchlist with localStorage',
    ],
  },
  {
    slug: 'quiz-app',
    title: 'Quiz App',
    description:
      'Interactive multiple-choice quiz with timer, score tracking, category selection, and a results summary screen.',
    longDescription:
      'An interactive quiz application with multiple categories, difficulty levels, and timed questions. Features include score tracking across sessions, a leaderboard, question randomization, progress indicators, and detailed result breakdowns. The UI features smooth transitions between questions and animated score reveals.',
    image: '',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'SCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    highlights: [
      'Multiple quiz categories and difficulties',
      'Countdown timer with visual indicator',
      'Score tracking and leaderboard',
      'Animated question transitions',
      'Result breakdown with statistics',
      'Responsive Material Design UI',
    ],
  },
  {
    slug: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'Personal finance tracker to log income and expenses with category-wise pie chart visualization and monthly summaries.',
    longDescription:
      'A personal finance management application that helps track income and expenses. Features include category-based transaction logging, interactive pie and bar chart visualizations using Chart.js, monthly and yearly summaries, budget goal setting, and CSV export functionality. The dashboard provides a clear overview of spending patterns.',
    image: '',
    tags: ['Angular', 'Chart.js', 'Angular Forms', 'LocalStorage'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    highlights: [
      'Chart.js pie and bar chart visualizations',
      'Category-based transaction management',
      'Monthly and yearly summaries',
      'Budget goal tracking',
      'CSV export functionality',
      'Interactive dashboard overview',
    ],
  },
] as const;
