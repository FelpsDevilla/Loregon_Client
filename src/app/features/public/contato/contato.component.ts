import { Component } from '@angular/core';
import { FooterComponent } from "../../../Components/footer/footer.component";
import { HeaderComponent } from "../../../Components/header/header.component";
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-contato',
  imports: [FooterComponent, HeaderComponent, MatDivider],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
