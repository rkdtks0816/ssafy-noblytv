package BACKEND.project.repository;

import BACKEND.project.domain.OldUserInfo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
public class OldUserRepositoryTests {

    @Autowired
    private OldUserRepository oldUserRepository;

    @Test
    public void whenRegisterUser_thenUserShouldBeFound() {
        // given
        OldUserInfo newUser = new OldUserInfo();
        newUser.setId(1L);
        newUser.setUserId("kimjeomsoon");
        newUser.setUsername("김점순");
        newUser.setBirth(LocalDate.of(1950, 1, 1));
        newUser.setSex("W");

        // when
        OldUserInfo savedUser = oldUserRepository.save(newUser);

        // then
        Optional<OldUserInfo> foundUser = oldUserRepository.findById(savedUser.getId());
        assertThat(foundUser).isPresent();
        assertThat(foundUser.get().getUserId()).isEqualTo(newUser.getUserId());
    }
}
