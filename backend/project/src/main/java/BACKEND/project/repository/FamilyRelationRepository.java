package BACKEND.project.repository;

import BACKEND.project.domain.FamilyRelation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyRelationRepository extends JpaRepository<FamilyRelation, Long> {
}
