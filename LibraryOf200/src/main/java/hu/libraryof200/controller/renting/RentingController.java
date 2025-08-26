package hu.libraryof200.controller.renting;

import hu.libraryof200.model.Renting;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

public interface RentingController {
    @GetMapping("/api/worker/renting")
    List<Renting> findAllRenting();

    @GetMapping("/api/worker/renting/{code}")
    Renting findRenting(@PathVariable UUID code);

    @PostMapping("/api/worker/renting")
    Renting createRenting(@RequestBody Renting renting);

    @PutMapping("/api/worker/renting/{code}")
    Renting updateRenting(@RequestBody Renting updated,
                          @PathVariable UUID code);

    @DeleteMapping("/api/worker/renting/{code}")
    void deleteRenting(@PathVariable UUID code);
}
