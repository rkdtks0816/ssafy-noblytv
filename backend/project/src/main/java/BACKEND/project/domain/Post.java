package BACKEND.project.domain;


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
    private OldUserInfo oldUserInfo;

    @ManyToOne
    private FamilyUserInfo familyUserInfo;

    @Column(nullable = false)
    private String videoPath;

    @Column
    private LocalDateTime postedAt;
}
