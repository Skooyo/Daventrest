"use client"

import {IImage} from '@/models/image.model'
import Image from 'next/image'
import React from 'react'
import {useState} from 'react'
import ImagePopUp from './ImagePopUp'

const ImageCard = ({image}: {image: IImage}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
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
            <ImagePopUp image={image} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        </>
    )
}

export default ImageCard;