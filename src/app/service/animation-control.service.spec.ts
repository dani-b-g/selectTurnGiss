import { TestBed } from '@angular/core/testing';

import { AnimationControlService } from './animation-control.service';

describe('AnimationControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimationControlService = TestBed.get(AnimationControlService);
    expect(service).toBeTruthy();
  });
});
