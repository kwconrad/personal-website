import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Send, Smile } from "lucide-react";
import React, { useRef, useState } from "react";
import { SchedulePopover } from "./SchedulePopover";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  onSchedulePress: (text: string, scheduledFor: Date) => void;
}

export function MessageInput({
  onSendMessage,
  onSchedulePress,
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [showSchedulePopover, setShowSchedulePopover] = useState(false);
  const longPressTimer = useRef<number | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);

  const handleSendPress = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const startLongPress = () => {
    setIsLongPressing(false);
    longPressTimer.current = setTimeout(() => {
      if (message.trim()) {
        setIsLongPressing(true);
        setShowSchedulePopover(true);
      }
    }, 500); // 500ms for long press
  };

  const endLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }

    // Only send message if it wasn't a long press and we have text
    if (!isLongPressing && message.trim()) {
      handleSendPress();
    }

    setIsLongPressing(false);
  };

  const cancelLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    setIsLongPressing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendPress();
    }
  };

  const handleScheduleConfirm = (scheduledFor: Date) => {
    if (message.trim()) {
      onSchedulePress(message.trim(), scheduledFor);
      setShowSchedulePopover(false);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-black border-t border-neutral-800">
      {/* Message Input */}
      <div className="flex items-center gap-3">
        <Smile className="h-5 w-5 text-neutral-400" />
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message"
            className="h-10 px-4 w-full bg-neutral-800 text-white placeholder-neutral-300 focus:outline-none focus:ring-0 rounded-md pr-12"
          />
        </div>

        <Popover
          open={showSchedulePopover}
          onOpenChange={setShowSchedulePopover}
        >
          <PopoverTrigger asChild>
            <Button
              size="icon"
              className="bg-green-600 hover:bg-green-700 rounded-full"
              disabled={!message.trim()}
              onMouseDown={startLongPress}
              onMouseUp={endLongPress}
              onMouseLeave={cancelLongPress}
              onTouchStart={startLongPress}
              onTouchEnd={endLongPress}
              onTouchCancel={cancelLongPress}
            >
              <Send className="h-4 w-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="top"
            align="end"
            className="w-80 p-0 bg-neutral-900 border-neutral-700 text-white"
            sideOffset={8}
          >
            <SchedulePopover
              messageText={message}
              onConfirm={handleScheduleConfirm}
              onClose={() => setShowSchedulePopover(false)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
