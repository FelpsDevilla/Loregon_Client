import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcervoComponent } from './pages/acervo/acervo.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PainelAdiministrativoComponent } from './pages/painel-adiministrativo/painel-adiministrativo.component';
import { GerenciamentoUsuariosComponent } from './pages/pages-Painel-Adiministrativo/gerenciamento-usuarios/gerenciamento-usuarios.component';
import { GerenciamentoAcervoComponent } from './pages/pages-Painel-Adiministrativo/gerenciamento-acervo/gerenciamento-acervo.component';
import { GerenciamentoBibliotecaComponent } from './pages/pages-Painel-Adiministrativo/gerenciamento-biblioteca/gerenciamento-biblioteca.component';
import { GerenciamentoGaleriaComponent } from './pages/pages-Painel-Adiministrativo/gerenciamento-galeria/gerenciamento-galeria.component';
import { EditarUsuarioComponent } from './Components/editar-usuario/editar-usuario.component';
import { EditarItemAcervoComponent } from './Components/editar-item-acervo/editar-item-acervo.component';
import { EditarLivroComponent } from './Components/editar-livro/editar-livro.component';
import { EditarItemGaleriaComponent } from './Components/editar-item-galeria/editar-item-galeria.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
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
        component: PainelAdiministrativoComponent,
        children: [
          {path: "usuarios", component: GerenciamentoUsuariosComponent},
          {path: "usuarios/:id", component: EditarUsuarioComponent },
          {path: "acervo", component: GerenciamentoAcervoComponent},
          {path: "acervo/:id", component: EditarItemAcervoComponent },
          {path: "biblioteca", component: GerenciamentoBibliotecaComponent},
          {path: "biblioteca/:id", component: EditarLivroComponent },
          {path: "galeria", component: GerenciamentoGaleriaComponent},
          {path: "galeria/:id", component: EditarItemGaleriaComponent },
          {path: "", redirectTo: 'usuarios', pathMatch: 'full' }
        ]
      }
];
