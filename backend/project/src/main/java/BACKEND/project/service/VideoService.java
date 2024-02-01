package BACKEND.project.service;

import BACKEND.project.domain.Gymnastics;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.GymnastcisRepository;
import BACKEND.project.repository.OldUserInfoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class VideoService {

    private final GymnastcisRepository gymnastcisRepository;
    private final OldUserInfoRepository oldUserInfoRepository;

    public VideoService(GymnastcisRepository gymnastcisRepository, OldUserInfoRepository oldUserInfoRepository) {
        this.gymnastcisRepository = gymnastcisRepository;
        this.oldUserInfoRepository = oldUserInfoRepository;
    }

    @Transactional
    public Gymnastics saveGymnastics(String oldUserId, Gymnastics gymnastics) {
        if (gymnastcisRepository.existsByOldUserInfo_userIdAndVideoId(oldUserId, gymnastics.getVideoId())) {
            throw new IllegalArgumentException("이미 존재하는 videoId입니다.");
        }
        OldUserInfo oldUserInfo = oldUserInfoRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 노인유저가 없습니다."));
        gymnastics.setOldUserInfo(oldUserInfo);
        return gymnastcisRepository.save(gymnastics);
    }

    @Transactional
    public Gymnastics updateGymnastics(Long id, Gymnastics newGymnastics) {
        Gymnastics existingGymnastics = gymnastcisRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 체조가 없습니다."));
        existingGymnastics.setKeyword(newGymnastics.getKeyword());
        existingGymnastics.setVideoId(newGymnastics.getVideoId());
        return gymnastcisRepository.save(existingGymnastics);
    }
}
