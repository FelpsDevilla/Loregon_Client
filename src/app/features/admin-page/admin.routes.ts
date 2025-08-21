import { Routes } from "@angular/router";
import { PainelAdiministrativoComponent } from "./admin-page.component";
import { UserManagementComponent } from "./Components/user/user-management.component";
import { EditUserComponent } from "./Components/user/components/edit-user/edit-user.component";
import { ArchiveManagementComponent } from "./Components/archive/archive-management.component";
import { EditGalleryItemComponent } from "./Components/gallery/components/edit-gallery-item/edit-gallery-item.component";
import { GalleryManagementComponent } from "./Components/gallery/gallery-management.component";
import { EditLibraryItemComponent } from "./Components/library/components/edit-library/edit-library-item.component";
import { ManagementLibraryComponent } from "./Components/library/library-management.component";
import { EditArchiveItemComponent } from "./Components/archive/components/edit-archive-item/edit-archive-item.component";

export const adminPageRoutes: Routes = [
    {
        path: "",
        redirectTo: "pageAdmin",
        pathMatch: "full"
    },
    {
        path: "pageAdmin",
        component: PainelAdiministrativoComponent,
        children: [
            { path: "", redirectTo: 'users', pathMatch: 'full' },
            { path: "users", component: UserManagementComponent },
            { path: "users/:id", component: EditUserComponent },
            { path: "archive", component: ArchiveManagementComponent },
            { path: "archive/:id", component: EditArchiveItemComponent },
            { path: "library", component: ManagementLibraryComponent },
            { path: "library/:id", component: EditLibraryItemComponent },
            { path: "gallery", component: GalleryManagementComponent },
            { path: "gallery/:id", component: EditGalleryItemComponent },
        ]
    }
];