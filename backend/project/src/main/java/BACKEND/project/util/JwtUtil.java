package BACKEND.project.util;

import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.exception.InvalidTokenException;
import BACKEND.project.service.OldUserJoinService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Key;

@Service
public class JwtUtil {

    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Autowired
    private OldUserJoinService oldUserJoinService;

    public String createToken(String oldUserId, String tvId) {
        return Jwts.builder()
                .setSubject(oldUserId)
                .claim("tvId", tvId)
                .signWith(key)
                .compact();
    }

    public Jws<Claims> verifyToken(String token) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
        } catch (JwtException | IllegalArgumentException e) {
            throw new InvalidTokenException("토큰이 유효하지 않습니다.", e);
        }
    }

    public OldUserInfo authenticateToken(String token) {
        Jws<Claims> jws = verifyToken(token);
        String oldUserId = jws.getBody().getSubject();
        String tvId = jws.getBody().get("tvId", String.class);

        return oldUserJoinService.findByUserId(oldUserId);
    }
}
