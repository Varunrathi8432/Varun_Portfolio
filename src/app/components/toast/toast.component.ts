import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

export interface ToastItem extends ToastMessageOptions {
  _id: number;
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-24px)' }),
        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateX(-16px)' }),
        ),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  readonly toasts = signal<ToastItem[]>([]);

  private counter = 0;
  private readonly timers = new Map<number, ReturnType<typeof setTimeout>>();
  private readonly messageService = inject(MessageService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const sub = this.messageService.messageObserver.subscribe((msg) => {
      const messages = Array.isArray(msg) ? msg : [msg];
      messages.forEach((m) => this.add(m));
    });

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
      this.timers.forEach((t) => clearTimeout(t));
      this.timers.clear();
    });
  }

  private add(msg: ToastMessageOptions): void {
    const _id = ++this.counter;
    const item: ToastItem = { ...msg, _id };
    this.toasts.update((list) => [...list, item]);

    const life = msg.life ?? 4000;
    const timer = setTimeout(() => this.remove(_id), life);
    this.timers.set(_id, timer);
  }

  remove(_id: number): void {
    clearTimeout(this.timers.get(_id));
    this.timers.delete(_id);
    this.toasts.update((list) => list.filter((t) => t._id !== _id));
  }
}
