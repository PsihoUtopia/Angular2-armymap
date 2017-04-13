import { ArmymapPage } from './app.po';

describe('armymap App', () => {
  let page: ArmymapPage;

  beforeEach(() => {
    page = new ArmymapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
