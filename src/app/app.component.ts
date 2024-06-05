import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'coach-assistant-frontend';
  lang: 'pl' | 'en' = 'pl';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  switchLang(lang: 'pl' | 'en'): void{
    this.lang = lang;
    this.translate.use(this.lang);
  }
}
