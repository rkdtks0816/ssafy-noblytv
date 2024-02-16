package BACKEND.project.service;

import BACKEND.project.domain.Gymnastics;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.GymnasticsDto;
import BACKEND.project.repository.GymnastcisRepository;
import BACKEND.project.repository.OldUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GymnasticsService {

    private final GymnastcisRepository gymnastcisRepository;
    private final OldUserRepository oldUserRepository;
    private final YoutubeService youtubeService;

    @Transactional
    public GymnasticsDto saveGymnastics(String oldUserId, String keyword, String day) throws IOException {
        String result = youtubeService.searchVideo(keyword);
        String[] splitResult = result.split("\n");
        String videoId = splitResult[0].split(": ")[1];
        String title = splitResult[1].split(": ")[1];

        Optional<OldUserInfo> oldUserInfo = oldUserRepository.findByUserId(oldUserId);
        if (oldUserInfo.isPresent()) {
            List<Gymnastics> existingGymnastics = gymnastcisRepository.findByOldUserInfoAndVideoId(oldUserInfo.get(), videoId);
            if (!existingGymnastics.isEmpty()) {
                throw new RuntimeException("VideoId " + videoId + "는 중복된 viedeoId 입니다. - 해당유저:" + oldUserId);
            }
            Gymnastics gymnastics = new Gymnastics();
            gymnastics.setOldUserInfo(oldUserInfo.get());
            gymnastics.setVideoId(videoId);
            gymnastics.setTitle(title);;
            gymnastics.setKeyword(keyword);
            gymnastics.setDay(day);

            Gymnastics savedGymnastics = gymnastcisRepository.save(gymnastics);
            return convertToDto(savedGymnastics);
        } else {
            throw new RuntimeException("유저를 찾을 수 없습니다 : " + oldUserId);
        }
    }

    @Transactional
    public GymnasticsDto updateGymnastics(Long id, String newKeyword, String newDay) throws IOException {
        Optional<Gymnastics> optionalGymnastics = gymnastcisRepository.findById(id);
        if (optionalGymnastics.isPresent()) {
            Gymnastics gymnastics = optionalGymnastics.get();

            String result = youtubeService.searchVideo(newKeyword);
            String[] splitResult = result.split("\n");
            String newVideoId = splitResult[0].split(": ")[1];
            String newTitle = splitResult[1].split(": ")[1];

            gymnastics.setKeyword(newKeyword);
            gymnastics.setDay(newDay);
            gymnastics.setVideoId(newVideoId);
            gymnastics.setTitle(newTitle);

            Gymnastics updatedGymnastics = gymnastcisRepository.save(gymnastics);
            return convertToDto(updatedGymnastics);
        } else {
            throw new RuntimeException("존재하지 않는 체조 아이디 입니다. - " + id);
        }
    }

    private GymnasticsDto convertToDto(Gymnastics gymnastics) {
        GymnasticsDto dto = new GymnasticsDto();
        dto.setId(gymnastics.getId());
        dto.setDay(gymnastics.getDay());
        dto.setKeyword(gymnastics.getKeyword());
        dto.setVideoId(gymnastics.getVideoId());
        dto.setTitle(gymnastics.getTitle());

        return dto;
    }
}
