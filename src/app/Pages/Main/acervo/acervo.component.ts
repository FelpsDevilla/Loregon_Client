import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../../Components/card/card.component";
import { AcervoService } from '../../../Services/acervo.service';
import { AcervoItem } from '../../../Classes/Archive/acervo-item';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../Components/header/header.component";
import { FooterComponent } from "../../../Components/footer/footer.component";
import { FiltroComponent } from "../../../Components/filtro/filtro.component";

@Component({
  selector: 'app-acervo',
  standalone: true,
  imports: [CardComponent, CommonModule, HeaderComponent, FooterComponent, FiltroComponent],
  templateUrl: './acervo.component.html',
  styleUrl: './acervo.component.css'
})
export class AcervoComponent implements OnInit {

  public itens: AcervoItem[] = [];

  constructor(private acervoService: AcervoService) {
  }

  ngOnInit(): void {
    this.acervoService.getAllItens().subscribe({
      next: (data) => {
        this.itens = data
      },
      error: (err) => console.error('Erro ao carregar usuários', err)
    })
  }
}
