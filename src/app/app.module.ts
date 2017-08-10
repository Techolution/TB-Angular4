import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyFirstService } from './myFirstService.service';

import { AppComponent } from './app.component';
import { HttpModule }  from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
