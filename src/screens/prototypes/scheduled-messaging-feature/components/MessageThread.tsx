import { ScrollArea } from "@/components/ui/scroll-area";
import { clsx } from "clsx";
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
            className={clsx("flex", {
              "justify-end": message.isOwn,
              "justify-start": !message.isOwn,
            })}
          >
            <div
              className={clsx("max-w-[75%] rounded-2xl px-4 py-2", {
                "bg-green-600 text-white": message.isOwn,
                "bg-gray-800 text-white": !message.isOwn,
              })}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={clsx("text-xs mt-1", {
                  "text-green-100": message.isOwn,
                  "text-gray-400": !message.isOwn,
                })}
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
