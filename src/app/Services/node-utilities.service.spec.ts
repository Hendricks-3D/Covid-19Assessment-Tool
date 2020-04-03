import { TestBed } from '@angular/core/testing';

import { NodeUtilitiesService } from './node-utilities.service';

describe('NodeUtilitiesService', () => {
  let service: NodeUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
