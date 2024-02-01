package BACKEND.project.service;

import BACKEND.project.domain.Post;
import BACKEND.project.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    // 등록
    @Transactional
    public Post save(Post post) {
        return postRepository.save(post);
    }

    // 삭제
    @Transactional
    public void delete(Long id) {
        postRepository.deleteById(id);
    }

    // 단일 조회
    @Transactional
    public Post findById(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    // 전체 조회
    @Transactional(readOnly = true)
    public List<Post> findAll() {
        return postRepository.findAll();
    }
}
