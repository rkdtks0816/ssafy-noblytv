package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.OldUserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Transactional
@Service
public class OldUserJoinService {

    private final OldUserRepository oldUserRepository;

    @Autowired
    public OldUserJoinService(OldUserRepository oldUserRepository) {
        this.oldUserRepository = oldUserRepository;
    }

    public OldUserInfo registerUser(OldUserInfo newUser) {
        // 아이디 중복 체크
        Optional<OldUserInfo> existingUser = oldUserRepository.findByUserId(newUser.getUserId());
        if (existingUser.isPresent()) {
            throw new IllegalStateException("이미 등록된 아이디입니다.");
        }
        return oldUserRepository.save(newUser);
    }
}
