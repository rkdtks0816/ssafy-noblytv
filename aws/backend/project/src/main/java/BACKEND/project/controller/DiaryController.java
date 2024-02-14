package BACKEND.project.controller;

import BACKEND.project.domain.Diary;
import BACKEND.project.dto.DiaryDto;
import BACKEND.project.service.DiaryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/diary")
@Tag(name = "일기 API")
public class DiaryController {

    private final DiaryService diaryService;

    @PostMapping("/create/{oldUserId}")
    @Operation(summary = "일기 작성")
    public ResponseEntity<Diary> createDiary(@Validated @RequestBody DiaryDto diaryDto, @PathVariable("oldUserId") String oldUserId) {
        Diary newDiary = diaryService.saveDiary(diaryDto, oldUserId);
        return ResponseEntity.status(HttpStatus.CREATED).body(newDiary);
    }

    @GetMapping("/view/{oldUserId}")
    @Operation(summary = "일기 조회")
    public ResponseEntity<List<Diary>> getDiariesByOldUserId(@PathVariable("oldUserId") String oldUserId) {
        List<Diary> diaries = diaryService.getDiaries(oldUserId);
        return ResponseEntity.ok(diaries);
    }
}
