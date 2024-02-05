package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Schedule;
import BACKEND.project.dto.ScheduleDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
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

    private String getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }

    @Transactional
    public Schedule registerSchedule(String oldUserId, ScheduleDto scheduleDto) {

        String familyUserId = getCurrentUserId();

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        boolean exists = familyUser.getFamilyRelations().stream()
                .anyMatch(relation -> relation.getOldUserInfo().equals(oldUser));

        if (!exists) {
            throw new IllegalArgumentException("가족 회원과 노인 회원이 관계를 가지고 있지 않습니다.");
        }

        if ((scheduleDto.getScheduleDay() == null && scheduleDto.getScheduleTime() == null) ||
                (scheduleDto.getScheduleDay() != null && scheduleDto.getScheduleTime() != null)) {
            throw new IllegalArgumentException("스케줄의 날짜와 시간 중 하나만 입력해야 합니다.");
        }

        Schedule newSchedule = new Schedule();
        newSchedule.setFamilyUser(familyUser);
        newSchedule.setOldUser(oldUser);
        newSchedule.setSchedule(scheduleDto.getSchedule());
        newSchedule.setScheduleDay(scheduleDto.getScheduleDay());
        newSchedule.setScheduleTime(scheduleDto.getScheduleTime());

        scheduleRepository.save(newSchedule);

        return newSchedule;
    }

    @Transactional(readOnly = true)
    public List<Schedule> getSchedules(String oldUSerId) {

        String currentUserId = getCurrentUserId();

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

    @Transactional
    public Schedule updateSchedule(Long scheduleId, ScheduleDto scheduleDto) {

        String familyUserId = getCurrentUserId();

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NoSuchElementException("해당 일정이 존재하지 않습니다."));

        if (!schedule.getFamilyUser().equals(familyUser)) {
            throw new IllegalArgumentException("해당 일정을 수정할 권한이 없습니다.");
        }

        if (scheduleDto.getScheduleDay() != null && scheduleDto.getScheduleTime() != null) {
            throw new IllegalArgumentException("스케줄의 날짜와 시간 중 하나만 수정해야 합니다.");
        }

        if (scheduleDto.getScheduleDay() != null) {
            schedule.setScheduleDay(scheduleDto.getScheduleDay());
        }

        if (scheduleDto.getScheduleTime() != null) {
            schedule.setScheduleTime(scheduleDto.getScheduleTime());
        }

        if (scheduleDto.getSchedule() != null) {
            schedule.setSchedule(scheduleDto.getSchedule());
        }

        return schedule;
    }

    @Transactional
    public void deleteSchedule(Long scheduleId) {

        String familyUserId = getCurrentUserId();

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new NoSuchElementException("해당 일정이 존재하지 않습니다."));

        if (!schedule.getFamilyUser().equals(familyUser)) {
            throw new IllegalArgumentException("해당 일정을 수정할 권한이 없습니다.");
        }

        scheduleRepository.delete(schedule);
    }

    @Scheduled(cron = "0 0 0 * * ?")
    @Transactional
    public void resetIsRead() {
        List<Schedule> schedules = scheduleRepository.findAllByScheduleTimeIsNotNull();
        for (Schedule schedule : schedules) {
            schedule.setRead(false);
        }
    }
}
