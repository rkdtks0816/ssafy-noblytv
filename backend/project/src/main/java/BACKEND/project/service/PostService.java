package BACKEND.project.service;

import BACKEND.project.domain.FamilyRelation;
import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.repository.FamilyRelationRepository;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.*;

@Service
public class PostService {

    private final FamilyRelationRepository familyRelationRepository;
    private final FamilyUserRepository familyUserRepository;
    private final OldUserRepository oldUserRepository;
    private final PostRepository postRepository;

    @Autowired
    public PostService(FamilyRelationRepository familyRelationRepository, FamilyUserRepository familyUserRepository,
                                  OldUserRepository oldUserRepository, PostRepository postRepository) {

        this.familyRelationRepository = familyRelationRepository;
        this.familyUserRepository = familyUserRepository;
        this.oldUserRepository = oldUserRepository;
        this.postRepository = postRepository;
    }


    public String saveVideo(MultipartFile file, Long userId) throws IOException {
        // 파일 저장 로직
        String dirPath = "/home/ubuntu/nobly/fileserver/videos/family_" + userId;
        //String dirPath = "C:/Users/spets/OneDrive/바탕 화면/S10P12C103/frontend/app/src/assets/family_" + userId;
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


    public FamilyUserInfoDto findById(Long userId) {
        Optional<FamilyUserInfo> optionalFamilyUserInfo = familyUserRepository.findById(userId);
        if (optionalFamilyUserInfo.isPresent()) {
            FamilyUserInfo familyUserInfo = optionalFamilyUserInfo.get();
            FamilyUserInfoDto dto = new FamilyUserInfoDto();
            dto.setId(familyUserInfo.getId());
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
            throw new IllegalArgumentException("해당 비디오 경로가 존재하지 않습니다.");
        }
        Post post = new Post();

        Long userId = postDto.getFamilyUserInfo().getId();
        if (userId == null) {
            throw new IllegalArgumentException("해당 유저가 존재하지 않습니다.");
        }
        FamilyUserInfo familyUserInfo = familyUserRepository.getById(userId);
        post.setFamilyUserInfo(familyUserInfo);

        post.setVideoPath(postDto.getVideoPath());
        post.setPostedAt(postDto.getPostedAt());
        post.setViewed(postDto.isViewed());

        postRepository.save(post);

        familyUserInfo.getPosts().add(post);
    }

    public List<Post> getPostsByOldUserInfoId(Long oldUserInfoId) {
        Optional<OldUserInfo> optionalOldUserInfo = oldUserRepository.findById(oldUserInfoId);
        if (optionalOldUserInfo.isPresent()) {
            OldUserInfo oldUserInfo = optionalOldUserInfo.get();

            List<FamilyRelation> familyRelations = oldUserInfo.getFamilyRelations();
            List<Post> posts = new ArrayList<>();

            for (FamilyRelation familyRelation : familyRelations) {
                FamilyUserInfo familyUserInfo = familyRelation.getFamilyUserInfo();
                List<Post> userPosts = familyUserInfo.getPosts();
                posts.addAll(userPosts);
            }

            return posts;
        } else {
            throw new EntityNotFoundException("해당 OldUserInfo를 찾을 수 없습니다. ID: " + oldUserInfoId);
        }
    }
}
