package hu.libraryof200;

import hu.libraryof200.model.Renting;
import hu.libraryof200.repository.BookRepository;
import hu.libraryof200.repository.PersonRepository;
import hu.libraryof200.repository.RentingRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Order(3)
@Component
@AllArgsConstructor
public class RentingRunner implements CommandLineRunner {

    private RentingRepository rentingRepository;
    private PersonRepository personRepository;
    private BookRepository bookRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        defaultRenting();
    }

    private void defaultRenting() {
        Renting renting1 = Renting.builder()
                .person(personRepository.findAll().get(0))
                .book(bookRepository.findAll().get(6))
                .startOfRenting(LocalDate.now())
                .build();

        Renting renting2 = Renting.builder()
                .person(personRepository.findAll().get(5))
                .book(bookRepository.findAll().get(5))
                .startOfRenting(LocalDate.now())
                .build();

        rentingRepository.save(renting1);
        rentingRepository.save(renting2);
    }
}
