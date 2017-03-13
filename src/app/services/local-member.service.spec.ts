import { TestBed, inject } from '@angular/core/testing';

import { LocalMemberService } from './local-member.service';

describe('LocalMemberService', () => {

  let localMemberService:LocalMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalMemberService]
    });
    localMemberService = TestBed.get(LocalMemberService);
  });

  it('should successfully add a member', (done) => {
    localMemberService.addMember({
      name: "max",
      age: 30,
      unit: "sales",
      gender: "male"
    }).then(id => {
      expect(id).toBeGreaterThan(0);
      done();
    });
  });

});
