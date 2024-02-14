package BACKEND.project.util;

import BACKEND.project.service.FamilyLoginService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {
    private final JwtTokenProvider jwtTokenProvider;
    private final FamilyLoginService familyLoginService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String requestURI = httpRequest.getRequestURI();

        // 로그인 및 회원가입 요청에 해당하는 URL일 경우, 토큰 유효성 검사를 수행하지 않음
        if (requestURI.equals("/users/family/login") || requestURI.equals("/users/family/signup") || requestURI.equals("/users/old/signup")
                || requestURI.startsWith("/tv/login") || requestURI.startsWith("/users/family/duplication/") || requestURI.startsWith("/swagger-ui/") || requestURI.startsWith("/v3/") || requestURI.startsWith("/api-docs/") || requestURI.startsWith("/swagger-resources/") || requestURI.startsWith("/quiz/") || requestURI.startsWith("/youtube") || requestURI.startsWith("/gymnastics"))  {
            chain.doFilter(request, response);
            return;
        }

        try {
            String token = resolveToken(httpRequest);
            // 토큰이 유효하고, 블랙리스트에 없는지 확인
            if (StringUtils.hasText(token) && jwtTokenProvider.validateToken(token) && !familyLoginService.isTokenBlacklisted(token)) {
                Authentication authentication = jwtTokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } else {
                SecurityContextHolder.clearContext();
                ((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT token");
                return;
            }
        } catch (JwtTokenProvider.JwtAuthenticationException e) {
            HttpServletResponse httpResponse = (HttpServletResponse) response;
            httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            httpResponse.setContentType("application/json");
            httpResponse.getWriter().write("{\"error\": \"" + e.getMessage() + "\"}");
            return;
        }

        chain.doFilter(request, response);
    }

    // Request Header에서 토큰 정보 추출
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
