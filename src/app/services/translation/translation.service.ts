// src/app/translate.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Injectable({ providedIn: 'root' })
export class TranslateConfigService {
  constructor(
    private translate: TranslateService,
    private http: HttpClient,
  ) {
    this.translate.setDefaultLang('en'); // Set your default language
    this.translate.use('en'); // Set the initial language
    console.log('TranslateConfigService');

    translate.addLangs(['en', 'hi']); // Add supported languages
  }
}
