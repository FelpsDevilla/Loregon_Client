import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArchiveItem } from '../../archive/models/archive-item';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() acervoItem!: ArchiveItem;
  readonly dialog = inject(MatDialog);

  // public openDialog() {
  //   const dialogRef = this.dialog.open(SobreComponent, {
  //     data: { acervoItem: this.acervoItem },
  //     width: '50vw',
  //     height: 'auto',
  //   });
  // }
}
