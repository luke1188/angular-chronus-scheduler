import { Component, ViewChild } from '@angular/core';

import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myTitle: string = '';
  location: string = '';
  allDay: boolean = false;
  starts: string = '';
  ends: string = '';
  travelTime: string = '';
  repeats: string = '';
  color: string = 'Orange';

   @ViewChild(IonModal) modal: IonModal | undefined;
  constructor() {}
  cancel() {
    this.modal!.dismiss(null, 'cancel');
  }
  handleSelectedEvent(event:any) {
  // Do something with the clicked date
    console.log(event)
  }
  events: any[] = [];

  // Function to add an event to a date
  addEvent() {
    const event = {
      title: this.myTitle,
      location: this.location,
      allDay: this.allDay,
      starts: this.starts,
      ends: this.ends,
      travelTime: this.travelTime,
      repeats: this.repeats,
      color: this.color
    };
    this.events.push(event);
    this.cancel();
  }
  selectColor(color: string) {
    this.color = color;
  }
}
