import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/bootstrap.min.css',
    '../assets/css/font-awesome.css',
    '../assets/css/templatemo-softy-pinko.css',
    '../assets/css/flex-slider.css',
  ],
})

export class AppComponent implements OnInit {
  title = 'business-page-angular';

  constructor() {}

  ngOnInit(): void {}
}


