import { ComponentFixture, TestBed} from '@angular/core/testing';
import { Item, ItemListComponent } from './item-list.component';
import { TitleService } from './title.service';
import { By } from '@angular/platform-browser';

describe('item-list.component', () => {

    let debugEl;
    let el: HTMLElement;
    let fixture: ComponentFixture<ItemListComponent>;
    let itemListComponent: ItemListComponent;

    let titleServiceStub = {
        getTitle: () => { return 'Items List'; }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ItemListComponent
            ],
            providers: [ {provide: TitleService, useValue: titleServiceStub } ]
        }).compileComponents();

        fixture = TestBed.createComponent(ItemListComponent);
        debugEl = fixture.debugElement;
        itemListComponent = debugEl.componentInstance;
        el = debugEl.nativeElement;
    });

    it('should create the component', () => {
        expect(itemListComponent).toBeTruthy();
    });

    it(`should have a title property of 'Items List'`, () => {
        expect(itemListComponent.title).toEqual('Items List');
    });

    it(`should render the title 'Item List' in an h1 tag`, () => {
        fixture.detectChanges();

        expect(el.querySelector('h1').textContent).toEqual('Items List');
    });

    it('should render an item for every item in the `items` property', () => {
        let renderedItems;
        fixture.detectChanges();
        renderedItems = el.querySelectorAll('.item');
        expect(renderedItems.length).toBe(0);
        itemListComponent.items = [ { id: 1, label: 'Item 1' }, { id: 2, label: 'Item 2' } ];
        fixture.detectChanges();
        renderedItems = el.querySelectorAll('.item');
        expect(renderedItems.length).toBe(2);
    });

    it('should display a label for a rendered item', () => {
        itemListComponent.items = [ { id: 1, label: 'Hello Item!' } ];
        fixture.detectChanges();
        expect(el.querySelector('.item > span').textContent).toEqual('Hello Item!');
    });

    it('should fire a deleteRequest with the item when the delete button for that item is clicked', () => {
        let deleteBtn;
        let deleteRequestItem: Item;
        let item: Item = { id: 1, label: 'Hello Item!' };

        itemListComponent.items = [ item ];
        fixture.detectChanges();
        deleteBtn = debugEl.query(By.css('.item > .deleteBtn'));
        expect(deleteBtn).toBeTruthy();

        itemListComponent.deleteRequest.subscribe((item: Item) => deleteRequestItem = item);
      
        deleteBtn.triggerEventHandler('click', null);
        expect(deleteRequestItem).toBe(item);
    });
    
});