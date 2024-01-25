package BACKEND.project.websocket;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.repository.OldUserRepository;
import BACKEND.project.service.OldUserJoinService;
import BACKEND.project.util.JwtUtil;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class TvWebSocketHandler extends TextWebSocketHandler {

    private final OldUserJoinService oldUserJoinService;
    private final JwtUtil jwtUtil;

    public TvWebSocketHandler(OldUserJoinService oldUserJoinService, JwtUtil jwtUtil) {
        this.oldUserJoinService = oldUserJoinService;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String tvId = getTvIdFromSession(session);
        session.getAttributes().put("tvId", tvId);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String oldUserId = message.getPayload();
        OldUserInfo oldUser = oldUserJoinService.findByUserId(oldUserId);

        String tvId = (String) session.getAttributes().get("tvId");
        String token = jwtUtil.createToken(oldUserId, tvId);

        session.sendMessage(new TextMessage(token));
    }

    private String getTvIdFromSession(WebSocketSession session) {
        // TV 고유 코드를 어떻게 전달받을 지 확인한 다음 그 다음 로직 수정 필요
        // TV 고유 코드를 웹소켓 연결 시 URL 쿼리 파라미터로 전달받는 방법? 헤더?
        return "tvId";
    }
}
