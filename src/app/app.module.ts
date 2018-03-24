import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FooterComponent } from './footer/footer.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  // register the app component here because even through it's also used in bootstrap
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FooterComponent,
    WarningAlertComponent,
    SuccessAlertComponent
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
