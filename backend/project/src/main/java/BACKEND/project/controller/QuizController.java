package BACKEND.project.controller;

import BACKEND.project.domain.Quiz;
import BACKEND.project.dto.QuizDto;
import BACKEND.project.service.QuizService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/quiz")
@Tag(name = "퀴즈 API")
public class QuizController {

    private final QuizService quizService;

    @PostMapping("/create")
    @Operation(summary = "퀴즈 생성")
    public ResponseEntity<Quiz> createQuiz(@Validated @RequestBody QuizDto quizDto) {
        Quiz newQuiz = quizService.saveQuiz(quizDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newQuiz);
    }

    @GetMapping("/{id}")
    @Operation(summary = "퀴즈 조회")
    public QuizDto getQuiz(@PathVariable("id") Long id) {
        return quizService.getQuiz(id);
    }
}
