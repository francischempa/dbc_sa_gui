import { TestBed } from '@angular/core/testing';

import { GeneralPubSubService } from './general-pub-sub.service';

describe('GeneralPubSubService', () => {
  let service: GeneralPubSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralPubSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
