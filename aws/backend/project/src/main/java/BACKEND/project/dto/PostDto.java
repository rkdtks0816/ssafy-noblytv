package BACKEND.project.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {

    private Long id;

    private OldUserInfoDto oldUserInfo;

    private FamilyUserInfoDto familyUserInfo;

    private String videoPath;

    private LocalDateTime postedAt;

    private boolean isViewed;

    private String username;

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
