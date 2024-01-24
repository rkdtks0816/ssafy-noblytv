package BACKEND.project.domain;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Data
public class OldUserRegistrationDto {

    @NotBlank(message = "아이디는 필수입니다.")
    private String userId;

    @NotBlank(message = "이름은 필수입니다.")
    @Size(max = 50, message = "이름은 50자 이내로 입력해주세요.")
    private String username;

    @Past(message = "생년월일은 과거 날짜여야 합니다")
    private LocalDate birth;

    private OldUserInfo.LunarSolar lunarSolar;

    private OldUserInfo.Gender gender;

    private List<MedicationDto> medications;
}
