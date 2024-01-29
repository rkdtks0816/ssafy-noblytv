package BACKEND.project.controller;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.dto.OldUserRegistrationDto;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.service.OldUserJoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/old")
public class OldUserJoinController {

    private final OldUserJoinService oldUserJoinService;
    private final OldUserRepository oldUserRepository;

    @PostMapping("/signup")
    public ResponseEntity<OldUserInfo> registerUser(@Valid @RequestBody OldUserRegistrationDto newUser) {
        OldUserInfo registeredUser = oldUserJoinService.registerUser(newUser);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(registeredUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(registeredUser);
    }

    @GetMapping("/{oldUserId}")
    public ResponseEntity<Optional<OldUserInfo>> getUserInfo(@PathVariable("oldUserId") String oldUserId) {
        Optional<OldUserInfo> oldUserInfo = oldUserJoinService.getOldUserInfo(oldUserId);
        if (oldUserId != null) {
            return ResponseEntity.ok(oldUserInfo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{oldUserId}")
    public ResponseEntity<?> deleteUser(@PathVariable("oldUserId") String oldUserId) {
        OldUserInfo user = oldUserRepository.findByUserId(oldUserId)
                .orElseThrow(() -> new NoSuchElementException("해당 회원이 존재하지 않습니다."));

        oldUserRepository.delete(user);

        return ResponseEntity.noContent().build();
    }
}
