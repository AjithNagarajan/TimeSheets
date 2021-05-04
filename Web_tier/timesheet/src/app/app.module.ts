import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemesModule } from './themes/themes.module';



@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
