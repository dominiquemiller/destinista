import { DestinistaPage } from './app.po';

describe('destinista App', () => {
  let page: DestinistaPage;

  beforeEach(() => {
    page = new DestinistaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
