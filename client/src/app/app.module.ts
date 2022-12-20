import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Pages/about/about.component';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
