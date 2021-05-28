package com.david.java.services;

import com.david.java.entity.Person;
import com.david.java.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public void create(Person person) {
        personRepository.save(person);
    }

    public Person read(long personId) {
        return personRepository.getById(personId);
    }

    public List<Person> readAll() {
        return personRepository.findAll();
    }

    public void update(Person person) {
        create(person);
    }

    public void delete(long personId) {
        personRepository.deleteById(personId);
    }
}
