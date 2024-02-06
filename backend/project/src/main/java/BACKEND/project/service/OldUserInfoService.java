package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.FamilyRelationResponseDto;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.dto.OldUserInfoResponseDto;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.MedicationRepository;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OldUserInfoService {

    private final OldUserRepository oldUserRepository;
    private final FamilyUserRepository familyUserRepository;
    private final FamilyRelationRepository familyRelationRepository;
    private final MedicationRepository medicationRepository;

    public OldUserInfo checkUserOrFamily(String oldUserId) {
        OldUserInfo oldUserInfo = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 노인 회원 ID입니다."));

        String currentUserId = SecurityContextHolder.getContext().getAuthentication().getName();

        if (!oldUserId.equals(currentUserId)) {
            FamilyUserInfo familyUserInfo = familyUserRepository.findByUserId(currentUserId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 가족 회원 정보를 찾을 수 없습니다."));

            boolean isFamily = familyRelationRepository.existsByOldUserInfoAndFamilyUserInfo(oldUserInfo, familyUserInfo);

            if (!isFamily) {
                throw new IllegalArgumentException("해당 노인 회원과 가족 관계가 아닙니다.");
            }
        }

        return oldUserInfo;
    }

    @Transactional
    public OldUserInfoDto updateOldUserInfo(String userId, OldUserInfoDto oldUserInfoDto) {

        OldUserInfo oldUserInfo = checkUserOrFamily(userId);

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
    public OldUserInfoResponseDto getOldUserInfo(String oldUserId) {

        OldUserInfo oldUserInfo = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 노인 회원 ID입니다."));

        // 'lastVisitedId' 필드를 업데이트
        String currentUserId = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<FamilyUserInfo> optionalFamilyUserInfo = familyUserRepository.findByUserId(currentUserId);

        if (optionalFamilyUserInfo.isPresent()) {
            FamilyUserInfo familyUserInfo = optionalFamilyUserInfo.get();
            familyUserInfo.setLastVisitedId(oldUserId);
            familyUserRepository.save(familyUserInfo);
        }

        // OldUserInfo 객체를 OldUserInfoResponseDto 객체로 변환
        OldUserInfoResponseDto oldUserInfoResponseDto = new OldUserInfoResponseDto();
        oldUserInfoResponseDto.setId(oldUserInfo.getId());
        oldUserInfoResponseDto.setUserId(oldUserInfo.getUserId());
        oldUserInfoResponseDto.setUsername(oldUserInfo.getUsername());
        oldUserInfoResponseDto.setBirth(oldUserInfo.getBirth());
        oldUserInfoResponseDto.setLunarSolar(oldUserInfo.getLunarSolar());
        oldUserInfoResponseDto.setGender(oldUserInfo.getGender());
        oldUserInfoResponseDto.setTvCode(oldUserInfo.getTvCode());
        oldUserInfoResponseDto.setMedications(oldUserInfo.getMedications());
        oldUserInfoResponseDto.setDiaries(oldUserInfo.getDiaries());
        oldUserInfoResponseDto.setQuizResults(oldUserInfo.getQuizResults());
        oldUserInfoResponseDto.setGymnastics(oldUserInfo.getGymnastics());
        oldUserInfoResponseDto.setSchedules(oldUserInfo.getSchedules());
        oldUserInfoResponseDto.setUserType(oldUserInfo.getUserType());

        // FamilyRelation 객체를 FamilyRelationResponseDto 객체로 변환
        List<FamilyRelationResponseDto> familyRelationResponseDtos = oldUserInfo.getFamilyRelations().stream().map(fr -> {
            FamilyRelationResponseDto familyRelationResponseDto = new FamilyRelationResponseDto();
            familyRelationResponseDto.setUserId(fr.getFamilyUserInfo().getUserId());
            familyRelationResponseDto.setUsername(fr.getFamilyUserInfo().getUsername());
            return familyRelationResponseDto;
        }).collect(Collectors.toList());

        oldUserInfoResponseDto.setFamilyRelations(familyRelationResponseDtos);

        return oldUserInfoResponseDto;
    }
}
