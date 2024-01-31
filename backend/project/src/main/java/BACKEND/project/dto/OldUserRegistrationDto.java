package BACKEND.project.dto;

import BACKEND.project.domain.OldUserInfo;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class OldUserRegistrationDto {

    @NotBlank(message = "이름은 필수입니다.")
    @Size(max = 50, message = "이름은 50자 이내로 입력해주세요.")
    private String username;

    @Past(message = "생년월일은 과거 날짜여야 합니다")
    private LocalDate birth;

    private OldUserInfo.LunarSolar lunarSolar;

    @NotNull(message = "성별을 입력해주세요.")
    private OldUserInfo.Gender gender;

    private List<MedicationDto> medications;
}
