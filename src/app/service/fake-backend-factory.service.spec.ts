import { TestBed } from '@angular/core/testing';

import { FakeBackendFactoryService } from './fake-backend-factory.service';

describe('FakeBackendFactoryService', () => {
  let service: FakeBackendFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBackendFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
