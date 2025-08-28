import { useState } from "react";
import emailjs from "emailjs-com";

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_h11iw4b", // ✅ Replace with your EmailJS Service ID
        "template_ldet1cw", // ✅ Replace with your EmailJS Template ID
        formData,
        "-IuGstzd9dh0KV2mr" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Enquiry sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setIsOpen(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send enquiry!");
        }
      );
  };

  return (
    <>
      {/* Sticky Vertical Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2
                   bg-gradient-to-b from-yellow-500 to-yellow-600 
                   text-black px-1 py-6 font-bold tracking-wide
                    shadow-xl hover:from-yellow-600 hover:to-yellow-700
                   z-30 rotate-180 [writing-mode:vertical-rl] transition-all duration-300"
      >
        Book Admission
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="relative bg-white/90 backdrop-blur-md w-[420px] 
                       rounded-2xl shadow-2xl p-8 animate-scaleIn"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-yellow-600 text-xl"
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-2xl font-extrabold text-yellow-600 text-center mb-6">
              Admission Enquiry
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:outline-none 
                           focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:outline-none 
                           focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:outline-none 
                           focus:ring-2 focus:ring-yellow-500 transition"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-xl focus:outline-none 
                           focus:ring-2 focus:ring-yellow-500 transition"
                rows={3}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-700 to-yellow-600 text-black 
                           py-3 rounded-xl font-semibold hover:from-yellow-600 
                           hover:to-yellow-700 transition-all duration-300 shadow-md"
              >
                🚀 Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default EnquiryForm;
