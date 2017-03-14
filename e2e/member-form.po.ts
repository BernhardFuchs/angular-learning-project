import { browser, element, by } from 'protractor';

export class MemberFormPage{

    navigateTo(id:number = 0){
        return browser.get('/member-form/' + id);
    }

    submitForm(){
        return element(by.css('[type="submit"]')).click();
    }

    getFormFieldErrorMessage(name:string){
        return element(by.css('[name="' + name + '"] + span')).getText();
    }

    sendText(text:string, name:string){
        element(by.css('[name="' + name + '"]')).sendKeys(text);
    }
}