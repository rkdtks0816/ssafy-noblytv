package BACKEND.project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
@RequiredArgsConstructor
public class NotificationController {

    private final SimpMessagingTemplate template;

    @MessageMapping("/watchTime")
    public void receiveWatchTime(Long watchTime) {
        // TV 시청 시간이 2시간 이상일 때, 광고 시간을 계산
        if (watchTime >= 7200) {
            LocalDateTime adTime = calculatedAdTime();

            // 프론트엔드로 알림을 송신
            template.convertAndSend("/topic/frontend", adTime.toString());
        }
    }

    // 광고 시간 계산
    private LocalDateTime calculatedAdTime() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime nextHour = now.plusHours(1);
        return LocalDateTime.of(nextHour.getYear(), nextHour.getMonth(), nextHour.getDayOfMonth(), nextHour.getHour(), 0);
    }
}
