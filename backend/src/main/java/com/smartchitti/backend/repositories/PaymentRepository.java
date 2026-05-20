package com.smartchitti.backend.repositories;

import com.smartchitti.backend.models.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByUserId(Long userId);
    List<Payment> findBySubscriptionId(Long subscriptionId);
}
