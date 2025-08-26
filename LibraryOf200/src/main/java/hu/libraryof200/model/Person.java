package hu.libraryof200.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity(name = "PERSON")
@Data
@With
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)

public class Person implements Comparable<Person> {
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    @Column(columnDefinition = "uuid")
    UUID id;
    String firstName;
    String lastName;
    String address;
    String phoneNumber;

    @Override
    public int compareTo(Person o) {
        return this.id.compareTo(o.getId());
    }
}
