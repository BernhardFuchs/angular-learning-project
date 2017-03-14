import { Member } from './../../api/member';
import { Component, OnInit, ViewChild, trigger, animate, state, transition, style } from '@angular/core';
import { LocalMemberService } from '../../services/local-member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
  animations: [
    trigger('formError', [
      state('in', style({
        transform : 'scale(1)'
      })),

      transition(':enter', [
        style({
          transform : 'scale(0.7)'
        }),
        animate('500ms')
      ]),

      transition(':leave', animate('500ms', style({
        transform: 'scale(0.7)'
      })))

    ])
  ]
})
export class MemberFormComponent implements OnInit {

  @ViewChild('memberForm') form:NgForm;

  genders=[
    {name : 'Male', value : 'male'},
    {name : 'Female', value : 'female'}
  ];

  member:Member = {
    name : '',
    age : 0,
    unit: '',
    gender: '',
    id: 0

  };
  constructor(
    protected memberService:LocalMemberService,
    protected router:Router,
    protected route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id > 0){
        this.memberService.getMember(id)
          .then(member => {
            this.member = member;
        });
      }
    });
  }

  submitMember(memberForm) {
    if(memberForm.valid){

      let promise;

      if(this.member.id > 0){
        promise = this.memberService.editMember(this.member);
      } else {
        promise = this.memberService.addMember(this.member);
      }

      promise.then(() => {
        this.router.navigate(['/member-list'])
      });
    }
    
  }

}
