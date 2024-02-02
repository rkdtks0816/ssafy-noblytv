package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.service.FamilyUserJoinService;
import BACKEND.project.service.OldUserInfoService;
import BACKEND.project.service.OldUserJoinService;
import BACKEND.project.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    private final OldUserJoinService oldUserJoinService;

    private final FamilyUserJoinService familyUserJoinService;

    // 생성
    @PostMapping
    public ResponseEntity<Post> create(@RequestBody Post post) {
        return ResponseEntity.ok(postService.save(post));
    }

    // 단일조회
    @GetMapping("/{id}")
    public ResponseEntity<Post> read(@PathVariable Long id) {
        return ResponseEntity.ok(postService.findById(id));
    }

    // 전체조회
    @GetMapping
    public ResponseEntity<List<Post>> readAll() {
        return ResponseEntity.ok(postService.findAll());
    }

    // 수정
    @PutMapping("/{id}")
    public ResponseEntity<Post> update(@PathVariable Long id, @RequestBody Post newPost) {
        Post post = postService.findById(id);
        if (post == null) {
            return ResponseEntity.notFound().build();
        }
        post.setVideoPath(newPost.getVideoPath());
        return ResponseEntity.ok(postService.save(post));
    }

    // 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
