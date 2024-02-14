package BACKEND.project.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuizRelationDto {

    private Long id;

    private Long quizId;

    private Long userId;

    private boolean isCorrect;
}
