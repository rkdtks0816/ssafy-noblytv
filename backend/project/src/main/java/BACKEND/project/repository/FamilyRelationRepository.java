package BACKEND.project.repository;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.FamilyRelationDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamilyRelationRepository extends JpaRepository<FamilyRelation, Long> {
    boolean existsByOldUserInfoAndFamilyUserInfo(OldUserInfo oldUser, FamilyUserInfo familyUser);

    FamilyRelation findByOldUserInfo(OldUserInfo oldUserInfo);

    List<FamilyRelation> findByFamilyUserInfoId(Long familyUserInfoId);
}
