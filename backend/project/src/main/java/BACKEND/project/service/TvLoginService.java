package BACKEND.project.service;

import BACKEND.project.domain.TvCode;
import BACKEND.project.repository.TvCodeRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TvLoginService {

    @Autowired
    private TvCodeRepository tvCodeRepository;

    public TvCode createAndSaveTvCode() {
        String uniqueCode = generateUniqueCode();
        TvCode tvCode = new TvCode();
        tvCode.setCode(uniqueCode);
        return tvCodeRepository.save(tvCode);
    }

    private String generateUniqueCode() {
        return RandomStringUtils.randomAlphanumeric(8).toLowerCase();
    }
}
