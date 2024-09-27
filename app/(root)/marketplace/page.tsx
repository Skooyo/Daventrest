import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import MarketCard from "@/components/MarketCard";

export default function Home() {
  return (
    <div className="w-full h-full items-center flex-col p-10">
      
      {/* Header */}
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-semibold">Marketplace</h1>
        <UserButton />
      </div>

      <div className="grid grid-cols-3 w-full h-full mt-6 gap-6">
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </div>

    </div>
  );
}
