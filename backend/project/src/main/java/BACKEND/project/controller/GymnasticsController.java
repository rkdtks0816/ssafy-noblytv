package BACKEND.project.controller;

import BACKEND.project.dto.GymnasticsDto;
import BACKEND.project.service.GymnasticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gymnastics")
public class GymnasticsController {

    private final GymnasticsService gymnasticsService;

    @PostMapping("/{oldUserId}")
    public ResponseEntity<GymnasticsDto> saveGymnastics(@PathVariable String oldUserId, @RequestParam String keyword, @RequestParam String day) throws IOException {
        GymnasticsDto gymnasticsDto = gymnasticsService.saveGymnastics(oldUserId, keyword, day);
        return ResponseEntity.ok(gymnasticsDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GymnasticsDto> updateGymnastics(@PathVariable Long id, @RequestParam String newKeyword, @RequestParam String newDay) throws IOException {
        GymnasticsDto gymnastics = gymnasticsService.updateGymnastics(id, newKeyword, newDay);
        return ResponseEntity.ok(gymnastics);
    }
}
