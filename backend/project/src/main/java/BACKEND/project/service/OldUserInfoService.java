package BACKEND.project.service;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.repository.MedicationRepository;
import BACKEND.project.repository.OldUserInfoRepository;
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

    public void updateOldUserInfo(String userId, OldUserInfoDto oldUserInfoDto) {
        OldUserInfo oldUserInfo = oldUserInfoRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 회원 정보를 찾을 수 없습니다."));

        oldUserInfo.setUsername(oldUserInfoDto.getUsername());
        oldUserInfo.setBirth(oldUserInfoDto.getBirth());
        oldUserInfo.setLunarSolar(oldUserInfoDto.getLunarSolar());
        oldUserInfo.setGender(oldUserInfoDto.getGender());

        // 약물 정보 업데이트
        List<Medication> medications = oldUserInfoDto.getMedications();
        oldUserInfo.getMedications().clear();
        ;
        oldUserInfo.getMedications().addAll(medications);

        // 약물 정보 저장
        for (Medication medication : medications) {
            medication.setOldUser(oldUserInfo);
            medicationRepository.save(medication);
        }

        oldUserInfoRepository.save(oldUserInfo);
    }
}
