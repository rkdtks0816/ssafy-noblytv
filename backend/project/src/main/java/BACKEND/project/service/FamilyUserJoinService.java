package BACKEND.project.service;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.dto.FamilyUserRegistrationDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.FamilyUserUpdateDto;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class FamilyUserJoinService {

    private final FamilyUserRepository familyUserRepository;
    private final OldUserRepository oldUserRepository;
    private final FamilyRelationRepository familyRelationRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public FamilyUserJoinService(FamilyUserRepository familyUserRepository, OldUserRepository oldUserRepository, FamilyRelationRepository familyRelationRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.familyUserRepository = familyUserRepository;
        this.oldUserRepository = oldUserRepository;
        this.familyRelationRepository = familyRelationRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Transactional
    public FamilyUserInfo registerFamilyUser(FamilyUserRegistrationDto familyUserRegistrationDto) {
        // 패스워드 인코딩
        String encodedPassword = bCryptPasswordEncoder.encode(familyUserRegistrationDto.getPassword());

        // 가족 회원 정보 저장
        FamilyUserInfo newUser = new FamilyUserInfo();
        newUser.setUserId(familyUserRegistrationDto.getUserId());
        newUser.setPassword(encodedPassword);
        newUser.setUsername(familyUserRegistrationDto.getUsername());
        newUser.setBirth(familyUserRegistrationDto.getBirth());
        newUser.setLunarSolar(familyUserRegistrationDto.getLunarSolar());
        FamilyUserInfo registeredFamilyUser = familyUserRepository.save(newUser);

        // 노인 회원 정보 조회 + 노인과 가족 관계 저장
        for (String oldUserId : familyUserRegistrationDto.getOldUserIds()) {
            OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                    .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

            FamilyRelation familyRelation = new FamilyRelation();
            familyRelation.setOldUserInfo(oldUser);
            familyRelation.setFamilyUserInfo(registeredFamilyUser);
            familyRelationRepository.save(familyRelation);

            registeredFamilyUser.getFamilyRelations().add(familyRelation);
        }

        return registeredFamilyUser;
    }

    @Transactional
    public FamilyUserRegistrationDto updateOldUsers(String familyUserId, List<String> oldUserIds) {
        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        List<FamilyRelation> existingRelations = familyUser.getFamilyRelations();

        // 새로운 노인-가족 관계를 생성하면서 기존 관계와 비교
        for (String oldUserId : oldUserIds) {
            OldUserInfo oldUser = oldUserRepository.findByUserId(oldUserId)
                    .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

            boolean exists = existingRelations.stream()
                    .anyMatch(relation -> relation.getOldUserInfo().equals(oldUser));

            if (!exists) {
                FamilyRelation familyRelation = new FamilyRelation();
                familyRelation.setOldUserInfo(oldUser);
                familyRelation.setFamilyUserInfo(familyUser);
                familyRelationRepository.save(familyRelation);
                familyUser.getFamilyRelations().add(familyRelation);
            }
        }

        existingRelations.removeIf(relation -> !oldUserIds.contains(relation.getOldUserInfo().getUserId()));

        List<String> oldUserIdList = existingRelations.stream()
                .map(relation -> relation.getOldUserInfo().getUserId())
                .toList();

        return new FamilyUserRegistrationDto(familyUser.getUserId(), familyUser.getPassword(), familyUser.getUsername(), familyUser.getBirth(), familyUser.getLunarSolar(), oldUserIds);
    }

    @Transactional
    public FamilyUserUpdateDto updateFamilyUserInfo(String familyUserId, FamilyUserUpdateDto familyUserUpdateDto) {
        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        if (familyUserUpdateDto.getPassword() != null) {
            if (!familyUserUpdateDto.getPassword().equals(familyUserUpdateDto.getConfirmPassword())) {
                throw new IllegalArgumentException("비밀번호와 비밀번호 확인란이 일치하지 않습니다.");
            }
            familyUser.setPassword(bCryptPasswordEncoder.encode(familyUserUpdateDto.getPassword()));
        }
        if (familyUserUpdateDto.getUsername() != null) {
            familyUser.setUsername(familyUserUpdateDto.getUsername());
        }
        if (familyUserUpdateDto.getBirth() != null) {
            familyUser.setBirth(familyUserUpdateDto.getBirth());
        }
        if (familyUserUpdateDto.getLunarSolar() != null) {
            familyUser.setLunarSolar(familyUserUpdateDto.getLunarSolar());
        }

        return new FamilyUserUpdateDto(familyUser.getUserId(), familyUser.getPassword(), familyUser.getPassword(), familyUser.getUsername(), familyUser.getBirth(), familyUser.getLunarSolar());
    }

    public Optional<FamilyUserInfo> getFamilyUserInfo(String userId) {
        return familyUserRepository.findByUserId(userId);
    }
}
