package BACKEND.project.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "아이디는 필수입니다.")
    @Column(nullable = false, unique = true, length = 50)
    private String userId;

    @NotBlank(message = "이름은 필수입니다.")
    @Column(nullable = false, length = 50)
    private String username;

    @NotBlank(message = "비밀번호는 필수입니다.")
    @Column(nullable = false)
    private String password;

    private LocalDate birth;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @ToString.Exclude
    @JsonManagedReference
    @OneToMany(mappedBy = "oldUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Medication> medications = new ArrayList<>();

    @ToString.Exclude
    @OneToMany(mappedBy = "oldUserInfo")
    @JsonBackReference
    private List<FamilyRelation> familyRelations = new ArrayList<>();

    public List<String> getFamilyUserIds() {
        return familyRelations.stream()
                .map(familyRelation -> familyRelation.getFamilyUserInfo().getUserId())
                .collect(Collectors.toList());
    }
}
