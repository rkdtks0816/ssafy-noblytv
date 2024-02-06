package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    FamilyUserRepository familyUserRepository;
    @Autowired
    PostRepository postRepository;

    public String saveVideo(MultipartFile file, String userId) throws IOException {
        // 파일 저장 로직
        //String dirPath = "/home/ubuntu/song/front/frontend/app/src/assets/family_" + userId;
        String dirPath = "C:/Users/SSAFY/Desktop/S10P12C103/frontend/app/src/assets/family_" + userId;
        File directory = new File(dirPath);
        if (!directory.exists()) {
            boolean result = directory.mkdirs();
            if (!result) {
                throw new IOException("Failed to create directory " + dirPath);
            }
        }
        String filePath = dirPath + "/" + file.getOriginalFilename();
        File dest = new File(filePath);
        file.transferTo(dest);
        return filePath;
    }

    public FamilyUserInfoDto findFamilyUserById(String userId) {
        Optional<FamilyUserInfo> optionalFamilyUserInfo = familyUserRepository.findByUserId(userId);
        if (optionalFamilyUserInfo.isPresent()) {
            FamilyUserInfo familyUserInfo = optionalFamilyUserInfo.get();
            FamilyUserInfoDto dto = new FamilyUserInfoDto();
            dto.setUserId(familyUserInfo.getUserId());
            dto.setPassword(familyUserInfo.getPassword());
            dto.setUsername(familyUserInfo.getUsername());
            dto.setBirth(familyUserInfo.getBirth());
            dto.setLunarSolar(familyUserInfo.getLunarSolar());
            dto.setLastVisitedId(familyUserInfo.getLastVisitedId());

            return dto;
        } else {
            throw new EntityNotFoundException("해당 유저를 찾을 수 없습니다." + userId);
        }
    }

    public void savePost(PostDto postDto) {
        if (postDto.getVideoPath() == null) {
            throw new IllegalArgumentException("videoPath cannot be null");
        }
        Post post = new Post();

        post.setId(postDto.getId());
        post.setVideoPath(postDto.getVideoPath());
        post.setPostedAt(postDto.getPostedAt());
        post.setViewed(postDto.isViewed());

        postRepository.save(post);
    }

}
