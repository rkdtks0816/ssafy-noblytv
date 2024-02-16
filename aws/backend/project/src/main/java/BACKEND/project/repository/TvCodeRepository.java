package BACKEND.project.repository;

import BACKEND.project.domain.TvCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TvCodeRepository extends JpaRepository<TvCode, Long> {
    Optional<TvCode> findByTvCode(String tvCode);
}
