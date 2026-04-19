import { Injectable } from '@angular/core';
import { BlogPost, Project } from '../../shared/models/portfolio.models';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/navigation.data';
import { STATS, STRENGTHS } from '../data/about.data';
import { SKILL_CATEGORIES } from '../data/skills.data';
import { PROJECTS } from '../data/projects.data';
import { EXPERIENCES } from '../data/experience.data';
import { TESTIMONIALS } from '../data/testimonials.data';
import { BLOG_POSTS } from '../data/blog.data';

/**
 * Central read-only portfolio data. Per-domain content lives under `core/data/`
 * and is re-exposed here so components can inject a single service.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  readonly navLinks = NAV_LINKS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly stats = STATS;
  readonly strengths = STRENGTHS;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly projects = PROJECTS;
  readonly experiences = EXPERIENCES;
  readonly testimonials = TESTIMONIALS;
  readonly blogPosts = BLOG_POSTS;

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.blogPosts.find((p) => p.slug === slug);
  }
}
