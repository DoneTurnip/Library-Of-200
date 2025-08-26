package hu.libraryof200.controller.book;

import hu.libraryof200.model.Book;
import hu.libraryof200.repository.BookRepository;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class BookControllerImpl implements BookController {

    private BookRepository repository;
    private static final Logger LOGGER = LoggerFactory.getLogger(BookControllerImpl.class);


    @Override
    public List<Book> findAllBook() {
        LOGGER.info("findAllBook()");
        return repository.findAll();
    }

    @Override
    public List<Book> searchBook(
            @NonNull Optional<String> isbn,
            @NonNull Optional<String> title,
            @NonNull Optional<String> author) {
        return repository.findAll()
                .stream()
                .filter(book -> isbn
                        .map(i -> book.getIsbn().contains(i))
                        .orElse(true))
                .filter(book -> title
                        .map(t -> book.getTitle().contains(t))
                        .orElse(true))
                .filter(book -> author
                        .map(a -> book.getAuthor().contains(a))
                        .orElse(true))
                .toList();
    }
}
