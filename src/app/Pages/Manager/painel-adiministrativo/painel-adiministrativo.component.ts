import { Component } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-painel-adiministrativo',
  imports: [MatSidenav, MatSidenavModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatListModule, RouterLink],
  templateUrl: './painel-adiministrativo.component.html',
  styleUrl: './painel-adiministrativo.component.css'
})
export class PainelAdiministrativoComponent {

}
