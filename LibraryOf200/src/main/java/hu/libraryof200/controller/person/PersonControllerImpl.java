package hu.libraryof200.controller.person;

import hu.libraryof200.model.Person;
import hu.libraryof200.repository.PersonRepository;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class PersonControllerImpl implements PersonController {

    private PersonRepository repository;
    private static final Logger LOGGER = LoggerFactory.getLogger(PersonControllerImpl.class);

    @Override
    public List<Person> findAllPerson() {
        LOGGER.info("findAllPerson()");
        return repository.findAll();
    }

    @Override
    public Person findPerson(@NonNull UUID id) {
        LOGGER.info("findPerson({})", id);
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Person does not exist"));
    }

    @Override
    public Person createPerson(@NonNull Person person) {
        LOGGER.info("createPerson({})", person);
        return repository.save(person);
    }

    @Override
    public Person updatePerson(@NonNull Person updated, @NonNull UUID id) {
        LOGGER.info("updatePerson({})", updated);
        return repository.findById(id)
                .map(person -> {
                    person.setFirstName(updated.getFirstName());
                    person.setLastName(updated.getLastName());
                    person.setAddress(updated.getAddress());
                    person.setPhoneNumber(updated.getPhoneNumber());
                    return repository.save(person);
                }).orElseThrow(()-> new IllegalArgumentException("Person does not exist"));
    }

    @Override
    public void deletePerson(@NonNull UUID id) {
        LOGGER.info("deletePerson({})", id);
        repository.deleteById(id);
    }

    @Override
    public List<Person> searchPerson(
            @NonNull Optional<UUID> id,
            @NonNull Optional<String> firstName,
            @NonNull Optional<String> lastName) {
        return repository.findAll()
                .stream()
                .filter(person -> id
                        .map(i -> person.getId().equals(i))
                        .orElse(true))
                .filter(person -> firstName
                        .map(fn -> person.getFirstName().contains(fn))
                        .orElse(true))
                .filter(person -> lastName
                        .map(ln -> person.getLastName().contains(ln))
                        .orElse(true))
                .toList();
    }
}
