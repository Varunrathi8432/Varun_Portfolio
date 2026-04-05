import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const routeAnimation: AnimationTriggerMetadata = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })),
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        }),
        animate('400ms 200ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ], { optional: true }),
    ]),
  ]),
]);
