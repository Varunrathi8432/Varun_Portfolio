import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * Thin wrapper over PrimeNG's `MessageService` so components can push success /
 * error toasts without knowing about the PrimeNG API.
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly messageService = inject(MessageService);

  success(summary: string, detail: string, life = 4000): void {
    this.messageService.add({ severity: 'success', summary, detail, life });
  }

  error(summary: string, detail: string, life = 5000): void {
    this.messageService.add({ severity: 'error', summary, detail, life });
  }
}
