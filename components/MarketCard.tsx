import { IMarket } from '@/models/market.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MarketCard = ({market}: {market: IMarket}) => {
  return (
    <div
      className="
        flex flex-col h-[350px] max-w-[400px] outline outline-slate-400 w-full rounded-lg
        hover:cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      {/* Image */}
      <Image
        src={market.imageUrl}
        alt="coverImage"
        width={400}
        height={225} 
        className="rounded-t-lg"
      />
      {/* Text */}
      <div className="flex flex-col p-4">
        <h1 className="text-lg font-semibold line-clamp-1 text-primary">{market.title}</h1>
        <p className="text-sm line-clamp-3">{market.description}</p>
        <p className="text-sm font-semibold line-clamp-1 pt-2 text-primary">By {market.artist}</p>
      </div>
    </div>
  )
}

export default MarketCard;
