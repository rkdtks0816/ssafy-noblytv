package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;
    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/family")
    public ResponseEntity<?> uploadVideo(@RequestParam("file") MultipartFile file, @RequestParam("userId") Long userId) {
        try {
            // 파일 저장
            String dbsavePath = postService.saveVideo(file, userId);

            // DB에 동영상 정보 저장
            FamilyUserInfoDto familyUserInfoDto = postService.findById(userId);
            PostDto postDto = new PostDto();
            postDto.setVideoPath(dbsavePath); // dbsavePath를 viceoPath로 설정
            postDto.setPostedAt(LocalDateTime.now());
            postDto.setFamilyUserInfo(familyUserInfoDto);
            postDto.setViewed(false); // 처음 업로드시에는 아직 보지 않음으로 설정

            postService.savePost(postDto);

            return new ResponseEntity<>("업로드 성공!", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("파일 저장 실패:" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>("업로드 실패:" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("familypostsearch/{oldUserId}")
    public ResponseEntity<List<Post>> getPostsByOldUserInfoId(@PathVariable("oldUserId") Long oldUserId) {
        List<Post> posts = postService.getPostsByOldUserInfoId(oldUserId);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("oldpostsearch/{familyUserId}")
    public ResponseEntity<List<PostDto>> getPostByLastVisitedId(@PathVariable("familyUserId") Long familyUserId) {
        List<PostDto> posts = postService.getPostsByLastVistedId(familyUserId);
        if (posts == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }
}
