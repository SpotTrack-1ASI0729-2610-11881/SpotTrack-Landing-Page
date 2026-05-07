import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSection {
  // Año basado en la referencia visual del prototipo
  year: number = 2026;
}
