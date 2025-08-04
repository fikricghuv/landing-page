import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Modal */}
            <div
                id="chat-widget"
                className={`fixed transition-all duration-300 ease-in-out transform ${
                    isOpen
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
                }`}
                style={{
                    width: '400px',
                    height: '70vh',
                    bottom: '90px',
                    right: '20px',
                    zIndex: 9999,
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                }}
            >
                {/* Close Button */}
                <div className="absolute" style={{ top: '1rem', right: '1rem' }}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition"
                    >
                        <ChevronDown className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* Iframe */}
                <iframe
                    src="http://localhost:4202"
                    className="w-full h-full border-0 rounded-b-lg"
                    allow="microphone; camera"
                />
            </div>

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center space-x-2"
                    style={{ zIndex: 10000 }}
                >
                    <MessageCircle className="w-6 h-6 text-white" />
                </button>
            )}
        </>
    );
};
