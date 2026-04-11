import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { EmailService } from '../../core/services/email.service';
import { ToastService } from '../../core/services/toast.service';
import { InViewDirective } from '../../core/directives/in-view.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, InViewDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isVisible = signal(false);
  submitted = signal(false);
  sending = signal(false);
  error = signal<string | null>(null);
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dataService: DataService,
    private emailService: EmailService,
    private toastService: ToastService,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onVisible(): void {
    this.isVisible.set(true);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.error.set(null);

    this.emailService.sendContactEmail(this.contactForm.value).then(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.toastService.success('Message Sent', 'Your message was sent successfully!');
      setTimeout(() => {
        this.submitted.set(false);
        this.contactForm.reset();
      }, 3000);
    }).catch(() => {
      this.sending.set(false);
      this.error.set('Failed to send message. Please try again.');
      this.toastService.error('Send Failed', 'Failed to send message. Please try again.');
    });
  }
}
