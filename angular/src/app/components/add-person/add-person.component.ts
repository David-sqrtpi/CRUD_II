import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private personService: PersonService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, birthday: Date},
    public dialogRef: MatDialogRef<AddPersonComponent>) { }

  ngOnInit(): void {
  }

  personForm = this.fb.group({
    name: [this.data.name, Validators.required],
    id: [this.data.id, Validators.required],
    birthday: [this.data.birthday, Validators.required]
  });

  onSubmit() {
    if (this.personForm.valid) {
      this.personService.create(this.personForm.value).subscribe(
        () => {
          console.log(this.personForm.value);
          this.dialogRef.close();
        },
        err => console.error('Something went wrong ' + err)
      );
    }
  }
}