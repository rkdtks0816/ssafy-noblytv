package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.service.OldUserJoinService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/users/old")
public class OldUserJoinController {

    private final OldUserJoinService oldUserJoinService;

    public OldUserJoinController(OldUserJoinService oldUserJoinService) {
        this.oldUserJoinService = oldUserJoinService;
    }

    @PostMapping("/signup")
    public ResponseEntity<OldUserInfo> registerUser(@Valid @RequestBody OldUserRegistrationDto newUser) {
        OldUserInfo registeredUser = oldUserJoinService.registerUser(newUser);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(registeredUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(registeredUser);
    }
}
