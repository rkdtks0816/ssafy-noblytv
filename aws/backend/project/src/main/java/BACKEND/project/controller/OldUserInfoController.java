package BACKEND.project.controller;

import BACKEND.project.dto.OldUserInfoResponseDto;
import BACKEND.project.dto.OldUserUpdateDto;
import BACKEND.project.service.OldUserInfoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/old")
@Tag(name = "노인 회원 정보 API")
public class OldUserInfoController {

    private final OldUserInfoService oldUserInfoService;

    @GetMapping("/{oldUserId}")
    @Operation(summary = "노인 회원 정보 조회")
    public ResponseEntity<OldUserInfoResponseDto> getUserInfo(@PathVariable("oldUserId") String oldUserId) {
        OldUserInfoResponseDto oldUserInfo = oldUserInfoService.getOldUserInfo(oldUserId);
        return ResponseEntity.ok(oldUserInfo);
    }

    @PutMapping("/{oldUserId}")
    @Operation(summary = "노인 회원 정보 수정")
    public ResponseEntity<OldUserUpdateDto> updateOldUserInfo(@PathVariable("oldUserId") String oldUserId, @RequestBody OldUserUpdateDto oldUserUpdateDto) {
        OldUserUpdateDto updatedoldUserInfoDto = oldUserInfoService.updateOldUserInfo(oldUserId, oldUserUpdateDto);
        return ResponseEntity.ok(updatedoldUserInfoDto);
    }
}
