import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { offLineGuard } from './off-line.guard';

describe('offLineGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => offLineGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
