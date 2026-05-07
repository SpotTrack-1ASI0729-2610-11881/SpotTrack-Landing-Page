    import { Component } from '@angular/core';
    import { HeroSectionComponent } from '../hero-section/hero-section.component';
    import { PricingSection } from '../pricing-section/pricing-section';
    import { ContactComponent } from '../contact-section/contact-section.component';
    import { FooterSection } from '../footer-section/footer-section.component';
@Component({
  selector: 'app-layout',
  imports: [HeroSectionComponent, PricingSection,ContactComponent,FooterSection],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
