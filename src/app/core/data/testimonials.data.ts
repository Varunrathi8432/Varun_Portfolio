import { Testimonial } from '../../shared/models/portfolio.models';

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Developer',
    company: 'X Company',
    avatar: 'RS',
    text: "Varun picks up new concepts incredibly fast. Within months he was building production features independently. His attention to UI detail and clean code practices are impressive for someone at his experience level.",
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'UI/UX Designer',
    company: 'Y Company',
    avatar: 'PP',
    text: 'Working with Varun is a pleasure. He translates designs into pixel-perfect implementations and always suggests improvements for better user experience. He truly cares about the end product.',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Team Lead',
    company: 'Z Company',
    avatar: 'AK',
    text: "Varun's growth trajectory has been remarkable. He went from learning Angular basics to delivering complex features with minimal guidance. His dedication and consistency make him a valuable asset to any team.",
    rating: 5,
  },
] as const;
