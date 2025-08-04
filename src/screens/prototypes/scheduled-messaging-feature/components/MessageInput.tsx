import { useState, useRef } from "react";
import {
  Send,
  Smile,
  Paperclip,
  Camera,
  Mic,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
    <div className="p-4 bg-black border-t border-gray-800">
      {/* Toolbar */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Smile className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Camera className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <Mic className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-3">
        <Smile className="h-5 w-5 text-gray-400" />
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message"
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full pr-12"
          />
        </div>

        <Popover
          open={showSchedulePopover}
          onOpenChange={setShowSchedulePopover}
        >
          <PopoverTrigger asChild>
            <Button
              size="icon"
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
            className="w-80 p-0 bg-gray-900 border-gray-700 text-white"
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
