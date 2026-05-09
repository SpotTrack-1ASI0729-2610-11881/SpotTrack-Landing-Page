import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSection implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const serviceID = 'service_8z4yvrk'; // Obtén esto en EmailJS
      const templateID = 'template_muervr3';
      const publicKey = '6RLuwrQZ4Qh9K4vh4';

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log('¡ÉXITO!', response.status, response.text);
          this.contactForm.reset();
          // Aquí podrías mostrar un mensaje de éxito al usuario
        }, (err) => {
          console.log('FALLÓ...', err);
        });
    }
  }
}
