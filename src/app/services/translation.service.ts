import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private readonly DEFAULT_LANGUAGE = 'pt';

  constructor(private translateService: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) || this.DEFAULT_LANGUAGE;
    this.translateService.setDefaultLang(savedLanguage);
    this.translateService.use(savedLanguage);
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
    localStorage.setItem(this.LANGUAGE_KEY, language);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang || this.DEFAULT_LANGUAGE;
  }
}

