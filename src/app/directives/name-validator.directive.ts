import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Http } from '@angular/http';

@Directive({
  selector: '[appNameValidator]' ,
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: NameValidatorDirective,
    multi: true
  }]
})
export class NameValidatorDirective implements Validator {
  
  validate(c: AbstractControl): any {
    return new Promise<any> ((resolve, reject) => {

      this.http.post('/api/name', { name : c.value })
        .subscribe(() => {
          resolve(null);
        }, () => {
          resolve({
            'name' : 'invalid Name'
          });
        });
    });
  }
  
  constructor(protected http:Http) { }

}
