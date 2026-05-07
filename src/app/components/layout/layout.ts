    import { Component } from '@angular/core';
    import { HeroSectionComponent } from '../hero-section/hero-section.component';
    import { PricingSection } from '../pricing-section/pricing-section';
    import { ContactComponent } from '../contact-section/contact-section.component';
    import { FeaturesSectionComponent } from '../features-section/features-section.component';



@Component({
  selector: 'app-layout',
  imports: [
    HeroSectionComponent,
    FeaturesSectionComponent,
    PricingSection,
    ContactComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
