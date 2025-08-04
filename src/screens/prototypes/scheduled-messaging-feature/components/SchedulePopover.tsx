import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import { DateTimePicker } from "./DateTimePicker";

interface SchedulePopoverProps {
  messageText: string;
  onConfirm: (scheduledFor: Date) => void;
  onClose: () => void;
}

export function SchedulePopover({
  messageText,
  onConfirm,
  onClose,
}: SchedulePopoverProps) {
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const getScheduledTime = (minutes: number) => {
    const now = new Date();
    return new Date(now.getTime() + minutes * 60 * 1000);
  };

  const handleQuickSchedule = (minutes: number) => {
    const scheduledTime = getScheduledTime(minutes);
    onConfirm(scheduledTime);
    onClose();
  };

  const handleCustomConfirm = (date: Date) => {
    onConfirm(date);
    setShowCustomPicker(false);
    onClose();
  };

  const formatTime = (minutes: number) => {
    const date = getScheduledTime(minutes);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <div className="p-4 space-y-4">
        <div className="text-sm text-gray-200 font-medium">
          Schedule Message
        </div>

        <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300">
          "{messageText}"
        </div>

        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-left hover:bg-gray-800 text-white"
            onClick={() => handleQuickSchedule(30)}
          >
            <Clock className="h-4 w-4 text-blue-400" />
            <div>
              <div className="font-medium">30 minutes</div>
              <div className="text-xs text-gray-400">{formatTime(30)}</div>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-left hover:bg-gray-800 text-white"
            onClick={() => handleQuickSchedule(60)}
          >
            <Clock className="h-4 w-4 text-blue-400" />
            <div>
              <div className="font-medium">1 hour</div>
              <div className="text-xs text-gray-400">{formatTime(60)}</div>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-left hover:bg-gray-800 text-white"
            onClick={() => handleQuickSchedule(24 * 60)}
          >
            <Clock className="h-4 w-4 text-blue-400" />
            <div>
              <div className="font-medium">1 day</div>
              <div className="text-xs text-gray-400">
                {getScheduledTime(24 * 60).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-left hover:bg-gray-800 text-white"
            onClick={() => setShowCustomPicker(true)}
          >
            <Calendar className="h-4 w-4 text-blue-400" />
            <div>
              <div className="font-medium">Custom</div>
              <div className="text-xs text-gray-400">
                Choose specific date & time
              </div>
            </div>
          </Button>
        </div>
      </div>

      {showCustomPicker && (
        <DateTimePicker
          isOpen={showCustomPicker}
          onClose={() => {
            setShowCustomPicker(false);
            onClose();
          }}
          onConfirm={handleCustomConfirm}
          messageText={messageText}
        />
      )}
    </>
  );
}
