import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import { useState } from "react";
import { IMarket } from '@/models/market.model';
import Image from 'next/image';

type MarketPopUpProps = {
  market: IMarket,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MarketPopUp = ({market, isOpen, setIsOpen}: MarketPopUpProps) => {

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: "auto",
      maxWidth: '1200px',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#FFFFFF",
      border: "4px solid #94a3b8",
      borderRadius: "10px", // Add this line for rounded border
      padding: "0px",
      boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.5)',
    },
  };

  return (
    <div className="gap-4 flex-col">
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles as Styles}
      >
      <div className="
      flex flex-col flex-grow h-full w-full
      transform transition hover:shadow-lg"
      >
        {/* Image */}
        <Image
          src={market.imageUrl}
          alt="coverImage"
          width={600}
          height={360}
          className="w-full object-contain"
          />
        {/* Text */}
        <div className="flex flex-col p-4">
          <h1 className="text-lg font-semibold line-clamp-1">{market.title}</h1>
          <p className="text-sm line-clamp-3">{market.description}</p>
          <p className="text-sm font-semibold line-clamp-1 pt-2 text-primary">By {market.artist}</p>
          <p className="text-sm font-semibold line-clamp-1 pt-2 text-primary">Contact Information: {market.contact}</p>
          <div className="flex gap-1">
            <p className="text-sm font-semibold line-clamp-1 pt-2 text-primary">Asking Price:</p>
            <p className="text-sm font-semibold line-clamp-1 pt-2 text-green-500">${market.price}</p>
          </div>
        </div>
      </div>
      </Modal>
    </div>
  );
};

export default MarketPopUp;