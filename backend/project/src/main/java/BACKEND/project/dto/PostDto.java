package BACKEND.project.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
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
}
