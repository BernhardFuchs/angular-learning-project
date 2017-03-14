import { MemberFormPage } from './member-form.po';

describe('e2e Member-Form', () => {
    

    it('name shold have requ message', () => {
        let memberFormPage = new MemberFormPage();
        memberFormPage.navigateTo();
        memberFormPage.submitForm();
        expect(memberFormPage.getFormFieldErrorMessage('name'))
            .toMatch('Name is required');
    });

    it('name shold have minlength message', () => {
        let memberFormPage = new MemberFormPage();
        memberFormPage.navigateTo();
        memberFormPage.sendText("ab", "name");
        memberFormPage.submitForm();
        expect(memberFormPage.getFormFieldErrorMessage('name'))
            .toMatch('Name must be at least 3 chars');
    });

});