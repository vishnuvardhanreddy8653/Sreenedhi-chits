package com.smartchitti.backend.repositories;

import com.smartchitti.backend.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByUserId(Long userId);
    List<Subscription> findByChitId(Long chitId);
}
