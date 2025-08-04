import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Message } from "..";

interface MessageThreadProps {
  messages: Message[];
}

export function MessageThread({ messages }: MessageThreadProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {/* AI Message with features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <div className="w-4 h-4 bg-gradient-to-br bg-purple-500 rounded-full"></div>
            <span>Mom</span>
            <span>22:38</span>
          </div>
        </div>

        {/* Regular messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isOwn ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                message.isOwn
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={`text-xs mt-1 ${
                  message.isOwn ? "text-green-100" : "text-gray-400"
                }`}
              >
                {formatTime(message.timestamp)}
                {message.isScheduled && (
                  <span className="ml-2">📅 Scheduled</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
