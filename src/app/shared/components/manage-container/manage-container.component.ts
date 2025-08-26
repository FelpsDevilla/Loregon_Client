import { Component, Input, ViewChild, AfterViewInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { IBaseEntity } from '../../Interfaces/ibase-entity';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  selector: 'app-manage-container',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './manage-container.component.html',
  styleUrl: './manage-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageContainerComponent {
  @Input() title: string = 'Title';
  @Input() Items: IBaseEntity[] = [];

  @Input() editRoute: string = '';
  @Input() addRoute: string = '';
  @Input() deleteFunction: (id: number) => void = (id: number) => { };
  readonly dialog = inject(MatDialog);


  public openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        // this.deleteFunction();
      }
    });
  }


  displayedColumns: string[] = ['id', 'name', 'created', 'updated', 'edit', 'delete'];

  dataSource: MatTableDataSource<IBaseEntity>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.Items);
  }

  ngOnChanges() {
    this.dataSource.data = this.Items;
    this.title = this.title;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}