import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

interface DateTimePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: Date) => void;
  messageText: string;
}

export function DateTimePicker({
  isOpen,
  onClose,
  onConfirm,
  messageText,
}: DateTimePickerProps) {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(
    now.toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState(
    `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`
  );

  const handleConfirm = () => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    const [hours, minutes] = selectedTime.split(":").map(Number);

    const scheduledDate = new Date(year, month - 1, day, hours, minutes);

    if (scheduledDate <= new Date()) {
      alert("Please select a future date and time");
      return;
    }

    onConfirm(scheduledDate);
  };

  const formatPreview = () => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    const [hours, minutes] = selectedTime.split(":").map(Number);
    const date = new Date(year, month - 1, day, hours, minutes);

    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span>Custom Schedule</span>
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Select a custom date and time to schedule your message
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300">
            "{messageText}"
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="date" className="text-sm font-medium">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={now.toISOString().split("T")[0]}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-sm font-medium">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">
                Message will be sent:
              </div>
              <div className="text-sm font-medium">{formatPreview()}</div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
