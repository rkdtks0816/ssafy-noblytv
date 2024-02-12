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
        String dirPath = "/home/ubuntu/nobly/fileserver/videos";
        String dbsavePath = "/family_" + userId;
        String serverPath = dirPath + dbsavePath;

        File directory = new File(serverPath);
        if (!directory.exists()) {
            boolean result = directory.mkdirs();
            if (!result) {
                throw new IOException("Failed to create directory " + serverPath);
            }
        }

        // 저장할 파일 경로 설정
        String fileName = file.getOriginalFilename();
        String filePath = serverPath + "/" + fileName;
        File dest = new File(filePath);

        // 파일 저장
        file.transferTo(dest);

        // dbsavePath 반환
        return dbsavePath + "/" + fileName;
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

    public List<PostDto> getPostByOldUSerId(Long oldUSerId) {
        OldUserInfo oldUser = oldUserRepository.findById(oldUSerId)
                .orElseThrow(() -> new IllegalArgumentException("등록되지 않은 회원입니다."));

        return postRepository.findByOldUserId(oldUser);
    }



    public List<PostDto> getPostsByOldUserInfoId(Long oldUserInfoId) {
        Optional<OldUserInfo> optionalOldUserInfo = oldUserRepository.findById(oldUserInfoId);
        if (optionalOldUserInfo.isPresent()) {
            OldUserInfo oldUserInfo = optionalOldUserInfo.get();

            List<FamilyRelation> familyRelations = oldUserInfo.getFamilyRelations();
            List<PostDto> posts = new ArrayList<>();

            for (FamilyRelation familyRelation : familyRelations) {
                FamilyUserInfo familyUserInfo = familyRelation.getFamilyUserInfo();
                List<Post> userPosts = familyUserInfo.getPosts();
                for (Post post : userPosts) {
                    PostDto postDto = new PostDto();
                    // Post에서 필요한 필드 값을 PostDto에 설정
                    postDto.setId(post.getId());
                    postDto.setVideoPath(post.getVideoPath());
                    postDto.setViewed(post.isViewed());
                    // 필요한 필드들을 추가로 설정
                    posts.add(postDto);
                }
            }

            return posts;
        } else {
            throw new EntityNotFoundException("해당 OldUserInfo를 찾을 수 없습니다. ID: " + oldUserInfoId);
        }
    }

    public List<PostDto> getPostsByLastVistedId(Long familyUserId) {
        //FamilyUser 조회
        FamilyUserInfo familyUserInfo = familyUserRepository.findById(familyUserId).orElse(null);
        if (familyUserInfo == null) {
            return null;
        }

        // FamilyUser의 lastVisitedId 조회
        String oldUserId = familyUserInfo.getLastVisitedId();

        // OldUserInfo에서 OldUserId와 같은 OldUser 조회
        OldUserInfo oldUserInfo = oldUserRepository.findByUserId(oldUserId).orElse(null);
        if (oldUserInfo == null) {
            return null;
        }

        // OldUser의 Long 타입 id를 저장
        Long oldUserUniqueId = oldUserInfo.getId();

        // id로 작성된 Post 전체 조회
        List<Post> posts = postRepository.findByOldUserInfoId(oldUserUniqueId);

        //PostDto로 변환하여 반환
        return convertToDtoList(posts);
    }

    public boolean deletePost(Long postId) {
        if (postRepository.existsById(postId)) {
            postRepository.deleteById(postId);
            return true;
        }
        return false;
    }

    private PostDto converToDto(Post post) {
        PostDto postDto = new PostDto();
        postDto.setId(post.getId());
        postDto.setVideoPath(post.getVideoPath());
        postDto.setPostedAt(post.getPostedAt());

        return postDto;
    }

    private List<PostDto> convertToDtoList(List<Post> posts) {
        List<PostDto> postDtoList = new ArrayList<>();
        for (Post post : posts) {
            postDtoList.add(converToDto(post));
        }
        return postDtoList;
    }
}
