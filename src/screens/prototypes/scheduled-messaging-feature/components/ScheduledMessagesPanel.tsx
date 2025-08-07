import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit2, Trash2, X } from "lucide-react";
import { ScheduledMessage } from "..";
import { EditScheduledMessageModal } from "./EditScheduledMessageModal";

interface ScheduledMessagesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  scheduledMessages: ScheduledMessage[];
  onEdit: (id: string, newText: string, newDate: Date) => void;
  onDelete: (id: string) => void;
}

export function ScheduledMessagesPanel({
  isOpen,
  onClose,
  scheduledMessages,
  onEdit,
  onDelete,
}: ScheduledMessagesPanelProps) {
  const [editingMessage, setEditingMessage] = useState<ScheduledMessage | null>(
    null
  );

  const formatScheduledTime = (date: Date) => {
    const now = new Date();
    const timeDiff = date.getTime() - now.getTime();

    if (timeDiff < 0) {
      return "Overdue";
    }

    const minutes = Math.floor(timeDiff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `in ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `in ${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      return "in less than a minute";
    }
  };

  const formatExactTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleEdit = (message: ScheduledMessage) => {
    setEditingMessage(message);
  };

  const handleEditConfirm = (newText: string, newDate: Date) => {
    if (editingMessage) {
      onEdit(editingMessage.id, newText, newDate);
      setEditingMessage(null);
    }
  };

  const sortedMessages = [...scheduledMessages].sort(
    (a, b) => a.scheduledFor.getTime() - b.scheduledFor.getTime()
  );

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="bottom"
          className="bg-neutral-900 border-neutral-700 text-white h-[70vh] max-w-[414px] mx-auto"
        >
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-neutral-400" />
                <span>Scheduled Messages</span>
                <Badge
                  variant="secondary"
                  className="bg-neutral-700 text-neutral-300"
                >
                  {scheduledMessages.length}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </SheetTitle>
          </SheetHeader>

          <div className="space-y-3 overflow-y-auto max-h-[50vh]">
            {sortedMessages.length === 0 ? (
              <div className="text-center py-8 text-neutral-400">
                <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No scheduled messages</p>
                <p className="text-sm">
                  Long press the send button to schedule a message
                </p>
              </div>
            ) : (
              sortedMessages.map((message) => (
                <div
                  key={message.id}
                  className="bg-neutral-800 rounded-t-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm mb-2">{message.text}</p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-neutral-400 text-neutral-200 text-xs"
                        >
                          {formatScheduledTime(message.scheduledFor)}
                        </Badge>
                        <span className="text-xs text-neutral-100">
                          {formatExactTime(message.scheduledFor)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(message)}
                      className="text-neutral-400 hover:bg-neutral-700 h-8"
                    >
                      <Edit2 className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDelete(message.id)}
                      className="text-red-400 hover:bg-neutral-700 h-8"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </SheetContent>
      </Sheet>

      {editingMessage && (
        <EditScheduledMessageModal
          message={editingMessage}
          isOpen={!!editingMessage}
          onClose={() => setEditingMessage(null)}
          onConfirm={handleEditConfirm}
        />
      )}
    </>
  );
}
