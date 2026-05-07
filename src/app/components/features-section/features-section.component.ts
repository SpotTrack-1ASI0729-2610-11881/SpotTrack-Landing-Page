import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';

interface Feature {
  key: string;
  icon: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    TranslatePipe // <-- Importante para usar {{ ... | translate }}
  ],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {

  // Arreglo con las llaves exactas que tienes en tu en.json y es.json
  features: Feature[] = [
    { key: 'iotSensors', icon: 'sensor' },
    { key: 'cloudStorage', icon: 'cloud' },
    { key: 'realTimeMonitor', icon: 'monitor' },
    { key: 'maintenanceAlerts', icon: 'alert' },
    { key: 'analyticDashboard', icon: 'dashboard' },
    { key: 'jwtSecurity', icon: 'security' }
  ];

}
