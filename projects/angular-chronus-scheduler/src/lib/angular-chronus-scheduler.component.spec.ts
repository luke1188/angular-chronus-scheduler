import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChronusSchedulerComponent } from './angular-chronus-scheduler.component';

describe('AngularChronusSchedulerComponent', () => {
  let component: AngularChronusSchedulerComponent;
  let fixture: ComponentFixture<AngularChronusSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularChronusSchedulerComponent]
    });
    fixture = TestBed.createComponent(AngularChronusSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
