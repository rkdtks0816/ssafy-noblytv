package BACKEND.project.controller;

import BACKEND.project.domain.TvCode;
import BACKEND.project.service.TvLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tv")
public class TvLoginController {

    @Autowired
    private TvLoginService tvLoginService;

    @GetMapping("/generate-code")
    public ResponseEntity<?> generateTvCode() {
        TvCode tvCode = tvLoginService.createAndSaveTvCode();
        // 프론트엔드가 QR 코드를 생성할 수 있도록 TV 고유 코드를 반환
        return ResponseEntity.ok().body(tvCode.getCode());
    }
}
