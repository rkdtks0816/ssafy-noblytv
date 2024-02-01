package BACKEND.project.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalTime;

@Data
public class MedicationDto {

    @NotBlank(message = "약 이름은 필수입니다")
    private String medicine;

    private LocalTime medicationTime;
}
