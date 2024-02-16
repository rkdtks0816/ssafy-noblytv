package BACKEND.project.controller;

import BACKEND.project.dto.GymnasticsDto;
import BACKEND.project.service.GymnasticsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gymnastics")
@Tag(name = "체조 APi")
public class GymnasticsController {

    private final GymnasticsService gymnasticsService;

    @PostMapping("/{oldUserId}")
    @Operation(summary = "체조 등록")
    public ResponseEntity<GymnasticsDto> saveGymnastics(@PathVariable String oldUserId, @RequestParam String keyword, @RequestParam String day) throws IOException {
        GymnasticsDto gymnasticsDto = gymnasticsService.saveGymnastics(oldUserId, keyword, day);
        return ResponseEntity.ok(gymnasticsDto);
    }

    @PutMapping("/{id}")
    @Operation(summary = "체조 수정")
    public ResponseEntity<GymnasticsDto> updateGymnastics(@PathVariable Long id, @RequestParam String newKeyword, @RequestParam String newDay) throws IOException {
        GymnasticsDto gymnastics = gymnasticsService.updateGymnastics(id, newKeyword, newDay);
        return ResponseEntity.ok(gymnastics);
    }
}
