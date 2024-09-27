import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full h-full items-center flex-col p-10">
      
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-semibold">Your discovery dashboard</h1>
        <UserButton />
      </div>

      {/* Tags (hardcoded) */}
      <div className="w-full flex h-full gap-2 pt-4">
        <p className="bg-[#4F378B] text-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center">✓ Photography</p>
        <p className="bg-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Fantasy</p>
        <p className="bg-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Anime</p>
        <p className="bg-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Sci-Fi</p>
        <p className="bg-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Motivation</p>
        <p className="bg-[#F5F5F5] h-full rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Fashion</p>
      </div>

    {/* initial commit things */}

    </div>
  );
}
