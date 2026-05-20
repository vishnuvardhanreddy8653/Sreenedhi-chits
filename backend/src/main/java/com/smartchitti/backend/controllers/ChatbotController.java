package com.smartchitti.backend.controllers;

import com.smartchitti.backend.models.ChatbotLog;
import com.smartchitti.backend.repositories.ChatbotLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    @Autowired
    ChatbotLogRepository chatbotLogRepository;

    @PostMapping("/query")
    public ResponseEntity<?> handleQuery(@RequestBody Map<String, String> request) {
        String message = request.get("message");
        if (message == null || message.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Message is required");
        }

        String lowerMsg = message.toLowerCase();
        String responseText = "I'm sorry, I don't understand that. You can ask me about withdrawals, missed payments, or how chit plans work.";

        if (lowerMsg.contains("withdraw") || lowerMsg.contains("when can i withdraw")) {
            responseText = "You can withdraw your chit amount after winning an auction or at the end of the chit duration. Early withdrawal is also available based on your service provider's terms — check the 'Early Withdrawal' option in your Dashboard.";
        } else if (lowerMsg.contains("miss") || lowerMsg.contains("miss a payment")) {
            responseText = "If you miss a payment, a penalty will be applied according to your plan's terms. You'll receive a notification 2 days before your due date to avoid this. Repeated misses may lead to plan cancellation.";
        } else if (lowerMsg.contains("how do chit plans work") || lowerMsg.contains("how does it work")) {
            responseText = "A chit fund is a saving and borrowing scheme where a group of people contribute a fixed amount every month. The total collected amount is auctioned each month. The lowest bidder wins and receives the payout. All members get a fair share of the dividend at the end.";
        } else if (lowerMsg.contains("invest") || lowerMsg.contains("suggest") || lowerMsg.contains("daily") || lowerMsg.contains("chitty") || lowerMsg.contains("flexible") || lowerMsg.contains("monthly")) {
            responseText = "We offer Flexible Plans where you can invest from ₹1 to any amount, either on a daily or monthly basis! Go to your Dashboard → 'Flexible Plans' tab to get started. For structured chits, check our Schemes page for plans ranging from 25 to 50 months.";
        } else if (lowerMsg.contains("loan") || lowerMsg.contains("borrow")) {
            responseText = "We offer loans to our members at just 2% interest rate. If you are a loyal customer (active for 1+ year with perfect payment history), you are eligible for an exclusive 1.8% rate! Visit the 'Apply Loan' tab in your Dashboard.";
        } else if (lowerMsg.contains("demat") || lowerMsg.contains("market") || lowerMsg.contains("stock") || lowerMsg.contains("share")) {
            responseText = "Our Type 2 Demat Investment option allows 20% of your chit investment to be allocated to market shares. If the market performs well, you earn extra returns (minus a 1% company fee). You can also wait or withdraw based on your own decision. Find this in your Dashboard → 'Demat (Market) Inv.' tab.";
        } else if (lowerMsg.contains("notification") || lowerMsg.contains("reminder") || lowerMsg.contains("due") || lowerMsg.contains("payment")) {
            responseText = "You will receive a payment reminder notification 2 days before each installment is due. You can also make digital payments directly from your Dashboard using the 'Pay Now' button.";
        } else if (lowerMsg.contains("scheme") || lowerMsg.contains("plan") || lowerMsg.contains("available")) {
            responseText = "We have 18+ chit plans ranging from 25 to 50 months. Installments start as low as ₹2,600/month with payouts up to ₹23,75,000! Visit our 'Available Chits' page to explore all plans and filter by duration.";
        } else if (lowerMsg.contains("contact") || lowerMsg.contains("call") || lowerMsg.contains("whatsapp") || lowerMsg.contains("reach")) {
            responseText = "You can reach our team via: 📞 Call: +91 63022 96910 | 💬 WhatsApp: +91 63022 96910 | 📘 Facebook | 📸 Instagram | 📧 Email: contact@srinidhichits.com. Visit our Contact page for more!";
        } else if (lowerMsg.contains("history") || lowerMsg.contains("transparent") || lowerMsg.contains("transaction")) {
            responseText = "Transparency is our core value. You can view your complete investment history — every transaction, payment, and auction — in real time from your Dashboard under 'Overview & History'.";
        }

        ChatbotLog log = new ChatbotLog();
        log.setMessage(message);
        log.setResponse(responseText);
        // Assuming guest if no user is passed for now
        chatbotLogRepository.save(log);

        Map<String, String> response = new HashMap<>();
        response.put("response", responseText);

        return ResponseEntity.ok(response);
    }
}
