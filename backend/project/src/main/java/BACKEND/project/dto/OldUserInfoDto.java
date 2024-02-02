package BACKEND.project.dto;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OldUserInfoDto {

    private String userId;

    private String username;

    private LocalDate birth;

    private OldUserInfo.LunarSolar lunarSolar;

    private OldUserInfo.Gender gender;

    private List<Medication> medications;
}
