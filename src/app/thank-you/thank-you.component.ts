import { Component, OnInit } from '@angular/core';
import {Text} from '../model/text';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  text: any = Text;
  constructor(private translate: TranslateService ) { }

  ngOnInit(): void {
  }

}
