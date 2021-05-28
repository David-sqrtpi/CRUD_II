import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder,
    private personService: PersonService) { }

  personForm = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    birthdate: ['', Validators.required]
  });

  onSubmit() {
    if (this.personForm.valid) {
      this.personService.create(this.personForm.value).subscribe(
        () => console.log(this.personForm.value),
        err => console.error('Something went wrong ' + err)
      );
    }
  }
}