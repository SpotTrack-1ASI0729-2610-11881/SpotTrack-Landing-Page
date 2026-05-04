import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

interface Plan {
  key: string;
  popular: boolean;
  featureKeys: string[];
}

@Component({
  selector: 'app-pricing-section',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatButton, TranslatePipe],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
})
export class PricingSection {
  plans: Plan[] = [
    {
      key: 'basic',
      popular: false,
      featureKeys: [0, 1, 2, 3].map(i => `pricing.basic.features.${i}`),
    },
    {
      key: 'mid',
      popular: true,
      featureKeys: [0, 1, 2, 3, 4].map(i => `pricing.mid.features.${i}`),
    },
    {
      key: 'platinum',
      popular: false,
      featureKeys: [0, 1, 2, 3, 4].map(i => `pricing.platinum.features.${i}`),
    },
  ];
}
