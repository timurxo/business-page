import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/font-awesome.css', '../../assets/css/templatemo-softy-pinko.css', '../../assets/css/flex-slider.css']
})
export class NavigationBarComponent {

  public mobile : boolean = false;

  public show : boolean = false;

  constructor() { }


  ngOnInit(): void {
    if (window.innerWidth <= 768) { // 768px portrait
      this.mobile = true;
      console.log("screen is mobile!");
      
    }
  }

  public menuTriggerClicked() {
    console.log('* menu clicked');

    
  }
}
