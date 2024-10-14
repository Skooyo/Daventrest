"use client"

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Masonry } from '@mui/lab';
import { mockImages } from "@/data/MockData";
import { LuUpload } from "react-icons/lu";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import { useEffect, useState } from "react";

export default function Home() {
  const columns = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 5,
    xl: 5,
    xxl: 5,
  }

  return (
    <div className="w-full h-full items-center flex-col pt-10 pl-5">
      
      {/* Header */}
      <div className="w-full flex justify-between pr-10">
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
        
        <Masonry columns={4} spacing={1}>
          {mockImages.map((img) => (
            <ImageCard key={img._id} image={img} />
          ))}
        </Masonry>
      </div>

      <div className='fixed bottom-5 right-15 w-4/5 flex items-end justify-end'>
        <Link 
        className='rounded-3xl py-4 px-4 text-4xl bg-[#ECE6F0] text-white items-center flex justify-center '
        href="/upload"
        >
          <LuUpload style={{color: "#1B2EA8"}}/>
        </Link>
      </div>


    </div>
  );
}
