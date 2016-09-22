import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from 'ionic-native';
@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  audio:any;
  constructor(public navCtrl: NavController) {
  }

  testVibrate()
  {
  	console.log("testVibrate");
  	Vibration.vibrate(1000);
  }

  testAudio()
  {
  	 console.log("testAudio");
  	 this.audio = new Audio();
     this.audio.src = "music/alert.mp3";
     this.audio.load();
     this.audio.play();
  }

  stopAudio()
  {
     console.log("stopAudio ");
     this.audio.pause();
  }
}
