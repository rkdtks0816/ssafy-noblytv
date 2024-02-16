package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FamilyUserInfoDto {

    private String userId;

    private String password;

    private String username;

    private LocalDate birth;

    private FamilyUserInfo.LunarSolar lunarSolar;

    private List<FamilyRelationDto> familyRelations;

    private String lastVisitedId;
}
