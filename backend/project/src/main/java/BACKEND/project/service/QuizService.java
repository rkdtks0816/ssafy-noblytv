package BACKEND.project.service;

import BACKEND.project.domain.Quiz;
import BACKEND.project.dto.QuizDto;
import BACKEND.project.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizRepository quizRepository;

    public Quiz saveQuiz(QuizDto quizDto) {

        Quiz newQuiz = new Quiz();
        newQuiz.setProblem(quizDto.getProblem());
        newQuiz.setAnswer(quizDto.getAnswer());

        return quizRepository.save(newQuiz);
    }

    public QuizDto getQuiz(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 퀴즈가 존재하지 않습니다."));

        QuizDto quizDto = new QuizDto();
        quizDto.setId(quiz.getId());
        quizDto.setProblem(quiz.getProblem());
        quizDto.setAnswer(quiz.getAnswer());

        return quizDto;
    }
}
