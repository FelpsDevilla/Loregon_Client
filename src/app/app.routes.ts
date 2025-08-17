import { Routes } from '@angular/router';
import { HomeComponent } from './features/main-page/home/home.component';
import { AboutComponent } from './features/main-page/about/about.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "Main",
    pathMatch: "full"
  },
  {
    path: "Main",
    component: HomeComponent
  },
  {
    path: "Login",
    component: AboutComponent
  }
];