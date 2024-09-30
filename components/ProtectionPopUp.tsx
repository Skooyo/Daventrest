import React from 'react';
import Modal from 'react-modal';
import { Styles } from 'react-modal';
import { useState } from "react";
import { IMarket } from '@/models/market.model';
import Image from 'next/image';

type ProtectionPopUpProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProtectionPopUp = ({isOpen, setIsOpen}: ProtectionPopUpProps) => {

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
        {/* Text */}
        <div className="flex flex-col p-4">
          <h1 className="text-xl font-semibold line-clamp-1 text-primary">Our Protection Protocol</h1>
          <p className="text-md pt-2">To protect user images, we will utilize a protection algorithm that "poisons" the user's image.
            This "poisoning" process is simply adding a layer of noise to the image that is imperceptible to the human eye. When doing so, this can prevent the image from being
            utilized in AI models as it can ruin their traning process. Furthermore, we will also add additional information to the image that can be used to track the image's
            origin through metadata. By doing this, we can ensure that the image is protected from any unauthorized use.
          </p>
        </div>
      </div>
      </Modal>
    </div>
  );
};

export default ProtectionPopUp;