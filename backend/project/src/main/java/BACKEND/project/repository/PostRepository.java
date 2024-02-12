package BACKEND.project.repository;

import BACKEND.project.domain.FamilyUserInfo;
import BACKEND.project.domain.OldUserInfo;
import BACKEND.project.domain.Post;
import BACKEND.project.dto.PostDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<PostDto> findByOldUserId(OldUserInfo oldUserInfo);
    List<Post> findByOldUserInfoId(Long oldUserUniqueId);
}
