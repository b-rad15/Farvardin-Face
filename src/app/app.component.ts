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
  canvas;
  z = 0;
  images = [];
  image;
  imageElements = [];
  mouseX = 0;
  mouseY = 0;
  width = 400;
  height = 400;
  cxt;
  makeFarvardin(x, y) {
      const image = new Image(this.width, this.height);
      image.src = 'assets/farvardin-no-neck-small.png';
      image.setAttribute('style', 'left: ' + (x - this.width / 2) + 'px; top: ' + (y - this.height / 2) + 'px; z-index: '
                          + this.z++ + '; position: absolute');
      this.canvas.appendChild(image);
    // this.cxt.drawImage(this.image, x - this.width / 2, y - this.height / 2);
  }
  handleClick() {
  }
  mouseMoved(event) {
    this.makeFarvardin(event.pageX, event.pageY);
    console.log(event);
  }
  ngOnInit() {
    this.canvas = document.getElementById('mainCanvas');
    this.canvas.height = document.body.clientHeight;
    this.canvas.width = document.body.clientWidth;
    this.canvas.style = 'min-width: ' + document.body.clientWidth + '; min-height: ' + document.body.clientHeight + ';';
    // this.cxt = this.canvas.getContext('2d');
    // this.image = new Image(this.width, this.height);
    // this.image.src = 'assets/farvardin-no-neck.png';
  }
}
