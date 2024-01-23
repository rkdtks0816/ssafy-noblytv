package BACKEND.project.domain;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.LocalTime;

@Data
public class MedicationDto {

    @NotBlank(message = "약 이름은 필수입니다")
    private String medicine;

    private LocalTime medicationTime;
}
