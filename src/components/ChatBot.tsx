import { useEffect, useRef } from 'react';
import { Bot, Activity } from 'lucide-react';

interface ChatBotProps {
  messages: Array<{ text: string; type: 'bot' | 'status' }>;
  isAnalyzing: boolean;
}

function ChatBot({ messages, isAnalyzing }: ChatBotProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 sticky top-6 hover:shadow-3xl transition-all duration-300">
      <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex items-center gap-3 text-white">
          <div className="relative">
            <Bot className="w-6 h-6" />
            {isAnalyzing && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-300/60"></div>
            )}
          </div>
          <h2 className="text-2xl font-bold">AI Assistant</h2>
        </div>
      </div>

      <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-full mb-6 shadow-lg">
              <Bot className="w-14 h-14 text-green-600 animate-bounce" />
            </div>
            <p className="text-gray-700 font-bold text-lg mb-2">AI Assistant Ready</p>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Upload a plant image and click "Detect Disease" to start the analysis
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`animate-slide-in-left rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                  message.type === 'status'
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400'
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`${
                    message.type === 'status'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                      : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                  } p-2 rounded-full flex-shrink-0 shadow-lg`}>
                    {message.type === 'status' ? (
                      <Activity className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-semibold ${
                      message.type === 'status' ? 'text-green-800' : 'text-blue-800'
                    }`}>
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {isAnalyzing && messages.length > 0 && (
          <div className="mt-4 flex items-center gap-3 text-gray-600 text-sm font-medium bg-gray-100 rounded-lg p-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-bounce shadow-md shadow-green-500/50" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce shadow-md shadow-emerald-500/50" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-bounce shadow-md shadow-teal-500/50" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span>Processing analysis...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
