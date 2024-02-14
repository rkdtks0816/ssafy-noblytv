package BACKEND.project.repository;

import BACKEND.project.domain.FamilyUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FamilyUserRepository extends JpaRepository<FamilyUserInfo, Long> {
    Optional<FamilyUserInfo> findByUserId(String userId);

    Optional<FamilyUserInfo> findById(Long id);

    FamilyUserInfo getByUserId(String userId);
}
