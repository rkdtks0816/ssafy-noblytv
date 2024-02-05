package BACKEND.project.controller;

import BACKEND.project.domain.Schedule;
import BACKEND.project.dto.ScheduleDto;
import BACKEND.project.service.ScheduleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/schedule")
@Tag(name = "일정 API")
public class ScheduleController {

    private final ScheduleService scheduleService;

    @PostMapping("/{oldUserId}")
    @Operation(summary = "일정 등록")
    public ResponseEntity<Schedule> registerSchedule(@PathVariable("oldUserId") String oldUserId, @RequestBody ScheduleDto scheduleDto) {
        Schedule newSchedule = scheduleService.registerSchedule(oldUserId, scheduleDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newSchedule);
    }

    @GetMapping("/{oldUserId}")
    @Operation(summary = "일정 조회")
    public ResponseEntity<List<Schedule>> getSchedules(@PathVariable("oldUserId") String oldUserId) {
        List<Schedule> schedules = scheduleService.getSchedules(oldUserId);
        return ResponseEntity.ok(schedules);
    }

    @PutMapping("/{scheduleId}")
    @Operation(summary = "일정 수정")
    public ResponseEntity<Schedule> updateSchedule(@PathVariable("scheduleId") Long scheduleId, @RequestBody ScheduleDto scheduleDto) {
        Schedule updatedSchedule = scheduleService.updateSchedule(scheduleId, scheduleDto);
        return ResponseEntity.ok(updatedSchedule);
    }

    @DeleteMapping("/{scheduleId}")
    @Operation(summary = "일정 삭제")
    public ResponseEntity<Void> deleteSchedule(@PathVariable("scheduleId") Long scheduleId) {
        scheduleService.deleteSchedule(scheduleId);
        return ResponseEntity.noContent().build();
    }
}
