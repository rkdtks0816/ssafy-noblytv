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
import java.util.UUID;

@Service
public class PostService {


    private final FamilyUserRepository familyUserRepository;

    private final PostRepository postRepository;

    @Autowired PostService (FamilyUserRepository familyUserRepository, PostRepository postRepository) {
        this.familyUserRepository = familyUserRepository;
        this.postRepository = postRepository;
    }


    public void savePost(FamilyUserInfo familyUserInfo, MultipartFile videoFile) throws IOException {
        // Get the original filename
        String filename = videoFile.getOriginalFilename();

        // Save the video file to the server
        Path filePath = Paths.get("/home/ubuntu/song/front/frontend/app/src/assets/family_" + familyUserInfo.getId(), filename);
        Files.createDirectories(filePath.getParent());
        Files.write(filePath, videoFile.getBytes());

        // Create a new post and associate it with the family user
        Post post = new Post(familyUserInfo, "/assets/family_" + familyUserInfo.getId() + "/" + filename);
        familyUserInfo.getPosts().add(post);

        // Save the post to the database
        postRepository.save(post);
    }

}
