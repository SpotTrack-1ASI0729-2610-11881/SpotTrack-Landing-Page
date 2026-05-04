import { Component } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleGroup],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  currentLang = 'en';
  languages =['en', 'es'];

  constructor(private translate: TranslateService){
    this.currentLang = this.translate.getCurrentLang();
  }

  useLanguage(language: string){
    this.translate.use(language);
  }
}
