package hu.libraryof200.controller.book;

import hu.libraryof200.model.Book;
import hu.libraryof200.repository.BookRepository;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class BookControllerWorkerImpl implements BookControllerWorker {

    private BookRepository repository;
    private static final Logger LOGGER = LoggerFactory.getLogger(BookControllerWorkerImpl.class);

    @Override
    public Book createBook(@NonNull Book book) {
        LOGGER.info("createBook({})", book);
        return repository.save(book);
    }

    @Override
    public Book updateBook(@NonNull Book updated) {
        LOGGER.info("updateBook({})", updated);
        return repository.save(updated);
    }

    @Override
    public void deleteBook(@NonNull String isbn) {
        LOGGER.info("deleteBook({})", isbn);
        repository.deleteById(isbn);

    }

    @Override
    public List<Book> findAllBookWorker() {
        LOGGER.info("findAllBook()");
        return repository.findAll();
    }

    @Override
    public Book findBook(@NonNull String isbn) {
        LOGGER.info("findBook({})", isbn);
        return repository.findById(isbn)
                .orElseThrow(() -> new IllegalArgumentException("Book does not exist"));
    }
}
