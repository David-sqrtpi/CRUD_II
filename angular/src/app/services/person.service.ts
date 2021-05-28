import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment.prod';
import { Person } from '../entity/person';

const URI_BACK = environment.back_uri + 'persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http:HttpClient) { }

  create(person:Person) {
    return this.http.post(URI_BACK, person);
  }

  read(personId:number) {
    return this.http.get<Person>(`${URI_BACK}/${personId}`);
  }

  readAll() {
    return this.http.get<Person[]>(URI_BACK);
  }

  update(person:Person) {
    return this.http.put(URI_BACK, person);
  }

  delete(personId:number) {
    return this.http.delete(`${URI_BACK}/${personId}`);
  }
}
