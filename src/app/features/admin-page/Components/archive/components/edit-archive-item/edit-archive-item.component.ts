import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-archive-item',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButton],
  templateUrl: './edit-archive-item.component.html',
  styleUrl: './edit-archive-item.component.css'
})
export class EditArchiveItemComponent {

}
