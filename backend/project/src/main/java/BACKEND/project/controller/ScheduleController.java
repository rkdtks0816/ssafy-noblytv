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
}
