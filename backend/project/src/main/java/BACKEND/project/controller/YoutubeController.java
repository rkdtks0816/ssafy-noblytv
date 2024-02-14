package BACKEND.project.controller;

import BACKEND.project.service.YoutubeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/youtube")
@Tag(name = "Youtube Service API")
public class YoutubeController {

    private final YoutubeService youtubeService;

    @GetMapping
    @Operation(summary = "Youtube 동영상 검색 결과 받아오기")
    public ResponseEntity<String> searchVideo(@RequestParam String keyword) throws IOException {
        // Youtube Service를 통해 동영상 검색한 결과를 받아옴
        String result = youtubeService.searchVideo(keyword);
        return ResponseEntity.ok(result);
    }
}
