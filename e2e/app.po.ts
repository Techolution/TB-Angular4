import { browser, by, element } from 'protractor';

export class TBAngular4Page {
  navigateTo() {
    return browser.get('/');
  }

  getDeleteBtn(index) {
    return element.all(by.css('item-list > .item > .deleteBtn')).get(index);
  }

  getItemListNode() {
    return element(by.css('item-list'));
  }

  getItemLabels() {
    return element.all(by.css('item-list > .item > span'));
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

}
