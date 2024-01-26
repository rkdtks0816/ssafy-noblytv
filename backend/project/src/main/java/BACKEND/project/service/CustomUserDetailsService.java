package BACKEND.project.service;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.repository.FamilyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private FamilyUserRepository familyUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        FamilyUserInfo familyUser = familyUserRepository.findByUserId(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with userId : " + username));

        return new User(familyUser.getUserId(), familyUser.getPassword(), new ArrayList<>());
    }
}
