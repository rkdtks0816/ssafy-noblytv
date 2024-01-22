package BACKEND.project.controller;

import BACKEND.project.domain.Medication;
import BACKEND.project.domain.OldUserInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class OldUserJoinControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private OldUserInfo oldUserInfo;

    @BeforeEach
    public void setUp() {
        String uniqueId = "testId" + System.currentTimeMillis();
        oldUserInfo = new OldUserInfo();
        oldUserInfo.setUserId(uniqueId);
        oldUserInfo.setUsername("testName");
        oldUserInfo.setBirth(LocalDate.of(1950, 1, 1));
        oldUserInfo.setSex("W");

        Medication medication = new Medication();
        medication.setMedicine("testMedicine");
        medication.setMedicationTime(LocalTime.of(10, 0));
        medication.setOldUser(oldUserInfo);

        oldUserInfo.getMedications().add(medication);
    }

    @Test
    @WithMockUser
    public void registerUserTest() throws Exception {
        mockMvc.perform(post("/users/old/join/register")
                        .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(oldUserInfo)))
                .andDo(print())
                .andExpect(status().isOk());
    }
}
