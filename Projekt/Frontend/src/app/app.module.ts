import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {DataComponent} from "./data/data.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UpdateDatabaseComponent } from './update-database/update-database.component';
import { AccountComponent } from './account/account.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";

const appRoutes: Routes = [
  {path:"data", component:DataComponent},
  {path:"", component:LandingPageComponent},
  {path:"account", component:AccountComponent},
  {path:"team", component: TeamComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    UpdateDatabaseComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
