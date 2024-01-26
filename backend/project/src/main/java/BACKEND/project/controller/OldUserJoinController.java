package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.service.OldUserJoinService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Optional;

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

//    @PutMapping("/{oldUserId}/medication")
//    public ResponseEntity<OldUserRegistrationDto> updateOldUserMedication(@PathVariable("oldUserId") @RequestBody List<String>)
//
//
//    @PutMapping("/{oldUserId}")
//    public ResponseEntity<OldUserUpdateDto> updateOldUserInfo(@PathVariable("oldUserId") String oldUserId, @RequestBody OldUserUpdateDto oldUserUpdateDto) {
//        OldUserUpdateDto oldUserUpdateInfo = oldUserJoinService.oldUserUpdateInfo(oldUserId, oldUserUpdateDto);
//        return ResponseEntity.ok(oldUserUpdateInfo);
//    }

    @GetMapping("/{oldUserId}")
    public ResponseEntity<Optional<OldUserInfo>> getUserInfo(@PathVariable String oldUserId) {
        Optional<OldUserInfo> oldUserInfo = oldUserJoinService.getOldUserInfo(oldUserId);
        if (oldUserId != null) {
            return ResponseEntity.ok(oldUserInfo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
