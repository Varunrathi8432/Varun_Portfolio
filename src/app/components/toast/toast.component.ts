import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

export interface ToastItem extends ToastMessageOptions {
  _id: number;
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-24px)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(-16px)' })),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts = signal<ToastItem[]>([]);

  private counter = 0;
  private timers = new Map<number, ReturnType<typeof setTimeout>>();
  private sub!: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.sub = this.messageService.messageObserver.subscribe((msg) => {
      const messages = Array.isArray(msg) ? msg : [msg];
      messages.forEach((m) => this.add(m));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.timers.forEach((t) => clearTimeout(t));
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
