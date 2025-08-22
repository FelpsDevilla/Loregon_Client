import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IBaseEntity } from '../../Interfaces/ibase-entity';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-manage-container',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './manage-container.component.html',
  styleUrl: './manage-container.component.css'
})
export class ManageContainerComponent {
  @Input() title: string = 'Title';
  @Input() Items: IBaseEntity[] = [];

  displayedColumns: string[] = ['id', 'name', 'creationDate', 'created', 'updated'];
  dataSource: MatTableDataSource<IBaseEntity>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.Items);
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