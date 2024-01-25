package BACKEND.project.config;

import BACKEND.project.service.OldUserJoinService;
import BACKEND.project.util.JwtUtil;
import BACKEND.project.websocket.TvWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final OldUserJoinService oldUserJoinService;
    private final JwtUtil jwtUtil;

    public WebSocketConfig(OldUserJoinService oldUserJoinService, JwtUtil jwtUtil) {
        this.oldUserJoinService = oldUserJoinService;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new TvWebSocketHandler(oldUserJoinService, jwtUtil), "/ws/tv");
    }
}
