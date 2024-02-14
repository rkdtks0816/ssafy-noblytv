package BACKEND.project.repository;

import BACKEND.project.domain.Gymnastics;
import BACKEND.project.domain.OldUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GymnastcisRepository extends JpaRepository<Gymnastics, Long> {
    List<Gymnastics> findByOldUserInfoAndVideoId(OldUserInfo oldUserInfo, String videoId);
}
