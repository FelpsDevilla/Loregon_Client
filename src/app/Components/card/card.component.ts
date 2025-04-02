import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AcervoItem } from '../../classes/acervo-item';

@Component({
  selector: 'app-card',
  imports: [ MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() acervoItem!: AcervoItem;
}
