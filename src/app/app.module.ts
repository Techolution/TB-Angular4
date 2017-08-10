import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyFirstService } from './myFirstService.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
