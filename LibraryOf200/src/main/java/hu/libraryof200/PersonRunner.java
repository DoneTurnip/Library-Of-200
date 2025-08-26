package hu.libraryof200;

import com.github.javafaker.Faker;
import hu.libraryof200.model.Person;
import hu.libraryof200.repository.PersonRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Order(2)
@Component
@AllArgsConstructor
public class PersonRunner implements CommandLineRunner {

    private PersonRepository personRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        for (int i = 0; i < 100; i++) {
            personRepository.save(nextPerson());
        }
    }

    private Person nextPerson() {

        Faker faker = new Faker(new Locale("en-GB"));

        var name = faker.name();
        var address = faker.address();
        var phoneNumber = faker.phoneNumber();

        return Person.builder()
                .firstName(name.firstName())
                .lastName(name.lastName())
                .address(address.fullAddress())
                .phoneNumber(phoneNumber.phoneNumber())
                .build();
    }
}
