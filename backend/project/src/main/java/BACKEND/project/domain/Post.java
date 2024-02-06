package BACKEND.project.domain;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "old_user_id")
    private OldUserInfo oldUserInfo;

    @ManyToOne
    @JoinColumn(name = "family_user_id")
    private FamilyUserInfo familyUserInfo;

    @Column(nullable = false)
    private String videoPath;

    @Column
    private LocalDateTime postedAt;

    @Column
    private boolean isViewed;

    public Post(OldUserInfo oldUserInfo, String videoUrl) {
        this.oldUserInfo = oldUserInfo;
        this.videoPath = videoPath;
        this.postedAt = LocalDateTime.now();
    }

    public Post(FamilyUserInfo familyUserInfo, String videoUrl) {
        this.familyUserInfo = familyUserInfo;
        this.videoPath = videoPath;
        this.postedAt = LocalDateTime.now();
    }
}
