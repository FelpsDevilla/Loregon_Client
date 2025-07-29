import { Component } from '@angular/core';
import { FooterComponent } from "../../..//Components/footer/footer.component";
import { HeaderComponent } from "../../../Components/header/header.component";

@Component({
  selector: 'app-biblioteca',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {

}
