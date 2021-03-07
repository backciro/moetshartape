import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DbService } from './db.service';

const MAX_COUNTDOWN = 999;

class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
}) export class AppComponent implements OnInit {

  title = "moetshertape";
  counter: number;
  bounce = '';
  reachedObj = 'notReached';

  fileUri = 'https://res.cloudinary.com/hejjyiew1/image/upload/v1542387481/amvqrysxx5kom8m2zvsi.jpg';

  constructor(
    public ngZone: NgZone,
    private _db: DbService,
    ) {  }

  ngOnInit() {
    this.bounce = '';
    this.reachedObj = 'notReached';

    this._db.getClicks().then(res =>{
      this.counter = parseInt(res.toString().replace('"','').replace('"',''));
    })
    
    if (this.counter > MAX_COUNTDOWN - 1) {
      this.counter = 999;
    }
  }

  increment() {
    let guid = Guid.newGuid();
    this.bounce = 'bounce';
    
    setTimeout(() => {
      this.bounce = '';
    }, 200);
    
    this._db.click(guid).then(res =>{
      this.counter++;
    })
    
    if (this.counter > MAX_COUNTDOWN - 1) {
      this.reachedObj = 'reached';
    }
  }

  counterize(int) {
    const maxN = 8;
    let s = int + "";
    while (s.length < maxN) {
      s = "0" + s;
    }
    return s;
  }
}
