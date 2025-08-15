import { Routes } from '@angular/router';
import { InicioComponent } from './features/main-page/inicio/inicio.component';
import { SobreComponent } from './features/main-page/sobre/sobre.component';
import { GaleriaComponent } from './features/main-page/gallery/gallery.component';
import { ContatoComponent } from './features/main-page/contato/contato.component';
import { LoginComponent } from './features/main-page/login/login.component';
import { ArchiveComponent } from './features/main-page/archive/archive.component';
import { LibraryComponent } from './features/main-page/library/library.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "Home",
        pathMatch: "full"
      },
      {
        path: "Home",
        component: InicioComponent
      },
      {
        path: "sobre",
        component: SobreComponent
      },
      {
        path: "acervo",
        component: ArchiveComponent
      },
      {
        path: "galeria",
        component: GaleriaComponent
      },
      {
        path: "biblioteca",
        component: LibraryComponent
      },
      {
        path: "contato",
        component: ContatoComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
];
