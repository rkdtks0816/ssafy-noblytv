package BACKEND.project.repository;

import BACKEND.project.domain.OldUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OldUserRepository extends JpaRepository<OldUserInfo, Long> {
    Optional<OldUserInfo> findByUserId(String userId);

    Optional<OldUserInfo> findById(Long id);

    List<OldUserInfo> findByTvCode(String tvCode);
}


