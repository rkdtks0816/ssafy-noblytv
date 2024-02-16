package BACKEND.project.controller;

import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;
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
@Tag(name = "영상 커뮤니티 API")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/family")
    @Operation(summary = "가족 게시글 등록")
    public ResponseEntity<?> uploadVideo(@RequestParam("file") MultipartFile file, @RequestParam("userId") String userId) {
        try {
            // 파일 저장
            String dbsavePath = postService.saveVideo(file, userId);
            System.out.println("Video Path: " + dbsavePath);

            // DB에 동영상 정보 저장
            FamilyUserInfoDto familyUserInfoDto = postService.findById(userId);
            familyUserInfoDto.getPosts().size(); // FamilyUserInfo 컬렉션 초기화

            PostDto postDto = new PostDto();
            postDto.setVideoPath(dbsavePath); // dbsavePath를 viceoPath로 설정
            postDto.setPostedAt(LocalDateTime.now());
            postDto.setFamilyUserInfo(familyUserInfoDto);
            postDto.setViewed(false); // 처음 업로드시에는 아직 보지 않음으로 설정

            postService.savePost(postDto);

            return new ResponseEntity<>("업로드 성공!", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("파일 저장 실패:" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>("업로드 실패:" + e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>("업로드 실패:" + e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("업로드 실패:" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("familypostsearch/{oldUserId}")
    @Operation(summary = "가족이 올린 게시물 조회")
    public ResponseEntity<List<PostDto>> getPostsByOldUserInfoId(@PathVariable("oldUserId") Long oldUserId) {
        List<PostDto> posts = postService.getPostsByOldUserInfoId(oldUserId);
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("oldpostsearch/{familyUserId}")
    @Operation(summary = "노인 회원이 올린 게시물 조회")
    public ResponseEntity<List<PostDto>> getPostByLastVisitedId(@PathVariable("familyUserId") Long familyUserId) {
        List<PostDto> posts = postService.getPostsByLastVistedId(familyUserId);
        if (posts == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @DeleteMapping("/{postId}")
    @Operation(summary = "게시물 삭제")
    public ResponseEntity<String> deletePost(@PathVariable("postId") Long postId) {
        boolean isDeleted = postService.deletePost(postId);
        if (isDeleted) {
            return new ResponseEntity<>("게시물이 성공적으로 삭제되었습니다.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("게시물 삭제에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
