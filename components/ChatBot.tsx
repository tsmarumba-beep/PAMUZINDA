import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatBot: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition">
        <MessageCircle size={24} />
      </button>
      <div className="bg-white w-72 shadow-lg rounded-lg p-4 absolute right-0 mb-2 hidden transition-all duration-300 ease-in-out hover:block">
        <h2 className="font-bold text-lg text-gray-800">Pamuzinda AI Support</h2>
        <p className="text-gray-600 mt-2">How can I assist you today?</p>
      </div>
    </div>
  );
};

export default ChatBot;