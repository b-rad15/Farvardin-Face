import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `<div (click)="handleClick(this)" style="min-height: 100%; min-width: 100%; background-color: blue; fill: blue;"><p>Hello</p>
  //   </div>`
})

export class AppComponent  implements OnInit  {
  title = 'Facemaker';
  div;
  z = 0;
  images = [];
  imageElements = [];
  mouseX = 0;
  mouseY = 0;
  makeFarvardin(x, y) {
    if (!this.images.includes('' + x + ',' + y)) {
      const width = 400;
      const height = 400;
      const image = new Image(width, height);
      image.src = '../assets/farvardin-no-neck-small.png';
      image.setAttribute('style', 'left: ' + (x - width / 2) + 'px; top: ' + (y - height / 2) + 'px; z-index: '
                          + this.z++ + '; position: absolute');
      this.div.appendChild(image);
      this.images.push('' + x + ',' + y);
      // while(this.imageElements.push(image) > 200) {
      //   this.imageElements.shift().remove();
      // }
    }
  }
  handleClick() {
  }
  mouseMoved(event) {
    this.makeFarvardin(event.pageX, event.pageY);
    console.log(event);
  }
  ngOnInit() {
    this.div = document.getElementById('canvas');
  }
}
