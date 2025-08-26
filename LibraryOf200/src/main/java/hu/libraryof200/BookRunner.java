package hu.libraryof200;

import hu.libraryof200.model.Book;
import hu.libraryof200.repository.BookRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Order(1)
@Component
@AllArgsConstructor
public class BookRunner implements CommandLineRunner {

    private BookRepository bookRepository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        try(final var br = new BufferedReader(
                new InputStreamReader(getClass().getResourceAsStream("books.txt")))) {
            br.lines()
                    .map(line -> {
                        final var tokens = line.split(";");
                        return Book.builder()
                                .isbn(tokens[0])
                                .title(tokens[1])
                                .author(tokens[2])
                                .yearOfRelease(Integer.parseInt(tokens[3]))
                                .genre(tokens[4])
                                .build();
                    })
                    .map(bookRepository::save)
                    .forEach(System.out::println);
        }
    }
}