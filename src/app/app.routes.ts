import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/Main/inicio/inicio.component';
import { AcervoComponent } from './Pages/Main/acervo/acervo.component';
import { BibliotecaComponent } from './Pages/Main/biblioteca/biblioteca.component';
import { ContatoComponent } from './Pages/Main/contato/contato.component';
import { GaleriaComponent } from './Pages/Main/galeria/galeria.component';
import { LoginComponent } from './Pages/Main/login/login.component';
import { SobreComponent } from './Pages/Main/sobre/sobre.component';
import { PainelAdiministrativoComponent } from './Pages/Manager/painel-adiministrativo/painel-adiministrativo.component';
import { GerenciamentoUsuariosComponent } from './Pages/Manager/gerenciamento-usuarios/gerenciamento-usuarios.component';
import { GerenciamentoAcervoComponent } from './Pages/Manager/gerenciamento-acervo/gerenciamento-acervo.component';
import { GerenciamentoBibliotecaComponent } from './Pages/Manager/gerenciamento-biblioteca/gerenciamento-biblioteca.component';
import { GerenciamentoGaleriaComponent } from './Pages/Manager/gerenciamento-galeria/gerenciamento-galeria.component';
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
