package BACKEND.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class QuizDto {

    private Long id;

    private String problem;

    private String answer;
}
