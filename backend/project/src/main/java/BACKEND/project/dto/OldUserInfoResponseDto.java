package BACKEND.project.dto;

import BACKEND.project.domain.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
public class OldUserInfoResponseDto {

    private Long id;

    private String userId;

    private String username;

    private LocalDate birth;

    private OldUserInfo.LunarSolar lunarSolar;

    private OldUserInfo.Gender gender;

    private String tvCode;

    private List<Medication> medications;

    private List<FamilyRelationResponseDto> familyRelations;

    private List<Diary> diaries;

    private List<QuizResult> quizResults;

    private List<Gymnastics> gymnastics;

    private List<Schedule> schedules;

    private OldUserInfo.UserType userType;

    private List<Post> posts;

    private List<PostDto> familyposts;
}
