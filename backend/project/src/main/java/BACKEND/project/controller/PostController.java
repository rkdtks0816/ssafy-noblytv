package BACKEND.project.controller;

import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.PostDto;
import BACKEND.project.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/posts")
public class PostController {


    @Autowired
    PostService postService;

    @PostMapping("/family")
    public ResponseEntity<?> uploadVideo(@RequestParam("file") MultipartFile file, @RequestParam("userId") Long userId) {
        try {
            // 파일 저장
            String filePath = postService.saveVideo(file, userId);

            // DB에 동영상 정보 저장
            FamilyUserInfoDto familyUserInfoDto = postService.findById(userId);
            PostDto postDto = new PostDto();
            postDto.setVideoPath(filePath);
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

}
