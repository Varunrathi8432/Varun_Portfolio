import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private messageService: MessageService) {}

  success(summary: string, detail: string, life = 4000): void {
    this.messageService.add({ severity: 'success', summary, detail, life });
  }

  error(summary: string, detail: string, life = 5000): void {
    this.messageService.add({ severity: 'error', summary, detail, life });
  }
}
