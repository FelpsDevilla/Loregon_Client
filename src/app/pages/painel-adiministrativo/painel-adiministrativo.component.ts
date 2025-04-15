import { Component } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-painel-adiministrativo',
  imports: [MatSidenav, MatSidenavModule, RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './painel-adiministrativo.component.html',
  styleUrl: './painel-adiministrativo.component.css'
})
export class PainelAdiministrativoComponent {

}
