import { TestBed } from '@angular/core/testing';

import { RepoRetrievalService } from './repo-retrieval.service';

describe('RepoRetrievalService', () => {
  let service: RepoRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
