package com.smartchitti.backend.repositories;

import com.smartchitti.backend.models.Chit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChitRepository extends JpaRepository<Chit, Long> {
}
