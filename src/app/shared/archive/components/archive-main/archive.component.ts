import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { ArchiveService } from '../../../../shared/archive/services/archive.service';
import { ArchiveItem } from '../../../../shared/archive/models/archive-item';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from "../../../../shared/components/filtro/filtro.component";

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CardComponent, CommonModule, FiltroComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent implements OnInit {

  public itens: ArchiveItem[] = [];

  constructor(private ArchiveService: ArchiveService) {
  }

  ngOnInit(): void {
    this.ArchiveService.getAllItens().subscribe({
      next: (data) => {
        this.itens = data
      },
      error: (err) => console.error('Erro ao carregar usuários', err)
    })
  }
}
