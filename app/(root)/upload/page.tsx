"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import MarketCard from "@/components/MarketCard";
import { MarketMockData } from "@/data/MockData";
import FileUploader from "@/components/FileUploader";
import { uploadFile } from "@/utils/ipfs";
import { useState } from "react";
import ImageForm from "@/components/ImageForm";

export default function Home() {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    files: [] as File[],
    imageUrl: "",
    description: "",
  })

  const uploadToIpfs = async (file: any) => {
    console.log("Uploading file to ipfs");
    console.log(file);
    setIsUploading(true);
    const resData = await uploadFile(file);
    const imageLink = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`
    console.log("IPFS Hash is:", imageLink);
    setIsUploading(false);
  }

  return (
    <div className="w-full h-full items-center flex-col p-10">
      
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-semibold">Upload your image</h1>
        <UserButton />
      </div>

          <ImageForm />

    </div>
  );
}
