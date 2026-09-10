import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) {
    this.update();
    this.translate.onLangChange.subscribe(() => this.update());
  }

  private readonly OG_LOCALES: Record<string, string> = {
    en: 'en_US',
    pt: 'pt_BR',
    es: 'es_ES',
  };

  private update(): void {
    this.translate.get(['seo.title', 'seo.description']).subscribe((t) => {
      const title = t['seo.title'];
      const description = t['seo.description'];
      if (!title || !description) return;

      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });

      const locale = this.OG_LOCALES[this.translate.currentLang] || this.OG_LOCALES['en'];
      this.metaService.updateTag({ property: 'og:locale', content: locale });
    });
  }
}
