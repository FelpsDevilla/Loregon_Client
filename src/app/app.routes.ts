import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcervoComponent } from './pages/acervo/acervo.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PainelAdiministrativoComponent } from './pages/painel-adiministrativo/painel-adiministrativo.component';

export const routes: Routes = [
    {
        path: "",
        component: InicioComponent
      },
      {
        path: "inicio",
        component: InicioComponent
      },
      {
        path: "sobre",
        component: SobreComponent
      },
      {
        path: "acervo",
        component: AcervoComponent
      },
      {
        path: "galeria",
        component: GaleriaComponent
      },
      {
        path: "biblioteca",
        component: BibliotecaComponent
      },
      {
        path: "contato",
        component: ContatoComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "painel-administrativo",
        component: PainelAdiministrativoComponent
      }
];
