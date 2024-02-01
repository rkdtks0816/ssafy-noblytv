package BACKEND.project.controller;


import BACKEND.project.domain.Gymnastics;
import BACKEND.project.service.VideoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/video")
public class VideoController {

    private VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }


    @PostMapping("/{oldUserId}")
    public ResponseEntity<Gymnastics> createGymnastics(@PathVariable String oldUserId, @RequestBody Gymnastics gymnastics) {
        Gymnastics savedGymnastics = videoService.saveGymnastics(oldUserId, gymnastics);
        return new ResponseEntity<>(savedGymnastics, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gymnastics> updateGymnastics(@PathVariable Long id, @RequestBody Gymnastics newGymnastics) {
        Gymnastics updatedGymnastics = videoService.updateGymnastics(id, newGymnastics);
        return new ResponseEntity<>(updatedGymnastics, HttpStatus.OK);
    }
}
