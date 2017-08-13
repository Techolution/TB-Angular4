import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list.component';
import { TitleService } from './title.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
