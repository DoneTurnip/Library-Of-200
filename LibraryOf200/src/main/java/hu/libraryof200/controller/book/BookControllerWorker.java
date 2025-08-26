package hu.libraryof200.controller.book;

import hu.libraryof200.model.Book;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface BookControllerWorker {

    @GetMapping("/api/worker/book")
    List<Book> findAllBookWorker();

    @GetMapping("/api/worker/book/{isbn}")
    Book findBook(@NonNull @PathVariable String isbn);

    @PostMapping("/api/worker/book")
    Book createBook(@NonNull @RequestBody Book book);

    @PutMapping("/api/worker/book")
    Book updateBook(@NonNull @RequestBody Book updated);

    @DeleteMapping("/api/worker/book/{isbn}")
    void deleteBook(@NonNull @PathVariable String isbn);

}
