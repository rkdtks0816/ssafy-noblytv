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
public class OldUserInfo {

    public enum Gender {
        MALE,
        FEMALE
    }

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

    @Column(unique = true)
    private String userId;

    @NotBlank(message = "이름은 필수입니다")
    @Column(nullable = false, length = 50)
    private String username;

    private LocalDate birth;

    @Enumerated(EnumType.STRING)
    private LunarSolar lunarSolar;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column
    private String tvCode;

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Medication> medications = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference(value = "oldUserInfoBackRef")
    @OneToMany(mappedBy = "oldUserInfo")
    private List<FamilyRelation> familyRelations = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUserInfo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Diary> diaries = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QuizResult> quizResults = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUserInfo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Gymnastics> gymnastics = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Schedule> schedules = new ArrayList<>();

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUserInfo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Post> posts = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private UserType userType;
}
