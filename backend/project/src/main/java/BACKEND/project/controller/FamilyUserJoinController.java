package BACKEND.project.controller;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.dto.FamilyUserRegistrationDto;
import BACKEND.project.service.FamilyUserJoinService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

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

    @PutMapping("/{familyUserId}/oldUsers")
    public ResponseEntity<FamilyUserRegistrationDto> updateOldUsersOfFamilyUser(@PathVariable("familyUserId") String familyUserId, @RequestBody List<String> oldUserIds) {
        FamilyUserRegistrationDto familyUser = familyUserJoinService.updateOldUsers(familyUserId, oldUserIds);
        return ResponseEntity.ok(familyUser);
    }
}
