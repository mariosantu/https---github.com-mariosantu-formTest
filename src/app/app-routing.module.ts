import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  // { path:'about', component: AboutComponent},
	{ path:'contact', component: ContactsComponent},
	{ path:'signup', component: SignupComponent},
	{ path:'signin', component: SigninComponent},
	{ path:'contact/id', component: ContactsComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
