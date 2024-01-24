package BACKEND.project.controller;

import BACKEND.project.domain.Diary;
import BACKEND.project.domain.DiaryDto;
import BACKEND.project.service.DiaryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/diary")
public class DiaryController {

    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @PostMapping("/create/{oldUserId}")
    public ResponseEntity<Diary> createDiary(@Valid @RequestBody DiaryDto diaryDto, @PathVariable("oldUserId") String oldUserId) {
        Diary newDiary = diaryService.saveDiary(diaryDto, oldUserId);
        return ResponseEntity.ok(newDiary);
    }

    @GetMapping("/view/{oldUserId}")
    public ResponseEntity<List<Diary>> getDiariesByOldUserId(@PathVariable("oldUserId") String oldUserId) {
        List<Diary> diaries = diaryService.getDiaries(oldUserId);
        return ResponseEntity.ok(diaries);
    }
}
