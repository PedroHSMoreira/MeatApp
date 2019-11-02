import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
options: AnimationOptions = {
  path: '../assets/animations/cooking.json',
  renderer: 'canvas',
  autoplay: true,
  loop: false
}
animationCreated(animationItem: AnimationItem): void {
  animationItem.setSpeed(0.5)
} 

styles: Partial<CSSStyleDeclaration> = {
  maxWidth: '300px',
  margin: '0 auto'
};

  constructor() { }

  ngOnInit() {
    
  }

}
