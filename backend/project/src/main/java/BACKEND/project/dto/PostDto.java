package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class PostDto {

    private Long id;

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

    public void setId(Long id) {
        this.id = id;
    }
}
