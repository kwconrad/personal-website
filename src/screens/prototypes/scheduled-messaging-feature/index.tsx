import { useState } from "react";
import { MessageThread } from "./components/MessageThread";
import { MessageInput } from "./components/MessageInput";
import { ScheduledMessagesPanel } from "./components/ScheduledMessagesPanel";
import { ArrowLeft, MoreVertical, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isOwn: boolean;
  isScheduled?: boolean;
  scheduledFor?: Date;
}

export interface ScheduledMessage {
  id: string;
  text: string;
  scheduledFor: Date;
  createdAt: Date;
}

export default function ScheduledMessagingPrototype() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! How are you doing?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isOwn: false,
    },
    {
      id: "2",
      text: "I'm good! Just working on some new features.",
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      isOwn: true,
    },
    {
      id: "3",
      text: "That sounds exciting! What kind of features?",
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      isOwn: false,
    },
    {
      id: "4",
      text: "Scheduled messaging is one of them. You can send messages to yourself or others at a later time.",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      isOwn: true,
    },
  ]);

  const [scheduledMessages, setScheduledMessages] = useState<
    ScheduledMessage[]
  >([]);
  const [showScheduledPanel, setShowScheduledPanel] = useState(false);

  const handleSendMessage = (text: string, scheduledFor?: Date) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      isOwn: true,
      isScheduled: !!scheduledFor,
      scheduledFor,
    };

    if (scheduledFor) {
      const scheduledMessage: ScheduledMessage = {
        id: newMessage.id,
        text,
        scheduledFor,
        createdAt: new Date(),
      };
      setScheduledMessages((prev) => [...prev, scheduledMessage]);
    } else {
      setMessages((prev) => [...prev, newMessage]);
    }
  };

  const handleScheduleMessage = (text: string, scheduledFor: Date) => {
    handleSendMessage(text, scheduledFor);
  };

  const handleEditScheduledMessage = (
    id: string,
    newText: string,
    newDate: Date
  ) => {
    setScheduledMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, text: newText, scheduledFor: newDate } : msg
      )
    );
  };

  const handleDeleteScheduledMessage = (id: string) => {
    setScheduledMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <main className="flex-col h-full flex-grow flex items-center justify-center">
      <div className="h-full md:w-[414px] w-full flex flex-col bg-black text-white max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Link to="/case-study/native-scheduled-messaging-in-whatsapp">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">M</span>
              </div>
              <div>
                <h2 className="font-medium text-white">Mom</h2>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-hidden">
          <MessageThread messages={messages} />
        </div>

        {/* Scheduled Messages Icon */}
        {scheduledMessages.length > 0 && (
          <button
            className="p-2 w-full flex justify-center items-center gap-2 py-2 rounded-md"
            onClick={() => setShowScheduledPanel(true)}
          >
            <Clock className="h-4 w-4" />
            <span>View scheduled messages</span>
            <div className="text-neutral-50 font-medium text-[11px] h-5 w-5 flex items-center justify-center bg-neutral-600 rounded-md">
              {scheduledMessages.length}
            </div>
          </button>
        )}

        {/* Message Input */}
        <MessageInput
          onSendMessage={handleSendMessage}
          onSchedulePress={handleScheduleMessage}
        />

        {/* Scheduled Messages Panel */}
        <ScheduledMessagesPanel
          isOpen={showScheduledPanel}
          onClose={() => setShowScheduledPanel(false)}
          scheduledMessages={scheduledMessages}
          onEdit={handleEditScheduledMessage}
          onDelete={handleDeleteScheduledMessage}
        />
      </div>
    </main>
  );
}
