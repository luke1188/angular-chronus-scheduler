import { TestBed } from '@angular/core/testing';

import { AngularChronusSchedulerService } from './angular-chronus-scheduler.service';

describe('AngularChronusSchedulerService', () => {
  let service: AngularChronusSchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularChronusSchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
