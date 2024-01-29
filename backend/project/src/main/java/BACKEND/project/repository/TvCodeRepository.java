package BACKEND.project.repository;

import BACKEND.project.domain.TvCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TvCodeRepository extends JpaRepository<TvCode, Long> {
    Optional<TvCode> findByCode(String code);
    boolean existsByCode(String code);
}
