package BACKEND.project.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TvLoginDto {

    private String tvCode;

    private String userId;
}
