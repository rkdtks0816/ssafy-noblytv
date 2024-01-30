package BACKEND.project.service;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.repository.MedicationRepository;
import BACKEND.project.repository.OldUserInfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OldUserInfoService {

    private final OldUserInfoRepository oldUserInfoRepository;
    private final MedicationRepository medicationRepository;

    @Autowired
    public OldUserInfoService(OldUserInfoRepository oldUserInfoRepository, MedicationRepository medicationRepository) {
        this.oldUserInfoRepository = oldUserInfoRepository;
        this.medicationRepository = medicationRepository;
    }

    @Transactional
    public OldUserInfoDto updateOldUserInfo(String userId, OldUserInfoDto oldUserInfoDto) {
        OldUserInfo oldUserInfo = oldUserInfoRepository.findByUserId(userId)
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

        oldUserInfoRepository.save(oldUserInfo);

        return new OldUserInfoDto(oldUserInfo.getUserId(), oldUserInfo.getUsername(), oldUserInfo.getBirth(), oldUserInfo.getLunarSolar(), oldUserInfo.getGender(), oldUserInfo.getMedications());
    }
}
