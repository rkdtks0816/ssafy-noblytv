package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Schedule;
import BACKEND.project.dto.ScheduleDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ScheduleService {

    private final FamilyUserRepository familyUserRepository;
    private final OldUserRepository oldUserRepository;
    private final ScheduleRepository scheduleRepository;

    @Transactional
    public Schedule registerSchedule(String oldUserId, ScheduleDto scheduleDto) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String familyUserId = authentication.getName();

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        boolean exists = familyUser.getFamilyRelations().stream()
                .anyMatch(relation -> relation.getOldUserInfo().equals(oldUser));

        if (!exists) {
            throw new IllegalArgumentException("가족 회원과 노인 회원이 관계를 가지고 있지 않습니다.");
        }

        Schedule newSchedule = new Schedule();
        newSchedule.setFamilyUser(familyUser);
        newSchedule.setOldUser(oldUser);
        newSchedule.setSchedule(scheduleDto.getSchedule());
        newSchedule.setScheduleTime(scheduleDto.getScheduleTime());

        scheduleRepository.save(newSchedule);

        return newSchedule;
    }

    @Transactional(readOnly = true)
    public List<Schedule> getSchedules(String oldUSerId) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserId = authentication.getName();

        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUSerId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        if (currentUserId.equals(oldUSerId)) {
            return scheduleRepository.findAllByOldUser(oldUser);
        }

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(currentUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        boolean exists = familyUser.getFamilyRelations().stream()
                .anyMatch(relation -> relation.getOldUserInfo().equals(oldUser));

        if (!exists) {
            throw new IllegalArgumentException("가족 회원과 노인 회원이 관계를 가지고 있지 않습니다.");
        }

        return scheduleRepository.findAllByOldUser(oldUser);
    }
}
