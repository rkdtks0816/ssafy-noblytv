package BACKEND.project.service;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.MedicationDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.OldUserRegistrationDto;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OldUserJoinService {

    private final OldUserRepository oldUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public OldUserJoinService(OldUserRepository oldUserRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.oldUserRepository = oldUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Transactional
    public OldUserInfo registerUser(OldUserRegistrationDto oldUserRegistrationDto) {
        // 아이디 중복 체크
        Optional<OldUserInfo> existingUser = oldUserRepository.findByUserId(oldUserRegistrationDto.getUserId());
        if (existingUser.isPresent()) {
            throw new IllegalStateException("이미 등록된 아이디입니다.");
        }

        // 패스워드 인코딩
        String encodedPassword = bCryptPasswordEncoder.encode(oldUserRegistrationDto.getPassword());

        OldUserInfo newUser = new OldUserInfo();
        newUser.setUserId(oldUserRegistrationDto.getUserId());
        newUser.setUsername(oldUserRegistrationDto.getUsername());
        newUser.setPassword(encodedPassword);
        newUser.setBirth(oldUserRegistrationDto.getBirth());
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
}
