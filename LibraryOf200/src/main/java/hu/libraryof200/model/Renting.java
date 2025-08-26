package hu.libraryof200.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity(name = "RENTING")
@Data
@With
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)

public class Renting {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "uuid")
    UUID rentingCode;

    @ManyToOne
    @JoinColumn(name = "id")
    Person person;

    @ManyToOne
    @JoinColumn(name = "isbn")
    Book book;

    LocalDate startOfRenting;
}
