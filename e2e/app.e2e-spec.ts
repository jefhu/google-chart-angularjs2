import { GoogleChartPage } from './app.po';

describe('google-chart App', function() {
  let page: GoogleChartPage;

  beforeEach(() => {
    page = new GoogleChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
