package BACKEND.project.service;

import BACKEND.project.domain.Diary;
import BACKEND.project.dto.DiaryDto;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.DiaryRepository;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;
    private final OldUserRepository oldUserRepository;
    private final FamilyRelationRepository familyRelationRepository;
    private final FamilyUserRepository familyUserRepository;

    public Diary saveDiary(DiaryDto diaryDto, String oldUserId) {
        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        Diary newDiary = new Diary();
        newDiary.setText(diaryDto.getText());
        newDiary.setSummary(diaryDto.getSummary());
        newDiary.setOldUserInfo(oldUser);

        return diaryRepository.save(newDiary);
    }

    public List<Diary> getDiaries(String oldUserId) {
        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        String currentUserId = SecurityContextHolder.getContext().getAuthentication().getName();

        // 로그인한 사용자가 노인 본인인 경우
        if (currentUserId.equals(oldUserId)) {
            return oldUser.getDiaries();
        }

        FamilyUserInfo familyUser = familyUserRepository.findByUserId(currentUserId)
                .orElseThrow(() -> new NoSuchElementException(("해당 가족 회원이 존재하지 않습니다.")));

        boolean isFamily = familyRelationRepository.existsByOldUserInfoAndFamilyUserInfo(oldUser, familyUser);

        if (!isFamily) {
            throw new NoSuchElementException("해당 노인 회원과 가족 관계가 아닙니다.");
        }

        return oldUser.getDiaries();
    }
}
