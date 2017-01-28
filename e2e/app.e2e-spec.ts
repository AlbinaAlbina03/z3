import { Z3Page } from './app.po';

describe('z3 App', function() {
  let page: Z3Page;

  beforeEach(() => {
    page = new Z3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
