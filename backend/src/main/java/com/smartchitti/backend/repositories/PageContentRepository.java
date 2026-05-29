package com.smartchitti.backend.repositories;

import com.smartchitti.backend.models.PageContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PageContentRepository extends JpaRepository<PageContent, Long> {
    Optional<PageContent> findByPageName(String pageName);
}
