package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class PostService {

    private final OldUserRepository oldUserRepository;
    private final FamilyUserRepository familyUserRepository;
    private final PostRepository postRepository;

    @Autowired
    public PostService(OldUserRepository oldUserRepository, PostRepository postRepository, FamilyUserRepository familyUserRepository) {
        this.oldUserRepository = oldUserRepository;
        this.familyUserRepository = familyUserRepository;
        this.postRepository = postRepository;
    }

    @Transactional
    public PostDto createPost(String oldUsername) {
        OldUserInfo oldUserInfo = oldUserRepository.findByUsername(oldUsername)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다." + oldUsername));

        String formattedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        String videoName = formattedDate + "_summary";
        String videoPath = "/home/ubuntu/song/front/frontend/app/src/assets/old_" + oldUserInfo.getUserId() + "/" + videoName;

        Post post = new Post(oldUserInfo, videoPath);
        postRepository.save(post);

        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setOldUserInfo(convertToDto(oldUserInfo));
        postDto.setVideoPath(post.getVideoPath());
        postDto.setPostedAt(post.getPostedAt());
        postDto.setViewed(post.isViewed());

        return postDto;
    }

    @Transactional
    public String createPostForFamilyUser(String familyUsername, MultipartFile file) {
        FamilyUserInfo familyUser = familyUserRepository.findByUsername(familyUsername)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자를 찾을 수 없습니다." + familyUsername));

        String videoName = file.getOriginalFilename();
        String videoPath = "/home/ubuntu/song/front/frontend/app/src/assets/family_" + familyUser.getUserId() + "/" + videoName;

        // 파일 저장
        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(videoPath);
            Files.write(path, bytes);
        } catch (IOException e) {
            throw new RuntimeException("파일 저장에 실패했습니다.", e);
        }

        Post post = new Post(familyUser, videoPath);
        postRepository.save(post);

        return familyUsername;
    }

    private OldUserInfoDto convertToDto(OldUserInfo oldUserInfo) {
        OldUserInfoDto oldUserInfoDto = new OldUserInfoDto();
        oldUserInfoDto.setUserId(oldUserInfo.getUserId());
        oldUserInfoDto.setUsername(oldUserInfo.getUsername());
        oldUserInfoDto.setBirth(oldUserInfo.getBirth());
        oldUserInfoDto.setLunarSolar(oldUserInfo.getLunarSolar());
        oldUserInfoDto.setGender(oldUserInfo.getGender());
        oldUserInfoDto.setMedications(oldUserInfo.getMedications());

        return oldUserInfoDto;
    }


}
