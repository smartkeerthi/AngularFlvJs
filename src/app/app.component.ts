import { Component, OnInit } from '@angular/core';
import flvjs from 'flv.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFlv';
  ngOnInit() {
    const src = 'http://localhost:8000/live/test1.flv'
    this.flvPlay('videoElement', src);
  }

  flvPlay(id: string, src: string) {
    let toType = 'flv';

    if (flvjs.isSupported()) {
      const videoElement = document.getElementById(id) as HTMLMediaElement;
      const flvPlayer = flvjs.createPlayer({
        type: toType,
        url: src
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      // flvPlayer.play();
    }
  }
}
