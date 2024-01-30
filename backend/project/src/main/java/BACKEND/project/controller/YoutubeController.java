package BACKEND.project.controller;

import BACKEND.project.service.YoutubeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/youtube")
public class YoutubeController {

    private final YoutubeService youtubeService;

    @GetMapping
    public ResponseEntity<String> searchVideo(@RequestParam String keyword) throws IOException {
        // Youtube Service를 통해 동영상 검색한 결과를 받아옴
        String result = youtubeService.searchVideo(keyword);
        return ResponseEntity.ok(result);
    }
}
