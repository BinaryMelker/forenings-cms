import { ForeningsCmsPage } from './app.po';

describe('forenings-cms App', () => {
  let page: ForeningsCmsPage;

  beforeEach(() => {
    page = new ForeningsCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
