import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberFormComponent } from '../components/member-form/member-form.component';

@Injectable()
export class MemberFormDeactivatorService implements CanDeactivate<MemberFormComponent> {
  
  canDeactivate(component: MemberFormComponent):boolean {
    if(component.form.dirty && !component.form.submitted){
      return window.confirm('Do you really want to navigate away?');
    }
    return true;
  }

  constructor() { }

}
