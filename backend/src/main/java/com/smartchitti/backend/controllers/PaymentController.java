package com.smartchitti.backend.controllers;

import com.smartchitti.backend.models.Payment;
import com.smartchitti.backend.repositories.PaymentRepository;
import com.smartchitti.backend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    PaymentRepository paymentRepository;

    @GetMapping
    public ResponseEntity<List<Payment>> getUserPayments() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(paymentRepository.findByUserId(userDetails.getId()));
    }
}
