import { Component } from '@angular/core';
import { ManageContainerComponent } from '../../../../shared/components/manage-container/manage-container.component';
import { ArchiveItem } from '../../../../shared/archive/models/archive-item';

@Component({
  selector: 'app-archive-management',
  imports: [ManageContainerComponent],
  templateUrl: './archive-management.component.html',
  styleUrl: './archive-management.component.css'
})
export class ArchiveManagementComponent {

  archives: ArchiveItem[] = [
  {
    id: 1,
    thumbnailUrl: "https://picsum.photos/200/300",
    name: "Fotografia Antiga",
    creationDate: new Date("1920-05-12"),
    legend: "Família reunida em frente à casa",
    state: "RS",
    city: "Rio Grande",
    authorId: 10,
    collectionId: 5,
    donor: "Museu Histórico",
    contextHistory: "Parte da coleção de registros familiares do início do século XX.",
    created: new Date(),
    updated: new Date(),
    technique: "Fotografia em preto e branco",
    material: "Papel fotográfico",
    digitalized: true
  },
  {
    id: 2,
    thumbnailUrl: "https://picsum.photos/200/301",
    name: "Documento Oficial",
    creationDate: new Date("1887-03-22"),
    legend: "Certidão emitida pela prefeitura",
    state: "SP",
    city: "São Paulo",
    authorId: 11,
    collectionId: 6,
    donor: "Arquivo Público",
    contextHistory: "Documento referente à urbanização do centro da cidade.",
    created: new Date(),
    updated: new Date(),
    technique: "Manuscrito",
    material: "Papel envelhecido",
    digitalized: false
  },
  {
    id: 3,
    thumbnailUrl: "https://picsum.photos/200/302",
    name: "Mapa Cartográfico",
    creationDate: new Date("1750-11-15"),
    legend: "Mapa colonial da região sul",
    state: "SC",
    city: "Florianópolis",
    authorId: 12,
    collectionId: 7,
    donor: "Instituto Geográfico",
    contextHistory: "Mapa usado durante a expansão territorial portuguesa.",
    created: new Date(),
    updated: new Date(),
    technique: "Desenho cartográfico",
    material: "Papel vegetal",
    digitalized: true
  }
];

}
