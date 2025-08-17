import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../../assets/Chatbot-animation.json';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setHasError(false);
            setLoaded(false);
            return;
        }

        const timer = setTimeout(() => {
            if (!loaded) setHasError(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isOpen, loaded]);

    return (
        <>
            {/* Chat Modal */}
            <div
                id="chat-widget"
                className={`fixed bottom-6 right-6 z-[9999] w-[90vw] sm:w-[400px] h-[65vh] sm:h-[70vh] rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform ${
                    isOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 blur-sm translate-y-5 pointer-events-none'
                }`}
            >
                {/* Close Button */}
                <div className="absolute top-6 right-3 z-10">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
                        aria-label="Close chat"
                    >
                        <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                </div>

                {/* Iframe atau Error Fallback */}
                {hasError ? (
                    <div className="flex flex-col items-center justify-center h-full bg-white text-gray-700 text-center">
                        <Lottie
                            animationData={animationData}
                            loop
                            autoplay
                            className="w-[200px] h-[200px]"
                        />
                        <p className="text-sm text-gray-500">
                            Please try again later.
                        </p>
                    </div>
                ) : (
                    <iframe
                        src="http://localhost:4202"
                        title="Talkvera Chatbot Demo"
                        className="w-full h-full border-0"
                        allow="microphone; camera"
                        onLoad={() => setLoaded(true)}
                    />
                )}

            </div>

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 z-[10000] bg-blue-500 hover:bg-blue-600 text-white 
                                p-1 rounded-full shadow-xl transition-all duration-700 flex items-center 
                                group"
                    aria-label="Open chat"
                >
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className="w-[40px] h-[40px] filter invert"
                    />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 
                                    transition-all duration-700 whitespace-nowrap font-medium">
                        Talk with Vera
                    </span>
                </button>
            )}
        </>
    );
};
