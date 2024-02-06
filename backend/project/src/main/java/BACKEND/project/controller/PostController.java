package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.dto.PostDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;
    private final FamilyUserRepository familyUserRepository;

    @Autowired
    public PostController(PostService postService, FamilyUserRepository familyUserRepository) {
        this.postService = postService;
        this.familyUserRepository = familyUserRepository;
    }

    @PostMapping("/family")
    public ResponseEntity<String> createPost(@RequestParam("file") MultipartFile file,
                                             @RequestParam("userId") String userId) {
        FamilyUserInfo familyUserInfo = familyUserRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("해당 사용자가 없습니다." + userId));

        try {
            postService.savePost(familyUserInfo, file);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file");
        }
    }
}

