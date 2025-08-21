import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    loadChildren: () => import("./features/main-page/main-page.routes").then(m => m.MainPageRoutes)
  },
  {
    path: "login",
    loadComponent: () => import("./features/main-page/login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "admin",
    loadChildren: () => import("./features/admin-page/admin.routes").then(m => m.adminPageRoutes)
  }
];
