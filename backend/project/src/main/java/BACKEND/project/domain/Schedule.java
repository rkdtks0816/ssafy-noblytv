package BACKEND.project.domain;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "familyUserId")
    private FamilyUserInfo familyUser;

    @ManyToOne
    @JoinColumn(name = "oldUserId")
    private OldUserInfo oldUser;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime registeredTime;

    @Column(nullable = false)
    private String schedule;

    @Column(nullable = false)
    private LocalDateTime scheduleTime;
}
