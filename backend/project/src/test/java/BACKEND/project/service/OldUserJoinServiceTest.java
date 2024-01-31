package BACKEND.project.service;

import BACKEND.project.domain.OldUserInfo;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OldUserJoinServiceTest {

    OldUserJoinService oldUserJoinService = new OldUserJoinService();

    @Test
    void registerUser() {
        // given
        OldUserInfo member = new OldUserInfo();
        member.setUsername("김점례");
        member.setUserId();
        // when


        // then
    }

    @Test
    void findByUserId() {
    }

    @Test
    void getOldUserInfo() {
    }
}