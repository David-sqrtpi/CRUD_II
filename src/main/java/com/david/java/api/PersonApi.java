package com.david.java.api;

import com.david.java.Person;
import com.david.java.entity.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PersonApi {
    @Autowired
    private PersonService personService;

    @PostMapping("persons")
    public void create(Person person) {
        personService.create(person);
    }

    @GetMapping("persons")
    public List<Person> readAll() {
        return personService.readAll();
    }

    @GetMapping("persons/{person}")
    public Person read(@PathVariable long personId) {
        return personService.read(personId);
    }

    @PutMapping("persons")
    public void update(Person person) {
        personService.update(person);
    }

    @DeleteMapping("persons/{person}")
    public void delete(@PathVariable long personId) {
        personService.delete(personId);
    }
}
