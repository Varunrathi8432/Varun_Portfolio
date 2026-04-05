import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInLeft: AnimationTriggerMetadata = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeInRight: AnimationTriggerMetadata = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 })),
  ]),
]);

export const staggerFadeIn: AnimationTriggerMetadata = trigger('staggerFadeIn', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);

export const scaleIn: AnimationTriggerMetadata = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const slideInNav: AnimationTriggerMetadata = trigger('slideInNav', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('400ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
