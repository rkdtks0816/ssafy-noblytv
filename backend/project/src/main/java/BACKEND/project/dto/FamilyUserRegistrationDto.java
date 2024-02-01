package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FamilyUserRegistrationDto {

    @NotBlank(message = "아이디는 필수입니다.")
    @Size(max = 50, message = "아이디는 50자 이내로 입력해주세요.")
    private String userId;

    @NotBlank(message = "비밀번호는 필수입니다.")
    private String password;

    @NotBlank(message = "이름은 필수입니다.")
    @Size(max = 50, message = "이름은 50자 이내로 입력해주세요.")
    private String username;

    private LocalDate birth;

    private FamilyUserInfo.LunarSolar lunarSolar;

    private List<String> oldUserIds;
}
