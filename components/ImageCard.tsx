"use client"

import {IImage} from '@/models/image.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useState} from 'react'

const ImageCard = ({image}: {image: IImage}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <Link href={`/images/${image._id}`}>
        <div className="">
            <div className="overflow-hidden rounded-lg">
                {/* Image */}
                <Image 
                src= {image.src}
                alt="coverImage"
                width={600}
                height={360}
                className="w-full object-contain rounded-lg cursor-pointer hover:scale-105 duration-200"
                onClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        </Link>
        </>
    )
}

export default ImageCard;