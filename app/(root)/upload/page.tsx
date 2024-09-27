import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import MarketCard from "@/components/MarketCard";
import { MarketMockData } from "@/data/MockData";

export default function Home() {
  return (
    <div className="w-full h-full items-center flex-col p-10">
      
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-semibold">Upload your image</h1>
        <UserButton />
      </div>

    </div>
  );
}
