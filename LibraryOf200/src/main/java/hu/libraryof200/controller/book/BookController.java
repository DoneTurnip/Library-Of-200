package hu.libraryof200.controller.book;

import hu.libraryof200.model.Book;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public interface BookController {

    @GetMapping("/api/all/book")
    List<Book> findAllBook();

    @GetMapping("/api/all/book/search")
    List<Book> searchBook(
            @NonNull @RequestParam Optional<String> isbn,
            @NonNull @RequestParam Optional<String> title,
            @NonNull @RequestParam Optional<String> author);
}
