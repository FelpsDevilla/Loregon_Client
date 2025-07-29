import { Component } from '@angular/core';
import { HeaderComponent } from "../../../Components/header/header.component";
import { FooterComponent } from "../../../Components/footer/footer.component";
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent, FooterComponent, MatDivider],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
