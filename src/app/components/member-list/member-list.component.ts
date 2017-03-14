import { Component, OnInit } from '@angular/core';
import { LocalMemberService } from '../../services/local-member.service';
import { Member } from '../../api/member';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  inDevelopment = !environment.production;
  members:Member[];
  filter:any = {};

  changeFilter(key, filterKey) {
    this.filter[key] = filterKey;
    this.memberService.listMembers(this.filter)
      .then(members => {
        this.members = members;
      });
  }

  genderFilterConfig = [
    {name: "Male", key:"male"},
    {name: "Female", key:"female"},
    {name: "All", active: true}
  ];

  unitFilterConfig = [
    {name: "Sales", key:"sales"},
    {name: "Hr", key:"hr"},
    {name: "All", active: true}
  ];

  constructor(protected memberService:LocalMemberService) { }

  removeMember(index:number) {
    this.memberService
      .removeMember(this.members[index])
      .then(() => {
        this.members.splice(index, 1);
      }); 
  }

  ngOnInit() {
    /*Promise.all([
      this.memberService.addMember({ name: "max muster 1", age : 30, unit : "sales", gender: "male" }) ,
      this.memberService.addMember({ name: "maria muster 1", age : 23, unit : "sales", gender: "female" }) ,
      this.memberService.addMember({ name: "max muster 2", age : 54, unit : "hr", gender: "male" }) ,
      this.memberService.addMember({ name: "maria muster 2", age : 26, unit : "hr", gender: "female" }) ,
    ]).then(() => {
      this.memberService.listMembers()
        .then(members => {
          this.members = members;
        });
    });*/
    
    this.memberService.listMembers()
      .then(members => {
        this.members = members;
      })

    
  }

}
