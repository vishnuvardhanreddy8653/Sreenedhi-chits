package com.smartchitti.backend.models;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "chits")
public class Chit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private BigDecimal amount;
    
    private Integer durationMonths;
    
    private Integer membersCount;
    
    @Column(columnDefinition = "TEXT")
    private String description;
}
