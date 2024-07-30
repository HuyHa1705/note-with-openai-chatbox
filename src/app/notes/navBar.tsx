"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.jpg"; // Ensure the path is correct
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/note" className="flex items-center gap-1">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="font-bold">Note</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            afterSwitchSessionUrl="/"
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <ThemeToggleButton />
          <Button onClick={() => setShowAddEditNoteDialog(true)}>
            <Plus size={20} className="" />
            add note
          </Button>
          <AIChatButton />
        </div>
      </div>
      <AddNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </div>
  );
}
