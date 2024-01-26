package BACKEND.project.dto;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Data
public class OldUserInfoDto {

    private String username;

    private LocalDate birth;

    private OldUserInfo.LunarSolar lunarSolar;

    private OldUserInfo.Gender gender;

    private List<Medication> medications;
}
