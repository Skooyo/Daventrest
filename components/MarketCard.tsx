import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MarketCard = () => {
  return (
    <div
      className="
        flex flex-col h-[350px] max-w-[400px] outline outline-slate-400 w-full rounded-lg
        hover:cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      {/* Image */}
      <Image
        src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fdvt15arq81k81.jpg%3Fwidth%3D3264%26format%3Dpjpg%26auto%3Dwebp%26s%3D4f673a86caf168a7e71d7d4efe18240512909ba0&f=1&nofb=1&ipt=6ca5ed94b06add13da578a5ef05f69aa39bb0b703fdc9e8001bb7484f651942e&ipo=images"}
        alt="coverImage"
        width={400}
        height={225} 
        className="rounded-t-lg"
      />
      {/* Text */}
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-semibold line-clamp-1">{"Test card"}</h1>
        <p className="text-sm line-clamp-3">{"Test description"}</p>
      </div>
    </div>
  )
}

export default MarketCard;
