import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import axios from 'axios';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Smart Chitti assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const chips = [
    { label: "⏳ When can I withdraw?",   query: "When can I withdraw" },
    { label: "❌ Miss a payment",          query: "Miss a payment" },
    { label: "📈 Best investing",          query: "Suggest me best investing" },
    { label: "❓ How does it work?",       query: "How does it work" },
    { label: "💰 Loan / Borrow",           query: "Loan borrow" },
    { label: "📊 Demat / Market",          query: "Demat market" },
    { label: "🔔 Notification reminder",   query: "Notification reminder" },
    { label: "📋 Scheme / Plan",           query: "Scheme plan" },
    { label: "📞 Contact / WhatsApp",      query: "Contact call WhatsApp" },
    { label: "📜 History / Transactions",  query: "History transparent transaction" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (msgText) => {
    const userMsg = msgText || input.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    try {
      const res = await axios.post('/api/chatbot/query', { message: userMsg });
      setMessages(prev => [...prev, { text: res.data.response, isBot: true }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting to the server.", isBot: true }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed right-6 bottom-6 bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-purple-600 p-4 flex justify-between items-center text-white">
            <h3 className="font-semibold">Smart Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-purple-200">
              <X size={20} />
            </button>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.isBot ? 'bg-white border border-gray-100 text-gray-800 self-start rounded-tl-sm' : 'bg-purple-600 text-white self-end rounded-tr-sm'}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion chips — always-visible horizontal scroll strip */}
          <div
            className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {chips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip.query)}
                className="flex-shrink-0 text-xs bg-white border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-100 hover:border-purple-400 transition-colors whitespace-nowrap"
              >
                {chip.label}
              </button>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/50"
            />
            <button onClick={() => handleSend()} className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
