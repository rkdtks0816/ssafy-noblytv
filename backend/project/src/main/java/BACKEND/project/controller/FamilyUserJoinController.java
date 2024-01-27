package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.dto.FamilyUserInfoDto;
import BACKEND.project.dto.FamilyUserRegistrationDto;
import BACKEND.project.dto.FamilyUserUpdateDto;
import BACKEND.project.dto.LoginDto;
import BACKEND.project.repository.FamilyUserRepository;
import BACKEND.project.service.FamilyLoginService;
import BACKEND.project.service.FamilyUserJoinService;
import BACKEND.project.util.JwtToken;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/users/family")
public class FamilyUserJoinController {

    private final FamilyUserJoinService familyUserJoinService;
    private final FamilyLoginService familyLoginService;
    private final FamilyUserRepository familyUserRepository;

    // 가족 회원 가입
    @PostMapping("/signup")
    public ResponseEntity<FamilyUserInfo> registerFamilyUser(@Valid @RequestBody FamilyUserRegistrationDto registrationDto) {
        FamilyUserInfo registeredFamilyUser = familyUserJoinService.registerFamilyUser(registrationDto);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(registeredFamilyUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(registeredFamilyUser);
    }

    // 가족 회원 연관 노인 ID 수정
    @PutMapping("/{familyUserId}/oldUsers")
    public ResponseEntity<FamilyUserRegistrationDto> updateOldUsersOfFamilyUser(@PathVariable("familyUserId") String familyUserId, @RequestBody List<String> oldUserIds) {
        FamilyUserRegistrationDto familyUser = familyUserJoinService.updateOldUsers(familyUserId, oldUserIds);
        return ResponseEntity.ok(familyUser);
    }

    @PutMapping("/{familyUserId}")
    public ResponseEntity<FamilyUserUpdateDto> updateFamilyUserInfo(@PathVariable("familyUserId") String familyUserId, @RequestBody FamilyUserUpdateDto familyUserUpdateDto) {
        FamilyUserUpdateDto updatedFamilyUserDto = familyUserJoinService.updateFamilyUserInfo(familyUserId, familyUserUpdateDto);
        return ResponseEntity.ok(updatedFamilyUserDto);
    }

    @PostMapping("/login")
    public JwtToken login(@RequestBody LoginDto loginDto) {
        String userId = loginDto.getUserId();
        String password = loginDto.getPassword();
        JwtToken jwtToken = familyLoginService.login(userId, password);
        log.info("request username = {}, password = {}", userId, password);
        log.info("jwtToken accessToken = {}, refreshToken = {}", jwtToken.getAccessToken(), jwtToken.getRefreshToken());
        return jwtToken;
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestHeader("Authorization") String token) {
        String jwtToken = token.split(" ")[1];
        familyLoginService.logout(jwtToken);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{familyUserId}")
    public ResponseEntity<FamilyUserInfoDto> getUserInfo(@PathVariable("familyUserId") String familyUserId) {
        FamilyUserInfoDto familyUserInfoDto = familyUserJoinService.getFamilyUserInfo(familyUserId);
        return ResponseEntity.ok(familyUserInfoDto);
    }

    @DeleteMapping("/delete/{familyUserId}")
    public ResponseEntity<?> deleteUser(@PathVariable("familyUserId") String familyUserId, @RequestHeader(value = "Authorization") String token) {
        FamilyUserInfo user = familyUserRepository.findByUserId(familyUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 가족 회원이 존재하지 않습니다."));

        familyUserRepository.delete(user);

        // 회원 탈퇴 시 로그아웃을 통해 Token 무효화
        familyLoginService.logout(token);

        return ResponseEntity.noContent().build();
    }
}
