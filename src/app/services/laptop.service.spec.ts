import { TestBed } from '@angular/core/testing';

import { laptopservice } from './laptop.service';

describe('laptopservice', () => {
  let service: laptopservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(laptopservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
