import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { RepUIComponent } from './rep-ui/rep-ui.component';
import { UserSearchformComponent } from './user-searchform/user-searchform.component';
import { RepSearchformComponent } from './rep-searchform/rep-searchform.component';


@NgModule({
  declarations: [
    AppComponent,
    UserUIComponent,
    RepUIComponent,
    UserSearchformComponent,
    RepSearchformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
