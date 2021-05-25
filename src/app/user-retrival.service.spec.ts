import { TestBed } from '@angular/core/testing';

import { UserRetrivalService } from './user-retrival.service';

describe('UserRetrivalService', () => {
  let service: UserRetrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRetrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
