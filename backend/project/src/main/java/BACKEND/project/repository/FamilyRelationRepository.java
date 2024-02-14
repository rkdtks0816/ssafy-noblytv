package BACKEND.project.repository;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyRelationRepository extends JpaRepository<FamilyRelation, Long> {
    boolean existsByOldUserInfoAndFamilyUserInfo(OldUserInfo oldUser, FamilyUserInfo familyUser);
}
