package BACKEND.project.dto;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.Post;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FamilyUserInfoDto {

    private Long id;

    private String userId;

    private String password;

    private String username;

    private LocalDate birth;

    private FamilyUserInfo.LunarSolar lunarSolar;

    private List<FamilyRelationDto> familyRelations;

    private String lastVisitedId;

    private List<Post> posts;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
}
