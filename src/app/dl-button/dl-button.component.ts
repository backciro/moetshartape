import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';

@Component({
  selector: "dl-button",
  templateUrl: "./dl-button.component.html",
  styleUrls: ["./dl-button.component.scss"]
})
export class DlButtonComponent implements OnInit {
  
  constructor() { 
    this.status = 'download';
  }
  
  @Input() status: 'download' | 'download is-active' | 'download is-done';
  @Input() src;
  
  ngOnInit() {
    
  }

  download() {
    window.location.href = this.src;
  }
  
  toggleStat() {
    if (this.status === 'download') {
      this.status = 'download is-active';

      setTimeout(() => {
        this.status = 'download is-done';  
        this.download();      
      }, 4000);
    }
  }
  
}
