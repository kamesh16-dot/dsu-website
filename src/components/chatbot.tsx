import { useState, useRef, useEffect } from "react";

type Message = { sender: "user" | "bot"; text: string };

const FAQS: { question: string; answer: string }[] = [
  { question: "Admission Process", answer: "📌 Admissions for 2025 are open! Apply online via our admissions portal." },
  { question: "Available Courses", answer: "🎓 We offer B.Tech, M.Tech, Ph.D programs in Engineering, Technology & Innovation." },
  { question: "Scholarships", answer: "💰 Merit-based and need-based scholarships are available. Apply during admission." },
  { question: "Campus Facilities", answer: "🏫 Modern labs, hostels, libraries, and sports facilities are available." },
  { question: "Contact Information", answer: "📞 Reach us at +91-1234567890 or admissions@dsu.ac.in." },
  { question: "Placement Opportunities", answer: "💼 DSU has excellent placement records with top IT & Engineering companies." },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "👋 Hi! I'm your AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (text?: string) => {
    const userMessage = text || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => {
      const botReply = FAQS.find((faq) =>
        userMessage.toLowerCase().includes(faq.question.toLowerCase())
      )?.answer ?? "🤖 Sorry, I didn't understand that. Please try another question.";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 700);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50 animate-pulse"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 bg-gradient-to-b from-yellow-300 to-yellow-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 border border-yellow-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 flex justify-between items-center rounded-t-3xl">
            <span className="font-bold tracking-wide text-lg">AI Assistant</span>
            <button onClick={toggleChat} className="text-black text-xl font-bold">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[75%] text-sm shadow-md ${
                  msg.sender === "user"
                    ? "ml-auto bg-yellow-400 text-black"
                    : "mr-auto bg-yellow-100 text-black border border-yellow-300"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Buttons */}
          <div className="p-3 flex flex-wrap gap-2 bg-yellow-200 border-t border-yellow-300">
            {FAQS.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSend(faq.question)}
                className="text-xs bg-yellow-300 hover:bg-yellow-400 text-black px-3 py-1 rounded-full shadow-sm"
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 flex gap-2 bg-yellow-100 border-t border-yellow-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border border-yellow-300 p-2 rounded-lg bg-yellow-100 text-black placeholder-black focus:outline-yellow-400"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={() => handleSend()}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 rounded-lg"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
