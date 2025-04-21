import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-gerenciamento-usuarios',
  imports: [MatGridListModule],
  templateUrl: './gerenciamento-usuarios.component.html',
  styleUrl: './gerenciamento-usuarios.component.css'
})
export class GerenciamentoUsuariosComponent {
  public usuarios: User[] = [new User()]

}
