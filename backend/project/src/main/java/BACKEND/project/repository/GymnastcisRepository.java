package BACKEND.project.repository;

import BACKEND.project.domain.Gymnastics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymnastcisRepository extends JpaRepository<Gymnastics, Long> {
    boolean existsByOldUserInfo_userIdAndVideoId(String oldUserId, String videoId);
}
