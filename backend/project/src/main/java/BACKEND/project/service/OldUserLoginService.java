package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.TvCode;
import BACKEND.project.dto.FamilyRelationDto;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.exception.InvalidCredentialsException;
import BACKEND.project.repository.OldUserInfoRepository;
import BACKEND.project.repository.TvCodeRepository;
import BACKEND.project.util.JwtToken;
import BACKEND.project.util.JwtTokenProvider;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OldUserLoginService {

    private final TvCodeRepository tvCodeRepository;
    private final OldUserInfoRepository oldUserInfoRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final FamilyUserJoinService familyUserJoinService;

    public TvCode createAndSaveTvCode() {
        String uniqueCode = generateUniqueCode();
        TvCode tvCode = new TvCode();
        tvCode.setCode(uniqueCode);
        return tvCodeRepository.save(tvCode);
    }

    private String generateUniqueCode() {
        String uniqueCode;
        do {
            uniqueCode = RandomStringUtils.randomAlphanumeric(8).toLowerCase();
        } while (tvCodeRepository.existsByCode(uniqueCode)); // DB 내에 해당 코드가 존재하는지 확인
        return uniqueCode;
    }

    public List<OldUserInfoDto> getOldUsersByFamilyUserId(String familyUserId) {
        // 가족 유저 ID를 이용하여 FamilyUserInfoDto 가져옴
        FamilyUserInfoDto familyUserInfoDto = familyUserJoinService.getFamilyUserInfo(familyUserId);

        // FamilyUserInfoDto를 이용하여 OldUserInfoDto의 리스트를 반환
        return familyUserInfoDto.getFamilyRelations().stream()
                .map(FamilyRelationDto::getOldUserInfo)
                .collect(Collectors.toList());
    }

    public JwtToken authenticate(String tvCode, String userId) {
        // TV 코드와 사용자 ID의 유효성 검증
        TvCode code = tvCodeRepository.findByCode(tvCode)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid TV Code"));
        OldUserInfo oldUser = oldUserInfoRepository.findByUserId(userId)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid User ID"));

        // JWT 토큰 생성
        return jwtTokenProvider.createToken(userId);
    }
}
