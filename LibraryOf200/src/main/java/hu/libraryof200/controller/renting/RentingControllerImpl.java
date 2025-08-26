package hu.libraryof200.controller.renting;

import hu.libraryof200.model.Renting;
import hu.libraryof200.repository.RentingRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class RentingControllerImpl implements RentingController {

    private RentingRepository repository;
    private static final Logger LOGGER = LoggerFactory.getLogger(RentingControllerImpl.class);

    @Override
    public List<Renting> findAllRenting() {
        LOGGER.info("findAllRenting()");
        return repository.findAll();
    }

    @Override
    public Renting findRenting(UUID code) {
        LOGGER.info("findRenting({})", code);
        return repository.findById(code)
                .orElseThrow(() -> new IllegalArgumentException("Renting does not exist"));
    }

    @Override
    public Renting createRenting(Renting renting) {
        LOGGER.info("createRenting({})", renting);
        return repository.save(renting);
    }

    @Override
    public Renting updateRenting(Renting updated, UUID rentingCode) {
        LOGGER.info("updateRenting({})", updated);
        return repository.findById(rentingCode)
                .map(renting -> {
                    renting.setBook(updated.getBook());
                    renting.setPerson(updated.getPerson());
                    renting.setStartOfRenting(updated.getStartOfRenting());
                    return repository.save(renting);
                }).orElseThrow(()-> new IllegalArgumentException("Renting does not exist"));
    }

    @Override
    public void deleteRenting(UUID code) {
        LOGGER.info("deleteRenting({})", code);
        repository.deleteById(code);
    }
}
