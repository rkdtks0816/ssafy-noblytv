package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostDto {

    private OldUserInfoDto oldUserInfo;

    private FamilyUserInfoDto familyUserInfo;

    private String videoPath;

    private LocalDateTime postedAt;

    private boolean isViewed;

    public FamilyUserInfoDto getFamilyUserInfo() {
        return familyUserInfo;
    }

    public void setFamilyUserInfo(FamilyUserInfoDto familyUserInfo) {
        this.familyUserInfo = familyUserInfo;
    }

}
