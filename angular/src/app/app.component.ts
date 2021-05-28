import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) { }

  personForm = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    birthdate: ['', Validators.required]
  });
}