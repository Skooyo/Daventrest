"use client";

import { IMarket } from '@/models/market.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import MarketPopUp from './MarketPopUp'

const MarketCard = ({market}: {market: IMarket}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="w-full h-full">
      <div className="
      flex flex-col flex-grow h-[350px] min-w-[33%] w-full outline outline-slate-400 rounded-lg
      hover:cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
      onClick = {() => setIsOpen(true)}
      >
        {/* Image */}
        <Image
          src={market.imageUrl}
          alt="coverImage"
          width={400}
          height={225}
          className="rounded-t-lg w-full h-[225px] object-cover"
          />
        {/* Text */}
        <div className="flex flex-col p-4">
          <h1 className="text-lg font-semibold line-clamp-1 text-primary">{market.title}</h1>
          <p className="text-sm line-clamp-3">{market.description}</p>
          <p className="text-sm font-semibold line-clamp-1 pt-2 text-primary">By {market.artist}</p>
        </div>
      </div>
      <MarketPopUp market={market} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    </>
  )
}

export default MarketCard;
