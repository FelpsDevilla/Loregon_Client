import { Component } from '@angular/core';
import { FooterComponent } from "../../../Components/footer/footer.component";
import { HeaderComponent } from "../../../Components/header/header.component";

@Component({
  selector: 'app-galeria',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  
}
