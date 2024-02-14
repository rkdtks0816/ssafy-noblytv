package BACKEND.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@NoArgsConstructor
public class ScheduleDto {

    private String schedule;

    private LocalDateTime scheduleDay;

    private LocalTime scheduleTime;
}
