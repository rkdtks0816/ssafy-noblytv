package BACKEND.project.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "old_user_id")
    @JsonBackReference
    private OldUserInfo oldUserInfo;

    @ManyToOne
    @JoinColumn(name = "family_user_id")
    @JsonBackReference
    private FamilyUserInfo familyUserInfo;

    @Column(nullable = false)
    private String videoPath;

    @Column
    private LocalDateTime postedAt;

    @Column
    private boolean isViewed;

}
