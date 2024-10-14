"use client"

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Masonry } from '@mui/lab';
import { mockImages } from "@/data/MockData";
import { LuUpload } from "react-icons/lu";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

export default function Home({ params: { id } }: { params: { id: string } }) {
    
    const router = useRouter();
    
    function findImageByID(id: string){
        return mockImages.find(image => image._id === id);
    }

    const img_object = findImageByID(id);


    return (
        <div className="w-full h-full text-center items-center justify-center flex-col pt-10 pl-5">
            
            {/* Header */}
            <div className="w-full flex justify-between pr-10">
                <div className="flex items-center duration-100 hover:cursor-pointer" onClick={() => router.back()}>
                    <IoMdArrowRoundBack size={32} style={{ color: "#1B2EA8" }} />
                    <h1 className="text-primary text-3xl ml-2 font-semibold">Back</h1>
                </div>
                <UserButton />
            </div>

            {/* Focused Image */}
            <div className="flex items-center justify-center h-[60vh] p-10">
                <div className="flex justify-center  rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl duration-300">
                    {/* Image */}
                    <div className="m-5 h-[60vh] overflow-y-auto">
                        <Image
                            src={img_object?.src || mockImages[0].src}  // If image not found, use first image
                            alt="coverImage"
                            width={600}
                            height={360}
                            className="h-full w-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col w-72 pt-10 pr-10 items-start text-left">
                            <h1 className="text-4xl mb-3 font-semibold text-balance">{img_object?.title}</h1>
                            <p className="text-xl mb-8">{img_object?.description}</p>
                            <p className="text-xl font-semibold pt-2 text-primary">Uploaded by {img_object?.artist}</p>
                            
                            <>
                                {img_object?.protected ? <p className="font-semibold text-red-400">This image is protected*</p> : null}
                            </>
                        </div>

                        <div className="flex items-end justify-end m-5">
                            <div className="flex justify-between w-40">
                                <CiBookmark size={40} className="hover:cursor-pointer"/>
                                <CiShare2 size={40} className="hover:cursor-pointer"/>
                                <CiLink size={40} className="hover:cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full h-full mt-4">
                <h1 className="text-xl mt-16 mb-3 text-primary font-semibold">Explore more</h1>
                <Masonry columns={4} spacing={1}>
                    {mockImages.map((img) => (
                        img._id === id ? null : <ImageCard key={img._id} image={img} />
                    ))}
                </Masonry>
            </div>

            <div className='fixed bottom-5 right-15 w-4/5 flex items-end justify-end'>
                <Link 
                    className='rounded-3xl py-4 px-4 text-4xl bg-[#ECE6F0] text-white items-center flex justify-center'
                    href="/upload"
                >
                    <LuUpload style={{color: "#1B2EA8"}}/>
                </Link>
            </div>
        </div>
    );
}
