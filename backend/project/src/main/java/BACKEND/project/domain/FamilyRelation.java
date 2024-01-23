package BACKEND.project.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
public class FamilyRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "olduser_id")
    private OldUserInfo oldUserInfo;

    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "familyuser_id")
    @JsonBackReference
    private FamilyUserInfo familyUserInfo;

    @NotBlank(message = "가족 관계를 입력해주세요.")
    @Column(nullable = false)
    private String relationship;
}
