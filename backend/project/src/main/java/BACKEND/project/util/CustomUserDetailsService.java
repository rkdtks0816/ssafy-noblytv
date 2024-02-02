package BACKEND.project.util;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.repository.FamilyUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    private final FamilyUserRepository familyUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        FamilyUserInfo user = familyUserRepository.findByUserId(username)
                .orElseThrow(() -> new UsernameNotFoundException("Could not found user " + username));

        return User.builder()
                .username(user.getUserId())
                .password(user.getPassword())
                .roles("FAMILY")
                .build();
    }
}
