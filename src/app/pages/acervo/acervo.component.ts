import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../Components/card/card.component";
import { AcervoService } from '../../services/acervo.service';
import { AcervoItem } from '../../classes/acervo-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acervo',
  standalone: true,
  imports: [CardComponent, CommonModule],
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
