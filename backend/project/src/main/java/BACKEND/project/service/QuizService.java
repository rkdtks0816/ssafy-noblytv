package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Quiz;
import BACKEND.project.dto.QuizDto;
import BACKEND.project.repository.OldUserRepository;
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

}
