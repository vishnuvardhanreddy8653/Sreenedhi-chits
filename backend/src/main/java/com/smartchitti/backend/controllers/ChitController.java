package com.smartchitti.backend.controllers;

import com.smartchitti.backend.models.Chit;
import com.smartchitti.backend.repositories.ChitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/chits")
public class ChitController {

    @Autowired
    ChitRepository chitRepository;

    @GetMapping
    public ResponseEntity<List<Chit>> getAllChits() {
        return ResponseEntity.ok(chitRepository.findAll());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Chit> createChit(@RequestBody Chit chit) {
        Chit savedChit = chitRepository.save(java.util.Objects.requireNonNull(chit));
        return ResponseEntity.ok(java.util.Objects.requireNonNull(savedChit));
    }
}
