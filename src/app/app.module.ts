import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';
import { NgModule } from '@angular/core';
import { MyFirstService } from './myFirstService.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
