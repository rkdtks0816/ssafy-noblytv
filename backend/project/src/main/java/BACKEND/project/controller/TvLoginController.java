package BACKEND.project.controller;

import BACKEND.project.dto.TvLoginDto;
import BACKEND.project.service.OldUserLoginService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tv")
@Tag(name = "노인 회원 로그인 API")
public class TvLoginController {

    private final OldUserLoginService oldUserLoginService;

    @GetMapping("/old-users/{familyUserId}")
    @Operation(summary = "가족 유저 ID로 노인 유저 목록 가져오기")
    public ResponseEntity<?> getOldUsers(@PathVariable("familyUserId") String familyUserId) {
        return ResponseEntity.ok().body(oldUserLoginService.getOldUsersByFamilyUserId(familyUserId));
    }

    @PostMapping("/login")
    @Operation(summary = "노인 회원 로그인")
    public ResponseEntity<?> login(@RequestBody TvLoginDto tvLoginDto) {
        return ResponseEntity.ok().body(oldUserLoginService.authenticate(tvLoginDto.getTvCode(), tvLoginDto.getUserId()));
    }

    @PostMapping("/logout")
    @Operation(summary = "노인 회원 로그아웃")
    public ResponseEntity<Void> logout(@RequestHeader("Authorization") String token) {
        String jwtToken = token.split(" ")[1];
        oldUserLoginService.logout(jwtToken);
        return ResponseEntity.noContent().build();
    }
}
