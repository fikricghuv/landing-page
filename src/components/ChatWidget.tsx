import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Modal */}
            <div
                id="chat-widget"
                className={`fixed bottom-6 right-6 z-[9999] w-[90vw] sm:w-[400px] h-[70vh] rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform ${
                    isOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
                }`}
            >
                {/* Close Button */}
                <div className="absolute top-3 right-3 z-10">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                        aria-label="Close chat"
                    >
                        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                </div>

                {/* Iframe */}
                <iframe
                    src="http://localhost:4202"
                    className="w-full h-full border-0"
                    allow="microphone; camera"
                />
            </div>

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 z-[10000] bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all flex items-center space-x-2"
                    aria-label="Open chat"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}
        </>
    );
};
