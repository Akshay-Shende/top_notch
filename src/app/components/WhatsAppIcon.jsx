import React, { useState } from "react";

const WhatsAppIcon = () => {
  const [phoneNumber, setPhoneNumber] = useState("+919421717583"); // Default number

  const handleSendMessage = () => {
    // Optionally, perform validation or additional logic
    const message = "Hello TopNotch Auto Care!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* WhatsApp Fixed Icon */}
      <button
        onClick={handleSendMessage}
        className="fixed bottom-6 left-4 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 animate-pulse-icon"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-6 h-6"
        >
          <path d="M13.601 2.326A7.957 7.957 0 0 0 8 0C3.589 0 0 3.589 0 8c0 1.396.365 2.762 1.057 3.963L.067 15.501a.698.698 0 0 0 .173.721.716.716 0 0 0 .507.211c.071 0 .143-.01.213-.031l3.507-1.004A7.924 7.924 0 0 0 8 16c4.411 0 8-3.589 8-8 0-2.139-.833-4.149-2.399-5.674zM8 14.8c-1.292 0-2.553-.334-3.646-.961a.701.701 0 0 0-.568-.083l-2.482.711.711-2.482a.701.701 0 0 0-.083-.568A6.838 6.838 0 0 1 1.2 8c0-3.753 3.047-6.8 6.8-6.8 1.815 0 3.515.706 4.798 1.989A6.738 6.738 0 0 1 14.8 8c0 3.753-3.047 6.8-6.8 6.8zm3.507-4.722c-.19-.095-1.122-.553-1.296-.616-.173-.063-.3-.095-.426.095-.127.19-.489.615-.599.741-.11.127-.222.143-.412.048a5.661 5.661 0 0 1-1.663-1.03 6.242 6.242 0 0 1-1.15-1.435c-.127-.222-.014-.342.095-.459.096-.096.222-.254.333-.381.111-.127.143-.222.222-.365.063-.127.032-.254-.016-.38-.048-.127-.426-1.03-.582-1.405-.153-.381-.309-.33-.426-.335-.111-.005-.238-.006-.365-.006a.703.703 0 0 0-.51.238c-.175.19-.667.652-.667 1.588s.683 1.841.777 1.969c.095.127 1.34 2.048 3.241 2.868.454.196.808.313 1.084.4.455.144.87.123 1.198.075.365-.054 1.122-.457 1.282-.898.16-.44.16-.816.111-.898-.047-.079-.174-.127-.365-.222z" />
        </svg>
      </button>
    </>
  );
};

export default WhatsAppIcon;
