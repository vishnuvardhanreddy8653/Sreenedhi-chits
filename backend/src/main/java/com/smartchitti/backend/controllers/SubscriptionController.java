package com.smartchitti.backend.controllers;

import com.smartchitti.backend.models.Chit;
import com.smartchitti.backend.models.Subscription;
import com.smartchitti.backend.models.User;
import com.smartchitti.backend.repositories.ChitRepository;
import com.smartchitti.backend.repositories.SubscriptionRepository;
import com.smartchitti.backend.repositories.UserRepository;
import com.smartchitti.backend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    SubscriptionRepository subscriptionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChitRepository chitRepository;

    @GetMapping
    public ResponseEntity<List<Subscription>> getUserSubscriptions() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(subscriptionRepository.findByUserId(userDetails.getId()));
    }

    @PostMapping
    public ResponseEntity<?> subscribeToChit(@RequestBody Map<String, Long> payload) {
        Long chitId = payload.get("chitId");
        if (chitId == null) {
            return ResponseEntity.badRequest().body("chitId is required");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> userOpt = userRepository.findById(java.util.Objects.requireNonNull(userDetails.getId()));
        Optional<Chit> chitOpt = chitRepository.findById(chitId);

        if (userOpt.isPresent() && chitOpt.isPresent()) {
            Subscription subscription = new Subscription();
            subscription.setUser(userOpt.get());
            subscription.setChit(chitOpt.get());
            subscriptionRepository.save(subscription);
            return ResponseEntity.ok(subscription);
        }

        return ResponseEntity.badRequest().body("User or Chit not found");
    }
}
