import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selectedSegment: string = 'home' ;

  constructor() {}
  segmentChanged(ev){
    this.selectedSegment = ev.target.value;
  }

}
