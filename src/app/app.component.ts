import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = "https://imgflip.com/s/meme/10-Guy.jpg";

  changeImage() {
    this.url = "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png";
  }

  revertImage() {
    this.url = "https://imgflip.com/s/meme/10-Guy.jpg";
  }
}
