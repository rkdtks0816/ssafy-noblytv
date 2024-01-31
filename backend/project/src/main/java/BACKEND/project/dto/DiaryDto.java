package BACKEND.project.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DiaryDto {

    private Long id;

    @NotBlank()
    private String text;

    @NotBlank()
    private String summary;
}
