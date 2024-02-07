package BACKEND.project.service;

import BACKEND.project.domain.Quiz;
import BACKEND.project.dto.QuizDto;
import BACKEND.project.repository.QuizRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizRepository quizRepository;

    @Transactional
    public Quiz saveQuiz(QuizDto quizDto) {

        Quiz newQuiz = new Quiz();
        newQuiz.setProblem(quizDto.getProblem());
        newQuiz.setAnswer(quizDto.getAnswer());

        return quizRepository.save(newQuiz);
    }

    @Transactional
    public QuizDto getQuiz(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 퀴즈가 존재하지 않습니다."));

        QuizDto quizDto = new QuizDto();
        quizDto.setId(quiz.getId());
        quizDto.setProblem(quiz.getProblem());
        quizDto.setAnswer(quiz.getAnswer());

        return quizDto;
    }

    @Transactional
    public QuizDto updateQuiz(Long id, QuizDto quizDto) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 퀴즈가 존재하지 않습니다."));

        if (quizDto.getProblem() != null) {
            quiz.setProblem(quizDto.getProblem());
        }
        if (quizDto.getAnswer() != null) {
            quiz.setAnswer(quizDto.getAnswer());
        }

        return quizDto;
    }

    @Transactional
    public void deleteQuiz(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 퀴즈가 존재하지 않습니다."));

        quizRepository.delete(quiz);
    }
}
