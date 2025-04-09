import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcervoItem } from '../../classes/acervo-item';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {acervoItem: AcervoItem}){}
}
