import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';


@NgModule({
  // register the app component here because even throgh it's also used in bootstrap
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // which component should angular be aware of at the point of time the whole application starts
  bootstrap: [AppComponent]
})
export class AppModule { }
