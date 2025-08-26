package hu.libraryof200.controller.person;

import hu.libraryof200.model.Person;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PersonController {
    @GetMapping("/api/worker/person")
    List<Person> findAllPerson();

    @GetMapping("/api/worker/person/{id}")
    Person findPerson(@NonNull @PathVariable UUID id);

    @PostMapping("/api/worker/person")
    Person createPerson(@NonNull @RequestBody Person person);

    @PutMapping("/api/worker/person/{id}")
    Person updatePerson(@NonNull @RequestBody Person updated,
                        @NonNull @PathVariable UUID id);

    @DeleteMapping("/api/worker/person/{id}")
    void deletePerson(@NonNull @PathVariable UUID id);

    @GetMapping("/api/worker/person/search")
    List<Person> searchPerson(
            @NonNull @RequestParam Optional<UUID> id,
            @NonNull @RequestParam Optional<String> firstName,
            @NonNull @RequestParam Optional<String> lastName);
}
