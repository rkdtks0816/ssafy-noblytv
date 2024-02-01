package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.FamilyRelationDto;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.repository.OldUserInfoRepository;
import BACKEND.project.util.JwtToken;
import BACKEND.project.util.JwtTokenProvider;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OldUserLoginService {

    private final OldUserInfoRepository oldUserInfoRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final FamilyUserJoinService familyUserJoinService;

    public List<OldUserInfoDto> getOldUsersByFamilyUserId(String familyUserId) {
        // 가족 유저 ID를 이용하여 FamilyUserInfoDto 가져옴
        FamilyUserInfoDto familyUserInfoDto = familyUserJoinService.getFamilyUserInfo(familyUserId);

        // FamilyUserInfoDto를 이용하여 OldUserInfoDto의 리스트를 반환
        return familyUserInfoDto.getFamilyRelations().stream()
                .map(FamilyRelationDto::getOldUserInfo)
                .collect(Collectors.toList());
    }

    public JwtToken authenticate(String tvCode, String userId) {
        // 사용자 정보 조회
        OldUserInfo oldUserInfo = oldUserInfoRepository.findByUserId(userId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + userId));

        // tvCode 필드 검사 및 업데이트
        if (oldUserInfo.getTvCode() == null || !oldUserInfo.getTvCode().equals(tvCode)) {
            oldUserInfo.setTvCode(tvCode);
            oldUserInfoRepository.save(oldUserInfo);
        }

        // JWT 토큰 생성
        return jwtTokenProvider.createToken(userId);
    }
}
