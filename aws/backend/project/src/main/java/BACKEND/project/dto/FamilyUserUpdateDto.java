package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FamilyUserUpdateDto {

    private String userId;

    private String password;

    private String confirmPassword;

    private String username;

    private LocalDate birth;

    private FamilyUserInfo.LunarSolar lunarSolar;
}
