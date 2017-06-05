import { ExampleUiPage } from './app.po';

describe('example-ui App', () => {
  let page: ExampleUiPage;

  beforeEach(() => {
    page = new ExampleUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
