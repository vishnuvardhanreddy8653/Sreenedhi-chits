package com.smartchitti.backend.controllers;

import com.smartchitti.backend.models.Branch;
import com.smartchitti.backend.models.GalleryImage;
import com.smartchitti.backend.repositories.BranchRepository;
import com.smartchitti.backend.repositories.GalleryImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("/api/cms")
public class CmsController {

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private GalleryImageRepository galleryImageRepository;

    private final String UPLOAD_DIR = "uploads/";

    private void checkAuth(String password) {
        if (!"12345678".equals(password)) {
            throw new RuntimeException("Unauthorized: Invalid password");
        }
    }

    private String saveFile(MultipartFile file) throws Exception {
        if (file == null || file.isEmpty()) return null;
        File dir = new File(UPLOAD_DIR);
        if (!dir.exists()) dir.mkdirs();

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename().replaceAll("[^a-zA-Z0-9\\.\\-]", "_");
        Path filePath = Paths.get(UPLOAD_DIR, fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return "/uploads/" + fileName;
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleAuthError(RuntimeException ex) {
        if (ex.getMessage().startsWith("Unauthorized")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

    // --- BRANCHES ---

    @GetMapping("/branches")
    public List<Branch> getBranches() {
        return branchRepository.findAll();
    }

    @PostMapping("/branches")
    public Branch addBranch(
            @RequestHeader(value = "x-admin-password", required = false) String password,
            @RequestParam("name") String name,
            @RequestParam("address") String address,
            @RequestParam("phone") String phone,
            @RequestParam("email") String email,
            @RequestParam("coordX") Double coordX,
            @RequestParam("coordY") Double coordY,
            @RequestParam("headOffice") Boolean headOffice,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws Exception {
        checkAuth(password);

        Branch branch = new Branch();
        branch.setName(name);
        branch.setAddress(address);
        branch.setPhone(phone);
        branch.setEmail(email);
        branch.setCoordX(coordX);
        branch.setCoordY(coordY);
        branch.setHeadOffice(headOffice);

        if (image != null && !image.isEmpty()) {
            branch.setImageUrl(saveFile(image));
        }

        return branchRepository.save(branch);
    }

    @DeleteMapping("/branches/{id}")
    public ResponseEntity<?> deleteBranch(
            @RequestHeader(value = "x-admin-password", required = false) String password,
            @PathVariable Long id) {
        checkAuth(password);
        branchRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // --- GALLERY ---

    @GetMapping("/gallery")
    public List<GalleryImage> getGalleryImages() {
        return galleryImageRepository.findAll();
    }

    @PostMapping("/gallery")
    public GalleryImage addGalleryImage(
            @RequestHeader(value = "x-admin-password", required = false) String password,
            @RequestParam("image") MultipartFile image
    ) throws Exception {
        checkAuth(password);

        GalleryImage galleryImage = new GalleryImage();
        galleryImage.setImageUrl(saveFile(image));
        return galleryImageRepository.save(galleryImage);
    }

    @DeleteMapping("/gallery/{id}")
    public ResponseEntity<?> deleteGalleryImage(
            @RequestHeader(value = "x-admin-password", required = false) String password,
            @PathVariable Long id) {
        checkAuth(password);
        galleryImageRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
