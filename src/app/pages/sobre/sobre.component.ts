import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { HeaderComponent } from "../../Components/header/header.component";
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-sobre',
  imports: [FooterComponent, HeaderComponent, MatDivider],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
