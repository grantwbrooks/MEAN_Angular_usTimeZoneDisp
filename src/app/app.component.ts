import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  UTC=UTC;
  PST=PST;
  MST=MST;
  CST=CST;
  EST=EST;
  show = true;
  lastClicked = false;
}

var timeHere = Date.now();
var offset = new Date().getTimezoneOffset();
var UTC = timeHere + (offset/60*3600000);
var PST = UTC - (7*3600000);
var MST = UTC - (6*3600000);
var CST = UTC - (5*3600000);
var EST = UTC - (4*3600000);


