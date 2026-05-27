package com.smartchitti.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "branches")
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String address;
    
    private String phone;
    
    private String email;
    
    // Store X and Y coordinates separately for easier mapping
    private Double coordX;
    private Double coordY;
    
    private String imageUrl;
    
    private Boolean headOffice;
}
