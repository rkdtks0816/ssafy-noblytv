package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.service.OldUserJoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/users/old/join")
public class OldUserJoinController {

    private final OldUserJoinService oldUserJoinService;

    @Autowired
    public OldUserJoinController(OldUserJoinService oldUserJoinService) {
        this.oldUserJoinService = oldUserJoinService;
    }

    @PostMapping("/register")
    public ResponseEntity<OldUserInfo> registerUser(@Valid @RequestBody OldUserInfo newUser) {
        OldUserInfo registeredUser = oldUserJoinService.registerUser(newUser);
        return ResponseEntity.ok(registeredUser);
    }
}
