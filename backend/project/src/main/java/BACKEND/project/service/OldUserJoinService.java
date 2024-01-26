package BACKEND.project.service;

import BACKEND.project.domain.Medication;
import BACKEND.project.dto.MedicationDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OldUserJoinService {

    private final OldUserRepository oldUserRepository;

    public OldUserJoinService(OldUserRepository oldUserRepository) {
        this.oldUserRepository = oldUserRepository;
    }

    @Transactional
    public OldUserInfo registerUser(OldUserRegistrationDto oldUserRegistrationDto) {
        // 고유 코드 생성
        String userId;
        do {
            userId = RandomStringUtils.randomAlphanumeric(8).toLowerCase();
        } while (oldUserRepository.findByUserId(userId).isPresent());

        OldUserInfo newUser = new OldUserInfo();
        newUser.setUserId(userId);
        newUser.setUsername(oldUserRegistrationDto.getUsername());
        newUser.setBirth(oldUserRegistrationDto.getBirth());
        newUser.setLunarSolar(oldUserRegistrationDto.getLunarSolar());
        newUser.setGender(oldUserRegistrationDto.getGender());

        // 약 정보와 사용자 정보 연결
        oldUserRegistrationDto.getMedications().forEach(medicationDto -> {
            Medication medication = dtoToMedication(medicationDto);
            medication.setOldUser(newUser);
            newUser.getMedications().add(medication);
        });

        // 사용자 정보와 약 정보 저장
        return oldUserRepository.save(newUser);
    }

    private Medication dtoToMedication(MedicationDto medicationDto) {
        Medication medication = new Medication();
        medication.setMedicine(medicationDto.getMedicine());
        medication.setMedicationTime(medicationDto.getMedicationTime());
        return medication;
    }

    public OldUserInfo findByUserId(String userId) {
        Optional<OldUserInfo> oldUserInfo = oldUserRepository.findByUserId(userId);
        return oldUserInfo.orElseThrow(() -> new IllegalArgumentException("등록되지 않은 회원 ID입니다."));
    }

//    public OldUserUpdateDto oldUserUpdateInfo(String oldUserId, OldUserUpdateDto oldUserUpdateDto) {
//        OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
//                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));
//        if (oldUserUpdateDto.getUsername() != null) {
//            oldUser.setUsername(oldUserUpdateDto.getUsername());
//        }
//
//        if (oldUserUpdateDto.getBirth() != null) {
//            oldUser.setBirth(oldUserUpdateDto.getBirth());
//        }
//
//        if (oldUserUpdateDto.getLunarSolar() != null) {
//            oldUser.setLunarSolar(oldUserUpdateDto.getLunarSolar());
//        }
//
//        return new OldUserUpdateDto(oldUser.getUserId(), oldUser.getUsername(), oldUser.getBirth(), oldUser.getLunarSolar());
//    }

    public Optional<OldUserInfo> getOldUserInfo(String userId) {
        return oldUserRepository.findByUserId(userId);
    }
}
