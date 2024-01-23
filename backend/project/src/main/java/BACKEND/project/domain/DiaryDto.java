package BACKEND.project.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class DiaryDto {

    private Long id;

    @Past(message = "날짜는 과거 날짜여야 합니다.")
    private LocalDate date;

    @NotBlank()
    private String text;
}
