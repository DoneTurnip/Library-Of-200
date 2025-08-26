package hu.libraryof200.repository;

import hu.libraryof200.model.Renting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RentingRepository extends JpaRepository<Renting, UUID> {
}
