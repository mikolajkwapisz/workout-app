"use client";
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import MobileOpenMenu from "./MobileOpenMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()

  useEffect(() => {
    if(isOpen) {
      document.documentElement.style.overflow = "hidden"; // Disable scroll
    } else {
      document.documentElement.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.documentElement.style.overflow = "auto"; // Cleanup 
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <div className="flex justify-between items-center h-full px-4">
      {isOpen && <MobileOpenMenu isOpen={isOpen} setIsOpen = {setIsOpen}/>}

      <div className="flex justify-between items-center w-full z-50">
        {isOpen ? (
          <>
            <button
              className="hover:text-custom-accent hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose size={35} />
            </button>
          </>
        ) : (
          <>
            <button
              className="hover:text-custom-accent hover:cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <AiOutlineMenu size={35} />
            </button>
          </>
        )}
        <button className="z-50">
          <Link href="/login" className="hover:text-custom-accent">
            <AiOutlineUser size={35} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
