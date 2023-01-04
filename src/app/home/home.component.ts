import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  LANGUAGE;

  constructor(
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    this.LANGUAGE = this.translate.currentLang;

  }

  changeLang(event: Event) {
    const target = (event.target as HTMLInputElement);
    this.LANGUAGE = target.value;
    this.translate.use(this.LANGUAGE)
    localStorage.setItem("lang", target.value);
  }

}
