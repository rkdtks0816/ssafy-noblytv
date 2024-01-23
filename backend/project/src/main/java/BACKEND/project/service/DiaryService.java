package BACKEND.project.service;

import BACKEND.project.domain.Diary;
import BACKEND.project.domain.DiaryDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.DiaryRepository;
import BACKEND.project.repository.OldUserRepository;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class DiaryService {

    private final DiaryRepository diaryRepository;
    private final OldUserRepository oldUserRepository;

    public DiaryService(DiaryRepository diaryRepository, OldUserRepository oldUserRepository) {
        this.diaryRepository = diaryRepository;
        this.oldUserRepository = oldUserRepository;
    }

    public Diary saveDiary(DiaryDto diaryDto, String oldUserId) {
        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        Diary newDiary = new Diary();
        newDiary.setText(diaryDto.getText());
        newDiary.setOldUserInfo(oldUser);

        return diaryRepository.save(newDiary);
    }
}
