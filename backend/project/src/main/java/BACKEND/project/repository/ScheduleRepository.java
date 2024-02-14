package BACKEND.project.repository;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    List<Schedule> findAllByOldUser(OldUserInfo oldUser);

    List<Schedule> findAllByScheduleTimeIsNotNull();
}
