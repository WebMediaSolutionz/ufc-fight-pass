import { UfcFightPassPage } from './app.po';

describe('ufc-fight-pass App', () => {
  let page: UfcFightPassPage;

  beforeEach(() => {
    page = new UfcFightPassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
