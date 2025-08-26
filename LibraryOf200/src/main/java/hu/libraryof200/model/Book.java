    package hu.libraryof200.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity(name = "BOOK")
@Data
@With
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)

public class Book {
    @EqualsAndHashCode.Include
    @Id
    String isbn;
    String title;
    String author;
    String genre;
    int yearOfRelease;
}