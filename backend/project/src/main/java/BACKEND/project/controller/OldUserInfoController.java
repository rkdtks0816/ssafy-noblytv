package BACKEND.project.controller;

import BACKEND.project.dto.OldUserInfoDto;
import BACKEND.project.service.OldUserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/old")
public class OldUserInfoController {

    private final OldUserInfoService oldUserInfoService;

    @Autowired
    public OldUserInfoController(OldUserInfoService oldUserInfoService) {
        this.oldUserInfoService = oldUserInfoService;
    }

    @PutMapping("/{oldUserId}")
    public ResponseEntity<OldUserInfoDto> updateOldUserInfo(@PathVariable String oldUserId, @RequestBody OldUserInfoDto oldUserInfoDto) {
        oldUserInfoService.updateOldUserInfo(oldUserId, oldUserInfoDto);
        return ResponseEntity.ok(oldUserInfoDto);
    }
}
