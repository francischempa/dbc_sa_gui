import { TestBed } from '@angular/core/testing';

import { GeneralWebService } from './general-web.service';

describe('GeneralWebService', () => {
  let service: GeneralWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
