import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import MarketCard from "@/components/MarketCard";
import { MarketMockData } from "@/data/MockData";

export default function Home() {
  return (
    <div className="w-full h-full items-center flex-col pt-10 pl-5">
      
      {/* Header */}
      <div className="w-full flex justify-between pr-10">
        <h1 className="text-primary text-3xl font-semibold">Marketplace</h1>
        <UserButton />
      </div>

      <div className="grid grid-cols-3 2xl:grid-cols-4 w-full h-fit mt-6 gap-6 pb-20 bg-red pr-5">
        {MarketMockData.map((market) => (
          <MarketCard key={market._id} market={market} />
        ))}
      </div>

    </div>
  );
}
