import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  imports: [
    ReactiveFormsModule,
  ],
  styleUrls: ['./contact-section.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Enviando Lead a /api/v1/leads:', this.contactForm.value);
      // Aquí integrarías el servicio para conectar con el backend en Spring Boot
      this.contactForm.reset();
      alert('Mensaje enviado con éxito');
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
