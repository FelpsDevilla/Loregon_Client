import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AcervoItem } from '../../classes/acervo-item';
import { MatDialog } from '@angular/material/dialog';
import { SobreComponent } from '../../pages/sobre/sobre.component';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() acervoItem!: AcervoItem;
  readonly dialog = inject(MatDialog);

  public openDialog() {
    const dialogRef = this.dialog.open(SobreComponent, {
      data: { acervoItem: this.acervoItem },
      width: '50vw',
      height: 'auto',
    });
  }
}
