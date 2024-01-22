package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.OldUserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class OldUserJoinServiceTests {

    @Mock
    private OldUserRepository oldUserRepository;

    @InjectMocks
    private OldUserJoinService oldUserJoinService;

    @Test
    public void whenRegisterUser_thenUserShouldBeSaved() {
        // given
        OldUserInfo newUser = new OldUserInfo();
        newUser.setId(1L);
        newUser.setUserId("kimjeomsoon");
        newUser.setUsername("김점순");
        newUser.setBirth(LocalDate.of(1950, 1, 1));
        newUser.setSex("W");

        when(oldUserRepository.findById(eq(newUser.getId()))).thenReturn(Optional.empty());
        when(oldUserRepository.save(newUser)).thenReturn(newUser);

        // when
        OldUserInfo registeredUser = oldUserJoinService.registerUser(newUser);

        // then
        assertThat(registeredUser).isNotNull();
        assertThat(registeredUser.getUserId()).isEqualTo(newUser.getUserId());
    }
}
