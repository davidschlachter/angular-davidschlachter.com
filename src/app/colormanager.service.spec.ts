import { TestBed } from '@angular/core/testing';

import { ColormanagerService } from './colormanager.service';

describe('ColormanagerService', () => {
  let service: ColormanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColormanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
