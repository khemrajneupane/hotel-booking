import React from "react";
import ChatWidget from "../chat-bot/Chatbot";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center bg-gradient-to-r bg-[#1f1f1f] text-white p-6">
      <p>Book IT - 2019-2021, All Rights Reserved</p>
      <ChatWidget />
    </footer>
  );
}

export default Footer;
