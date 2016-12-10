import { CrudHgPage } from './app.po';

describe('crud-hg App', function() {
  let page: CrudHgPage;

  beforeEach(() => {
    page = new CrudHgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
