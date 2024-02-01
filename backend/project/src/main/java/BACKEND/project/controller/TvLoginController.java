package BACKEND.project.controller;

import BACKEND.project.dto.TvLoginDto;
import BACKEND.project.service.OldUserLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tv")
public class TvLoginController {

    @Autowired
    private OldUserLoginService oldUserLoginService;

    // 가족 유저 ID로 노인 유저 목록을 가져오는 API
    @GetMapping("/old-users/{familyUserId}")
    public ResponseEntity<?> getOldUsers(@PathVariable("familyUserId") String familyUserId) {
        return ResponseEntity.ok().body(oldUserLoginService.getOldUsersByFamilyUserId(familyUserId));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody TvLoginDto tvLoginDto) {
        return ResponseEntity.ok().body(oldUserLoginService.authenticate(tvLoginDto.getTvCode(), tvLoginDto.getUserId()));
    }
}
