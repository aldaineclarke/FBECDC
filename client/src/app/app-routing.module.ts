import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistrationFormComponent } from './Pages/registration-form/registration-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'contact', component:ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'enrol', component: RegistrationFormComponent},
  {path:'gallery', component:GalleryComponent},


  // default route
  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: "**", redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
