import { KombuchaTaproomPage } from './app.po';

describe('kombucha-taproom App', () => {
  let page: KombuchaTaproomPage;

  beforeEach(() => {
    page = new KombuchaTaproomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
