import { useState } from "react";
import AIChatBox from "./AIChatbox";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export default function AIChatButton() {
  const [chatboxOpen, setChatboxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatboxOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat
      </Button>
      <AIChatBox open={chatboxOpen} onclose={() => setChatboxOpen(false)} />
    </>
  );
}
