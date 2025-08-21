import { Component } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-admin-page',
  imports: [MatSidenav, MatSidenavModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatListModule, RouterLink],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class PainelAdiministrativoComponent {

}
