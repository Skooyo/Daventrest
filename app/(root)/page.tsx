"use client"

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Masonry } from "@tx666/masonry";
import { mockImages } from "@/data/MockData";

export default function Home() {
  const columns = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 5,
  }

  return (
    <div className="w-full h-full items-center flex-col p-10">
      
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-semibold">Your discovery dashboard</h1>
        <UserButton />
      </div>

      {/* Tags (hardcoded) */}
      <div className="w-full flex gap-2 pt-4">
        <p className="bg-[#4F378B] text-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center">✓ Photography</p>
        <p className="bg-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Fantasy</p>
        <p className="bg-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Anime</p>
        <p className="bg-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Sci-Fi</p>
        <p className="bg-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Motivation</p>
        <p className="bg-[#F5F5F5] rounded-lg py-1 px-2 flex gap-4 items-center opacity-70">Fashion</p>
      </div>

      <div className="w-full h-full mt-4">
        <Masonry data={mockImages} column = {columns} />
      </div>

    </div>
  );
}
