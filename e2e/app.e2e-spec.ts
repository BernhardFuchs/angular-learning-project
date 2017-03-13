import { AngularLearningProjectPage } from './app.po';

describe('angular-learning-project App', () => {
  let page: AngularLearningProjectPage;

  beforeEach(() => {
    page = new AngularLearningProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
