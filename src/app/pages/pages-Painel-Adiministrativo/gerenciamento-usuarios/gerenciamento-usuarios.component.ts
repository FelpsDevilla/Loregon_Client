import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-gerenciamento-usuarios',
  imports: [MatGridListModule, MatIconModule, MatButtonModule],
  templateUrl: './gerenciamento-usuarios.component.html',
  styleUrl: './gerenciamento-usuarios.component.css'
})
export class GerenciamentoUsuariosComponent {
  public usuarios: User[] = [new User(), new User(), new User()]

}
