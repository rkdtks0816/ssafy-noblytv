package BACKEND.project.service;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.FamilyUserRegistrationDto;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

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

        // 노인 회원 정보 조회
        OldUserInfo oldUser = oldUserRepository.findByUserId(familyUserRegistrationDto.getOldUserId())
                .orElseThrow(() -> new NoSuchElementException("해당 노인 회원이 존재하지 않습니다."));

        // 노인과 가족의 관계 저장
        FamilyRelation familyRelation = new FamilyRelation();
        familyRelation.setOldUserInfo(oldUser);
        familyRelation.setFamilyUserInfo(registeredFamilyUser);
        familyRelationRepository.save(familyRelation);

        // 가족 회원 정보에 노인 ID 추가
        registeredFamilyUser.getFamilyRelations().add(familyRelation);

        return registeredFamilyUser;
    }
}
