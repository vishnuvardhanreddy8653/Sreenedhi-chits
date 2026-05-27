package com.smartchitti.backend.config;

import com.smartchitti.backend.models.Branch;
import com.smartchitti.backend.models.GalleryImage;
import com.smartchitti.backend.repositories.BranchRepository;
import com.smartchitti.backend.repositories.GalleryImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private GalleryImageRepository galleryImageRepository;

    @Override
    public void run(String... args) throws Exception {
        seedBranches();
        seedGallery();
    }

    private void seedBranches() {
        List<Branch> initialBranches = Arrays.asList(
            createBranch("KARIMNAGAR", "H NO 2-7-384, 2nd Floor, OPP: POLICE PARADE GROUND, BUS-STAND ROAD, KARIMNAGAR-505001", "0878-2251999", "info@srinidhichits.com", 0.471, 0.356, "https://srinidhichits.com/assests/12.jpg", true),
            createBranch("PEDDAPALLY", "H NO 1-2-67/D, 1st Floor, PRAGATHI NAGAR, MAIN ROAD PEDDAPALLY, Karimnagar", "08728-222055", "info@srinidhichits.com", 0.532, 0.315, "https://srinidhichits.com/assests/peddapalli.jpg", false),
            createBranch("HUZURABAD", "H NO 12-371, 1st Floor, WARANGAL ROAD, HUZURABAD-505468, Karimnagar", "08727-252166", "info@srinidhichits.com", 0.539, 0.415, "https://srinidhichits.com/assests/HZB.jpg", false),
            createBranch("JANGOAN", "HNO 2-8-1/B, HYD ROAD, SRINAGAR COLONY, JANGOAN-506167, WARANGAL", "08716-224225", "info@srinidhichits.com", 0.478, 0.529, "https://srinidhichits.com/assests/janagon.jpg", false),
            createBranch("NIRMAL", "H NO 7-3-23, 1ST FLOOR, MAIN ROAD, OPP:-NIRMAL TOYS EMPORIUM, NIRMAL, ADILABAD", "08734-243222", "info@srinidhichits.com", 0.280, 0.195, "https://srinidhichits.com/assests/Nirmal.jpg", false),
            createBranch("GODAVARIKHANI", "H NO 22-3-274/17, 1ST FLOOR, F.C.I ROAD, NTPC JYOTHI NAGAR, GODAVARIKHANI", "08728-274544", "info@srinidhichits.com", 0.563, 0.278, "https://srinidhichits.com/assests/gdk.jpg", false),
            createBranch("SECUNDERABAD", "PLOT NO.1, SRR. ARCADE, FOURTH FLOOR, THIRIMULGHERRY, SECUNDERABAD-500015", "040-27745699", "info@srinidhichits.com", 0.317, 0.600, "https://srinidhichits.com/assests/Secun.jpg", false),
            createBranch("HANMAKONDA", "H.NO 2-10-796, KANAKA DURGA COLONY, SUBHEDARY, HANMKONDA, WARANGAL (U)", "0870-2977234", "info@srinidhichits.com", 0.576, 0.463, "https://srinidhichits.com/assests/HNMK.jpg", false),
            createBranch("MANCHERIAL", "H.NO.12-844/6 1ST FLOOR, BESIDE:PNB BANK, CHINTHAPANDU WADA, MANCHERIAL -504208", "08736-252155", "info@srinidhichits.com", 0.551, 0.251, "https://srinidhichits.com/assests/MNCH.jpg", false),
            createBranch("SIDDIPET", "H NO 18-19-25/E1, BHAVANI NAGAR, BLACK OFFICE CHOWRASTA, SIDDIPET -502103", "08457-230155", "info@srinidhichits.com", 0.402, 0.439, "https://srinidhichits.com/assests/siddipet.jpg", false),
            createBranch("SIRCILLA", "H NO 3-1-33/1/C & D, 1st Floor, KARIMNAGAR ROAD, SIRCILLA -505301", "08723 - 297233", "info@srinidhichits.com", 0.390, 0.368, "https://srinidhichits.com/assests/chenetha.jpg", false)
        );
        
        List<Branch> existing = branchRepository.findAll();
        for (Branch b : initialBranches) {
            boolean exists = existing.stream().anyMatch(e -> e.getName().equalsIgnoreCase(b.getName()));
            if (!exists) {
                branchRepository.save(b);
            }
        }
    }

    private void seedGallery() {
        List<GalleryImage> existing = galleryImageRepository.findAll();
        for (int i = 1; i <= 11; i++) {
            String url = "https://srinidhichits.com/assests/Gallery/1/" + i + ".jpg";
            boolean exists = existing.stream().anyMatch(e -> e.getImageUrl().equals(url));
            if (!exists) {
                GalleryImage img = new GalleryImage();
                img.setImageUrl(url);
                galleryImageRepository.save(img);
            }
        }
    }

    private Branch createBranch(String name, String address, String phone, String email, Double coordX, Double coordY, String imageUrl, Boolean headOffice) {
        Branch branch = new Branch();
        branch.setName(name);
        branch.setAddress(address);
        branch.setPhone(phone);
        branch.setEmail(email);
        branch.setCoordX(coordX);
        branch.setCoordY(coordY);
        branch.setImageUrl(imageUrl);
        branch.setHeadOffice(headOffice);
        return branch;
    }
}
