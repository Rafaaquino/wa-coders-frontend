import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom, timeout, catchError, of } from 'rxjs';

const SUPPORTED_LANGUAGES = ['en', 'pt', 'es'];

const SPANISH_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO',
  'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ',
]);
const PORTUGUESE_COUNTRIES = new Set(['BR', 'PT']);

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  private readonly DEFAULT_LANGUAGE = 'en';

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY);

    if (savedLanguage) {
      this.translateService.setDefaultLang(savedLanguage);
      this.translateService.use(savedLanguage);
      document.documentElement.lang = savedLanguage;
      return;
    }

    // No saved preference yet: use the browser language as an instant guess,
    // then refine it with a geo-IP lookup (visitor's actual location wins).
    const guess = this.languageFromBrowser();
    this.translateService.setDefaultLang(guess);
    this.translateService.use(guess);
    document.documentElement.lang = guess;

    this.detectLanguageByGeoIp().then((geoLanguage) => {
      if (geoLanguage && geoLanguage !== guess) {
        this.translateService.use(geoLanguage);
        document.documentElement.lang = geoLanguage;
      }
    });
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
    document.documentElement.lang = language;
    localStorage.setItem(this.LANGUAGE_KEY, language);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang || this.DEFAULT_LANGUAGE;
  }

  private languageFromBrowser(): string {
    const browserLanguage = (navigator.language || this.DEFAULT_LANGUAGE)
      .slice(0, 2)
      .toLowerCase();
    return SUPPORTED_LANGUAGES.includes(browserLanguage)
      ? browserLanguage
      : this.DEFAULT_LANGUAGE;
  }

  private async detectLanguageByGeoIp(): Promise<string | null> {
    const result = await firstValueFrom(
      this.http.get<{ country_code?: string }>('https://ipwho.is/').pipe(
        timeout(2000),
        catchError(() => of(null))
      )
    );
    const countryCode = result?.country_code?.toUpperCase();
    if (!countryCode) return null;
    if (PORTUGUESE_COUNTRIES.has(countryCode)) return 'pt';
    if (SPANISH_COUNTRIES.has(countryCode)) return 'es';
    return 'en';
  }
}

