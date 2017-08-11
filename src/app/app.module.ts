import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemCreatorComponent } from './item-creator.component';
import { TodayDateComponent } from './today-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreatorComponent,
    ItemListComponent,
    TodayDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
