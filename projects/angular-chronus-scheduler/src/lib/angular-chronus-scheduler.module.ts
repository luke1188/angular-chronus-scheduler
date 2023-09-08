import { NgModule } from '@angular/core';
import { AngularChronusSchedulerComponent } from './angular-chronus-scheduler.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [

    AngularChronusSchedulerComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    AngularChronusSchedulerComponent
  ]
})
export class AngularChronusSchedulerModule { }
