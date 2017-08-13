import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
    title: string = 'Items List';

    getTitle(): string {
        return this.title;
    }
    
}