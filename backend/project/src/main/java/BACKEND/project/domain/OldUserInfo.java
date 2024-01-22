package BACKEND.project.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class OldUserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "아이디는 필수입니다.")
    @Column(nullable = false, unique = true, length = 50)
    private String userId;

    @NotBlank(message = "이름은 필수입니다.")
    @Column(nullable = false, length = 50)
    private String username;
    private LocalDate birth;
    private String sex;

    @OneToMany(mappedBy = "oldUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Medication> medications = new ArrayList<>();

//    @OneToMany(mappedBy = "oldUser", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<FamilyUserInfo> familyMembers;
}
