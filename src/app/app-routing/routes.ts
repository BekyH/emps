import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
export const routes:Routes=[
  {path:'home'   ,component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]