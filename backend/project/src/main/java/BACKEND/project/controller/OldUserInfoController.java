package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.service.OldUserInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/old")
public class OldUserInfoController {

    private final OldUserInfoService oldUserInfoService;

    @GetMapping("/{oldUserId}")
    public ResponseEntity<OldUserInfo> getUserInfo(@PathVariable("oldUserId") String oldUserId, @RequestParam("userId") String userId, @RequestParam("userType") OldUserInfoService.UserType userType) {
        OldUserInfo oldUserInfo = oldUserInfoService.getOldUserInfo(oldUserId, userId, userType);
        return ResponseEntity.ok(oldUserInfo);
    }

    @PutMapping("/{oldUserId}")
    public ResponseEntity<OldUserInfoDto> updateOldUserInfo(@PathVariable("oldUserId") String oldUserId, @RequestBody OldUserInfoDto oldUserInfoDto) {
        OldUserInfoDto updatedoldUserInfoDto = oldUserInfoService.updateOldUserInfo(oldUserId, oldUserInfoDto);
        return ResponseEntity.ok(updatedoldUserInfoDto);
    }
}
