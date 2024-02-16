package BACKEND.project.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
public class FamilyUserInfo {

    public enum LunarSolar {
        LUNAR,
        SOLAR
    }

    public enum UserType {
        FAMILY,
        OLD
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "아이디는 필수입니다.")
    @Column(nullable = false, unique = true, length = 50)
    private String userId;

    @NotBlank(message = "비밀번호는 필수입니다.")
    @Column(nullable = false)
    private String password;

    @NotBlank(message = "이름은 필수입니다.")
    @Column(nullable = false, length = 50)
    private String username;

    private LocalDate birth;

    @Enumerated(EnumType.STRING)
    private LunarSolar lunarSolar;

    @ToString.Exclude
    @OneToMany(mappedBy = "familyUserInfo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<FamilyRelation> familyRelations = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "familyUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Schedule> schedules = new ArrayList<>();

    private String lastVisitedId;

    @Enumerated(EnumType.STRING)
    private UserType userType;

    @OneToMany(mappedBy = "familyUserInfo", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();
}
