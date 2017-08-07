import { TBAngular4Page } from './app.po';

describe('tb-angular4 App', () => {
  let page: TBAngular4Page;

  beforeEach(() => {
    page = new TBAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
