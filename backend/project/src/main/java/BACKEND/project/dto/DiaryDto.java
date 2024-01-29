package BACKEND.project.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
public class DiaryDto {

    private Long id;

    @NotBlank()
    private String text;

    @NotBlank()
    private String summary;
}
