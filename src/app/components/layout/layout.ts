    import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
    import { PricingSection } from '../pricing-section/pricing-section';

@Component({
  selector: 'app-layout',
  imports: [HeroSectionComponent, PricingSection],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
