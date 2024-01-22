package BACKEND.project.domain;

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
public class FamilyUserInfo {

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
    @Column(nullable = false, unique = true, length = 50)
    private String username;

    private LocalDate birth;

    @ToString.Exclude
    @OneToMany(mappedBy = "familyUserInfo")
    @JsonManagedReference
    private List<FamilyRelation> familyRelations = new ArrayList<>();

    public List<String> getOldUserIds() {
        return familyRelations.stream()
                .map(familyRelation -> familyRelation.getOldUserInfo().getUserId())
                .collect(Collectors.toList());
    }
}
