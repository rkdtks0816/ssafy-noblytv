package BACKEND.project.controller;

import BACKEND.project.dto.PostDto;
import BACKEND.project.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/old")
    public ResponseEntity<PostDto> createPost(@RequestBody CreatePostRequest request) {
        PostDto createPost = postService.createPost(request.getOldUsername());
        return ResponseEntity.ok(createPost);
    }

    @PostMapping("/family")
    public String createPostForFamilyUser(@RequestParam("familyUsername") String familyUsername, @RequestParam("file") MultipartFile file) {
        return postService.createPostForFamilyUser(familyUsername, file);
    }


    public static class CreatePostRequest {
        private String oldUsername;

        public String getOldUsername() {
            return oldUsername;
        }

        public void setOldUsername(String oldUsername) {
            this.oldUsername = oldUsername;
        }
    }
}

