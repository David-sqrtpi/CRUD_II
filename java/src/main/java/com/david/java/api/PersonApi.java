package com.david.java.api;

import com.david.java.entity.Person;
import com.david.java.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PersonApi {
    @Autowired
    private PersonService personService;

    @PostMapping("persons")
    public void create(@RequestBody Person person) {
        personService.create(person);
    }

    @GetMapping("persons")
    public List<Person> readAll() {
        return personService.readAll();
    }

    @GetMapping("persons/{person}")
    public Person read(@PathVariable long person) {
        return personService.read(person);
    }

    @PutMapping("persons")
    public void update(@RequestBody Person person) {
        personService.update(person);
    }

    @DeleteMapping("persons/{person}")
    public void delete(@PathVariable long person) {
        personService.delete(person);
    }
}
