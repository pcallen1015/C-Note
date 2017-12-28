import { CNotePage } from './app.po';

describe('cnote App', () => {
  let page: CNotePage;

  beforeEach(() => {
    page = new CNotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
