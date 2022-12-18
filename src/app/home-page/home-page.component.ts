import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/font-awesome.css', '../../assets/css/templatemo-softy-pinko.css', '../../assets/css/flex-slider.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    // AOS.init();
    // AOS.init({disable: 'mobile'});


    AOS.init({
      once: true, // this one if you want to load animation once else you can remove it
      disable: window.innerWidth < 768
    });
  }


}
