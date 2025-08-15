import { Routes } from "@angular/router";
import { PainelAdiministrativoComponent } from "./admin-panel.component";
import { GerenciamentoUsuariosComponent } from "./Components/user/user-management.component";
import { EditarUsuarioComponent } from "./Components/user/components/edit-user/edit-user.component";
import { GerenciamentoAcervoComponent } from "./Components/archive/archive-management.component";
import { EditarItemGaleriaComponent } from "./Components/gallery/components/edit-gallery-item/edit-gallery-item.component";
import { GerenciamentoGaleriaComponent } from "./Components/gallery/gallery-management.component";
import { EditarLivroComponent } from "./Components/library/components/edit-book/edit-book.component";
import { GerenciamentoBibliotecaComponent } from "./Components/library/library-management.component";
import { EditArchiveItemComponent } from "./Components/archive/components/edit-archive-item/edit-archive-item.component";

export const adminRoutes: Routes = [
    {
        path: "painel-administrativo",
        component: PainelAdiministrativoComponent,
        children: [
            { path: "usuarios", component: GerenciamentoUsuariosComponent },
            { path: "usuarios/:id", component: EditarUsuarioComponent },
            { path: "acervo", component: GerenciamentoAcervoComponent },
            { path: "acervo/:id", component: EditArchiveItemComponent },
            { path: "biblioteca", component: GerenciamentoBibliotecaComponent },
            { path: "biblioteca/:id", component: EditarLivroComponent },
            { path: "galeria", component: GerenciamentoGaleriaComponent },
            { path: "galeria/:id", component: EditarItemGaleriaComponent },
            { path: "", redirectTo: 'usuarios', pathMatch: 'full' }
        ]
    }
];