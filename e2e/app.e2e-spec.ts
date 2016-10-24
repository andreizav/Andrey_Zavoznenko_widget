import { WidgetPage } from './app.po';

describe('widget App', function() {
  let page: WidgetPage;

  beforeEach(() => {
    page = new WidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
