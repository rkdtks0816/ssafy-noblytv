package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.*;
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
    private final PostService postService;

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

    private Medication convertToEntity(MedicationDto medicationDto, OldUserInfo oldUserInfo) {
        Medication medication = new Medication();
        medication.setOldUser(oldUserInfo);
        medication.setMedicine(medicationDto.getMedicine());
        medication.setMedicationTime(medicationDto.getMedicationTime());
        return medication;
    }

    private MedicationDto convertToDto(Medication medication) {
        MedicationDto medicationDto = new MedicationDto();
        medicationDto.setMedicine(medication.getMedicine());
        medicationDto.setMedicationTime(medication.getMedicationTime());
        return medicationDto;
    }

    @Transactional
    public OldUserUpdateDto updateOldUserInfo(String userId, OldUserUpdateDto oldUserUpdateDto) {

        OldUserInfo oldUserInfo = checkUserOrFamily(userId);

        if (oldUserUpdateDto.getUsername() != null) {
            oldUserInfo.setUsername(oldUserUpdateDto.getUsername());
        }
        if (oldUserUpdateDto.getBirth() != null) {
            oldUserInfo.setBirth(oldUserUpdateDto.getBirth());
        }
        if (oldUserUpdateDto.getLunarSolar() != null) {
            oldUserInfo.setLunarSolar(oldUserUpdateDto.getLunarSolar());
        }
        if (oldUserUpdateDto.getGender() != null) {
            oldUserInfo.setGender(oldUserUpdateDto.getGender());
        }
        // 약물 정보 업데이트
        if (oldUserUpdateDto.getMedications() != null) {
            List<MedicationDto> medicationDtos = oldUserUpdateDto.getMedications();

            // MedicationDto를 Medication으로 변환
            List<Medication> medications = medicationDtos.stream()
                    .map(medicationDto -> convertToEntity(medicationDto, oldUserInfo))
                    .collect(Collectors.toList());

            // OldUserInfo의 medications 필드 업데이트
            oldUserInfo.getMedications().clear();
            oldUserInfo.getMedications().addAll(medications);

            // 약물 정보 저장
            for (Medication medication : medications) {
                medicationRepository.save(medication);
            }
        }
        // 약물 정보를 MedicationDto로 변환
        List<MedicationDto> medicationDtos = oldUserInfo.getMedications().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());

        oldUserRepository.save(oldUserInfo);

        return new OldUserUpdateDto(oldUserInfo.getUserId(), oldUserInfo.getUsername(), oldUserInfo.getBirth(), oldUserInfo.getLunarSolar(), oldUserInfo.getGender(), medicationDtos);
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
        oldUserInfoResponseDto.setPosts(oldUserInfo.getPosts());

        // FamilyRelation 객체를 FamilyRelationResponseDto 객체로 변환
        List<FamilyRelationResponseDto> familyRelationResponseDtos = oldUserInfo.getFamilyRelations().stream().map(fr -> {
            FamilyRelationResponseDto familyRelationResponseDto = new FamilyRelationResponseDto();
            familyRelationResponseDto.setId(fr.getFamilyUserInfo().getId());
            familyRelationResponseDto.setUserId(fr.getFamilyUserInfo().getUserId());
            familyRelationResponseDto.setUsername(fr.getFamilyUserInfo().getUsername());
            return familyRelationResponseDto;
        }).collect(Collectors.toList());

        oldUserInfoResponseDto.setFamilyRelations(familyRelationResponseDtos);

//        FamilyUser가 작성한 게시물 추가
        List<PostDto> familyPosts = postService.getPostsByOldUserInfoId(oldUserInfo.getId());
        oldUserInfoResponseDto.setFamilyposts(familyPosts);

        return oldUserInfoResponseDto;
    }
}
