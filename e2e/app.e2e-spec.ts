import { SportStatsPage } from './app.po';

describe('sport-stats App', function() {
  let page: SportStatsPage;

  beforeEach(() => {
    page = new SportStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
