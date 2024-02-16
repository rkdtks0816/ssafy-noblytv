package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.service.OldUserInfoService;
import BACKEND.project.service.OldUserJoinService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/old")
@Tag(name = "노인 회원 API")
public class OldUserJoinController {

    private final OldUserJoinService oldUserJoinService;
    private final OldUserRepository oldUserRepository;
    private final OldUserInfoService oldUserInfoService;

    @PostMapping("/signup")
    @Operation(summary = "노인 회원 가입")
    public ResponseEntity<OldUserInfo> registerUser(@Validated @RequestBody OldUserRegistrationDto newUser) {
        OldUserInfo registeredUser = oldUserJoinService.registerUser(newUser);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(registeredUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(registeredUser);
    }

    @DeleteMapping("/delete/{oldUserId}")
    @Operation(summary = "노인 회원 탈퇴")
    public ResponseEntity<?> deleteUser(@PathVariable("oldUserId") String oldUserId) {
        OldUserInfo user = oldUserInfoService.checkUserOrFamily(oldUserId);

        oldUserRepository.delete(user);

        return ResponseEntity.noContent().build();
    }
}
