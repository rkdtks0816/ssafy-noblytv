package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.MedicationRepository;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OldUserInfoService {

    private final OldUserRepository oldUserRepository;
    private final FamilyUserRepository familyUserRepository;
    private final FamilyRelationRepository familyRelationRepository;
    private final MedicationRepository medicationRepository;

    public enum UserType {
        FAMILY,
        OLD
    }

    @Transactional
    public OldUserInfoDto updateOldUserInfo(String userId, OldUserInfoDto oldUserInfoDto) {
        OldUserInfo oldUserInfo = oldUserRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 노인 회원 정보를 찾을 수 없습니다."));

        if (oldUserInfoDto.getUsername() != null) {
            oldUserInfo.setUsername(oldUserInfoDto.getUsername());
        }
        if (oldUserInfoDto.getBirth() != null) {
            oldUserInfo.setBirth(oldUserInfoDto.getBirth());
        }
        if (oldUserInfoDto.getLunarSolar() != null) {
            oldUserInfo.setLunarSolar(oldUserInfoDto.getLunarSolar());
        }
        if (oldUserInfoDto.getGender() != null) {
            oldUserInfo.setGender(oldUserInfoDto.getGender());
        }
        // 약물 정보 업데이트
        if (oldUserInfoDto.getMedications() != null) {
            List<Medication> medications = oldUserInfoDto.getMedications();
            oldUserInfo.getMedications().clear();
            oldUserInfo.getMedications().addAll(medications);

            // 약물 정보 저장
            for (Medication medication : medications) {
                medication.setOldUser(oldUserInfo);
                medicationRepository.save(medication);
            }
        }

        oldUserRepository.save(oldUserInfo);

        return new OldUserInfoDto(oldUserInfo.getUserId(), oldUserInfo.getUsername(), oldUserInfo.getBirth(), oldUserInfo.getLunarSolar(), oldUserInfo.getGender(), oldUserInfo.getMedications());
    }

    @Transactional
    public OldUserInfo getOldUserInfo(String oldUserId, String userId, UserType userType) {

        OldUserInfo oldUserInfo = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 노인 회원 ID입니다."));
        FamilyUserInfo familyUserInfo = familyUserRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 가족 회원 ID입니다."));

        // 사용자가 가족 회원인 경우에만 관계를 확인하고, 'lastVisitedId' 필드를 업데이트
        if (userType == UserType.FAMILY) {
            if (familyRelationRepository.existsByOldUserInfoAndFamilyUserInfo(oldUserInfo, familyUserInfo)) {
                familyUserInfo.setLastVisitedId(oldUserId);
                familyUserRepository.save(familyUserInfo);
            } else {
                throw new IllegalArgumentException("노인 회원과 가족 회원 사이에 관계가 없습니다.");
            }
        }

        return oldUserInfo;
    }
}
