import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DataService } from '../../core/services/data.service';
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
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dataService: DataService,
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
    if (this.contactForm.valid) {
      this.submitted.set(true);
      setTimeout(() => {
        this.submitted.set(false);
        this.contactForm.reset();
      }, 3000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
