import { TestBed, inject } from '@angular/core/testing';

import { MemberFormDeactivatorService } from './member-form-deactivator.service';

describe('MemberFormDeactivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberFormDeactivatorService]
    });
  });

  it('should ...', inject([MemberFormDeactivatorService], (service: MemberFormDeactivatorService) => {
    expect(service).toBeTruthy();
  }));
});
