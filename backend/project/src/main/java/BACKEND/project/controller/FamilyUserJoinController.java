package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.FamilyUserRegistrationDto;
import BACKEND.project.service.FamilyUserJoinService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/users/family")
public class FamilyUserJoinController {

    private final FamilyUserJoinService familyUserJoinService;

    public FamilyUserJoinController(FamilyUserJoinService familyUserJoinService) {
        this.familyUserJoinService = familyUserJoinService;
    }

    @PostMapping("/signup")
    public ResponseEntity<FamilyUserInfo> registerFamilyUser(@Valid @RequestBody FamilyUserRegistrationDto registrationDto) {
        FamilyUserInfo registeredFamilyUser = familyUserJoinService.registerFamilyUser(registrationDto);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(registeredFamilyUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(registeredFamilyUser);
    }
}
