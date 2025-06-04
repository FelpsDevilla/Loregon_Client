import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-gerenciamento-usuarios',
  imports: [MatGridListModule, MatIconModule, MatButtonModule],
  templateUrl: './gerenciamento-usuarios.component.html',
  styleUrl: './gerenciamento-usuarios.component.css'
})
export class GerenciamentoUsuariosComponent {
  public usuarios: User[] = [];

    constructor(private userService: UserService) {
    }
  
    ngOnInit(): void {
      this.userService.getAllItens().subscribe({
        next: (data: User[]) => {
          this.usuarios = data
        },
        error: (err: Error) => console.error('Erro ao carregar usuários', err)
      })
    }
}
