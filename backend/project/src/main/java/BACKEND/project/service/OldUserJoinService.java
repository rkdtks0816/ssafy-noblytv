package BACKEND.project.service;

import BACKEND.project.domain.Medication;
import BACKEND.project.dto.MedicationDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OldUserJoinService {

    private final OldUserRepository oldUserRepository;

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
        newUser.setUserType(OldUserInfo.UserType.OLD);

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
}
