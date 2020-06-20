import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challenge';
  loading: boolean = true;
  constructor(private translate: TranslateService){
  }
  toggleLanguage(lang: string){
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    setTimeout(() => { this.loading = false; }, 2000);
  }
}
