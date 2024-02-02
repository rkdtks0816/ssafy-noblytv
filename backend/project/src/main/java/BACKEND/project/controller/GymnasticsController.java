package BACKEND.project.controller;


import BACKEND.project.domain.Gymnastics;
import BACKEND.project.service.GymnasticsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gymnastics")
public class GymnasticsController {

    private GymnasticsService gymnasticsService;

    public GymnasticsController(GymnasticsService gymnasticsService) {
        this.gymnasticsService = gymnasticsService;
    }


    @PostMapping("/{oldUserId}")
    public ResponseEntity<Gymnastics> createGymnastics(@PathVariable String oldUserId, @RequestBody Gymnastics gymnastics) {
        Gymnastics savedGymnastics = gymnasticsService.saveGymnastics(oldUserId, gymnastics);
        return new ResponseEntity<>(savedGymnastics, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gymnastics> updateGymnastics(@PathVariable Long id, @RequestBody Gymnastics newGymnastics) {
        Gymnastics updatedGymnastics = gymnasticsService.updateGymnastics(id, newGymnastics);
        return new ResponseEntity<>(updatedGymnastics, HttpStatus.OK);
    }
}
