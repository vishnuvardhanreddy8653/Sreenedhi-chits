package com.smartchitti.backend.repositories;

import com.smartchitti.backend.models.ChatbotLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatbotLogRepository extends JpaRepository<ChatbotLog, Long> {
}
