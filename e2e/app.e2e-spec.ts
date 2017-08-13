import { TBAngular4Page } from './app.po';

describe('tb-angular4 App', () => {
  let page: TBAngular4Page;

  beforeEach(() => {
    page = new TBAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Component Unit Test!');
  });

  it('should display an item-list component with 2 items', () => {
    let itemListNode;
    let labels;

    page.navigateTo();
    itemListNode = page.getItemListNode();
    expect(itemListNode).toBeTruthy();
    labels = page.getItemLabels();
    expect(labels.getText()).toEqual(['Item 1', 'Item 2']);
  });

  it('should display an item-list component with only 1 item after the user deletes the first item', () => {
    let labels;
    let deleteBtn;

    deleteBtn = page.getDeleteBtn(0);
    deleteBtn.click();
    labels = page.getItemLabels();
    expect(labels.getText()).toEqual(['Item 2']);
  });

});
