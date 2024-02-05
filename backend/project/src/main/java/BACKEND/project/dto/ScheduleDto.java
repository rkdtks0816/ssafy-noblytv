package BACKEND.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class ScheduleDto {

    private String schedule;
    private LocalDateTime scheduleTime;
}
