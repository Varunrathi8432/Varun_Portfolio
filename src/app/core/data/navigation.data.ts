import { NavLink, SocialLink } from '../../shared/models/portfolio.models';

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', sectionId: 'hero', icon: 'home' },
  { label: 'About', sectionId: 'about', icon: 'user' },
  { label: 'Skills', sectionId: 'skills', icon: 'code' },
  { label: 'Projects', sectionId: 'projects', icon: 'layers' },
  { label: 'Experience', sectionId: 'experience', icon: 'briefcase' },
  { label: 'Testimonials', sectionId: 'testimonials', icon: 'star' },
  { label: 'Blog', sectionId: 'blog', icon: 'book' },
  { label: 'Contact', sectionId: 'contact', icon: 'mail' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Varunrathi8432', icon: 'github' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/varun-rathi-1b7467280',
    icon: 'linkedin',
  },
  { name: 'Twitter', url: 'https://x.com/varunrathi8432', icon: 'twitter' },
] as const;
