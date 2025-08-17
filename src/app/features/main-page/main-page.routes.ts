import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ArchiveComponent } from './archive/archive.component';
import { LibraryComponent } from './library/library.component';

export const MainPageRoutes: Routes = [
    {
        path: "",
        redirectTo: "Home",
        pathMatch: "full"
      },
      {
        path: "Home",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "archive",
        component: ArchiveComponent
      },
      {
        path: "gallery",
        component: GalleryComponent
      },
      {
        path: "biblioteca",
        component: LibraryComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
];
