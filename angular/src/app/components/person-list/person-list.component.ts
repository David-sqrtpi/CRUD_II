import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  filterInput = new FormControl('');
  persons:Person[];
  displayedColumns: string[] = ['name', 'id', 'birthday', 'modify', 'delete'];

  ngOnInit(): void {
    this.personService.readAll().subscribe(
      persons => {
        this.persons = persons
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
      data: {
        name: element.name,
        id: element.id,
        birthday: element.birthday
      }
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
