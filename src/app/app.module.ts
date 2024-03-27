import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { BLSComponent } from './components/bls/bls.component';
import { ChockComponent } from './components/chock/chock.component';
import { HemorragiasComponent } from './components/hemorragias/hemorragias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BLSComponent,
    ChockComponent,
    HemorragiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
