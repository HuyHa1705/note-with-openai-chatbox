import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Button } from "./ui/button";
import { Bot, TrashIcon, XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef } from "react";
interface AIChatboxProps {
  open: boolean;
  onclose: () => void;
}

export default function AIChatbox({ open, onclose }: AIChatboxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const isMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <Button variant="ghost" onClick={onclose} className="mb-1 ms-auto block">
        <XCircle size={30} />
      </Button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((messages) => (
            <ChatMessage messages={messages} key={messages.id} />
          ))}
          {isLoading && isMessageIsUser && (
            <ChatMessage
              messages={{
                role: "assistant",
                content: "thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              messages={{
                role: "assistant",
                content: "something went wrong, please try again",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full items-center justify-center gap-3">
              <Bot />
              Ask AI any question about your note
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Button
            title="clear chat"
            variant="outline"
            size="icon"
            className="shrink-0"
            type="button"
            onClick={() => setMessages([])}
          >
            <TrashIcon />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="say something..."
            ref={inputRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage({
  messages: { role, content },
}: {
  messages: Pick<Message, "role" | "content">;
}) {
  const { user } = useUser();

  const isAIMessages = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAIMessages ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAIMessages && <Bot className="mr-2 shrink-0" />}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAIMessages ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {content}
      </p>
      {!isAIMessages && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="user Image"
          width={100}
          height={100}
          className="ml-2 h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
}
