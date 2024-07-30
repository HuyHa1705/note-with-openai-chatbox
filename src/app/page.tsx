import Image from "next/image";
import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId }: { userId: string | null } = auth();
  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          NotesPage-chatbot
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note app with an AI intergation, build with openAI,
        pinecon, nextJS, shadcn UI, clerk and more.
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">open</Link>
      </Button>
    </main>
  );
}
