import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-item',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-item.component.html',
  styleUrl: './delete-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteItemComponent {
}