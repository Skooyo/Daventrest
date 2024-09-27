"use client";

import Link from "next/link";
import { links } from "@/constants/nav-links";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import { IoRadio } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="h-screen w-full p-5 bg-white drop-shadow-2xl">
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-center h-fit">
          <Image src="/assets/daventrest.png" width={200} height={200} alt="logo image"/>
        </div>
        <p className="text-xl font-semibold">Discover</p>
        <NavLinks />
        <div className="py-4 flex-col w-full h-full">
        <p className="text-xl font-semibold">Library</p>
          <div className="p-1 py-4 w-full h-full flex gap-4 items-center">
            <FaListUl size={16} style={{ color: "#1B2EA8" }}/>
            <p className="rounded-lg text-lg">My Pictures</p>
          </div>
          <div className="p-1 py-4 w-full h-full flex gap-3 items-center">
            <FaRegSmile size={20} style={{ color: "#1B2EA8" }}/>
            <p className="rounded-lg text-lg">Followed Creators</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href != "/browse" ? link.href : "/"}
            className={`${
              pathname === link.href
                ? "bg-[#F7F7F7] h-full rounded-lg p-1 flex gap-4 items-center"
                : "rounded-lg p-1 flex gap-4 items-center"
            }`}
          >
            {link.name == "Home" && <IoHomeOutline size={20} style={{ color: "#1B2EA8" }}/>}
            {link.name == "Browse" && <GrSearch size={20} style={{ color: "#1B2EA8" }}/>}
            {link.name == "Marketplace" && <IoRadio size={20} style={{ color: "#1B2EA8" }}/>}
            <p className={`text-lg`}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
