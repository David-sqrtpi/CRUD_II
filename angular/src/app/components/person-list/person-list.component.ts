import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from 'src/app/entity/person';

import { PersonService } from 'src/app/services/person.service';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService: PersonService, public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort;
  filterInput = new FormControl('');
  persons;
  displayedColumns: string[] = ['name', 'id', 'birthday', 'modify', 'delete'];

  ngOnInit(): void {
    this.personService.readAll().subscribe(
      persons => {
        this.persons = new MatTableDataSource(persons);
        this.persons.sort = this.sort;
      },
      err => console.error(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = this.filterInput.value;
    this.persons.filter = filterValue.trim().toLowerCase();
  }

  openDialog(element: Person) {
    console.log('modify: ' + element);
    const dialogRef = this.dialog.open(AddPersonComponent, {
      data: {id: element.id}
    });

    dialogRef.afterClosed().subscribe(
      () => location.reload()
    );
  }

  delete(element: Person) {
    console.log(element);
    this.personService.delete(element.id).subscribe(
      () => {
        console.log('deleted');
        location.reload();
      },
      err => ('Something went wrong ' + err)
    );
  }
}
