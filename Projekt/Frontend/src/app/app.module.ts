import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {DataComponent} from "./data/data.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UpdateDatabaseComponent } from './update-database/update-database.component';

const appRoutes: Routes = [
  {path:"data", component:DataComponent},
  {path:"updateDB", component:UpdateDatabaseComponent},
  {path:"", component:LandingPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    UpdateDatabaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
