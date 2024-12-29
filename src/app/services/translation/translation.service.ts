// src/app/translate.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslateConfigService {
  constructor(
    private translate: TranslateService,
    private http: HttpClient,
  ) {
    this.initTranslate();
  }

  private initTranslate() {
    console.log('initTranslate');

    this.translate.addLangs(['en', 'hi']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
  }

  public fetchTranslations(lang: string) {
    const apiUrl = `http://127.0.0.1:9000/translations/${lang}.json`; // Correct URL

    this.http.get(apiUrl).subscribe({
      next: (translations: any) => {
        console.log('Fetched translations from local:', translations);
        this.translate.setTranslation(lang, translations, true);
        this.translate.use(lang);
      },
      error: (error) => {
        if (error.status === 404) {
          console.error('Translations not found:', error);
        } else {
          console.error('Error fetching translations:', error);
        }
      },
    });
  }
}
