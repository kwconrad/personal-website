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
import { Textarea } from "@/components/ui/textarea";
import { ScheduledMessage } from "..";

interface EditScheduledMessageModalProps {
  message: ScheduledMessage;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newText: string, newDate: Date) => void;
}

export function EditScheduledMessageModal({
  message,
  isOpen,
  onClose,
  onConfirm,
}: EditScheduledMessageModalProps) {
  const [editedText, setEditedText] = useState(message.text);
  const [editedDate, setEditedDate] = useState(
    message.scheduledFor.toISOString().split("T")[0]
  );
  const [editedTime, setEditedTime] = useState(
    `${String(message.scheduledFor.getHours()).padStart(2, "0")}:${String(
      message.scheduledFor.getMinutes()
    ).padStart(2, "0")}`
  );

  const handleConfirm = () => {
    if (!editedText.trim()) {
      alert("Message cannot be empty");
      return;
    }

    const [year, month, day] = editedDate.split("-").map(Number);
    const [hours, minutes] = editedTime.split(":").map(Number);

    const newScheduledDate = new Date(year, month - 1, day, hours, minutes);

    if (newScheduledDate <= new Date()) {
      alert("Please select a future date and time");
      return;
    }

    onConfirm(editedText.trim(), newScheduledDate);
  };

  const formatPreview = () => {
    const [year, month, day] = editedDate.split("-").map(Number);
    const [hours, minutes] = editedTime.split(":").map(Number);
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
          <DialogTitle>Edit Scheduled Message</DialogTitle>
          <DialogDescription className="text-gray-400">
            Modify the message content and scheduled time
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              placeholder="Enter your message..."
              className="mt-1 bg-gray-800 border-gray-700 text-white resize-none"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-date" className="text-sm font-medium">
                Date
              </Label>
              <Input
                id="edit-date"
                type="date"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <Label htmlFor="edit-time" className="text-sm font-medium">
                Time
              </Label>
              <Input
                id="edit-time"
                type="time"
                value={editedTime}
                onChange={(e) => setEditedTime(e.target.value)}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">
              Message will be sent:
            </div>
            <div className="text-sm font-medium">{formatPreview()}</div>
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
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
