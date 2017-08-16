import { GoolemapPage } from './app.po';

describe('goolemap App', () => {
  let page: GoolemapPage;

  beforeEach(() => {
    page = new GoolemapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
