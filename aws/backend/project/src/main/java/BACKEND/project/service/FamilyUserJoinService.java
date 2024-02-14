package BACKEND.project.service;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.dto.*;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FamilyUserJoinService {

    private final FamilyUserRepository familyUserRepository;
    private final OldUserRepository oldUserRepository;
    private final FamilyRelationRepository familyRelationRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

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
        newUser.setUserType(FamilyUserInfo.UserType.FAMILY);
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

    private void checkUserAuthorization(String familyUserId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentLoggedInUser = authentication.getName();

        if (!familyUserId.equals(currentLoggedInUser)) {
            throw new IllegalArgumentException("본인의 정보만 수정할 수 있습니다.");
        }
    }

    @Transactional
    public FamilyUserRegistrationDto updateOldUsers(String familyUserId, List<String> oldUserIds) {
        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        checkUserAuthorization(familyUserId);

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

        return new FamilyUserRegistrationDto(familyUser.getUserId(), familyUser.getPassword(), familyUser.getUsername(), familyUser.getBirth(), familyUser.getLunarSolar(), oldUserIds);
    }

    @Transactional
    public boolean isUserIdDuplicated(String userId) {
        return familyUserRepository.findByUserId(userId).isPresent();
    }

    @Transactional
    public FamilyUserUpdateDto updateFamilyUserInfo(String familyUserId, FamilyUserUpdateDto familyUserUpdateDto) {
        FamilyUserInfo familyUser = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        checkUserAuthorization(familyUserId);

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

    public FamilyUserInfoDto getFamilyUserInfo(String userId) {
        FamilyUserInfo familyUserInfo = familyUserRepository.findByUserId(userId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        checkUserAuthorization(userId);

        return convertToDto(familyUserInfo);
    }

    private FamilyUserInfoDto convertToDto(FamilyUserInfo familyUserInfo) {
        FamilyUserInfoDto dto = new FamilyUserInfoDto();
        dto.setUserId(familyUserInfo.getUserId());
        dto.setUsername(familyUserInfo.getUsername());
        dto.setBirth(familyUserInfo.getBirth());
        dto.setLunarSolar(familyUserInfo.getLunarSolar());
        dto.setPosts(familyUserInfo.getPosts());

        if (familyUserInfo.getLastVisitedId() != null) {
            dto.setLastVisitedId(familyUserInfo.getLastVisitedId());
        }

        List<FamilyRelationDto> familyRelationDtos = familyUserInfo.getFamilyRelations().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        dto.setFamilyRelations(familyRelationDtos);

        return dto;
    }

    private FamilyRelationDto convertToDto(FamilyRelation familyRelation) {
        FamilyRelationDto dto = new FamilyRelationDto();
        dto.setOldUserInfo(convertToDto(familyRelation.getOldUserInfo()));

        return dto;
    }

    private OldUserInfoDto convertToDto(OldUserInfo oldUserInfo) {
        OldUserInfoDto dto = new OldUserInfoDto();
        dto.setUserId(oldUserInfo.getUserId());
        dto.setUsername(oldUserInfo.getUsername());

        return dto;
    }
}
