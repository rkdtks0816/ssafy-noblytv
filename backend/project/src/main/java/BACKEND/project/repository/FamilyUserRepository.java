package BACKEND.project.repository;

import BACKEND.project.domain.FamilyUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FamilyUserRepository extends JpaRepository<FamilyUserInfo, Long> {
    Optional<FamilyUserInfo> findByUserId(String userId);

    FamilyUserInfo findByUsername(String username);
}
